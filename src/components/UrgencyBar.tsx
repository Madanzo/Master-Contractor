import { useState, useEffect } from 'react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { getPersonalizedText } from '@/lib/personalization';

const UrgencyBar = () => {
  const { language } = useLanguageContext();
  const [slotsLeft, setSlotsLeft] = useState(3);

  // Simulate dynamic slots (in production, this could come from an API)
  useEffect(() => {
    // Random slots between 2-5 for realism
    setSlotsLeft(Math.floor(Math.random() * 4) + 2);
  }, []);

  const slotsText = {
    en: `Only ${slotsLeft} inspection slots left this week`,
    es: `Solo quedan ${slotsLeft} citas esta semana`
  };

  const ctaText = {
    en: 'Book Now',
    es: 'Reservar'
  };

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-r from-destructive to-orange-500 text-white py-2 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-medium text-sm md:text-base">
          {getPersonalizedText('urgencyMessage', language)}
        </p>
        <div className="flex items-center gap-4">
          <span className="text-yellow-200 font-bold animate-pulse text-sm">
            {slotsText[language]}
          </span>
          <button
            onClick={scrollToForm}
            className="bg-white text-destructive px-4 py-1 rounded-full font-bold text-sm hover:bg-yellow-100 transition-colors"
          >
            {ctaText[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
