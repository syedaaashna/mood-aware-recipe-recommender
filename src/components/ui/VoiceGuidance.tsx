
import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Globe, Info } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface VoiceGuidanceProps {
  instructions: string[];
  title: string;
  manualControlled?: boolean; // If false, will auto-advance through steps
  externalPlayingState?: boolean; // Optional external control of playing state
  onPlayingStateChange?: (isPlaying: boolean) => void; // Callback to update parent state
}

// Language options for voice guidance with improved support including Hindi
const languageOptions = [
  { code: 'hi-IN', name: 'Hindi' }, // Prioritizing Hindi by placing it first
  { code: 'en-US', name: 'English (US)' },
  { code: 'es-ES', name: 'Spanish' },
  { code: 'fr-FR', name: 'French' },
  { code: 'de-DE', name: 'German' },
  { code: 'it-IT', name: 'Italian' },
  { code: 'zh-CN', name: 'Chinese' },
  { code: 'ja-JP', name: 'Japanese' },
  { code: 'ko-KR', name: 'Korean' },
  { code: 'pt-BR', name: 'Portuguese' },
  { code: 'ru-RU', name: 'Russian' },
  { code: 'nl-NL', name: 'Dutch' },
  { code: 'pl-PL', name: 'Polish' },
  { code: 'id-ID', name: 'Indonesian' },
  { code: 'th-TH', name: 'Thai' },
  { code: 'tr-TR', name: 'Turkish' },
  { code: 'vi-VN', name: 'Vietnamese' }
];

// Improved fallback language mapping to better support Hindi
const fallbackLanguageMapping: Record<string, string> = {
  'zh-CN': 'zh-HK',
  'hi-IN': 'en-IN', // If Hindi voice isn't available, fallback to Indian English
  'id-ID': 'en-US',
  'th-TH': 'en-US',
  'vi-VN': 'en-US'
};

