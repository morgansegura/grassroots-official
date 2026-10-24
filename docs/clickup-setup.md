# ClickUp setup — scholarships

Where scholarship applications live, how they get there, and what to set up by
hand. Moved from Monday on October 24, 2026, when the Monday trial ran out.

Last updated: October 24, 2026

---

## Structure

Grassroots Foundation workspace → space **Space** → folder **Scholarships** →
five lists.

| List                 | Holds                                                                       |
| -------------------- | --------------------------------------------------------------------------- |
| Applications         | One task per application, named for the player. This is the A1 Cover Sheet. |
| Rounds               | One task per round. This is R1 + R2.                                        |
| Reviewer Disclosures | One task per reviewer per round. This is V1.                                |
| Clubs                | One task per club, with who to contact and how.                             |
| Coaches              | One task per coach, linked to their club.                                   |

Keep all three **private**. Access is granted per round and removed at round
close, per P3 §5.

---

## How an application arrives

The form at `/apply` creates a task in **Applications** (`lib/clickup.ts`). The
task description holds the family's answers and, under **In their words**, what
they wrote about their need. Don't edit the description: it is the record of
what the family sent. The task's **Email** and **Phone** fields are filled
from the same answers, so they are clickable and show as columns.

## Clubs and coaches

We contact a family's club on their behalf, with their consent, to confirm
enrollment and cost. **Clubs** holds every San Diego County club, one task per
club, named for the club:

| Field                                         | What goes in it                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------ |
| Outreach                                      | Not contacted, Contacted, In conversation, Partner, Declined.                        |
| Director Name, Director Email, Director Phone | The club's executive director or director of coaching.                               |
| Contact Name, Contact Role, Email, Phone      | Whoever handles financial aid or registration. This is who confirms a family's cost. |
| Website, City, League, Ages                   | Where the club plays and who it serves.                                              |
| Club Aid                                      | What the club's own assistance covers, so we fund alongside it, not instead of it.   |

Club details came from public sources (club websites and league directories)
on October 24, 2026. Anything not published was left empty to fill in by hand.

**Coaches** holds one task per coach, with Role, Email, Phone, Teams, and a
**Club** field linking to the club's task, so a club's coaches show on it.

------------------------------ | ----------------------------------------------------------------------------------------- |
| `CLICKUP_API_TOKEN` | A personal API token from the Grassroots workspace: avatar → Settings → Apps → API Token. |
| `CLICKUP_APPLICATIONS_LIST_ID` | The Applications list's id, the number after `/li/` in its URL. |

If either is missing, or ClickUp refuses the task, the family sees "That did
not send" with a way to email us, and Vercel's logs say why (search for
`"scope":"apply"`).

---

## Set up by hand

### 1. Statuses on Applications

List → **...** → **List settings** → **Statuses** → use custom statuses, in this
order: **New**, **Under review**, **Documentation requested**, **Approved**,
**Declined**. New must be first: it is the status every new application gets.

### 2. Review fields on Applications

Add these as custom fields when the first round is reviewed. They replace the
Monday columns of the same names.

- **Guardian:** Guardian Name, Guardian Email, Guardian Phone, Guardian on File
  (dropdown: Missing, Requested from club, On file, Not required (adult
  applicant)). No award is decided while this reads Missing.
- **Eligibility:** Eligibility (dropdown: Not checked, Eligible, Ineligible),
  Ineligibility Reason.
- **Club confirmation:** Club Contact, Club Contact Email, Club Requested Date,
  Club Confirmed (dropdown: Not requested, Requested, Confirmed, No response),
  Confirmed Annual Cost, Already Paid, Club Assistance.
- **Scoring:** FPL Guideline Used, Income Used, Score A (Income), Score B
  (Assistance), Score C (Burden), Score D (Siblings), Need Score (the agreed,
  reconciled figure).
- **Decision:** Award Amount, Decision Rationale, Decided By, Recusal Noted.
- **Notification and payment:** Applicant Notified, Letter Sent, Notified
  Date, Invoice Reference, Amount Paid, Date Paid.
- **Consent:** Consent Status (dropdown: Not yet requested, Requested,
  Granted, Declined).

ClickUp formula fields cover what Monday's formulas did. Score Total adds the
four scores; The Gap is Confirmed Annual Cost minus Already Paid minus Club
Assistance.

### 3. Automations on Applications

| When                               | Then                             |
| ---------------------------------- | -------------------------------- |
| A task is created                  | Notify the scholarship reviewers |
| Status is New for 2 days           | Notify the scholarship reviewers |
| A round's status changes to Closed | Remind to remove reviewer access |

That last one is the one that gets forgotten. P3 §5 says access ends when the
role ends, and nothing else enforces it.

---

## What deliberately stays out of ClickUp

**Nothing that gets signed.** P1, P2, P3, V1's signature block, and A2 consent
stay Google Docs, because a signature on a document is evidence and a checkbox
is not.

**Nothing that leaves the system.** No mirrored spreadsheet, no Slack channel,
no digest email containing application contents. Each destination is another
permanent copy of a minor's name and a household's finances. Notifications say
_an application arrived_ and link to it. The data stays here.

---

## What came over from Monday

The three applications (Prince Demunga, Mateo Lopez Phillips, Massa Ahmad) and
the **2026-Fall** round (Open), each marked "Moved from Monday on October 24,
2026". Prince's task notes Guardian on File: Missing. The Disclosures board was
empty. The Grants Pipeline and Grant Providers boards held only Monday's sample
rows and were not moved.
