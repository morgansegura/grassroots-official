# Ad Grant uploads

Changes to the Google Ads account prepared as bulk-upload files, so every change
is previewed in Google Ads before it goes live.

## 2026-09-22 — campaign 03 and the missing 04 ads

File: `2026-09-22-campaign-03-and-04-ads.csv`

**Why.** The account audit on September 22 found the account had been live four
days with two of the four planned campaigns. Nothing in it asked for a donation,
and campaign 04's ad groups had one ad each where the plan calls for two.

**What it adds.**

- Campaign **03 – Donate & Support**, uploaded **paused**: $50/day, Search only,
  Maximize clicks until donations are tracked.
  - 3A — Donate to youth sports: 7 phrase-match keywords, 2 responsive search ads.
  - 3B — Monthly giving: 6 phrase-match keywords, 2 responsive search ads.
  - Every ad lands on `/donate`. Nothing points to `/sustain`.
- A second responsive search ad in 4A (brand) and 4B (verification, `/990`).

**How to apply.**

1. Google Ads → Tools → Bulk actions → **Uploads** → upload the CSV.
2. Click **Preview**. Check it says it is _adding_ ads to the existing 4A and 4B
   ad groups. If it says it is _creating_ new 4A/4B ad groups, the dash in the
   ad group name doesn't match the account (– vs —); fix the name in the CSV and
   preview again.
3. Apply.
4. Open campaign 03 → Settings, and copy campaign 02's: location **San Diego
   County, presence only**, languages English and Spanish, no search partners.
5. Add at least 2 sitelinks to campaign 03 (e.g. "Give monthly" → `/donate`,
   "Where the money goes" → `/990`).
6. Enable campaign 03.

**Also do by hand.**

- Keywords → search `free youth soccer academy` (campaign 02) → **Remove** it.
  Do not accept Google's suggestion to remove the negative keyword `free`.
- Ignore "Add broad match keywords". Broad match lowers CTR; the grant needs 5%.
- Finish advertiser verification.

**Next.** Create a Google Ads conversion action for the `donation_complete`
event the site already sends from `/thank-you`, then switch campaign 03 to
Maximize conversions once it records one.
