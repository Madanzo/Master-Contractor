import { useEffect } from 'react';
import { Phone, CheckCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageProvider, useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';
import { trackLead } from '@/lib/pixel';
import LanguageToggle from '@/components/LanguageToggle';

const PHONE_NUMBER = '+19565551234'; // Replace with actual phone number

const ThankYouContent = () => {
  const { language } = useLanguageContext();

  useEffect(() => {
    // Fire Lead event on page load
    trackLead();
  }, []);

  const handleCallClick = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const steps = getTranslation(translations.thankYou.whatNext.steps, language);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-xl mx-auto text-center">
        {/* Language Toggle */}
        <div className="flex justify-center mb-8">
          <LanguageToggle />
        </div>

        {/* Success Icon */}
        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-accent-foreground" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {getTranslation(translations.thankYou.headline, language)}
        </h1>

        {/* Body */}
        <p className="text-lg text-muted-foreground mb-8">
          {getTranslation(translations.thankYou.body, language)}
        </p>

        {/* What's Next */}
        <div className="bg-card p-6 rounded-lg border border-border mb-8 text-left">
          <h2 className="text-xl font-semibold mb-4">
            {getTranslation(translations.thankYou.whatNext.title, language)}
          </h2>
          <ul className="space-y-3">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-foreground">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call CTA */}
        <div className="mb-8">
          <p className="text-muted-foreground mb-4">
            {getTranslation(translations.thankYou.cantWait, language)}
          </p>
          <Button
            size="lg"
            onClick={handleCallClick}
            className="text-lg px-8 py-6 h-auto"
          >
            <Phone className="w-5 h-5 mr-2" />
            (956) 555-1234
          </Button>
        </div>

        {/* Cal.com Placeholder */}
        <div className="bg-section-alt p-6 rounded-lg border border-border">
          <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-muted-foreground text-sm mb-2">
            {getTranslation(translations.thankYou.bookDirect, language)}
          </p>
          <div className="bg-card border border-dashed border-border rounded-lg p-8 text-muted-foreground text-sm">
            {getTranslation(translations.thankYou.calPlaceholder, language)}
          </div>
        </div>

        {/* Company Name */}
        <p className="text-xl font-bold text-foreground mt-8">
          {translations.footer.company}
        </p>
      </div>
    </main>
  );
};

const ThankYou = () => {
  return (
    <LanguageProvider>
      <ThankYouContent />
    </LanguageProvider>
  );
};

export default ThankYou;
