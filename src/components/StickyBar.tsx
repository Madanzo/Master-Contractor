import { Phone, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { trackContact } from '@/lib/pixel';
import { trackGAEvent } from '@/lib/analytics';

const PHONE_NUMBER = '9565259866';

const StickyBar = () => {
  const { language } = useLanguageContext();
  const navigate = useNavigate();
  const isScrolled = useScrollPosition(window.innerHeight);

  const handleCallClick = () => {
    trackContact('phone');
    trackGAEvent('call_now_click', { page_location: window.location.pathname });
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleBookNowClick = () => {
    trackGAEvent('book_now_click', { page_location: window.location.pathname });
    navigate('/roofing/scheduling');
  };

  if (!isScrolled) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg safe-bottom">
      <div className="flex">
        <button
          onClick={handleCallClick}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
        >
          <Phone className="w-5 h-5" />
          {getTranslation(translations.stickyBar.call, language)}
        </button>
        <button
          onClick={handleBookNowClick}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          <Calendar className="w-5 h-5" />
          {getTranslation(translations.stickyBar.quote, language)}
        </button>
      </div>
    </div>
  );
};

export default StickyBar;
