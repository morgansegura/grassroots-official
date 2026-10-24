"use server";

import { logError } from "@/lib/logger";
import { clickupConfigured, createApplication } from "@/lib/clickup";

import { COPY } from "./copy";
import {
  ASSISTANCE_PROGRAMS,
  COST_TYPES,
  EMPTY_APPLICATION,
  INCOME_BRACKETS,
  LOCALES,
  RELATIONSHIPS,
  type ApplicationInput,
} from "./fields";
import { validate } from "./validate";

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "validation" | "transport" };

function one<T extends readonly string[]>(
  allowed: T,
  raw: FormDataEntryValue | null,
): T[number] | "" {
  const v = typeof raw === "string" ? raw : "";
  return (allowed as readonly string[]).includes(v) ? (v as T[number]) : "";
}

function many<T extends readonly string[]>(
  allowed: T,
  raw: FormDataEntryValue[],
): T[number][] {
  return raw
    .filter((v): v is string => typeof v === "string")
    .filter((v) => (allowed as readonly string[]).includes(v)) as T[number][];
}

function str(raw: FormDataEntryValue | null, max = 2000): string {
  return typeof raw === "string" ? raw.trim().slice(0, max) : "";
}

/**
 * Server action for the scholarship application.
 *
 * Re-validates everything the client validated — the client pass is UX, this
 * one is the gate. Every enum is checked against its allowed list rather than
 * trusted, so a hand-crafted POST cannot write arbitrary text into the board.
 */
export async function submitApplication(
  formData: FormData,
): Promise<SubmitResult> {
  const locale = (one(LOCALES, formData.get("locale")) ||
    "en") as ApplicationInput["locale"];

  const input: ApplicationInput = {
    ...EMPTY_APPLICATION,
    locale,
    relationship: one(RELATIONSHIPS, formData.get("relationship")),
    applicantName: str(formData.get("applicantName"), 120),
    email: str(formData.get("email"), 200),
    phone: str(formData.get("phone"), 40),
    playerFirstName: str(formData.get("playerFirstName"), 80),
    playerLastName: str(formData.get("playerLastName"), 80),
    playerBirthYear: str(formData.get("playerBirthYear"), 4),
    club: str(formData.get("club"), 160),
    householdSize: str(formData.get("householdSize"), 3),
    incomeBracket: one(INCOME_BRACKETS, formData.get("incomeBracket")),
    assistance: many(ASSISTANCE_PROGRAMS, formData.getAll("assistance")),
    costs: many(COST_TYPES, formData.getAll("costs")),
    needDescription: str(formData.get("needDescription"), 2000),
    consentVerify: formData.get("consentVerify") === "on",
    attestation: formData.get("attestation") === "on",
  };

  const errors = validate(input, COPY[locale]);
  if (Object.keys(errors).length > 0)
    return { ok: false, reason: "validation" };

  if (!clickupConfigured) {
    // Nothing to write to. Fail loudly to the caller rather than silently
    // swallowing a family's application.
    logError("apply", "ClickUp is not configured");
    return { ok: false, reason: "transport" };
  }

  const t = COPY[locale];
  const label = (map: Record<string, string>, keys: string[]) =>
    keys.map((k) => map[k] ?? k).join(", ");
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Los_Angeles",
  });

  try {
    await createApplication({
      playerName: `${input.playerFirstName} ${input.playerLastName}`.trim(),
      answers: [
        ["Applicant", input.applicantName],
        ["Relationship", t.relationshipOptions[input.relationship] ?? ""],
        ["Email", input.email],
        ["Phone", input.phone],
        ["Player birth year", input.playerBirthYear],
        ["Club", input.club],
        ["Household size", input.householdSize],
        ["Income", t.incomeOptions[input.incomeBracket] ?? ""],
        ["Assistance", label(t.assistanceOptions, input.assistance)],
        ["Costs requested", label(t.costsOptions, input.costs)],
        ["Language", locale === "es" ? "Español" : "English"],
        ["Consent to contact club", `Yes, ${today}`],
        ["Information attested accurate", `Yes, ${today}`],
      ],
      need: input.needDescription,
      email: input.email,
      phone: input.phone,
    });
    return { ok: true };
  } catch (error) {
    logError("apply", "ClickUp rejected the application", error);
    // ClickUp or network failure. The caller shows the family a retry path
    // and an email address rather than a dead end.
    return { ok: false, reason: "transport" };
  }
}
