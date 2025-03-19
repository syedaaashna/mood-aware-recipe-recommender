
import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Globe, Info } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface VoiceGuidanceProps {
  instructions: string[];
  title: string;
}

// Language options for voice guidance with improved support
const languageOptions = [
  { code: 'en-US', name: 'English (US)' },
  { code: 'es-ES', name: 'Spanish' },
  { code: 'fr-FR', name: 'French' },
  { code: 'de-DE', name: 'German' },
  { code: 'it-IT', name: 'Italian' },
  { code: 'zh-CN', name: 'Chinese' },
  { code: 'ja-JP', name: 'Japanese' },
  { code: 'ko-KR', name: 'Korean' },
  { code: 'hi-IN', name: 'Hindi' },
  { code: 'pt-BR', name: 'Portuguese' },
  { code: 'ru-RU', name: 'Russian' },
  { code: 'nl-NL', name: 'Dutch' },
  { code: 'pl-PL', name: 'Polish' },
  { code: 'id-ID', name: 'Indonesian' },
  { code: 'th-TH', name: 'Thai' },
  { code: 'tr-TR', name: 'Turkish' },
  { code: 'vi-VN', name: 'Vietnamese' }
];

// Fallback language mapping to improve voice compatibility
const fallbackLanguageMapping: Record<string, string> = {
  'zh-CN': 'zh-HK',
  'hi-IN': 'en-IN',
  'id-ID': 'en-US',
  'th-TH': 'en-US',
  'vi-VN': 'en-US'
};

