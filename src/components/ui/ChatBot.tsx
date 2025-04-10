
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, ChevronUp, X, Mic, Image, Paperclip, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { getChatbotResponse } from '@/utils/moodRecipeData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface ChatBotProps {
  currentMood: string | null;
}

type MessageType = {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  isTyping?: boolean;
  attachment?: string;
};

const ChatBot = ({ currentMood }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([
    { 
      sender: 'bot', 
      text: "Hi there! I'm your recipe assistant. How can I help you today? You can ask me for recipe suggestions, cooking tips, or any food-related questions.", 
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('chat');
  const [isListening, setIsListening] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [helpDialogOpen, setHelpDialogOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Check if speech recognition is supported
  useEffect(() => {
    setVoiceSupported('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  }, []);

  // Auto-scroll to bottom of messages when new message is added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Simulate typing effect for bot messages
  const addBotResponse = (text: string) => {
    setIsTyping(true);
    
    // First add a "typing" message
    const typingMessage: MessageType = { 
      sender: 'bot', 
      text: '', 
      timestamp: new Date(),
      isTyping: true 
    };
    
    setMessages(prev => [...prev, typingMessage]);
    
    // Simulate variable typing speed based on message length
    const typingDelay = Math.min(Math.max(text.length * 20, 800), 2000);
    
    setTimeout(() => {
      setIsTyping(false);
      
      // Replace the typing message with the actual message
      setMessages(prev => 
        prev.map((msg, idx) => 
          idx === prev.length - 1 && msg.isTyping 
            ? { sender: 'bot', text, timestamp: new Date() } 
            : msg
        )
      );
    }, typingDelay);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = inputValue.trim();
    const newMessage: MessageType = { sender: 'user', text: userMessage, timestamp: new Date() };
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setShowSuggestions(false);
    
    // Get bot response based on user query and current mood
    const botResponse = getChatbotResponse(userMessage, currentMood);
    addBotResponse(botResponse);
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    
    if (!isOpen) {
      toast({
        title: "Recipe Assistant Activated",
        description: "Ask me anything about recipes or cooking techniques!",
        duration: 3000,
      });
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    handleSendMessage();
  };

  const handleVoiceInput = () => {
    if (!voiceSupported) {
      toast({
        title: "Voice Input Not Supported",
        description: "Your browser doesn't support voice recognition.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    // Toggle listening state
    setIsListening(prev => !prev);
    
    if (!isListening) {
      // Start voice recognition
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
          title: "Voice Recognition Error",
          description: "There was a problem with voice recognition. Please try again.",
          variant: "destructive",
          duration: 3000,
        });
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
      
      toast({
        title: "Listening...",
        description: "Speak now. I'm listening to your question.",
        duration: 3000,
      });
    }
  };

  const chatSuggestions = [
    "What should I cook for dinner tonight?",
    "Give me a quick breakfast recipe",
    "How do I make perfect pasta?",
    "Suggest a healthy dessert",
    "What can I cook with chicken and vegetables?",
    "Tell me about Italian cuisine"
  ];

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setHelpDialogOpen(true)}
              className="text-muted-foreground"
            >
              <Sparkles className="h-4 w-4" />
              <span className="sr-only">Help</span>
            </Button>
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
        
        {/* Tabs for different chat functionalities */}
        <Tabs defaultValue="chat" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 px-2 py-1">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="tips">Recipe Tips</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="flex flex-col flex-1 overflow-hidden">
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.isTyping ? (
                    <div className="max-w-[80%] rounded-xl p-3 bg-muted">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce"></div>
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col max-w-[80%]">
                      <div
                        className={`rounded-xl p-3 ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground ml-auto'
                            : 'bg-muted'
                        }`}
                      >
                        {message.text}
                        {message.attachment && (
                          <img 
                            src={message.attachment} 
                            alt="Attachment" 
                            className="mt-2 rounded-md max-w-full h-auto"
                          />
                        )}
                      </div>
                      <span className={`text-xs text-muted-foreground mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Suggested questions (only shown at beginning) */}
              {showSuggestions && messages.length <= 2 && (
                <div className="mt-6 space-y-2">
                  <p className="text-xs text-muted-foreground">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {chatSuggestions.slice(0, 3).map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-sm bg-muted px-3 py-1.5 rounded-full hover:bg-muted/80 transition-colors text-left"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {chatSuggestions.slice(3).map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-sm bg-muted px-3 py-1.5 rounded-full hover:bg-muted/80 transition-colors text-left"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me about recipes..."
                  className="w-full bg-background border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary"
                  disabled={isTyping}
                />
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon"
                  onClick={handleVoiceInput}
                  className={`absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 ${isListening ? 'text-red-500' : ''}`}
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
              
              <Button 
                type="submit" 
                size="icon" 
                className="shrink-0"
                disabled={inputValue.trim() === '' || isTyping}
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="tips" className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Popular Cooking Tips</h3>
              
              <div className="rounded-lg border p-3 hover:bg-muted/50 transition-colors cursor-pointer">
                <h4 className="font-medium">Perfect Pasta Every Time</h4>
                <p className="text-sm text-muted-foreground mt-1">Salt your pasta water (it should taste like the sea) and cook it until it's al dente for the best texture.</p>
              </div>
              
              <div className="rounded-lg border p-3 hover:bg-muted/50 transition-colors cursor-pointer">
                <h4 className="font-medium">Meat Resting Technique</h4>
                <p className="text-sm text-muted-foreground mt-1">Always let meat rest after cooking. For steaks, rest for about 5 minutes to allow juices to redistribute.</p>
              </div>
              
              <div className="rounded-lg border p-3 hover:bg-muted/50 transition-colors cursor-pointer">
                <h4 className="font-medium">Mise en Place</h4>
                <p className="text-sm text-muted-foreground mt-1">Prepare and organize all ingredients before you start cooking for a smoother cooking experience.</p>
              </div>
              
              <div className="rounded-lg border p-3 hover:bg-muted/50 transition-colors cursor-pointer">
                <h4 className="font-medium">Knife Skills</h4>
                <p className="text-sm text-muted-foreground mt-1">Keep your knives sharp and learn basic cutting techniques. A sharp knife is actually safer than a dull one.</p>
              </div>
              
              <div className="rounded-lg border p-3 hover:bg-muted/50 transition-colors cursor-pointer">
                <h4 className="font-medium">Flavor Enhancers</h4>
                <p className="text-sm text-muted-foreground mt-1">Use acids like lemon juice or vinegar to brighten flavors, and don't forget umami boosters like soy sauce or mushrooms.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Help dialog */}
      <Dialog open={helpDialogOpen} onOpenChange={setHelpDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>AI Recipe Assistant - Features</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">How I Can Help You</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Find recipes based on ingredients you have</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Suggest meal ideas for different occasions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Provide cooking tips and techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Answer nutrition questions about meals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Help troubleshoot cooking issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Explain ingredient substitutions</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Example Questions</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>"What can I make with chicken, broccoli, and rice?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>"How do I know when my steak is medium-rare?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>"Suggest a healthy breakfast for weight loss"</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-2">
              <Button onClick={() => setHelpDialogOpen(false)} className="w-full">
                Got it
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBot;
