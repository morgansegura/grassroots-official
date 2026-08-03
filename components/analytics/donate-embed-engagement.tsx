"use client";

import * as React from "react";

import { trackEvent } from "@/lib/analytics";

const DEFAULT_SELECTOR = ".donate-screen-embed-iframe";

type DonateEmbedEngagementProps = {
  /** CSS selector for the donation iframe to watch. */
  selector?: string;
};

/**
 * Fires `donate_open` when someone clicks into the embedded donation form.
 *
 * Ad traffic landing on /donate gives through this iframe without ever
 * touching a donate button, so without this the whole page converts nothing.
 * We can't see inside a cross-origin iframe, but focus moving into it blurs
 * the parent window and leaves the iframe as `document.activeElement` —
 * which is a real engagement signal rather than a page view.
 *
 * Reported as `donate_open` (not a separate event) so donation intent means
 * one thing across the modal, the CTAs, and this embed. `donate_source`
 * tells them apart in reporting.
 */
export function DonateEmbedEngagement({
  selector = DEFAULT_SELECTOR,
}: DonateEmbedEngagementProps) {
  React.useEffect(() => {
    let fired = false;

    const handler = () => {
      if (fired) return;

      const active = document.activeElement;
      // Tab-switching also blurs the window, but leaves activeElement on
      // the body. Only a click into the frame lands it on the iframe.
      if (!active || active.tagName !== "IFRAME") return;
      if (!active.matches(selector)) return;

      fired = true;
      trackEvent("donate_open", {
        donate_source: "embed",
        page_path: window.location.pathname,
      });
    };

    window.addEventListener("blur", handler);
    return () => window.removeEventListener("blur", handler);
  }, [selector]);

  return null;
}
