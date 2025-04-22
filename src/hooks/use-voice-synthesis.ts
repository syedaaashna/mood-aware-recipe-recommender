
import { useState, useEffect, useRef } from 'react';
import { Language } from '@/types/voice';
import { useToast } from '@/hooks/use-toast';

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
        
        const priorityLanguages = ['en-US', 'en-GB', 'es-ES', 'fr-FR', 'de-DE', 'it-IT', 'zh-CN', 'ja-JP', 'hi-IN', 'ar-SA'];
        
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
