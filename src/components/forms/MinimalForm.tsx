import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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

// Minimal form: Name + Phone + City (low friction, essential data)
interface MinimalFormProps {
    onSubmit: (data: MinimalFormData) => Promise<void>;
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
        headline: 'Get Your Free Roof Inspection',
        subhead: "We'll call you within 15 minutes",
        name: 'Your Name',
        namePlaceholder: 'First name',
        phone: 'Phone Number',
        phonePlaceholder: '(956) 555-1234',
        city: 'Your City',
        cityPlaceholder: 'Select your city',
        cityOther: 'Other',
        submit: 'Get My Free Inspection',
        submitting: 'Sending...',
        privacy: 'We respect your privacy. No spam, ever.',
        errors: {
            name: 'Please enter your name',
            phone: 'Please enter a valid 10-digit phone number',
            city: 'Please select your city'
        }
    },
    es: {
        headline: 'Obtén Tu Inspección Gratis',
        subhead: 'Te llamamos en 15 minutos',
        name: 'Tu Nombre',
        namePlaceholder: 'Nombre',
        phone: 'Número de Teléfono',
        phonePlaceholder: '(956) 555-1234',
        city: 'Tu Ciudad',
        cityPlaceholder: 'Selecciona tu ciudad',
        cityOther: 'Otro',
        submit: 'Obtener Mi Inspección Gratis',
        submitting: 'Enviando...',
        privacy: 'Respetamos tu privacidad. Sin spam.',
        errors: {
            name: 'Por favor ingresa tu nombre',
            phone: 'Por favor ingresa un número de 10 dígitos',
            city: 'Por favor selecciona tu ciudad'
        }
    }
};

const createSchema = (lang: Language) => {
    const t = translations[lang];
    return z.object({
        name: z.string().min(1, { message: t.errors.name }),
        phone: z.string().regex(/^\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/, {
            message: t.errors.phone
        }),
        city: z.string().min(1, { message: t.errors.city })
    });
};

export type MinimalFormData = z.infer<ReturnType<typeof createSchema>>;

export function MinimalForm({ onSubmit, language, isSubmitting }: MinimalFormProps) {
    const t = translations[language];
    const schema = createSchema(language);

    const form = useForm<MinimalFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            phone: '',
            city: ''
        }
    });

    const handleSubmit = async (data: MinimalFormData) => {
        await onSubmit(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground">{t.headline}</h3>
                    <p className="text-accent font-medium mt-1">⚡ {t.subhead}</p>
                </div>

                {/* Name */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <label className="block text-sm font-medium text-foreground mb-1">
                                {t.name}
                            </label>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder={t.namePlaceholder}
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
                            <label className="block text-sm font-medium text-foreground mb-1">
                                {t.phone}
                            </label>
                            <FormControl>
                                <Input
                                    type="tel"
                                    placeholder={t.phonePlaceholder}
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
                            <label className="block text-sm font-medium text-foreground mb-1">
                                {t.city}
                            </label>
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
                                    <SelectItem value="Other">{t.cityOther}</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit */}
                <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? t.submitting : t.submit}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                    🔒 {t.privacy}
                </p>
            </form>
        </Form>
    );
}

export default MinimalForm;
