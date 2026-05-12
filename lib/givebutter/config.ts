/**
 * Donation platform integration config.
 *
 * NOTE: file is named `givebutter/` for legacy reasons but the active
 * platform is now Zeffy. The Zeffy widget script (loaded in
 * WrapperScreen) intercepts clicks on any element carrying the
 * `zeffy-form-link` attribute pointing to ZEFFY_FORM_URL and opens
 * the donation form in a modal overlay. Donor never leaves the site.
 *
 * Use the helpers below — never hardcode URLs in components.
 */

// Note: dropped ?modal=true — that param is for top-level navigation;
// inside our own iframe modal, the inline embed mode works better.
export const ZEFFY_FORM_URL =
  process.env.NEXT_PUBLIC_ZEFFY_FORM_URL ||
  "https://www.zeffy.com/embed/donation-form/94b2fdb9-0343-46b7-b923-90ae8ace45c3";

/**
 * Props to spread onto any clickable element to make it open the
 * Zeffy donation modal. The Zeffy script handles the click.
 *
 * Example:
 *   <button {...donateTriggerProps()}>Donate</button>
 */
export function donateTriggerProps(formUrl: string = ZEFFY_FORM_URL) {
  return { "zeffy-form-link": formUrl } as Record<string, string>;
}

/**
 * Internal route to the branded /donate page on this site.
 * Use for any links that should route through the branded landing
 * page (with hero + tiers + embed) instead of triggering the modal
 * directly.
 */
export const DONATE_PAGE = "/donate";

// ─── Legacy Givebutter exports (kept for any unmigrated call sites) ───
// All Givebutter URLs now redirect to the Zeffy form URL.

export const GIVEBUTTER_BASE_URL = ZEFFY_FORM_URL;

export const CAMPAIGNS = {
  default: "",
  classOf26: "",
  cleatsAndKits: "",
  springClinic: "",
  firstTouch: "",
} as const;

export type CampaignKey = keyof typeof CAMPAIGNS;

export type GivebutterPrefill = {
  amount?: number;
  frequency?: "once" | "monthly";
  campaign?: CampaignKey;
};

/**
 * Legacy: returns the Zeffy form URL. Prefer `donateTriggerProps()`
 * for new code so the click triggers the modal.
 */
export function buildDonateUrl(_opts?: GivebutterPrefill): string {
  return ZEFFY_FORM_URL;
}
