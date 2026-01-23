import { useState, useEffect, useCallback } from 'react';
import { Language } from '@/types/language';

const STORAGE_KEY = 'master-contractor-lang';

export const useLanguage = () => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check localStorage first
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && (stored === 'en' || stored === 'es')) {
      setLanguageState(stored);
      return;
    }

    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      setLanguageState('es');
      localStorage.setItem(STORAGE_KEY, 'es');
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
  }, [language, setLanguage]);

  return { language, setLanguage, toggleLanguage };
};
