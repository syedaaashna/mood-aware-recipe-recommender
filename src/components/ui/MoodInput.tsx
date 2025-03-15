
import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { moods, Mood } from '@/utils/moodRecipeData';
import { useToast } from "@/components/ui/toast";

interface MoodInputProps {
  onMoodSelect: (mood: Mood) => void;
  selectedMood: Mood | null;
}

const MoodInput = ({ onMoodSelect, selectedMood }: MoodInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredMoods, setFilteredMoods] = useState<Mood[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (searchTerm) {
      const filtered = moods.filter(mood => 
        mood.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        mood.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMoods(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredMoods(moods.slice(0, 10)); // Show popular moods when no search term
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node) && 
        inputRef.current && 
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMoodSelect = (mood: Mood) => {
    onMoodSelect(mood);
    setSearchTerm('');
    setShowSuggestions(false);
    toast({
      title: "Mood Selected",
      description: `Finding recipes for your ${mood.name} mood`,
      duration: 3000,
    });
  };

  const clearSelection = () => {
    onMoodSelect(null as unknown as Mood);
    setSearchTerm('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputFocus = () => {
    if (!searchTerm && filteredMoods.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          placeholder="How are you feeling today?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleInputFocus}
          className="pl-10 pr-10 py-3 w-full rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 shadow-sm"
        />
        
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
          </button>
        )}
      </div>
      
      {selectedMood && (
        <div className="mt-4 p-4 rounded-lg glass-card animate-fade-in">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-3xl mr-3">{selectedMood.icon}</span>
              <div>
                <h3 className="font-medium text-lg">{selectedMood.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{selectedMood.description}</p>
              </div>
            </div>
            <button 
              onClick={clearSelection}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
      
      {showSuggestions && filteredMoods.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-10 max-h-80 overflow-y-auto animate-slide-in"
        >
          <div className="p-2">
            {filteredMoods.map((mood) => (
              <div
                key={mood.id}
                onClick={() => handleMoodSelect(mood)}
                className="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer transition-colors"
              >
                <span className="text-2xl mr-3">{mood.icon}</span>
                <div>
                  <div className="font-medium">{mood.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{mood.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showSuggestions && filteredMoods.length === 0 && (
        <div className="absolute mt-2 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-10 p-4 text-center animate-slide-in">
          <p className="text-gray-500 dark:text-gray-400">No moods found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default MoodInput;
