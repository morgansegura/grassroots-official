"use client";

import { useCookieConsent } from "./cookie-consent-context";

type CookiePreferencesTriggerProps = React.ComponentProps<"button">;

/** Drop into the footer so users can revise their consent at any time. */
export function CookiePreferencesTrigger({
  className,
  children = "Cookie preferences",
  ...props
}: CookiePreferencesTriggerProps) {
  const { openPreferences } = useCookieConsent();
  return (
    <button
      type="button"
      className={className}
      onClick={openPreferences}
      {...props}
    >
      {children}
    </button>
  );
}
