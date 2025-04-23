
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, ChevronUp, X, Mic, Sparkles } from 'lucide-react';
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
  recipes?: { id: string, name: string }[]; // for bot: recipes to suggest
  mood?: string | null; // mood id
};

const ChatBot = ({ currentMood }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([
    {
      sender: 'bot',
      text: "Hi there! I'm your recipe assistant. How can I help you today? You can ask me for recipe suggestions, cooking tips, or any food-related questions.",
      timestamp: new Date(),
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

  // Improved mood mapping logic for custom inputs
  function inferMoodFromInput(text: string): string | null {
    const lower = text.trim().toLowerCase();
    // Direct match on known mood names
    for (const mood of moods) {
      if (lower.includes(mood.name.toLowerCase())) return mood.id;
    }
    // Soft/common mappings
    if (lower.includes('sad') || lower.match(/\bdown\b/)) return 'sad';
    if (lower.includes('happy') || lower.includes('good mood') || lower.includes('great')) return 'happy';
    if (lower.includes('comfort') || lower.includes('cozy')) return 'comfort';
    if (lower.includes('romantic') || lower.includes('date')) return 'romantic';
    if (lower.includes('adventur')) return 'adventurous';
    if (lower.includes('nostalgic') || lower.includes('memory')) return 'nostalgic';
    if (lower.includes('energetic') || lower.includes('energy')) return 'energetic';
    if (lower.includes('tired') || lower.includes('no energy') || lower.includes('exhausted')) return 'tired';
    if (lower.includes('creative')) return 'creative';
    if (lower.includes('traditional') || lower.includes('classic')) return 'traditional';
    if (lower.includes('party') || lower.includes('celebrate')) return 'celebratory';
    if (lower.includes('indulgent') || lower.includes('decadent') || lower.includes('treat')) return 'indulgent';
    if (lower.includes('healthy') || lower.includes('light') || lower.includes('diet') || lower.includes('nutritious')) return 'mindful';
    if (lower.includes('stress') || lower.includes('anxious')) return 'stressed';
    // Map food items to likely moods (examples)
    if (lower.includes('soup') || lower.includes('ramen') || lower.includes('mac') || lower.includes('cheese')) return 'comfort';
    // Default (fallback)
    return null;
  }

  // For recipe suggestions, always map some (best effort) mood
  function getBestMoodId(userInput: string): string | null {
    // Prefer currentMood if set from outside (Index page)
    let bestMood = currentMood || inferMoodFromInput(userInput);
    // Fallback: random mood if none matched (for always mapping)
    if (!bestMood) bestMood = moods[Math.floor(Math.random() * moods.length)].id;
    return bestMood;
  }

  // Show recipes as bubbles after bot response (if mood is inferred/found)
  function renderRecipeSuggestions(recipes: { id: string; name: string }[], moodId: string) {
    if (!recipes || !recipes.length) return null;
    return (
      <div className="mt-3 flex flex-wrap gap-2">
        {recipes.slice(0, 4).map(recipe => (
          <a
            key={recipe.id}
            href={`/recipe/${recipe.id}`}
            className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors border border-primary"
            target="_blank" rel="noopener"
          >
            {recipe.name}
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

  // Simulate bot typing with animation
  const addBotResponse = (text: string, moodId?: string | null) => {
    setIsTyping(true);
    const typingMessage: MessageType = {
      sender: 'bot',
      text: '',
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);

    const resolvedMood = moodId ? moodId : getBestMoodId(text);
    const recipeSuggestions = resolvedMood ? getRecipesByMood(resolvedMood) : [];

    const typingDelay = Math.min(Math.max(text.length * 17, 600), 1800);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev =>
        prev.map((msg, idx) =>
          idx === prev.length - 1 && msg.isTyping
            ? {
                sender: 'bot',
                text,
                timestamp: new Date(),
                recipes: recipeSuggestions.map(r => ({ id: r.id, name: r.name })),
                mood: resolvedMood
              }
            : msg
        )
      );
    }, typingDelay);
  };

  // Main message send handler
  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (inputValue.trim() === '') return;
    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage, timestamp: new Date() }]);
    setInputValue('');
    setShowSuggestions(false);

    // Always map to a mood so we always have a recipe suggestion
    const moodId = getBestMoodId(userMessage);
    const botResponse = getChatbotResponse(userMessage, moodId);
    addBotResponse(botResponse, moodId);
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      toast({
        title: "Recipe Assistant Activated",
        description: "Ask me anything about recipes or cooking techniques!",
        duration: 2200,
      });
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setTimeout(() => handleSendMessage(), 80); // minimal delay for UX
  };

  const handleVoiceInput = () => {
    if (!voiceSupported) {
      toast({
        title: "Voice Input Not Supported",
        description: "Your browser doesn't support voice recognition.",
        variant: "destructive",
        duration: 2800,
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
          title: "Voice Recognition Error",
          description: "There was a problem with voice recognition. Please try again.",
          variant: "destructive",
          duration: 2600,
        });
      };
      recognition.onend = () => setIsListening(false);
      recognition.start();
      toast({
        title: "Listening...",
        description: "Speak now. I'm listening.",
        duration: 1700,
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
      {/* FAB Open */}
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

      {/* Chatbot Container */}
      <div
        className={`fixed bottom-0 right-0 z-50 flex flex-col w-full sm:w-96
                   transition-all duration-300 ease-in-out shadow-xl rounded-t-xl
                   bg-card border border-border max-h-[600px]
                   ${isOpen ? 'sm:right-4 sm:bottom-4 translate-y-0 animate-fade-in' : 'translate-y-full'}`}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b p-3 bg-primary/90 rounded-t-xl">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 bg-primary">
              <span className="text-white">🍳</span>
            </Avatar>
            <div>
              <h3 className="font-medium text-white">Recipe Assistant</h3>
              <p className="text-xs text-muted-foreground text-white/70">AI-powered guidance</p>
            </div>
          </div>
          <div className="flex">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setHelpDialogOpen(true)}
              className="text-white/70"
            >
              <Sparkles className="h-4 w-4" />
              <span className="sr-only">Help</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleChat}>
              <ChevronUp className="h-5 w-5 text-white/70" />
              <span className="sr-only">Minimize</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleChat}>
              <X className="h-5 w-5 text-white/70" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>

        {/* Main Chat Tabs */}
        <Tabs defaultValue="chat" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 px-2 py-1">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="tips">Recipe Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="flex flex-col flex-1 overflow-hidden">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2 space-y-4 bg-background/90">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-end`}
                >
                  {message.isTyping ? (
                    <div className="max-w-[72%] rounded-2xl p-3 bg-muted flex items-center shadow-sm">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce"></div>
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">Thinking...</span>
                    </div>
                  ) : (
                    <div className={`flex flex-col max-w-[74%] group
                      ${message.sender === 'user' ? 'items-end' : 'items-start'}
                    `}>
                      <div
                        className={`
                            rounded-2xl px-4 py-2 text-base transition-all duration-200
                            ${message.sender === 'user'
                              ? 'bg-primary text-primary-foreground ml-auto shadow-md'
                              : 'bg-muted text-foreground'}
                          `}
                      >
                        {message.text}
                      </div>
                      {/* Show recipe suggestion chips for bot only */}
                      {message.sender === 'bot' && message.recipes && message.recipes.length > 0 && (
                        renderRecipeSuggestions(message.recipes, message.mood || '')
                      )}
                      <span className={`text-xs text-muted-foreground mt-1 tracking-tight ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        {message.sender === 'user' ? 'You' : 'AI'} • {formatTime(message.timestamp)}
                      </span>
                    </div>
                  )}
                </div>
              ))}

              {/* Show suggestions at start */}
              {showSuggestions && messages.length <= 2 && (
                <div className="mt-6 space-y-2 animate-fade-in">
                  <p className="text-xs text-muted-foreground">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {chatSuggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-sm bg-primary/10 px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors text-left"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="border-t bg-background/90 p-3 flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me about recipes..."
                  className="w-full bg-background border rounded-xl px-4 py-2.5 pr-11 outline-none focus:ring-2 focus:ring-primary transition-all text-base"
                  disabled={isTyping}
                  autoFocus={isOpen}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey && !isTyping) handleSendMessage(e);
                  }}
                  aria-label="Chat input"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleVoiceInput}
                  className={`absolute right-1.5 top-1/2 -translate-y-1/2 h-7 w-7 ${isListening ? 'text-red-500' : ''}`}
                  tabIndex={-1}
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
              <Button
                type="submit"
                size="icon"
                className="shrink-0"
                disabled={inputValue.trim() === '' || isTyping}
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </TabsContent>

          {/* Recipe Tips tab */}
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

      {/* Help Dialog */}
      <Dialog open={helpDialogOpen} onOpenChange={setHelpDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>AI Recipe Assistant - Features</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">How I Can Help You</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2"><span>•</span><span>Find recipes based on ingredients you have</span></li>
                <li className="flex items-start gap-2"><span>•</span><span>Suggest meal ideas for different occasions</span></li>
                <li className="flex items-start gap-2"><span>•</span><span>Provide cooking tips and techniques</span></li>
                <li className="flex items-start gap-2"><span>•</span><span>Answer nutrition questions about meals</span></li>
                <li className="flex items-start gap-2"><span>•</span><span>Help troubleshoot cooking issues</span></li>
                <li className="flex items-start gap-2"><span>•</span><span>Explain ingredient substitutions</span></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Example Questions</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2"><span>•</span><span>"What can I make with chicken, broccoli, and rice?"</span></li>
                <li className="flex items-start gap-2"><span>•</span><span>"How do I know when my steak is medium-rare?"</span></li>
                <li className="flex items-start gap-2"><span>•</span><span>"Suggest a healthy breakfast for weight loss"</span></li>
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

