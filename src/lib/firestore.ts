// Firestore Lead Management
// Handles lead submission and analytics tracking

import {
    collection,
    addDoc,
    serverTimestamp,
    doc,
    setDoc,
    increment
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';
import { Language } from './translations';

// Lead data structure
export interface LeadData {
    name?: string;
    phone: string;
    city: string;
    service?: string;
    language: Language;

    // Attribution (UTM tracking)
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;

    // Technical metadata
    landingPageUrl: string;
    landingPageVariant?: string;
    formVariant: string;
    userAgent: string;
}

// Lead document in Firestore
interface LeadDocument extends LeadData {
    submittedAt: ReturnType<typeof serverTimestamp>;
    localTime: string;
    status: 'new' | 'contacted' | 'scheduled' | 'completed' | 'lost';
    notes: string;
}

// Submit a new lead to Firestore
export async function submitLead(data: LeadData): Promise<{ success: boolean; leadId?: string; error?: string }> {
    // Check if Firebase is configured
    if (!isFirebaseConfigured()) {
        console.warn('Firebase not configured. Lead data:', data);
        // Return success to allow form to work during development
        return {
            success: true,
            leadId: 'demo-' + Date.now(),
            error: 'Firebase not configured - demo mode'
        };
    }

    try {
        // Clean phone number (remove non-digits)
        const cleanPhone = data.phone.replace(/\D/g, '');

        if (cleanPhone.length < 10) {
            return { success: false, error: 'Invalid phone number' };
        }

        // Get local time in CST
        const now = new Date();
        const localTime = now.toLocaleString('en-US', {
            timeZone: 'America/Chicago',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }) + ' CST';

        // Create lead document
        // Create lead document (convert undefined to null for Firestore)
        const leadDoc: LeadDocument = {
            name: data.name || null, // Fix: Firestore doesn't accept undefined
            phone: cleanPhone,
            city: data.city || 'Unknown', // Ensure city is present
            service: data.service || 'General Inquiry',
            language: data.language,

            // Attribution
            utm_source: data.utm_source || null,
            utm_medium: data.utm_medium || null,
            utm_campaign: data.utm_campaign || null,
            utm_content: data.utm_content || null,
            utm_term: data.utm_term || null,

            // Metadata
            landingPageUrl: data.landingPageUrl,
            landingPageVariant: data.landingPageVariant || null,
            formVariant: data.formVariant,
            userAgent: data.userAgent,

            submittedAt: serverTimestamp(),
            localTime,
            status: 'new',
            notes: ''
        };

        // Add to Firestore
        const docRef = await addDoc(collection(db, 'leads'), leadDoc);

        // Update analytics
        await trackAnalyticsEvent('submission', data.formVariant);

        return { success: true, leadId: docRef.id };
    } catch (error) {
        console.error('Lead submission error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

// Analytics event types
type AnalyticsEvent = 'page_view' | 'form_start' | 'submission' | 'call_click';

// Track analytics events
export async function trackAnalyticsEvent(
    event: AnalyticsEvent,
    variant: string = 'unknown'
): Promise<void> {
    if (!isFirebaseConfigured()) {
        console.log(`[Analytics] ${event} - variant: ${variant}`);
        return;
    }

    try {
        const today = new Date().toISOString().split('T')[0];
        const docRef = doc(db, 'analytics', `${today}_${variant}`);

        const updateData: Record<string, unknown> = {
            date: today,
            variant
        };

        switch (event) {
            case 'page_view':
                updateData.impressions = increment(1);
                break;
            case 'form_start':
                updateData.formStarts = increment(1);
                break;
            case 'submission':
                updateData.submissions = increment(1);
                break;
            case 'call_click':
                updateData.calls = increment(1);
                break;
        }

        await setDoc(docRef, updateData, { merge: true });
    } catch (error) {
        console.error('Analytics tracking error:', error);
    }
}

// Get UTM parameters from URL
export function getUTMParams(): Record<string, string | undefined> {
    if (typeof window === 'undefined') return {};

    const params = new URLSearchParams(window.location.search);
    return {
        utm_source: params.get('utm_source') || undefined,
        utm_medium: params.get('utm_medium') || undefined,
        utm_campaign: params.get('utm_campaign') || undefined,
        utm_content: params.get('utm_content') || undefined,
        utm_term: params.get('utm_term') || undefined
    };
}
