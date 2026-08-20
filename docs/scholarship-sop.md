# Scholarship SOP — how to run an intake round

**Status: DRAFT for board adoption.** The companion to
`scholarship-review-process.md`. That document is the _policy_ — what we
promise and why. This one is the _runbook_ — what a person actually does, in
order, to get from applications to funded players.

Last updated: August 19, 2026

> **The one rule that shapes everything here:** we do not vote on players. We
> score applications against published criteria and fund down the ranked list.
> A vote is a preference and creates private-benefit exposure. A determination
> against criteria is defensible. Every step below exists to keep the process on
> the second side of that line.

---

## Roles

| Role                 | Who                                                                         | Does                                                                  |
| -------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **Intake owner**     | Any board member or staff                                                   | Watches the queue, requests club confirmation, sends notifications    |
| **Scorer**           | Two people, at least one with no relationship to any applicant in the round | Independently scores every application against §3                     |
| **Approver**         | The board, or a delegated review committee                                  | Adopts the budget, confirms the ranked list, records the decision     |
| **Conflicted party** | Anyone related to an applicant                                              | Discloses, then does nothing else on that round's scoring or decision |

A round needs **two scorers**. One person scoring alone is a vote wearing a
rubric.

---

## 1. Before a round opens

Do all of this _before_ any application is read. Doing it after means the
answers are shaped by who applied.

- [ ] **Set the pool.** The total dollars available for this round. Record it in
      minutes with the date.
- [ ] **Set the per-award cap.** The maximum any single player can receive.
- [ ] **Set the round window.** Open and close dates for applications.
- [ ] **Name the two scorers and the approver.**
- [ ] **Publish the round** on `/apply` if the window is limited.

Record all five in the board minutes. This is the single highest-value
paragraph in the whole file: if the budget is set before the names are known,
no award amount can be accused of being built around a particular child.

---

## 2. When applications arrive

Each submission creates an item on **GRF — Scholarship Applications** with
Status `New`.

1. Set **Round** on the item (e.g. `2026-Fall`).
2. Move Status → `Under review`.
3. Check eligibility against `scholarship-review-process.md` §2. If plainly
   ineligible (outside San Diego County, no program cost to cover), move to
   `Declined`, set **Decision Rationale**, and notify. Do not leave it silent.

**Conflict check happens here, before scoring.** Each scorer reads the
applicant and player names and declares any relationship. A declared conflict
means that scorer does not score _any_ application in the round — not just the
conflicted one — because a ranked list is comparative. Record it in **Recusal
Noted** on the affected item and in the minutes.

---

## 3. The scoring rubric

Both scorers score every application independently, then compare. **100 points
total.** Higher is greater need.

### A. Household income vs. Federal Poverty Guideline — 0 to 50

The objective backbone. Take the household's income bracket midpoint, divide by
the current HHS Federal Poverty Guideline for that household size.

| Income as % of FPL | Points |
| ------------------ | ------ |
| ≤ 130%             | 50     |
| 131–185%           | 40     |
| 186–250%           | 28     |
| 251–300%           | 15     |
| > 300%             | 5      |

> Those bands are not arbitrary — 130% and 185% are the federal thresholds for
> free and reduced-price school meals, so the scale lines up with eligibility
> tests families already meet elsewhere.

> **Pull the current dollar figures from the HHS poverty guidelines each
> January** — they change annually. Do not hardcode them into this file and let
> them go stale.

> **If the applicant chose "prefer not to say":** score this component **25**
> (neutral), and lean on B and the club's confirmation. Declining to state
> income is not grounds to disadvantage a family, and it is not grounds to
> advantage one either.

### B. Assistance-program participation — 0 or 15

15 points if the household receives **any** of: free/reduced-price school
meals, CalFresh, Medi-Cal, WIC. 0 if none.

This corroborates A through an independent means test someone else already
administered.

### C. Cost burden — 0 to 25

Annual club cost (confirmed by the club in §4) ÷ annual household income.

| Cost as % of household income | Points |
| ----------------------------- | ------ |
| ≥ 15%                         | 25     |
| 10–14.9%                      | 18     |
| 5–9.9%                        | 10     |
| < 5%                          | 3      |

This is what separates two families at the same income when one is in a
$900/yr program and the other a $2,400/yr one.

### D. Multiple children needing support — 0 to 10

5 points per additional child in the household who plays or wants to play,
capped at 10.

### Scoring mechanics

- Enter the agreed score in **Need Score**.
- If the two scorers differ by **more than 10 points**, they reconcile by
  re-checking the inputs — not by negotiating. If they still differ, the
  approver takes the **lower** score.
- **Ties break by application date**, earliest first. Never by discussion.

---

## 4. Club confirmation

For every application likely to be funded (score down to roughly 150% of the
pool, so the line has room to move):

1. Set **Club Confirmed** → `Requested`.
2. Contact the club's family services or registrar. Confirm: the player is
   enrolled or can be, the actual annual cost, and what the family has already
   paid.
3. Set **Club Confirmed** → `Confirmed` and update **Costs Requested** if the
   real figure differs from what the family estimated.
4. No response after two attempts across five business days → `No response`.
   Score stands on the family's stated figures; note it in the rationale.

GRF does not collect pay stubs or tax returns. The club's own confirmation is
the verification step. This is deliberate — see the process doc §3 and §8.

---

## 5. The decision

1. Sort the round by **Need Score**, descending.
2. Fund from the top until the pool is exhausted, capping each award at the
   per-award cap.
3. **Record where the line fell** — "funded through score 62; pool exhausted;
   eleven applications waitlisted." That one sentence is what makes this a
   program rather than a series of favors.
4. Everyone above the line: **Award Amount**, **Decision Rationale**,
   **Decided By**, Status → `Approved`.
5. Everyone eligible below the line: Status → `Waitlisted`. **Not declined.**
   They qualified; the money ran out. A waitlist is also evidence of real
   demand when you go fundraising.
6. Approver records the round in minutes: pool, cap, number of applications,
   number funded, where the line fell, and every recusal by name.

---

## 6. Notification

Within **10 business days** of the round closing — approved, waitlisted, and
declined all on the same timeline. Templates in
`scholarship-templates.md`.

Set **Applicant Notified** to the matching status so nobody is missed.

Do not tell an approved family before the declined families have heard. Ten
days for a yes and three weeks of silence for a no is how a program earns a
reputation it does not want.

---

## 7. Payment

- **Pay the club directly. Never the family.** This makes the award a payment
  for program services with a clean trail rather than a gift to an individual.
- Reference the player and the season on the payment.
- Record the payment against the application item.
- If the player leaves the program mid-season, the unused balance is discussed
  with the club — it stays in the program, it does not transfer to the family.

---

## 8. Renewal

Renewal is a **new application in the next round**, scored the same way. It is
not automatic. Families should hear that up front so a non-renewal is not a
surprise, and so no one is scored against a promise nobody made.

---

## 9. Round close checklist

- [ ] Every item has a terminal Status (`Approved`, `Waitlisted`, `Declined`)
- [ ] Every funded item has Award Amount, Rationale, and Decided By
- [ ] Every recusal recorded in **Recusal Noted** and in the minutes
- [ ] Every applicant notified; **Applicant Notified** set
- [ ] Payments issued to clubs and recorded
- [ ] Minutes filed with pool, cap, counts, and the funding line

---

## Open items before the first round

- [ ] Name the two scorers. At least one must be independent of the board.
- [ ] Set the first round's pool and per-award cap.
- [ ] Board adopts this SOP and the process doc, recorded in minutes.
- [ ] Counsel or a nonprofit CPA reads both once.
