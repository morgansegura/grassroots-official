"use client";

import * as React from "react";
import { Switch } from "@base-ui/react/switch";

import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPopup,
  DialogPortal,
} from "@/components/ui";
import { ALL_DENIED, type ConsentChoices } from "@/lib/cookie-consent";

import { useCookieConsent } from "./cookie-consent-context";

import "./cookie-preferences.css";

type Category = {
  id: keyof ConsentChoices;
  label: string;
  description: string;
  required?: boolean;
};

const CATEGORIES: Category[] = [
  {
    id: "necessary",
    label: "Strictly necessary",
    description:
      "Required for the site to function — security, basic navigation, and form submission. These can't be disabled.",
    required: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    description:
      "Help us understand which pages are useful and where visitors run into trouble. Aggregated, never sold.",
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Let us measure outreach campaigns and (in future) deliver more relevant content. We don't currently run paid ads.",
  },
];

export function CookiePreferencesModal() {
  const { preferencesOpen, closePreferences, consent } = useCookieConsent();

  return (
    <Dialog
      open={preferencesOpen}
      onOpenChange={(open) => {
        if (!open) closePreferences();
      }}
    >
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup className="cookie-preferences-popup" size="lg">
          <header className="cookie-preferences-header">
            <h2 className="cookie-preferences-title">Cookie preferences</h2>
            <p className="cookie-preferences-intro">
              Choose which categories of cookies we may set on your device. You
              can change this anytime via &ldquo;Cookie preferences&rdquo; in
              the footer.
            </p>
          </header>

          {preferencesOpen ? (
            <PreferencesForm initialChoices={consent?.choices ?? ALL_DENIED} />
          ) : null}
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
}

function PreferencesForm({
  initialChoices,
}: {
  initialChoices: ConsentChoices;
}) {
  const { acceptAll, rejectAll, saveChoices } = useCookieConsent();
  const [choices, setChoices] = React.useState<ConsentChoices>(initialChoices);

  const setChoice = (id: keyof ConsentChoices, value: boolean) => {
    if (id === "necessary") return;
    setChoices((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <ul className="cookie-preferences-list">
        {CATEGORIES.map((cat) => {
          const checked = choices[cat.id] === true;
          return (
            <li key={cat.id} className="cookie-preferences-row">
              <div className="cookie-preferences-text">
                <p className="cookie-preferences-label">{cat.label}</p>
                <p className="cookie-preferences-description">
                  {cat.description}
                </p>
              </div>
              <Switch.Root
                className="cookie-preferences-switch"
                checked={checked}
                disabled={cat.required}
                onCheckedChange={(value) => setChoice(cat.id, value)}
                aria-label={`${cat.label} cookies`}
              >
                <Switch.Thumb className="cookie-preferences-switch-thumb" />
              </Switch.Root>
            </li>
          );
        })}
      </ul>

      <div className="cookie-preferences-actions">
        <Button variant="ghost" size="xs" onClick={rejectAll} type="button">
          Reject All
        </Button>
        <Button variant="outline" size="xs" onClick={acceptAll} type="button">
          Accept All
        </Button>
        <Button size="xs" onClick={() => saveChoices(choices)} type="button">
          Save Preferences
        </Button>
      </div>
    </>
  );
}
