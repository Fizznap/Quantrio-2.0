export const trackEvent = (eventName: string, eventData: Record<string, any> = {}) => {
  // Console log for demo/verification purposes
  console.log(`[Analytics] Event Tracked: ${eventName}`, eventData);

  // Example placeholder for Google Analytics, Meta Pixel, or Mixpanel
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventData);
  }
};
