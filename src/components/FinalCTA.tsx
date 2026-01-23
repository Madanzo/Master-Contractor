import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';
import { trackContact } from '@/lib/pixel';

const PHONE_NUMBER = '+19565259866'; // Replace with actual phone number

const FinalCTA = () => {
  const { language } = useLanguageContext();

  const handleCallClick = () => {
    trackContact('phone');
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {getTranslation(translations.finalCta.headline, language)}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {getTranslation(translations.finalCta.subheadline, language)}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </section>
  );
};

export default FinalCTA;
