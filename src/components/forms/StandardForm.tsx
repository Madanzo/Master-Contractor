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

// Standard form: Name + Phone + City + Service (balanced)
interface StandardFormProps {
    onSubmit: (data: StandardFormData) => Promise<void>;
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
        headline: 'Schedule Your Free Roof Inspection',
        subhead: "We'll confirm your appointment within 2 hours",
        name: 'Full Name',
        namePlaceholder: 'John Smith',
        phone: 'Phone Number *',
        phonePlaceholder: '(956) 525-9866',
        city: 'City *',
        cityPlaceholder: 'Select your city',
        cityOther: 'Other',
        service: 'What do you need?',
        servicePlaceholder: 'Select service type',
        submit: 'Schedule My Free Inspection',
        submitting: 'Sending...',
        privacy: 'Your information is secure and never shared.',
        microcopy: '✓ No obligation. No pressure. Just a free inspection.',
        errors: {
            name: 'Please enter your name',
            phone: 'Please enter a valid 10-digit phone number',
            city: 'Please select your city',
            service: 'Please select a service'
        },
        services: [
            { value: 'repair', label: 'Roof Repair' },
            { value: 'replacement', label: 'Roof Replacement' },
            { value: 'inspection', label: 'Storm Damage Inspection' },
            { value: 'insurance', label: 'Insurance Claim Help' },
            { value: 'not-sure', label: 'Not Sure - Need Advice' }
        ]
    },
    es: {
        headline: 'Programa Tu Inspección de Techo Gratis',
        subhead: 'Confirmamos tu cita en menos de 2 horas',
        name: 'Nombre Completo',
        namePlaceholder: 'Juan García',
        phone: 'Teléfono *',
        phonePlaceholder: '(956) 525-9866',
        city: 'Ciudad *',
        cityPlaceholder: 'Selecciona tu ciudad',
        cityOther: 'Otro',
        service: '¿Qué necesitas?',
        servicePlaceholder: 'Selecciona el servicio',
        submit: 'Programar Mi Inspección Gratis',
        submitting: 'Enviando...',
        privacy: 'Tu información está segura y nunca se comparte.',
        microcopy: '✓ Sin compromiso. Sin presión. Solo una inspección gratis.',
        errors: {
            name: 'Por favor ingresa tu nombre',
            phone: 'Por favor ingresa un número de 10 dígitos',
            city: 'Por favor selecciona tu ciudad',
            service: 'Por favor selecciona un servicio'
        },
        services: [
            { value: 'repair', label: 'Reparación de Techo' },
            { value: 'replacement', label: 'Reemplazo de Techo' },
            { value: 'inspection', label: 'Inspección por Tormenta' },
            { value: 'insurance', label: 'Ayuda con Seguro' },
            { value: 'not-sure', label: 'No Estoy Seguro' }
        ]
    }
};

const createSchema = (lang: Language) => {
    const t = translations[lang];
    return z.object({
        name: z.string().min(2, { message: t.errors.name }).max(100).optional().or(z.literal('')),
        phone: z.string().regex(/^\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/, {
            message: t.errors.phone
        }),
        city: z.string().min(1, { message: t.errors.city }),
        service: z.string().optional().or(z.literal(''))
    });
};

export type StandardFormData = z.infer<ReturnType<typeof createSchema>>;

export function StandardForm({ onSubmit, language, isSubmitting }: StandardFormProps) {
    const t = translations[language];
    const schema = createSchema(language);

    const form = useForm<StandardFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            phone: '',
            city: '',
            service: ''
        }
    });

    const handleSubmit = async (data: StandardFormData) => {
        await onSubmit(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground">{t.headline}</h3>
                    <p className="text-muted-foreground mt-1">{t.subhead}</p>
                </div>

                {/* Name */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
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

                {/* Service */}
                <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger className="h-12 text-base">
                                        <SelectValue placeholder={t.servicePlaceholder} />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {t.services.map((service) => (
                                        <SelectItem key={service.value} value={service.value}>
                                            {service.label}
                                        </SelectItem>
                                    ))}
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
                    className="w-full h-14 text-lg"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? t.submitting : t.submit}
                </Button>

                {/* Microcopy */}
                <p className="text-center text-sm text-muted-foreground">
                    {t.microcopy}
                </p>
            </form>
        </Form>
    );
}

export default StandardForm;
