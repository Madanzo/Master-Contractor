import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { submitLead, getUTMParams, trackAnalyticsEvent } from '@/lib/firestore';
import { getFormVariant, FormVariant } from '@/lib/abtest';
import { trackLead } from '@/lib/pixel';
import { MinimalForm, MinimalFormData } from './forms/MinimalForm';
import { StandardForm, StandardFormData } from './forms/StandardForm';
import { SpeedForm, SpeedFormData } from './forms/SpeedForm';
import { RiskReversal } from './RiskReversal';

type FormData = MinimalFormData | StandardFormData | SpeedFormData;

const LeadForm = () => {
  const { language } = useLanguageContext();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [variant, setVariant] = useState<FormVariant>('standard');
  const [hasStartedForm, setHasStartedForm] = useState(false);

  // Get and set form variant on mount
  useEffect(() => {
    const assignedVariant = getFormVariant();
    setVariant(assignedVariant);

    // Track page view with variant
    trackAnalyticsEvent('page_view', assignedVariant);
  }, []);

  // Track form start on first interaction
  const handleFormStart = () => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackAnalyticsEvent('form_start', variant);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const utmParams = getUTMParams();

      const result = await submitLead({
        name: 'name' in data ? data.name : undefined,
        phone: data.phone,
        city: 'city' in data ? data.city : '',
        service: 'service' in data ? data.service : undefined,
        language,
        ...utmParams,
        landingPageUrl: window.location.href,
        formVariant: variant,
        userAgent: navigator.userAgent
      });

      if (result.success) {
        // Track conversion
        trackLead();

        // Redirect to thank you page with name if available
        const name = 'name' in data ? data.name : '';
        navigate(`/thank-you${name ? `?name=${encodeURIComponent(name)}` : ''}`);
      } else {
        console.error('Submission failed:', result.error);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
    }
  };

  const renderForm = () => {
    const commonProps = {
      onSubmit,
      language,
      isSubmitting
    };

    switch (variant) {
      case 'minimal':
        return <MinimalForm {...commonProps} />;
      case 'speed':
        return <SpeedForm {...commonProps} />;
      case 'standard':
      default:
        return <StandardForm {...commonProps} />;
    }
  };

  return (
    <section id="lead-form" className="py-16 px-4" onFocus={handleFormStart} onClick={handleFormStart}>
      <div className="max-w-xl mx-auto">
        <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
          {renderForm()}
        </div>

        {/* Risk Reversal - builds trust */}
        <RiskReversal language={language} />
      </div>
    </section>
  );
};

export default LeadForm;
