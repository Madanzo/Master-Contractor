import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { translations, getTranslation } from '@/lib/translations';
import { createLeadFormSchema, LeadFormData, LeadSubmission } from '@/lib/validation';

const LeadForm = () => {
  const { language } = useLanguageContext();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const schema = createLeadFormSchema(language);
  
  const form = useForm<LeadFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      city: '',
      service: '',
    },
  });

  const getUTMParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || undefined,
      utm_medium: params.get('utm_medium') || undefined,
      utm_campaign: params.get('utm_campaign') || undefined,
      utm_content: params.get('utm_content') || undefined,
    };
  };

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);

    const submission: LeadSubmission = {
      ...data,
      language,
      timestamp: new Date().toISOString(),
      ...getUTMParams(),
      landing_page: window.location.href,
      user_agent: navigator.userAgent,
    };

    try {
      // TODO: Replace with Firebase submission
      console.log('Lead submission:', submission);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-16 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
          {/* Form Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            {getTranslation(translations.form.headline, language)}
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            {getTranslation(translations.form.subheadline, language)}
          </p>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={getTranslation(translations.form.fields.name, language)}
                        className="h-12 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder={getTranslation(translations.form.fields.phone, language)}
                        className="h-12 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* City */}
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder={getTranslation(translations.form.fields.city, language)} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {translations.cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                        <SelectItem value="Other">
                          {language === 'en' ? 'Other' : 'Otro'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Service */}
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder={getTranslation(translations.form.fields.service, language)} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {translations.form.serviceOptions.map((option, index) => (
                          <SelectItem key={index} value={getTranslation(option, 'en')}>
                            {getTranslation(option, language)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? getTranslation(translations.form.submitting, language)
                  : getTranslation(translations.form.submit, language)}
              </Button>

              {/* Microcopy */}
              <p className="text-center text-sm text-muted-foreground">
                {getTranslation(translations.form.microcopy, language)}
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
