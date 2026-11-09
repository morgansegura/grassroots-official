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

## 2026-11-09 — Giving Tuesday and year-end (campaign 05)

Built on the Google Ads website on November 9 and published. It shows
**Pending** until it starts November 17.

**What it is.** **05 – Giving Tuesday & Year-End 2026**: $40/day, Maximize
conversions, Search only, San Diego County with **presence only**, November 17
to December 31, AI Max off, landing on `/donate`. Ad groups 5A Giving Tuesday,
5B Year-end giving, 5C Local giving, 2 ads each, all reviewed with no policy
issues; 14 campaign-level phrase negatives.

**When editing it on the website,** press **Clear prefills** on every new ad:
Google fills the form with AI-written copy and suggested keywords that are not
ours.

`2026-11-09-giving-tuesday-and-year-end.csv` (from `build-giving-campaign.py`)
holds the same copy as an Ads Editor import. It was not imported; keep it as
the source for next year's run.

## 2026-11-09 — Why nothing served, and the fix

**Evidence.** 0 impressions for 30 days across 02, 03 and 04. 03 and 04 bid
Maximize clicks, which the Ad Grant caps at $2 a click: too low to win any
auction, even for "grassroots foundation". 02 bid Maximize conversions but its
only conversion, GA4 `donate_open`, never recorded, so it had nothing to bid on.

**Changed.**

- The scholarship form now pushes `application_submitted` (site commit
  c537927).
- Google Ads conversions **Scholarship application** (Sign-ups) and
  **Donation** (Purchases, now an account default goal), conversion ID
  18368679896. Enhanced conversions left off: it would send hashed applicant
  and donor details to Google.
- GTM version 11 (`gtm-conversions.json`, imported with Merge): GA4
  `application_submitted`, both Google Ads conversion tags, and a Conversion
  Linker.
- Campaigns 03 and 04 switched to Maximize conversions; all three now bid
  without the $2 cap.

**Measure.** Impressions in the week after November 9; the first Scholarship
application and Donation conversions.

**Open.**

- Star `application_submitted` as a key event in GA4 once it first arrives.
- Keyword research: replace low-volume brand and cost keywords with terms
  people search.
