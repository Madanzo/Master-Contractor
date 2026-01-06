// URL-based personalization for Meta Ads message matching
// Usage: Add ?headline=storm or ?headline=insurance to URL

import { Language } from './translations';

type HeadlineVariant = 'default' | 'storm' | 'insurance' | 'replacement';

interface PageContent {
    heroHeadline: { en: string; es: string };
    heroSubhead: { en: string; es: string };
    urgencyMessage: { en: string; es: string };
}

const contentVariants: Record<HeadlineVariant, PageContent> = {
    default: {
        heroHeadline: {
            en: "Leaking Roof? We Fix It This Week.",
            es: "¿Techo con Goteras? Lo Reparamos Esta Semana."
        },
        heroSubhead: {
            en: "Free inspections. Same-week scheduling. Serving Brownsville to McAllen.",
            es: "Inspecciones gratis. Citas esta semana. Servimos de Brownsville a McAllen."
        },
        urgencyMessage: {
            en: "⚠️ Recent storms caused roof damage across the Valley—schedule your free inspection now",
            es: "⚠️ Tormentas recientes causaron daños—programa tu inspección gratis ahora"
        }
    },
    storm: {
        heroHeadline: {
            en: "Storm Damage? Get Your Free Inspection Today",
            es: "¿Daño por Tormenta? Inspección Gratis Hoy"
        },
        heroSubhead: {
            en: "Fast response for RGV homeowners. We work with all insurance companies.",
            es: "Respuesta rápida para el Valle. Trabajamos con todas las aseguradoras."
        },
        urgencyMessage: {
            en: "⚠️ Limited inspectors available after recent storms—book now",
            es: "⚠️ Inspectores limitados después de las tormentas—reserva ahora"
        }
    },
    insurance: {
        heroHeadline: {
            en: "We Handle Your Insurance Claim—Start to Finish",
            es: "Manejamos Tu Reclamo de Seguro—De Principio a Fin"
        },
        heroSubhead: {
            en: "Free inspection. Professional documentation. No out-of-pocket hassle.",
            es: "Inspección gratis. Documentación profesional. Sin gastos de tu bolsillo."
        },
        urgencyMessage: {
            en: "⚠️ Insurance claims have time limits—get your free inspection today",
            es: "⚠️ Los reclamos de seguro tienen límites de tiempo—inspección gratis hoy"
        }
    },
    replacement: {
        heroHeadline: {
            en: "Time for a New Roof? Free Quote in 48 Hours",
            es: "¿Necesitas Techo Nuevo? Cotización Gratis en 48 Horas"
        },
        heroSubhead: {
            en: "Quality materials. Expert installation. Financing available.",
            es: "Materiales de calidad. Instalación experta. Financiamiento disponible."
        },
        urgencyMessage: {
            en: "⚠️ Book this week for priority scheduling",
            es: "⚠️ Reserva esta semana para programación prioritaria"
        }
    }
};

/**
 * Get personalized content based on URL parameter
 * @returns PageContent for current URL variant
 */
export function getPageContent(): PageContent {
    if (typeof window === 'undefined') {
        return contentVariants.default;
    }

    const params = new URLSearchParams(window.location.search);
    const headlineType = params.get('headline') as HeadlineVariant | null;

    if (headlineType && headlineType in contentVariants) {
        return contentVariants[headlineType];
    }

    return contentVariants.default;
}

/**
 * Get a specific translated string from page content
 */
export function getPersonalizedText(
    key: keyof PageContent,
    language: Language
): string {
    const content = getPageContent();
    return content[key][language];
}

/**
 * Get language from URL parameter or return undefined
 * Usage: ?lang=es or ?lang=en
 */
export function getURLLanguage(): Language | undefined {
    if (typeof window === 'undefined') return undefined;

    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');

    if (lang === 'en' || lang === 'es') {
        return lang;
    }

    return undefined;
}

/**
 * Get headline variant from URL
 */
export function getHeadlineVariant(): HeadlineVariant {
    if (typeof window === 'undefined') return 'default';

    const params = new URLSearchParams(window.location.search);
    const variant = params.get('headline') as HeadlineVariant | null;

    if (variant && variant in contentVariants) {
        return variant;
    }

    return 'default';
}
