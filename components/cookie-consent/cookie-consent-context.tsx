"use client";

import * as React from "react";

import {
  ALL_DENIED,
  ALL_GRANTED,
  type ConsentChoices,
  type ConsentState,
  getConsentServerSnapshot,
  getConsentSnapshot,
  pushConsentUpdate,
  setConsentChoices,
  subscribeConsent,
} from "@/lib/cookie-consent";

import { CookieBanner } from "./cookie-banner";
import { CookiePreferencesModal } from "./cookie-preferences";

type CookieConsentContextValue = {
  consent: ConsentState | null;
  hasDecided: boolean;
  showBanner: boolean;
  preferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  saveChoices: (choices: ConsentChoices) => void;
};

const CookieConsentContext =
  React.createContext<CookieConsentContextValue | null>(null);

function useIsHydrated(): boolean {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isHydrated = useIsHydrated();
  const consent = React.useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  );
  const [preferencesOpen, setPreferencesOpen] = React.useState(false);

  React.useEffect(() => {
    if (isHydrated && consent) {
      pushConsentUpdate(consent.choices);
    }
  }, [isHydrated, consent]);

  const value = React.useMemo<CookieConsentContextValue>(
    () => ({
      consent,
      hasDecided: isHydrated && consent !== null,
      showBanner: isHydrated && consent === null && !preferencesOpen,
      preferencesOpen,
      openPreferences: () => setPreferencesOpen(true),
      closePreferences: () => setPreferencesOpen(false),
      acceptAll: () => {
        setConsentChoices(ALL_GRANTED);
        setPreferencesOpen(false);
      },
      rejectAll: () => {
        setConsentChoices(ALL_DENIED);
        setPreferencesOpen(false);
      },
      saveChoices: (choices) => {
        setConsentChoices(choices);
        setPreferencesOpen(false);
      },
    }),
    [consent, isHydrated, preferencesOpen],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      <CookieBanner />
      <CookiePreferencesModal />
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = React.useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error(
      "useCookieConsent must be used within <CookieConsentProvider>",
    );
  }
  return ctx;
}
