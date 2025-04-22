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

  const handleTextSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchLower = searchText.toLowerCase();
    const matchedMood = moods.find(mood => 
      mood.name.toLowerCase().includes(searchLower) || 
      mood.description.toLowerCase().includes(searchLower)
    );

    if (matchedMood) {
      onMoodSelect(matchedMood);
      setSearchText('');
      toast({
        title: "Mood Found",
        description: `Found matching mood: ${matchedMood.name}`,
        duration: 3000,
      });
    } else {
      toast({
        title: "No Mood Found",
        description: "Try another search term or select from the dropdown",
        duration: 3000,
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <form onSubmit={handleTextSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder="Type your mood..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-1"
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          Search
        </button>
      </form>

      <div className="relative">
        <p className="text-sm text-gray-500 mb-2">Or select from available moods:</p>
        <Select onValueChange={handleMoodSelect} value={selectedMood?.id}>
          <SelectTrigger className="w-full py-6 text-left bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm">
            <SelectValue placeholder="How are you feeling today?" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px] overflow-y-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            {moods.map((mood) => (
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
