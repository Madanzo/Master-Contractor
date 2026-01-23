import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, CheckCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageProvider, useLanguageContext } from '@/contexts/LanguageContext';
import { trackLead } from '@/lib/pixel';
import LanguageToggle from '@/components/LanguageToggle';

const PHONE_NUMBER = '+19565259866'; // Replace with actual phone number

const translations = {
  en: {
    title: 'Thank You!',
    subtitle: 'Your request is confirmed.',
    subtitleWithName: (name: string) => `${name}, your request is confirmed.`,
    expectTitle: 'What Happens Next:',
    expectations: [
      { step: 1, title: 'We Call You', desc: 'A roofing expert will call within 15 minutes during business hours.' },
      { step: 2, title: 'Schedule Inspection', desc: "We'll find a time that works for you—often same-day or next-day." },
      { step: 3, title: 'Free Inspection', desc: 'Our expert inspects your roof and provides a written assessment.' },
      { step: 4, title: 'Your Decision', desc: 'Review our findings. No pressure, no obligation.' }
    ],
    cantWait: "Can't wait? Call us now:",
    referTitle: 'Know Someone Who Needs a Roof?',
    referDesc: 'Refer a friend and you both get $100 off when they book.',
    referButton: 'Share With a Friend',
    company: 'Master Contractor'
  },
  es: {
    title: '¡Gracias!',
    subtitle: 'Tu solicitud está confirmada.',
    subtitleWithName: (name: string) => `${name}, tu solicitud está confirmada.`,
    expectTitle: '¿Qué Sigue?',
    expectations: [
      { step: 1, title: 'Te Llamamos', desc: 'Un experto te llamará en 15 minutos durante horario laboral.' },
      { step: 2, title: 'Programar Inspección', desc: 'Encontraremos un horario que te funcione—a menudo el mismo día.' },
      { step: 3, title: 'Inspección Gratis', desc: 'Nuestro experto inspecciona tu techo y te da un reporte escrito.' },
      { step: 4, title: 'Tu Decisión', desc: 'Revisa nuestros hallazgos. Sin presión, sin compromiso.' }
    ],
    cantWait: '¿No puedes esperar? Llámanos:',
    referTitle: '¿Conoces a Alguien que Necesite Techo?',
    referDesc: 'Refiere a un amigo y ambos reciben $100 de descuento.',
    referButton: 'Compartir con un Amigo',
    company: 'Master Contractor'
  }
};

const ThankYouContent = () => {
  const { language } = useLanguageContext();
  const [searchParams] = useSearchParams();
  const leadName = searchParams.get('name') || '';
  const t = translations[language];

  useEffect(() => {
    // Fire Lead event on page load (Meta Pixel)
    trackLead();
  }, []);

  const handleCallClick = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Master Contractor - Free Roof Inspection',
      text: language === 'es'
        ? 'Obtén una inspección de techo gratis de Master Contractor!'
        : 'Get a free roof inspection from Master Contractor!',
      url: window.location.origin
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareData.url);
    }
  };

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-xl mx-auto">
        {/* Language Toggle */}
        <div className="flex justify-center mb-8">
          <LanguageToggle />
        </div>

        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{t.title}</h1>
          <p className="text-xl text-muted-foreground mt-2">
            {leadName ? t.subtitleWithName(leadName) : t.subtitle}
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-card rounded-xl shadow-lg p-6 mb-6 border border-border">
          <h2 className="text-xl font-bold text-foreground mb-4">{t.expectTitle}</h2>
          <div className="space-y-4">
            {t.expectations.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Immediate Call Option */}
        <div className="bg-primary rounded-xl p-6 text-primary-foreground text-center mb-6">
          <p className="mb-3">{t.cantWait}</p>
          <Button
            size="lg"
            onClick={handleCallClick}
            className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-xl font-bold inline-flex items-center gap-2"
          >
            <Phone className="w-6 h-6" />
            (956) 525-9866
          </Button>
        </div>

        {/* Referral Section */}
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-foreground">{t.referTitle}</h3>
          <p className="text-muted-foreground mt-2 mb-4">{t.referDesc}</p>
          <Button
            onClick={handleShare}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 font-medium inline-flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            {t.referButton}
          </Button>
        </div>

        {/* Company Name */}
        <p className="text-xl font-bold text-foreground text-center mt-8">
          {t.company}
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
