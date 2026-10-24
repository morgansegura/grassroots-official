import "server-only";

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
};

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

  const res = await fetch(`${API}/list/${APPLICATIONS_LIST}/task`, {
    method: "POST",
    headers: { Authorization: token, "Content-Type": "application/json" },
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
  return json.id;
}

/** Whether the integration is configured. Lets the form degrade rather than 500. */
export const clickupConfigured = Boolean(
  process.env.CLICKUP_API_TOKEN && APPLICATIONS_LIST,
);
