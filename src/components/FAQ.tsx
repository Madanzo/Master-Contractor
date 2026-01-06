import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';

const FAQ = () => {
  const { language } = useLanguageContext();

  return (
    <section className="py-16 px-4 bg-section-alt">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          {getTranslation(translations.faq.sectionTitle, language)}
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {translations.faq.items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-base md:text-lg hover:no-underline">
                {getTranslation(item.question, language)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {getTranslation(item.answer, language)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
