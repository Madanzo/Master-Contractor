import { MapPin } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';

const LocalTrust = () => {
  const { language } = useLanguageContext();

  const handleCityClick = (_city: string) => {
    // Scroll to hero CTA section so users see the buttons
    document.getElementById('hero-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-section-alt">
      <div className="max-w-4xl mx-auto text-center">
        <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {getTranslation(translations.localTrust.headline, language)}
        </h2>

        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          {getTranslation(translations.localTrust.description, language)}
        </p>

        {/* City Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {translations.cities.filter(c => c !== 'Other').map((city) => (
            <div
              key={city}
              onClick={() => handleCityClick(city)}
              className="bg-card py-3 px-4 rounded-lg border border-border cursor-pointer hover:border-primary/50 transition-all hover:shadow-md hover:scale-105"
            >
              <span className="text-foreground font-medium">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalTrust;
