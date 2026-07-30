"use client";

import * as React from "react";

import { trackEvent } from "@/lib/analytics";

/**
 * Delegated click tracking for mailto and off-site links.
 *
 * A single listener on the document rather than per-link handlers: nearly
 * every screen here is a server component, so adding onClick at each call
 * site would mean converting screens to client components for the sake of
 * analytics. This also picks up links added later with no extra wiring.
 */
export function InteractionTracker() {
  React.useEffect(() => {
    const handler = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (href.startsWith("mailto:")) {
        trackEvent("email_click", {
          email_address: href.replace(/^mailto:/, "").split("?")[0],
          page_path: window.location.pathname,
        });
        return;
      }

      if (!/^https?:/i.test(href)) return;

      let host: string;
      try {
        host = new URL(href, window.location.href).host;
      } catch {
        return;
      }
      if (host === window.location.host) return;

      trackEvent("outbound_click", {
        link_url: href,
        link_domain: host,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