const VoiceGuidance = ({ instructions, title }: VoiceGuidanceProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [showVoiceInfo, setShowVoiceInfo] = useState(false);
  const [lastUsedVoice, setLastUsedVoice] = useState<string | null>(null);
  const synth = useRef<SpeechSynthesis | null>(null);
  const utterance = useRef<SpeechSynthesisUtterance | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    synth.current = window.speechSynthesis;
    
    const loadVoices = () => {
      const voices = synth.current?.getVoices() || [];
      setAvailableVoices(voices);
      console.log("Available voices:", voices.map(v => `${v.name} (${v.lang})`));
    };

    if (synth.current) {
      synth.current.onvoiceschanged = loadVoices;
      loadVoices();
    }
    
    // Try to restore the user's language preference from localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
    
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
  }, [isPlaying, isMuted, currentStep, selectedLanguage]);

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', selectedLanguage);
  }, [selectedLanguage]);

  const speakCurrentStep = () => {
    if (!synth.current || isMuted || !instructions[currentStep]) return;
    
    synth.current.cancel();
    
    let stepText = `Step ${currentStep + 1}: ${instructions[currentStep]}`;
    utterance.current = new SpeechSynthesisUtterance(stepText);
    
    // First try with the selected language
    utterance.current.lang = selectedLanguage;
    console.log(`Attempting to speak in language: ${selectedLanguage}`);
    
    // Find matching voices for the selected language
    let matchingVoices = availableVoices.filter(voice => {
      const voiceLang = voice.lang.toLowerCase();
      const selectedLangCode = selectedLanguage.toLowerCase();
      
      // Exact match
      if (voiceLang === selectedLangCode) return true;
      
      // Partial match (e.g., 'en-US' should match 'en')
      const langCode = selectedLangCode.substring(0, 2);
      return voiceLang.startsWith(langCode);
    });
    
    console.log(`Found ${matchingVoices.length} matching voices for ${selectedLanguage}`);
    
    // If no matching voices found, try fallback language
    if (matchingVoices.length === 0 && fallbackLanguageMapping[selectedLanguage]) {
      const fallbackLang = fallbackLanguageMapping[selectedLanguage];
      utterance.current.lang = fallbackLang;
      console.log(`No matching voices found. Using fallback language: ${fallbackLang}`);
      
      matchingVoices = availableVoices.filter(voice => {
        return voice.lang.toLowerCase() === fallbackLang.toLowerCase() || 
               voice.lang.toLowerCase().startsWith(fallbackLang.substring(0, 2).toLowerCase());
      });
    }
    
    if (matchingVoices.length > 0) {
      // Select the best voice with this priority:
      // 1. Google voices that exactly match the language
      // 2. Any Google voice
      // 3. Female voices or specific voices like Samantha
      // 4. Any matching voice
      const preferredVoice = matchingVoices.find(voice => 
        voice.name.includes('Google') && (utterance.current!.lang === voice.lang)
      ) || 
      matchingVoices.find(voice => 
        voice.name.includes('Google')
      ) ||
      matchingVoices.find(voice => 
        voice.name.includes('Female') || 
        voice.name.includes('Samantha')
      ) || 
      matchingVoices[0];
      
      utterance.current.voice = preferredVoice;
      setLastUsedVoice(`${preferredVoice.name} (${preferredVoice.lang})`);
      console.log(`Selected voice: ${preferredVoice.name} (${preferredVoice.lang})`);
    } else {
      console.log(`No matching or fallback voice found for ${selectedLanguage}. Defaulting to browser's choice.`);
      utterance.current.lang = 'en-US';
      setLastUsedVoice('Default browser voice');
    }
    
    utterance.current.rate = 0.9;
    utterance.current.pitch = 1.1;
    
    utterance.current.onend = () => {
      if (currentStep < instructions.length - 1 && isPlaying) {
        setTimeout(() => {
          setCurrentStep(prev => prev + 1);
        }, 1000);
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

  const changeLanguage = (langCode: string) => {
    console.log(`Changing language to: ${langCode}`);
    setSelectedLanguage(langCode);
    setShowLanguageSelector(false);
    
    const langName = languageOptions.find(lang => lang.code === langCode)?.name || langCode;
    
    toast({
      title: "Language Changed",
      description: `Voice guidance language set to ${langName}`,
      duration: 3000,
    });
    
    if (isPlaying) {
      if (synth.current) synth.current.cancel();
      setTimeout(() => speakCurrentStep(), 100);
    }
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 glass-card shadow-lg rounded-xl transition-all duration-300 overflow-hidden ${
        isExpanded ? 'w-80' : 'w-auto'
      }`}
      style={{
        background: 'linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
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
              onClick={() => setShowVoiceInfo(!showVoiceInfo)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors mr-1"
              aria-label="Voice information"
              title="Voice information"
            >
              <Info size={16} color="white" />
            </button>
            <button
              onClick={() => setShowLanguageSelector(!showLanguageSelector)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors mr-2"
              aria-label="Change language"
            >
              <Globe size={18} color="white" />
            </button>
            <button 
              onClick={toggleMute} 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={18} color="white" /> : <Volume2 size={18} color="white" />}
            </button>
          </div>
        )}
      </div>
      
      {showVoiceInfo && isExpanded && (
        <div className="bg-white/10 p-3 max-h-40 overflow-y-auto">
          <p className="text-xs text-white mb-2">
            <strong>Current language:</strong> {languageOptions.find(l => l.code === selectedLanguage)?.name || selectedLanguage}
          </p>
          <p className="text-xs text-white mb-2">
            <strong>Using voice:</strong> {lastUsedVoice || 'Not yet determined'}
          </p>
          <p className="text-xs text-white">
            If voice quality is poor in your selected language, try a different language or check if your browser supports the selected language.
          </p>
        </div>
      )}
      
      {showLanguageSelector && isExpanded && (
        <div className="bg-white/10 p-2 max-h-40 overflow-y-auto">
          {languageOptions.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left p-2 text-sm rounded-md transition-colors ${
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
        <div className="p-4 text-white">
          <h3 className="font-medium text-sm text-center mb-2">
            {title}
          </h3>
          
          <div className="mt-2 mb-4">
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
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 text-sm mb-4 max-h-32 overflow-y-auto">
            <p>{instructions[currentStep]}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous step"
            >
              <SkipBack size={20} color="white" />
            </button>
            
            <button
              onClick={togglePlayPause}
              className="p-3 rounded-full bg-white text-primary hover:bg-white/90 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button
              onClick={nextStep}
              disabled={currentStep === instructions.length - 1}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next step"
            >
              <SkipForward size={20} color="white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceGuidance;
