import type { ApplyStrings } from "./copy";
import type { ApplicationInput } from "./fields";

export type Errors = Partial<Record<keyof ApplicationInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates the whole application. Callers filter to the fields on the current
 * step so a partly-filled form does not shout about questions not yet asked.
 *
 * Deliberately permissive: this is a need-based intake for families under
 * stress, not a credit application. Phone is optional, the narrative has a low
 * floor, and income bracket accepts "prefer not to say" — refusing to state
 * income is not grounds to block a submission.
 */
export function validate(v: ApplicationInput, t: ApplyStrings): Errors {
  const e: Errors = {};

  if (!v.relationship) e.relationship = t.vRequired;
  if (!v.applicantName.trim()) e.applicantName = t.vRequired;
  if (!v.email.trim()) e.email = t.vRequired;
  else if (!EMAIL.test(v.email.trim())) e.email = t.vEmail;

  if (!v.playerFirstName.trim()) e.playerFirstName = t.vRequired;
  if (!v.playerLastName.trim()) e.playerLastName = t.vRequired;
  if (!/^\d{4}$/.test(v.playerBirthYear.trim())) e.playerBirthYear = t.vYear;
  if (!v.club.trim()) e.club = t.vRequired;

  if (!v.householdSize.trim()) e.householdSize = t.vRequired;
  if (!v.incomeBracket) e.incomeBracket = t.vRequired;
  if (v.costs.length === 0) e.costs = t.vRequired;
  if (v.needDescription.trim().length < 20) e.needDescription = t.vShort;

  if (!v.consentVerify) e.consentVerify = t.vRequired;
  if (!v.attestation) e.attestation = t.vRequired;

  return e;
}

/** Errors limited to one step's fields. */
export function errorsForStep(
  all: Errors,
  fields: ReadonlyArray<keyof ApplicationInput>,
): Errors {
  const out: Errors = {};
  for (const f of fields) if (all[f]) out[f] = all[f];
  return out;
}
