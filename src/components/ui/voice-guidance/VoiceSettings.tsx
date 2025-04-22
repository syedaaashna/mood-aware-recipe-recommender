
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Language } from '@/types/voice';

interface VoiceSettingsProps {
  volume: number;
  speechRate: number;
  selectedLanguage: Language | null;
  availableLanguages: Language[];
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLanguageChange: (language: Language) => void;
}

export const VoiceSettings: React.FC<VoiceSettingsProps> = ({
  volume,
  speechRate,
  selectedLanguage,
  availableLanguages,
  onVolumeChange,
  onRateChange,
  onLanguageChange,
}) => {
  return (
    <div className="space-y-2 text-xs">
      <div>
        <div className="flex justify-between mb-1">
          <label htmlFor="volume" className="font-medium">Volume</label>
          <span>{Math.round(volume * 100)}%</span>
        </div>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={onVolumeChange}
          className="w-full h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 appearance-none cursor-pointer"
        />
      </div>
      
      <div>
        <div className="flex justify-between mb-1">
          <label htmlFor="rate" className="font-medium">Speed</label>
          <span>{speechRate}x</span>
        </div>
        <input
          id="rate"
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={speechRate}
          onChange={onRateChange}
          className="w-full h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-gray-500 mt-0.5">
          <span>Slow</span>
          <span>Normal</span>
          <span>Fast</span>
        </div>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 text-xs px-2"
          >
            <Globe size={14} className="mr-1" />
            {selectedLanguage?.name?.slice(0, 6) || 'Lang'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-40 p-0 max-h-60 overflow-auto">
          <div className="py-1">
            {availableLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => onLanguageChange(language)}
                className={`block w-full text-left px-3 py-1.5 text-xs ${
                  selectedLanguage?.code === language.code 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {language.name}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
