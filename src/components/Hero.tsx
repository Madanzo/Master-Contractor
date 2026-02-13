import { Phone, CheckCircle, MessageCircle, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';
import { trackContact } from '@/lib/pixel';
import { trackGAEvent } from '@/lib/analytics';

const heroBg = '/hero-bg.jpg';
const PHONE_NUMBER = '9565259866';
const WHATSAPP_LINK = 'https://wa.me/19565259866?text=Hola%2C%20I%27d%20like%20to%20schedule%20a%20free%20roof%20inspection.%20🏠';

const Hero = () => {
  const { language } = useLanguageContext();
  const navigate = useNavigate();

  const handleCallClick = () => {
    trackContact('phone');
    trackGAEvent('call_now_click', { page_location: window.location.pathname });
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleWhatsAppClick = () => {
    trackGAEvent('whatsapp_click', { page_location: window.location.pathname });
    window.open(WHATSAPP_LINK, '_blank');
  };

  const handleBookNowClick = () => {
    trackGAEvent('book_now_click', { page_location: window.location.pathname });
    navigate('/roofing/scheduling');
  };

  const trustBadges = [
    { key: 'free', icon: '✓' },
    { key: 'fast', icon: '✓' },
    { key: 'licensed', icon: '✓' },
    { key: 'financing', icon: '✓' },
    { key: 'bilingual', icon: '✓' },
  ] as const;

  return (
    <div id="hero-cta" className="relative min-h-[600px] flex items-center bg-black">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          poster={heroBg}
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/master-contractor-79b5c.firebasestorage.app/o/website%2Fvideos%2Fhero%20video.mp4?alt=media&token=4d845bee-f415-4370-b718-73ae55e99d8d" type="video/mp4" />
          <img
            src="/hero-bg-mobile.jpg"
            srcSet="/hero-bg-mobile.jpg 640w, /hero-bg.jpg 1280w"
            sizes="(max-width: 640px) 100vw, 100vw"
            alt="Roofing background"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Content with Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left Column: Headlines & Trust */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg text-balance">
              {getTranslation(translations.hero.headline, language)}
            </h1>

            <p className="text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
              {getTranslation(translations.hero.subheadline, language)}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 pt-4">
              {trustBadges.map(({ key }) => (
                <div key={key} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">
                    {getTranslation(translations.trustBadges[key], language)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: CTA Buttons */}
          <div className="w-full max-w-md mx-auto lg:mr-0 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-4">
              {/* WhatsApp Button */}
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full h-auto py-4 px-6 text-lg font-bold rounded-xl shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
                style={{ backgroundColor: '#25D366', color: '#fff' }}
              >
                <div className="flex items-center gap-3 w-full">
                  <MessageCircle className="w-7 h-7 shrink-0" />
                  <div className="text-left">
                    <div className="text-lg font-bold">
                      💬 {getTranslation(translations.hero.ctaWhatsApp, language)}
                    </div>
                    <div className="text-sm font-normal opacity-90">
                      {getTranslation(translations.hero.ctaWhatsAppSub, language)}
                    </div>
                  </div>
                </div>
              </Button>

              {/* Book Now Button */}
              <Button
                size="lg"
                onClick={handleBookNowClick}
                className="w-full h-auto py-4 px-6 text-lg font-bold bg-primary hover:bg-primary/90 rounded-xl shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="flex items-center gap-3 w-full">
                  <Calendar className="w-7 h-7 shrink-0" />
                  <div className="text-left">
                    <div className="text-lg font-bold">
                      📅 {getTranslation(translations.hero.ctaBookNow, language)}
                    </div>
                    <div className="text-sm font-normal opacity-90">
                      {getTranslation(translations.hero.ctaBookNowSub, language)}
                    </div>
                  </div>
                </div>
              </Button>

              {/* Call Now Button */}
              <Button
                size="lg"
                variant="outline"
                onClick={handleCallClick}
                className="w-full h-auto py-4 px-6 text-lg font-bold rounded-xl border-2 border-white/40 text-white hover:bg-white/10 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 shrink-0" />
                  <span>{getTranslation(translations.hero.ctaCallNow, language)}</span>
                </div>
              </Button>

              {/* Bottom Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-white/80">
                {getTranslation(translations.hero.heroBadges, language).map((badge: string, i: number) => (
                  <span key={i} className="flex items-center gap-1 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-primary" /> {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
