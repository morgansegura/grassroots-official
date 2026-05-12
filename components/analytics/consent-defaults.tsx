import Script from "next/script";

/**
 * Emits Google Consent Mode v2 default-deny.
 *
 * Uses `strategy="afterInteractive"` because Next.js 16 only allows
 * `beforeInteractive` from `app/layout.tsx` directly, and this component
 * lives one layer down (in WrapperScreen). Trade-off: the consent
 * defaults fire after hydration starts instead of before. That's
 * acceptable while no GTM container is loaded yet — when GTM is added,
 * make sure its script tag comes after this one (or move both to
 * `app/layout.tsx` with `beforeInteractive`).
 *
 * The script body sets up `window.gtag` and pushes default consent:
 * everything except security and basic functionality is denied until
 * the user makes a choice in the cookie banner. `wait_for_update: 500`
 * lets GTM hold tag firing for up to 500ms while it waits for the
 * consent update from `pushConsentUpdate()`.
 */
export function ConsentDefaults() {
  return (
    <Script
      id="consent-defaults"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
window.gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
window.gtag('set', 'ads_data_redaction', true);
window.gtag('set', 'url_passthrough', true);
`,
      }}
    />
  );
}
