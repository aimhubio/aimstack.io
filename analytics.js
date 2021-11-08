//@ts-nocheck
export const SEGMENT_WRITE_KEY = "yoyQudE6HDZ6UmHcnhtZFwKC7LleWQJg";
export function isDev() {
  return process.env.NODE_ENV === "development";
}

let initialized = false;

const enabled = () => {
  return (
    (!isDev() && window.analytics !== false) || window.telemetry_enabled !== 0
  );
};

const init = () => {
  if (initialized) return;
  window.analytics._writeKey = SEGMENT_WRITE_KEY;
  window.analytics.load(SEGMENT_WRITE_KEY);
  initialized = true;
};

const pageView = (pageName, pageCat = null) => {
  if (!enabled()) return;
  init();
  window.analytics.page(pageCat, pageName, {
    path: window.location.pathname,
    url: window.location.hostname,
    search: null,
    referrer: null,
    title: null,
  });
};

const trackEvent = (eventName, properties = {}) => {
  if (!enabled()) return;
  init();

  window.analytics.track(eventName, properties, {
    path: window.location.pathname,
    url: window.location.hostname,
    page: {
      path: null,
      search: null,
      referrer: null,
      title: null,
      url: null,
    },
  });
};

export { init, pageView, trackEvent };
