'use client';

import Script from 'next/script';

// Your Google Analytics Measurement ID - replace with your actual GA ID
const GA_MEASUREMENT_ID = 'G-V5R0D0BS28'; 

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onError={(e) => {
          // Handle script loading errors (often due to ad blockers)
          console.log('Analytics script failed to load - likely blocked by an extension');
        }}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: true,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
