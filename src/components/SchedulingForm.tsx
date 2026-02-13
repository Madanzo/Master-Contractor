import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { CheckCircle } from 'lucide-react';
import { Language } from '@/lib/translations';
import { translations, getTranslation } from '@/lib/translations';
import BookingCalendar from './BookingCalendar';

const CITIES = [
    'Brownsville',
    'Harlingen',
    'San Benito',
    'Weslaco',
    'McAllen',
    'Edinburg',
    'Pharr',
    'Mission',
    'Dallas',
    'Houston',
    'Austin',
    'San Antonio',
    'Other'
];

interface SchedulingFormProps {
    onSubmit: (data: SchedulingFormData) => Promise<void>;
    language: Language;
    isSubmitting: boolean;
}

const createSchema = (lang: Language) => {
    const t = translations.scheduling.errors;
    return z.object({
        name: z.string().min(2, { message: getTranslation(t.name, lang) }).max(100),
        phone: z.string().regex(/^\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/, {
            message: getTranslation(t.phone, lang)
        }),
        city: z.string().min(1, { message: getTranslation(t.city, lang) }),
        issue: z.string().max(1000).optional().or(z.literal(''))
    });
};

export type SchedulingFormData = z.infer<ReturnType<typeof createSchema>>;

export function SchedulingForm({ onSubmit, language, isSubmitting }: SchedulingFormProps) {
    const t = translations.scheduling;
    const schema = createSchema(language);

    const form = useForm<SchedulingFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            phone: '',
            city: '',
            issue: ''
        }
    });

    const handleSubmit = async (data: SchedulingFormData) => {
        await onSubmit(data);
    };

    return (
        <div className="space-y-8">
            {/* Form Header */}
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">
                    📅 {getTranslation(t.headline, language)}
                </h1>
                <p className="text-muted-foreground mt-2 text-lg">
                    {getTranslation(t.subheadline, language)}
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
                    {/* Name */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-foreground font-medium">
                                    {getTranslation(t.fields.name, language)}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={getTranslation(t.fields.namePlaceholder, language)}
                                        className="h-12 text-base bg-background"
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
                                <FormLabel className="text-foreground font-medium">
                                    {getTranslation(t.fields.phone, language)}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="tel"
                                        placeholder={getTranslation(t.fields.phonePlaceholder, language)}
                                        className="h-12 text-base bg-background"
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
                                <FormLabel className="text-foreground font-medium">
                                    {getTranslation(t.fields.city, language)}
                                </FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="h-12 text-base bg-background" aria-label={getTranslation(t.fields.city, language)}>
                                            <SelectValue placeholder={getTranslation(t.fields.cityPlaceholder, language)} />
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

                    {/* Issue Description (Optional) */}
                    <FormField
                        control={form.control}
                        name="issue"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-foreground font-medium">
                                    {getTranslation(t.fields.issue, language)}
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder={getTranslation(t.fields.issuePlaceholder, language)}
                                        className="min-h-[100px] text-base bg-background resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Cal.com Calendar Embed */}
                    <div className="bg-white rounded-lg overflow-hidden border border-border">
                        <div className="h-[600px]">
                            <BookingCalendar />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 text-lg font-bold"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? getTranslation(t.submitting, language)
                            : getTranslation(t.submit, language)
                        }
                    </Button>

                    {/* Trust Guarantees */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                        {getTranslation(t.guarantees, language).map((text: string, i: number) => (
                            <div key={i} className="flex items-center gap-2 text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                                <span className="text-sm">{text}</span>
                            </div>
                        ))}
                    </div>
                </form>
            </Form>
        </div>
    );
}

export default SchedulingForm;
