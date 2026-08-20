import * as React from "react";

import { cn } from "@/lib/utils";

import "./field.css";

type FieldProps = {
  /** Must match the control's id — this is what makes the label clickable. */
  htmlFor: string;
  label: string;
  help?: string;
  error?: string;
  /** Shown as a quiet suffix so "Optional" is visible without hunting. */
  hint?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Label + help + error around one control. The error is rendered in the DOM
 * whenever present and wired via aria-describedby by the caller, so screen
 * readers announce it rather than users discovering it visually.
 */
export function Field({
  htmlFor,
  label,
  help,
  error,
  hint,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("field", className)} data-invalid={Boolean(error)}>
      <label className="field-label" htmlFor={htmlFor}>
        <span>{label}</span>
        {hint ? <span className="field-hint">{hint}</span> : null}
      </label>

      {help ? (
        <p className="field-help" id={`${htmlFor}-help`}>
          {help}
        </p>
      ) : null}

      {children}

      {error ? (
        <p className="field-error" id={`${htmlFor}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** The aria-describedby value for a control inside a Field. */
export function describedBy(id: string, help?: string, error?: string) {
  const parts = [help ? `${id}-help` : null, error ? `${id}-error` : null];
  const value = parts.filter(Boolean).join(" ");
  return value || undefined;
}
