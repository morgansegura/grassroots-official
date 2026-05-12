import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function ApplyScreen() {
  return (
    <LegalScreen
      eyebrow="For families"
      title="Apply for a scholarship."
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          <p>
            Need-based scholarships covering tuition, kit, equipment, and clinic
            spots at partner club programs in San Diego County. No auditions. No
            merit gates. Confidential intake.
          </p>
          <p>
            We are a launch-year organization. Intake is currently routed
            through our partner-club family services contacts; direct
            applications open as we expand. The fastest path to a scholarship
            today is through your existing club&apos;s family services
            coordinator.
          </p>
        </>
      }
    >
      <section>
        <h2>1. Who&apos;s eligible</h2>
        <p>
          Eligibility is based on financial need, not athletic merit. We fund
          kids whose families would otherwise step away from competitive soccer
          because of cost. To be considered:
        </p>
        <ul>
          <li>
            The kid plays — or wants to play — at a San Diego County
            partner-club program. (As we add partner clubs, the list of eligible
            programs grows.)
          </li>
          <li>
            Household financial need can be confirmed through standard income
            documentation. Need is reviewed confidentially through the partner
            club&apos;s family services contact.
          </li>
          <li>
            The kid is between roughly age 8 and the end of high school (we
            focus on the 11–17 developmental window where most cost- driven
            dropoff occurs, but we don&apos;t hard-cap below that).
          </li>
          <li>
            The family commits to participating in the season — practices,
            games, and travel — at a level reasonable for their kid&apos;s team.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. What scholarships cover</h2>
        <p>
          Scholarships are structured around the actual cost stack a family
          faces. Coverage depends on the kid&apos;s competitive tier and the
          program they&apos;re in, but in general:
        </p>
        <ul>
          <li>
            <strong>Tuition</strong> — full or partial club tuition for the
            season.
          </li>
          <li>
            <strong>Kit &amp; uniform</strong> — match-day kit, training kit,
            team bag.
          </li>
          <li>
            <strong>Equipment</strong> — cleats, ball, shin guards, training
            bag. Goalkeepers receive a dedicated equipment tier.
          </li>
          <li>
            <strong>Methodology clinics</strong> — reserved seats at
            elite-methodology training clinics held on partner-club fields.
          </li>
        </ul>
        <p>
          Scholarships are renewable each season as long as the kid is on the
          roster. Families plan for multi-year participation, not an annual
          lottery.
        </p>
      </section>

      <section>
        <h2>3. How to apply right now</h2>
        <p>
          For the launch year, intake is run through partner-club family
          services contacts. The fastest path:
        </p>
        <ol>
          <li>
            Contact your club&apos;s family services or financial assistance
            coordinator. If you don&apos;t know who that is, the registrar or
            director of operations can point you to the right person.
          </li>
          <li>
            Tell them your family is exploring need-based assistance and ask
            whether the club partners with Grassroots Foundation. If they do,
            the family services contact will surface your family&apos;s
            information to us through their existing confidential intake.
          </li>
          <li>
            We confirm the partnership relationship, review the intake, and
            respond to the partner club typically within two weeks. Families
            receive notification through their club, not from us directly, to
            keep the relationship close to the kid&apos;s existing team.
          </li>
        </ol>
        <p>
          If you don&apos;t have a club yet, or your club isn&apos;t a partner
          program, <Link href="/contact">contact us directly</Link> and we will
          help orient you to the closest partner-club option in your area.
        </p>
      </section>

      <section>
        <h2>4. What we ask of families</h2>
        <ul>
          <li>
            <strong>Honest information.</strong> The intake process is
            confidential, but it depends on accurate household financial
            information. False information disqualifies the application.
          </li>
          <li>
            <strong>Stay engaged with the team.</strong> Scholarships are
            renewed each season for kids who remain part of the roster and the
            developmental pathway.
          </li>
          <li>
            <strong>Tell us when something changes.</strong> Family
            circumstances change. If financial need changes substantially in
            either direction, let us know — we adjust scholarships or rotate
            funding to other kids accordingly.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Confidentiality and privacy</h2>
        <p>
          Family financial information is collected by partner clubs under their
          existing privacy practices and shared with us only at the level
          required to administer the scholarship. We do not publish identifiable
          information about scholarship recipients or their families. Stories
          from recipients are only published with explicit written consent and
          can be removed at any time. See our{" "}
          <Link href="/safeguarding">Youth Safeguarding</Link> policy for the
          full posture.
        </p>
      </section>

      <section>
        <h2>6. Questions</h2>
        <p>
          For families with questions about eligibility, the scholarship
          process, or how to identify your nearest partner-club program,
          <Link href="/contact"> contact us</Link>. Family inquiries are
          answered within three business days.
        </p>
      </section>
    </LegalScreen>
  );
}
