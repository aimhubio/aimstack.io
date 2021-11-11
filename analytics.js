export const SEGMENT_WRITE_KEY = "yoyQudE6HDZ6UmHcnhtZFwKC7LleWQJg";
export function isProd() {
  return process.env.NODE_ENV === "production" && process.browser;
}

let initialized = false;

const enabled = () => {
  return isProd() && window.analytics !== false;
};

const init = () => {
  if (initialized) return;
  window.analytics._writeKey = SEGMENT_WRITE_KEY;
  window.analytics.load(SEGMENT_WRITE_KEY);
  initialized = true;
};

const trackEvent = (eventName, properties = {}) => {
  if (!enabled()) return;

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

export { init, trackEvent };