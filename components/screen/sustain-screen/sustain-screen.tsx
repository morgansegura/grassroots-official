import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function SustainScreen() {
  return (
    <LegalScreen
      eyebrow="Sustainer program"
      title="First Touch: help a kid play all season."
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          <p>
            <strong>First Touch is our monthly giving program.</strong> A
            monthly gift helps a San Diego kid play club soccer with their
            friends, season after season. Depending on the amount, it covers
            cleats, a season&apos;s kit, or a real share of a season&apos;s
            tuition.
          </p>
          <p>
            Single gifts fund the Class of &apos;26 directly. First Touch
            sustainers also fund the kids who join in 2027, 2028, and 2029.
            Predictable monthly support is what turns a one-year cohort into a
            multi-year roster.
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
          Monthly giving also adds up. A gift of $100 a month is $1,200 a year,
          about half a season of tuition at Chula Vista FC. Over two years, it
          covers a full season. Few donors can give that much at once, but many
          can give it a month at a time.
        </p>
      </section>

      <section>
        <h2>2. Sustainer tiers</h2>

        <h3>$25 a month: cleats for a growing player</h3>
        <p>
          $300 a year covers a good pair of cleats, and a new pair when a
          growing player needs one mid-season. Cleats run $60 to $300.
        </p>

        <h3>$50 a month: a full season&apos;s kit</h3>
        <p>
          $600 a year covers a player&apos;s match and training kit for the
          season, which runs $300 to $600.
        </p>

        <h3>$100 a month: half a season of tuition</h3>
        <p>
          $1,200 a year covers about half a season of tuition at Chula Vista FC,
          where a season runs $2,500. At clubs where a season runs $4,500, it
          covers about a quarter.
        </p>

        <h3>$250 a month: a full season of tuition</h3>
        <p>
          $3,000 a year covers a full season of tuition at Chula Vista FC, with
          some left for kit. If you&apos;d like to be recognized at this level,
          reach out and we&apos;ll design it with you.
        </p>
      </section>

      <section>
        <h2>3. How sustainer giving compounds</h2>
        <p>
          Sustainer gifts unlock something single gifts can&apos;t: multi-year
          retention. When we tell a partner-club coach &ldquo;this kid is
          funded&rdquo; in July, we are committing through the following spring.
          Sustainer revenue is what makes that commitment safe to make. Every
          year a kid stays with their team is another year of growing as a
          player and a friend.
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
