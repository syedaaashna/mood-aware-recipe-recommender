
import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import { useToast } from "@/components/ui/toast";

interface VoiceGuidanceProps {
  instructions: string[];
  title: string;
}

const VoiceGuidance = ({ instructions, title }: VoiceGuidanceProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const synth = useRef<SpeechSynthesis | null>(null);
  const utterance = useRef<SpeechSynthesisUtterance | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    synth.current = window.speechSynthesis;
    
    return () => {
      if (synth.current) {
        synth.current.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying && !isMuted) {
      speakCurrentStep();
    } else if (utterance.current && synth.current) {
      synth.current.cancel();
    }
  }, [isPlaying, isMuted, currentStep]);

  const speakCurrentStep = () => {
    if (!synth.current || isMuted || !instructions[currentStep]) return;
    
    synth.current.cancel();
    utterance.current = new SpeechSynthesisUtterance(`Step ${currentStep + 1}: ${instructions[currentStep]}`);
    
    // Get available voices and select a good one
    const voices = synth.current.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.name.includes('Google') || 
      voice.name.includes('Samantha') || 
      voice.name.includes('Female')
    );
    
    if (preferredVoice) {
      utterance.current.voice = preferredVoice;
    }
    
    utterance.current.rate = 0.9; // Slightly slower for clarity
    utterance.current.pitch = 1.1; // Slightly higher pitch
    
    utterance.current.onend = () => {
      // Move to next step automatically when voice ends
      if (currentStep < instructions.length - 1 && isPlaying) {
        setTimeout(() => {
          setCurrentStep(prev => prev + 1);
        }, 1000); // 1s pause between steps
      } else if (currentStep === instructions.length - 1 && isPlaying) {
        setIsPlaying(false);
        toast({
          title: "Cooking Complete!",
          description: "All cooking steps have been read. Enjoy your meal!",
          duration: 5000,
        });
      }
    };
    
    synth.current.speak(utterance.current);
  };

  const togglePlayPause = () => {
    if (!isPlaying && isMuted) {
      setIsMuted(false);
      setTimeout(() => setIsPlaying(true), 100);
    } else {
      setIsPlaying(!isPlaying);
    }

    if (!isPlaying) {
      toast({
        title: "Voice Guidance Started",
        description: "I'll guide you through each step of the recipe.",
        duration: 3000,
      });
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    if (!isMuted && isPlaying) {
      setIsPlaying(false);
    }
    
    toast({
      title: isMuted ? "Voice Guidance Enabled" : "Voice Guidance Muted",
      description: isMuted ? "You'll now hear step-by-step instructions." : "Voice guidance is now muted.",
      duration: 3000,
    });
  };

  const nextStep = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 glass-card shadow-lg rounded-xl transition-all duration-300 overflow-hidden ${
        isExpanded ? 'w-80' : 'w-auto'
      }`}
    >
      <div className="p-4 bg-primary bg-opacity-10 border-b border-white/10 flex items-center justify-between">
        <button 
          onClick={toggleExpand} 
          className="text-sm font-medium text-primary-foreground flex items-center"
        >
          {isExpanded ? 'Voice Guidance' : ''}
          <Volume2 className={`${isExpanded ? 'ml-2' : ''} h-5 w-5`} />
        </button>
        {isExpanded && (
          <div className="flex items-center">
            <button 
              onClick={toggleMute} 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        )}
      </div>
      
      {isExpanded && (
        <div className="p-4">
          <h3 className="font-medium text-sm text-center mb-2">
            {title}
          </h3>
          
          <div className="mt-2 mb-4">
            <div className="text-sm mb-1 flex justify-between">
              <span className="text-primary-foreground">Step {currentStep + 1} of {instructions.length}</span>
              <span className="text-primary-foreground">{Math.round((currentStep + 1) / instructions.length * 100)}%</span>
            </div>
            <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((currentStep + 1) / instructions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3 text-sm mb-4 max-h-32 overflow-y-auto">
            <p>{instructions[currentStep]}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous step"
            >
              <SkipBack size={20} />
            </button>
            
            <button
              onClick={togglePlayPause}
              className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button
              onClick={nextStep}
              disabled={currentStep === instructions.length - 1}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next step"
            >
              <SkipForward size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceGuidance;
