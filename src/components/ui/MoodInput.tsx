import { useState, useEffect } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
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

const MoodInput = ({ onMoodSelect, selectedMood }: MoodInputProps) => {
  const { toast } = useToast();
  const [searchText, setSearchText] = useState('');
  const [filteredMoods, setFilteredMoods] = useState(moods);

  const handleMoodSelect = (moodId: string) => {
    const selectedMood = moods.find(mood => mood.id === moodId);
    if (selectedMood) {
      onMoodSelect(selectedMood);
      setSearchText('');
      toast({
        title: "Mood Selected",
        description: `Finding recipes for your ${selectedMood.name} mood`,
        duration: 3000,
      });
    }
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    const searchLower = text.toLowerCase();
    const filtered = moods.filter(mood => 
      mood.name.toLowerCase().includes(searchLower) || 
      mood.description.toLowerCase().includes(searchLower)
    );
    setFilteredMoods(filtered);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Type or select your mood..."
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full py-6 pr-10 text-left bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm"
        />
        <Select onValueChange={handleMoodSelect} value={selectedMood?.id}>
          <SelectTrigger className="absolute inset-0 opacity-0 cursor-pointer">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="max-h-[300px] overflow-y-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
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
