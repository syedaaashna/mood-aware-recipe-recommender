
import React, { useState, useEffect, useRef } from 'react';
import { VolumeX, Volume2, Pause, Play, SkipForward, SkipBack, Globe, Settings, X } from 'lucide-react';
import { Recipe } from '@/utils/moodRecipeData';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface VoiceGuidanceProps {
  recipe: Recipe;
}

interface Language {
  code: string;
  name: string;
  voice: SpeechSynthesisVoice | null;
}

const VoiceGuidance: React.FC<VoiceGuidanceProps> = ({ recipe }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [availableLanguages, setAvailableLanguages] = useState<Language[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [volume, setVolume] = useState(1);
  const [speechRate, setSpeechRate] = useState(1);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { toast } = useToast();

  const speechSynthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Load available voices and languages
  useEffect(() => {
    const loadVoices = () => {
      const synth = speechSynthRef.current;
      const voices = synth.getVoices();
      
      if (voices.length > 0) {
        const languages: Language[] = [];
        const addedLanguageCodes: string[] = [];
        
        // Common languages to prioritize
        const priorityLanguages = ['en-US', 'en-GB', 'es-ES', 'fr-FR', 'de-DE', 'it-IT', 'zh-CN', 'ja-JP', 'hi-IN', 'ar-SA'];
        
        // First add priority languages
        priorityLanguages.forEach(langCode => {
          const voice = voices.find(v => v.lang === langCode);
          if (voice && !addedLanguageCodes.includes(langCode)) {
            languages.push({
              code: langCode,
              name: new Intl.DisplayNames([navigator.language], { type: 'language' }).of(langCode.split('-')[0]) || langCode,
              voice: voice
            });
            addedLanguageCodes.push(langCode);
          }
        });
        
        // Then add any other available languages
        voices.forEach(voice => {
          const langCode = voice.lang;
          if (!addedLanguageCodes.includes(langCode)) {
            try {
              languages.push({
                code: langCode,
                name: new Intl.DisplayNames([navigator.language], { type: 'language' }).of(langCode.split('-')[0]) || langCode,
                voice: voice
              });
              addedLanguageCodes.push(langCode);
            } catch (e) {
              console.log('Error getting language name:', e);
              // Fallback for unsupported languages
              languages.push({
                code: langCode,
                name: langCode,
                voice: voice
              });
              addedLanguageCodes.push(langCode);
            }
          }
        });
        
        setAvailableLanguages(languages);
        
        // Set default language to browser language or English
        const browserLangCode = navigator.language;
        const defaultLang = languages.find(l => l.code === browserLangCode) || 
                          languages.find(l => l.code.startsWith('en')) || 
                          languages[0];
        
        if (defaultLang) {
          setSelectedLanguage(defaultLang);
        }
        
        setVoicesLoaded(true);
      }
    };

    // Chrome loads voices asynchronously
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
    
    loadVoices();

    return () => {
      stopSpeaking();
    };
  }, []);

  // Prepare the text to speak for each instruction
  const prepareInstructionText = (index: number) => {
    if (index < 0 || index >= recipe.instructions.length) {
      return '';
    }
    
    return `Step ${index + 1}: ${recipe.instructions[index]}`;
  };

  // Start speaking from a specific step
  const speakStep = (stepIndex: number) => {
    if (!selectedLanguage || !selectedLanguage.voice) {
      toast({
        title: "No voice available",
        description: "No voice is available for the selected language",
        variant: "destructive"
      });
      return;
    }

    // Cancel any ongoing speech
    stopSpeaking();
    
    const textToSpeak = prepareInstructionText(stepIndex);
    
    if (textToSpeak) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.voice = selectedLanguage.voice;
      utterance.volume = volume;
      utterance.rate = speechRate;
      
      utterance.onend = () => {
        if (stepIndex < recipe.instructions.length - 1) {
          setTimeout(() => {
            setCurrentStepIndex(stepIndex + 1);
            speakStep(stepIndex + 1);
          }, 1000);
        } else {
          setIsSpeaking(false);
          setCurrentStepIndex(0);
        }
      };
      
      utterance.onerror = (event) => {
        console.error('SpeechSynthesis error:', event);
        toast({
          title: "Speech Error",
          description: "There was an error with the speech synthesis",
          variant: "destructive"
        });
        setIsSpeaking(false);
      };
      
      utteranceRef.current = utterance;
      speechSynthRef.current.speak(utterance);
      setIsSpeaking(true);
      setIsPaused(false);
      setCurrentStepIndex(stepIndex);
    }
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    if (!isSpeaking) {
      speakStep(currentStepIndex);
    } else if (speechSynthRef.current.speaking) {
      if (isPaused) {
        speechSynthRef.current.resume();
        setIsPaused(false);
      } else {
        speechSynthRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  // Stop speaking
  const stopSpeaking = () => {
    speechSynthRef.current.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  // Go to next step
  const nextStep = () => {
    if (currentStepIndex < recipe.instructions.length - 1) {
      stopSpeaking();
      speakStep(currentStepIndex + 1);
    }
  };

  // Go to previous step
  const prevStep = () => {
    if (currentStepIndex > 0) {
      stopSpeaking();
      speakStep(currentStepIndex - 1);
    }
  };

  // Change language
  const changeLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsLanguageMenuOpen(false);
    
    if (isSpeaking) {
      stopSpeaking();
      setTimeout(() => {
        speakStep(currentStepIndex);
      }, 100);
    }
  };

  // Set volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (utteranceRef.current) {
      utteranceRef.current.volume = newVolume;
    }
  };

  // Set speech rate
  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRate = parseFloat(e.target.value);
    setSpeechRate(newRate);
    
    if (utteranceRef.current) {
      utteranceRef.current.rate = newRate;
    }
  };

  if (!voicesLoaded) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full shadow-md border-primary/30 bg-white dark:bg-gray-800"
        >
          <Volume2 className="w-4 h-4 text-primary animate-pulse" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <PopoverTrigger asChild>
          <Button
            onClick={() => !isSettingsOpen && togglePlayPause()}
            variant="outline"
            size="icon"
            className={`rounded-full shadow-md border-primary/30 ${
              isSpeaking 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'bg-white dark:bg-gray-800 text-primary hover:bg-gray-100 dark:hover:bg-gray-700'
            } ${isSpeaking ? 'animate-pulse' : ''}`}
            aria-label="Voice Guidance"
          >
            {isSpeaking && isPaused ? (
              <Play className="w-4 h-4" />
            ) : isSpeaking ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </Button>
        </PopoverTrigger>
        
        <PopoverContent className="w-80 p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium flex items-center">
              <Volume2 className="w-4 h-4 mr-2 text-primary" />
              Voice Guidance Settings
            </h3>
            <Button
              onClick={() => setIsSettingsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {isSpeaking && (
            <div className="mb-3 p-2 rounded-md bg-primary/10 border border-primary/20 text-xs">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">Current Step:</span>
                <span>{currentStepIndex + 1} of {recipe.instructions.length}</span>
              </div>
              <p className="line-clamp-2 text-gray-600 dark:text-gray-300">
                {recipe.instructions[currentStepIndex]}
              </p>
            </div>
          )}
          
          {/* Controls */}
          <div className="flex items-center justify-between mb-3 gap-1">
            <Button 
              onClick={prevStep} 
              disabled={currentStepIndex === 0 || !isSpeaking}
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
            >
              <SkipBack size={14} />
            </Button>
            
            <Button 
              onClick={togglePlayPause}
              variant="default"
              size="icon"
              className="h-10 w-10 rounded-full"
            >
              {isSpeaking && !isPaused ? <Pause size={16} /> : <Play size={16} />}
            </Button>
            
            <Button 
              onClick={nextStep}
              disabled={currentStepIndex === recipe.instructions.length - 1 || !isSpeaking}
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
            >
              <SkipForward size={14} />
            </Button>
            
            <Button 
              onClick={stopSpeaking}
              disabled={!isSpeaking}
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
            >
              <VolumeX size={14} />
            </Button>
            
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
                      onClick={() => changeLanguage(language)}
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
          
          {/* Settings */}
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
                onChange={handleVolumeChange}
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
                onChange={handleRateChange}
                className="w-full h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-0.5">
                <span>Slow</span>
                <span>Normal</span>
                <span>Fast</span>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default VoiceGuidance;
