import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { getPersonalizedText } from '@/lib/personalization';

const UrgencyBar = () => {
  const { language } = useLanguageContext();
  const navigate = useNavigate();
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

  const handleClick = () => {
    navigate('/roofing/scheduling');
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gradient-to-r from-destructive to-orange-500 text-white py-3 px-4 cursor-pointer hover:from-destructive/90 hover:to-orange-500/90 transition-all shadow-md relative z-40"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <p className="font-medium text-sm md:text-base flex items-center gap-2">
          {getPersonalizedText('urgencyMessage', language)}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full md:w-auto justify-center">
          <span className="text-yellow-200 font-bold animate-pulse text-sm whitespace-nowrap">
            {slotsText[language]}
          </span>
          <div className="bg-white text-destructive px-6 py-1.5 rounded-full font-bold text-sm hover:bg-yellow-100 transition-colors shadow-sm whitespace-nowrap">
            {ctaText[language]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
