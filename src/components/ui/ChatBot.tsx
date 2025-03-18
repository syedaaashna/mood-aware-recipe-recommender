
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Maximize, Minimize } from 'lucide-react';
import { getChatbotResponse } from '@/utils/moodRecipeData';
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Hello! I'm your AI-powered recipe assistant. I can help you find recipes based on your mood or answer questions about cooking. How can I help you today?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
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
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, newMessage]);
          setIsTyping(false);
        }, 1500);
      }, 500);
    }
  }, [currentMood, isOpen]);

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
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (message.trim() === '') return;
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setMessage('');
    setIsTyping(true);
    
    setTimeout(() => {
      let botResponse = "I'm still learning about cooking. Could you ask me about recipes, ingredients, or moods?";
      
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
        botResponse = "I've analyzed thousands of recipes to create special AI-enhanced recipes! They have optimal ingredient combinations and cooking techniques. Try filtering by the 'ai-crafted' tag or ask about our AI-Crafted Comfort Soup.";
      } else if (lowerMessage.includes('recipe') || 
          lowerMessage.includes('cook') || 
          lowerMessage.includes('food') || 
          lowerMessage.includes('meal')) {
        botResponse = "I can help you find recipes! Try selecting a mood first, or you can ask me about specific ingredients or dishes. I've also created some AI-enhanced recipes with optimized techniques.";
      } else if (lowerMessage.includes('hello') || 
                lowerMessage.includes('hi') || 
                lowerMessage.includes('hey')) {
        botResponse = "Hello there! I'm your AI recipe assistant. How can I help with your cooking today? I can suggest recipes based on mood or ingredients.";
      } else if (lowerMessage.includes('thank')) {
        botResponse = "You're welcome! I'm happy to help. Let me know if you need anything else - I'm constantly learning new recipes and cooking techniques.";
      } else if (lowerMessage.includes('mood')) {
        botResponse = "Your mood can greatly influence what foods might satisfy you. Try selecting a mood to see matching recipes! Each mood has several recipes designed to complement how you're feeling.";
      } else if (lowerMessage.includes('ingredient')) {
        botResponse = "I can suggest recipes based on ingredients. What ingredients do you have or would like to cook with? My AI analysis can help find optimal flavor combinations.";
      } else if (lowerMessage.includes('vegetarian') || lowerMessage.includes('vegan')) {
        botResponse = "We have many delicious vegetarian options! Try our AI-Balanced Mindful Bowl for a nutritionally complete meal, or browse our vegetarian dishes for other options.";
      } else if (lowerMessage.includes('spicy') || lowerMessage.includes('hot')) {
        botResponse = "If you enjoy spicy food, try our Rajasthani Laal Maas, Goan Pork Vindaloo, or Spicy Peanut Noodles! My analysis shows these have the perfect heat levels for maximum flavor without overwhelming spiciness.";
      } else if (lowerMessage.includes('dessert') || lowerMessage.includes('sweet')) {
        botResponse = "For something sweet, our Decadent Chocolate Cake or Warm Apple Pie would be perfect choices! Try my AI suggestion of adding a pinch of espresso powder to the chocolate cake to enhance flavors!";
      } else if (lowerMessage.includes('suggestion') || lowerMessage.includes('recommend') || lowerMessage.includes('what should')) {
        botResponse = "Based on cooking trend analysis, I'd recommend trying our AI-Crafted Comfort Soup - it's designed with the perfect balance of nutrients and flavor compounds for maximum satisfaction!";
      }
      
      const newBotMessage: Message = {
        id: (Date.now() + 100).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 z-40 p-4 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
      
      {isOpen && (
        <div
          className={`fixed left-6 z-40 shadow-xl rounded-lg overflow-hidden transition-all duration-300 glass-card border border-gray-200 dark:border-gray-800 ${
            isMinimized
              ? 'bottom-20 w-60 h-12'
              : 'bottom-20 w-80 sm:w-96 h-96'
          }`}
        >
          <div className="bg-primary text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle size={18} className="mr-2" />
              <h3 className="font-medium text-sm">AI Recipe Assistant</h3>
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
              <div className="p-4 h-[calc(100%-110px)] overflow-y-auto">
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
                          : 'bg-gray-100 dark:bg-gray-800 rounded-bl-none'
                      }`}
                    >
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
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 rounded-bl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-800 p-3 flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about recipes or cooking..."
                  className="flex-1 border border-gray-300 dark:border-gray-700 rounded-l-full py-2 px-4 focus:outline-none focus:border-primary dark:bg-gray-800"
                />
                <button
                  type="submit"
                  disabled={message.trim() === ''}
                  className="bg-primary text-white p-2 rounded-r-full disabled:opacity-50"
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
