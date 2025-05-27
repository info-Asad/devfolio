'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

export function usePageViewTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page view when the path changes
    if (pathname) {
      const url = searchParams?.size 
        ? `${pathname}?${searchParams.toString()}`
        : pathname;
      
      trackPageView(url);
    }
  }, [pathname, searchParams]);
}
