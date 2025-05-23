import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, ChevronUp, X, Mic, Sparkles, Bot, User, Zap, Heart, Star, Chef } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { getChatbotResponse } from '@/utils/chatbotResponse';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { moods } from '@/data/moods/moodsList';
import { getRecipesByMood } from '@/utils/recipeOperations';

interface ChatBotProps {
  currentMood: string | null;
}

type MessageType = {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  isTyping?: boolean;
  attachment?: string;
  recipes?: { id: string, name: string }[];
  mood?: string | null;
  emotion?: 'happy' | 'excited' | 'helpful' | 'thinking' | 'surprised';
};

const ChatBot = ({ currentMood }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([
    {
      sender: 'bot',
      text: "Hi there! 👋 I'm your AI recipe assistant! I'm absolutely thrilled to help you discover amazing recipes. How can I make your cooking journey more delicious today? ✨",
      timestamp: new Date(),
      emotion: 'excited'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('chat');
  const [isListening, setIsListening] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [helpDialogOpen, setHelpDialogOpen] = useState(false);
  const [botMood, setBotMood] = useState<'happy' | 'excited' | 'helpful' | 'thinking'>('happy');
  const [chatBackground, setChatBackground] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const botEmojis = {
    happy: '😊',
    excited: '🤩',
    helpful: '🍳',
    thinking: '🤔',
    surprised: '😮'
  };

  const chatBackgrounds = [
    'bg-gradient-to-br from-purple-400 via-pink-400 to-red-400',
    'bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400',
    'bg-gradient-to-br from-green-400 via-blue-400 to-purple-400',
    'bg-gradient-to-br from-yellow-400 via-red-400 to-pink-400'
  ];

  function inferMoodFromInput(text: string): string | null {
    const lower = text.trim().toLowerCase();
    for (const mood of moods) {
      if (lower.includes(mood.name.toLowerCase()) || lower.includes(mood.id.toLowerCase())) return mood.id;
    }
    if (lower.match(/\bhappy|joy|great|awesome|excited|good mood|wonderful\b/)) return "happy";
    if (lower.match(/\bsad|down|unhappy|depressed|blue|cry|not feeling good|upset\b/)) return "sad";
    if (lower.match(/\bromantic|love|date night|anniversary\b/)) return "romantic";
    if (lower.match(/\bcomfort|cozy|relax|relaxing|need warmth|comfort food\b/)) return "comforting";
    if (lower.match(/\badventure|try new|explore|different|exotic|spontaneous\b/)) return "adventurous";
    if (lower.match(/\bnostalgic|childhood|memory|like mom|reminds me\b/)) return "nostalgic";
    if (lower.match(/\benergetic|energy|workout|power|active|boost\b/)) return "energetic";
    if (lower.match(/\bstress|anxious|overwhelm|busy|no time|pressure\b/)) return "stressed";
    if (lower.match(/\bparty|celebrate|achievement|special occasion\b/)) return "celebratory";
    if (lower.match(/\btired|fatigue|sleepy|exhausted|no energy\b/)) return "tired";
    if (lower.match(/\bindulge|treat|decadent|spoil\b/)) return "indulgent";
    if (lower.match(/\bmindful|healthy|light|nutritious|diet|balanced\b/)) return "mindful";
    if (lower.match(/\bsocial|friends|gathering|get together\b/)) return "social";
    if (lower.match(/\bcreative|artistic|unique|unusual|experimental\b/)) return "creative";
    if (lower.match(/\bclassic|traditional|heritage|authentic|old fashioned\b/)) return "traditional";
    if (lower.match(/\brefresh|light meal|fresh\b/)) return "refreshed";
    if (lower.match(/\bheavy|cheese|mac|ramen|soup|comfort dish\b/)) return "comforting";
    return null;
  }

  function getBestMoodId(userInput: string): string {
    let bestMood = currentMood || inferMoodFromInput(userInput);
    if (!bestMood) bestMood = "comforting";
    if (!moods.some((m) => m.id === bestMood)) bestMood = moods[0].id;
    return bestMood;
  }

  function getRandomBotEmotion(): 'happy' | 'excited' | 'helpful' | 'thinking' | 'surprised' {
    const emotions: ('happy' | 'excited' | 'helpful' | 'thinking' | 'surprised')[] = ['happy', 'excited', 'helpful'];
    return emotions[Math.floor(Math.random() * emotions.length)];
  }

  function renderRecipeSuggestions(recipes: { id: string; name: string }[], moodId: string) {
    if (!recipes || !recipes.length) return null;
    return (
      <div className="mt-4 flex flex-wrap gap-2">
        {recipes.slice(0, 4).map((recipe, index) => (
          <a
            key={recipe.id}
            href={`/recipe/${recipe.id}`}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 text-primary px-4 py-2 rounded-2xl text-sm font-bold transition-all duration-300 border border-primary/30 hover:scale-105 animate-bounce-in shadow-lg"
            target="_blank" rel="noopener"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            ✨ {recipe.name}
          </a>
        ))}
      </div>
    );
  }

  useEffect(() => {
    setVoiceSupported('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    // Change chat background periodically
    const interval = setInterval(() => {
      setChatBackground(prev => (prev + 1) % chatBackgrounds.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const addBotResponse = (text: string, moodId?: string | null) => {
    setIsTyping(true);
    setBotMood('thinking');
    
    const typingMessage: MessageType = {
      sender: 'bot',
      text: '',
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);

    const resolvedMood = moodId ? moodId : getBestMoodId(text);
    const recipeSuggestions = resolvedMood ? getRecipesByMood(resolvedMood) : [];

    const typingDelay = Math.min(Math.max(text.length * 20, 800), 2000);

    setTimeout(() => {
      setIsTyping(false);
      const newEmotion = getRandomBotEmotion();
      setBotMood(newEmotion);
      
      setMessages(prev =>
        prev.map((msg, idx) =>
          idx === prev.length - 1 && msg.isTyping
            ? {
                sender: 'bot',
                text,
                timestamp: new Date(),
                recipes: recipeSuggestions.map(r => ({ id: r.id, name: r.name })),
                mood: resolvedMood,
                emotion: newEmotion
              }
            : msg
        )
      );
    }, typingDelay);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (inputValue.trim() === '') return;
    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage, timestamp: new Date() }]);
    setInputValue('');
    setShowSuggestions(false);

    const moodId = getBestMoodId(userMessage);
    const botResponse = getChatbotResponse(userMessage, moodId);
    addBotResponse(botResponse, moodId);

    // Add some celebratory effects for certain keywords
    if (userMessage.toLowerCase().includes('thank') || userMessage.toLowerCase().includes('awesome')) {
      toast({
        title: "🎉 You're amazing!",
        description: "Happy to help with your culinary adventures!",
        duration: 3000,
      });
    }
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      setBotMood('excited');
      toast({
        title: "🤖 Recipe Assistant Activated!",
        description: "Ready to make cooking magical! ✨",
        duration: 2500,
      });
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleVoiceInput = () => {
    if (!voiceSupported) {
      toast({
        title: "🎤 Voice Input Not Supported",
        description: "Your browser doesn't support voice recognition.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    setIsListening(prev => !prev);
    if (!isListening) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        setInputValue(speechResult);
        setIsListening(false);
      };
      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
        toast({
          title: "🎤 Voice Recognition Error",
          description: "There was a problem with voice recognition. Please try again.",
          variant: "destructive",
          duration: 3000,
        });
      };
      recognition.onend = () => setIsListening(false);
      recognition.start();
      toast({
        title: "🎧 Listening...",
        description: "Speak now! I'm all ears! 👂",
        duration: 2000,
      });
    }
  };

  const enhancedChatSuggestions = [
    "🍽️ What should I cook for dinner tonight?",
    "🥞 Give me a quick breakfast recipe",
    "🍝 How do I make perfect pasta?",
    "🍰 Suggest a healthy dessert",
    "🥗 What can I cook with chicken and vegetables?",
    "🇮🇹 Tell me about Italian cuisine",
    "🌶️ I want something spicy!",
    "🧁 Something sweet for my mood"
  ];

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <div className={`fixed right-6 bottom-6 z-50 transition-all duration-500 ${isOpen ? 'scale-0 rotate-180' : 'scale-100 rotate-0'}`}>
        <Button
          size="icon"
          onClick={toggleChat}
          className={`h-16 w-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${chatBackgrounds[chatBackground]} border-4 border-white/30 backdrop-blur-sm relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[slide_3s_infinite] skew-x-[-45deg]"></div>
          <div className="flex flex-col items-center justify-center text-white relative z-10">
            <Bot className="h-6 w-6 mb-1 animate-bounce" />
            <div className="text-xs font-bold">Chat</div>
          </div>
          <span className="sr-only">Open AI Recipe Assistant</span>
        </Button>
      </div>

      <div
        className={`fixed bottom-0 right-0 z-50 flex flex-col w-full sm:w-[420px]
                   transition-all duration-500 ease-out shadow-2xl rounded-t-2xl
                   border border-white/20 max-h-[650px] backdrop-blur-xl
                   ${isOpen ? 'sm:right-6 sm:bottom-6 translate-y-0 opacity-100 scale-100' : 'translate-y-full opacity-0 scale-95'}`}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        }}
      >
        <div className={`flex items-center justify-between border-b border-white/20 p-4 rounded-t-2xl ${chatBackgrounds[chatBackground]} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[slide_4s_infinite] skew-x-[-25deg]"></div>
          <div className="flex items-center gap-3 relative z-10">
            <Avatar className="h-10 w-10 bg-white/20 shadow-lg border-2 border-white/30">
              <span className="text-white text-xl animate-pulse">{botEmojis[botMood]}</span>
            </Avatar>
            <div>
              <h3 className="font-bold text-white text-lg">AI Recipe Chef</h3>
              <p className="text-xs text-white/80 flex items-center gap-1">
                <Zap className="w-3 h-3 animate-pulse" />
                Super-powered culinary assistant
                <Sparkles className="w-3 h-3 animate-pulse" />
              </p>
            </div>
          </div>
          <div className="flex relative z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setHelpDialogOpen(true)}
              className="text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200"
            >
              <Sparkles className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat}
              className="text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="chat" value={activeTab} onValueChange={setActiveTab} className="w-full flex-1 flex flex-col">
          <TabsList className="grid grid-cols-2 px-3 py-2 bg-white/5 backdrop-blur-sm">
            <TabsTrigger value="chat" className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70">
              💬 Chat
            </TabsTrigger>
            <TabsTrigger value="tips" className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70">
              💡 Tips
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="flex flex-col flex-1 overflow-hidden">
            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2 space-y-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-end transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {message.isTyping ? (
                    <div className="max-w-[75%] rounded-2xl p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 flex items-center shadow-lg">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-white/60 animate-bounce"></div>
                        <div className="h-3 w-3 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-3 w-3 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <span className="ml-3 text-white/80 font-medium">Chef is thinking...</span>
                    </div>
                  ) : (
                    <div className={`flex flex-col max-w-[80%] group
                      ${message.sender === 'user' ? 'items-end' : 'items-start'}
                    `}>
                      <div className="flex items-end gap-2 mb-1">
                        {message.sender === 'bot' && (
                          <div className="text-lg animate-bounce">
                            {message.emotion ? botEmojis[message.emotion] : botEmojis[botMood]}
                          </div>
                        )}
                        <div
                          className={`
                              rounded-2xl px-4 py-3 text-base transition-all duration-300 shadow-lg backdrop-blur-sm border
                              ${message.sender === 'user'
                                ? 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white border-white/20 hover:from-blue-500/90 hover:to-purple-500/90'
                                : 'bg-gradient-to-r from-white/15 to-white/10 text-white border-white/20 hover:bg-white/20'}
                            `}
                        >
                          {message.text}
                        </div>
                        {message.sender === 'user' && (
                          <User className="h-6 w-6 text-white/60" />
                        )}
                      </div>
                      {message.sender === 'bot' && message.recipes && message.recipes.length > 0 && (
                        renderRecipeSuggestions(message.recipes, message.mood || '')
                      )}
                      <span className={`text-xs text-white/50 mt-1 tracking-tight ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        {message.sender === 'user' ? 'You' : 'Chef AI'} • {formatTime(message.timestamp)}
                      </span>
                    </div>
                  )}
                </div>
              ))}

              {showSuggestions && messages.length <= 2 && (
                <div className="mt-6 space-y-3 animate-fade-in">
                  <p className="text-sm text-white/70 font-medium flex items-center gap-2">
                    <Star className="w-4 h-4 animate-pulse" />
                    Try asking me:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {enhancedChatSuggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-sm bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 rounded-full hover:from-white/20 hover:to-white/15 transition-all duration-300 text-white border border-white/20 shadow-lg hover:scale-105 backdrop-blur-sm"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="border-t border-white/20 p-4 flex gap-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about cooking... 🍳"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-purple-400/50 transition-all text-white placeholder-white/60 text-base shadow-lg"
                  disabled={isTyping}
                  autoFocus={isOpen}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleVoiceInput}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 ${isListening ? 'text-red-400 scale-110 animate-pulse' : 'text-white/60'} transition-all duration-300 hover:text-white hover:bg-white/10`}
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
              <Button
                type="submit"
                size="icon"
                className="shrink-0 h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg rounded-2xl"
                disabled={inputValue.trim() === '' || isTyping}
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="tips" className="flex-1 overflow-y-auto p-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-white flex items-center gap-2">
                <Chef className="w-6 h-6" />
                Professional Cooking Tips
              </h3>
              {[
                {
                  title: "Perfect Pasta Every Time 🍝",
                  tip: "Salt your pasta water generously (it should taste like the sea) and cook until al dente. Save some pasta water to help bind your sauce!"
                },
                {
                  title: "Meat Resting Technique 🥩", 
                  tip: "Always let meat rest after cooking. For steaks, rest for about 5 minutes to allow juices to redistribute for maximum flavor."
                },
                {
                  title: "Mise en Place ✨",
                  tip: "Prepare and organize all ingredients before you start cooking. This French technique will make you cook like a pro!"
                },
                {
                  title: "Sharp Knife Skills 🔪",
                  tip: "Keep your knives sharp! A sharp knife is not only safer but makes prep work faster and more enjoyable."
                },
                {
                  title: "Flavor Enhancers 🌟",
                  tip: "Use acids like lemon juice or vinegar to brighten flavors. Don't forget umami boosters like soy sauce, mushrooms, or parmesan!"
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl border border-white/20 p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-sm shadow-lg animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-white/80">{item.tip}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={helpDialogOpen} onOpenChange={setHelpDialogOpen}>
        <DialogContent className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-xl border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-6 h-6 animate-pulse" />
              AI Recipe Assistant - Magic Features
              <Star className="w-6 h-6 animate-pulse" />
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-400" />
                How I Can Help You
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  "🥘 Find recipes based on ingredients you have",
                  "🎉 Suggest meal ideas for different occasions", 
                  "👨‍🍳 Provide cooking tips and techniques",
                  "🥗 Answer nutrition questions about meals",
                  "🆘 Help troubleshoot cooking issues",
                  "🔄 Explain ingredient substitutions",
                  "🎯 Mood-based recipe recommendations",
                  "🎤 Voice-guided cooking instructions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Example Magic Phrases
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  "✨ 'What can I make with chicken, broccoli, and rice?'",
                  "🔥 'How do I know when my steak is medium-rare?'",
                  "🌱 'Suggest a healthy breakfast for weight loss'",
                  "💝 'I'm feeling romantic, what should I cook?'",
                  "⚡ 'Quick 15-minute dinner ideas'",
                  "🌶️ 'Something spicy to boost my energy'"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-2">
              <Button 
                onClick={() => setHelpDialogOpen(false)} 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
              >
                Let's Cook! 🚀
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBot;
