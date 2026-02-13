import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { submitLead, getUTMParams, trackAnalyticsEvent } from '@/lib/firestore';
import { trackLead } from '@/lib/pixel';
import { trackGAEvent } from '@/lib/analytics';
import { useFormTracking } from '@/hooks/useFormTracking';
import { SchedulingForm, SchedulingFormData } from '@/components/SchedulingForm';
import LanguageToggle from '@/components/LanguageToggle';

const PHONE_NUMBER = '9565259866';

const SchedulingPage = () => {
    const { language } = useLanguageContext();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasStartedForm, setHasStartedForm] = useState(false);

    const { containerRef, trackSubmission } = useFormTracking('scheduling_form');

    const handleFormStart = () => {
        if (!hasStartedForm) {
            setHasStartedForm(true);
            trackAnalyticsEvent('form_start', 'roofing-scheduling');
            trackGAEvent('scheduling_form_start');
        }
    };

    const onSubmit = async (data: SchedulingFormData) => {
        setIsSubmitting(true);

        try {
            const utmParams = getUTMParams();

            const result = await submitLead({
                name: data.name,
                phone: data.phone,
                city: data.city,
                language,
                ...utmParams,
                landingPageUrl: window.location.href,
                formVariant: 'roofing-scheduling',
                userAgent: navigator.userAgent
            });

            if (result.success) {
                // Track conversions
                trackLead();
                trackSubmission();
                trackGAEvent('scheduling_form_submit', {
                    city: data.city,
                    has_issue_description: data.issue ? 'yes' : 'no'
                });

                // Store form data in session for the thank-you page
                sessionStorage.setItem('roofing_booking', JSON.stringify({
                    name: data.name,
                    city: data.city,
                    phone: data.phone,
                    issue: data.issue || ''
                }));

                // Redirect to thank-you page
                const nameParam = data.name ? `?name=${encodeURIComponent(data.name)}&city=${encodeURIComponent(data.city)}` : '';
                navigate(`/roofing/thank-you${nameParam}`);
            } else {
                console.error('Submission failed:', result.error);
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-foreground">Master Contractor</span>
                    </div>
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

            {/* Form Container */}
            <div className="max-w-xl mx-auto px-4 py-8 md:py-12" ref={containerRef} onFocus={handleFormStart} onClick={handleFormStart}>
                <SchedulingForm
                    onSubmit={onSubmit}
                    language={language}
                    isSubmitting={isSubmitting}
                />
            </div>
        </main>
    );
};

export default SchedulingPage;
