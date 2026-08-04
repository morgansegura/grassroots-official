# Google Ad Grant — campaign structure (draft v1)

Draft account structure for the $10K/mo Google Ad Grant. Built to survive the
5% CTR rule first and generate applications and donations second, because a
suspended account generates neither.

Verify the specific policy numbers below against the current Ad Grants policy
page before building. They are well established but they do change, and the
account is gated on them.

---

## Two things to settle before building

### 1. Structure by intent, not by program

The instinct is "one campaign per program" — Player Scholarships, Team
Sponsorship, Kit & Uniform Grants, Equipment Grants, Clinic Access. That's a
clean org chart and a bad account.

Nobody searches "kit and uniform grant." Program names are internal vocabulary.
Four of the five programs have effectively zero search volume under their own
names, and building campaigns around them produces four campaigns competing for
the same handful of real queries while three sit at zero impressions.

**Structure by what the searcher wants instead.** Four distinct people are
searching, and they want different pages:

| Who                     | What they search                  | Where they should land |
| ----------------------- | --------------------------------- | ---------------------- |
| Parent who needs help   | "help paying for club soccer"     | `/apply`               |
| Parent researching cost | "why is club soccer so expensive" | blog posts             |
| Potential donor         | "donate youth sports san diego"   | `/donate`              |
| Someone checking us out | "grassroots foundation ein"       | `/`, `/990`            |

Programs still get covered — they're the substance of the ad copy and landing
pages. They're just not the axis the account is cut on.

### 2. Be realistic about spend

The grant is $10,000/month of _available_ budget, not $10,000/month of value.
Geo-limited to San Diego County, on genuinely relevant long-tail keywords, this
account will likely spend a few hundred dollars a month at most. That is fine
and expected. **Do not chase the cap by broadening keywords — that is exactly
how accounts fall below 5% CTR and get suspended.** Unspent grant budget costs
nothing. A suspension costs the grant.

---

## Policy constraints that shape everything

- **5% CTR account-wide, monthly.** Two consecutive months below it suspends
  the account. This is the binding constraint and the reason for tight
  match types below.
- **$2.00 max CPC**, unless the campaign uses Maximize Conversions or another
  Smart Bidding strategy, which lifts the cap. Use Smart Bidding.
- **No single-word keywords.** No overly generic keywords.
- **Minimum 2 ad groups per campaign**, 2 active ads per ad group.
- **Minimum 2 sitelink assets.**
- **Geo-targeting required.**
- **Conversion tracking required**, with at least one conversion recorded per
  month.

---

## Geo and shared settings

- **Location:** San Diego County, CA. Target "people regularly in or who showed
  interest in" → change to **presence only**. Interest-based targeting pulls in
  out-of-area impressions that never click.
- **Bid adjustments up** for Phase 1 cities: Chula Vista, National City, San
  Ysidro, Imperial Beach. Phase 2: El Cajon, La Mesa, Spring Valley, Lemon
  Grove, Lakeside, Santee, and Southeast San Diego.
- **Language:** English and Spanish. Run Spanish ad variants — the Phase 1
  service area is heavily bilingual and the competition for Spanish-language
  queries is far thinner.
- **Networks:** Search only. No Display, no search partners.
- **Bidding:** Maximize Conversions once conversions are recorded. Until then,
  Maximize Clicks with a low CPC ceiling.

---

## Campaign 1 — Scholarship Help (highest priority)

Parents actively looking for help paying. Smallest volume, highest value, best
CTR in the account. **Landing page: `/apply`.**

### Ad group 1A — Financial aid for club soccer

Phrase and exact match only.

```
"help paying for club soccer"
"club soccer financial aid"
"youth soccer financial assistance"
"can't afford club soccer"
"soccer club fees assistance"
[club soccer scholarship san diego]
[youth soccer scholarship san diego]
"financial aid youth sports san diego"
"ayuda para pagar futbol juvenil"
"beca futbol juvenil san diego"
```

### Ad group 1B — Cost relief by expense

```
"soccer cleats for kids in need"
"help buying soccer equipment"
"youth soccer uniform assistance"
"soccer registration fee help"
"cover club soccer tuition"
"free soccer gear for kids san diego"
```

---

## Campaign 2 — Cost Education (volume driver)

The top-of-funnel that actually earns the account's CTR, because the blog posts
answer the question the query asks. **Landing page: the matching blog post, not
the homepage.** Sending informational queries to a donate page is what tanks CTR
and Quality Score.

### Ad group 2A — What club soccer costs

Landing: `/blog/why-club-soccer-is-11k-a-year`

```
"how much does club soccer cost"
"why is club soccer so expensive"
"club soccer cost per year"
"youth soccer costs breakdown"
"cost of competitive youth soccer"
"club soccer fees explained"
```

### Ad group 2B — Leagues and tiers explained

Landing: `/blog/competitive-tier-structure-explained` and
`/blog/ecnl-mls-next-girls-academy-cost`

```
"what is ecnl soccer"
"ecnl vs mls next"
"what is mls next"
"girls academy soccer explained"
"youth soccer league tiers explained"
"ecnl cost per year"
```

