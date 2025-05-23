
import { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Heart } from 'lucide-react';
import { moods, Mood } from '@/utils/moodRecipeData';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

interface MoodInputProps {
  onMoodSelect: (mood: Mood | null) => void;
  selectedMood?: Mood | null;
  placeholder?: string;
}

const customMoodIdPrefix = "__custom-";

const MoodInput = ({ onMoodSelect, selectedMood, placeholder = "Type your mood or select below..." }: MoodInputProps) => {
  const { toast } = useToast();
  const [searchText, setSearchText] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter moods based on search text
  const filteredMoods = searchText === ''
    ? moods
    : moods.filter(mood =>
        mood.name.toLowerCase().includes(searchText.toLowerCase()) ||
        mood.description.toLowerCase().includes(searchText.toLowerCase())
      );

  // Handle outside click to close dropdown
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handler);
    } else {
      document.removeEventListener('mousedown', handler);
    }
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [isDropdownOpen]);

  // Handles selecting a mood from the dropdown or custom text
  const handleMoodSelect = (mood: Mood | null) => {
    onMoodSelect(mood);
    setSearchText('');
    setIsDropdownOpen(false);

    if (mood) {
      toast({
        title: "✨ Mood Selected!",
        description: `Finding magical recipes for your "${mood.name}" mood 🎯`,
        duration: 3000,
      });
    }
  };

  // When user types, open dropdown and filter list
  const handleInputChange = (text: string) => {
    setSearchText(text);
    setIsDropdownOpen(true);
  };

  // Enter allows custom mood entry from text
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchText.trim()) {
      handleMoodSelect({
        id: customMoodIdPrefix + searchText.trim(),
        name: searchText.trim(),
        icon: '🙂',
        description: 'Custom mood entered',
      });
    }
    if (e.key === 'ArrowDown' && filteredMoods.length > 0) {
      // focus first dropdown item for accessibility (optional)
      const firstEl = dropdownRef.current?.querySelector('button[data-index="0"]');
      if (firstEl) (firstEl as HTMLButtonElement).focus();
    }
  };

  // Handle dropdown mood click
  const handleDropdownMoodClick = (mood: Mood) => {
    handleMoodSelect(mood);
  };

  // Reset input and mood selection
  const handleClear = () => {
    setSearchText('');
    handleMoodSelect(null);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto space-y-4">
      <div className="flex space-x-2 relative group">
        <Heart className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300 z-10" />
        <Sparkles className="absolute right-12 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-hover:text-purple-400 transition-colors duration-300 animate-pulse z-10" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={searchText}
          autoComplete="off"
          onFocus={() => setIsDropdownOpen(true)}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleInputKeyDown}
          className="w-full py-6 pl-12 pr-16 text-left bg-white/90 backdrop-blur-sm border-2 border-white/30 rounded-full shadow-lg hover:shadow-xl focus:shadow-xl transition-all duration-300 hover:bg-white focus:bg-white group-hover:border-purple-300 focus:border-purple-400"
          aria-label="Type your mood"
        />
        {searchText && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 rounded-full focus:outline-none transition-all duration-300 hover:scale-110 z-10"
            aria-label="Clear mood input"
            tabIndex={0}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Dropdown menu for moods */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 mt-2 z-50 bg-white/95 backdrop-blur-xl border-2 border-white/30 rounded-2xl shadow-2xl max-h-80 overflow-y-auto animate-fade-in"
        >
          {filteredMoods.length === 0 && (
            <div className="px-6 py-4 text-gray-500 text-sm text-center">No matching moods found ✨</div>
          )}
          {filteredMoods.map((mood, idx) => (
            <button
              key={mood.id}
              data-index={idx}
              className="flex w-full items-center py-4 px-6 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 cursor-pointer text-left transition-all duration-300 hover:scale-[1.02] border-b border-gray-100 last:border-b-0 group"
              onClick={() => handleDropdownMoodClick(mood)}
              tabIndex={0}
            >
              <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">{mood.icon}</span>
              <div className="flex-1">
                <div className="font-bold text-gray-800 group-hover:text-purple-700 transition-colors">{mood.name}</div>
                <div className="text-sm text-gray-600 group-hover:text-purple-600">{mood.description}</div>
              </div>
              <Sparkles className="w-4 h-4 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300 opacity-0 group-hover:opacity-100" />
            </button>
          ))}
          {/* Custom mood option */}
          {searchText && !filteredMoods.some(mood => mood.name.toLowerCase() === searchText.trim().toLowerCase()) && (
            <button
              className="flex w-full items-center py-4 px-6 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 cursor-pointer text-left border-t-2 border-blue-200 transition-all duration-300 hover:scale-[1.02] group"
              onClick={() =>
                handleMoodSelect({
                  id: customMoodIdPrefix + searchText.trim(),
                  name: searchText.trim(),
                  icon: '🙂',
                  description: 'Custom mood entered',
                })
              }
              tabIndex={0}
            >
              <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">🙂</span>
              <div className="flex-1">
                <div className="font-bold text-gray-800 group-hover:text-blue-700">{searchText.trim()}</div>
                <div className="text-sm text-blue-500 group-hover:text-blue-600 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Custom mood - Let's get creative!
                </div>
              </div>
            </button>
          )}
        </div>
      )}

      {/* Selected mood display */}
      {selectedMood && (
        <div className="mt-6 p-6 rounded-2xl glass-card animate-bounce-in backdrop-blur-xl bg-gradient-to-r from-purple-100/50 to-pink-100/50 border-2 border-purple-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-4xl mr-4 animate-bounce">{selectedMood.icon}</span>
              <div>
                <h3 className="font-bold text-xl text-purple-800">{selectedMood.name}</h3>
                <p className="text-sm text-purple-600 flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  {selectedMood.description}
                </p>
              </div>
            </div>
            <button 
              onClick={handleClear}
              className="p-2 rounded-full hover:bg-red-100 transition-all duration-300 hover:scale-110 group"
              aria-label="Clear selected mood"
            >
              <X className="h-5 w-5 text-gray-500 group-hover:text-red-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodInput;
