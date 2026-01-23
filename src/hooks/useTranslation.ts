// useTranslation hook
import { useLanguageContext } from '@/contexts/LanguageContext';
import { Language } from '@/types/language';
import en from '@/lib/locales/en.json';
import es from '@/lib/locales/es.json';

const translations = {
    en,
    es,
};

export function useTranslation() {
    const { language } = useLanguageContext();
    return translations[language as Language];
}
