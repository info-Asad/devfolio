'use client';

import { ReactNode } from 'react';
import GoogleAnalytics from './GoogleAnalytics';
import GoogleTagManager from './GoogleTagManager';
import { usePageViewTracking } from '@/hooks/use-analytics';

// Whether to use Google Tag Manager or direct Google Analytics
const USE_GTM = false; // Set to true if you're using GTM instead of direct GA

interface AnalyticsProviderProps {
  children?: ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // Set up page view tracking
  usePageViewTracking();
  
  return (
    <>
      {USE_GTM ? <GoogleTagManager /> : <GoogleAnalytics />}
      {children}
    </>
  );
}
