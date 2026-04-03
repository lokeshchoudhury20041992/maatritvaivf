export const trackEvent = (eventName: string, params: Record<string, any>) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('event', eventName, {
      ...params,
      event_time: new Date().toISOString()
    });
  } else {
    // Fallback or dev mode logging
    console.log(`[Tracking Event]: ${eventName}`, params);
  }
};

export const trackConversion = (action: 'book_appointment' | 'whatsapp_click' | 'call_click', keyword: string) => {
  const pagePath = typeof window !== 'undefined' ? window.location.pathname : '';
  
  trackEvent('conversion', {
    action,
    page_path: pagePath,
    keyword: keyword || 'unspecified'
  });
};
