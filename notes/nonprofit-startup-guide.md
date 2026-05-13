# The Minimum Viable Nonprofit

## A practical 2026 California operator's guide

Written by a founder who just did it — not a lawyer in 2017.

**Author note:** This guide assumes California as the home state because
that's where I built mine. For other states, the federal steps are
identical and I flag what differs in state-by-state notes throughout.

Every link, fee, and process below is verified for 2026.

---

## Why this guide exists

Most nonprofit-startup guides are:

- Outdated (written before Zeffy, before LinkedIn Nonprofit Verification, before llms.txt)
- Written by lawyers (who optimize for liability, not action)
- Written by big national orgs (who assume you'll hire staff Day 1)
- Vague (don't tell you which form, when, where, or what it costs)

What's missing: a guide from someone who **just walked through the
whole process** — in California, in 2026, as a part-time founder with
a day job and a co-founding spouse — and hit every wall you'll hit.

This guide is that.

---

## What's changed since 2017

Most "how to start a nonprofit" content online predates major shifts. If
you're reading older material, here's what's different now:

| Then (pre-2017)                                          | Now (2026)                                                        |
| -------------------------------------------------------- | ----------------------------------------------------------------- |
| GuideStar was the registry                               | **Candid** (merged GuideStar + Foundation Center in 2019)         |
| Stripe / PayPal direct donate flows                      | **Zeffy** (0% fee, donor tip model)                               |
| Givebutter was new                                       | Mature; still 2.9% + Stripe                                       |
| DAF integration was manual                               | **Chariot / DAFpay widgets**                                      |
| Form 1023-EZ launched 2014                               | Still the right path for most small starts                        |
| Form 1023 fee was $400                                   | Now **$600**                                                      |
| Form 1023-EZ fee was $275                                | Still $275                                                        |
| LinkedIn pages were optional                             | Now standard; verification expected                               |
| llms.txt didn't exist                                    | Now necessary for AI-era discoverability                          |
| Schema.org JSON-LD was technical                         | Now standard for nonprofit SEO/AEO                                |
| CA charity solicitation registration was always required | Now **also** Charitable Fundraising Platform requirements (2024+) |

If a guide doesn't mention Zeffy, Candid (not GuideStar), or LinkedIn page
verification, it's been overtaken. Find a more current source.

---

## Table of contents

**Before you start**

- Chapter 0: What is a nonprofit, anyway?

**Part I — Decide and plan**

- Chapter 1: The 10 things that hang up most nonprofit founders

**Part II — Form the legal entity**

- Chapter 2: Name, mission, structure
- Chapter 3: File Articles of Incorporation (California)
- Chapter 4: Get your EIN
- Chapter 5: Apply for 501(c)(3) federal exemption

**Part III — California state registrations**

- Chapter 6: The five California filings most founders miss

**Part IV — Build the governance layer**

- Chapter 7: Recruit your founding board
- Chapter 8: Bylaws + the five required policies
- Chapter 9: The Founding Board Meeting

**Part V — Operational infrastructure**

- Chapter 10: Banking, bookkeeping, and financial controls
- Chapter 11: Donation platform and receipt mechanics

**Part VI — Brand and public presence**

- Chapter 12: Name, logo, and brand foundation
- Chapter 13: Website essentials (with AI-era considerations)
- Chapter 14: LinkedIn, social, and registry profiles

**Part VII — Fundraising**

- Chapter 15: Your first 100 donors
- Chapter 16: Foundation grants and sponsor outreach
- Chapter 17: Sustainer programs and recurring revenue

**Part VIII — Annual maintenance**

- Chapter 18: The annual compliance calendar
- Chapter 19: 990 filing thresholds and what happens at each

**Part IX — Scaling**

- Chapter 20: When part-time becomes full-time

**Part X — Staying compliant (the long game)**

- Chapter 21: The compliance maintenance system
- Chapter 22: Year 2 and beyond — what hangs up established nonprofits

**Part XI — Tips, tricks, and lessons from the trenches**

- Chapter 23: 50+ tips that save time, money, and pain

**Part XII — The head-start playbook**

- Chapter 24: Free & discounted programs to give your org a running start

**Appendices**

- A: Required documents checklist
- B: Tools, platforms, and links (with current pricing)
- C: Common mistakes and how to fix them after the fact
- D: State-by-state quick reference
- E: Recommended further reading
- F: Glossary of nonprofit terms (130+ definitions)
- G: Copy-paste templates (15 ready-to-use templates)

---

# Before you start

## Chapter 0: What is a nonprofit, anyway?

Before we get into how to start one, let's make sure we're talking about
the same thing. Most people have a fuzzy idea of what a nonprofit
actually is. That fuzziness causes problems later.

### The short answer

A nonprofit is a legal organization that:

1. Is set up to do public-good work (charity, education, religion, science, the arts, civic stuff)
2. Doesn't have owners who can take profits
3. Reinvests any surplus money back into the mission
4. Gets special tax treatment from the government in exchange for that commitment

That's it. It's not a magical structure. It's not a club. It's not run
by saints. It's a legal entity with specific rules about what it does
with its money.

### How it actually compares to a for-profit business

Forget the abstract definitions. Here's the side-by-side:

|                                     | For-profit business                                                 | Nonprofit                                                                     |
| ----------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Who owns it?**                    | Shareholders or owners                                              | No one — it's owned by its mission                                            |
| **Where does profit go?**           | Distributed to owners as dividends, or kept                         | Reinvested in the mission. Cannot be distributed to anyone.                   |
| **What's the goal?**                | Maximize value for owners                                           | Advance the mission                                                           |
| **Who pays income tax?**            | The business pays corporate income tax; owners pay tax on dividends | The nonprofit is exempt from federal income tax (if 501(c)(3) approved)       |
| **Can founders get paid?**          | Yes — salary, dividends, equity                                     | Yes — but only "reasonable compensation," board-approved, IRS-disclosed       |
| **Can it generate "profit"?**       | Yes — that's the point                                              | Yes — called "surplus" or "net assets" — must be reinvested                   |
| **Who governs it?**                 | Owners (or the board they elect)                                    | An independent board of directors                                             |
| **What public reporting?**          | Annual report if public; private if private                         | Form 990 is publicly available; donor names redacted                          |
| **Where does the money come from?** | Customers paying for products/services                              | Donors, grants, program fees, government contracts                            |
| **What happens if it shuts down?**  | Owners split remaining assets                                       | Assets go to another nonprofit — never to individuals                         |
| **Personal liability?**             | Limited if incorporated                                             | Limited if incorporated                                                       |
| **Setup cost (CA)?**                | $50–$300 for an LLC                                                 | $300–$900 total (state filing + IRS 501(c)(3) application)                    |
| **Ongoing compliance?**             | State annual reports + federal/state taxes                          | State annual reports + IRS 990 + state charity registration + governance docs |

### Things people get wrong about nonprofits

**"Nonprofits can't make money."**
False. Nonprofits can generate revenue, run profitable programs, and end
the year with more money than they started with. A nonprofit that runs
a $500K surplus is in great shape — that money funds next year's
programs, builds reserves, or expands operations. What it doesn't do
is get distributed to founders, directors, or shareholders.

**"Nonprofits don't pay employees."**
False. Nonprofits pay competitive salaries — sometimes better than
for-profits for similar roles. The American Red Cross, Stanford
University, the Mayo Clinic, MoMA — all nonprofits, all employ
thousands at market rates. The IRS requires compensation be
"reasonable" — benchmarked against similar roles at similar orgs.
Form 990 publicly discloses officer and key-employee comp.

**"The founder can't get paid."**
False. Founders can be paid for their work running the org — they
often are once revenue supports a salary. The catch: the **board**
decides the founder's compensation (not the founder), it must be
reasonable, and it's publicly disclosed on the 990. Most founders
work unpaid for the first 1–2 years until revenue justifies a salary.

**"501(c)(3) and 'nonprofit' are the same thing."**
False. "Nonprofit" is a state-level legal structure (you incorporate
as a nonprofit corporation in California, Delaware, etc.). 501(c)(3)
is a federal tax status the IRS grants to qualifying nonprofits.

You can be a nonprofit without being 501(c)(3) — but no donor would
deduct their gifts and you'd pay federal income tax. The combination
is what matters.

**"All nonprofits are charities."**
Mostly true, but not entirely. 501(c)(3) is the charitable tax
category — and the most common — but there are 29 different 501(c)
sub-categories. Trade associations are 501(c)(6). Labor unions are
501(c)(5). Social clubs are 501(c)(7). They're all "nonprofits"
technically, but they're not charities.

This guide focuses on **501(c)(3) public charities** — the most
common type and the one nearly every founder asking "should I start a
nonprofit?" is actually asking about.

### Why start a nonprofit instead of a for-profit business

If you're trying to decide between forming a nonprofit and forming a
for-profit social enterprise (B-Corp, social LLC, etc.), the question
comes down to a few honest factors.

**Start a nonprofit when:**

- The work itself doesn't generate enough revenue to sustain a business (most charitable work)
- You want donor funding (only nonprofits can offer tax-deductible donations)
- You want access to foundation grants (almost all foundations only fund 501(c)(3)s)
- The mission is the entire point — not a means to profit
- You're okay never personally capturing financial upside
- You're willing to accept lower decision-making speed (board governance)

**Start a for-profit social enterprise (B-Corp, social LLC) when:**

- The work IS the business — your product or service generates the revenue
- You want investor funding (investors expect financial returns)
- You want to scale quickly with equity-based incentives
- You want to capture personal financial upside
- Tax-deductible donations aren't a major driver

Some founders use a hybrid: a for-profit company with a nonprofit arm,
or vice versa. That's complex; most founders should pick one and start
there. You can always restructure later if needed (it's painful but
possible).

### A useful mental model

Think of a nonprofit as a **non-distributing organization**. The IRS
calls this the "non-distribution constraint" — it's the technical
legal term for "you can't pay out the profits to owners or insiders."

Everything else about how the org operates can look similar to a
for-profit:

- It has staff and pays them
- It has revenue and expenses
- It has a budget and runs operations
- It markets to customers (donors, grantmakers, program participants)
- It plans for growth and impact

What's structurally different is the **non-distribution constraint**
plus the **public-good purpose**. Those two things determine
everything else: the tax treatment, the governance requirements, the
reporting obligations, the cultural expectations.

### So why does anyone start one?

For most people who start a 501(c)(3), the honest answer is some
combination of:

1. **They care about a specific cause more than they care about personal financial upside.**
2. **The work they want to do attracts donor funding, not customer revenue.**
3. **They want the legitimacy 501(c)(3) status provides for fundraising.**
4. **They want the lower-friction path to volunteer help, partner relationships, and tax-exempt grants.**

If those four don't all resonate, you might be better off as a B-Corp,
social LLC, or a different structure. Sit with that question honestly
before incorporating. Switching later is possible but expensive and
slow.

### Quick decision framework

Still not sure? Ask yourself these three questions:

1. **Where does the money come from?**
   - If customers paying for value → for-profit
   - If donors and grants → nonprofit
   - If both, in roughly equal parts → hybrid (complex; ask a lawyer)

2. **What's the personal financial endgame for you?**
   - Capture significant upside (founder equity, dividends, sale) → for-profit
   - Reasonable salary + mission impact → nonprofit
   - Some upside, but mission-aligned → B-Corp / social LLC

3. **What's your tolerance for governance and disclosure?**
   - High freedom, low transparency → for-profit (private)
   - Moderate governance, moderate transparency → B-Corp
   - Board oversight, public disclosure → nonprofit

Match your answers, pick the structure, then move on. Don't relitigate
this decision after the entity is formed. The cost of switching is
high; the cost of indecision is higher.

---

# Part I — Decide and plan

## Chapter 1: The 10 things that hang up most nonprofit founders

If you read nothing else, read this. These are the actual reasons small
nonprofits stall, get into legal trouble, or quietly fold within 3 years.

### 1. The 3-director rule

California Corporations Code §5212 requires public benefit nonprofit
corporations to have **at least three (3) directors** on the Board.
Three distinct human beings, not three roles filled by two people.

Most first-time founders don't know this or assume "co-founder plus
one trusted advisor" is enough. It isn't.

**Why this matters:**

- Foundation officers screen for 3+ unrelated directors
- Banks ask about board composition when opening accounts
- IRS Form 990 Part VI explicitly tests board independence
- Conflicts of interest can only be properly managed with quorum of unrelated voices

**Fix:** Identify a third director early. They don't need expertise.
They don't get paid. They sign an annual disclosure and attend at
least one meeting per year. A spouse's friend, sibling, trusted former
colleague — all valid.

**Other states:** Most states require 3 directors. A few (Alaska,
Arizona, Delaware, Iowa, Kansas, Mississippi, Oklahoma, Oregon,
Pennsylvania, Washington) allow as few as 1. Check yours, but plan
for 3 even if your state allows fewer — grantmakers expect it.

### 2. The California AG Registry (Form CT-1)

If you solicit donations in California — including a public donate
button on a website accessible from California — you must register
with the **California Attorney General's Registry of Charitable Trusts**
before soliciting.

This is the single most-missed compliance gate. Founders get their
501(c)(3), launch their website, accept their first donations, and
only discover the requirement later. Penalties range from fines to
a hard ban on soliciting.

**Fix:** File Form CT-1 (https://oag.ca.gov/charities/initial-reg)
before publicly launching donations. **$50.** Online at
https://oag.ca.gov/charities. Takes about an hour.

**Other states:** ~41 states have charity registration requirements.
The "Unified Registration Statement" (URS) lets you register in
multiple states with one form, but several states (CA, FL, NY, PA,
TX) require their own forms. Services like Harbor Compliance handle
multi-state registrations for ~$1,500/year.

### 3. Form 990 — the auto-revocation cliff

Every IRS-recognized 501(c)(3) must file an annual return:

| Form                        | When to use                                                  |                     Cost |
| --------------------------- | ------------------------------------------------------------ | -----------------------: |
| **Form 990-N** (e-postcard) | Gross receipts ≤ $50,000                                     |                     Free |
| **Form 990-EZ**             | $50,000 – $200,000 gross receipts AND <$500,000 total assets |   Free; bookkeeper rec'd |
| **Form 990** (full)         | All others                                                   | Free; CPA strongly rec'd |

Miss **three consecutive years** = the IRS automatically revokes your
501(c)(3) status. No warning letter, no grace. Revocation means donors
can no longer deduct gifts, you can no longer accept tax-deductible
donations, and the org effectively dies.

**Fix:** File the 990-N every year by May 15 (for calendar-year orgs).
It's a 10-minute electronic postcard. **Free.** File at
https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard

### 4. The DBA / FBN trap

Your legal corporate name is one thing. Your public brand is often
another. If they differ — even by spacing or capitalization — you
need to file a Fictitious Business Name (DBA) statement in the
county where you operate.

Example: legal name "Grass Roots Foundation" (two words), public
brand "Grassroots Foundation" (one word) — requires DBA filing.

**Why this matters:**

- Donor checks made out to the public brand can be returned by banks
- State registration discrepancies surface in audits
- The CA AG Registry requires DBA disclosure

**Fix:** Check your legal name on the IRS determination letter and
state incorporation papers. If your public brand differs, file the DBA.

**California (San Diego County):** ~$42 county fee + ~$50–100
newspaper publication. 4 weeks of weekly publication required. Total
elapsed time: ~5–6 weeks. File online via
https://arccfbn.sandiegocounty.gov but physical wet-ink signature
required for final submission.

**Other states:** Process and cost vary widely. Search "[your county]
Fictitious Business Name" for local requirements.

### 5. Unsigned/undated bylaws

More than half of small nonprofits I've seen have this problem: their
Bylaws document exists, but the "Adoption" section is blank — no date,
no signatures.

In practice the org has been operating. Legally, those bylaws were
never formally adopted. Any challenge (IRS audit, grantmaker due
diligence, internal dispute) exposes the gap.

**Fix:** Fill in the adoption date (likely incorporation date if
adopted at the Founding Board Meeting). Get signatures from all
founding officers. Save the dated and signed PDF in your
`org-documents/` folder.

If you can't reconstruct original adoption, formally re-adopt at your
next board meeting and document the re-adoption in the minutes.

### 6. Comingling funds

Your personal bank account and the nonprofit's bank account are NOT
the same thing. Even if you're the sole director. Even if no money
has come in yet.

**Why this matters:**

- IRS Form 990 specifically asks about private inurement
- Comingling exposes founders to personal liability
- Banks won't accept donor checks to the nonprofit if the account is personal
- Foundation officers review banking practices in due diligence

**Fix:** Open a business bank account in the corporation's name within
30 days of incorporation. Even with $0 in it. Use it for every
nonprofit transaction.

### 7. No Conflict of Interest Policy on file

The IRS expects 501(c)(3) public charities to have a written Conflict
of Interest Policy signed by all directors. Most founders mention it
in bylaws but never produce or sign the standalone policy document.

**Why this matters:**

- Form 990 Part VI asks if the org has a written COI policy
- Foundation officers specifically request the signed COI policy
- Without one, the org reads as governance-weak

**Fix:** Adopt a written COI policy at your Founding Board Meeting.
All directors sign. Annual conflict disclosures from each director
going forward. Templates available free at
https://www.councilofnonprofits.org/running-nonprofit/governance-leadership/conflict-interest

### 8. Chasing big grants too early

A Year 1 trap: nonprofits chase $50K+ or $100K+ grants when they have
no operational track record, no filed 990, no audited financials.
They burn months of work to get a polite "decline."

**Reality check:** foundation officers fund organizations with proof
of execution. Without a track record, you're competing on aspiration
alone — and losing.

**Fix:** Build operational evidence first. Get your first donors
through your personal network. File one 990. Document one recipient.
THEN apply to bigger grants. Until then, apply only to $5K–$25K
rolling grants where eligibility is friendly.

### 9. Building infrastructure forever instead of asking for money

Engineer-brain founders especially. The website is never done. The
strategic plan needs one more revision. The brand needs polish. The
CRM needs to be configured.

Meanwhile zero dollars have come in.

**Fix:** Set a date by which you will start asking for money. Make the
asks. Refine the infrastructure after. The site doesn't need to be
perfect. The asks need to happen.

### 10. Hiring (or paying yourself) too early

Year 1 nonprofits that hire staff before revenue justifies it often
don't survive Year 2. Same with founders who pay themselves a salary
out of the first donations.

The IRS scrutinizes founder compensation hard (private inurement
doctrine). Foundation officers screen for >75% of expenses to
programs. Both bars get violated when staff costs grow before revenue.

**Fix:** Run on volunteer/founder unpaid effort until total revenue
crosses ~$150K–$200K with multi-year stability. Then consider a modest
Executive Director salary, documented through board approval and
benchmarked via Form 990 Schedule J standards.

---

# Part II — Form the legal entity

## Chapter 2: Name, mission, structure

### Choose your name

Before filing anything, lock the name.

**Three name fields exist:**

1. **Legal corporate name** — what's on your Articles of Incorporation. Permanent without amendment.
2. **DBA / "Doing Business As"** — the public brand. Often differs from legal name.
3. **Trade name / trademark** — federal protection (USPTO), optional.

**Name selection process:**

1. **Brainstorm** 5–10 candidates that reflect your mission
2. **Search the CA SOS** at https://bizfileonline.sos.ca.gov — confirm no existing entity has the same name
3. **Google the name** — check for adjacent nonprofits, competing brands
4. **Search the USPTO** at https://www.uspto.gov/trademarks/search — check for federal trademarks
5. **Check social handles** on Instagram, X, LinkedIn — confirm available
6. **Check domain availability** — ideally `.org`; `.com` if mission allows

**Pitfalls:**

- Generic names like "Community Hope Foundation" are crowded
- Names that include "Inc." or "Corporation" can trip up casual donors
- Names too close to existing brands invite legal headaches
- Cute spellings ("Wun Hope") feel try-hard and hurt SEO

### Define your mission

The IRS Form 1023 (or 1023-EZ) requires a clear mission statement. Foundation
grant applications require one. Donors want to understand it in 30 seconds.

**Format:**

> **[Org name]** [verb: funds, provides, advocates, supports]
> **[specific service or program]** for **[specific population]**
> in **[geographic area]**.

Example: "Grass Roots Foundation funds need-based scholarships,
kits, and equipment for youth at competitive club soccer programs
across San Diego County."

**Pitfalls:**

- Mission too broad ("Improve lives globally") — IRS scrutinizes vague missions
- Mission too narrow ("Help one specific kid") — IRS won't approve highly-individualized purposes
- Mission embeds founders' personal stories — keep that for the About page; mission is institutional

### Choose your structure

For most charitable work, the answer is:

> **California Public Benefit Nonprofit Corporation, recognized by the IRS as 501(c)(3) Public Charity.**

That's the default for almost every reader. Other options exist but
narrow:

- **Public Benefit Corporation** (most charities — your default)
- **Mutual Benefit Corporation** (member-serving like a homeowners assoc; rarely 501(c)(3))
- **Religious Corporation** (churches, temples, mosques)
- **Charitable Trust** (asset-driven; uncommon for operating charities)
- **Unincorporated Association** (small grassroots; personal liability — avoid)
- **Fiscal sponsorship** (operate under an existing nonprofit's status — Chapter X covers this)

If you want to operate at scale, you want a Public Benefit Corporation
with 501(c)(3) public charity status. Stop debating; pick it.

---

## Chapter 3: File Articles of Incorporation (California)

Articles of Incorporation legally create the corporation. Without them,
you don't exist as a separate legal entity — you're an "unincorporated
association," which means personal liability for founders.

### What you file

**Form ARTS-PB-501(c)(3)** — Articles of Incorporation of a Nonprofit
Public Benefit Corporation. The (c)(3) version has the federal tax-exempt
language pre-embedded, saving you from a later amendment.

Download free from CA SOS:
https://bpd.cdn.sos.ca.gov/corp/pdf/articles/corp_artspb501c3.pdf

Or file online via bizfile: https://bizfileonline.sos.ca.gov

### Required content

| Field                        | Notes                                                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------- |
| Corporation name             | Exact legal name — pattern-match what you'll use forever                                                |
| Purpose                      | Specific charitable purpose + 501(c)(3) limitation clauses (preloaded if you use the PB-501(c)(3) form) |
| Agent for Service of Process | Your home address OR a paid registered agent (~$120/year via Northwest Registered Agent, Inc.)          |
| Initial directors            | Optional but recommended — list 3 here, matches bylaws                                                  |
| Dissolution clause           | "Upon dissolution, assets distributed for exempt purposes" — IRS requires this                          |

### Cost (2026)

- **$30** filing fee (online via bizfile)
- $5 optional certified copy
- $350 optional expedited filing (in-person)
- $750 same-day expedited (rarely needed)

### Timeline

- Online via bizfile: 2–4 weeks standard
- Mail filing: 4–8 weeks
- In-person with expedited: same day

### After filing

You receive a stamped copy back from the CA SOS. **Download from
bizfile and save in `org-documents/`.** This document is required for:

- IRS Form 1023 application
- CA AG CT-1 registration
- Bank account opening
- Every grant application
- Every state registration

### Pitfalls

- Forgetting the 501(c)(3) language (delays IRS approval by 6+ months — use the PB-501(c)(3) version)
- Vague purpose statement ("for educational and charitable purposes generally")
- Skipping the dissolution clause
- Listing yourself as the only initial director (file with 3 from Day 1)

---

## Chapter 4: Get your EIN

After incorporation, get an Employer Identification Number from the IRS.
This is the org's federal tax ID — required for everything else.

### How to apply

Apply online at the IRS:
https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online

**Cost:** Free. The IRS never charges for an EIN. Any site that
charges you for an EIN application is a scam.

**Timeline:** Instant — you receive the EIN at the end of the online
application, on a downloadable PDF.

### What you need before applying

- Your CA SOS Entity Number (from your stamped Articles)
- Principal officer info (you)
- Mailing address
- Date of incorporation
- Number of employees (usually 0)
- Reason for applying ("Started a new business" — the relevant choice for newly-formed corps)

### After applying

Download the **CP 575 Letter** (or **Form 147C**) — IRS confirmation of
your EIN. Save in `org-documents/`. Required for:

- Form 1023 application
- Bank account opening
- All state filings
- Vendor payments

---

## Chapter 5: Apply for 501(c)(3) federal exemption

This is what makes donations tax-deductible. Without it, you're just an
incorporated business that calls itself a charity.

### Form 1023-EZ vs. Form 1023

|                   | **Form 1023-EZ**                                                               | **Form 1023** (full) |
| ----------------- | ------------------------------------------------------------------------------ | -------------------- |
| **2026 user fee** | $275                                                                           | $600                 |
| **Length**        | 3 pages                                                                        | 26 pages             |
| **Timeline**      | 2–4 weeks typical                                                              | 3–9 months           |
| **Eligible if**   | Annual receipts <$50K for 3 years + assets <$250K + not church/school/hospital | All others           |
| **Approval rate** | ~98%                                                                           | ~95%                 |

**Reality:** ~70% of new small nonprofits use 1023-EZ. Unless you have
a complex structure or large initial funding, this is your default.

### Source

- IRS Form 1023-EZ info: https://www.irs.gov/forms-pubs/about-form-1023-ez
- IRS Form 1023 info: https://www.irs.gov/forms-pubs/about-form-1023
- File both at: https://www.pay.gov (search "1023-EZ" or "1023")

### What you need before applying

For 1023-EZ:

- Articles of Incorporation (filed and stamped)
- EIN
- Mission statement
- Brief program description
- Officer info (3+ directors)
- Bank info (where the org will receive funds)
- Eligibility worksheet (in the form itself)

For Form 1023 (full):

- Everything above, plus:
- Bylaws (drafted)
- Conflict of Interest Policy (drafted)
- Detailed program narrative
- 3-year financial projection
- Initial fundraising plan
- Compensation disclosures (for officers)
- Activities log (if any pre-formation activity)

### Submitting

1. Create a pay.gov account
2. Search "1023-EZ" (or "1023")
3. Fill in the form
4. Pay the user fee ($275 or $600) via bank account or credit card
5. Submit

### Determination Letter

When approved, the IRS issues your **Determination Letter** confirming
501(c)(3) status. This single PDF is the most important document the
org owns. Every grantmaker, banker, and major donor will eventually
ask for it.

Save as: `IRS_DeterminationLetter_[ORG NAME]_[YYYY-MM-DD].pdf`

### Public Charity vs. Private Foundation classification

When the IRS approves, you're classified as one of:

- **Public Charity** (PC) — what you want; broad support test
- **Private Foundation** — more restrictive; higher excise taxes

Public Charity status requires the **33% public support test** —
at least 1/3 of revenue from broad public support, not just one donor.
Track this from Day 1.

If incorrectly classified as Private Foundation, you can request
reclassification, but this is messy. Better to structure the 1023 to
clearly support PC status (multiple donors, diversified plan).

### Pitfalls

- Filing 1023 when you qualified for 1023-EZ ($325 more in fees + 4 months extra time)
- Not having bylaws / COI policy drafted before filing 1023 (full)
- Vague mission language
- Listing 1 director (the IRS notices and asks questions)
- Forgetting to actually pay the user fee (the form looks submitted but isn't)

---

# Part III — California state registrations

## Chapter 6: The five California filings most founders miss

This is where most nonprofits get in trouble. There are FIVE separate
California state filings, and most founders only know about one or two.

### The five required filings

| Filing                | What it is                                                 | When                                                          |                           Cost (2026) | Risk if missed           |
| --------------------- | ---------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------: | ------------------------ |
| **SI-100** (CA SOS)   | Statement of Information                                   | Within 90 days of incorporation, then biennially              |                                   $20 | Corporate suspension     |
| **CT-1** (CA AG)      | Initial charity registration                               | Before soliciting OR within 30 days of receiving first assets |                                   $50 | Cannot legally solicit   |
| **RRF-1** (CA AG)     | Annual registration renewal                                | 4.5 months after FY end                                       | $25–$1,200 (sliding scale by revenue) | Solicitation suspended   |
| **CT-TR-1** (CA AG)   | Annual Treasurer's Report (if filing 990-N instead of 990) | Same as RRF-1                                                 |                                  Free | Renewal incomplete       |
| **FTB 199N** (CA FTB) | CA's parallel to 990-N                                     | 5.5 months after FY end                                       |                                  Free | CA tax-exemption at risk |

### Detailed walkthrough — each filing

#### SI-100 (Statement of Information)

What it is: discloses officers, directors, address, agent for service
of process.

When: within 90 days of filing Articles, then every 2 years.

How: online via https://bizfileonline.sos.ca.gov

Cost: $20

Pitfall: founders focused on the IRS 1023 application forget the
90-day window. Set a calendar reminder the day you incorporate.

#### CT-1 (Initial Charity Registration)

What it is: California Attorney General Registry of Charitable Trusts
registration. The single most-missed filing.

When: before publicly soliciting donations OR within 30 days of
receiving first assets.

How: online via the new Online Filing Service at
https://oag.ca.gov/charities/initial-reg → click into the OFS link.

Cost: $50

Required uploads:

- Articles of Incorporation
- Bylaws (signed and dated)
- IRS Form 1023 or 1023-EZ submitted
- IRS Determination Letter

Required info:

- Officers/directors with addresses
- Type of organization (Corporation)
- Description of activities
- Whether assets have been received
- Whether you're a Charitable Fundraising Platform (almost certainly No)
- States where you solicit (typically only your home state initially)

Pitfall: most-skipped filing. Founders launch a donate flow on a
website without ever registering. The CA AG can issue cease-and-desist
notices and fines.

#### RRF-1 (Annual Renewal)

What it is: annual renewal of the CT-1 registration.

When: 4.5 months after fiscal year end (May 15 for calendar-year orgs).

How: online via OFS or paper form mailed to CA AG.

Cost: sliding scale by revenue (current 2026 schedule):

| Total revenue       |    Fee |
| ------------------- | -----: |
| < $25,000           |    $25 |
| $25,001 – $100,000  |    $50 |
| $100,001 – $250,000 |    $75 |
| $250,001 – $1M      |   $100 |
| $1M – $5M           |   $200 |
| $5M – $20M          |   $400 |
| $20M – $100M        |   $800 |
| > $100M             | $1,200 |

Pitfall: the May 15 deadline overlaps with federal 990-N, FTB 199N,
and (every other year) SI-100. The compliance window is a cliff.
Block out the first two weeks of every May permanently.

#### CT-TR-1 (Annual Treasurer's Report)

What it is: required if you file 990-N (not the full 990). Provides
the CA AG with basic financial data the 990-N doesn't include.

When: with RRF-1 (May 15).

How: PDF form attached to RRF-1 submission.

Cost: Free.

Pitfall: skipping CT-TR-1 because you think RRF-1 is enough. They go
together for small orgs.

#### FTB 199N (CA Franchise Tax Board annual filing)

What it is: California's parallel to federal Form 990-N. CA FTB is
separate from CA AG and federal IRS.

When: 5.5 months after FY end (May 15 for calendar-year orgs).

How: online at https://www.ftb.ca.gov/file/business/types/charities-nonprofits/

Cost: Free.

Pitfall: filing federal 990-N does NOT satisfy CA FTB 199N. Three
separate state agencies, three separate filings.

### How to keep them all straight

| Month                      | What's due                         |
| -------------------------- | ---------------------------------- |
| Day 90 after incorporation | Initial SI-100                     |
| Before first solicitation  | CT-1                               |
| Every May 1–15             | 990-N + RRF-1 + CT-TR-1 + FTB 199N |
| Every other May            | SI-100 (biennial)                  |

Block out **May 1–15 every year** as "Annual Compliance Month." Set
calendar recurring events. Use a checklist.

---

# Part IV — Build the governance layer

## Chapter 7: Recruit your founding board

Governance is what separates a real nonprofit from a side project. It's
also where most small nonprofits cut corners and pay for it later.

### The 3-director minimum (again — this is critical)

CA Corporations Code §5212 requires three directors. Not three roles.
Three actual humans.

**Who counts as a "good" director:**

- Adult, of legal capacity
- Not financially conflicted with the org (not a paid vendor, etc.)
- Willing to attend at least one meeting per year
- Willing to sign annual conflict-of-interest disclosure
- Ideally: brings some skill, network, or community standing

**Who NOT to recruit:**

- Your business partner from a for-profit company you co-own
- An executive at a foundation you'll apply to
- A vendor providing paid services to the org
- Anyone who would be compensated by the org (creates inurement risk)
- All immediate family members (avoid having 100% related board — at least 1 should be non-related)

### How to recruit

Cold ask script:

> "Hi [name] — I'm starting [org] to [mission in one sentence]. I'm
> looking for a third board member to round out the governing body.
> The commitment is small: one meeting a year on the phone, sign an
> annual disclosure form, and be available for occasional input.
> You wouldn't be liable for anything — directors of 501(c)(3) public
> charities are protected by California's volunteer immunity statute
> and by D&O insurance we'll have. Would you be willing to serve?"

Yes rate from a personal ask: ~50–60%. From a cold approach: ~10–20%.

### Board roles

For a small founding board (3–5 members), the required officer roles are:

- **President** (or Chair) — runs board meetings, signs major documents
- **Secretary** — keeps records, files notices, maintains corporate book
- **Treasurer** (CFO) — financial oversight, signs financial documents

One person can hold multiple officer roles, EXCEPT California
prohibits the same person from being both President AND Secretary
(or President AND Treasurer in some structures — check your bylaws).

### Board size over time

| Org stage       | Board size |
| --------------- | ---------: |
| Year 1 founding |          3 |
| Year 2–3        |          5 |
| Year 4+         |        7–9 |
| Mature mid-size |       9–15 |

Don't rush board expansion. Adding bad fits slows you down more than
running lean does.

---

## Chapter 8: Bylaws + the five required policies

### Bylaws

Bylaws are the internal governing document of the corporation. They
typically cover:

- Article I: Name and Purpose
- Article II: Offices
- Article III: Board of Directors (number, election, terms, meetings, quorum, compensation)
- Article IV: Officers (titles, election, removal, duties)
- Article V: Committees
- Article VI: Conflict of Interest
- Article VII: Fiscal Year
- Article VIII: Dissolution
- Article IX: Amendments
- Article X: Adoption (date + signatures)

**Length:** 8–20 pages typically.

**Template:** Council of Nonprofits has free templates:
https://www.councilofnonprofits.org/running-nonprofit/governance-leadership/sample-bylaws

**Pitfall:** Article X "Adoption" left blank. Bylaws need a date and
signatures. Otherwise they're not formally adopted.

### The five required policies

These are policies the IRS specifically asks about on Form 990 Part VI:

#### 1. Conflict of Interest Policy

Required by IRS. Defines what conflicts are, requires annual disclosure,
sets recusal procedures. All directors sign at adoption + annually.

Template: https://www.irs.gov/pub/irs-tege/eotopicz03.pdf (Appendix A)

#### 2. Document Retention and Destruction Policy

Sarbanes-Oxley-derived; required for 990 filers. States how long the
org keeps records and when documents are destroyed.

Standard retention periods:

- Articles, bylaws, IRS letters: permanent
- 990s, financial statements: 7 years
- Board minutes: permanent
- Donor records: 7 years
- Bank statements: 7 years
- Personnel records: 7 years post-separation
- Tax returns: permanent
- Insurance policies: 5 years past expiration

#### 3. Whistleblower Policy

Required by IRS for 990 filers. Protects insiders who report
suspected wrongdoing from retaliation.

Template: https://www.councilofnonprofits.org/running-nonprofit/administration-and-financial-management/whistleblower-protections-nonprofits

#### 4. Compensation Policy

States how compensation decisions are made. Required to defend
founder/officer/staff comp against IRS private-inurement scrutiny.

Standard provisions:

- Compensation comparability data referenced
- Independent review by uninterested board members
- Documented decision in minutes
- Reasonable compensation based on benchmarks

#### 5. Gift Acceptance Policy

States what types of gifts the org will and won't accept (e.g., real
estate? cryptocurrency? gifts with strings attached?).

Less strictly required, more recommended. Some grantmakers ask.

### How to adopt

All five policies are adopted at the Founding Board Meeting. Each
director signs each policy on adoption. Annual COI disclosures from
each director begin year 1.

Save all five in `org-documents/policies/`.

---

## Chapter 9: The Founding Board Meeting

This is the most important governance event in the life of your org.
Do it within 30 days of incorporation.

### Agenda template

```
FOUNDING BOARD MEETING
[ORG NAME]
Date: [DATE]
Location: [PHONE / VIDEO / IN PERSON]

CALL TO ORDER (with quorum confirmed)

OLD BUSINESS
1. Approval of Articles of Incorporation (already filed)

NEW BUSINESS
2. Adoption of Bylaws (vote)
3. Election of Officers
   - President: [NAME]
   - Secretary: [NAME]
   - Treasurer: [NAME]
4. Adoption of Conflict of Interest Policy
5. Adoption of Document Retention Policy
6. Adoption of Whistleblower Policy
7. Adoption of Compensation Policy
8. Adoption of Gift Acceptance Policy
9. Authorization of bank account opening at [BANK]
   with [NAMES] as authorized signers
10. Authorization of officer signatures on contracts up to $[AMOUNT]
11. Approval of fiscal year (recommended: calendar year)
12. Approval of any pending grant applications, contracts, etc.
13. Set next meeting date

ADJOURNMENT
```

### Minutes template

```
MINUTES OF THE FOUNDING BOARD MEETING
[ORG NAME]
Date: [DATE]
Location: [PHONE / VIDEO / IN PERSON]

PRESENT: [Director 1, Director 2, Director 3]
ABSENT: [none]
QUORUM: Confirmed (3 of 3)

The meeting was called to order at [TIME] by [Name], who served
as Chair.

[For each agenda item:]
A motion was made by [Name] to [action]. Seconded by [Name].
Discussion: [brief summary].
Vote: Unanimous (3-0).
Outcome: Carried.

[List specific resolutions adopted, with text of each.]

The meeting was adjourned at [TIME].

Respectfully submitted,

________________________
[Secretary], Secretary

Attachments:
- Bylaws (signed by all directors)
- Conflict of Interest Policy (signed by all directors)
- Document Retention Policy (signed by all directors)
- Whistleblower Policy (signed by all directors)
- Compensation Policy (signed by all directors)
- Gift Acceptance Policy (signed by all directors)
- Bank account opening authorization
```

### What you produce

A single PDF containing:

- Minutes
- All five policies (signed)
- Bank account resolution
- Updated Bylaws (signed)

This PDF is the foundation document of all governance going forward.
Save in `org-documents/governance/founding-board-meeting.pdf`.

---

# Part V — Operational infrastructure

## Chapter 10: Banking, bookkeeping, and financial controls

### Opening the bank account

You need a business bank account in the corporation's name. Even if
$0 has come in yet.

**Recommended banks for small nonprofits (CA):**

| Bank                               | Strengths                       | Notes                         |
| ---------------------------------- | ------------------------------- | ----------------------------- |
| **Mission Federal Credit Union**   | Nonprofit-friendly, low/no fees | San Diego-based               |
| **Wells Fargo Nonprofit Checking** | National, fee usually waived    | More integration with vendors |
| **Chase Business Complete**        | Easy Stripe/Zeffy integration   | National, accessible          |
| **Bank of America Business**       | Nonprofit relationship managers | Slightly higher fees          |

**What to bring to open the account:**

- IRS Determination Letter
- Articles of Incorporation
- EIN Confirmation Letter (CP 575)
- Bylaws
- Board resolution authorizing the account (from Founding Board Meeting)
- Photo ID for all signers
- Initial deposit (small — $25–$100 typical)

**Time investment:** 1–2 hours at the branch.

### Signature requirements

Build in basic controls from Day 1:

- **Two-signature requirement** for any check or transfer over $1,000
- Both signers must be officers per bylaws
- Treasurer (CFO) signs all checks; President co-signs if >$1,000

This single control prevents the most common small-nonprofit fraud
scenarios and is required for clean audits later.

### Bookkeeping

Track every transaction from Day 1.

**Tools:**

| Tool                                 |                  Cost | Best for                              |
| ------------------------------------ | --------------------: | ------------------------------------- |
| **QuickBooks Online for Nonprofits** | $60/year via TechSoup | Most small-to-mid nonprofits          |
| **Wave**                             |                  Free | Very small orgs                       |
| **Aplos**                            |            $40+/month | Built for nonprofits; fund accounting |

**TechSoup access:** https://www.techsoup.org — gives nonprofits
heavy discounts on software (QuickBooks, Microsoft, Adobe, etc.).
Apply Day 1.

### Financial controls (minimum)

- Monthly bank reconciliation by Treasurer
- Quarterly financial report to the board (income, expenses, balance sheet)
- All donations logged within 7 days
- Receipts issued within 30 days
- Annual review by independent CPA when revenue > $100K
- Full audit when revenue > $500K (CA requires audit at $2M; most foundations want it earlier)

---

## Chapter 11: Donation platform and receipt mechanics

### Donation platforms compared (2026)

| Platform               |                Platform fee | Strengths                                  | Notes                               |
| ---------------------- | --------------------------: | ------------------------------------------ | ----------------------------------- |
| **Zeffy**              |                      **0%** | Free; donor tip model                      | Best Y1 default                     |
| **Givebutter**         |  2.9% + Stripe (1.9% + 30¢) | Events, peer-to-peer, mature features      | Solid mid-size choice               |
| **Donorbox**           |            1.5% (free tier) | Recurring donations, integrations          | Decent middle ground                |
| **Stripe direct**      | 2.2% + 30¢ (nonprofit rate) | Most flexible, requires custom integration | Power users only                    |
| **PayPal Giving Fund** |                          0% | Surfaces you in PayPal donor checkout      | Passive; pair with another platform |
| **DAFpay / Chariot**   |          ~$199/yr (Chariot) | DAF integration                            | Add-on to primary platform          |

**Recommendation for Year 1:** Zeffy as primary + PayPal Giving Fund

- Goodstack (free) + Chariot DAF widget if budget allows.

### Donation receipts

The IRS requires donors to have a written acknowledgment for any
single gift of $250 or more (Publication 1771).

**Receipt must include:**

- Name of the organization
- Date of contribution
- Description of contribution (cash, check amount, or for non-cash, description)
- Statement of goods/services received (or "no goods or services were provided in exchange for this contribution")
- Statement of tax-exempt status (e.g., "tax-deductible to the extent allowed by law")

**Most platforms auto-generate compliant receipts:**

- Zeffy: yes
- Givebutter: yes
- Donorbox: yes
- PayPal Giving Fund: yes
- Stripe direct: configurable

**Annual statements:** at end of year, issue a single statement
summarizing all donations from that donor. This is courtesy, not
required.

### State-specific note: CA Charitable Fundraising Platform

In 2024, California began requiring **Charitable Fundraising
Platforms** (Zeffy, Givebutter, GoFundMe, etc.) to register
separately with the AG. This is the **platform's** obligation, not
yours — but if a platform isn't registered, donations through it
might be technically out of compliance.

How to verify: check the platform's CA registration status before
using. Zeffy, Givebutter, and GoFundMe are all registered as of 2026.

---

# Part VI — Brand and public presence

## Chapter 12: Name, logo, and brand foundation

### Brand decisions you need to make Day 1

1. **Logo concept** — wordmark, icon, or both
2. **Color palette** — 2–4 colors with semantic meaning
3. **Typography** — display font + body font
4. **Tagline** — short, memorable, mission-specific
5. **Tone of voice** — formal, warm, direct, etc.

### Affordable logo creation

| Option                |        Cost | Best for                       |
| --------------------- | ----------: | ------------------------------ |
| **Fiverr** designer   |    $50–$300 | Quick, decent quality          |
| **99designs** contest |       $299+ | Multiple options, more polish  |
| **Local freelancer**  | $500–$2,000 | Higher quality, brand strategy |
| **Branding agency**   |     $5,000+ | Skip for Year 1                |
| **DIY (Canva)**       |        Free | Only if you have design skill  |

For Year 1, **Fiverr at $100–$200 produces acceptable quality.**
Upgrade later when revenue justifies.

---

## Chapter 13: Website essentials (with AI-era considerations)

### Required pages

1. **Home page** — mission, donate CTA, top stat
2. **About** — story, mission, founders, board
3. **Programs** — what you fund/do
4. **Donate** — embedded donation flow (Zeffy iframe or modal)
5. **Contact** — email, form
6. **Privacy Policy** — required by CCPA for CA orgs
7. **Donor Privacy Policy** — required by some grantmakers
8. **Annual Report / Impact** — once you have data
9. **Stories** — recipients (with consent)
10. **Press / News** — when you get coverage

### Required technical elements

#### Schema.org JSON-LD structured data

Critical for SEO and AI discoverability. Foundation officers and AI
agents both use structured data to understand who you are.

Required schemas (minimum):

- **NGO** (or **Organization**)
- **Service** for each program
- **FAQPage** for FAQ sections
- **BreadcrumbList** for navigation
- **Article** for blog posts

Sample NGO schema:

```json
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Your Org Name",
  "alternateName": "Your DBA",
  "url": "https://yoursite.org",
  "logo": "https://yoursite.org/logo.png",
  "description": "...",
  "foundingDate": "2023",
  "founders": [...],
  "address": {...},
  "taxID": "EIN HERE",
  "nonprofitStatus": "Nonprofit501c3",
  "naics": "813219"
}
```

#### llms.txt (new in 2024)

A plain-text file at `/llms.txt` that summarizes your org for AI
agents. Like robots.txt for LLMs.

Sample:

```
# Your Org Name

A 501(c)(3) public charity based in [city, state]. Mission: [one
sentence].

## Programs
- Program 1
- Program 2

## Tax status
California 501(c)(3) Public Charity, EIN [number].

## Contact
[email]
[website]
```

Place at: `https://yoursite.org/llms.txt`

Why: ChatGPT, Claude, Perplexity, and other AI agents are increasingly
how people discover nonprofits. llms.txt makes you AI-discoverable.

#### Sitemap.xml + Robots.txt

Standard SEO basics. Most modern frameworks generate these
automatically (Next.js, Astro, etc.).

#### Open Graph + Twitter Card metadata

For social-share previews. Every page should have:

- og:title
- og:description
- og:image (1200×630 PNG)
- twitter:card

---

## Chapter 14: LinkedIn, social, and registry profiles

### LinkedIn Company Page

Critical for nonprofit credibility. Foundation officers, corporate
sponsors, and journalists all check.

**Setup steps:**

1. Sign into the personal LinkedIn account you want to admin from
2. Navigate to https://www.linkedin.com/company/setup/new/
3. Fill in: name, URL slug, industry ("Non-profit Organizations"),
   size ("1-10 employees"), type ("Nonprofit")
4. Upload logo (300×300 minimum) and cover banner (1128×191)
5. Complete About section
6. Add tagline
7. Invite connections to follow

**Pitfall #1:** LinkedIn sometimes auto-generates a Company Page when
you list an employer that doesn't have one. You'll need to "Request
admin access" to claim it. Use the "..." menu on the page → Request
admin access.

**Pitfall #2:** If you created the page from a different LinkedIn
account than your main, you lose access if you can't log into the
creating account. Always add a second admin from your main account.

### Registry profiles (claim early)

- **Candid** (https://candid.org) — claim profile, work toward Bronze → Silver → Gold → Platinum seals
- **GreatNonprofits** (https://greatnonprofits.org) — Yelp-for-nonprofits
- **BBB Wise Giving Alliance** — old-school but trusted
- **CharityNavigator** — for orgs >$1M revenue
- **Goodstack** (https://goodstack.org) — gets you on corporate matching platforms
- **PayPal Giving Fund** — sign up via PayPal Business

Most are free. All require uploading IRS Determination Letter for verification.

---

# Part VII — Fundraising

## Chapter 15: Your first 100 donors

### The donor pyramid

Don't think "100 donors at $50 = $5,000." Think pyramids:

```
                          ┌────────────────────┐
                          │   $25K+ (1)        │   team sponsor / major
                          └────────────────────┘
                       ┌──────────────────────────┐
                       │   $5K–$25K (3–6)         │   major individual
                       └──────────────────────────┘
                    ┌────────────────────────────────┐
                    │   $1K–$5K   (15–25)            │   mid-tier
                    └────────────────────────────────┘
                 ┌──────────────────────────────────────┐
                 │   $100–$1K  (50–75)                  │   committed
                 └──────────────────────────────────────┘
              ┌────────────────────────────────────────────┐
              │   $25–$100  (200–300)                      │   base
              └────────────────────────────────────────────┘
```

The top tier moves the most money with the least labor. Don't ignore it.

### The 30-day founding-donor push

The first 90 days are when your network has maximum receptivity to the
"we just launched" pitch. Don't squander it.

**Process:**

1. **List 50 people** in your personal/professional network
2. Categorize by capacity: $50–$100 / $500–$2,500 / $5K+
3. Ask 10–15 per week, by text or call (not email)
4. Track responses in a spreadsheet
5. Send same-day handwritten thank-you to every donor
6. Convert first donors to recurring sustainers within 60 days

Target by Day 30: 25 founding donors, $5K–$25K raised.

### Personal asks vs. cold outreach

| Channel            |       Yes rate | Notes                          |
| ------------------ | -------------: | ------------------------------ |
| Personal text/call |         30–50% | Highest yield                  |
| Personal email     |         15–25% | Decent                         |
| Cold LinkedIn      |           1–3% | Low; only for major prospects  |
| Cold email         |         0.5–2% | Worst                          |
| Social media post  | <1% conversion | Brand-building, not direct ask |

The math: 100 personal asks → 30–50 donors. 100 cold emails → 0–2 donors.

### Year-end appeal

~30–40% of all annual individual giving lands in **November–December**.

Plan:

- October: build the appeal email
- November 15: first send
- December 1: follow-up
- December 15: final ask
- December 30: end-of-year reminder
- January: thank everyone who gave

Average year-end appeal yield for a small org with 200 donors: $5K–$15K.

---

## Chapter 16: Foundation grants and sponsor outreach

### Foundation grant landscape

| Type                                   | Timeline     | Y1 fit                     |
| -------------------------------------- | ------------ | -------------------------- |
| **Small rolling grants** ($5K–$25K)    | 2–4 months   | Yes — apply broadly        |
| **Mid-size cycle grants** ($25K–$100K) | 3–6 months   | Maybe — after track record |
| **Major grants** ($100K+)              | 6–12 months  | No in Y1; Y2+              |
| **Government grants**                  | 6–12+ months | No — heavy lift            |

**Year 1 target:** Apply for 2–4 small rolling grants. Land 1.

### Where to find grants

| Source                              | Cost          | Notes                              |
| ----------------------------------- | ------------- | ---------------------------------- |
| **Instrumentl**                     | $179/mo       | Best paid grant finder; free trial |
| **Candid Foundation Directory**     | $399/yr basic | Definitive source                  |
| **Grants.gov**                      | Free          | Federal grants only                |
| **GrantStation**                    | $99/yr        | Decent budget option               |
| **Goodstack**                       | Free          | Surfaces corporate-aligned grants  |
| **Your local community foundation** | Free          | Sometimes hidden gold              |

### Common Year 1 grants to consider (CA)

- **LA84 Foundation** — SoCal youth sports (rolling)
- **U.S. Soccer Foundation** — sport-specific federal grants
- **San Diego Foundation** — local community foundation
- **Conrad Prebys Foundation** — SD-specific
- **Good Sports** — equipment in-kind donations

### Corporate sponsorship pitch

Local businesses sponsor youth programs routinely. Frame:

> "Sponsor a [team / cohort / program] for our [Class of '26 / next
>
> > cohort]. $X funds [specific number] of kids for [specific time].
> > Your logo on [specific placement], recognition at [specific event],
> > named in our annual report. Pre-[major event] brand moment."

Y1 targets: 2–3 corporate sponsors at $5K–$25K each.

### Pro club / community foundation pools (worth special mention)

Pro sports teams often partner with community foundations to create
restricted grant pools for adjacent causes. Examples:

- MLS team commits $100K to local community foundation for youth-sports access
- NFL team partners with United Way on STEM education
- MLB team funds urban baseball through a community foundation

These pools are often less competitive than open RFPs because they're
purpose-built. Search "[your pro team] community foundation" to find.

---

## Chapter 17: Sustainer programs and recurring revenue

### Why sustainers matter more than one-time gifts

| Metric                     | One-time | Sustainer |
| -------------------------- | -------- | --------- |
| Average gift               | $100     | $50/mo    |
| Annual value               | $100     | $600      |
| 3-year LTV (avg retention) | $135     | $1,440    |

Sustainers are 10x more valuable over 3 years. They also compound:
each new sustainer adds to the recurring base.

### Sustainer program design

**Pricing tiers** (4 max):

- $25/mo "Field Friend" — entry, volume play
- $50/mo "First Touch" / your tagline tier — primary sustainer
- $100/mo "Season Sponsor"
- $250/mo "Founder's Circle"

Or simpler: single $50/mo tier with custom amount field. Less choice
= more conversions.

### Recruitment

- Default ask on donate page: $50/month
- Convert one-time donors with a 30-day follow-up email
- Tie to unit economics: "$50/mo funds one kid for one season"
- Recognition: quarterly updates, invitation to clinic/events

**Y1 target:** 25 sustainers = $15K recurring annual.

---

# Part VIII — Annual maintenance

## Chapter 18: The annual compliance calendar

### Calendar-year fiscal year (most common)

| Month        | What's due                                                         |
| ------------ | ------------------------------------------------------------------ |
| January      | Annual COI disclosures from directors; year-end appeal stewardship |
| February     | Bookkeeper closes prior year; tax prep begins                      |
| March        | Mid-year financial review; annual report drafting                  |
| April        | 990 preparation; financial statement preparation                   |
| **May 1–15** | **990-N or 990-EZ + RRF-1 + CT-TR-1 + FTB 199N (CRITICAL WINDOW)** |
| June         | Mid-year board meeting                                             |
| July         | Q2 review; foundation grant pipeline activity                      |
| August       | Vacation / planning                                                |
| September    | Q3 review; fall fundraising planning                               |
| October      | Year-end appeal preparation                                        |
| November     | Year-end appeal sent                                               |
| December     | Year-end appeal continues; SI-100 if biennial year                 |
| December 31  | Fiscal year close                                                  |

### Quarterly board meetings

Minimum: 1 per year (legally required in most states).
Recommended: 4 per year (quarterly).

Each meeting produces:

- Agenda (distributed in advance)
- Minutes (signed by Secretary)
- Resolutions (for major decisions)
- Financial reports (Treasurer)
- Program updates (President / staff)

Save in `org-documents/governance/[year]/`.

---

## Chapter 19: 990 filing thresholds and what happens at each

### Threshold transitions

When the org's gross receipts cross certain thresholds, the filing
requirements change:

| Gross receipts            | Form               | Complexity                    |
| ------------------------- | ------------------ | ----------------------------- |
| < $50K                    | 990-N (e-postcard) | 5 min, no CPA                 |
| $50K – $200K              | 990-EZ             | 2–4 hours, bookkeeper helpful |
| > $200K OR assets > $500K | Form 990 (full)    | CPA required                  |

### What changes at $200K

Once you cross $200K in revenue:

- Mandatory Form 990 (full)
- More detailed disclosures (Schedule A, etc.)
- Public-support test calculations
- Compensation disclosures for officers
- CPA review or audit becomes more important

### Audit thresholds

| Trigger                | Required action                         |
| ---------------------- | --------------------------------------- |
| CA revenue > $2M       | Annual audit (CA Code Civ. Proc. §1825) |
| Federal grant > $750K  | Single Audit (federal)                  |
| Many foundation grants | Audit per grant terms                   |

Most small nonprofits operate with **CPA review** (cheaper than audit)
until crossing the audit threshold. Cost: $1,500–$4,000 for review;
$5,000–$15,000 for full audit.

---

# Part IX — Scaling

## Chapter 20: When part-time becomes full-time

### The math of going full-time

For a founder to leave a day job and run the org full-time, the org
needs to be able to pay an Executive Director salary.

Realistic ED comp for small CA nonprofits: $60K–$90K.

Charity Navigator and grantmakers expect total comp <25–30% of revenue.

| Target ED comp | Min annual revenue | When realistic |
| -------------: | -----------------: | -------------- |
|           $60K |       ~$200K–$250K | Year 2–3       |
|           $75K |             ~$300K | Year 3         |
|           $90K |            ~$400K+ | Year 3–4       |

### The transition

1. Board approves comp policy with comparability data
2. Board adopts ED compensation amount via resolution
3. Founder gives notice at day job
4. Document everything in board minutes
5. Disclose on Form 990 Schedule J

### When to hire first part-time staff

Before going full-time, consider hiring a **part-time grant writer
or community organizer** at $25–$40/hr × 10–15 hrs/week
($15K–$30K/year). This buys you capacity Year 2 without committing
to a full ED salary.

### Multi-state fundraising

Once you solicit in multiple states, you need to register in each.
~41 states have requirements. Three approaches:

1. **DIY** — file each state's form individually (free, time-intensive)
2. **Unified Registration Statement (URS)** — one form, ~36 states accept (cheaper)
3. **Harbor Compliance** — service handles all 50 states (~$1,500/year)

For most small orgs: stay in your home state Year 1. Expand only when
you have donors or activities in another state.

---

# Part X — Staying compliant (the long game)

## Chapter 21: The compliance maintenance system

Most nonprofit guides hand you a checklist of forms and walk away.
What they don't tell you is how to actually **run** the compliance
machine month after month, year after year, without dropping the ball.

This chapter is the operating system.

### The mindset: compliance is routine, not crisis

Compliance failures don't happen because the rules are hard. They
happen because nothing was tracking the rules until it was too late.

Successful small nonprofits treat compliance like brushing teeth —
small, regular, low-effort actions that prevent expensive cleanups.

### Who's responsible (split the load)

| Role              | Compliance responsibilities                                                              |
| ----------------- | ---------------------------------------------------------------------------------------- |
| **President**     | Final accountability; signs off on annual filings                                        |
| **Secretary**     | Maintains corporate book, files SI-100, tracks board meetings, manages records retention |
| **Treasurer**     | Files 990s, RRF-1, CT-TR-1, FTB 199N, manages bookkeeping, signs financial reports       |
| **All directors** | Sign annual COI disclosures, review and approve annual filings                           |

If you only have 2 active officers, split intentionally. The worst
pattern: one person responsible for everything = single point of
failure.

### The compliance dashboard (what to track)

Build a simple spreadsheet (or Airtable) with one row per compliance
obligation:

| Obligation            | Due date | Responsible | Last filed | Next due   | Status          |
| --------------------- | -------- | ----------- | ---------- | ---------- | --------------- |
| IRS 990-N             | May 15   | Treasurer   | 2026-05-12 | 2027-05-15 | Current         |
| CA RRF-1              | May 15   | Treasurer   | 2025-05-10 | 2026-05-15 | Due in 30 days  |
| CA CT-TR-1            | May 15   | Treasurer   | 2025-05-10 | 2026-05-15 | Due in 30 days  |
| CA FTB 199N           | May 15   | Treasurer   | 2026-05-12 | 2027-05-15 | Current         |
| CA SI-100             | Biennial | Secretary   | 2026-05-13 | 2028-05    | Current         |
| FBN renewal           | 5 years  | Secretary   | 2026-06    | 2031-06    | Current         |
| Board annual meeting  | Annual   | President   | 2025-12-15 | 2026-12-15 | Due Q4          |
| COI disclosures       | Annual   | Secretary   | 2026-01-15 | 2027-01-15 | Current         |
| D&O insurance renewal | Annual   | Treasurer   | 2025-09-01 | 2026-09-01 | Due in 4 months |
| Bank reconciliation   | Monthly  | Treasurer   | 2026-04-30 | 2026-05-31 | Current         |

Review monthly. Anything in "Due soon" gets calendared.

### Monthly rhythm

**Time: 30–60 min/month**

- [ ] Treasurer reconciles bank account against bookkeeping
- [ ] Donor receipts confirmed sent for all gifts >$250
- [ ] New donations logged in CRM/spreadsheet
- [ ] Outstanding bills paid or scheduled
- [ ] Review compliance dashboard for anything coming due in next 60 days

### Quarterly rhythm

**Time: 2–4 hours/quarter**

- [ ] Board meeting held (with minutes, signed by Secretary)
- [ ] Quarterly financial report prepared by Treasurer
- [ ] Program metrics updated (kids funded, dollars granted, etc.)
- [ ] Donor stewardship: send update to all donors of record
- [ ] Major-gift pipeline review (prospects, current cultivations)
- [ ] Grant calendar reviewed (applications, reports due)
- [ ] Bank statement reviewed by President (separate-eyes principle)

### Annual rhythm (the May cliff)

**Time: 8–15 hours concentrated in May**

Block out May 1–15 every year. This is when everything is due.

- [ ] **By May 1:** Bookkeeper closes prior year. Year-end financials prepared.
- [ ] **By May 1:** Annual report drafted (one page minimum).
- [ ] **By May 7:** All directors sign annual COI disclosure.
- [ ] **By May 10:** Year-end financial statements approved by Treasurer.
- [ ] **By May 15 (THE CLIFF):** All four annual filings submitted:
  - [ ] IRS Form 990-N (or 990-EZ, or 990) — filed online
  - [ ] CA AG RRF-1 — filed online or by mail
  - [ ] CA AG CT-TR-1 — attached to RRF-1
  - [ ] CA FTB Form 199N — filed online
- [ ] **Every 2 years (biennial year):** CA SOS SI-100 — filed online
- [ ] **By May 31:** All confirmations downloaded and saved to `org-documents/[year]/`

### Annual maintenance beyond filings

- [ ] Board recruitment review (terms expiring, gaps to fill)
- [ ] Bylaws review (any needed amendments?)
- [ ] Conflict of Interest policy review
- [ ] Compensation policy review (if anyone is being paid)
- [ ] Insurance renewals (D&O, general liability, event)
- [ ] Domain renewals (website, email)
- [ ] Software/subscription renewals (Goodstack, Candid, etc.)

### Compliance recovery — when you've missed something

**Missed federal 990 filing(s)?**

- 1 year missed: file ASAP, minor or no penalty for 990-N filers
- 2 years missed: file both years ASAP
- 3+ years missed: status auto-revoked. Reinstate via Form 1023-EZ or
  Form 1024 with reinstatement reason. ~$275 + delay. Donations
  during revocation period are NOT tax-deductible.

**Missed CA RRF-1?**

- File ASAP with a $50 late penalty per missed year (caps at certain
  point depending on revenue tier)
- If multiple years missed, AG may issue Notice of Suspension —
  reinstate by filing all missed years + clearance fee

**Missed SI-100?**

- File ASAP. CA SOS charges $50 late penalty.
- If 2+ years late, entity may be suspended. File a Statement of
  Information AND pay reinstatement fee ($250–$500).

**SI-100 entity suspended?**

- File current SI-100
- Pay franchise tax / fees if applicable
- Submit revivor request to CA Franchise Tax Board (Form 3557)

**Bylaws never formally adopted?**

- Re-adopt at next board meeting. Document re-adoption in minutes.
- All current directors sign updated bylaws.
- Move forward; the IRS doesn't audit historical bylaws adoption gaps.

**Solicited without CA AG registration?**

- File CT-1 immediately. There's no mechanism to retroactively unwind
  past solicitations — but ongoing unregistered solicitation is the
  larger liability.

### The reverse-engineering check

Once a year, do this 15-minute health check:

1. **Look up your org on IRS EOS** (apps.irs.gov/app/eos). Status should be Active. PC classification. Latest 990 filed.
2. **Look up on CA AG Registry** (rct.doj.ca.gov). Status should be Current.
3. **Look up on CA SOS bizfile** (bizfileonline.sos.ca.gov). Status should be Active. SI-100 current.
4. **Spot-check 3 donor receipts.** Are they IRS-compliant?
5. **Confirm bank account** is in the org's name, with two-signature controls.

If any of those is off, fix immediately. These are what foundation
officers and journalists check first.

### How to file each compliance form — online vs. mail

Every filing has at least one channel, sometimes two. Online is almost
always faster and confirmable. Mail is sometimes required (FBN wet-ink
signature), sometimes optional, sometimes outright discontinued.

This section walks through each filing and how to actually submit it
both ways.

#### IRS Form 990-N (e-postcard) — ONLINE ONLY

**Mail:** No mail option. The IRS retired paper Form 990-N years ago.

**Online (the only way):**

1. Go to: https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard
2. Click "Submit Form 990-N (e-Postcard)"
3. Create an e-Postcard Profile (one-time setup)
4. Designate yourself as "Exempt Organization" (not "Preparer")
5. Add your EIN
6. Click "Create New Filing"
7. Fill 8 fields: tax year, end date, mailing address, principal officer,
   gross receipts confirmation (under $50K), website URL, name change?, terminated?
8. Submit. Confirmation email arrives within 24 hours.

**Time:** 10 minutes once profile is set up.
**Cost:** Free.
**Pitfall:** Can't backfile past years through the standard portal once
newer years are filed. Call IRS at 877-829-5500 for backfile help.

#### IRS Form 990-EZ — ONLINE preferred, MAIL allowed

**Online (preferred):**

For tax years 2019 and later, electronic filing is **mandatory** for
exempt organizations meeting certain thresholds. Most 990-EZ filers
must e-file.

How: use commercial software like:

- **TaxExempt.com** (~$50-$100 per filing)
- **Express990** (~$80 per filing)
- **File990.org** (~$80 per filing)

Or use a CPA who has e-filing capability.

**Mail (limited):**

If exempt from e-filing requirement, paper Form 990-EZ can be mailed to:

> Department of the Treasury
> Internal Revenue Service Center
> Ogden, UT 84201-0027

**Time:** 2–6 hours preparation (with bookkeeper).
**Cost:** Free filing; ~$60 software cost.

#### IRS Form 990 (full) — ONLINE MANDATORY

**Mail:** Not allowed for most filers after 2020. E-filing is mandatory
for nearly all 990 filers under Taxpayer First Act.

**Online:** Use a CPA with e-filing capability, or commercial nonprofit
tax software (~$200–$500 per filing).

**Time:** 8–25 hours (CPA-prepared).
**Cost:** $1,500–$5,000 for CPA preparation depending on complexity.

#### IRS Form 1023 / 1023-EZ — ONLINE ONLY

**Mail:** No longer accepted. Paper Form 1023 was retired in 2020.

**Online (the only way):**

1. Create a pay.gov account
2. Search the form (1023-EZ or 1023)
3. Complete the questions
4. Pay the user fee ($275 or $600)
5. Submit

**Time:** 1023-EZ: 1–2 hours. Full 1023: 8–20 hours (with attachments).
**Cost:** $275 (EZ) or $600 (full).
**Pitfall:** The form looks submitted before payment. Confirm payment processed.

#### CA Articles of Incorporation — ONLINE preferred, MAIL or IN PERSON allowed

**Online (preferred):**

1. Go to: https://bizfileonline.sos.ca.gov
2. Click "Register a Business"
3. Choose "Corporation (Nonprofit Public Benefit)"
4. Use form ARTS-PB-501(c)(3) (has IRS-required language preloaded)
5. Fill in: name, purpose, agent, directors, dissolution clause
6. Pay $30 + $5 (optional certified copy)
7. Submit. Processed in 2–4 weeks.

**Mail:**

Mail completed Form ARTS-PB-501(c)(3) (download from bizfile) to:

> Secretary of State
> Document Filing Support Unit
> P.O. Box 944228
> Sacramento, CA 94244-2280

Include $30 check made out to "Secretary of State."

**In Person (expedited):**

Drop off at any CA SOS office. Pay $30 + $350 expedited fee for same-day
processing. Useful only when you need the stamped Articles immediately
(rare).

**Time:** Online — 30 minutes. Mail — 30 minutes prep + 4–8 weeks wait.
**Cost:** $30 + $5 certified copy.

#### CA Statement of Information (SI-100) — ONLINE or MAIL

**Online (preferred):**

1. Go to: https://bizfileonline.sos.ca.gov
2. Search your entity, click "File a Statement of Information"
3. Update officers, directors, address, agent
4. Pay $20
5. Submit. Processed in 2–4 weeks.

**Mail:**

Mail completed Form SI-100 to:

> Secretary of State
> Statement of Information Unit
> P.O. Box 944230
> Sacramento, CA 94244-2300

Include $20 check.

**Time:** 15 minutes online.
**Cost:** $20.
**Pitfall:** Initial SI-100 due within 90 days of incorporation. Most
miss this short window.

#### CA AG Form CT-1 (Initial Charity Registration) — ONLINE preferred, MAIL allowed

**Online (preferred — the new Online Filing Service):**

1. Go to: https://oag.ca.gov/charities/initial-reg
2. Click "Online Filing Service" link
3. Create account
4. Start a New Registration
5. Fill 8 sections: org info, addresses, business conducted by, registered owners,
   signer info, activities, federal exemption, fundraising practices, disclosures
6. Upload: Articles of Incorporation + Bylaws + IRS Determination Letter (+ 1023 application)
7. Pay $50 by card
8. Submit. Processed in 7–30 days.

**Mail:**

Mail completed paper Form CT-1 + supporting documents + $50 check to:

> Registry of Charities and Fundraisers
> P.O. Box 903447
> Sacramento, CA 94203-4470

**Time:** Online — 1–2 hours. Mail — slightly longer due to assembly.
**Cost:** $50.
**Pitfall:** Online Filing Service is new — for some legacy registrants, mail is still required.

#### CA AG Form RRF-1 (Annual Registration Renewal) — ONLINE or MAIL

**Online (preferred):**

1. Log into OFS at oag.ca.gov/charities
2. Select "Annual Registration Renewal"
3. Update financials, officers, programs
4. Pay sliding-scale fee ($25–$1,200 by revenue tier)
5. Submit

**Mail:**

Mail completed Form RRF-1 + financial schedule + fee to:

> Registry of Charities and Fundraisers
> P.O. Box 903447
> Sacramento, CA 94203-4470

**Time:** 1–2 hours.
**Cost:** Sliding scale.
**Pitfall:** Due 4.5 months after fiscal year end (May 15 for calendar-year orgs).

#### CA AG Form CT-TR-1 (Annual Treasurer's Report) — Same channels as RRF-1

If you file 990-N (not 990 or 990-EZ), you must include CT-TR-1 with
your RRF-1 submission. Same channels: online via OFS or by mail.

**Cost:** Free (no separate fee).

#### CA FTB Form 199N — ONLINE ONLY

**Mail:** No mail option for 199N (CA FTB's parallel to federal 990-N).
The paper version is Form 199, which is for orgs that file 990 or
990-EZ (different threshold).

**Online:**

1. Go to: https://www.ftb.ca.gov/file/business/types/charities-nonprofits/
2. Click "File a 199N e-Postcard"
3. Log in with FTB account (or create one)
4. Confirm gross receipts under threshold ($50K)
5. Submit. Free.

**Time:** 10 minutes.
**Cost:** Free.

#### CA SD County FBN (Fictitious Business Name) — HYBRID required

**The unique one:** must combine online + physical.

**Online portion:**

1. Go to: https://arccfbn.sandiegocounty.gov
2. Click "Start a New FBN Filing"
3. Complete the form (business name, owner, address, type, signer)
4. Get a Kiosk Submission Number

**Physical portion (required):**

Must complete with wet-ink signature. Two paths:

**In person:**

- Print the form from the kiosk receipt
- Sign in pen
- Bring to East County Branch: 10144 Mission Gorge Rd, Santee 92071
  (Mon–Fri 8am–5pm)
- Pay ~$42 + $2.50 card surcharge
- Walk out with stamped/filed FBN same day

**By mail:**

- Print + sign
- Mail to: San Diego County Clerk-Recorder, P.O. Box 121750,
  San Diego, CA 92112-1750
- Include $54 check
- Wait 1–3 weeks for processing

**After filing (both paths):**

You have 30 days to start newspaper publication for 4 consecutive
weeks. Most newspapers handle this as a package (~$50–$150). The
newspaper files proof of publication with the County automatically.

**Time:** Online 20 min + in-person 30 min OR mail 20 min.
**Cost:** ~$54 county + $50–$150 newspaper = ~$100–$200 total.

#### Newspaper publication (FBN follow-up) — MAIL/PHONE

After filing your FBN, contact an approved SD County newspaper:

- **Daily Transcript** (~$50–$100)
- **La Prensa** (bilingual; ~$50–$100)
- **La Jolla Light** (~$80–$120)

Provide them with the filed FBN. They publish weekly for 4 weeks,
then file proof of publication with the County on your behalf.

**Time:** 15 minutes to set up.
**Cost:** $50–$150.

#### Charity registration in other states — VARIES

Each state has its own form, deadlines, and channels. Most are online
now (post-2020 modernization). The **Unified Registration Statement
(URS)** lets you use one form for 36 states, but each state still
requires separate fees and supplements.

**Easiest path for multi-state:** Harbor Compliance (https://www.harborcompliance.com)
or LabyrinthInc (https://labyrinthinc.com) — paid services that handle
multi-state registration filing, ~$1,500/year.

**Cheapest path:** Use URS for the 36 accepting states + file
state-specific forms for the rest (CA, FL, NY, OK, PA, TX, WV).

### The "compliance day" routine

If you do nothing else, run this routine **the second week of every
May.** It clears 4 of the 5 annual filings in one sitting.

**Block 4 hours. Have ready:**

- Prior year's gross receipts total
- Prior year's bank statements summary
- Current officer/director list
- Current address on file
- IRS EOS lookup of your org (to confirm current status)
- Credit card

**Order:**

1. **(1 hour) Federal 990-N** — irs.gov e-postcard. Submit.
2. **(1 hour) CA AG RRF-1 + CT-TR-1** — oag.ca.gov OFS. Submit.
3. **(30 min) CA FTB 199N** — ftb.ca.gov. Submit.
4. **(30 min) SI-100** — bizfile (if biennial year). Submit.
5. **(15 min) Confirmation downloads** — save each PDF receipt to `org-documents/[year]/compliance/`.
6. **(15 min) Update compliance dashboard** — mark each filing complete, calculate next due dates.

Done. You're compliant for another year. Move on with your life.

### When mail is unavoidable

Some filings still require physical mail:

- Bank deposits if you receive paper checks (you will)
- Insurance applications and policy renewals
- D&O insurance certificate of insurance requests
- Hard-copy IRS correspondence (audits, notices)
- Some donor recognition mail (thank-you notes)

Have a system:

- One physical inbox at home (or P.O. Box if privacy concerns)
- One outgoing-mail folder (stamps + envelopes)
- Scan everything to `org-documents/` after handling

### A note on registered agent service

If you list your home address as Agent for Service of Process on your
Articles, it becomes public record. Anyone can mail you legal documents.

For ~$120/year, services like **Northwest Registered Agent**,
**LegalZoom**, or **InCorp** handle this — they receive any legal mail
and scan/forward it to you. Worth it for privacy and reliability.

Update your Articles via amendment if you switch agents.

---

## Chapter 22: Year 2 and beyond — what hangs up established nonprofits

Chapter 1 covered the Year 1 traps. These are the ones that hit
established nonprofits — Year 2, Year 3, sometimes Year 5+. Less
famous, equally fatal.

### 1. Failing the public support test

The IRS requires 501(c)(3) public charities to demonstrate **at least
33% of revenue comes from broad public support** over a rolling
5-year window. Computed on **Schedule A** of Form 990.

**The trap:** Year 1 founder/family give 80% of donations. Year 2,
one major donor gives 60%. The rolling 5-year average creeps below
33% over time. The IRS reclassifies you as a Private Foundation
(more restrictive, higher excise tax).

**Fix:** Track public-support ratio annually. Aggressively diversify
revenue. No single donor exceeds 25% of any year's revenue.

### 2. Board member turnover too fast

You recruit a third director quickly to clear compliance. They burn
out in Year 2 and leave. You're back at 2 directors. Cycle repeats.

**Fix:** Recruit directors who match the org's actual current stage,
not who you wish you had. Stage the asks: Y1 is light-touch (one
annual meeting, sign a few docs). Y3+ is more involved. Set
expectations honestly upfront.

### 3. Board member turnover too slow

The opposite trap. Founding directors hold seats indefinitely. The
board doesn't refresh. New skills, new networks, new perspectives
never arrive.

**Fix:** Bylaws specify **term limits** — typically 2-year or 3-year
terms with a max of 2–3 consecutive terms. Forces healthy refresh
even when you don't want it.

### 4. Founder burnout

The single largest cause of small nonprofit death after Year 3.
Founder runs everything part-time, can't recruit replacement
capacity, eventually quits. Org dissolves.

**Fix:**

- Recruit board members who actually do work (not just oversight)
- Hire part-time grant writer or community organizer by Y2
- Document operations in playbooks
- Take time off (yes, really)

### 5. Mission creep

Donor offers $50K to fund something adjacent to your mission. You
take it. Now you're running a program you weren't built to run.
Repeat 4 times. Your mission is unrecognizable.

**Fix:** Have a **clear mission statement** and a **clear "we don't
do this" list.** Decline gifts that pull you off mission, even when
the dollars are real.

### 6. Donor concentration risk

90% of revenue comes from 2 donors. One leaves. You collapse.

**Fix:** No donor over 25% of revenue. Build a sustainer base early.
Diversify revenue streams.

### 7. Restricted vs. unrestricted ratio gone bad

Grant after grant is restricted to specific programs. Operating
expenses (rent, salaries, admin) aren't covered. You're cash-rich on
paper but can't pay the electric bill.

**Fix:**

- Ask for unrestricted general operating support (GOS) grants
- Charge appropriate program-related overhead to restricted grants
- Build an unrestricted reserve fund (6 months of operating expenses ideal)

### 8. First grant audit

A grantmaker requires a single-audit (Uniform Guidance 2 CFR 200) or
program audit. You've never been audited. You can't find half the
required documents. The audit takes 3 months and stresses everyone.

**Fix:** Build for audits from Day 1. Document everything. Keep
records 7 years. Establish CPA relationship before the audit is
required.

### 9. Co-founder splits

Two founders. One wants to scale, the other wants to stay small.
Or one wants to be paid, the other wants to keep volunteer. Conflict
escalates. One leaves with hard feelings.

**Fix:**

- Discuss Year 5 vision explicitly in Year 1
- Document roles and compensation philosophy in writing
- Conflict-resolution clause in bylaws
- Board independence (3rd unrelated director helps mediate)

### 10. Hiring the wrong first employee

You hire an "Executive Director" because it sounds important. They
turn out to be a fundraiser, not an operator. Or an operator, not
a fundraiser. Six months in, you've spent $40K and the org isn't
where you hoped.

**Fix:** Be specific about the role before hiring. "Executive
Director" is too vague. First hires should be either:

- **Grant writer** (if you need fundraising volume)
- **Program manager** (if you need operations)
- **Communications / community manager** (if you need brand)

Don't combine roles into one "ED" until the org is large enough to
support a real ED.

### 11. Brand outgrowing its original concept

Year 1 brand was "soccer for kids." Year 4, you're doing scholarships,
mentorship, tutoring, and college prep. Your brand says soccer only.
Donors confused.

**Fix:** Either re-brand explicitly (with board approval and
strategic intent), or focus the work back to the original scope.
Don't drift.

### 12. Multi-state expansion compliance

You raise from donors in 3 other states. Now you need to register in
each. ~$1,500/year compliance overhead, plus paperwork.

**Fix:**

- Use the Unified Registration Statement (URS) for multi-state filings
- Or hire Harbor Compliance to manage it
- Don't expand fundraising to other states without considering the cost

### 13. Endowment management when reserves grow

You build a reserve. It's $100K+. Now what? Sitting in a bank account
earning nothing isn't responsible. Investing requires policy,
oversight, and an investment manager.

**Fix:**

- Adopt an Investment Policy Statement (IPS) by board resolution
- Use a nonprofit-aligned advisor (Fidelity Charitable, Vanguard
  Charitable, local CFA)
- Start conservative: 60/40 stock/bond at first

### 14. Annual report fatigue

Year 1 annual report: passionate, detailed, beautiful. Year 4: late,
phoned in, generic. Donors notice.

**Fix:**

- Template the annual report so each year requires less new work
- Reuse photos, structure, metric formats year over year
- Designate one board member as annual report owner
- Treat it as a stewardship tool, not a vanity piece

### 15. The "we should pay you" moment

Year 3, donations support a salary. The board says "we should pay
the founder." This is right and good — but mishandled, it can trigger
IRS scrutiny for private inurement.

**Fix:**

- Board adopts Compensation Policy with comparability data
- Founder recuses from the compensation discussion
- Documented decision in minutes with comparability data attached
- Compensation reported on Form 990 Schedule J
- Comparability data: Form 990 of 3+ similar-sized nonprofits with similar roles

---

# Part XI — Tips, tricks, and lessons from the trenches

## Chapter 23: 50+ tips that save time, money, and pain

Practical hacks I'd tell a friend over beers. No fluff.

### Setup & filing

1. **Always use the PB-501(c)(3) version of the Articles** in California — has the IRS-required language pre-embedded. Saves a 6-month amendment cycle.
2. **Use Northwest Registered Agent ($120/year)** if you don't want to make your home address public.
3. **Apply for EIN the same day you file Articles.** Some banks ask for both before opening accounts.
4. **File 1023-EZ unless you genuinely don't qualify.** Saves $325 and 4–6 months vs the full 1023.
5. **List 3 directors in the Articles even though it's optional.** Sets the governance pattern from Day 1.
6. **Save every confirmation email** from every filing to one folder. You'll need them years later for audits, banks, and grants.
7. **The bizfile-stamped Articles take 2–4 weeks to come back.** Don't wait — apply for EIN immediately with the filed copy.
8. **File the initial SI-100 within 90 days of incorporation.** Set a calendar reminder the day you file Articles.

### Banking & financial

9. **Open the business bank account within 30 days.** Even with $0 in it.
10. **Mission Federal Credit Union is the easiest small-nonprofit bank in SD.** Wells Fargo and Chase work too.
11. **Set a two-signature requirement on checks >$1,000.** Cheap insurance against future fraud or mistakes.
12. **Don't use Venmo, Cash App, or Zelle for donations.** They don't issue compliant tax receipts and comingle personal/org funds.
13. **TechSoup for QuickBooks** — get QuickBooks for $60/year via the nonprofit discount.
14. **Issue donor receipts within 30 days.** Use the platform's auto-generated receipts (Zeffy, Givebutter both compliant).
15. **Annual donor statements in January.** Summary of the prior year's gifts. Donors love them.

### Donations & platforms

16. **Default to Zeffy in Year 1.** 0% fee. Save $5K–$10K vs Givebutter at $200K revenue.
17. **Install Double the Donation widget on the donate page.** Captures employer matches automatically. ~$300/year, adds 10–30% to total individual giving.
18. **Chariot DAF widget surfaces Donor-Advised Fund gifts.** High-net-worth donors often have $$$ parked in DAFs. ~$199/year.
19. **PayPal Giving Fund is free** and surfaces you in PayPal donor checkouts. Apply Day 1.
20. **Always include the org's EIN on the donate page.** Donors paste it into their tax software.

### Brand & website

21. **Buy `.org` first.** `.com` is for-profit by convention; `.org` is universally read as nonprofit.
22. **Get a domain email** (e.g., morgan@yourorg.org) Day 1. Gmail addresses tank credibility.
23. **Add llms.txt to your website.** Most don't; AI agents will treat you better if you do.
24. **Schema.org JSON-LD for the org and each program.** Foundation officers and AI agents both parse it.
25. **Don't pay for a "branding agency" in Year 1.** Fiverr at $150 produces fine logos.
26. **Update your LinkedIn profile to list the org as your work experience.** This auto-surfaces (or auto-creates) a Company Page.
27. **Claim or create your Candid profile Day 1.** Foundation officers look you up there before responding to outreach.

### Governance

28. **The Founding Board Meeting can be 60 minutes on Zoom.** Don't overthink the venue.
29. **Have all 5 policies signed at the Founding Board Meeting.** Saves a future "we have to do this" meeting.
30. **Term limits in bylaws** (2-year terms, max 2 consecutive). Forces healthy board refresh.
31. **The Secretary should NOT be the same person as the President.** California specifically prohibits this in many configurations.
32. **Every meeting needs minutes. Period.** Even a 15-minute call. Otherwise it didn't happen.
33. **Resolutions for major decisions** (bank changes, grants approved, hiring, etc.). Attach to minutes.

### Fundraising

34. **Personal asks have 30–50% yes rates.** Cold email has 1–3%. Always personal first.
35. **Don't ask in the first meeting** with a major-gift prospect. Cultivate over 3 meetings.
36. **Anchor your ask amount.** "Would you consider $5,000?" is the ceiling — donors give what you ask for.
37. **November–December is 30–40% of annual individual giving.** Plan year-end appeals starting in October.
38. **Always thank donors within 24 hours.** Handwritten note for $250+. Email for under.
39. **Convert one-time donors to sustainers at the 30-day mark.** Auto-email after first gift.
40. **Track every donor in a CRM (even a spreadsheet).** Name, gift amount, date, channel, notes. Building this from Day 1 saves years later.

### Grants

41. **Build a one-pager before applying for any grant.** PDF, attaches to every email.
42. **Most grant applications reuse the same 80% boilerplate.** Build it once.
43. **Always reference funder priorities by name** in the LOI. Lazy applications get rejected first.
44. **Specific dollar = specific outcome.** "$20,000 funds 8 scholarships" beats "we'd appreciate any support."
45. **Apply to small grants in parallel.** Don't wait for one decision before starting the next.
46. **Decline letters often include feedback.** Read them. Resubmit later.

### Compliance

47. **Block May 1–15 every year permanently.** That's compliance week. All annual filings hit.
48. **Use the same fiscal year as the calendar** unless you have a strong reason. Simplest.
49. **Save every filing confirmation to `org-documents/[year]/`.** Foundation officers ask for proof.
50. **Quarterly board meeting cadence beats annual.** More records, better governance, easier audit.

### Tech & tools

51. **Google Workspace for Nonprofits is free.** Apply Day 1.
52. **TechSoup gives you Microsoft, Adobe, QuickBooks discounts.** Apply Day 1.
53. **GitHub Pro for Nonprofits is free** — private repos for code.
54. **LinkedIn Premium for Nonprofits is discounted** — useful for recruiting board members and staff later.

### Personal energy management

55. **Don't operate on weekends if you have a day job.** Saturday/Sunday rest is what keeps Year 5+ possible.
56. **Mirella's energy ≠ your energy.** Schedule around both founders.
57. **Track 2 hours/week minimum.** Below that, momentum dies.
58. **Tell donors honestly when you're part-time.** "Side-project nonprofit" raises less than "operationally serious," but it also sets expectations honestly.
59. **The org will outlive you.** Build documentation so a successor could pick it up Year 5+.

### Mindset

60. **You don't need to be perfect to ask for money.** You need to be honest, specific, and grateful.
61. **The first donor is the hardest.** After that, you're not asking from zero.
62. **Foundation officers want to fund operators who execute.** Don't pitch grand vision; pitch boring execution.
63. **Most "no's" mean "not yet."** Stay in touch. Reapply.

---

# Part XII — The head-start playbook

## Chapter 24: Free & discounted programs to give your org a running start

Nonprofits have access to **billions of dollars** in free and
discounted software, services, ad credits, and operational tools.
Most founders don't know about it. The application process for each
takes 10–30 minutes. Total opportunity for a small org: easily
**$50,000–$150,000 in equivalent value per year.**

This chapter walks through the major programs, in the order I'd apply
to them.

### The verification chain — apply in this order

Most platforms verify your 501(c)(3) status through one of two
verification services: **Goodstack** (formerly Percent) or **TechSoup**.
Get verified by both early, and the downstream applications get
faster.

```
Day 1:   Apply to Goodstack + TechSoup (verifies your nonprofit status)
Day 2:   Apply to PayPal Giving Fund (free, surfaces you in PayPal flows)
Day 3:   Apply to Google for Nonprofits (free G Suite + $10K/mo Ad Grant)
Day 5:   Apply to Microsoft Tech for Social Impact (free Microsoft 365)
Day 7:   Apply to Canva for Nonprofits (free Canva Pro)
Day 10:  Apply to LinkedIn for Nonprofits
Day 14:  Apply to Adobe (via TechSoup)
Day 14:  Apply to Slack for Nonprofits
Day 14:  Apply to GitHub for Nonprofits
Day 20:  Apply to AWS Imagine Grant / Azure credits
Day 30:  Apply to Stripe nonprofit rate
Day 30:  Apply to LinkedIn Premium Recruiter discount
```

Most applications need: IRS Determination Letter, EIN, basic org info.
Have those ready in a folder.

### Goodstack — the gateway platform

**What it is:** A nonprofit verification platform formerly known as
Percent. Connects nonprofits to corporate giving programs (TikTok,
Atlassian, Canva, Asana, OpenAI, Zoom, and many more). Single
verification unlocks dozens of programs.

**Cost:** Free for nonprofits.

**URL:** https://goodstack.org

**How to sign up:**

1. Go to https://goodstack.org
2. Click "For Causes" → "Get Started"
3. Search for your org or claim it
4. Verify with IRS Determination Letter upload
5. Complete profile (mission, programs, location, contact)

**Time:** 30 min to apply; verification typically takes 1–3 business days.

**What you unlock once verified:**

| Partner program                         | What you get                                         | Value/yr |
| --------------------------------------- | ---------------------------------------------------- | -------: |
| **TikTok**                              | Eligible for TikTok for Good and corporate donations |   Varies |
| **Atlassian for Nonprofits**            | Free Jira, Confluence, Trello (up to 10 users)       |  ~$3,600 |
| **Canva for Nonprofits**                | Free Canva Pro                                       |    ~$120 |
| **Zoom**                                | Up to 50% off Zoom Pro                               |    ~$120 |
| **OpenAI**                              | Discounted ChatGPT Team plans                        |   Varies |
| **Adobe Acrobat Pro**                   | Discounted Adobe Acrobat                             |    ~$120 |
| **Asana**                               | 50% discount on select plans                         |    ~$300 |
| **Microsoft Office 365**                | Discounted Microsoft licenses                        |    ~$500 |
| **DocuSign**                            | Discounted eSignature                                |    ~$300 |
| **HubSpot**                             | Discounted CRM                                       |    ~$600 |
| **Various corporate matching programs** | Donor matching capability                            |   Varies |

**Total potential value: $5,000–$10,000+/year** in software discounts.

**Paid tier (Goodstack Plus / Verified):** Some founders see prompts
for a paid tier. As of 2026, the free tier is sufficient for most
small nonprofits — the corporate-partner discounts come with the free
verification. Only consider paid tiers if you have specific premium
needs.

### TechSoup — the software discount engine

**What it is:** Discounted software for nonprofits, including
QuickBooks, Microsoft Office, Adobe products, and many others.
Different from Goodstack — TechSoup focuses on direct software
discounts; Goodstack focuses on corporate giving partner connections.
Get both.

**Cost:** Some software requires small admin fees ($60 for QuickBooks
Online, etc.).

**URL:** https://www.techsoup.org

**How to sign up:**

1. Go to https://www.techsoup.org
2. Click "Register"
3. Complete the org verification
4. Upload IRS Determination Letter

**Time:** 30 min; verification 3–7 days.

**What's available:**

| Software                             |           TechSoup price |         Retail | Savings |
| ------------------------------------ | -----------------------: | -------------: | ------: |
| **QuickBooks Online for Nonprofits** |                 $60/year |     $300+/year |   $240+ |
| **Microsoft 365 Business Premium**   |            $36/user/year | $264/user/year |    $228 |
| **Adobe Creative Cloud All Apps**    |      $20/month admin fee |      $60/month | $480/yr |
| **Adobe Acrobat Pro DC**             |       $15/year admin fee |      $180/year |    $165 |
| **Bitdefender**                      |                 $30/year |       $90/year |     $60 |
| **Norton 360**                       |                 $20/year |       $50/year |     $30 |
| **Tableau**                          | Free (nonprofit license) |      $840/year |    $840 |

**Total potential value: $2,000–$8,000+/year** depending on usage.

### PayPal Giving Fund

**What it is:** PayPal's free nonprofit service. Once enrolled, your
org appears in PayPal donor checkout flows and PayPal's giving
search. Donations are processed through PayPal Giving Fund (a 501(c)(3))
and forwarded to your org with 100% no fee.

**Cost:** Free.

**URL:** https://www.paypal.com/us/fundraiser/charity

**How to sign up:**

1. Go to https://www.paypal.com/us/fundraiser/charity
2. Click "Enroll Your Charity"
3. Verify with PayPal Business account + IRS info
4. Complete enrollment

**Time:** 30 min; activation 2–3 business days.

**Value:** $2,000–$10,000+/year in incremental donations from PayPal
users who discover you through their giving search.

### Google for Nonprofits

**What it is:** Free Google Workspace (Gmail with custom domain,
Drive, Calendar, etc.) + free $10,000/month Google Ad Grant + YouTube
Nonprofit Program.

**Cost:** Free.

**URL:** https://www.google.com/nonprofits

**How to apply:**

1. Go to https://www.google.com/nonprofits
2. Sign in with a Google account
3. Click "Get Started"
4. Verify nonprofit status (via TechSoup verification or direct IRS)
5. Approval typically 2–14 days

**What you get:**

| Service                                                                           |                  Value/yr |
| --------------------------------------------------------------------------------- | ------------------------: |
| **Google Workspace** (Gmail + Drive + Calendar + Docs/Sheets for up to 100 users) |       $7,200/yr (if paid) |
| **Google Ad Grant** ($10,000/month in search ads)                                 | $120,000/yr if fully used |
| **YouTube Nonprofit Program** (link annotations, donation cards, etc.)            |                    Varies |
| **Google Earth & Maps for Nonprofits**                                            |                    Varies |

**Total potential value: $7,000–$130,000/year.**

**Note on Ad Grant:** Hard to fully use $10K/month. Realistic
"effective usage" for small nonprofits is $1,000–$5,000/month. Still
significant for free.

### Microsoft Tech for Social Impact

**What it is:** Free Microsoft 365 (Outlook, Word, Excel, PowerPoint,
OneDrive, Teams) for up to 300 users + Azure credits + Power Platform.

**Cost:** Free.

**URL:** https://www.microsoft.com/en-us/nonprofits

**How to apply:**

1. Go to https://www.microsoft.com/en-us/nonprofits
2. Click "Get Started"
3. Verify via TechSoup
4. Approval typically 5–10 business days

**What you get:**

| Service                                                                                            |             Value/yr |
| -------------------------------------------------------------------------------------------------- | -------------------: |
| **Microsoft 365 Business Premium** (Office + email for 10 users free, up to 300 users at discount) | $13,200/yr (if paid) |
| **Azure credits** ($3,500/year for nonprofits)                                                     |            $3,500/yr |
| **Power Platform** (Power BI, Power Apps)                                                          |            $9,600/yr |

**Total potential value: $10,000–$25,000/year.**

### LinkedIn for Nonprofits

**What it is:** Discounted LinkedIn services + LinkedIn Marketing
Solutions for Nonprofits + free Page tools.

**Cost:** Some discounts free, others reduced rate.

**URL:** https://www.linkedin.com/nonprofits

**What you get:**

| Service                 | Discount                                 |
| ----------------------- | ---------------------------------------- |
| **LinkedIn Recruiter**  | ~50% discount (~$95/month vs $200/month) |
| **LinkedIn Learning**   | Free for staff / volunteers              |
| **LinkedIn Ad Credit**  | $1,500/year ad credit                    |
| **LinkedIn Page Tools** | Free analytics + invite credits          |

**How to apply:** Verify through Goodstack or TechSoup first, then
contact LinkedIn for Nonprofits directly.

### Canva for Nonprofits

**What it is:** Free Canva Pro for verified nonprofits. Design
everything from logos to social posts to annual reports.

**Cost:** Free.

**URL:** https://www.canva.com/canva-for-nonprofits

**How to apply:**

1. Go to https://www.canva.com/canva-for-nonprofits
2. Submit verification through Canva's intake
3. Approval typically 3–7 days

**Value:** $120/year (Canva Pro retail) + huge productivity boost.

### Adobe for Nonprofits

**What it is:** Discounted Adobe Creative Cloud, Acrobat Pro, and
other Adobe products through TechSoup.

**Cost:** $20/month admin fee for All Apps (vs $60/month retail).

**URL:** https://helpx.adobe.com/buying-programs/non-profit-organizations.html

**How to apply:** Verify through TechSoup, then order Adobe products
through TechSoup's catalog.

**Value:** $480+/year in savings on Creative Cloud.

### Salesforce for Nonprofits (NPSP)

**What it is:** Up to 10 free Salesforce licenses for nonprofits +
free Nonprofit Success Pack (donor CRM, fundraising automation).

**Cost:** Free for the first 10 users.

**URL:** https://www.salesforce.org/products/nonprofit-cloud

**How to apply:**

1. Go to https://www.salesforce.org/power-of-us
2. Apply for the Power of Us Program
3. Verify via IRS Determination Letter
4. Approval typically 7–30 days

**Value:** $7,200/year (10 licenses × $720 retail). For donor
management, this is huge — BUT Salesforce has a steep learning curve.
Many small nonprofits underuse it. Consider HubSpot or Bloomerang
for simpler alternatives.

### HubSpot for Nonprofits

**What it is:** 40% off HubSpot CRM, Marketing Hub, and Sales Hub.

**Cost:** Reduced rate.

**URL:** https://www.hubspot.com/nonprofits

**How to apply:** Verify through Goodstack, then apply directly with
HubSpot.

**Value:** ~$1,200–$3,000/year in savings depending on plan.

### Mailchimp for Nonprofits

**What it is:** 15% discount on Mailchimp paid plans + free tier
sufficient for many small nonprofits (<500 contacts, 1,000 emails/month).

**Cost:** Free tier or 15% off paid.

**URL:** https://mailchimp.com/nonprofits

**How to apply:** Free tier requires no application. Discount applies
when you provide IRS Determination Letter to support.

### Slack for Nonprofits

**What it is:** Free Slack Standard plan for qualifying nonprofits.

**Cost:** Free.

**URL:** https://slack.com/help/articles/204368833-Slack-for-Nonprofits

**How to apply:**

1. Verify through TechSoup
2. Submit application through Slack's nonprofit form
3. Approval typically 5–14 days

**Value:** $7.25/user/month × users = significant for orgs with
volunteers/staff.

### GitHub for Nonprofits

**What it is:** Free GitHub Pro (private repos, advanced features)
for nonprofits.

**Cost:** Free.

**URL:** https://docs.github.com/en/github/site-policy/github-terms-for-additional-products-and-features

**How to apply:**

1. Verify via Goodstack or TechSoup
2. Apply directly through GitHub Education / Nonprofits page

**Value:** $48/user/year if paid.

### AWS Imagine Grant + AWS Credits for Nonprofits

**What it is:** AWS offers nonprofit credits + the Imagine Grant
program for cloud/tech grants.

**Cost:** Variable credits ($1,000–$5,000 for new nonprofits).

**URL:** https://aws.amazon.com/government-education/nonprofits

**How to apply:**

1. Open an AWS account
2. Apply for nonprofit credits through AWS Activate Nonprofit
3. For larger needs, apply to AWS Imagine Grant (annual cycle)

**Value:** $1,000–$5,000+ in AWS credits.

### Digital Ocean for Nonprofits

**What it is:** Free $250 credit for qualifying nonprofits.

**URL:** https://www.digitalocean.com/community/pages/nonprofits

**Value:** $250 one-time credit.

### Stripe Nonprofit Rate

**What it is:** Stripe charges nonprofits 2.2% + 30¢ per transaction
(vs 2.9% + 30¢ for for-profits).

**Cost:** Standard processing rate, reduced.

**URL:** https://stripe.com/docs/connect/special-considerations#nonprofits

**How to apply:** Email Stripe support with your IRS Determination Letter.

**Value:** ~0.7% savings on every donation processed through Stripe.

### Idealist.org

**What it is:** Free volunteer recruitment + paid job listings (with
nonprofit discount).

**Cost:** Volunteer listings free; job listings discounted.

**URL:** https://www.idealist.org

**Value:** Hundreds of dollars per hire if you'd otherwise use
LinkedIn or Indeed for recruitment.

### VolunteerMatch

**What it is:** Free volunteer recruitment platform.

**Cost:** Free for basic listings.

**URL:** https://www.volunteermatch.org

**Value:** Free volunteer acquisition channel.

### National Council of Nonprofits

**What it is:** Free national resource library, advocacy, governance
templates.

**Cost:** Free resources; some state association membership has fees.

**URL:** https://www.councilofnonprofits.org

**What you get:** Best free repository of governance templates,
state-by-state guides, sample policies, salary surveys, and
operational best practices. Should be your first stop for any
governance question.

### CalNonprofits (California Association of Nonprofits)

**What it is:** California's statewide nonprofit association. Free
resources, membership benefits, advocacy.

**Cost:** Free resources + tiered membership ($75–$1,000/year by
revenue).

**URL:** https://calnonprofits.org

**Value:** State-specific compliance guidance, networking, advocacy
voice. Worth the small membership fee once revenue justifies.

### Bloomerang for Small Nonprofits

**What it is:** Donor CRM with simpler onboarding than Salesforce.

**Cost:** Starts at $99/month for small orgs (under 1,000 contacts).

**URL:** https://bloomerang.co

**Value:** Donor management without Salesforce's learning curve.
Many small nonprofits prefer this once they outgrow spreadsheets.

### Free or low-cost grant research

| Tool                                   |                   Cost | Notes                              |
| -------------------------------------- | ---------------------: | ---------------------------------- |
| **Grants.gov**                         |                   Free | Federal grants only                |
| **Instrumentl**                        | $179/month, free trial | Best paid grant finder             |
| **Candid Foundation Directory Online** |        $399/year basic | Industry standard                  |
| **GrantStation**                       |               $99/year | Budget option                      |
| **Goodstack**                          |                   Free | Surfaces corporate-aligned funding |

### How to use this chapter

**Week 1 of your launch:**

- Apply to Goodstack
- Apply to TechSoup
- Apply to PayPal Giving Fund
- Apply to Google for Nonprofits

**Month 1:**

- Apply to Microsoft Tech for Social Impact
- Apply to Canva for Nonprofits
- Apply to Slack for Nonprofits
- Apply to GitHub for Nonprofits

**Month 2–3:**

- Set up Stripe nonprofit rate
- Apply to LinkedIn for Nonprofits programs
- Apply to AWS credits (if relevant)
- Apply to Salesforce NPSP (or HubSpot, depending on needs)

**Ongoing:**

- Monitor Goodstack for new partner programs
- Apply to grants surfaced through Candid/Instrumentl
- Renew annual applications (some require yearly re-verification)

### The verification cost: 6 hours, total head-start: $30,000+

Roughly 6 hours of total application effort across all these programs
unlocks $30,000–$150,000+ in equivalent software, services, and ad
credits per year. That's $5,000–$25,000/hour effective rate. Best ROI
your nonprofit will ever see.

Apply to all of them early. Don't wait until "you need them" — many
are time-sensitive applications or require operational track record
that takes months to build.

---

# Appendices

## Appendix A: Required documents checklist

### Founding documents (created once, kept forever)

- [ ] Articles of Incorporation (state-stamped)
- [ ] IRS Determination Letter
- [ ] EIN Confirmation Letter (CP 575)
- [ ] Bylaws (signed and dated by all directors)
- [ ] Conflict of Interest Policy (signed)
- [ ] Document Retention Policy (signed)
- [ ] Whistleblower Policy (signed)
- [ ] Compensation Policy (signed)
- [ ] Gift Acceptance Policy (signed)
- [ ] Founding Board Meeting Minutes
- [ ] All board resolutions to date
- [ ] DBA / FBN filing (if applicable)

### Annual filings (one folder per year)

- [ ] IRS Form 990-N / 990-EZ / 990
- [ ] CA RRF-1 + CT-TR-1
- [ ] CA FTB Form 199N
- [ ] Annual COI disclosures from each director
- [ ] All board meeting minutes that year
- [ ] Annual financial statements
- [ ] Annual Report (for donors)
- [ ] Bank statements (monthly)

### Compliance / external

- [ ] CT-1 Initial Registration receipt + AG Registry CT number
- [ ] CA Statement of Information (SI-100) filings (biennial)
- [ ] Goodstack verification confirmation
- [ ] PayPal Giving Fund enrollment confirmation
- [ ] Donation platform setup confirmation
- [ ] Bank account opening documents
- [ ] D&O insurance certificate (when obtained)
- [ ] General liability insurance certificate

### Programs / operations

- [ ] Partner agreements
- [ ] Recipient files (with consent forms)
- [ ] Photo/media releases (per use)
- [ ] Event documents (insurance, venue, vendors)
- [ ] Donor records (CRM export)
- [ ] Grant applications and award letters

---

## Appendix B: Tools, platforms, and links (with current 2026 pricing)

### Government / filing sites

| Tool                    | URL                                                                                                                                 |                Cost (2026) |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------: |
| CA SOS bizfile          | https://bizfileonline.sos.ca.gov                                                                                                    |   $30 Articles, $20 SI-100 |
| IRS 1023-EZ application | https://www.pay.gov/public/form/start/62759871                                                                                      |                       $275 |
| IRS 1023 application    | https://www.pay.gov/public/form/start/56716122                                                                                      |                       $600 |
| IRS Exempt Org Search   | https://apps.irs.gov/app/eos                                                                                                        |                       Free |
| IRS 990-N filing        | https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard |                       Free |
| CA AG OFS               | https://oag.ca.gov/charities                                                                                                        | $50 CT-1, $25–$1,200 RRF-1 |
| CA AG Registry Search   | https://rct.doj.ca.gov                                                                                                              |                       Free |
| CA FTB 199N             | https://www.ftb.ca.gov/file/business/types/charities-nonprofits/                                                                    |                       Free |
| SD County FBN           | https://arccfbn.sandiegocounty.gov                                                                                                  |                       ~$42 |

### Donation platforms

| Tool                | URL                                          |      Cost (2026) |
| ------------------- | -------------------------------------------- | ---------------: |
| Zeffy               | https://www.zeffy.com                        |  0% (donor tips) |
| Givebutter          | https://givebutter.com                       |    2.9% + Stripe |
| Donorbox            | https://donorbox.org                         | 1.5% (free tier) |
| PayPal Giving Fund  | https://www.paypal.com/us/fundraiser/charity |             Free |
| Chariot (DAF)       | https://givechariot.com                      |        $199/year |
| Double the Donation | https://doublethedonation.com                |        $300/year |

### Banking

| Bank                         | URL                                                                         |
| ---------------------------- | --------------------------------------------------------------------------- |
| Mission Federal Credit Union | https://www.missionfcu.org                                                  |
| Wells Fargo Nonprofit        | https://www.wellsfargo.com/biz/business-banking/business-checking/nonprofit |
| Chase Business               | https://www.chase.com/business                                              |

### Bookkeeping

| Tool                             | URL                      |           Cost (2026) |
| -------------------------------- | ------------------------ | --------------------: |
| QuickBooks Online for Nonprofits | https://www.techsoup.org | $60/year via TechSoup |
| Wave                             | https://www.waveapps.com |                  Free |
| Aplos                            | https://www.aplos.com    |            $40+/month |

### Nonprofit registries

| Tool                     | URL                         | Cost (2026) |
| ------------------------ | --------------------------- | ----------: |
| Candid                   | https://candid.org          |        Free |
| GreatNonprofits          | https://greatnonprofits.org |        Free |
| Goodstack                | https://goodstack.org       |        Free |
| BBB Wise Giving Alliance | https://give.org            |        Free |

### Free nonprofit resources

| Tool                              | URL                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------- |
| TechSoup (software discounts)     | https://www.techsoup.org                                                                       |
| Google for Nonprofits             | https://www.google.com/nonprofits                                                              |
| LinkedIn for Nonprofits           | https://www.linkedin.com/nonprofits                                                            |
| GitHub Pro for Nonprofits         | https://docs.github.com/en/github/site-policy/github-corporate-terms-of-service-for-nonprofits |
| Council of Nonprofits (templates) | https://www.councilofnonprofits.org                                                            |

### Grant finders

| Tool                        | URL                         | Cost (2026) |
| --------------------------- | --------------------------- | ----------: |
| Instrumentl                 | https://www.instrumentl.com |  $179/month |
| Candid Foundation Directory | https://candid.org/fdo      |   $399/year |
| GrantStation                | https://grantstation.com    |    $99/year |
| Grants.gov (federal)        | https://www.grants.gov      |        Free |

### Legal templates

| Source                              | URL                                                                                       |
| ----------------------------------- | ----------------------------------------------------------------------------------------- |
| Council of Nonprofits sample bylaws | https://www.councilofnonprofits.org/running-nonprofit/governance-leadership/sample-bylaws |
| IRS COI policy template             | https://www.irs.gov/pub/irs-tege/eotopicz03.pdf                                           |
| BoardSource governance resources    | https://boardsource.org                                                                   |

---

## Appendix C: Common mistakes and how to fix them after the fact

### "I never adopted my bylaws formally"

**Fix:** Hold a board meeting, formally re-adopt the bylaws with all
directors signing a fresh dated copy. Document the re-adoption in the
minutes.

### "I solicited donations before filing CT-1"

**Fix:** File CT-1 now. There's no formal mechanism to "unwind" past
solicitations — but ongoing solicitation without registration is the
real liability. The CA AG generally doesn't pursue retroactive penalties
for orgs that get into compliance.

### "I missed a 990 filing year"

**Fix:** File the missing year's 990 (or 990-N) as soon as possible.
For 990-N, the IRS portal lets you backfile prior years (sometimes
requires phone support). Three consecutive missed years = auto-revocation,
which is much worse than one missed year.

### "I'm operating under a name not in my Articles"

**Fix:** File a DBA (Fictitious Business Name Statement) in your
county. Brings legal and public-facing names into alignment.

### "I only have 2 directors"

**Fix:** Recruit a third. Hold a board meeting (just the two of you
counts for the initial recruitment vote), formally appoint the new
director by resolution. Update bylaws if needed.

### "I've been paying org expenses from my personal account"

**Fix:** Stop. Open the business bank account. Submit an expense
report listing past out-of-pocket payments. The board approves
reimbursement at the next meeting.

### "I lost my Determination Letter"

**Fix:** Request a duplicate via IRS Form 4506-A (free, 60–90 days).
Or pull a copy from the IRS Exempt Organization Search.

### "My SI-100 is years overdue"

**Fix:** File now via bizfile. Late fees may apply ($50 typically).
The "Statement of Info Due Date" display catches up after processing.

### "I didn't know about CA FTB Form 199N"

**Fix:** File the current year now. Backfile prior years if possible.
The FTB is generally lenient with first-time mistakes by small orgs.

### "I haven't signed any COI policies"

**Fix:** Adopt the COI policy at your next board meeting. Have all
directors sign. Have each director complete an annual disclosure form.

---

## Appendix D: State-by-state quick reference

This guide focuses on California. Other states have different
specifics. Here are the key differences for the top 10 nonprofit
states:

### Minimum directors

| State             | Minimum directors |
| ----------------- | ----------------: |
| **California**    |                 3 |
| **New York**      |                 3 |
| **Texas**         |                 3 |
| **Florida**       |                 3 |
| **Illinois**      |                 3 |
| **Pennsylvania**  |                 1 |
| **Ohio**          |                 3 |
| **Georgia**       |                 1 |
| **Michigan**      |                 3 |
| **Massachusetts** |                 3 |

### Charity solicitation registration

~41 states require it. Notable exceptions: Indiana, Iowa, Idaho, Montana,
Nebraska, South Dakota, Texas, Vermont, Wyoming.

### State charity audit thresholds

- California: $2M revenue → audit required
- New York: $1M revenue → audit required
- Florida: $1M revenue → audit required
- Illinois: $300K revenue → audit required
- Texas: no state audit requirement

---

## Appendix E: Recommended further reading

- **Council of Nonprofits** (https://councilofnonprofits.org) — best free resource
- **BoardSource** (https://boardsource.org) — governance deep dives
- **National Council of Nonprofits — State Policy Watch** — state-by-state changes
- **Nonprofit Quarterly** (https://nonprofitquarterly.org) — sector journalism
- **Stanford Social Innovation Review** (https://ssir.org) — strategy + academic
- **"The Nonprofit Kit for Dummies"** by Stan Hutton & Frances Phillips — surprisingly solid intro
- **"Forces for Good"** by Crutchfield & Grant — case studies of effective nonprofits

---

## Appendix F: Glossary of nonprofit terms (130+ definitions)

A reference dictionary in plain language. Search this when you encounter
a term that doesn't quite make sense.

### Legal & tax structure

**501(c)(3)** — A specific section of the U.S. tax code that grants
tax-exempt status to organizations operating exclusively for
charitable, educational, religious, scientific, or literary purposes.
The most common nonprofit tax category. Donations are tax-deductible.

**501(c)(4)** — Tax-exempt status for social welfare organizations and
civic leagues. Can lobby and engage in political advocacy. Donations
are NOT tax-deductible.

**501(c)(5), (c)(6), (c)(7)** — Tax categories for labor unions (c)(5),
trade/business associations (c)(6), and social/recreational clubs
(c)(7). All are "nonprofits" but none are charities.

**Articles of Incorporation** — The legal document filed with the
state that creates a corporation. For California nonprofits, the form
is ARTS-PB-501(c)(3).

**Bylaws** — The internal governing document of the corporation.
Defines how the board operates, officer roles, meeting requirements,
voting procedures, fiscal year, etc.

**Determination Letter** — The official IRS letter granting 501(c)(3)
status. Issued after the IRS approves Form 1023 or 1023-EZ. The most
important document the org owns.

**EIN (Employer Identification Number)** — The IRS-issued federal tax
ID for the organization. Free to obtain at irs.gov.

**Fiscal Sponsor / Fiscal Sponsorship** — An arrangement where an
established 501(c)(3) (the fiscal sponsor) accepts donations on behalf
of a project that lacks 501(c)(3) status. Common during early stages
before full incorporation. The sponsor typically charges 5–10% admin fee.

**Group Exemption** — An IRS provision where a parent organization
covers tax-exempt status for subordinate organizations. Rare in small
nonprofits.

**Mutual Benefit Corporation** — A type of nonprofit that primarily
serves its members (e.g., homeowners associations). Not typically
501(c)(3).

**Private Foundation** — A 501(c)(3) classification (vs. public
charity) where funding comes primarily from a single source. Stricter
rules, higher excise taxes, more restrictions on payouts and grants.

**Private Inurement** — The IRS prohibition on insiders (directors,
officers, founders) personally benefiting from the org's resources
beyond reasonable compensation. Violations risk loss of tax-exempt
status.

**Public Benefit Corporation** — California's term for nonprofit
corporations operating for a public/charitable purpose. The default
type for 501(c)(3)s.

**Public Charity** — A 501(c)(3) classification (vs. private
foundation) requiring broad public support. Less restrictive, lower
excise taxes.

**Public Support Test** — IRS requirement that at least 33⅓% of
revenue comes from broad public support over a rolling 5-year window.
Calculated on Schedule A of Form 990. Failure can result in
reclassification as a private foundation.

**Religious Corporation** — Subtype of nonprofit corporation for
churches, synagogues, mosques, and other religious institutions.
Special tax considerations apply.

**Tax-deductible** — Donations donors can deduct from their taxable
income on their federal return. Applies to 501(c)(3) but not most
other 501(c) categories.

**Tax-exempt** — Status meaning the organization doesn't pay federal
income tax on revenue related to its exempt purpose.

**UBI / UBIT (Unrelated Business Income / Tax)** — Income from
activities unrelated to the org's exempt purpose. Taxed at corporate
rates via Form 990-T. Threshold: $1,000 in gross UBI per year.

**Unincorporated Association** — A nonprofit operating without formal
incorporation. Legal but exposes founders to personal liability.
Avoid for any serious work.

### Forms & filings

**Form 990** — The full annual federal tax return for tax-exempt
organizations. Required when gross receipts > $200,000 or assets >
$500,000. Public record.

**Form 990-EZ** — Shorter version of Form 990 for mid-size orgs with
gross receipts $50K–$200K and assets < $500K.

**Form 990-N (e-Postcard)** — Electronic notice required for small
tax-exempt orgs with gross receipts ≤ $50K. Free, online-only, takes
10 minutes.

**Form 990-PF** — Annual return for private foundations.

**Form 990-T** — Tax return for unrelated business income (UBI).

**Form 1023** — Application for Recognition of Exemption under
Section 501(c)(3). The full version. $600 user fee.

**Form 1023-EZ** — Streamlined version of Form 1023 for organizations
expecting < $50K annual receipts. $275 user fee, faster processing.

**Form 1024** — Application for Recognition of Exemption for non-(c)(3)
categories (c)(4) through (c)(29).

**Form 4506-A** — Request for duplicate copy of IRS Determination Letter.

**Schedule A** — Form 990 schedule documenting public charity status
and public support test.

**Schedule B** — Form 990 schedule listing major contributors. Public
information except donor names (redacted from public disclosure).

**Schedule J** — Form 990 schedule disclosing officer/director/key
employee compensation.

**Schedule M** — Form 990 schedule for non-cash contributions.

**Schedule O** — Form 990 schedule for narrative explanations.

**Schedule R** — Form 990 schedule for related organizations and
unrelated partnerships.

**SS-4** — IRS form to apply for an EIN.

### California-specific forms

**ARTS-PB-501(c)(3)** — CA Articles of Incorporation for a Nonprofit
Public Benefit Corporation with 501(c)(3) language pre-embedded.

**Form 199 / 199N** — California's annual exempt org return. 199N is
the e-postcard equivalent of federal 990-N.

**Form 3500 / 3500A** — California exemption application. 3500A is
streamlined for organizations with federal 501(c)(3) status.

**Form CT-1** — California Attorney General initial charity
registration. $50 fee.

**Form CT-TR-1** — California Attorney General Annual Treasurer's
Report. Required if filing 990-N (not full 990).

**Form RRF-1** — California Attorney General Annual Registration
Renewal. Sliding-scale fee ($25–$1,200 by revenue).

**Form SI-100** — California Secretary of State Statement of
Information for nonprofit corporations. Biennial, $20.

**Form FTB 3557** — Revivor request to restore an FTB-suspended entity.

### Governance

**Board of Directors** — The governing body of a nonprofit
corporation. Required by state law (3+ in California).

**Conflict of Interest** — A situation where a director's personal
interests could influence their judgment on org matters. Must be
disclosed and managed via recusal.

**Director** — A member of the Board of Directors. Has voting rights
on board matters and fiduciary duties.

**Duty of Care** — A director's legal obligation to make informed
decisions in good faith, with the same care a reasonable person would.

**Duty of Loyalty** — A director's legal obligation to act in the
org's best interest, not personal interest.

**Duty of Obedience** — A director's legal obligation to ensure the
org operates within its stated mission and applicable laws.

**Executive Director (ED)** — Typically the chief paid staff position
in a nonprofit. May or may not also serve on the board.

**Fiduciary Duty** — A director's legal obligation to act in the org's
best interest. Comprises duty of care, loyalty, and obedience.

**Indemnification** — Org commitment to defend directors and officers
against lawsuits related to their service, except in cases of bad faith
or self-dealing.

**Officer** — A corporate role with specific responsibilities (President,
Secretary, Treasurer, CEO, CFO). Officers may or may not also be directors.

**Quorum** — The minimum number of directors required to be present
for a meeting to be valid. Typically a majority (e.g., 2 of 3 directors).

**Term Limit** — Bylaw restriction on how long a director can serve.
Typically 2-year terms with a max of 2–3 consecutive terms.

**Volunteer Director** — A director who serves without compensation.
Standard for small nonprofits and protected by volunteer immunity
statutes in most states.

**Voting Member** — In some nonprofits, members (not just directors)
have voting rights on bylaws changes, board elections, etc. Most small
nonprofits don't have voting members.

### Fundraising

**Annual Appeal** — Year-end fundraising email or letter campaign
asking for one-time donations. Typically November–December.

**Bequest** — A gift made through a will to the organization.

**Capacity Building Grant** — Foundation grant aimed at strengthening
the org's infrastructure (vs. funding specific programs).

**Constituent Relationship Management (CRM)** — Software tracking
donors and their interactions. Examples: Bloomerang, Salesforce NPSP,
HubSpot, even a well-organized spreadsheet.

**Cultivation** — The process of building a relationship with a major
donor before making an ask. Typically 3–6 months for major gifts.

**Donor-Advised Fund (DAF)** — An individual's charitable giving
account managed by a sponsor (Fidelity Charitable, Schwab Charitable,
local community foundation). Donors contribute, get the tax deduction,
then recommend grants from the fund.

**Endowment** — A fund where the principal is invested and only the
earnings are spent. Provides long-term financial stability.

**General Operating Support (GOS) / Unrestricted Grant** — A grant
the nonprofit can use for any expense (rent, salaries, programs).
The most flexible type.

**Gift Acceptance Policy** — Internal policy stating what types of
gifts the org will and won't accept (e.g., real estate, crypto, gifts
with strings attached).

**Grant Cycle** — The recurring window when a foundation accepts
applications. Some are rolling (always open), others have specific
deadlines (e.g., annual cycle).

**In-Kind Donation** — Non-cash contribution (equipment, services,
goods). Valued at fair market value for accounting.

**Letter of Inquiry (LOI)** — Short (1–3 page) preliminary grant
proposal sent before a full application. Lets the funder gauge fit
before either party invests heavy time.

**Major Gift** — A donation large enough to require special
cultivation and stewardship. Threshold varies by org; for small
nonprofits, often $1,000–$10,000+.

**Matching Gift** — When an employer matches an employee's donation
to a nonprofit, doubling (or sometimes tripling) the impact. Tools
like Double the Donation surface these.

**Pledge** — A donor's commitment to give over multiple installments
(e.g., $10K spread across 5 years).

**Planned Giving** — Donations arranged during the donor's lifetime
that take effect later (wills, trusts, beneficiary designations).

**Program Officer** — A foundation staff member responsible for a
specific funding area. Typically the decision-maker on grant
applications in that area.

**Recurring Donor / Sustainer** — A donor who gives a set amount
monthly or annually. High lifetime value due to retention.

**Request for Proposals (RFP)** — A formal foundation call for grant
applications on a specific topic.

**Restricted Grant** — A grant that must be used for specific
purposes (a program, a project, a population). Less flexible than
unrestricted.

**Sliding-Scale Fee** — A fee structure where the cost varies by
income or revenue. CA AG RRF-1 uses this for renewal fees.

**Stewardship** — Ongoing communication with donors after they give
(thank-yous, impact updates, invitations). Drives retention.

**Sustainer Program** — A structured recurring giving program with
a brand name (e.g., "First Touch," "Founder's Circle").

**Year-End Appeal** — The November–December fundraising push. Captures
30–40% of annual individual giving for most nonprofits.

### Programs & operations

**Annual Report** — A summary document published each year
highlighting programs, impact, financials, and donors. A stewardship
tool, not legally required.

**Capacity Building** — Activities that strengthen the organization
itself (governance, staff training, systems) as opposed to direct
programs.

**Direct Service** — Programs that directly serve beneficiaries (e.g.,
funding scholarships, providing meals).

**Impact** — The long-term societal change produced by the org's
work. Hardest metric to measure; most important to communicate.

**Logic Model** — A diagram showing inputs → activities → outputs →
outcomes → impact. Foundation officers love these.

**Mission Statement** — A short statement of the org's purpose. Should
be specific enough to guide decisions.

**Outcome** — The measurable change in beneficiaries from the org's
work (e.g., "85% of recipients retained in soccer through U14").

**Output** — What the org produces or delivers (e.g., "47 scholarships
awarded in 2026").

**Program Service** — A specific activity or set of activities the
org delivers to beneficiaries. Reported on Form 990 Part III.

**Strategic Plan** — A multi-year document outlining goals,
strategies, and how to measure success. Foundation officers ask for it.

**Theory of Change** — A narrative explaining how and why the org's
work leads to desired social change. Often paired with a logic model.

**Vision Statement** — A short statement of the future the org is
working toward (e.g., "Soccer should be free for every kid in
America").

### Compliance & oversight

**Annual Filing** — Recurring forms due to state and federal agencies.
Federal: 990 series. State: varies (e.g., CA RRF-1, SI-100).

**Audit** — Independent financial examination by a CPA, more rigorous
than a review. Required by CA when revenue > $2M.

**Automatic Revocation** — IRS automatic loss of 501(c)(3) status
after 3 consecutive missed 990 filings. Reinstatement requires Form
1023-EZ + cause statement.

**Charitable Trust** — A trust structured for charitable purposes,
overseen in California by the AG Registry.

**Compliance Calendar** — A schedule tracking all filing deadlines,
board meetings, and policy reviews.

**CPA Review** — A limited financial examination, less rigorous than
audit. Cost: $1,500–$4,000 typically.

**D&O Insurance (Directors & Officers)** — Insurance covering legal
defense for directors and officers in lawsuits. Standard for any
serious nonprofit. Cost: $500–$1,500/year for small orgs.

**General Liability Insurance** — Insurance covering bodily injury
and property damage at org events. Required for most public events.

**Independent Director** — A board member with no financial or family
relationship to the org or other directors. Required for IRS
"independent board" classification.

**IRS Exempt Organization Search (EOS)** — Public database at
apps.irs.gov/app/eos showing every org's 501(c)(3) status, latest
990, and determination letter.

**Pub 78 (Publication 78)** — IRS-maintained list of organizations
eligible to receive tax-deductible contributions.

**Public Disclosure** — IRS requirement that Forms 990, 1023, and
determination letters be available to the public on request.

**Registered Agent / Agent for Service of Process** — The
person/entity designated to receive legal documents on the org's
behalf. Required by state law.

**Reinstatement** — The process of restoring 501(c)(3) status after
auto-revocation. File Form 1023-EZ with reinstatement cause.

**Solicitation** — Any request for charitable donations. Most states
require registration before soliciting.

**Statement of Information (SI)** — Annual or biennial corporate
filing updating officers, directors, address. State-specific naming.

**Suspended (Corporate)** — Status when an entity has failed to make
required filings. Operations limited until reinstated.

**Suspended (FTB)** — California Franchise Tax Board suspension for
failure to file or pay. Requires revivor application.

**Unified Registration Statement (URS)** — Multi-state charity
registration form accepted by 36 states. Each state still requires
separate fees and supplements.

### Tech & platforms

**Candid** — The major nonprofit information clearinghouse, formed
in 2019 from the merger of GuideStar and Foundation Center. Hosts
profiles, foundation directories, and the Bronze→Silver→Gold→Platinum
transparency seal.

**Goodstack** — Free platform that verifies nonprofit status and
connects orgs to corporate giving programs (TikTok, Atlassian, Canva,
etc.).

**PayPal Giving Fund** — PayPal's free service surfacing nonprofits
in donor checkout flows.

**TechSoup** — Provides discounted software (Microsoft, Adobe,
QuickBooks) to verified nonprofits.

**Zeffy** — 0%-platform-fee donation tool (launched 2020). Donors are
asked to optionally tip Zeffy; nonprofit receives 100% of gift.

**Givebutter** — Modern donation platform with events, P2P, and
auctions. 2.9% + Stripe fees.

**llms.txt** — A plain-text file at `/llms.txt` that summarizes an
org for AI agents (ChatGPT, Claude, Perplexity). New standard in
2024 for AI discoverability.

**Schema.org JSON-LD** — Structured data markup that helps search
engines and AI agents understand who you are. Standard for nonprofit
SEO/AEO.

**AEO (Answer Engine Optimization)** — Optimizing content for AI
answer engines (ChatGPT, Claude, Perplexity). Adjacent to SEO but
focused on direct-answer ranking.

---

## Appendix G: Copy-paste templates (15 ready-to-use)

Customize these for your org. None require legal review for typical
small-nonprofit use.

### Template 1: Conflict of Interest Policy

```
CONFLICT OF INTEREST POLICY
[ORG NAME]
Adopted: [DATE]

Article I — Purpose
The purpose of this Conflict of Interest Policy is to protect
[ORG NAME] when entering into transactions or arrangements that
might benefit the private interest of an officer or director.

Article II — Definitions
A "Conflict of Interest" exists when an Interested Person has,
directly or indirectly, through business, investment, or family:
(a) An ownership or investment interest in any entity with which
    [ORG NAME] has a transaction or arrangement
(b) A compensation arrangement with [ORG NAME] or with any entity
    or individual with which [ORG NAME] has a transaction
(c) A potential ownership or investment interest in, or
    compensation arrangement with, any entity with which
    [ORG NAME] is negotiating

Article III — Procedures
1. Duty to Disclose: Each Interested Person must disclose the
   existence of any actual or possible Conflict of Interest.
2. Determining Conflict: After disclosure, the Interested Person
   shall leave the meeting while the conflict is discussed.
3. Procedures for Addressing the Conflict: An interested person may
   make a presentation at the meeting, but after the presentation
   shall leave the meeting during the discussion and vote.
4. Records of Proceedings: The minutes shall contain the names of
   persons who disclosed the conflict, the nature of the conflict,
   and the decisions made.

Article IV — Annual Statements
Each director, officer, and member of any committee with board-
delegated powers shall annually sign a statement affirming:
(a) Receipt of a copy of this Conflict of Interest Policy
(b) Reading and understanding of the policy
(c) Agreement to comply with the policy
(d) Understanding that [ORG NAME] is a charitable organization
    and must operate in a manner consistent with charitable purposes

Article V — Violations
If the Board has reasonable cause to believe a member has failed to
disclose actual or possible conflicts of interest, it shall inform
the member and afford an opportunity to explain. If, after the
explanation, the Board determines that the member has failed to
disclose, it shall take appropriate disciplinary and corrective
action.

________________________
[NAME], [TITLE]
Date: ___________

[Sign for each director]
```

### Template 2: Annual Conflict of Interest Disclosure

```
ANNUAL CONFLICT OF INTEREST DISCLOSURE
[ORG NAME]
Calendar Year: [YEAR]

Name: ________________________
Role: ________________________

1. I have received a copy of the Conflict of Interest Policy: ☐ Yes
2. I have read and understood the Policy: ☐ Yes
3. I agree to comply with the Policy: ☐ Yes

4. List any organizations or individuals with which you, your
   immediate family, or any business in which you have a substantial
   interest currently or potentially have a relationship that could
   constitute a conflict of interest with [ORG NAME]:

   ___________________________________________________
   ___________________________________________________

5. List any compensation arrangements you have with [ORG NAME] or
   any entity with which [ORG NAME] has a transaction or arrangement:

   ___________________________________________________

Signature: ________________________  Date: ___________
```

### Template 3: Document Retention Policy (abbreviated)

```
DOCUMENT RETENTION AND DESTRUCTION POLICY
[ORG NAME]
Adopted: [DATE]

[ORG NAME] retains organizational records as follows:

Permanent retention:
- Articles of Incorporation and amendments
- Bylaws and amendments
- IRS Determination Letter
- Board meeting minutes
- Tax returns (Form 990s)
- Annual financial statements

Seven (7) year retention:
- Bank statements
- Donor contribution records
- Receipts and invoices
- Personnel records (post-separation)
- Insurance policies (after expiration)
- Grant applications and award letters

Three (3) year retention:
- Correspondence
- Drafts and working documents
- Email (non-essential)

All electronic records shall be backed up to cloud storage. Paper
records shall be stored securely. At the end of the retention period,
records shall be destroyed in a manner protecting confidentiality.

Adopted by Board: ________________________
                  [NAME], Secretary
                  Date: ___________
```

### Template 4: Whistleblower Policy

```
WHISTLEBLOWER POLICY
[ORG NAME]
Adopted: [DATE]

1. Reporting Responsibility
[ORG NAME] encourages reporting of suspected violations of law or
[ORG NAME] policies. All directors, officers, employees, and
volunteers are responsible for reporting concerns about violations
of the Conflict of Interest Policy, financial mismanagement,
unethical conduct, or other illegal or improper activity.

2. No Retaliation
No director, officer, employee, or volunteer who in good faith
reports a violation shall suffer harassment, retaliation, or
adverse consequences.

3. Reporting Procedures
Reports should be directed to the Board President or, if the report
concerns the Board President, to the Board Secretary or Treasurer.
Reports may be made in writing or verbally and may be made
anonymously.

4. Acting in Good Faith
Anyone reporting must have reasonable grounds for believing the
information disclosed indicates a violation. Allegations not
substantiated and proven to be groundless may result in disciplinary
action.

5. Confidentiality
Reports will be kept confidential to the extent possible, consistent
with the need to conduct an adequate investigation.

Adopted: ________________________
         [NAME], Secretary
         Date: ___________
```

### Template 5: Founding Board Meeting Agenda

```
FOUNDING BOARD MEETING
[ORG NAME]
Date: [DATE]
Time: [TIME]
Location: [PHYSICAL or VIDEO LINK]

CALL TO ORDER

1. Confirm Quorum (3 of 3 directors present)
2. Approve Agenda

OLD BUSINESS
3. Confirmation of Articles of Incorporation (filed [DATE])

NEW BUSINESS
4. Adoption of Bylaws (vote)
5. Election of Officers:
   - President: [NAME]
   - Secretary: [NAME]
   - Treasurer: [NAME]
6. Adoption of Conflict of Interest Policy
7. Adoption of Document Retention Policy
8. Adoption of Whistleblower Policy
9. Adoption of Compensation Policy
10. Adoption of Gift Acceptance Policy
11. Authorization to open business banking at [BANK]
    with [SIGNERS] as authorized signers
12. Approval of fiscal year: Calendar (Jan 1 – Dec 31)
13. Authorization to file 501(c)(3) application (IRS Form 1023-EZ)
14. Authorization to file California state registrations
    (CT-1, SI-100, FTB 3500A)
15. Set next regular board meeting date

ADJOURNMENT
```

### Template 6: Board Meeting Minutes

```
MINUTES OF THE BOARD OF DIRECTORS
[ORG NAME]

Meeting Date: [DATE]
Time Called to Order: [TIME]
Time Adjourned: [TIME]
Location: [PHYSICAL or VIDEO]

DIRECTORS PRESENT: [Names]
DIRECTORS ABSENT: [Names or "None"]
GUESTS: [Names or "None"]

QUORUM: Confirmed.

AGENDA ITEM 1: [Topic]
Discussion: [Brief summary]
Motion: [Text of motion as moved]
Moved by: [Name]
Seconded by: [Name]
Vote: [e.g., Unanimous, 3-0]
Outcome: Carried.

[Repeat for each agenda item]

The meeting was adjourned at [TIME].

Respectfully submitted,

________________________
[NAME], Secretary

Date Signed: ___________
```

### Template 7: Board Resolution

```
RESOLUTION OF THE BOARD OF DIRECTORS
[ORG NAME]
Resolution No.: [YEAR-NUMBER]
Date: [DATE]

WHEREAS [statement of context, e.g., "[ORG NAME] requires a third
director to comply with California Corporations Code §5212"];

WHEREAS [additional context, e.g., "[NAME] has agreed to serve as a
volunteer director"];

NOW, THEREFORE, BE IT RESOLVED that [NAME] is hereby appointed as a
Director of [ORG NAME], to serve a term of [DURATION] beginning on
[DATE].

BE IT FURTHER RESOLVED that [NAME] shall sign the Conflict of
Interest Policy and complete the annual disclosure.

This resolution was adopted at a duly noticed meeting of the Board
of Directors on [DATE].

________________________     ________________________
[President], President        [Secretary], Secretary
Date: ___________             Date: ___________

________________________
[Third Director], Director
Date: ___________
```

### Template 8: Donor Thank-You Letter

```
[Date]

[Donor Name]
[Address]

Dear [First Name],

Thank you for your generous gift of $[Amount] to [ORG NAME]. Your
contribution on [Date of Gift] will directly fund [specific use, e.g.,
"one season of competitive soccer for a young athlete in our Class
of '26 cohort"].

[Optional personal note: a specific impact, story, or update]

[ORG NAME] is a 501(c)(3) public charity (EIN [NUMBER]). No goods or
services were provided in exchange for this contribution. This letter
serves as your tax receipt.

With gratitude,

[Your name]
Founder & President, [ORG NAME]

[ORG NAME] | [Address] | [Phone] | [Website]
```

### Template 9: Year-End Appeal Email

```
Subject: A simple ask from [ORG NAME] before December 31

Friends,

This is the email I'm most nervous to send all year. Asking is hard.
But here goes.

[ORG NAME] funded [X] kids this year. [Specific outcome — "Maria
stayed on her team for her U13 season. Carlos didn't have to choose
between cleats and rent."]

We need to fund [next number] more by the end of the year. Each kid
costs roughly $[unit cost]. A gift of any amount goes directly to the
field.

If you've been waiting for the right moment to give to [ORG NAME],
December 31 is the deadline for 2026 tax deductions. The link below
takes you to a secure donate page.

[DONATE BUTTON]

If you're not in a position to give, a forward to one person you
think would care is just as helpful.

Thank you for being part of this.

[Founder Name]
Founder & President, [ORG NAME]

P.S. We're [X% of the way / [N] kids away] from our 2026 goal.
[Specific name or number] could put us across the line.
```

### Template 10: Major-Gift Ask Script

```
[Major-gift ask conversation script — Meeting 3 of cultivation]

OPENING (2 min):
"[Name], thanks again for making the time. As we talked about, I want
to make a specific ask today. I'll be direct — and you should feel
completely free to say no, defer, or push back."

THE ASK (1 min):
"I'd like to ask you to consider a $[amount] gift to [ORG NAME] for
our [specific program / cohort]. That would fund [specific outcome —
"two kids for a full season" or "the launch of our clinic series"].
You'd be one of our founding major donors. Your name on our donor
wall, recognition in the annual report, and quarterly updates from
me personally on the impact."

THE PAUSE (silence):
[Wait. Do not fill the silence. Let them think.]

THE RESPONSE (varies):
If yes: "Thank you. I'm going to send a confirmation note today, and
we'll set up the gift through [platform]. Truly grateful."

If hesitation: "Take your time. Want to think about it for a week?"

If no: "Completely understand. Would you be open to a smaller amount
that fits better right now?" or "Is there a different way to be
involved that fits your situation better?"

CLOSE (regardless of answer):
"Either way, thank you for the time today. Your support means a lot,
in whatever form."
```

### Template 11: Grant Letter of Inquiry (LOI)

```
[Date]

[Program Officer Name]
[Foundation Name]
[Address]

RE: Letter of Inquiry — [ORG NAME] / [Brief Description]

Dear [Program Officer]:

[Org Name] is a California 501(c)(3) public charity (EIN [NUMBER])
that [one-sentence mission statement]. We are writing to inquire
about a [$X amount] grant from the [Foundation Name] to support
[specific program/purpose].

THE PROBLEM
[1 paragraph: the problem your org addresses, with specifics relevant
to the funder's interests]

OUR APPROACH
[1 paragraph: what your org does, including key programs or activities]

THE REQUEST
We request $[amount] over [duration] to support [specific use].
Funding would enable [specific outcomes]:
- [Outcome 1]
- [Outcome 2]
- [Outcome 3]

WHY [FOUNDATION NAME]
[1 paragraph: how this request aligns with the funder's stated
priorities. Reference specific past grants or program areas.]

ORGANIZATIONAL CAPACITY
[Org Name] has been operational since [year]. Our [year] revenue
was $[amount], with [percentage]% directed to programs. Our board
consists of [N] directors with [relevant expertise].

We would welcome the opportunity to discuss this request in more
detail. Thank you for your consideration.

Sincerely,

[Founder Name]
Founder & President, [ORG NAME]
[Email] | [Phone]

ATTACHMENTS:
- IRS Determination Letter
- [Year] Form 990
- Board Roster
- Strategic Plan
```

### Template 12: Sustainer Welcome Email

```
Subject: Welcome to [Sustainer Program Name] — and thank you

[First name],

You just signed up to give $[amount] every month to [ORG NAME]. I
wanted to send this personally.

Your monthly gift will [specific impact — "fund one kid for one
month" / "cover kit and equipment costs for two athletes"]. Over a
year, it's $[annual total] — and you can pause or change it any time
through [link].

Here's what you can expect from us:

- Quarterly impact updates by email (specific outcomes from your
  giving)
- Invitations to our annual donor event
- A personal note from me at year-end with the cumulative impact of
  your sustainership

What you won't get: spam, pressure asks, generic newsletters. The
sustainer program is built to respect your time as well as your
generosity.

If you ever want to talk, my direct email is [email]. Truly.

With gratitude,

[Founder Name]
Founder & President, [ORG NAME]

P.S. If you'd ever consider inviting one friend to join, that's the
single most helpful thing — just forward this email.
```

### Template 13: Corporate Sponsor Pitch Deck Outline

```
SPONSORSHIP PROPOSAL DECK
[ORG NAME] × [SPONSOR NAME]

Slide 1: Cover
- Org logo + Sponsor logo
- "Sponsorship Proposal: [Specific opportunity]"
- Founder name + contact

Slide 2: The opportunity
- Hook: a stat about the problem (e.g., "$11,000 a year prices
  working-class kids out of competitive soccer")
- Specific local angle (e.g., "in San Diego County")

Slide 3: Our work
- Mission statement
- 3 programs in one sentence each

Slide 4: Why now
- World Cup '26 tailwind (if applicable)
- Cohort goal (Class of '26)
- Brand moment for sponsor

Slide 5: The ask
- $[amount] commitment
- Specific use of funds
- Specific outcomes ("funds 8 scholarship recipients for one season")

Slide 6: What sponsor gets
- Logo on website + annual report
- Recognition at launch event
- Press coverage participation
- Year-end donor recognition

Slide 7: Comparable sponsorship value
- Local press impressions (estimated)
- Donor list reach
- Brand association with regional youth-sports cause

Slide 8: Next steps
- Decision timeline
- Contact info
- Thank-you note
```

### Template 14: Board Director Recruitment Script

```
[Recruitment text or call script for 3rd director]

Hey [Name] —

I'm reaching out about [ORG NAME], the nonprofit I'm building.

Quick context: [ORG NAME] is a 501(c)(3) public charity that
[one-sentence mission]. We're approved by the IRS, fully compliant in
California, and just operationally launched.

Here's the ask: California law requires our board to have 3
independent directors. Mirella and I are 2. I'd love to invite you
to be the third.

What it actually involves:
- One board meeting per year (60 min, on the phone or Zoom)
- Sign an annual disclosure form (1 page, takes 5 min)
- Be available for occasional questions about org direction
- No financial liability — California has volunteer immunity laws,
  and we carry D&O insurance

What you'd get:
- Be on the founding board of an org doing real work
- Quarterly impact updates
- Invitation to our annual event
- A meaningful credit line on your professional bio

What we're NOT asking:
- For money (you're welcome to give, but it's not a board obligation)
- For weekly time (we deliberately keep the commitment small)
- For specific expertise (just willingness to serve)

Would you be willing? Happy to answer any questions. If now's not
the right time, that's fine too — I won't be offended.

Thanks,
[Founder Name]
```

### Template 15: One-Pager (for grants, sponsors, donors)

```
[ORG LOGO + TAGLINE]

THE PROBLEM
[2–3 sentences naming the specific problem your org solves and its
local relevance]

WHAT WE DO
[3–5 bullet points listing your programs in plain language]

OUR GOAL
[A specific number and timeline — e.g., "100 kids on the roster by
World Cup 2026"]

HOW DOLLARS WORK
- $50/month: One kid kept in the game for one season as a sustainer
- $2,500: One scholarship recipient for one full season
- $25,000: One team fully sponsored — every kid plays

WHO WE ARE
[Org name] is a California 501(c)(3) public charity (EIN [number])
based in [city]. Founded [year]. Currently led by [name(s)] with a
[N]-member volunteer board.

WHERE WE STAND
- [Achievement 1, e.g., "100% of donations go to programs"]
- [Achievement 2, e.g., "Partnered with N San Diego clubs"]
- [Achievement 3, e.g., "Funded by [N] founding donors in our first quarter"]

CONTACT
[Founder name]
[Email] | [Phone]
[Website]

[ORG NAME] | [Tax-deductible 501(c)(3) | EIN [NUMBER]
```

---

# The Sales Plan

If you're using this guide for your own org, stop here. The rest is
about turning the guide itself into a revenue stream for the nonprofit.

## The model

The guide grew during writing — Chapter 0 (what is a nonprofit), Chapter 21
(compliance maintenance system), Chapter 22 (Year 2+ traps), Chapter 23
(50+ tips), Chapter 24 (head-start playbook), plus a 130+ term Glossary and
15 copy-paste Templates. That's ~$200+ worth of professional consulting
content. The pricing needs to match.

**Free / paid split:**

1. **Free** — public blog posts (one per chapter, 20+ posts), drives SEO
2. **Free lead magnet** — Chapter 1 ("The 10 Traps") as a PDF in exchange for email signup
3. **Core product — full guide PDF**: **$49** (positioned as premium but accessible)
4. **Bundle: guide + templates pack**: **$59** (save $10 vs separate)
5. **Templates pack alone** (15 templates, editable Word/Google Doc): **$19**
6. **Premium tier**: guide + templates + 60-min 1:1 onboarding call: **$199**

### Why $49 (not $19, not $99)

The user asked for "inexpensive to help people" but also "worth $50+" —
the right answer is right in the middle.

Reasons $49 is the sweet spot:

- $49 is still **accessible** — well under the $99 mental price barrier
- The content actually warrants premium pricing — 200+ pages of dense, current, CA-specific operational detail with copy-paste templates
- Comparable lawyer-written checklists run $99–$299. We're explicitly below that.
- Comparable generic Etsy/Bonanza PDFs run $9–$29. We're above that — because the content is substantially better.
- Higher price = higher perceived value + fewer refund requests + better customer fit
- Pricing low ($19) tends to attract less-serious buyers + more support requests

### Revenue projection

At $49 price point:

| Annual sales | Annual revenue | Notes                               |
| -----------: | -------------: | ----------------------------------- |
|           50 |         $2,450 | First customers (friends + network) |
|          200 |         $9,800 | One viral blog post drives this     |
|          500 |        $24,500 | Sustained SEO presence              |
|        1,000 |        $49,000 | Half of GRF's Y1 donation target    |
|        2,500 |       $122,500 | National recognition territory      |
|        5,000 |       $245,000 | Top-of-category                     |

Plus bundle and premium upsells: typically 15–25% of buyers upgrade to
bundle ($59) or premium ($199). Realistic average revenue per customer
ARPU: **$58–$65**.

At 1,000 sales/year + 20% upsell to bundle/premium:

- 800 × $49 = $39,200
- 150 × $59 = $8,850
- 50 × $199 = $9,950
- **Total: $58,000/year**

That's **half of Grass Roots Foundation's entire Year 1 fundraising
target — from one product.** Unrestricted revenue. Compounds with SEO.

## Distribution channels

1. **Direct sale via grassrootsfdn.org/guide** (highest margin)
2. **Gumroad** (10% fee, easier checkout) — backup channel
3. **Substack paid** — newsletter-driven distribution
4. **LinkedIn newsletter** — gives away free chapters, links to paid PDF
5. **Reddit r/nonprofit organic engagement** — community + occasional links
6. **Y Combinator's Hacker News** — post "10 things that hang up nonprofits" as discussion
7. **Local SD outlets** — Voice of San Diego, Times of SD might cover the story

## Legal / tax considerations

- Selling content related to the nonprofit's mission is generally treated as
  **program service revenue** (related business income) — not taxed
- BUT if the IRS considers it Unrelated Business Income (UBI), you file
  Form 990-T and pay UBIT on profit over $1,000/year
- **Recommended approach for Grass Roots Foundation:** publish via the
  org, treat as program revenue (the guide helps access-focused
  nonprofits start, which arguably relates to the access mission), file
  Form 990-T if revenue exceeds $1,000/year

**Alternative:** founder publishes personally (or via a separate LLC)
and donates after-tax proceeds. Cleaner separation but loses brand
association.

Talk to a CPA before launch.

## SEO blog strategy

Convert each chapter to a blog post on the website. Target high-intent
keywords:

| Blog post title                                           | Search volume (rough) | Difficulty |
| --------------------------------------------------------- | --------------------: | ---------- |
| "How to start a nonprofit in California (2026)"           |                  High | Medium     |
| "Form CT-1: How to register your charity with California" |                Medium | Low        |
| "501(c)(3) application: 1023 vs 1023-EZ"                  |                  High | Medium     |
| "The 3-director rule for California nonprofits"           |                   Low | Very low   |
| "Conflict of interest policy template (free)"             |                Medium | Low        |
| "Form 990-N e-postcard: step by step"                     |                  High | Low        |

Lower difficulty = easier to rank for. Hit those first.

## Companion products (Year 2+)

Once the guide is out and selling:

- **Online course** ($199) — video walkthrough of the same content
- **State-specific guides** ($14 each) — Texas, NY, FL versions
- **Annual update subscription** ($29/year) — keep readers current on
  changes to the law

## Roadmap

| Month | Action                                                  |
| ----- | ------------------------------------------------------- |
| 1     | Finish polishing all chapters                           |
| 1     | Design PDF layout (Canva or hire Fiverr designer ~$150) |
| 2     | Set up Gumroad / Substack / direct sale                 |
| 2     | Launch lead magnet (Chapter 1 free)                     |
| 2–3   | Begin blog post series (1 post/week)                    |
| 3     | Launch paid PDF                                         |
| 4–6   | Build SEO traffic                                       |
| 6+    | Add templates + course                                  |

---

_This guide is a living document. Updated as I continue running my
own nonprofit and learn what I missed. Last revised: May 2026._
