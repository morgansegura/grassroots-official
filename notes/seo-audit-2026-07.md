# SEO / AEO / GEO audit — July 2026

Audit of the live Grassroots Foundation site against the 2026 standards. Scored
against what's actually in the repo, not what's planned.

**Headline: the foundation is genuinely strong — roughly an A- on SEO, B+ on AEO,
B on GEO.** Nothing here is broken. The gaps are additive, and most of them are
short work with outsized payoff. The single biggest hole isn't schema at all —
it's that nothing is being measured.

---

## What's already right

These are done well and don't need touching.

**Metadata coverage is complete.** All 23 page routes call `pageMetadata()` from
`lib/seo.ts`. Canonical, Open Graph (1200×630), and Twitter
`summary_large_image` on every one. Root layout sets `metadataBase`, a title
template, keywords, and robots directives. This is the part most sites get wrong
and it's fully handled.

**robots.txt implements the 2026 AI-crawler split correctly.** Twelve training
crawlers blocked (GPTBot, ClaudeBot, Google-Extended, CCBot, Bytespider, …),
nine search-time crawlers allowed (OAI-SearchBot, PerplexityBot, Claude-User,
Bingbot, …). Production-gated on `VERCEL_ENV`, so preview deploys can't get
indexed. Sitemap and host referenced.

**llms.txt is excellent.** All eight sections including "What we don't do" and
"For AI assistants." Specific numbers, named geography, real EIN. This is the
file most orgs skip entirely, and a well-written one is the highest-leverage GEO
asset that exists right now.

**Organization schema is thorough.** `NonprofitOrganization` with `taxID`,
`nonprofitStatus`, `naics`, bilingual `contactPoint`, two founders as `Person`,
17 `knowsAbout` entities, `areaServed` at both county and city level, five
`sameAs` links including the ProPublica profile.

**FAQ schema is a real strength.** All 8 blog posts carry structured FAQ blocks
in frontmatter, plus a dedicated `FAQPage` on `/faq`. These are genuine
informational Q&As — not the promotional FAQ spam Google penalizes. This is the
single most-extracted format for ChatGPT and AI Overviews, and it's already
shipped across the whole blog.

**Blog content is on-strategy for GEO.** Eight posts, all explanatory, all
answering a real donor- or parent-intent question. `/feed.xml` exists.
`ServiceListSchema` on `/programs`. OG image is exactly 1200×630.

---

## Gaps, ranked by leverage

### 1. Nothing is measured — no GTM, no GA4, no Search Console signal

The whole stack is built to be found and there is zero instrumentation to tell
you whether it's working. No GTM container, no GA4, no `NEXT_PUBLIC_GTM_ID`
anywhere in the repo or in Vercel. Consent Mode v2 default-deny is wired
(`components/analytics/consent-defaults.tsx`) and the cookie banner already
fires `gtag('consent','update')` — the pipe is built, nothing is connected to
it.

Concretely, right now you cannot answer: are the blog posts ranking? is anyone
reaching `/donate`? did the llms.txt work? A single Ad Grant compliance review
requires conversion tracking you don't have.

**Fix:** ship the GTM component (inert without the env var), set
`NEXT_PUBLIC_GTM_ID` in Vercel, mount it after `ConsentDefaults`. Then verify
Search Console and submit the sitemap. Half a day, and it unblocks the Ad Grant.

### 2. Two live pages are missing from the sitemap

`app/sitemap.ts` lists 19 static routes. `/story` and `/strategic-plan` both
exist, both have full metadata, both are indexable — and neither is in the
sitemap. `/story` is the founder's account, which is the E-E-A-T page.
`/strategic-plan` is the Candid Platinum asset. Both should be discoverable.

**Fix:** two lines in `STATIC_ROUTES`. Five minutes.

### 3. BreadcrumbList exists on blog posts only

`ArticleSchema` emits a BreadcrumbList for posts. The other ~20 non-root pages
have none. The standards call for it on every non-root page — it's what produces
the breadcrumb trail in SERPs instead of a raw URL, and it gives AI engines the
site's hierarchy.

**Fix:** add `components/seo/breadcrumb-schema/`, drop it into each screen. An
hour or two.

### 4. The SearchAction points at a search that doesn't exist

