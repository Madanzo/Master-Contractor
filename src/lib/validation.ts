import { z } from 'zod';
import { Language } from './translations';

export const createLeadFormSchema = (lang: Language) => {
  const messages = {
    name: lang === 'en' ? 'Please enter your name' : 'Por favor ingresa tu nombre',
    phone: lang === 'en' ? 'Please enter a valid 10-digit phone number' : 'Por favor ingresa un número de 10 dígitos',
    city: lang === 'en' ? 'Please select your city' : 'Por favor selecciona tu ciudad',
    service: lang === 'en' ? 'Please select a service' : 'Por favor selecciona un servicio',
  };

  return z.object({
    name: z.string().min(2, { message: messages.name }).max(100),
    phone: z.string().regex(/^\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/, { message: messages.phone }),
    city: z.string().min(1, { message: messages.city }),
    service: z.string().min(1, { message: messages.service }),
  });
};

export type LeadFormData = z.infer<ReturnType<typeof createLeadFormSchema>>;

export interface LeadSubmission extends LeadFormData {
  language: Language;
  timestamp: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  landing_page: string;
  user_agent: string;
}
