// Meta Pixel Helper Functions
// Add your pixel ID when ready

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const PIXEL_ID = 'YOUR_PIXEL_ID'; // Replace with actual ID

export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const trackLead = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
};

export const trackContact = (method: 'phone' | 'form' = 'phone') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: method === 'phone' ? 'Phone Call' : 'Form Submission',
      content_category: 'Lead'
    });
  }
};

export const trackViewContent = (contentName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName
    });
  }
};
