"use client";

import * as React from "react";

import {
  Button,
  Checkbox,
  Field,
  Input,
  Select,
  Textarea,
  describedBy,
} from "@/components/ui";
import { COPY } from "@/lib/apply/copy";
import {
  ASSISTANCE_PROGRAMS,
  COST_TYPES,
  EMPTY_APPLICATION,
  INCOME_BRACKETS,
  RELATIONSHIPS,
  STEP_COUNT,
  STEP_FIELDS,
  type ApplicationInput,
  type Locale,
} from "@/lib/apply/fields";
import { submitApplication } from "@/lib/apply/submit";
import { errorsForStep, validate, type Errors } from "@/lib/apply/validate";

import "./scholarship-form.css";

type Status = "idle" | "submitting" | "success" | "error";

export function ScholarshipForm() {
  const [locale, setLocale] = React.useState<Locale>("en");
  const [step, setStep] = React.useState(0);
  const [values, setValues] = React.useState<ApplicationInput>(
    EMPTY_APPLICATION,
  );
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<Status>("idle");

  const t = COPY[locale];
  const headingRef = React.useRef<HTMLHeadingElement>(null);

  const set = <K extends keyof ApplicationInput>(
    key: K,
    value: ApplicationInput[K],
  ) => {
    setValues((v) => ({ ...v, [key]: value }));
    // Clear this field's error as soon as it is touched — leaving stale red on
    // a field someone is actively fixing reads as broken.
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const toggle = <K extends "assistance" | "costs">(
    key: K,
    option: ApplicationInput[K][number],
  ) => {
    const list = values[key] as string[];
    const next = list.includes(option)
      ? list.filter((v) => v !== option)
      : [...list, option];
    set(key, next as ApplicationInput[K]);
  };

  /** Moves focus to the step heading so keyboard and screen-reader users land
   *  in the right place instead of at the top of the document. */
  const focusHeading = () => {
    window.requestAnimationFrame(() => headingRef.current?.focus());
  };

  const next = () => {
    const stepErrors = errorsForStep(
      validate({ ...values, locale }, t),
      STEP_FIELDS[step],
    );
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      focusHeading();
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, STEP_COUNT - 1));
    focusHeading();
  };

  const back = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
    focusHeading();
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const all = validate({ ...values, locale }, t);
    if (Object.keys(all).length > 0) {
      setErrors(all);
      // Jump back to the first step that has a problem rather than leaving the
      // applicant on a valid-looking final step.
      const bad = STEP_FIELDS.findIndex((fields) =>
        fields.some((f) => all[f]),
      );
      if (bad >= 0) setStep(bad);
      focusHeading();
      return;
    }

    setStatus("submitting");

    const fd = new FormData();
    fd.set("locale", locale);
    fd.set("relationship", values.relationship);
    fd.set("applicantName", values.applicantName);
    fd.set("email", values.email);
    fd.set("phone", values.phone);
    fd.set("playerFirstName", values.playerFirstName);
    fd.set("playerLastName", values.playerLastName);
    fd.set("playerBirthYear", values.playerBirthYear);
    fd.set("club", values.club);
    fd.set("householdSize", values.householdSize);
    fd.set("incomeBracket", values.incomeBracket);
    values.assistance.forEach((a) => fd.append("assistance", a));
    values.costs.forEach((c) => fd.append("costs", c));
    fd.set("needDescription", values.needDescription);
    if (values.consentVerify) fd.set("consentVerify", "on");
    if (values.attestation) fd.set("attestation", "on");

    const result = await submitApplication(fd);
    setStatus(result.ok ? "success" : "error");
    focusHeading();
  };

  if (status === "success") {
    return (
      <div className="scholarship-form-result" role="status">
        <h2 className="scholarship-form-result-heading" tabIndex={-1} ref={headingRef}>
          {t.successHeading}
        </h2>
        <p className="scholarship-form-result-body">{t.successBody}</p>
      </div>
    );
  }

  const err = (k: keyof ApplicationInput) => errors[k];

  return (
    <form className="scholarship-form" onSubmit={onSubmit} noValidate>
      <div className="scholarship-form-top">
        <p className="scholarship-form-progress" aria-live="polite">
          {t.stepOf(step + 1, STEP_COUNT)} · {t.stepNames[step]}
        </p>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setLocale((l) => (l === "en" ? "es" : "en"))}
        >
          {t.langLabel}
        </Button>
      </div>

      <ol className="scholarship-form-steps" aria-hidden="true">
        {t.stepNames.map((name, i) => (
          <li
            key={name}
            className="scholarship-form-step-dot"
            data-state={i < step ? "done" : i === step ? "current" : "todo"}
          />
        ))}
      </ol>

      <h2
        className="scholarship-form-heading"
        tabIndex={-1}
        ref={headingRef}
      >
        {[t.s1Heading, t.s2Heading, t.s3Heading, t.s4Heading][step]}
      </h2>

      {status === "error" ? (
        <div className="scholarship-form-error" role="alert">
          <strong>{t.errorHeading}</strong>
          <p>{t.errorBody}</p>
        </div>
      ) : null}

      {/* Step 1 — about you */}
      {step === 0 ? (
        <div className="scholarship-form-fields">
          <Field htmlFor="relationship" label={t.relationship} error={err("relationship")}>
            <Select
              id="relationship"
              value={values.relationship}
              aria-invalid={Boolean(err("relationship"))}
              aria-describedby={describedBy("relationship", undefined, err("relationship"))}
              onChange={(e) =>
                set("relationship", e.target.value as ApplicationInput["relationship"])
              }
            >
              <option value="">—</option>
              {RELATIONSHIPS.map((r) => (
                <option key={r} value={r}>
                  {t.relationshipOptions[r]}
                </option>
              ))}
            </Select>
          </Field>

          <Field htmlFor="applicantName" label={t.applicantName} error={err("applicantName")}>
            <Input
              id="applicantName"
              name="applicantName"
              autoComplete="name"
              value={values.applicantName}
              aria-invalid={Boolean(err("applicantName"))}
              aria-describedby={describedBy("applicantName", undefined, err("applicantName"))}
              onChange={(e) => set("applicantName", e.target.value)}
            />
          </Field>

          <Field htmlFor="email" label={t.email} error={err("email")}>
            <Input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={values.email}
              aria-invalid={Boolean(err("email"))}
              aria-describedby={describedBy("email", undefined, err("email"))}
              onChange={(e) => set("email", e.target.value)}
            />
          </Field>

          <Field htmlFor="phone" label={t.phone} hint={t.optional}>
            <Input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => set("phone", e.target.value)}
            />
          </Field>
        </div>
      ) : null}

      {/* Step 2 — the player */}
      {step === 1 ? (
        <div className="scholarship-form-fields">
          <p className="scholarship-form-note">{t.s2Note}</p>

          <Field htmlFor="playerFirstName" label={t.playerFirstName} error={err("playerFirstName")}>
            <Input
              id="playerFirstName"
              value={values.playerFirstName}
              aria-invalid={Boolean(err("playerFirstName"))}
              aria-describedby={describedBy("playerFirstName", undefined, err("playerFirstName"))}
              onChange={(e) => set("playerFirstName", e.target.value)}
            />
          </Field>

          <Field htmlFor="playerLastName" label={t.playerLastName} error={err("playerLastName")}>
            <Input
              id="playerLastName"
              value={values.playerLastName}
              aria-invalid={Boolean(err("playerLastName"))}
              aria-describedby={describedBy("playerLastName", undefined, err("playerLastName"))}
              onChange={(e) => set("playerLastName", e.target.value)}
            />
          </Field>

          <Field htmlFor="playerBirthYear" label={t.playerBirthYear} error={err("playerBirthYear")}>
            <Input
              id="playerBirthYear"
              inputMode="numeric"
              maxLength={4}
              placeholder="2014"
              value={values.playerBirthYear}
              aria-invalid={Boolean(err("playerBirthYear"))}
              aria-describedby={describedBy("playerBirthYear", undefined, err("playerBirthYear"))}
              onChange={(e) =>
                set("playerBirthYear", e.target.value.replace(/\D/g, ""))
              }
            />
          </Field>

          <Field htmlFor="club" label={t.club} help={t.clubHelp} error={err("club")}>
            <Input
              id="club"
              value={values.club}
              aria-invalid={Boolean(err("club"))}
              aria-describedby={describedBy("club", t.clubHelp, err("club"))}
              onChange={(e) => set("club", e.target.value)}
            />
          </Field>
        </div>
      ) : null}

      {/* Step 3 — household and need */}
      {step === 2 ? (
        <div className="scholarship-form-fields">
          <p className="scholarship-form-note">{t.s3Note}</p>

          <Field htmlFor="householdSize" label={t.householdSize} error={err("householdSize")}>
            <Input
              id="householdSize"
              inputMode="numeric"
              maxLength={2}
              value={values.householdSize}
              aria-invalid={Boolean(err("householdSize"))}
              aria-describedby={describedBy("householdSize", undefined, err("householdSize"))}
              onChange={(e) =>
                set("householdSize", e.target.value.replace(/\D/g, ""))
              }
            />
          </Field>

          <Field htmlFor="incomeBracket" label={t.incomeBracket} error={err("incomeBracket")}>
            <Select
              id="incomeBracket"
              value={values.incomeBracket}
              aria-invalid={Boolean(err("incomeBracket"))}
              aria-describedby={describedBy("incomeBracket", undefined, err("incomeBracket"))}
              onChange={(e) =>
                set("incomeBracket", e.target.value as ApplicationInput["incomeBracket"])
              }
            >
              <option value="">—</option>
              {INCOME_BRACKETS.map((b) => (
                <option key={b} value={b}>
                  {t.incomeOptions[b]}
                </option>
              ))}
            </Select>
          </Field>

          <fieldset className="scholarship-form-group">
            <legend className="scholarship-form-legend">{t.assistance}</legend>
            <p className="scholarship-form-help">{t.assistanceHelp}</p>
            <div className="scholarship-form-options">
              {ASSISTANCE_PROGRAMS.map((a) => (
                <Checkbox
                  key={a}
                  id={`assistance-${a}`}
                  label={t.assistanceOptions[a]}
                  checked={values.assistance.includes(a)}
                  onChange={() => toggle("assistance", a)}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="scholarship-form-group" data-invalid={Boolean(err("costs"))}>
            <legend className="scholarship-form-legend">{t.costs}</legend>
            <div className="scholarship-form-options">
              {COST_TYPES.map((c) => (
                <Checkbox
                  key={c}
                  id={`costs-${c}`}
                  label={t.costsOptions[c]}
                  checked={values.costs.includes(c)}
                  onChange={() => toggle("costs", c)}
                />
              ))}
            </div>
            {err("costs") ? (
              <p className="scholarship-form-group-error" role="alert">
                {err("costs")}
              </p>
            ) : null}
          </fieldset>

          <Field
            htmlFor="needDescription"
            label={t.needDescription}
            help={t.needDescriptionHelp}
            error={err("needDescription")}
          >
            <Textarea
              id="needDescription"
              rows={5}
              value={values.needDescription}
              aria-invalid={Boolean(err("needDescription"))}
              aria-describedby={describedBy(
                "needDescription",
                t.needDescriptionHelp,
                err("needDescription"),
              )}
              onChange={(e) => set("needDescription", e.target.value)}
            />
          </Field>
        </div>
      ) : null}

      {/* Step 4 — consent */}
      {step === 3 ? (
        <div className="scholarship-form-fields">
          <div className="scholarship-form-options">
            <Checkbox
              id="consentVerify"
              label={t.consentVerify}
              checked={values.consentVerify}
              onChange={(e) => set("consentVerify", e.target.checked)}
            />
            {err("consentVerify") ? (
              <p className="scholarship-form-group-error" role="alert">
                {err("consentVerify")}
              </p>
            ) : null}

            <Checkbox
              id="attestation"
              label={t.attestation}
              checked={values.attestation}
              onChange={(e) => set("attestation", e.target.checked)}
            />
            {err("attestation") ? (
              <p className="scholarship-form-group-error" role="alert">
                {err("attestation")}
              </p>
            ) : null}
          </div>

          <p className="scholarship-form-privacy">{t.privacyNote}</p>
        </div>
      ) : null}

      <div className="scholarship-form-actions">
        {step > 0 ? (
          <Button type="button" variant="outline" onClick={back}>
            {t.back}
          </Button>
        ) : (
          <span />
        )}

        {step < STEP_COUNT - 1 ? (
          <Button type="button" variant="donate" onClick={next}>
            {t.next}
          </Button>
        ) : (
          <Button
            type="submit"
            variant="donate"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? t.submitting : t.submit}
          </Button>
        )}
      </div>
    </form>
  );
}