> This ad group is the single best GEO/AEO asset in the account. These are
> genuine questions with no authoritative San Diego nonprofit answering them.

---

## Campaign 3 — Donate & Support

**Landing page: `/donate`, `/sustain` for monthly.**

### Ad group 3A — Donate to youth sports

```
"donate to youth sports"
"youth sports charity san diego"
"donate youth soccer san diego"
"support kids sports san diego"
"san diego youth nonprofit donate"
```

### Ad group 3B — Sponsor a kid / monthly giving

```
"sponsor a child sports"
"sponsor a kid soccer"
"monthly giving youth sports"
"adopt a young athlete"
"fund a kid's sports season"
```

---

## Campaign 4 — Brand & Verification

Cheap, near-100% CTR, and it props up the account-wide CTR average. Also catches
donors doing diligence. **Landing: `/` and `/990`.**

> Sitelink display text and destination are separate fields in Google Ads.
> Keep the human phrasing ("Where the money goes") and point it at `/990`.
> There is no `/financials` page — it 308-redirects to `/990` — and Ad Grants
> final URLs should be the destination itself, not a redirect.

### Ad group 4A — Brand terms

```
[grassroots foundation]
[grassroots foundation san diego]
[grassroots foundation soccer]
"grassroots foundation youth soccer"
```

### Ad group 4B — Verification and transparency

```
"grassroots foundation ein"
"grassroots foundation 990"
"grassroots foundation nonprofit status"
```

> Note: "Grassroots Foundation" is a common nonprofit name. Watch the search
> terms report closely for other orgs' brand traffic and negative it out — it
> will otherwise look like volume while converting nothing.

### Campaign 4 ad copy

Google Ads limits: headlines 30 characters, descriptions 90. Minimum 3
headlines and 2 descriptions per ad; more assets means better ad strength.
Two ads per ad group is the Ad Grants minimum — build the second by reordering
and swapping a few of these.

**Ad group 4A — Brand terms.** Landing page: `/`

Headlines:

```
Grassroots Foundation
SD youth soccer nonprofit
501(c)(3) nonprofit
EIN 35-2822183
We fund kids into club soccer
Tuition, kit, and equipment
San Diego County nonprofit
Scholarships for club soccer
No auditions, no tryouts
See where the money goes
Confidential intake
Youth soccer access nonprofit
```

Descriptions:

```
A 501(c)(3) nonprofit funding San Diego County kids into club soccer. EIN 35-2822183.
We pay tuition, uniforms, and equipment directly to clubs so kids can keep playing.
Need-based scholarships. No auditions, no tryouts. Confidential intake for families.
Our EIN, filings, and financial posture are public. See where the money goes.
```

**Ad group 4B — Verification and transparency.** Landing page: `/990`

Headlines:

```
EIN 35-2822183
Our 990 and financials
501(c)(3) public charity
Verify us independently
IRS-recognized nonprofit
Where the money goes
Grassroots Foundation
Registered in California
Donor protections in full
No paid fundraisers
```

Descriptions:

```
Our EIN, IRS status, and California registration are public and independently verifiable.
First Form 990 files for the year ending June 30, 2027 and posts here within seven days.
No paid fundraisers. No commission-based solicitation. Donor information is never sold.
Look us up on the IRS Tax-Exempt Organization Search or ProPublica Nonprofit Explorer.
```

Every claim above is verifiable against `/990` today. Nothing asserts kids
served, dollars granted, or outcomes — because there aren't any yet.

#### Second ads (Ad Grants requires two per ad group)

**4A — second ad.** Landing page: `/`

Headlines:

```
San Diego youth soccer
Grassroots Foundation
Need-based scholarships
501(c)(3), EIN 35-2822183
Kids stay in the game
We pay clubs directly
No auditions, no tryouts
Tuition, kit, and equipment
Confidential intake
See where the money goes
```

Descriptions:

```
We fund San Diego County kids into the club teams they already want to play for.
Tuition, uniforms, equipment, and clinic spots, paid directly to partner clubs.
A 501(c)(3) public charity. EIN 35-2822183. Registered in California.
Need-based, not merit-based. No auditions and no tryouts to qualify.
```

**4B — second ad.** Landing page: `/990`

Headlines:

```
Grassroots Foundation 990
EIN 35-2822183
Verify our IRS status
Public charity, 501(c)(3)
California registered
Our financial posture
No commission fundraising
We never sell donor data
First 990 files in 2027
Where the money goes
```

Descriptions:

```
Look up EIN 35-2822183 on the IRS Tax-Exempt Organization Search or ProPublica.
We publish our 990 unredacted within seven days of filing it with the IRS.
Registered with the California Registry of Charitable Trusts. Filings are public.
No paid fundraisers, no commission-based solicitation, no donor data sold.
```

> Do not accept Google's auto-suggested sitelinks on the ad screen. Campaign-level
> sitelinks are already configured with descriptions; the suggestions duplicate
> them and ship incomplete.

---

