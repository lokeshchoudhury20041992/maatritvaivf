const GOOGLE_ADS_CONVERSION_ID = 'AW-17172169546';
const CONSULTATION_FORM_CONVERSION_LABEL = 'eMF7COOzxMwcEMqGqvw_';
const CONSULTATION_FORM_SEND_TO = `${GOOGLE_ADS_CONVERSION_ID}/${CONSULTATION_FORM_CONVERSION_LABEL}`;

interface WindowWithGtag extends Window {
  gtag?: (command: string, name: string, params: Record<string, unknown>) => void;
}

export const trackEvent = (eventName: string, params: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as WindowWithGtag).gtag?.('event', eventName, {
      ...params,
      event_time: new Date().toISOString()
    });
  } else {
    // Fallback or dev mode logging
    console.log(`[Tracking Event]: ${eventName}`, params);
  }
};

export const trackConsultationFormConversion = (params: Record<string, unknown> = {}) => {
  const pagePath = typeof window !== 'undefined' ? window.location.pathname : '';

  trackEvent('conversion', {
    send_to: CONSULTATION_FORM_SEND_TO,
    page_path: pagePath,
    ...params
  });
};

export const trackConversion = (action: 'book_appointment' | 'whatsapp_click' | 'call_click', keyword: string) => {
  const pagePath = typeof window !== 'undefined' ? window.location.pathname : '';
  
  trackEvent('conversion', {
    ...(action === 'book_appointment' ? { send_to: CONSULTATION_FORM_SEND_TO } : {}),
    action,
    page_path: pagePath,
    keyword: keyword || 'unspecified'
  });
};
