// Google Analytics Event Tracking
interface EventProps {
  action: string;
  category: string;
  label: string;
  value?: number;
}

// Check if analytics is available and not blocked
const isAnalyticsAvailable = () => {
  return typeof window !== 'undefined' && 
         typeof window.gtag === 'function';
};

// Track custom events with GA4
export const trackEvent = ({ action, category, label, value }: EventProps) => {
  if (isAnalyticsAvailable()) {
    try {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    } catch (error) {
      // Silently handle errors from ad blockers
      console.debug('Analytics event tracking blocked or failed');
    }
  }
};

// Track page views with GA4
export const trackPageView = (url: string) => {
  if (isAnalyticsAvailable()) {
    try {
      window.gtag('config', 'G-V5R0D0BS28', {
        page_path: url,
      });
    } catch (error) {
      // Silently handle errors from ad blockers
      console.debug('Analytics page view tracking blocked or failed');
    }
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
