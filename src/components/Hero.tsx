import { Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';
import { trackContact } from '@/lib/pixel';
import LanguageToggle from './LanguageToggle';
import heroBg from '@/assets/hero-bg.jpg';

const PHONE_NUMBER = '+19565259866'; // Replace with actual phone number

const Hero = () => {
  const { language } = useLanguageContext();

  const handleCallClick = () => {
    trackContact('phone');
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const trustBadges = [
    { key: 'free', icon: '✓' },
    { key: 'fast', icon: '✓' },
    { key: 'licensed', icon: '✓' },
    { key: 'financing', icon: '✓' },
    { key: 'bilingual', icon: '✓' },
  ] as const;

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroBg}
        >
          {/* Custom hero video from Firebase Storage */}
          <source src="https://firebasestorage.googleapis.com/v0/b/master-contractor-79b5c.firebasestorage.app/o/website%2Fvideos%2Fhero%20video.mp4?alt=media&token=4d845bee-f415-4370-b718-73ae55e99d8d" type="video/mp4" />
          <img src={heroBg} alt="Roofing background" className="absolute inset-0 w-full h-full object-cover" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Language Toggle */}
      <div className="relative z-10 flex justify-end p-4">
        <LanguageToggle />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            {getTranslation(translations.hero.headline, language)}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {getTranslation(translations.hero.subheadline, language)}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-lg px-8 py-6 h-auto"
            >
              {getTranslation(translations.hero.ctaPrimary, language)}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleCallClick}
              className="text-lg px-8 py-6 h-auto border-foreground/30 hover:bg-foreground/10"
            >
              <Phone className="w-5 h-5 mr-2" />
              {getTranslation(translations.hero.ctaSecondary, language)}
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {trustBadges.map(({ key }) => (
              <div
                key={key}
                className="flex items-center gap-2 bg-trust-badge/80 backdrop-blur-sm px-3 py-2 rounded-lg"
              >
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground">
                  {getTranslation(translations.trustBadges[key], language)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
