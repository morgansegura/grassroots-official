import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function SustainScreen() {
  return (
    <LegalScreen
      eyebrow="Sustainer program"
      title="First Touch — keep a kid in the game."
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          <p>
            <strong>$50 a month keeps a kid in the game.</strong> That&apos;s
            the math behind our sustainer program. A recurring monthly gift
            covers tuition, kit, equipment, and clinic spots over the course of
            a season — for one kid, for real, year over year.
          </p>
          <p>
            Single gifts fund the Class of &apos;26 directly. First Touch
            sustainers fund the cohorts that come after — the kids who join in
            2027, 2028, 2029. Predictable monthly support is what turns a
            one-year cohort into a multi-year roster.
          </p>
        </>
      }
    >
      <section>
        <h2>1. Why monthly giving matters</h2>
        <p>
          Most one-time gifts arrive in November and December. That rhythm
          doesn&apos;t match how kids&apos; seasons work — a fall-spring
          competitive year requires funding lined up in July, not December.
          Monthly sustainer gifts give us the predictable revenue we need to
          commit to a kid&apos;s scholarship in advance, without waiting on
          year-end fundraising to clear.
        </p>
        <p>
          Monthly giving also compounds. A donor who gives $50/month for three
          years has funded one kid&apos;s entire competitive arc — plus the kit,
          clinic seats, and equipment that go with it. Single-shot $1,800 gifts
          are rarer; the compounding monthly version reaches the same outcome at
          a tier most donors can actually meet.
        </p>
      </section>

      <section>
        <h2>2. Sustainer tiers</h2>

        <h3>$25 a month — Equipment and kit</h3>
        <p>
          Covers cleats, ball, shin guards, and a season of training kit
          replacements for one kid. A season&apos;s worth of gear replacement,
          prevented from being a season-ending crisis.
        </p>

        <h3>$50 a month — Adopt a kid for a season</h3>
        <p>
          Underwrites the equivalent of one full season of partial tuition
          coverage at a community-tier club program, plus equipment and kit. The
          flagship First Touch tier — most sustainers give here.
        </p>

        <h3>$100 a month — A scholarship plus a clinic spot</h3>
        <p>
          Funds a more substantial tuition slice and adds reserved
          methodology-clinic seats to the kid&apos;s development cycle.
          Compounds quickly: at three years, this tier funds a single kid&apos;s
          full multi-year arc.
        </p>

        <h3>$250 a month — Multi-kid impact</h3>
        <p>
          At this tier, your sustainer commitment funds tuition slices for
          multiple kids on the same partner-club team, plus a clinic-day
          reserved seat allocation. Major-gift sustainer tier; reach out for
          recognition design.
        </p>
      </section>

      <section>
        <h2>3. How sustainer giving compounds</h2>
        <p>
          Sustainer gifts unlock something single gifts can&apos;t: multi-year
          retention. When we tell a partner-club coach &ldquo;this kid is
          funded&rdquo; in July, we are committing through the following spring.
          Sustainer revenue is what makes that commitment safe to make. Every
          additional year a kid stays in the game is another year of development
          — and another year they can&apos;t be priced out.
        </p>
      </section>

      <section>
        <h2>4. What you get back</h2>
        <ul>
          <li>
            <strong>Quarterly impact updates</strong> with a clear picture of
            cohort funding, kids funded, and what each quarter&apos;s sustainer
            revenue covered.
          </li>
          <li>
            <strong>Annual report</strong> alongside our 990 — the clearest
            possible accounting of where your monthly gift went.
          </li>
          <li>
            <strong>Recognition options</strong> at every tier. Default is
            anonymous; opt-in to be named on the donor wall on this site, in the
            annual report, or both.
          </li>
          <li>
            <strong>Tax-deductible receipts</strong> emailed each calendar year,
            formatted for IRS reporting.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Cancellation and changes</h2>
        <p>
          Cancel anytime. Sustainer gifts process through our donation platform;
          cancellation is effective immediately and prevents future charges.
          Changing tier, billing date, or payment method is straightforward
          through the same flow. We never push back on cancellations or ask why;
          circumstances change.
        </p>
      </section>

      <section>
        <h2>6. Become a First Touch sustainer</h2>
        <p>
          The fastest path is <Link href="/donate">our donation flow</Link>
          &nbsp; — choose &ldquo;Monthly&rdquo; on the amount step. If
          you&apos;re considering a $250+ monthly tier or want to discuss
          multi-year structure, <Link href="/contact">reach out directly</Link>
          &nbsp; and we&apos;ll design the recognition and reporting alongside
          you.
        </p>
      </section>
    </LegalScreen>
  );
}
