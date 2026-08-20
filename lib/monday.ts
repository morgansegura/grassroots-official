import "server-only";

/**
 * Monday client for the GRF scholarship queue. One item per application, named
 * for the player. The board is the review pipeline described in
 * `docs/scholarship-review-process.md` §4 — status moves New → Under review →
 * Documentation requested → Approved/Declined, and that column history is the
 * audit trail. Decisions and recusals are recorded on the item, not here.
 *
 * Server-only: uses the non-public MONDAY_API_KEY.
 */

const API = "https://api.monday.com/v2";

export const APPLICATIONS_BOARD =
  process.env.MONDAY_APPLICATIONS_BOARD_ID ?? "";

type ColInfo = { id: string; type: string };
type ColMap = Record<string, ColInfo>;

async function gql<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const token = process.env.MONDAY_API_KEY;
  if (!token) throw new Error("MONDAY_API_KEY is not set");

  const res = await fetch(API, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      "API-Version": "2024-01",
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Monday HTTP ${res.status}`);

  const json = (await res.json()) as {
    data?: T;
    errors?: Array<{ message: string }>;
  };
  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }
  if (!json.data) throw new Error("Monday returned no data");
  return json.data;
}

/** Column ids are per-board and not stable across boards — resolve by title. */
async function columnsByTitle(boardId: string): Promise<ColMap> {
  const data = await gql<{
    boards: Array<{
      columns: Array<{ id: string; title: string; type: string }>;
    }>;
  }>(
    `query ($ids: [ID!]) { boards (ids: $ids) { columns { id title type } } }`,
    { ids: [boardId] },
  );

  const map: ColMap = {};
  for (const c of data.boards?.[0]?.columns ?? []) {
    map[c.title] = { id: c.id, type: c.type };
  }
  return map;
}

/**
 * Builds the column_values payload, skipping any column the board does not
 * have. A renamed or missing column drops that one value rather than failing
 * the whole submission — an application that arrives with a gap is recoverable,
 * one that 500s in front of a family is not.
 */
function buildColumnValues(
  cols: ColMap,
  values: Record<string, string>,
): string {
  const payload: Record<string, unknown> = {};

  for (const [title, value] of Object.entries(values)) {
    const col = cols[title];
    if (!col || !value) continue;

    if (col.type === "email") payload[col.id] = { email: value, text: value };
    else if (col.type === "phone")
      payload[col.id] = { phone: value, text: value };
    else if (col.type === "status") payload[col.id] = { label: value };
    else if (col.type === "long_text") payload[col.id] = { text: value };
    else payload[col.id] = value;
  }

  return JSON.stringify(payload);
}

export type ApplicationRow = {
  playerName: string;
  values: Record<string, string>;
};

/** Creates the application item. Returns the new item id. */
export async function createApplication(row: ApplicationRow): Promise<string> {
  if (!APPLICATIONS_BOARD) {
    throw new Error("MONDAY_APPLICATIONS_BOARD_ID is not set");
  }

  const cols = await columnsByTitle(APPLICATIONS_BOARD);
  const columnValues = buildColumnValues(cols, row.values);

  const data = await gql<{ create_item: { id: string } }>(
    `mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON) {
       create_item (board_id: $boardId, item_name: $itemName, column_values: $columnValues) { id }
     }`,
    {
      boardId: APPLICATIONS_BOARD,
      itemName: row.playerName,
      columnValues,
    },
  );

  return data.create_item.id;
}

/** Whether the integration is configured. Lets the form degrade rather than 500. */
export const mondayConfigured = Boolean(
  process.env.MONDAY_API_KEY && APPLICATIONS_BOARD,
);
