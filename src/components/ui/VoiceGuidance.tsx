
import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Globe } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface VoiceGuidanceProps {
  instructions: string[];
  title: string;
  manualControlled?: boolean;
  externalPlayingState?: boolean;
  onPlayingStateChange?: (isPlaying: boolean) => void;
}

const languageOptions = [
  { code: 'en-US', name: 'English (US)' },
  { code: 'hi-IN', name: 'Hindi' },
  { code: 'es-ES', name: 'Spanish' },
  { code: 'fr-FR', name: 'French' },
  { code: 'de-DE', name: 'German' }
];

const VoiceGuidance = ({ 
  instructions, 
  title, 
  manualControlled = true, 
  externalPlayingState, 
  onPlayingStateChange 
}: VoiceGuidanceProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isSpeakingRef = useRef<boolean>(false);
  const { toast } = useToast();

  // Initialize speech synthesis
  useEffect(() => {
    synthRef.current = window.speechSynthesis;
    
    // Restore user's language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
    
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Handle external playing state
  useEffect(() => {
    if (externalPlayingState !== undefined) {
      setIsPlaying(externalPlayingState);
    }
  }, [externalPlayingState]);

  // Update parent state when playing state changes
  useEffect(() => {
    if (onPlayingStateChange && externalPlayingState !== isPlaying) {
      onPlayingStateChange(isPlaying);
    }
  }, [isPlaying, onPlayingStateChange, externalPlayingState]);

  // Speak current step when playing, step changes, or language changes
  useEffect(() => {
    if (!isPlaying || isMuted || !instructions[currentStep] || !synthRef.current) {
      return;
    }
    
    // Cancel any ongoing speech before starting new one
    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }
    
    // Timeout to ensure previous speech is canceled
    setTimeout(() => {
      if (!isPlaying) return;
      
      const stepText = `Step ${currentStep + 1}: ${instructions[currentStep]}`;
      const utterance = new SpeechSynthesisUtterance(stepText);
      utterance.lang = selectedLanguage;
      
      // Adjust voice settings for better pronunciation
      if (selectedLanguage === 'hi-IN') {
        utterance.rate = 0.7; // Slower rate for Hindi
        utterance.pitch = 1.0; // Normal pitch for Hindi
        utterance.volume = 1.0; // Full volume
      } else {
        utterance.rate = 0.9;
        utterance.pitch = 1.0;
      }
      
      utterance.onend = () => {
        isSpeakingRef.current = false;
        
        // Auto-advance to next step after a short pause if auto-playing
        if (isPlaying && !manualControlled && currentStep < instructions.length - 1) {
          setTimeout(() => {
            setCurrentStep(prev => prev + 1);
          }, 1000);
        } else if (currentStep === instructions.length - 1 && isPlaying) {
          setIsPlaying(false);
          
          if (onPlayingStateChange) {
            onPlayingStateChange(false);
          }
          
          toast({
            title: "Instructions Complete",
            description: "All steps have been read. Enjoy your meal!",
            duration: 3000,
          });
        }
      };
      
      utterance.onerror = (event) => {
        console.error("Speech synthesis error:", event);
        isSpeakingRef.current = false;
        
        toast({
          title: "Voice Guidance Error",
          description: "There was a problem with speech synthesis. Try again.",
          duration: 3000,
        });
      };
      
      // Prevent multiple utterances from starting at once
      if (!isSpeakingRef.current) {
        isSpeakingRef.current = true;
        utteranceRef.current = utterance;
        
        // Get available voices and try to find one for the selected language
        const voices = synthRef.current.getVoices();
        const languageVoice = voices.find(voice => voice.lang.includes(selectedLanguage.split('-')[0]));
        
        if (languageVoice) {
          utterance.voice = languageVoice;
        }
        
        synthRef.current.speak(utterance);
      }
    }, 100);
  }, [isPlaying, isMuted, currentStep, selectedLanguage, instructions, manualControlled, onPlayingStateChange, toast]);

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', selectedLanguage);
  }, [selectedLanguage]);

  const togglePlayPause = () => {
    const newPlayingState = !isPlaying;
    
    if (newPlayingState && isMuted) {
      setIsMuted(false);
    }
    
    setIsPlaying(newPlayingState);
    
    if (onPlayingStateChange) {
      onPlayingStateChange(newPlayingState);
    }

    toast({
      title: newPlayingState ? "Voice Guidance Started" : "Voice Guidance Paused",
      description: newPlayingState ? "I'll guide you through each step of the recipe." : "Voice guidance has been paused.",
      duration: 2000,
    });
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    
    if (newMutedState && isPlaying) {
      setIsPlaying(false);
      
      if (onPlayingStateChange) {
        onPlayingStateChange(false);
      }
      
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    }
    
    toast({
      title: isMuted ? "Voice Guidance Enabled" : "Voice Guidance Muted",
      description: isMuted ? "You'll now hear step-by-step instructions." : "Voice guidance is now muted.",
      duration: 2000,
    });
  };

  const nextStep = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(prev => prev + 1);
      
      // Cancel current speech when manually advancing
      if (synthRef.current && synthRef.current.speaking) {
        synthRef.current.cancel();
        isSpeakingRef.current = false;
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      
      // Cancel current speech when manually going back
      if (synthRef.current && synthRef.current.speaking) {
        synthRef.current.cancel();
        isSpeakingRef.current = false;
      }
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const changeLanguage = (langCode: string) => {
    setSelectedLanguage(langCode);
    setShowLanguageSelector(false);
    
    const langName = languageOptions.find(lang => lang.code === langCode)?.name || langCode;
    
    toast({
      title: "Language Changed",
      description: `Voice guidance language set to ${langName}`,
      duration: 2000,
    });
    
    // Cancel current speech when changing language
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.cancel();
      isSpeakingRef.current = false;
    }
  };

  return (
    <div 
      className={`fixed bottom-6 left-6 z-40 shadow-lg rounded-xl transition-all duration-300 overflow-hidden ${
        isExpanded ? 'w-72' : 'w-auto'
      }`}
      style={{
        background: 'rgba(139, 92, 246, 0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <div className="p-3 border-b border-white/10 flex items-center justify-between">
        <button 
          onClick={toggleExpand} 
          className="text-sm font-medium text-white flex items-center"
        >
          {isExpanded ? 'Voice Guidance' : ''}
          <Volume2 className={`${isExpanded ? 'ml-2' : ''} h-5 w-5`} />
        </button>
        {isExpanded && (
          <div className="flex items-center">
            <button
              onClick={() => setShowLanguageSelector(!showLanguageSelector)}
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors mr-1"
              aria-label="Change language"
            >
              <Globe size={16} color="white" />
            </button>
            <button 
              onClick={toggleMute} 
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={16} color="white" /> : <Volume2 size={16} color="white" />}
            </button>
          </div>
        )}
      </div>
      
      {showLanguageSelector && isExpanded && (
        <div className="bg-white/10 p-2 max-h-40 overflow-y-auto">
          {languageOptions.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left p-2 text-sm rounded-md transition-colors text-white ${
                selectedLanguage === lang.code 
                  ? 'bg-white/20 font-medium' 
                  : 'hover:bg-white/10'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
      
      {isExpanded && (
        <div className="p-3 text-white">
          <h3 className="font-medium text-sm text-center mb-2">
            {title}
          </h3>
          
          <div className="mt-2 mb-3">
            <div className="text-sm mb-1 flex justify-between">
              <span>Step {currentStep + 1} of {instructions.length}</span>
              <span>{Math.round((currentStep + 1) / instructions.length * 100)}%</span>
            </div>
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${((currentStep + 1) / instructions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 text-sm mb-3 max-h-24 overflow-y-auto">
            <p>{instructions[currentStep]}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous step"
            >
              <SkipBack size={18} color="white" />
            </button>
            
            <button
              onClick={togglePlayPause}
              className="p-2.5 rounded-full bg-white text-purple-600 hover:bg-white/90 transition-colors transform-none"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            
            <button
              onClick={nextStep}
              disabled={currentStep === instructions.length - 1}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next step"
            >
              <SkipForward size={18} color="white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceGuidance;
