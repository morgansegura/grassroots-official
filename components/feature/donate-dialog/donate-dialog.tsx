"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { ZEFFY_FORM_URL } from "@/lib/givebutter";

import {
  Dialog,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
} from "@/components/ui/dialog";

type DonateDialogProps = {
  /** Trigger element (e.g. a styled <button>). Must be a single element. */
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  /** Optional Zeffy form URL override (defaults to the locked GRSF form). */
  formUrl?: string;
  className?: string;
};

const FALLBACK_HEIGHT = 560;
const MIN_HEIGHT = 420;
const MAX_HEIGHT = 920;

function isZeffyOrigin(origin: string): boolean {
  if (!origin) return false;
  try {
    const host = new URL(origin).hostname;
    return host === "zeffy.com" || host.endsWith(".zeffy.com");
  } catch {
    return false;
  }
}

function extractHeight(data: unknown): number | null {
  if (typeof data === "number") return data;
  if (typeof data === "string") {
    const m = data.match(/(\d{2,5})/);
    return m ? Number(m[1]) : null;
  }
  if (data && typeof data === "object") {
    const obj = data as Record<string, unknown>;
    if (typeof obj.height === "number") return obj.height;
    if (typeof obj.iframeHeight === "number") return obj.iframeHeight;
    const payload = obj.payload as Record<string, unknown> | undefined;
    if (payload && typeof payload.height === "number") return payload.height;
  }
  return null;
}

/**
 * Wraps a trigger element so clicking it opens the Zeffy donation form
 * inside a modal overlay (iframe). Donor never leaves the site. Listens
 * for postMessage resize events from the Zeffy iframe so the popup
 * height tracks the form's actual content (falls back to FALLBACK_HEIGHT
 * if Zeffy doesn't emit resize events).
 */
export function DonateDialog({
  children,
  formUrl = ZEFFY_FORM_URL,
  className,
}: DonateDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [measuredHeight, setMeasuredHeight] = React.useState<number | null>(
    null,
  );

  React.useEffect(() => {
    if (!open) return;

    const handler = (event: MessageEvent) => {
      if (!isZeffyOrigin(event.origin)) return;
      const height = extractHeight(event.data);
      if (height && height >= MIN_HEIGHT && height <= MAX_HEIGHT) {
        setMeasuredHeight(height);
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [open]);

  const handleOpenChange = (next: boolean) => {
    if (!next) setMeasuredHeight(null);
    setOpen(next);
  };

  const trigger = React.cloneElement(children, {
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      children.props.onClick?.(event);
      if (!event.defaultPrevented) {
        trackEvent("donate_open", {
          donate_source: "modal",
          page_path: window.location.pathname,
        });
        setOpen(true);
      }
    },
  });

  const popupHeight = measuredHeight ?? FALLBACK_HEIGHT;

  return (
    <>
      {trigger}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup
            size="full"
            className={cn(
              "w-[min(95vw,560px)] max-h-[90vh] p-0 overflow-hidden",
              "transition-[height] duration-200 ease-out",
              className,
            )}
            style={{ height: `min(90vh, ${popupHeight}px)` }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close donation form"
              className={cn(
                "absolute top-3 right-3 z-10 inline-flex items-center justify-center",
                "size-9 rounded-full bg-white/95",
                "text-(--color-cleat)",
                "shadow-[0_4px_12px_-4px_color-mix(in_oklch,var(--color-cleat)_30%,transparent)]",
                "hover:bg-white hover:-translate-y-px",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-touchline)/40",
                "transition-all duration-150 ease-out",
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
                aria-hidden="true"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
            <iframe
              src={formUrl}
              title="Donate to Grassroots Foundation"
              className="w-full h-full border-0 block"
              allow="payment *"
            />
          </DialogPopup>
        </DialogPortal>
      </Dialog>
    </>
  );
}
