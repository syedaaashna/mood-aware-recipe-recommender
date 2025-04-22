
import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { moods, Mood } from '@/utils/moodRecipeData';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

interface MoodInputProps {
  onMoodSelect: (mood: Mood | null) => void;
  selectedMood: Mood | null;
}

const customMoodIdPrefix = "__custom-";

const MoodInput = ({ onMoodSelect, selectedMood }: MoodInputProps) => {
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
        title: "Mood Selected",
        description: `Finding recipes for your "${mood.name}" mood`,
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
      <div className="flex space-x-2 relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Type your mood or select below..."
          value={searchText}
          autoComplete="off"
          onFocus={() => setIsDropdownOpen(true)}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleInputKeyDown}
          className="w-full py-6 pr-10 text-left bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm"
          aria-label="Type your mood"
        />
        {searchText && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-full focus:outline-none"
            aria-label="Clear mood input"
            tabIndex={0}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Dropdown menu for moods, always combined with the text bar */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 mt-2 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-72 overflow-y-auto"
        >
          {filteredMoods.length === 0 && (
            <div className="px-4 py-3 text-gray-500 text-sm">No matching moods</div>
          )}
          {filteredMoods.map((mood, idx) => (
            <button
              key={mood.id}
              data-index={idx}
              className="flex w-full items-center py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-left"
              onClick={() => handleDropdownMoodClick(mood)}
              tabIndex={0}
            >
              <span className="text-2xl mr-3">{mood.icon}</span>
              <div>
                <div className="font-medium">{mood.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{mood.description}</div>
              </div>
            </button>
          ))}
          {/* If user entered some text, allow custom mood as first option */}
          {searchText && !filteredMoods.some(mood => mood.name.toLowerCase() === searchText.trim().toLowerCase()) && (
            <button
              className="flex w-full items-center py-3 px-4 hover:bg-blue-50 dark:hover:bg-blue-900 cursor-pointer text-left border-t border-gray-200 dark:border-gray-700"
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
              <span className="text-2xl mr-3">🙂</span>
              <div>
                <div className="font-medium">{searchText.trim()}</div>
                <div className="text-sm text-blue-500 dark:text-blue-300">Custom mood</div>
              </div>
            </button>
          )}
        </div>
      )}

      {/* Show selected mood summary */}
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
              onClick={handleClear}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Clear selected mood"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodInput;
