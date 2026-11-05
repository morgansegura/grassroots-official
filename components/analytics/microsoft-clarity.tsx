"use client";

import { useEffect } from "react";
import Script from "next/script";

import { useCookieConsent } from "@/components/cookie-consent";

type ClarityWindow = Window & {
  clarity?: (...args: unknown[]) => void;
};

/**
 * Microsoft Clarity: heatmaps and session recordings.
 *
 * Clarity records what visitors do, so it never loads until they allow
 * analytics in the cookie banner. Turning analytics off later stops an
 * already-loaded tag. Not in GTM: a GTM tag fires before anyone chooses.
 *
 * Inert without a project id, and outside production (passed from the
 * server, matching GoogleTagManager).
 */
export function MicrosoftClarity({ projectId }: { projectId?: string }) {
  const { consent } = useCookieConsent();
  const allowed = consent?.choices.analytics === true;

  useEffect(() => {
    const clarity = (window as ClarityWindow).clarity;
    if (clarity) clarity("consent", allowed);
  }, [allowed]);

  if (!projectId || !allowed) return null;

  return (
    <Script id="ms-clarity" strategy="lazyOnload">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${projectId}");
      window.clarity("consent");`}
    </Script>
  );
}
