// A/B Testing for Form Variants
// Assigns users to form variants and tracks conversions

export type FormVariant = 'minimal' | 'standard' | 'speed';

interface ABConfig {
    variants: FormVariant[];
    weights: number[]; // Must sum to 1
    defaultVariant: FormVariant;
}

// Configuration for A/B test
// Adjust weights to control traffic distribution
const config: ABConfig = {
    variants: ['minimal', 'standard', 'speed'],
    weights: [0.33, 0.34, 0.33], // Equal distribution
    defaultVariant: 'standard'
};

const STORAGE_KEY = 'mc_form_variant';

/**
 * Get the form variant for the current user.
 * - Checks URL override first (?variant=speed)
 * - Then checks localStorage for existing assignment
 * - Finally assigns a new variant based on weights
 */
export function getFormVariant(): FormVariant {
    if (typeof window === 'undefined') {
        return config.defaultVariant;
    }

    // Check URL override (for testing or ad-specific variants)
    const urlParams = new URLSearchParams(window.location.search);
    const urlVariant = urlParams.get('variant');
    if (urlVariant && config.variants.includes(urlVariant as FormVariant)) {
        // Store URL override so it persists
        localStorage.setItem(STORAGE_KEY, urlVariant);
        return urlVariant as FormVariant;
    }

    // Check for existing assignment in localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && config.variants.includes(stored as FormVariant)) {
        return stored as FormVariant;
    }

    // Assign new variant based on weights
    const random = Math.random();
    let cumulative = 0;

    for (let i = 0; i < config.variants.length; i++) {
        cumulative += config.weights[i];
        if (random < cumulative) {
            const variant = config.variants[i];
            localStorage.setItem(STORAGE_KEY, variant);
            return variant;
        }
    }

    // Fallback to default
    localStorage.setItem(STORAGE_KEY, config.defaultVariant);
    return config.defaultVariant;
}

/**
 * Force a specific variant (for testing)
 */
export function setFormVariant(variant: FormVariant): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, variant);
    }
}

/**
 * Clear variant assignment (user will get new assignment)
 */
export function clearFormVariant(): void {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
    }
}

/**
 * Check if A/B testing is active (vs forced variant from URL)
 */
export function isABTestActive(): boolean {
    if (typeof window === 'undefined') return false;

    const urlParams = new URLSearchParams(window.location.search);
    return !urlParams.has('variant');
}
