
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { moods, Mood } from '@/utils/moodRecipeData';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MoodInputProps {
  onMoodSelect: (mood: Mood | null) => void;
  selectedMood: Mood | null;
}

const customMoodIdPrefix = "__custom-";

const MoodInput = ({ onMoodSelect, selectedMood }: MoodInputProps) => {
  const { toast } = useToast();
  const [searchText, setSearchText] = useState('');
  const [filteredMoods, setFilteredMoods] = useState(moods);

  // Handles both selecting a mood from dropdown and custom text entry
  const handleMoodSelect = (moodIdOrCustomText: string) => {
    let selected: Mood | null = null;

    // Detect if it's a custom mood (not found by id)
    if (moodIdOrCustomText.startsWith(customMoodIdPrefix)) {
      const text = moodIdOrCustomText.replace(customMoodIdPrefix, '').trim();
      selected = {
        id: customMoodIdPrefix + text,
        name: text,
        icon: '🙂', // generic icon for custom moods
        description: 'Custom mood entered',
      };
    } else {
      selected = moods.find(mood => mood.id === moodIdOrCustomText) || null;
    }
    if (selected) {
      onMoodSelect(selected);
      setSearchText('');
      toast({
        title: "Mood Selected",
        description: `Finding recipes for your "${selected.name}" mood`,
        duration: 3000,
      });
    }
  };

  const handleInputChange = (text: string) => {
    setSearchText(text);
    const searchLower = text.toLowerCase();
    const filtered = moods.filter(mood => 
      mood.name.toLowerCase().includes(searchLower) || 
      mood.description.toLowerCase().includes(searchLower)
    );
    setFilteredMoods(filtered);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchText.trim()) {
      handleMoodSelect(customMoodIdPrefix + searchText.trim());
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Type your mood or select below..."
          value={searchText}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleInputKeyDown}
          className="w-3/4 py-6 pr-10 text-left bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm"
          aria-label="Type your mood"
        />
        <Select
          onValueChange={handleMoodSelect}
          value={
            selectedMood && !selectedMood.id.startsWith(customMoodIdPrefix)
              ? selectedMood.id
              : undefined
          }
        >
          <SelectTrigger className="w-1/4">
            <SelectValue placeholder="Select mood" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px] overflow-y-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 z-50">
            {filteredMoods.length === 0 && (
              <div className="px-4 py-3 text-gray-500 text-sm">No presets</div>
            )}
            {filteredMoods.map((mood) => (
              <SelectItem 
                key={mood.id} 
                value={mood.id}
                className="flex items-center py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                <span className="text-2xl mr-3">{mood.icon}</span>
                <div>
                  <div className="font-medium">{mood.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{mood.description}</div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
              onClick={() => onMoodSelect(null)}
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
