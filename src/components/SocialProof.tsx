import { Star } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';
import before1 from '@/assets/before-1.jpg';
import after1 from '@/assets/after-1.jpg';
import before2 from '@/assets/before-2.jpg';
import after2 from '@/assets/after-2.jpg';

const beforeAfterImages = [
  {
    before: before1,
    after: after1,
    description: { en: 'Storm damage repair - Brownsville', es: 'Reparación de daño por tormenta - Brownsville' }
  },
  {
    before: before2,
    after: after2,
    description: { en: 'Complete roof replacement - McAllen', es: 'Reemplazo completo de techo - McAllen' }
  }
];

const SocialProof = () => {
  const { language } = useLanguageContext();

  return (
    <section className="py-16 px-4 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {getTranslation(translations.socialProof.sectionTitle, language)}
        </h2>

        {/* Before/After Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {beforeAfterImages.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <img
                    src={item.before}
                    alt="Before"
                    className="w-full h-48 object-cover rounded-lg"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded">
                    {getTranslation(translations.socialProof.beforeAfter.before, language)}
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={item.after}
                    alt="After"
                    className="w-full h-48 object-cover rounded-lg"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                    {getTranslation(translations.socialProof.beforeAfter.after, language)}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                {getTranslation(item.description, language)}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {translations.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "{getTranslation(testimonial.quote, language)}"
              </p>
              <p className="text-muted-foreground text-sm">
                — {testimonial.name}, {testimonial.city}
              </p>
            </div>
          ))}
        </div>

        {/* Stats/Credentials */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-xl font-bold text-primary">
              <Star className="w-5 h-5 fill-primary" />
              {getTranslation(translations.socialProof.stats.reviews, language)}
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-foreground">
              {getTranslation(translations.socialProof.stats.experience, language)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-foreground">
              {getTranslation(translations.socialProof.stats.roofs, language)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
