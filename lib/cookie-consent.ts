/**
 * Cookie consent — types, persistent store, and GTM Consent Mode v2 helpers.
 *
 * The default-deny script is emitted by <ConsentDefaults /> as a
 * `beforeInteractive` Next.js Script, so GTM never fires storage-using
 * tags before the user has chosen.
 *
 * The store is a small external store backed by localStorage, exposed via
 * `subscribeConsent` / `getConsentSnapshot` so React components can read
 * it via `useSyncExternalStore` without setState-in-effect.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "grsf-cookie-consent-v1";

export type ConsentChoices = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentState = {
  version: number;
  timestamp: number;
  choices: ConsentChoices;
};

export const ALL_GRANTED: ConsentChoices = {
  necessary: true,
  analytics: true,
  marketing: true,
};

export const ALL_DENIED: ConsentChoices = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function readFromStorage(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeToStorage(state: ConsentState): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage unavailable; no-op
  }
}

const listeners = new Set<() => void>();
let snapshotCache: ConsentState | null | undefined = undefined;

function ensureSnapshot(): ConsentState | null {
  if (snapshotCache === undefined) {
    snapshotCache = readFromStorage();
  }
  return snapshotCache;
}

export function subscribeConsent(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getConsentSnapshot(): ConsentState | null {
  if (typeof window === "undefined") return null;
  return ensureSnapshot();
}

export function getConsentServerSnapshot(): ConsentState | null {
  return null;
}

export function setConsentChoices(choices: ConsentChoices): ConsentState {
  const next: ConsentState = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    choices,
  };
  writeToStorage(next);
  snapshotCache = next;
  pushConsentUpdate(choices);
  listeners.forEach((listener) => listener());
  return next;
}

export function pushConsentUpdate(choices: ConsentChoices) {
  if (typeof window === "undefined") return;
  const w = window;
  w.dataLayer = w.dataLayer ?? [];
  if (typeof w.gtag !== "function") {
    w.gtag = function gtag(...args: unknown[]) {
      w.dataLayer!.push(args);
    };
  }
  w.gtag("consent", "update", {
    analytics_storage: choices.analytics ? "granted" : "denied",
    ad_storage: choices.marketing ? "granted" : "denied",
    ad_user_data: choices.marketing ? "granted" : "denied",
    ad_personalization: choices.marketing ? "granted" : "denied",
  });
}
