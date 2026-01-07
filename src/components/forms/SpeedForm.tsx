import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone } from 'lucide-react';
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
import { Language } from '@/lib/translations';

// Speed form: Phone + City (maximum urgency, minimum friction)
interface SpeedFormProps {
    onSubmit: (data: SpeedFormData) => Promise<void>;
    language: Language;
    isSubmitting: boolean;
}

const CITIES = [
    'Brownsville',
    'Harlingen',
    'San Benito',
    'Weslaco',
    'McAllen',
    'Edinburg',
    'Pharr',
    'Mission'
];

const translations = {
    en: {
        available: 'Expert available now',
        headline: 'Get a Call in 5 Minutes',
        subhead: "Enter your info. We'll call you right now.",
        phone: 'Your Phone Number',
        phonePlaceholder: '(956) 555-1234',
        city: 'Your City',
        cityPlaceholder: 'Select city',
        submit: 'Call Me Now',
        submitting: 'Sending...',
        note: '📞 A roofing expert will call you within 5 minutes',
        privacy: 'One call. No spam. No obligation.',
        errors: {
            phone: 'Please enter a valid 10-digit phone number',
            city: 'Please select your city'
        }
    },
    es: {
        available: 'Experto disponible ahora',
        headline: 'Recibe una Llamada en 5 Minutos',
        subhead: 'Ingresa tu info. Te llamamos ahora.',
        phone: 'Tu Número de Teléfono',
        phonePlaceholder: '(956) 555-1234',
        city: 'Tu Ciudad',
        cityPlaceholder: 'Selecciona',
        submit: 'Llámame Ahora',
        submitting: 'Enviando...',
        note: '📞 Un experto en techos te llamará en 5 minutos',
        privacy: 'Una llamada. Sin spam. Sin compromiso.',
        errors: {
            phone: 'Por favor ingresa un número de 10 dígitos',
            city: 'Por favor selecciona tu ciudad'
        }
    }
};

const createSchema = (lang: Language) => {
    const t = translations[lang];
    return z.object({
        phone: z.string().regex(/^\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/, {
            message: t.errors.phone
        }),
        city: z.string().min(1, { message: t.errors.city })
    });
};

export type SpeedFormData = z.infer<ReturnType<typeof createSchema>>;

export function SpeedForm({ onSubmit, language, isSubmitting }: SpeedFormProps) {
    const t = translations[language];
    const schema = createSchema(language);

    const form = useForm<SpeedFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            phone: '',
            city: ''
        }
    });

    const handleSubmit = async (data: SpeedFormData) => {
        await onSubmit(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                {/* Pulsing availability indicator */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                    <span className="text-accent font-medium">{t.available}</span>
                </div>

                <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-foreground">{t.headline}</h3>
                    <p className="text-muted-foreground mt-2">{t.subhead}</p>
                </div>

                {/* Phone - Large centered input */}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="tel"
                                    placeholder={t.phonePlaceholder}
                                    className="h-14 text-xl text-center border-2 focus:border-accent"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-center" />
                        </FormItem>
                    )}
                />

                {/* City - Compact dropdown */}
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger className="h-12 text-base">
                                        <SelectValue placeholder={t.cityPlaceholder} />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {CITIES.map((city) => (
                                        <SelectItem key={city} value={city}>
                                            {city}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit - Large green CTA */}
                <Button
                    type="submit"
                    size="lg"
                    className="w-full py-6 h-auto bg-accent hover:bg-accent/90 text-accent-foreground text-2xl font-bold transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                    disabled={isSubmitting}
                >
                    <Phone className="w-6 h-6" />
                    {isSubmitting ? t.submitting : t.submit}
                </Button>

                <p className="text-center text-accent font-medium">
                    {t.note}
                </p>

                <p className="text-center text-sm text-muted-foreground">
                    🔒 {t.privacy}
                </p>
            </form>
        </Form>
    );
}

export default SpeedForm;
