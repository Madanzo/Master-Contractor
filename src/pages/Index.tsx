import { LanguageProvider } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import UrgencyBar from '@/components/UrgencyBar';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import LocalTrust from '@/components/LocalTrust';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <UrgencyBar />
        <Hero />
        <SocialProof />
        <Services />
        <LocalTrust />
        <LeadForm />
        <FAQ />
        <FinalCTA />
        <Footer />
        <StickyBar />
      </main>
    </LanguageProvider>
  );
};

export default Index;