## Negative keywords (account-level shared list)

**The critical one first.** "Soccer scholarship" overwhelmingly means _NCAA
college athletic scholarships_. Unfiltered, this single ambiguity will bury the
account in irrelevant impressions and destroy CTR:

```
college, ncaa, d1, division 1, division 2, university, collegiate,
recruit, recruiting, recruitment, commit, commitment, id camp,
showcase, highlight video, athletic scholarship, full ride
```

**Commercial intent** (Ad Grants prohibits, and it's low-quality traffic):

```
buy, shop, sale, cheap, discount, coupon, for sale, price, store,
jersey, kit sale, cleats sale, amazon, ebay
```

**Wrong audience:**

```
adult, over 30, coed, rec league, aysoso, pickup, indoor rental,
fantasy, betting, odds, scores, live stream, watch, tickets, fifa,
world cup tickets, premier league, la liga, mls tickets
```

**Employment:**

```
jobs, job, salary, hiring, career, careers, employment, coach jobs,
internship, volunteer hours
```

**Other:**

```
free money, grants for individuals, gofundme, scholarship essay,
how to start a nonprofit
```

Add to this weekly from the search terms report for the first two months. This
list is the account's CTR insurance policy.

---

## Sitelink assets (account level, minimum 2 — use all four)

| Sitelink             | URL           | Description                                               |
| -------------------- | ------------- | --------------------------------------------------------- |
| How to apply         | `/apply`      | Confidential intake for San Diego families. No auditions. |
| What we fund         | `/programs`   | Tuition, kit, equipment, and clinic access.               |
| Where the money goes | `/990`        | Our 990, EIN, and financial posture.                      |
| Common questions     | `/faq`        | How donations work and who we fund.                       |

**Callout assets:** `501(c)(3) nonprofit` · `EIN 35-2822183` · `San Diego
County` · `Confidential intake` · `No auditions`

**Structured snippet** (Services): Club tuition · Uniforms & kit · Equipment ·
Training clinics

---

## Ad copy direction

Two responsive search ads per ad group. Voice rules that apply here exactly as
they do on the site:

- **No fabricated outcomes.** No "hundreds of kids served," no dollar totals, no
  recipient counts. Funded count is currently zero and the ads must not imply
  otherwise.
- **Explain, don't accuse.** No ad attacks clubs, coaches, or families.
- Sentence case. No manufactured urgency.

**Campaign 1 headline bank:**

```
Can't Afford Club Soccer?
Help With Club Soccer Fees
San Diego Youth Soccer Scholarships
Confidential. No Auditions.
Tuition, Kit, and Equipment
Apply for a Scholarship
```

**Campaign 1 descriptions:**

```
We pay club tuition, uniforms, and equipment costs directly to San Diego
clubs so kids can keep playing. Confidential intake.

A 501(c)(3) nonprofit funding San Diego County kids into the club teams
they already want to play for. No auditions, no tryouts.
```

**Campaign 2 headline bank:**

```
What Club Soccer Actually Costs
The $11K Youth Soccer Year
ECNL vs MLS Next, Explained
Youth Soccer Tiers, Explained
An Honest Cost Breakdown
```

**Campaign 3 headline bank:**

```
Fund a Kid's Season
$50/mo Keeps a Kid Playing
Donate to San Diego Youth Soccer
100% Goes to Scholarships
```

> Verify "100% goes to scholarships" is literally true before running it. If any
> donation is absorbed by overhead, the claim can't run.

---

## Conversions

Already instrumented and pushing to `dataLayer` (see
[analytics-conversion-tracking.md](./analytics-conversion-tracking.md)):

- `donate_open` — **primary conversion**
- `email_click`
- `outbound_click`

Still to build in GTM: GA4 event tags on custom triggers for each, then mark
`donate_open` as a conversion in GA4. Nothing counts until that's done.

**Gap:** `/apply` has no form, so scholarship applications — the whole point of
Campaign 1 — are currently unmeasurable. The page explains the process and
points to email. `email_click` is the proxy for now. An actual intake form
behind a modal would make Campaign 1 measurable and is the highest-value
addition to the site for this account.

---

## Build order

1. Create the GA4 event tags and mark `donate_open` as a conversion.
2. Build Campaign 4 (Brand) first — cheapest, highest CTR, establishes an
   account-wide CTR floor before riskier campaigns run.
3. Add Campaign 1 (Scholarship Help) and Campaign 2 (Cost Education).
4. Let those run two weeks. Mine the search terms report, expand negatives.
5. Add Campaign 3 (Donate) once there's conversion data to bid on.
6. Switch to Maximize Conversions once conversions are recording, which also
   lifts the $2 CPC cap.

**Weekly for the first two months:** search terms report → negatives. Monthly:
confirm account CTR is above 5% and at least one conversion recorded.

---

## Deferred

- Partner-club and volunteer campaigns. Real search volume is near zero; not
  worth the CTR risk yet.
- Program-specific campaigns (Clinic Access, Team Sponsorship) — revisit only if
  the search terms report shows genuine demand.
