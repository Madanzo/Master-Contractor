import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';

const UrgencyBar = () => {
  const { language } = useLanguageContext();

  return (
    <div className="bg-urgency text-urgency-foreground py-3 px-4">
      <p className="text-center text-sm md:text-base font-medium max-w-4xl mx-auto">
        {getTranslation(translations.urgency.message, language)}
      </p>
    </div>
  );
};

export default UrgencyBar;
