import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function StoryScreen() {
  return (
    <LegalScreen
      eyebrow="Our story"
      title="Why this exists."
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          Grassroots Foundation came out of a problem that working-class soccer
          families in San Diego know firsthand: competitive youth soccer in
          America runs on a tuition check most families can&apos;t write. A
          talented kid whose family can&apos;t afford the club fees doesn&apos;t
          go play somewhere else. They stop playing. That gap, repeating
          thousands of times across one county, is what this organization exists
          to close.
        </p>
      }
    >
      <section>
        <h2>The cost stack</h2>
        <p>
          Club soccer in San Diego runs $2,000–$5,000 in tuition alone, and
          roughly $11,000 a year all-in once travel, kits, equipment, and
          training stack on top. Talented kids from working-class families price
          out long before the season starts — often between ages 11 and 13, the
          developmental window when most youth-soccer dropoff occurs.
        </p>
        <p>
          This is not a niche problem. It&apos;s the predictable arithmetic of
          how American youth sports work. In most countries, talented kids train
          through publicly-funded academies. In the United States, families pay
          club fees for the same development path — and the families who
          can&apos;t pay don&apos;t get the path.
        </p>
      </section>

      <section>
        <h2>Free is the goal. Affordable for now.</h2>
        <p>
          The North-Star moral position is simple: soccer should be free for
          every kid. The honest realism: we&apos;re not going to dismantle the
          American pay-to-play system overnight, and lying to donors about how
          fast that&apos;ll happen is the fastest way to lose their trust. So we
          hold both at once. <strong>Free is the goal.</strong> Affordable, for
          now, is what we&apos;re delivering.
        </p>
        <p>
          Every gift, at every level, removes a layer of the cost stack for one
          more kid. $60 covers a pair of cleats. $200 covers a full
          season&apos;s kit. $2,500 covers a full season of tuition. $25,000
          underwrites an entire team. Every level of giving maps to a definable,
          namable outcome a donor can point to.
        </p>
      </section>

      <section>
        <h2>Why we work through partner clubs</h2>
        <p>
          We don&apos;t run our own teams. We work directly with established San
          Diego club programs to identify need-qualified families and pay
          tuition, kit, equipment, and clinic costs on their behalf. The kid
          stays in their existing team and developmental pathway. The coach who
          already knows them keeps coaching them. The teammates they&apos;ve
          been playing with stay their teammates.
        </p>
        <p>
          This was the most consequential design decision we made. Running
          parallel programs would double the cost of every dollar raised —
          facilities, coaching staff, insurance, league fees — and pull kids out
          of teams where they were already developing. Partner-club integration
          means a higher percentage of each dollar reaches a kid&apos;s actual
          season.
        </p>
      </section>

      <section>
        <h2>Need-based intake, no auditions</h2>
        <p>
          Scholarships are awarded on financial need, not on athletic tryout. We
          don&apos;t run merit gates, we don&apos;t require tape, we don&apos;t
          ask kids to audition for our help. Partner clubs surface candidate
          families through their existing family services contacts; households
          verify income confidentially; decisions stay private to the family and
          the club.
        </p>
        <p>
          Scholarships are renewable each season for as long as the kid is on
          the roster. Families plan for multi-year participation, not an annual
          lottery.
        </p>
      </section>

      <section>
        <h2>Why San Diego first</h2>
        <p>
          San Diego County is where the cost reality is firsthand. The South Bay
          communities — Chula Vista, National City, San Ysidro, and Imperial
          Beach — are some of the most concentrated working-class soccer-loving
          households in the country. East County, including the largest
          Iraqi-American community in the U.S. and significant
          refugee-resettlement populations, is phase 2 of the same model.
        </p>
        <p>
          Specificity is a strength. We prove the model where the cost barrier
          is most acute, with partner clubs we already have relationships with,
          before we expand. National-scale aspiration before the local model is
          proven is what kills small nonprofits. We&apos;re going to prove it
          here first.
        </p>
      </section>

      <section>
        <h2>Where we&apos;re going</h2>
        <h3>Near-term — the Class of &apos;26</h3>
        <p>
          Fund 100 youth players in San Diego County, kept in competitive soccer
          through World Cup 2026, regardless of what their family can afford.
          The cohort begins fall 2026. Founding donors fund the first names on
          the roster.
        </p>
        <h3>Mid-term — partner expansion and team sponsorships</h3>
        <p>
          Extend the model to additional San Diego County club programs and add
          team-level sponsorships at the highest competitive tiers (DPL, MLS
          Next, ECNL), where the per-kid cost barrier is steepest. Three-to-five
          sponsored teams across multiple competitive levels by year three.
        </p>
        <h3>Long-term — prove what free looks like</h3>
        <p>
          Free is the goal. We exist to demonstrate, in San Diego, what youth
          soccer access looks like when cost is no longer the deciding factor in
          a kid&apos;s participation. The model proves here first, then expands.
        </p>
      </section>

      <section>
        <h2>Governance and transparency</h2>
        <p>
          Grassroots Foundation is the registered DBA of Grass Roots Foundation,
          a California public charity recognized by the IRS under section
          501(c)(3). Our EIN is 35-2822183.
        </p>
        <p>
          We are a launch-year organization. Our first IRS Form 990 will publish
          at the close of our first fiscal year. Until then, our governance
          posture is publicly documented on our Candid nonprofit profile and on
          the ProPublica Nonprofit Explorer:
        </p>
        <ul>
          <li>
            <a
              href="https://projects.propublica.org/nonprofits/organizations/352822183"
              target="_blank"
              rel="noopener noreferrer"
            >
              ProPublica Nonprofit Explorer — Grass Roots Foundation
            </a>
          </li>
          <li>
            <Link href="/990">Form 990 &amp; financial transparency</Link>
          </li>
        </ul>
        <p>
          We are committed to the AFP Donor Bill of Rights and never sell, rent,
          or trade donor information. Our policies are documented in full at{" "}
          <Link href="/donor-privacy">Donor Privacy</Link> and{" "}
          <Link href="/safeguarding">Youth Safeguarding</Link>.
        </p>
      </section>

      <section>
        <h2>How to be part of it</h2>
        <p>
          The most useful thing a donor can do today is fund the founding cohort
          directly. Every gift puts a name on the Class of &apos;26 roster.
        </p>
        <ul>
          <li>
            <Link href="/donate">Donate</Link> — single gifts at every level.
          </li>
          <li>
            <Link href="/sustain">Become a First Touch sustainer</Link> —
            monthly giving funds the cohort year over year.
          </li>
          <li>
            <Link href="/sponsor">Sponsor a clinic</Link> — clinic seats are the
            most directly fundable unit; every paying spot funds a scholarship
            spot.
          </li>
          <li>
            <Link href="/programs">See the five programs</Link> we&apos;re
            launching, in full.
          </li>
        </ul>
      </section>
    </LegalScreen>
  );
}
