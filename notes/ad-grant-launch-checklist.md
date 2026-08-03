# Ad Grant launch checklist

Written August 3, 2026, after the grant was awarded. The ordered path from
"awarded" to "ads running safely." Work top to bottom — the order matters,
because each step depends on the one above it.

Companion docs: [analytics-conversion-tracking.md](./analytics-conversion-tracking.md)
(why the donation tracking is hard) and
[ad-grant-campaign-structure.md](./ad-grant-campaign-structure.md) (what to build).

---

## The one thing to understand about the deadline

The 90-day risk is an **account sitting dormant**, not a missing donation
event. Ad Grants needs at least one meaningful conversion recording, and
`donate_open` — donate button clicked — already fires in production today with
no help from Zeffy. Getting that marked and imported is what protects the
grant. Perfect donation-dollar attribution is a quality upgrade you can finish
afterward.

Do not wait on Zeffy to start running ads.

---

## Step 1 — Deploy the current build

The `/thank-you` page and the `hello@` schema change are committed but not
live. Push to `main`; Vercel builds on push.

**Why it can't wait:** `NEXT_PUBLIC_*` env vars are inlined at build time, and
the Organization schema now publishes `hello@grassrootsfdn.org`. Until it
deploys, the live site still advertises the old address.

**Verify:** `https://grassrootsfdn.org/thank-you` returns 200 (it was 404
before this), and `https://grassrootsfdn.org/llms.txt` shows `hello@`.

---

## Step 2 — Mark `donate_open` as a key event in GA4

**This is the step that satisfies the Ad Grants conversion requirement.**

GA4 → Admin → Data display → **Events** → find `donate_open` → toggle **Mark as
key event**.

If `donate_open` isn't in the list yet, it means no one has clicked a donate
button since the GTM tag went live. Go to the site, accept the cookie banner,
click a donate button, wait a few minutes, and refresh the list. Events only
appear after they've been seen at least once.

Do the same for `email_click` — it's the only signal you have on scholarship
applications and press inquiries until `/apply` gets a real form.

**Verify:** GA4 → Admin → DebugView, with the site open. Click a donate button
and watch `donate_open` land. DebugView beats Realtime here — Realtime lags and
hides the event parameters.

> Remember: Consent Mode v2 default-denies. **You must click Accept on the
> cookie banner during every test** or nothing will fire and you'll conclude
> the setup is broken when it isn't.

---

## Step 3 — Link GA4 to the Google Ads account

GA4 → Admin → Product links → **Google Ads links** → Link → pick the Ad Grants
account → enable personalized advertising and auto-tagging.

Without this link the conversion cannot be imported, and Ads can't attribute
anything back to a click.

---

## Step 4 — Import the conversion into Google Ads

Google Ads → Goals → Conversions → **Summary** → New conversion action →
**Import** → Google Analytics 4 properties → Web → select `donate_open`.

Then set it as a **Primary** conversion action. Secondary conversions are
recorded but don't count toward the Ad Grants requirement or feed Smart
Bidding.

**Verify:** the conversion action shows status "Recording conversions" within
24–48 hours of real traffic. "No recent conversions" immediately after setup is
normal and not a failure.

---

## Step 5 — Add `zeffy.com` to GA4 unwanted referrals

GA4 → Admin → Data streams → your web stream → Configure tag settings → Show
all → **List unwanted referrals** → add `zeffy.com`.

**Why:** the donation form is an iframe on `zeffy.com`. Without this, traffic
returning from that iframe can start a fresh referral session and strip the
Google Ads attribution off a conversion the ad actually earned. You'd see the
conversion in GA4 but not in Ads, which is the most confusing possible failure.

---

## Step 6 — Ad Grants compliance settings

Every one of these is a suspension risk, not a best practice. Check each before
the first campaign goes live.

- [ ] **Geo-targeting set** — San Diego County, and change the default to
      **presence only** ("people in your targeted locations"). The default also
      targets people merely *interested* in the area, which floods the account
      with impressions that never click and sinks CTR.
- [ ] **Search network only.** No Display, no search partners.
- [ ] **Minimum 2 ad groups per campaign.**
- [ ] **Minimum 2 active ads per ad group.**
- [ ] **Minimum 2 sitelink assets** (four are drafted in the campaign note).
- [ ] **No single-word keywords, no overly generic keywords.**
- [ ] **$2.00 max CPC**, unless the campaign uses Smart Bidding — Maximize
      Conversions lifts the cap. Start on Maximize Clicks with a low ceiling
      until conversions are actually recording, then switch.
- [ ] **Account-level negative keyword list loaded** before any campaign runs.
      The college/NCAA negatives are the critical ones — "soccer scholarship"
      overwhelmingly means college athletic scholarships, and unfiltered it will
      bury the account in irrelevant impressions.
- [ ] **5% account-wide CTR.** Two consecutive months below suspends the
      account. This is why Campaign 4 (Brand) gets built first.

---

## Step 7 — Build campaigns

Full structure, keywords, negatives, and ad copy in
[ad-grant-campaign-structure.md](./ad-grant-campaign-structure.md). Build order:

1. **Campaign 4 — Brand & Verification.** Cheapest, near-100% CTR, establishes
   an account-wide CTR floor before anything riskier runs.
2. **Campaign 1 — Scholarship Help** and **Campaign 2 — Cost Education.**
3. Let those run two weeks. Mine the search terms report, expand negatives.
4. **Campaign 3 — Donate** once there's conversion data to bid on.

**Weekly for the first two months:** search terms report → add negatives.
**Monthly:** confirm CTR is above 5% and at least one conversion recorded.

---

## Parallel track — not blocking ads

### Zeffy redirect (unlocks `donation_complete`)

The code is built and deployed. It cannot fire until Zeffy support enables a
custom thank-you redirect on the form — it is not a self-serve setting.

Request form: https://share.hsforms.com/1ZuHNNQFfQmms1eKf3HVbnw1k13p
Destination: `https://grassrootsfdn.org/thank-you`
Ask them to apply it to **all current and future campaigns.**

When they confirm it's live, make a $1 test donation and check that
`donation_complete` appears in GA4 DebugView. Then mark it a key event, import
it to Ads as Primary, and demote `donate_open` to Secondary — at that point
you're bidding on completed donations instead of intent.

**Untested alternative:** if Zeffy already broadcasts a completion
`postMessage` out of the iframe, this could be done entirely in GTM with no
redirect and no loss of Zeffy's own confirmation screen. Nobody has checked.
Paste this in the console, make a real donation, and watch:

```js
addEventListener("message", (e) => {
  try {
    if (/(^|\.)zeffy\.com$/.test(new URL(e.origin).hostname))
      console.log("ZEFFY →", e.data);
  } catch {}
});
```

### `/apply` has no form

Campaign 1 — the whole point of the account — is currently unmeasurable.
`email_click` is the proxy. A real intake form behind a modal is the
highest-value addition to the site for this account.

### SPF and DMARC are missing entirely

The domain has neither record. Google now requires both for senders, so donor
thank-yous and asks are materially more likely to land in spam, and anyone can
spoof the domain. A nonprofit soliciting donations should not be spoofable.
DNS-only fix, roughly 15 minutes.

---

## Known trap, worth repeating

Google Ads' tag diagnostics may report pages as **"Not tagged."** The GTM
container is verifiably present on every page. The checker doesn't accept the
cookie banner, so Consent Mode correctly holds the tag and the crawler sees
nothing fire. Confirm with Tag Assistant while accepting the banner; if it
fires there, ignore the diagnostic.
