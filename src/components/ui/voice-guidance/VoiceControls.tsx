
import React from 'react';
import { Button } from '@/components/ui/button';
import { SkipBack, SkipForward, Play, Pause, VolumeX } from 'lucide-react';

interface VoiceControlsProps {
  isSpeaking: boolean;
  isPaused: boolean;
  currentStepIndex: number;
  totalSteps: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  onTogglePlayPause: () => void;
  onStop: () => void;
}

export const VoiceControls: React.FC<VoiceControlsProps> = ({
  isSpeaking,
  isPaused,
  currentStepIndex,
  totalSteps,
  onPrevStep,
  onNextStep,
  onTogglePlayPause,
  onStop,
}) => {
  return (
    <div className="flex items-center justify-between mb-3 gap-1">
      <Button 
        onClick={onPrevStep} 
        disabled={currentStepIndex === 0 || !isSpeaking}
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
      >
        <SkipBack size={14} />
      </Button>
      
      <Button 
        onClick={onTogglePlayPause}
        variant="default"
        size="icon"
        className="h-10 w-10 rounded-full"
      >
        {isSpeaking && !isPaused ? <Pause size={16} /> : <Play size={16} />}
      </Button>
      
      <Button 
        onClick={onNextStep}
        disabled={currentStepIndex === totalSteps - 1 || !isSpeaking}
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
      >
        <SkipForward size={14} />
      </Button>
      
      <Button 
        onClick={onStop}
        disabled={!isSpeaking}
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
      >
        <VolumeX size={14} />
      </Button>
    </div>
  );
};
