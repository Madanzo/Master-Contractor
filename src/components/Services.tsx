import { Wrench, Home, Layers, Shield, FileText } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';

const iconMap = {
  wrench: Wrench,
  home: Home,
  layers: Layers,
  shield: Shield,
  fileText: FileText,
};

const Services = () => {
  const { language } = useLanguageContext();

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {getTranslation(translations.services.sectionTitle, language)}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {translations.services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {getTranslation(service.title, language)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {getTranslation(service.description, language)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
