
import React, { useState, useRef } from 'react';
import { Volume2, Pause, Play, Settings, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { VoiceControls } from './voice-guidance/VoiceControls';
import { VoiceSettings } from './voice-guidance/VoiceSettings';
import { useVoiceSynthesis } from '@/hooks/use-voice-synthesis';
import { useToast } from '@/hooks/use-toast';
import { VoiceGuidanceProps } from '@/types/voice';

const VoiceGuidance: React.FC<VoiceGuidanceProps> = ({ recipe }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [volume, setVolume] = useState(1);
  const [speechRate, setSpeechRate] = useState(1);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { toast } = useToast();

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { 
    availableLanguages, 
    selectedLanguage, 
    setSelectedLanguage, 
    voicesLoaded,
    speechSynthRef 
  } = useVoiceSynthesis();

  const prepareInstructionText = (index: number) => {
    if (index < 0 || index >= recipe.instructions.length) {
      return '';
    }
    return `Step ${index + 1}: ${recipe.instructions[index]}`;
  };

  const speakStep = (stepIndex: number) => {
    if (!selectedLanguage || !selectedLanguage.voice) {
      toast({
        title: "No voice available",
        description: "No voice is available for the selected language",
        variant: "destructive"
      });
      return;
    }

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

  const stopSpeaking = () => {
    speechSynthRef.current.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (utteranceRef.current) {
      utteranceRef.current.volume = newVolume;
    }
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRate = parseFloat(e.target.value);
    setSpeechRate(newRate);
    
    if (utteranceRef.current) {
      utteranceRef.current.rate = newRate;
    }
  };

  const changeLanguage = (language: typeof selectedLanguage) => {
    if (language) {
      setSelectedLanguage(language);
      if (isSpeaking) {
        stopSpeaking();
        setTimeout(() => {
          speakStep(currentStepIndex);
        }, 100);
      }
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
          
          <VoiceControls
            isSpeaking={isSpeaking}
            isPaused={isPaused}
            currentStepIndex={currentStepIndex}
            totalSteps={recipe.instructions.length}
            onPrevStep={() => currentStepIndex > 0 && speakStep(currentStepIndex - 1)}
            onNextStep={() => currentStepIndex < recipe.instructions.length - 1 && speakStep(currentStepIndex + 1)}
            onTogglePlayPause={togglePlayPause}
            onStop={stopSpeaking}
          />
          
          <VoiceSettings
            volume={volume}
            speechRate={speechRate}
            selectedLanguage={selectedLanguage}
            availableLanguages={availableLanguages}
            onVolumeChange={handleVolumeChange}
            onRateChange={handleRateChange}
            onLanguageChange={changeLanguage}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default VoiceGuidance;
