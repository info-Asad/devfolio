// Google Analytics Event Tracking
interface EventProps {
  action: string;
  category: string;
  label: string;
  value?: number;
}

// Track custom events with GA4
export const trackEvent = ({ action, category, label, value }: EventProps) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track page views with GA4
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-V5R0D0BS28', {
      page_path: url,
    });
  }
};

// Track outbound links with GA4
export const trackOutboundLink = (url: string) => {
  trackEvent({
    action: 'click',
    category: 'outbound',
    label: url,
  });
  
  // Delay navigation to ensure the tracking event is sent
  setTimeout(() => {
    window.location.href = url;
  }, 100);
};

// Declare gtag as a global to avoid TypeScript errors
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string | string[],
      params?: Record<string, any>
    ) => void;
    dataLayer: Record<string, any>[];
  }
}