// Common phrases in Hindi for cooking instructions
const hindiPhrases: Record<string, string> = {
  'step': 'चरण',
  'ingredients': 'सामग्री',
  'instructions': 'निर्देश',
  'preheat': 'पहले से गरम करें',
  'mix': 'मिलाएं',
  'cook': 'पकाएं',
  'minutes': 'मिनट',
  'add': 'डालें',
  'cut': 'काटें',
  'serve': 'परोसें',
  'heat': 'गरम करें',
  'stir': 'हिलाएं',
  'boil': 'उबालें',
  'bake': 'बेक करें',
  'fry': 'तलें',
  'simmer': 'धीमी आंच पर पकाएं',
  'garnish': 'सजाएं',
  'plate': 'प्लेट में डालें',
  'enjoy': 'आनंद लें'
};

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
  const [selectedLanguage, setSelectedLanguage] = useState('hi-IN'); // Default to Hindi
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [showVoiceInfo, setShowVoiceInfo] = useState(false);
  const [lastUsedVoice, setLastUsedVoice] = useState<string | null>(null);
  const [useHindiTranslation, setUseHindiTranslation] = useState(true);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(!manualControlled); // Set based on prop
  const synth = useRef<SpeechSynthesis | null>(null);
  const utterance = useRef<SpeechSynthesisUtterance | null>(null);
  const isProcessing = useRef<boolean>(false); // Flag to track if we're processing speech
  const maxRetries = useRef<number>(3); // Maximum number of retries for failed speech synthesis
  const currentRetries = useRef<number>(0); // Current retry count
  const { toast } = useToast();

  // Store speech queue to handle continuous playback more reliably
  const speechQueue = useRef<string[]>([]);
  
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
    
    // Handle browser visibility changes to improve speech synthesis reliability
    const handleVisibilityChange = () => {
      if (document.hidden && synth.current) {
        // If page is hidden, pause playback to prevent issues
        synth.current.pause();
      } else if (!document.hidden && synth.current && isPlaying) {
        // Resume if page becomes visible again and was playing
        synth.current.resume();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      if (synth.current) {
        synth.current.cancel();
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // If externally controlled, update local state
  useEffect(() => {
    if (externalPlayingState !== undefined) {
      setIsPlaying(externalPlayingState);
    }
  }, [externalPlayingState]);

  // When playing state changes internally, update parent if callback provided
  useEffect(() => {
    if (onPlayingStateChange && externalPlayingState !== isPlaying) {
      onPlayingStateChange(isPlaying);
    }
  }, [isPlaying, onPlayingStateChange, externalPlayingState]);

  // Force auto-play mode if manualControlled is false
  useEffect(() => {
    if (!manualControlled) {
      setIsAutoPlayEnabled(true);
    }
  }, [manualControlled]);

  useEffect(() => {
    if (isPlaying && !isMuted) {
      speakCurrentStep();
    } else if (utterance.current && synth.current) {
      synth.current.cancel();
    }
  }, [isPlaying, isMuted, currentStep, selectedLanguage, useHindiTranslation]);

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', selectedLanguage);
  }, [selectedLanguage]);

  // Translate basic cooking terms to Hindi
  const translateCookingTerms = (text: string): string => {
    if (!useHindiTranslation || selectedLanguage !== 'hi-IN' || !text) return text;
    
    let translatedText = text;
    
    // Replace common cooking terms with Hindi equivalents
    Object.entries(hindiPhrases).forEach(([englishTerm, hindiTerm]) => {
      const regex = new RegExp(`\\b${englishTerm}\\b`, 'gi');
      translatedText = translatedText.replace(regex, hindiTerm);
    });
    
    return translatedText;
  };

  const speakCurrentStep = () => {
    if (!synth.current || isMuted || !instructions[currentStep] || isProcessing.current) return;
    
    isProcessing.current = true;
    synth.current.cancel();
    
    let stepText = `Step ${currentStep + 1}: ${instructions[currentStep]}`;
    
    // Enhance Hindi support by translating common terms if Hindi is selected
    if (selectedLanguage === 'hi-IN' && useHindiTranslation) {
      stepText = `${hindiPhrases['step']} ${currentStep + 1}: ${translateCookingTerms(instructions[currentStep])}`;
    }
    
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
    
    // Special adjustment for Hindi voice
    if (selectedLanguage === 'hi-IN' && matchingVoices.length === 0) {
      // If no Hindi voice is found, try to find any Indian voice
      matchingVoices = availableVoices.filter(voice => voice.lang.includes('IN'));
      
      // If still no matches, try to find any Asian voice as they might pronounce better
      if (matchingVoices.length === 0) {
        matchingVoices = availableVoices.filter(voice => 
          voice.lang.includes('IN') || 
          voice.lang.includes('JP') || 
          voice.lang.includes('CN') || 
          voice.lang.includes('KR')
        );
      }
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
    
    // Adjust speech parameters to improve intelligibility for different languages
    if (selectedLanguage === 'hi-IN') {
      utterance.current.rate = 0.8; // Slower rate for Hindi
      utterance.current.pitch = 1.0;
    } else {
      utterance.current.rate = 0.9;
      utterance.current.pitch = 1.1;
    }
    
    // Improved error handling to ensure continuous playback
    utterance.current.onend = () => {
      isProcessing.current = false;
      currentRetries.current = 0; // Reset retry counter after successful speech
      
      if (isPlaying && isAutoPlayEnabled && currentStep < instructions.length - 1) {
        // Automatically move to the next step after a short pause
        setTimeout(() => {
          setCurrentStep(prev => prev + 1);
        }, 1500); // 1.5 second pause between steps
      } else if (currentStep === instructions.length - 1 && isPlaying) {
        setIsPlaying(false);
        
        // Notify parent component if callback is provided
        if (onPlayingStateChange) {
          onPlayingStateChange(false);
        }
        
        toast({
          title: selectedLanguage === 'hi-IN' ? "पकाना पूरा हुआ!" : "Cooking Complete!",
          description: selectedLanguage === 'hi-IN' 
            ? "सभी पकाने के चरण पढ़े गए हैं। अपने भोजन का आनंद लें!" 
            : "All cooking steps have been read. Enjoy your meal!",
          duration: 5000,
        });
      }
    };
    
    utterance.current.onerror = (event) => {
      console.error("Speech synthesis error occurred:", event);
      isProcessing.current = false;
      
      // Retry logic for failed speech synthesis
      if (currentRetries.current < maxRetries.current) {
        currentRetries.current++;
        console.log(`Retrying speech synthesis (${currentRetries.current}/${maxRetries.current})`);
        setTimeout(() => speakCurrentStep(), 1000); // Wait 1 second before retrying
      } else {
        // If max retries reached, move to next step if auto-play is enabled
        currentRetries.current = 0; // Reset for next step
        
        if (isPlaying && isAutoPlayEnabled && currentStep < instructions.length - 1) {
          toast({
            title: "Voice Guidance Issue",
            description: "There was a problem with speech synthesis. Moving to the next step.",
            duration: 3000,
          });
          
          setTimeout(() => {
            setCurrentStep(prev => prev + 1);
          }, 1000);
        }
      }
    };
    
    // Add robustness for mobile devices that might suspend speech synthesis
    if ('onbeforeunload' in window) {
      window.addEventListener('beforeunload', () => {
        if (synth.current) synth.current.cancel();
      }, { once: true });
    }
    
    synth.current.speak(utterance.current);
  };

  const togglePlayPause = () => {
    const newPlayingState = !isPlaying;
    
    if (newPlayingState && isMuted) {
      setIsMuted(false);
    }
    
    setIsPlaying(newPlayingState);
    
    // Notify parent component if callback is provided
    if (onPlayingStateChange) {
      onPlayingStateChange(newPlayingState);
    }

    if (newPlayingState) {
      toast({
        title: selectedLanguage === 'hi-IN' ? "आवाज मार्गदर्शन शुरू हुआ" : "Voice Guidance Started",
        description: selectedLanguage === 'hi-IN' 
          ? "मैं आपको व्यंजन के प्रत्येक चरण से गुजरने में मार्गदर्शन करूंगा।" 
          : "I'll guide you through each step of the recipe automatically.",
        duration: 3000,
      });
    }
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    
    if (newMutedState && isPlaying) {
      setIsPlaying(false);
      
      // Notify parent component if callback is provided
      if (onPlayingStateChange) {
        onPlayingStateChange(false);
      }
    }
    
    toast({
      title: isMuted 
        ? (selectedLanguage === 'hi-IN' ? "आवाज मार्गदर्शन सक्षम" : "Voice Guidance Enabled") 
        : (selectedLanguage === 'hi-IN' ? "आवाज मार्गदर्शन म्यूट किया गया" : "Voice Guidance Muted"),
      description: isMuted 
        ? (selectedLanguage === 'hi-IN' ? "अब आप चरण-दर-चरण निर्देश सुनेंगे।" : "You'll now hear step-by-step instructions.") 
        : (selectedLanguage === 'hi-IN' ? "आवाज मार्गदर्शन अब म्यूट है।" : "Voice guidance is now muted."),
      duration: 3000,
    });
  };

  // Toggle auto-play functionality
  const toggleAutoPlay = () => {
    // Only allow toggling if manualControlled is true
    if (manualControlled) {
      setIsAutoPlayEnabled(!isAutoPlayEnabled);
      
      toast({
        title: isAutoPlayEnabled 
          ? (selectedLanguage === 'hi-IN' ? "मैनुअल मोड सक्षम किया गया" : "Manual Mode Enabled") 
          : (selectedLanguage === 'hi-IN' ? "ऑटोप्ले सक्षम किया गया" : "Auto-play Enabled"),
        description: isAutoPlayEnabled 
          ? (selectedLanguage === 'hi-IN' ? "आपको अगले चरण पर जाने के लिए बटन दबाना होगा।" : "You'll need to press the button to advance to the next step.") 
          : (selectedLanguage === 'hi-IN' ? "निर्देश अब स्वचालित रूप से एक के बाद एक चलेंगे।" : "Instructions will now play one after another automatically."),
        duration: 3000,
      });
    }
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
    
    // If switching to Hindi, enable Hindi phrase translation by default
    setUseHindiTranslation(langCode === 'hi-IN');
    
    const langName = languageOptions.find(lang => lang.code === langCode)?.name || langCode;
    
    toast({
      title: langCode === 'hi-IN' ? "भाषा बदली गई" : "Language Changed",
      description: langCode === 'hi-IN' 
        ? `आवाज मार्गदर्शन भाषा ${langName} पर सेट की गई` 
        : `Voice guidance language set to ${langName}`,
      duration: 3000,
    });
    
    if (isPlaying) {
      if (synth.current) synth.current.cancel();
      setTimeout(() => speakCurrentStep(), 100);
    }
  };

  // Toggle Hindi phrase translation
  const toggleHindiTranslation = () => {
    setUseHindiTranslation(!useHindiTranslation);
    
    toast({
      title: selectedLanguage === 'hi-IN' ? "अनुवाद सेटिंग अपडेट की गई" : "Translation Setting Updated",
      description: useHindiTranslation 
        ? (selectedLanguage === 'hi-IN' ? "हिंदी अनुवाद अक्षम किया गया" : "Hindi translation disabled") 
        : (selectedLanguage === 'hi-IN' ? "हिंदी अनुवाद सक्षम किया गया" : "Hindi translation enabled"),
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
          {isExpanded ? (selectedLanguage === 'hi-IN' ? 'आवाज मार्गदर्शन' : 'Voice Guidance') : ''}
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
            <strong>{selectedLanguage === 'hi-IN' ? 'वर्तमान भाषा:' : 'Current language:'}</strong> {languageOptions.find(l => l.code === selectedLanguage)?.name || selectedLanguage}
          </p>
          <p className="text-xs text-white mb-2">
            <strong>{selectedLanguage === 'hi-IN' ? 'उपयोग की जा रही आवाज:' : 'Using voice:'}</strong> {lastUsedVoice || 'Not yet determined'}
          </p>
          {selectedLanguage === 'hi-IN' && (
            <div className="flex items-center mb-2">
              <span className="text-xs text-white mr-2">
                <strong>{selectedLanguage === 'hi-IN' ? 'हिंदी अनुवाद:' : 'Hindi translation:'}</strong>
              </span>
              <button 
                onClick={toggleHindiTranslation}
                className={`px-2 py-1 text-xs rounded ${
                  useHindiTranslation 
                    ? 'bg-white/30 text-white' 
                    : 'bg-white/10 text-white/70'
                }`}
              >
                {useHindiTranslation 
                  ? (selectedLanguage === 'hi-IN' ? 'सक्रिय' : 'Active') 
                  : (selectedLanguage === 'hi-IN' ? 'निष्क्रिय' : 'Inactive')}
              </button>
            </div>
          )}
          {manualControlled && (
            <div className="flex items-center mb-2">
              <span className="text-xs text-white mr-2">
                <strong>{selectedLanguage === 'hi-IN' ? 'ऑटोप्ले:' : 'Auto-play:'}</strong>
              </span>
              <button 
                onClick={toggleAutoPlay}
                className={`px-2 py-1 text-xs rounded ${
                  isAutoPlayEnabled 
                    ? 'bg-white/30 text-white' 
                    : 'bg-white/10 text-white/70'
                }`}
              >
                {isAutoPlayEnabled 
                  ? (selectedLanguage === 'hi-IN' ? 'सक्रिय' : 'Active') 
                  : (selectedLanguage === 'hi-IN' ? 'निष्क्रिय' : 'Inactive')}
              </button>
            </div>
          )}
          <p className="text-xs text-white">
            {selectedLanguage === 'hi-IN' 
              ? 'यदि आपकी चुनी हुई भाषा में आवाज की गुणवत्ता खराब है, तो कोई अन्य भाषा आज़माएँ या जांचें कि आपका ब्राउज़र चुनी हुई भाषा का समर्थन करता है या नहीं।'
              : 'If voice quality is poor in your selected language, try a different language or check if your browser supports the selected language.'}
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
              <span>
                {selectedLanguage === 'hi-IN' 
                  ? `चरण ${currentStep + 1} / ${instructions.length}` 
                  : `Step ${currentStep + 1} of ${instructions.length}`}
              </span>
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
            <p>
              {selectedLanguage === 'hi-IN' && useHindiTranslation && instructions[currentStep]
                ? translateCookingTerms(instructions[currentStep]) 
                : instructions[currentStep]}
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label={selectedLanguage === 'hi-IN' ? "पिछला चरण" : "Previous step"}
            >
              <SkipBack size={20} color="white" />
            </button>
            
            <button
              onClick={togglePlayPause}
              className="p-3 rounded-full bg-white text-primary hover:bg-white/90 transition-colors"
              aria-label={isPlaying 
                ? (selectedLanguage === 'hi-IN' ? "रोकें" : "Pause") 
                : (selectedLanguage === 'hi-IN' ? "शुरू करें" : "Play")}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button
              onClick={nextStep}
              disabled={currentStep === instructions.length - 1}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label={selectedLanguage === 'hi-IN' ? "अगला चरण" : "Next step"}
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
