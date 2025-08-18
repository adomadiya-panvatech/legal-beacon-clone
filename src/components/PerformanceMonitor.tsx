import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production and if web-vitals is available
    if (process.env.NODE_ENV === 'production' && 'PerformanceObserver' in window) {
      
      // Enhanced Core Web Vitals tracking
      const trackWebVital = (name: string, value: number) => {
        console.log(`${name}:`, value);
        
        // Send to Google Analytics
        if (window.gtag) {
          window.gtag('event', name, {
            value: Math.round(value),
            event_category: 'Web Vitals',
            event_label: name,
            non_interaction: true
          });
        }
        
        // Send to custom analytics endpoint (if available)
        if (process.env.REACT_APP_ANALYTICS_ENDPOINT) {
          fetch(process.env.REACT_APP_ANALYTICS_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, value, timestamp: Date.now() })
          }).catch(console.error);
        }
      };

      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        trackWebVital('LCP', lastEntry.startTime);
      });
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = entry.processingStart - entry.startTime;
          trackWebVital('FID', fid);
        });
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        trackWebVital('CLS', clsValue);
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Monitor First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        trackWebVital('FCP', firstEntry.startTime);
      });
      
      fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

      // Monitor Time to Interactive (TTI) - approximated
      const ttiObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'TTI') {
            trackWebVital('TTI', entry.startTime);
          }
        });
      });
      
      ttiObserver.observe({ entryTypes: ['measure'] });

      // Monitor Total Blocking Time (TBT)
      let totalBlockingTime = 0;
      const tbtObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.duration > 50) {
            totalBlockingTime += entry.duration - 50;
          }
        });
        
        trackWebVital('TBT', totalBlockingTime);
      });
      
      tbtObserver.observe({ entryTypes: ['longtask'] });

      // Track page load performance
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            trackWebVital('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
            trackWebVital('LoadComplete', navigation.loadEventEnd - navigation.loadEventStart);
            trackWebVital('TotalLoadTime', navigation.loadEventEnd - navigation.fetchStart);
          }
        }, 0);
      });

      // Track user interactions
      let firstInteraction = true;
      const trackInteraction = () => {
        if (firstInteraction) {
          const now = performance.now();
          trackWebVital('TTI_User', now);
          firstInteraction = false;
        }
      };

      ['click', 'keydown', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, trackInteraction, { once: true, passive: true });
      });

      // Cleanup observers on unmount
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        ttiObserver.disconnect();
        tbtObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor; 