# Analytics + conversion tracking — verification and plan

Written July 29, 2026, in response to a reviewer note asking whether GA4 is
firing and where donation completion is recorded. Answers what the repo can
prove, separates that from what only the Google/Zeffy UIs can confirm, and
lays out the fix.

---

## Q1 — Is GA4 actually firing?

**The repo cannot answer this, and that's expected.** There is no GA4
measurement ID anywhere in the code, and there shouldn't be. `GoogleTagManager`
installs the container; the GA4 configuration tag lives inside the GTM
container UI. So "GTM is installed but I can't confirm a GA4 tag inside it" is
precisely the right description of the situation, and resolving it is a GTM UI
task, not a code task.

Three things that will make the verification lie to you if you skip them:

**1. `NEXT_PUBLIC_*` variables are inlined at build time, not read at runtime.**
Setting `NEXT_PUBLIC_GTM_ID` in Vercel does nothing to a build that already
shipped. It only takes effect on the next build. The July 29 caption-fix deploy
happened after the variable was set, so the current production bundle should
contain it — but if you had checked between setting the variable and that
deploy, GTM would have been genuinely absent and the conclusion "GTM is broken"
would have been wrong.

**2. Consent Mode v2 is default-deny, so GA4 stays silent until someone
accepts.** `ConsentDefaults` sets `analytics_storage: "denied"` before GTM
loads. If you open the site, ignore the cookie banner, and check Realtime, you
will see nothing — and that is the system working correctly, not a broken tag.
**You must click Accept on the banner during the test.** This is the single
most likely way to misdiagnose a working setup as broken.

**3. The container loading is not the same as a tag firing.** Seeing
`gtm.js` in the network tab only proves the container is installed.

### Verification sequence

1. Load `https://grassrootsfdn.org` in a clean/incognito window.
2. Network tab, filter `gtm.js` — confirm it loads with the right container ID.
   If absent, the env var never made it into a build.
3. **Accept cookies on the banner.** Confirm a `consent` `update` with
   `analytics_storage: "granted"` lands in `dataLayer`.
4. GTM → Preview mode, connect to the live site, confirm a GA4 Configuration
   tag exists and fires on page view. If no GA4 tag exists in the container,
   this is where you find out — and it's the likeliest failure.
5. GA4 → Admin → DebugView (better than Realtime for this; Realtime hides
   detail and lags). Confirm your session and the `page_view` event.
6. Only then trust Realtime.

If step 4 shows no GA4 tag: create a GA4 property, get the measurement ID,
add a Google Tag / GA4 Configuration tag in GTM firing on All Pages, set it to
require `analytics_storage`, publish the container.

---

## Q2 — Where does donation completion happen?

**The reviewer's premise is half right, and the correction matters.**

The assumption was that the donate flow hands off to Zeffy on their domain. It
doesn't. Zeffy is embedded as a **cross-origin iframe**, in two places:

- `components/screen/donate-screen/donate-screen.tsx:26` — inline iframe on
  `/donate`
- `components/feature/donate-dialog/donate-dialog.tsx:145` — modal iframe,
  triggered from donate buttons site-wide

The donor never navigates away. The URL bar stays on `grassrootsfdn.org`.

**This makes both suggested remedies wrong for this site:**

- **Cross-domain tracking will not work.** The GA4 linker works by decorating
  URLs during _top-level navigation_ between domains. There is no top-level
  navigation here. The iframe is a separate browsing context that your page
  cannot read into, and no linker parameter changes that.
- **"A Zeffy-side redirect to a thank-you page you control"** is closer, but as
  stated it fails too — that redirect happens _inside the iframe_, so the
  parent page still sees nothing.

The situation is actually harder than a redirect handoff, not easier. A
redirect at least gives you a landing page on your own domain to fire on.

### What will actually work

**Option A — thank-you page on our domain, loaded inside the iframe (preferred).**

If Zeffy's form settings support a post-donation redirect URL, point it at a
`/thank-you` route on `grassrootsfdn.org`. The iframe then navigates to _our own
page_, which is same-origin with the parent. From there the child can talk to
the parent directly (`window.parent.postMessage`, or straight to the parent's
`dataLayer`) and we fire `donation_complete` with confidence.

Requires: confirming Zeffy supports a redirect URL on embedded forms (check the
form settings — unverified), and building `/thank-you`. That route does not
exist today.

**Option B — postMessage completion event.**

`donate-dialog.tsx:73` **already listens to postMessages from Zeffy origins**
for iframe resize. If Zeffy also emits a completion/success message, we hook the
existing listener and push a `dataLayer` event. Costs almost nothing if the
message exists.

Whether it exists is unknown and must be tested empirically: temporarily log
every message from a `*.zeffy.com` origin, make a real small test donation, read
what comes back.

Note: the inline `/donate` iframe has **no** message listener at all — only the
modal does. Option B would need one added there too.

**Option C — Zeffy webhook / export reconciliation.**

Offline conversion import into GA4, or just monthly manual reconciliation. Least
elegant, fully reliable, and worth having regardless as the source of truth for
actual dollars.

---

## The Ad Grant question — you are not blocked

The reviewer's framing was "no conversion tracking, no grant, sort this before
you apply." The conclusion overshoots.

**You do not need `donation_complete` to satisfy the Ad Grant.** The requirement
is at least one _meaningful_ conversion, not specifically a completed donation.
All of the following are meaningful, happen entirely on our own domain, need
zero cooperation from Zeffy, and can be tracked today:

- `donate_open` — donate button clicked / modal opened (donation _intent_)
- `/apply` scholarship intake submitted
- `/contact` form submitted
- `/partner`, `/sponsor`, `/volunteer` form submissions
- newsletter signup, once it exists

Google does discourage counting trivial engagement — raw pageviews, time on
site — as your only conversion. Button clicks toward a donation and real form
submissions are not that.

**So: apply.** Wire the on-domain events above, mark one or more as conversions
in GA4, and the eligibility requirement is met while the true donation
conversion gets sorted properly. Waiting for perfect donation attribution before
applying costs months of free ad spend for no benefit.

**Verify the specific rule yourself against the current Ad Grants policy page
rather than trusting either the reviewer's phrasing or this note.** The "one
conversion per month" figure is the broadly understood expectation, but Ad
Grants policy changes and the money is gated on it.

---

## Current state of instrumentation

**There is none.** The repo has no custom `dataLayer` event pushes at all —
the only `dataLayer` writes are consent signals in `lib/cookie-consent.ts`. Every
event listed above still has to be written. Nothing is silently half-working.

---

## Order of work

1. Verify GA4 in the container (Q1 sequence above). Nothing else matters until
   a page view is landing in DebugView.
2. Add `donate_open` plus form-submit events. Pure on-domain, unblocks the
   grant application.
3. Mark them as conversions in GA4. Apply for the Ad Grant.
4. Test Zeffy for a completion postMessage (Option B) and check the form
   settings for a redirect URL (Option A). Build `/thank-you` if A is available.
5. Set up Zeffy export reconciliation (Option C) as the dollars source of truth.

---

## Minor issue noticed while reading

`lib/cookie-consent.ts:112` — the fallback `gtag` shim pushes `args` (a real
Array) into `dataLayer`, where the standard shim pushes the `arguments` object.
GTM's consent handling distinguishes them, so consent updates through this path
could be misparsed. In practice `ConsentDefaults` defines `window.gtag` in
`<head>` before this can run, so the fallback should never execute. Low
priority, worth correcting when nearby.
