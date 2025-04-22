import { useState, useEffect, useRef } from 'react';
import { Language } from '@/types/voice';
import { useToast } from '@/hooks/use-toast';

// Allow only these 4 languages: English, French, Chinese, German (Hindi removed, German added)
const LANGUAGE_WHITELIST = [
  { code: "en-US", label: "English" },
  { code: "fr-FR", label: "French" },
  { code: "zh-CN", label: "Chinese" },
  { code: "de-DE", label: "German" }, // NEW: Add German
];

export const useVoiceSynthesis = () => {
  const [availableLanguages, setAvailableLanguages] = useState<Language[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const speechSynthRef = useRef(window.speechSynthesis);
  const { toast } = useToast();

  useEffect(() => {
    const loadVoices = () => {
      const synth = speechSynthRef.current;
      const voices = synth.getVoices();

      if (voices.length > 0) {
        const languages: Language[] = [];
        const addedLanguageCodes: string[] = [];

        LANGUAGE_WHITELIST.forEach(({ code, label }) => {
          const voice = voices.find(v => v.lang === code);
          if (voice && !addedLanguageCodes.includes(code)) {
            languages.push({
              code: code,
              name: label,
              voice: voice
            });
            addedLanguageCodes.push(code);
          }
        });

        setAvailableLanguages(languages);

        // Priority: browser language (if on whitelist), else English, else first.
        const browserLangCode = navigator.language;
        let defaultLang = languages.find(l => l.code === browserLangCode) 
          || languages.find(l => l.code.startsWith('en')) 
          || languages[0];

        if (defaultLang) {
          setSelectedLanguage(defaultLang);
        }

        setVoicesLoaded(true);
      }
    };

    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();

    return () => {
      speechSynthRef.current.cancel();
    };
  }, []);

  return {
    availableLanguages,
    selectedLanguage,
    setSelectedLanguage,
    voicesLoaded,
    speechSynthRef
  };
};
