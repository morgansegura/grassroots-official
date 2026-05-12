"use client";

import Link from "next/link";

import { Button } from "@/components/ui";

import { useCookieConsent } from "./cookie-consent-context";

import "./cookie-banner.css";

export function CookieBanner() {
  const { showBanner, acceptAll, rejectAll, openPreferences } =
    useCookieConsent();

  if (!showBanner) return null;

  return (
    <div
      className="cookie-banner"
      role="region"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <p className="cookie-banner-title">We value your privacy</p>
          <p className="cookie-banner-body">
            We use cookies to keep this site running, understand how visitors
            use it, and (with your consent) improve how we tell our story. See
            our <Link href="/cookies">Cookie Policy</Link> for details.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <Button
            variant="ghost"
            size="xs"
            onClick={openPreferences}
            type="button"
          >
            Customize
          </Button>
          <Button variant="outline" size="xs" onClick={rejectAll} type="button">
            Reject All
          </Button>
          <Button size="xs" onClick={acceptAll} type="button">
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}
