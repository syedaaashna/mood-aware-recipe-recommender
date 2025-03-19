
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Maximize, Minimize, Brain, Sparkles, Zap, Bot, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { getChatbotResponse } from '@/utils/moodRecipeData';
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isAiEnhanced?: boolean;
}

interface ChatBotProps {
  currentMood?: string | null;
}

const ChatBot = ({ currentMood }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestionChips, setSuggestionChips] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const recognitionRef = useRef<any>(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setMessage(transcript);
        
        // Auto-submit after speech recognition
        setTimeout(() => {
          handleSendMessage(undefined, transcript);
          setIsRecording(false);
        }, 500);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
        toast({
          title: "Voice Input Error",
          description: "Could not recognize speech. Please try again or type your message.",
          variant: "destructive"
        });
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [toast]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Hello! I'm your AI-powered recipe assistant. I can help you find recipes based on your mood or answer questions about cooking. How can I help you today?",
        sender: 'bot',
        timestamp: new Date(),
        isAiEnhanced: true
      };
      setMessages([welcomeMessage]);
      setSuggestionChips([
        "What's a good breakfast?",
        "Find vegetarian recipes",
        "How do I make pasta?"
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (currentMood && isOpen) {
      const moodResponse = getChatbotResponse(currentMood);
      
      setTimeout(() => {
        setIsTyping(true);
        
        setTimeout(() => {
          const newMessage: Message = {
            id: Date.now().toString(),
            text: moodResponse,
            sender: 'bot',
            timestamp: new Date(),
            isAiEnhanced: true
          };
          
          setMessages(prev => [...prev, newMessage]);
          setIsTyping(false);
          
          // Set suggestion chips based on mood
          if (currentMood.includes('happy')) {
            setSuggestionChips(["Show celebratory recipes", "Dessert ideas", "Party food"]);
          } else if (currentMood.includes('sad')) {
            setSuggestionChips(["Comfort food recipes", "Chocolate desserts", "Easy soups"]);
          } else {
            setSuggestionChips(["What ingredients work well together?", "Quick dinner ideas", "Healthy options"]);
          }

          // Read out response if not muted
          if (!isMuted) {
            speakText(moodResponse);
          }
        }, 1500);
      }, 500);
    }
  }, [currentMood, isOpen, isMuted]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
      toast({
        title: "Chef Assistant Activated",
        description: "Ask me anything about recipes and cooking!",
      });
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    // Stop any ongoing voice recognition
    if (isRecording && recognitionRef.current) {
      recognitionRef.current.abort();
      setIsRecording(false);
    }
  };

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      toast({
        title: "Voice Input Not Available",
        description: "Speech recognition is not supported in your browser.",
        variant: "destructive"
      });
      return;
    }

    if (isRecording) {
      recognitionRef.current.abort();
      setIsRecording(false);
    } else {
      setMessage('');
      recognitionRef.current.start();
      setIsRecording(true);
      toast({
        title: "Listening...",
        description: "Speak clearly into your microphone.",
      });
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    toast({
      title: isMuted ? "Voice Responses Enabled" : "Voice Responses Disabled",
      description: isMuted ? "The assistant will now speak responses." : "The assistant will no longer speak responses.",
    });
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window && !isMuted) {
      const utterance = new SpeechSynthesisUtterance(text);
      // Find an English voice
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(voice => voice.lang.includes('en-'));
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const processUserMessage = (userMessage: string) => {
    // Keywords that the chatbot can recognize
    const keywordMap: Record<string, string[]> = {
      recipe: ['recipe', 'cook', 'food', 'meal', 'dish', 'dinner', 'lunch', 'breakfast'],
      greeting: ['hello', 'hi', 'hey', 'howdy', 'greetings'],
      thanks: ['thank', 'thanks', 'appreciate', 'grateful'],
      mood: ['mood', 'feel', 'feeling', 'emotion'],
      ingredient: ['ingredient', 'have', 'using', 'use', 'with'],
      diet: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'keto', 'paleo', 'diet'],
      spicy: ['spicy', 'hot', 'heat', 'chili', 'pepper'],
      sweet: ['dessert', 'sweet', 'cake', 'cookie', 'chocolate', 'ice cream'],
      suggestion: ['suggest', 'recommend', 'what should', 'idea', 'recommendation'],
      ai: ['ai', 'artificial intelligence', 'machine learning', 'smart', 'analyze'],
      quick: ['quick', 'fast', 'easy', 'simple', 'under 30', 'busy'],
      healthy: ['healthy', 'nutritious', 'low calorie', 'diet', 'nutrition', 'balanced'],
      help: ['help', 'how to', 'guide', 'explain', 'tell me'],
      time: ['time', 'minutes', 'hours', 'quick', 'fast', 'slow'],
      hindi: ['hindi', 'india', 'indian', 'voice', 'guidance']
    };

    // Check which categories the message falls into
    const categories: string[] = [];
    const lowerMessage = userMessage.toLowerCase();
    
    Object.entries(keywordMap).forEach(([category, keywords]) => {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        categories.push(category);
      }
    });

    // Determine if we should mark response as AI-enhanced
    const isComplexQuery = categories.length >= 2 || 
                          lowerMessage.length > 20 || 
                          categories.includes('ai') ||
                          lowerMessage.includes('?');

    return {
      categories,
      isComplexQuery
    };
  };

  const handleSendMessage = (e?: React.FormEvent, suggestedMessage?: string) => {
    if (e) e.preventDefault();
    
    const messageToSend = suggestedMessage || message;
    
    if (messageToSend.trim() === '') return;
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: messageToSend,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setMessage('');
    setIsTyping(true);
    
    // Process the user message to determine response type
    const { categories, isComplexQuery } = processUserMessage(messageToSend);
    
    setTimeout(() => {
      let botResponse = "I'm still learning about cooking. Could you ask me about recipes, ingredients, or moods?";
      let newSuggestionChips: string[] = [
        "What's a good dinner?",
        "Recipe ideas",
        "Cooking techniques"
      ];
      
      // Generate response based on recognized categories
      if (categories.includes('hindi')) {
        botResponse = "हम कई भारतीय व्यंजनों के लिए हिंदी में वॉयस गाइडेंस प्रदान करते हैं! मसाला डोसा, बटर चिकन, या शाही पनीर के बारे में पूछें।";
        newSuggestionChips = ["मसाला डोसा रेसिपी", "बटर चिकन कैसे बनाएं", "शाही पनीर"];
      } else if (categories.includes('ai')) {
        botResponse = "I've analyzed thousands of recipes to create special AI-enhanced recipes! They have optimal ingredient combinations and cooking techniques. Our AI features include nutritional analysis, flavor pairing suggestions, and personalized cooking tips based on your preferences.";
        newSuggestionChips = ["Show AI recipes", "How does AI help cooking?", "Nutrition analysis"];
      } else if (categories.includes('recipe')) {
        botResponse = "I can help you find recipes! Try selecting a mood first, or you can ask me about specific ingredients or dishes. My AI analysis can suggest recipes with complementary flavor profiles and optimal cooking methods.";
        newSuggestionChips = ["Breakfast ideas", "Dinner recipes", "Quick meals"];
      } else if (categories.includes('greeting')) {
        botResponse = "Hello there! I'm your AI recipe assistant. How can I help with your cooking today? I can suggest recipes based on mood, ingredients, or dietary needs. I'm constantly learning new recipes and techniques!";
        newSuggestionChips = ["What can you do?", "Recipe suggestions", "Cooking help"];
      } else if (categories.includes('thanks')) {
        botResponse = "You're welcome! I'm happy to help. Let me know if you need anything else - I'm constantly learning new recipes and cooking techniques through advanced AI analysis of thousands of recipes.";
        newSuggestionChips = ["More recipe ideas", "Cooking techniques", "Ingredient substitutions"];
      } else if (categories.includes('mood')) {
        botResponse = "Your mood can greatly influence what foods might satisfy you. Try selecting a mood to see matching recipes! Each mood has several recipes designed to complement how you're feeling, with AI-optimized ingredient combinations for maximum satisfaction.";
        newSuggestionChips = ["I'm feeling happy", "I'm feeling sad", "I'm feeling energetic"];
      } else if (categories.includes('ingredient')) {
        botResponse = "I can suggest recipes based on ingredients. What ingredients do you have or would like to cook with? My AI analysis can help find optimal flavor combinations and suggest techniques to bring out the best in your ingredients.";
        newSuggestionChips = ["I have chicken", "Cooking with vegetables", "Using leftovers"];
      } else if (categories.includes('diet')) {
        botResponse = "We have many specialized diet options! Our AI can customize recipes for any dietary restriction while maintaining optimal nutrition and flavor. Try our AI-Balanced Mindful Bowl for a nutritionally complete vegetarian meal, or browse our specialized diet section.";
        newSuggestionChips = ["Vegetarian recipes", "Gluten-free options", "Keto-friendly meals"];
      } else if (categories.includes('spicy')) {
        botResponse = "If you enjoy spicy food, try our Rajasthani Laal Maas, Goan Pork Vindaloo, or Spicy Peanut Noodles! Our AI flavor analysis shows these have the perfect heat levels for maximum flavor without overwhelming spiciness.";
        newSuggestionChips = ["Medium spicy recipes", "Very spicy dishes", "Mild but flavorful"];
      } else if (categories.includes('sweet')) {
        botResponse = "For something sweet, our Decadent Chocolate Cake or Warm Apple Pie would be perfect choices! Our AI analysis suggests adding a pinch of espresso powder to the chocolate cake to enhance flavors, and a touch of cardamom to the apple pie for complexity.";
        newSuggestionChips = ["Quick desserts", "Chocolate recipes", "Fruit desserts"];
      } else if (categories.includes('suggestion') || categories.includes('help')) {
        botResponse = "Based on my AI cooking trend analysis, I'd recommend trying our Comfort Soup - it's designed with the perfect balance of nutrients and flavor compounds for maximum satisfaction! I can also help with step-by-step cooking instructions or ingredient substitutions.";
        newSuggestionChips = ["Trending recipes", "Seasonal dishes", "Quick meal ideas"];
      } else if (categories.includes('quick')) {
        botResponse = "For quick meals, try our 15-minute Pasta Primavera or 20-minute Sheet Pan Chicken! Our AI has optimized these recipes for maximum flavor in minimal time, with simplified techniques and ingredient combinations.";
        newSuggestionChips = ["Under 30 minutes", "One-pot meals", "No-cook recipes"];
      } else if (categories.includes('healthy')) {
        botResponse = "Our AI-analyzed healthy recipes optimize nutrition while maintaining great flavor. Try our Nutrient-Dense Buddha Bowl or Balanced Mediterranean Plate - both designed to provide complete nutrition with carefully calibrated macronutrients.";
        newSuggestionChips = ["Low-calorie options", "High-protein meals", "Nutrient-dense recipes"];
      } else if (categories.includes('time')) {
        botResponse = "Time is precious! Our quick recipes can be made in under 30 minutes, like our Easy Chicken Stir-Fry (15 minutes) or Berry Smoothie (5 minutes). For special occasions, try our slow-cooked options like Tandoori Raan (4 hours) for maximum flavor development.";
        newSuggestionChips = ["15-minute meals", "Weekend cooking projects", "Meal prep ideas"];
      } else if (messageToSend.toLowerCase().includes('?')) {
        botResponse = "Great question! I can help with specific cooking techniques, ingredient substitutions, or finding the perfect recipe for any occasion. My AI analysis can provide personalized guidance based on your preferences and cooking skill level.";
        newSuggestionChips = ["Cooking techniques", "Ingredient help", "Recipe troubleshooting"];
      }
      
      // Add a more personal touch for complex queries
      if (isComplexQuery) {
        botResponse += " I've analyzed your specific question using AI to provide the most helpful response possible. Is there anything else you'd like to know?";
      }
      
      const newBotMessage: Message = {
        id: (Date.now() + 100).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        isAiEnhanced: isComplexQuery
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setSuggestionChips(newSuggestionChips);
      setIsTyping(false);

      // Read out the response if not muted
      if (!isMuted) {
        speakText(botResponse);
      }
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 z-40 p-4 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors group"
        aria-label="Open chat"
      >
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-white text-xs">!</span>
        </div>
        <MessageCircle size={24} className="group-hover:hidden" />
        <Bot size={24} className="hidden group-hover:block" />
      </button>
      
      {isOpen && (
        <div
          className={`fixed left-6 z-40 shadow-xl rounded-lg overflow-hidden transition-all duration-300 glass-card border border-gray-200 dark:border-gray-800 ${
            isMinimized
              ? 'bottom-20 w-60 h-12'
              : 'bottom-20 w-80 sm:w-96 h-[500px]'
          }`}
        >
          <div 
            className="text-white px-4 py-3 flex justify-between items-center"
            style={{
              background: 'linear-gradient(90deg, hsla(259, 84%, 78%, 1) 0%, hsla(206, 67%, 75%, 1) 100%)',
            }}
          >
            <div className="flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              <h3 className="font-medium text-sm">AI Recipe Assistant</h3>
              <div className="ml-2 bg-white/20 text-white text-xs px-1.5 py-0.5 rounded-full flex items-center">
                <Sparkles size={10} className="mr-1" /> AI
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize size={16} /> : <Minimize size={16} />}
              </button>
              <button
                onClick={closeChat}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              <div className="p-4 h-[calc(100%-180px)] overflow-y-auto bg-gray-50 dark:bg-gray-900/50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-3 flex ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 ${
                        msg.sender === 'user'
                          ? 'bg-primary text-white rounded-br-none'
                          : msg.isAiEnhanced
                            ? 'bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 text-gray-800 dark:text-gray-200 rounded-bl-none'
                            : 'bg-gray-100 dark:bg-gray-800 rounded-bl-none'
                      }`}
                    >
                      {msg.sender === 'bot' && msg.isAiEnhanced && (
                        <div className="flex items-center mb-1 text-xs text-purple-600 dark:text-purple-300">
                          <Zap size={10} className="mr-1" />
                          <span>AI Enhanced Response</span>
                        </div>
                      )}
                      <p className="text-sm">{msg.text}</p>
                      <span
                        className={`text-xs mt-1 block ${
                          msg.sender === 'user'
                            ? 'text-primary-foreground/70'
                            : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start mb-3">
                    <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 rounded-lg px-4 py-2 rounded-bl-none">
                      <div className="flex items-center mb-1 text-xs text-purple-600 dark:text-purple-300">
                        <Brain size={10} className="mr-1" />
                        <span>AI Thinking...</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Suggestion chips */}
              {suggestionChips.length > 0 && (
                <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 overflow-x-auto">
                  <div className="flex space-x-2 pb-1">
                    {suggestionChips.map((chip, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(undefined, chip)}
                        className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap
                                  bg-primary/10 text-primary hover:bg-primary/20 
                                  dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-800 p-3 flex items-center bg-white dark:bg-gray-800">
                <div className="flex-1 flex items-center border border-gray-300 dark:border-gray-700 rounded-l-full overflow-hidden">
                  <input
                    ref={inputRef}
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about recipes or cooking..."
                    className="flex-1 py-2 px-4 outline-none focus:ring-0 dark:bg-gray-800"
                    disabled={isRecording}
                  />
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-gray-300"
                    title={isMuted ? "Enable voice responses" : "Mute voice responses"}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleRecording}
                    className={`p-2 ${isRecording ? 'text-red-500 animate-pulse' : 'text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-gray-300'}`}
                    title={isRecording ? "Stop recording" : "Start voice input"}
                  >
                    {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={message.trim() === '' && !isRecording}
                  className="bg-primary text-white p-2 rounded-r-full disabled:opacity-50 flex items-center justify-center"
                >
                  <Send size={18} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
