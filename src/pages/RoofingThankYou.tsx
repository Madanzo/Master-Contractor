import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';
import { trackLead } from '@/lib/pixel';
import { trackGAEvent } from '@/lib/analytics';
import LanguageToggle from '@/components/LanguageToggle';

const PHONE_NUMBER = '9565259866';
const WHATSAPP_LINK = 'https://wa.me/19565259866?text=Hola%2C%20I%27d%20like%20to%20schedule%20a%20free%20roof%20inspection.%20🏠';

const RoofingThankYou = () => {
    const { language } = useLanguageContext();
    const [searchParams] = useSearchParams();
    const leadName = searchParams.get('name') || '';
    const leadCity = searchParams.get('city') || '';
    const t = translations.roofingThankYou;

    // Try to get extended data from sessionStorage
    const bookingData = (() => {
        try {
            const raw = sessionStorage.getItem('roofing_booking');
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    })();

    useEffect(() => {
        // Fire tracking events on page load
        trackLead();
        trackGAEvent('booking_complete', {
            city: leadCity || bookingData?.city || 'unknown'
        });
    }, []);

    const handleCallClick = () => {
        trackGAEvent('call_now_click', { page_location: '/roofing/thank-you' });
        window.location.href = `tel:${PHONE_NUMBER}`;
    };

    const handleWhatsAppClick = () => {
        trackGAEvent('whatsapp_click', { page_location: '/roofing/thank-you' });
        window.open(WHATSAPP_LINK, '_blank');
    };

    const displayName = leadName || bookingData?.name || '';
    const displayCity = leadCity || bookingData?.city || '';

    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <span className="text-xl font-bold text-foreground">Master Contractor</span>
                    <div className="flex items-center gap-4">
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold text-sm md:text-base"
                        >
                            <Phone className="w-4 h-4" />
                            <span>(956) 525-9866</span>
                        </a>
                        <LanguageToggle />
                    </div>
                </div>
            </div>

            <div className="max-w-xl mx-auto px-4 py-10 md:py-16">
                {/* Success Header */}
                <div className="text-center mb-10">
                    {/* Animated Checkmark */}
                    <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                        <CheckCircle className="w-14 h-14 text-accent" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {displayName
                            ? getTranslation(t.titleWithName, language)(displayName)
                            : getTranslation(t.title, language)
                        }
                    </h1>
                    <p className="text-lg text-muted-foreground mt-3">
                        {getTranslation(t.subtitle, language)}
                    </p>
                </div>

                {/* Appointment Details Card (if we have city info) */}
                {displayCity && (
                    <div className="bg-card rounded-xl border border-border shadow-lg p-6 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <h3 className="font-bold text-foreground mb-3">
                            {getTranslation(t.appointmentLabel, language)}
                        </h3>
                        <div className="space-y-2 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <span>📍</span>
                                <span>{displayCity}</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* What Happens Next */}
                <div className="bg-card rounded-xl border border-border shadow-lg p-6 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h2 className="text-xl font-bold text-foreground mb-5">
                        {getTranslation(t.whatNextTitle, language)}
                    </h2>
                    <div className="space-y-5">
                        {getTranslation(t.steps, language).map((step: { title: string; desc: string }, i: number) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                    <span className="text-primary font-bold text-lg">{i + 1}</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm mt-1">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border my-8" />

                {/* Contact Section */}
                <div className="text-center space-y-4">
                    <p className="text-lg font-medium text-foreground">
                        {getTranslation(t.questionsLabel, language)} (956) 525-9866
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                            size="lg"
                            onClick={handleCallClick}
                            className="h-14 px-8 text-lg font-bold"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            {getTranslation(t.callNow, language)}
                        </Button>
                        <Button
                            size="lg"
                            onClick={handleWhatsAppClick}
                            className="h-14 px-8 text-lg font-bold text-white"
                            style={{ backgroundColor: '#25D366' }}
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            {getTranslation(t.whatsApp, language)}
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RoofingThankYou;