`WebsiteSchema` declares `potentialAction` targeting
`/blog?q={search_term_string}`. `app/blog/page.tsx` doesn't read `searchParams`
— the parameter is ignored. You're asserting a capability in the entity graph
that the site doesn't have.

**Fix:** either implement blog search (Pagefind is the scaffold-baseline answer)
or remove the `potentialAction`. Removing it is honest and takes a minute;
implementing it is better but bigger.

### 5. Founders have no standalone Person schema — E-E-A-T is thin

Morgan and Mirella appear only as nested objects inside `founder`. No `@id`, no
`sameAs`, no `knowsAbout`, no `alumniOf`, no `jobTitle` detail beyond a string.
There's a "From the founders" section on `/mission` and a whole `/story` page,
but no schema tying that lived authority to a person entity.

This matters more than it looks. Google's E-E-A-T and AI citation both key off
named, verifiable people. "Three kids through San Diego club soccer" is real
experience and it's currently invisible to machines.

**Fix:** `PersonSchema` component with `@id`, LinkedIn in `sameAs`, `knowsAbout`,
`worksFor`. Emit on `/story` and `/mission`.

### 6. Article schema has no `image` and an organizational author

Two things weaken every blog post's rich-result eligibility:

- No `image` property. Google's Article rich result effectively requires it.
- `author` is the Organization. Google prefers a named `Person` author for
  E-E-A-T, and this compounds gap #5.

**Fix:** add `image` (post OG or the default), switch `author` to the Person
`@id`. Small change to `article-schema.tsx`.

### 7. No DefinedTerm / glossary — the biggest missed GEO opportunity

This site's whole editorial posture is explaining a confusing system: ECNL, MLS
Next, Girls Academy, pay-to-play, ID camps, showcase events, the 11–13 drop-off,
tier structure. That's a glossary that doesn't exist yet.

`DefinedTerm` / `DefinedTermSet` is the schema type AI engines lift most
directly — definitions get quoted verbatim in ChatGPT and AI Overviews. A parent
googling "what is ECNL" is exactly the top-of-funnel audience, and there is no
authoritative San Diego nonprofit answering it.

**Fix:** a `/glossary` route with 15–25 terms plus `DefinedTermSet` schema. This
is a content lift more than an engineering one, but it's the highest-ceiling
item on the list.

### 8. No Event schema for the clinics

Methodology Clinic Access is program #5, and the invite-only clinic is the press
launch. `Event` schema drives a Google rich result and is how AI answers
"youth soccer clinics in San Diego."

**Fix:** add `EventSchema` when the first clinic has a real date. Don't build it
speculatively.

### 9. Small corrections

- `foundingDate: 2023` renders as a bare number. Schema.org wants ISO 8601 —
  `"2023-09-01"`, matching what llms.txt already says.
- No `DonateAction` in Organization `potentialAction`. For a nonprofit this is
  a direct AEO surface for "how do I donate to Grassroots Foundation."
- OG image is 440KB. Under the 1MB ceiling, over the 300KB target. Compressing
  costs nothing.
- `alternateName` repeats `legalName`, which is already its own property.
- Candid/GuideStar profile isn't in `sameAs` yet — add it once the seal lands.

---

## Suggested order

**This week (hours, not days):** sitemap routes · `foundingDate` · SearchAction
decision · OG compression · `alternateName`.

**Next (the measurement unblock):** GTM + `NEXT_PUBLIC_GTM_ID` · GA4 · Search
Console verify · submit sitemap to Google + Bing.

**Then (schema depth):** BreadcrumbSchema everywhere · PersonSchema for founders
· Article `image` + Person author · DonateAction.

**Content lift (highest ceiling):** the glossary + DefinedTermSet.

**When real:** Event schema for clinic #1 · Candid profile in `sameAs` ·
Pagefind search if the SearchAction stays.

---

## Honest read

The engineering side of SEO here is close to done, and it's better than most
funded nonprofits ship. The remaining schema work is real but incremental —
it moves you from good to excellent, not from broken to working.

The thing actually limiting reach isn't in this list. Eight blog posts and no
inbound links means there's very little for any of this infrastructure to rank.
Authority comes from other sites pointing here: partner clubs, local press, the
Candid profile, a San Diego youth-sports directory. That's outreach, not code.

Worth naming plainly, because the schema backlog above is exactly the kind of
work that feels productive while the calls go unmade.
