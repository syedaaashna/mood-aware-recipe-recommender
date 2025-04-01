
import React, { useState, useEffect, useRef } from 'react';
import { VolumeX, Volume2, Pause, Play, SkipForward, SkipBack, Globe } from 'lucide-react';
import { Recipe } from '@/utils/moodRecipeData';
import { useToast } from '@/hooks/use-toast';

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
            languages.push({
              code: langCode,
              name: new Intl.DisplayNames([navigator.language], { type: 'language' }).of(langCode.split('-')[0]) || langCode,
              voice: voice
            });
            addedLanguageCodes.push(langCode);
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
      <div className="my-6 text-center p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="animate-pulse">
          <div className="h-6 w-3/4 mx-auto bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <h3 className="text-lg font-medium mb-4 flex items-center">
        <Volume2 className="w-5 h-5 mr-2 text-primary" />
        Voice Guidance
      </h3>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Listen to step-by-step instructions for this recipe
        </p>
      </div>
      
      {/* Current step indicator */}
      <div className="mb-4 p-3 rounded-md bg-primary/10 border border-primary/20">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Current Step:</span>
          <span className="text-sm">{currentStepIndex + 1} of {recipe.instructions.length}</span>
        </div>
        <p className="text-sm">
          {isSpeaking ? recipe.instructions[currentStepIndex] : "Press play to start voice guidance"}
        </p>
      </div>
      
      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <button 
            onClick={prevStep} 
            disabled={currentStepIndex === 0 || !isSpeaking}
            className={`p-2 rounded-full ${
              currentStepIndex === 0 || !isSpeaking
                ? 'text-gray-400 bg-gray-100 dark:bg-gray-800 dark:text-gray-600' 
                : 'text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
            aria-label="Previous step"
          >
            <SkipBack size={18} />
          </button>
          
          <button 
            onClick={togglePlayPause}
            className="p-3 rounded-full bg-primary text-white hover:bg-primary/90"
            aria-label={isSpeaking && !isPaused ? "Pause" : "Play"}
          >
            {isSpeaking && !isPaused ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <button 
            onClick={nextStep}
            disabled={currentStepIndex === recipe.instructions.length - 1 || !isSpeaking}
            className={`p-2 rounded-full ${
              currentStepIndex === recipe.instructions.length - 1 || !isSpeaking
                ? 'text-gray-400 bg-gray-100 dark:bg-gray-800 dark:text-gray-600' 
                : 'text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
            aria-label="Next step"
          >
            <SkipForward size={18} />
          </button>
          
          <button 
            onClick={stopSpeaking}
            disabled={!isSpeaking}
            className={`p-2 rounded-full ${
              !isSpeaking
                ? 'text-gray-400 bg-gray-100 dark:bg-gray-800 dark:text-gray-600' 
                : 'text-red-600 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50'
            }`}
            aria-label="Stop"
          >
            <VolumeX size={18} />
          </button>
        </div>
        
        <div className="relative">
          <button
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            className="flex items-center space-x-1 p-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Select language"
          >
            <Globe size={16} />
            <span className="text-sm">{selectedLanguage?.name || 'Select language'}</span>
          </button>
          
          {isLanguageMenuOpen && (
            <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10 max-h-60 overflow-y-auto">
              <div className="py-1">
                {availableLanguages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => changeLanguage(language)}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      selectedLanguage?.code === language.code 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {language.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Settings */}
      <div className="space-y-3">
        <div>
          <label htmlFor="volume" className="block text-sm font-medium mb-1">
            Volume
          </label>
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label htmlFor="rate" className="block text-sm font-medium mb-1">
            Speed
          </label>
          <input
            id="rate"
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={speechRate}
            onChange={handleRateChange}
            className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Slow</span>
            <span>Normal</span>
            <span>Fast</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceGuidance;
