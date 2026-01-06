import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';

const PHONE_NUMBER = '(956) 555-1234'; // Replace with actual phone number

const Footer = () => {
  const { language } = useLanguageContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl font-bold text-foreground mb-2">
          {translations.footer.company}
        </p>
        <p className="text-muted-foreground mb-2">{PHONE_NUMBER}</p>
        <p className="text-muted-foreground text-sm mb-4">
          {getTranslation(translations.footer.tagline, language)}
        </p>
        <p className="text-muted-foreground text-sm">
          © {currentYear} {translations.footer.company}. {getTranslation(translations.footer.rights, language)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
