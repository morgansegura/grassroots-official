/**
 * Scholarship application shape. Language-agnostic: keys and option values live
 * here, display strings live in `copy.ts`. Mirrors the intake described in
 * `docs/scholarship-review-process.md` §3 — notably, no document upload and no
 * exact income figure. Household size plus an income bracket is enough to
 * establish need at intake; documentation is verified later by the partner
 * club, so GRF never takes custody of financial records.
 */

export const RELATIONSHIPS = [
  "parent",
  "guardian",
  "player",
  "club-staff",
  "other",
] as const;
export type Relationship = (typeof RELATIONSHIPS)[number];

/** Household income bands. Wide on purpose — the point is a need signal, not a
 *  means test we are not qualified to administer. */
export const INCOME_BRACKETS = [
  "under-25k",
  "25k-40k",
  "40k-60k",
  "60k-80k",
  "over-80k",
  "prefer-not-to-say",
] as const;
export type IncomeBracket = (typeof INCOME_BRACKETS)[number];

/** Participation in any of these is an accepted proxy for need (§2.3). */
export const ASSISTANCE_PROGRAMS = [
  "school-meals",
  "calfresh",
  "medi-cal",
  "wic",
  "none",
] as const;
export type AssistanceProgram = (typeof ASSISTANCE_PROGRAMS)[number];

/** What the award would be applied to (§2.4). */
export const COST_TYPES = ["tuition", "kit", "equipment", "clinic"] as const;
export type CostType = (typeof COST_TYPES)[number];

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export type ApplicationInput = {
  // Step 1 — the person applying
  relationship: Relationship | "";
  applicantName: string;
  email: string;
  phone: string;

  // Step 2 — the player
  playerFirstName: string;
  playerLastName: string;
  playerBirthYear: string;
  club: string;

  // Step 3 — household and need
  householdSize: string;
  incomeBracket: IncomeBracket | "";
  assistance: AssistanceProgram[];
  costs: CostType[];
  needDescription: string;

  // Step 4 — consent
  consentVerify: boolean;
  attestation: boolean;

  // Captured, not asked
  locale: Locale;
};

export const EMPTY_APPLICATION: ApplicationInput = {
  relationship: "",
  applicantName: "",
  email: "",
  phone: "",
  playerFirstName: "",
  playerLastName: "",
  playerBirthYear: "",
  club: "",
  householdSize: "",
  incomeBracket: "",
  assistance: [],
  costs: [],
  needDescription: "",
  consentVerify: false,
  attestation: false,
  locale: "en",
};

/** Which fields belong to which step, so navigation can validate per step. */
export const STEP_FIELDS: ReadonlyArray<ReadonlyArray<keyof ApplicationInput>> =
  [
    ["relationship", "applicantName", "email", "phone"],
    ["playerFirstName", "playerLastName", "playerBirthYear", "club"],
    [
      "householdSize",
      "incomeBracket",
      "assistance",
      "costs",
      "needDescription",
    ],
    ["consentVerify", "attestation"],
  ];

export const STEP_COUNT = STEP_FIELDS.length;
