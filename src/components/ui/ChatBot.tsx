
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, ChevronUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { getChatbotResponse } from '@/utils/moodRecipeData';

interface ChatBotProps {
  currentMood: string | null;
}

const ChatBot = ({ currentMood }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { 
      sender: 'bot', 
      text: "Hi there! I'm your recipe assistant. How can I help you today? You can ask me for recipe suggestions, cooking tips, or any food-related questions." 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom of messages when new message is added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInputValue('');
    
    // Simulate bot thinking
    setTimeout(() => {
      // Get bot response based on user query and current mood
      const botResponse = getChatbotResponse(userMessage, currentMood);
      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    
    if (!isOpen) {
      toast({
        title: "Chatbot Activated",
        description: "Ask me anything about recipes or cooking!",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <div className={`fixed right-4 bottom-4 z-40 transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}>
        <Button 
          size="icon" 
          onClick={toggleChat}
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      </div>
      
      <div 
        className={`fixed bottom-0 right-0 z-50 flex flex-col w-full sm:w-96 
                   transition-all duration-300 ease-in-out shadow-xl rounded-t-xl 
                   bg-card border border-border max-h-[600px]
                   ${isOpen ? 'sm:right-4 sm:bottom-4 translate-y-0' : 'translate-y-full'}`}
      >
        {/* Chat header */}
        <div className="flex items-center justify-between border-b p-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 bg-primary">
              <span className="text-white">🍳</span>
            </Avatar>
            <div>
              <h3 className="font-medium">Recipe Assistant</h3>
              <p className="text-xs text-muted-foreground">AI-powered guidance</p>
            </div>
          </div>
          
          <div className="flex">
            <Button variant="ghost" size="icon" onClick={toggleChat}>
              <ChevronUp className="h-5 w-5" />
              <span className="sr-only">Minimize</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleChat}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
        
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-xl p-3 ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Chat input */}
        <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me about recipes..."
            className="flex-1 bg-background border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button type="submit" size="icon" className="shrink-0">
            <Send className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </>
  );
};

export default ChatBot;
