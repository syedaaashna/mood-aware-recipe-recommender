
import { useState, useEffect, useRef } from 'react';
import { Send, X, Volume2, Mic, MicOff } from 'lucide-react';
import { getChatbotResponse } from '@/utils/moodRecipeData';
import { useToast } from "@/hooks/use-toast";

const suggestionChips = [
  "What's a good recipe for beginners?",
  "Recommend a quick dinner idea",
  "Tell me about Indian cuisine",
  "How do I make perfect rice?",
  "What are some healthy desserts?",
  "Suggest vegetarian protein sources"
];

interface ChatBotProps {
  currentMood: string | null;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

const ChatBot = ({ currentMood }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const speechRecognitionRef = useRef<any>(null);

  // Initialize with a welcome message
  useEffect(() => {
    const welcomeMessage = getChatbotResponse(currentMood);
    setMessages([
      { 
        id: '1', 
        text: welcomeMessage, 
        isUser: false 
      }
    ]);
  }, [currentMood]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle speech recognition initialization
  const initializeSpeechRecognition = () => {
    try {
      // TypeScript workaround for browser compatibility
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (!SpeechRecognition) {
        toast({
          title: "Speech Recognition Unavailable",
          description: "Your browser doesn't support voice input. Try using Chrome or Edge.",
          duration: 3000,
        });
        return null;
      }
      
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setCurrentMessage(transcript);
        setTimeout(() => sendMessage(transcript), 500);
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
        toast({
          title: "Voice Input Error",
          description: "There was a problem with voice recognition. Please try again.",
          duration: 3000,
        });
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      return recognition;
    } catch (error) {
      console.error('Speech recognition not supported', error);
      return null;
    }
  };

  const toggleVoiceInput = () => {
    if (isListening) {
      speechRecognitionRef.current?.abort();
      setIsListening(false);
      return;
    }
    
    if (!speechRecognitionRef.current) {
      speechRecognitionRef.current = initializeSpeechRecognition();
    }
    
    if (speechRecognitionRef.current) {
      try {
        speechRecognitionRef.current.start();
        setIsListening(true);
        toast({
          title: "Listening...",
          description: "Speak clearly into your microphone.",
          duration: 3000,
        });
      } catch (error) {
        console.error('Failed to start speech recognition', error);
        toast({
          title: "Voice Input Error",
          description: "Couldn't start voice recognition. Please try again.",
          duration: 3000,
        });
      }
    }
  };

  const speakText = (text: string) => {
    if (isMuted || !text) return;
    
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;
    
    window.speechSynthesis.speak(speech);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    if (!isMuted) {
      window.speechSynthesis.cancel();
      toast({
        title: "Voice Output Muted",
        description: "Bot responses will no longer be spoken aloud.",
        duration: 1500,
      });
    } else {
      toast({
        title: "Voice Output Unmuted",
        description: "Bot responses will be spoken aloud.",
        duration: 1500,
      });
    }
  };

  const sendMessage = (messageText: string = currentMessage) => {
    if (!messageText.trim()) return;
    
    // Create a new user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true
    };
    
    // Add message to the chat
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input field
    setCurrentMessage('');
    
    // Generate bot response
    setTimeout(() => {
      // Generate appropriate response based on user input
      let botResponse: string;
      const lowerCaseMessage = messageText.toLowerCase();
      
      if (lowerCaseMessage.includes('recipe for')) {
        botResponse = `I'd be happy to help you find a recipe! Are you looking for something specific? You might enjoy our ${Math.random() > 0.5 ? 'Mushroom Risotto' : 'Butter Chicken'} recipe.`;
      } else if (lowerCaseMessage.includes('vegetarian') || lowerCaseMessage.includes('vegan')) {
        botResponse = "For vegetarian options, I recommend trying our Malai Kofta, Shahi Paneer, or Masala Dosa recipes. They're delicious and full of flavor!";
      } else if (lowerCaseMessage.includes('dessert')) {
        botResponse = "For dessert lovers, our Decadent Chocolate Cake is a must-try! If you're feeling nostalgic, you might also enjoy our Warm Apple Pie or Gingerbread Cookies.";
      } else if (lowerCaseMessage.includes('breakfast')) {
        botResponse = "For breakfast, I'd recommend our Classic French Toast or Crispy Masala Dosa. Both are delicious ways to start your day!";
      } else if (lowerCaseMessage.includes('quick') || lowerCaseMessage.includes('easy')) {
        botResponse = "If you're short on time, try our Spicy Peanut Noodles or Berry Smoothie. Both can be prepared in under 20 minutes!";
      } else if (lowerCaseMessage.includes('hindi') || lowerCaseMessage.includes('indian')) {
        botResponse = "We have several delicious Indian recipes, including Butter Chicken, Malai Kofta, Shahi Paneer, and Masala Dosa. Some recipes even include Hindi voice guidance!";
      } else {
        botResponse = getChatbotResponse(currentMood);
      }
      
      const botMessage: Message = {
        id: Date.now().toString(),
        text: botResponse,
        isUser: false
      };
      
      setMessages(prev => [...prev, botMessage]);
      
      // Speak the response if not muted
      speakText(botResponse);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentMessage(suggestion);
    sendMessage(suggestion);
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 9h8" />
            <path d="M8 13h6" />
          </svg>
        }
      </button>
      
      {/* Chatbot dialog */}
      <div 
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <h3 className="font-medium">Recipe Assistant</h3>
          <div className="flex gap-2">
            <button 
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              <Volume2 size={16} className={isMuted ? 'text-gray-400' : 'text-primary'} />
            </button>
            <button
              onClick={toggleVoiceInput}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                isListening ? 'bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300' : ''
              }`}
              aria-label={isListening ? "Stop listening" : "Start voice input"}
            >
              {isListening ? <MicOff size={16} /> : <Mic size={16} />}
            </button>
          </div>
        </div>
        
        {/* Messages */}
        <div className="p-4 h-80 overflow-y-auto">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 max-w-[85%] ${message.isUser ? 'ml-auto' : 'mr-auto'}`}
            >
              <div 
                className={`p-3 rounded-lg ${
                  message.isUser 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-gray-100 dark:bg-gray-800 rounded-tl-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Suggestion chips */}
        <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-800">
          <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
            {suggestionChips.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="whitespace-nowrap px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
        
        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="relative">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 p-1.5 text-primary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBot;
