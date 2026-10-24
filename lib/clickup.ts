import "server-only";

import { logError } from "@/lib/logger";

/**
 * ClickUp client for the GRF scholarship queue. One task per application in
 * the Scholarships → Applications list, named for the player. The list's
 * statuses are the review pipeline in `docs/scholarship-review-process.md` §4.
 *
 * Server-only: uses the non-public CLICKUP_API_TOKEN.
 */

const API = "https://api.clickup.com/api/v2";

/** Scholarships → Applications in the Grassroots Foundation workspace. */
export const APPLICATIONS_LIST =
  process.env.CLICKUP_APPLICATIONS_LIST_ID || "901422605467";

export type ApplicationRow = {
  playerName: string;
  /** Answers by label, in the order they are shown on the task. */
  answers: Array<[label: string, value: string]>;
  /** The family's own words, shown under the answers. */
  need: string;
  /** Also set on the list's Email and Phone fields, so they are clickable. */
  email: string;
  phone: string;
};

/** ClickUp's phone field takes +country format; a US number is the common case. */
export function clickupPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  const us =
    digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (us.length !== 10) return null;
  return `+1 ${us.slice(0, 3)} ${us.slice(3, 6)} ${us.slice(6)}`;
}

/** The task description: the intake answers, then the family's own words. */
export function applicationMarkdown(row: ApplicationRow): string {
  const lines = row.answers
    .filter(([, value]) => value)
    .map(([label, value]) => `**${label}:** ${value}`);
  return [...lines, "", "**In their words**", "", row.need].join("\n");
}

/** Creates the application task. Returns the new task id. */
export async function createApplication(row: ApplicationRow): Promise<string> {
  const token = process.env.CLICKUP_API_TOKEN;
  if (!token) throw new Error("CLICKUP_API_TOKEN is not set");
  if (!APPLICATIONS_LIST) {
    throw new Error("CLICKUP_APPLICATIONS_LIST_ID is not set");
  }

  const headers = { Authorization: token, "Content-Type": "application/json" };
  const res = await fetch(`${API}/list/${APPLICATIONS_LIST}/task`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: row.playerName,
      markdown_content: applicationMarkdown(row),
    }),
    cache: "no-store",
  });

  const json = (await res.json()) as { id?: string; err?: string };
  if (!res.ok || !json.id) {
    throw new Error(`ClickUp HTTP ${res.status}: ${json.err ?? "no task id"}`);
  }

  // The task is saved; a field that can't be set stays readable in the description.
  await setContactFields(json.id, row, headers).catch((error) =>
    logError("apply", "Could not set the contact fields", error),
  );
  return json.id;
}

async function setContactFields(
  taskId: string,
  row: ApplicationRow,
  headers: Record<string, string>,
) {
  const list = await fetch(`${API}/list/${APPLICATIONS_LIST}/field`, {
    headers,
    cache: "no-store",
  });
  const { fields = [] } = (await list.json()) as {
    fields?: Array<{ id: string; name: string }>;
  };
  const values: Record<string, string | null> = {
    Email: row.email || null,
    Phone: clickupPhone(row.phone),
  };

  for (const field of fields) {
    const value = values[field.name];
    if (!value) continue;
    const res = await fetch(`${API}/task/${taskId}/field/${field.id}`, {
      method: "POST",
      headers,
      body: JSON.stringify({ value }),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`${field.name}: ClickUp HTTP ${res.status}`);
  }
}

/** Whether the integration is configured. Lets the form degrade rather than 500. */
export const clickupConfigured = Boolean(
  process.env.CLICKUP_API_TOKEN && APPLICATIONS_LIST,
);
