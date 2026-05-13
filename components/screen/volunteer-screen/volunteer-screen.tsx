import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function VolunteerScreen() {
  return (
    <LegalScreen
      eyebrow="Get involved"
      title="Volunteer."
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          <p>
            We are a launch-year organization. The most useful volunteer help
            right now isn&apos;t in-the-field — it&apos;s skill-based: the pro
            bono professional services that get a young nonprofit to the point
            where it can run real programs.
          </p>
          <p>
            As clinics begin and the Class of &apos;26 cohort comes onto the
            roster, the volunteer mix expands to include clinic-day support,
            event setup, family-services liaison work, and other field roles.
          </p>
        </>
      }
    >
      <section>
        <h2>1. Where we need help right now</h2>

        <h3>Pro bono professional services</h3>
        <ul>
          <li>
            <strong>Legal.</strong> Nonprofit attorneys to review state
            registrations, advise on partner-club agreements, and review our
            youth-protection policies.
          </li>
          <li>
            <strong>Accounting and audit prep.</strong> CPAs willing to help
            structure our chart of accounts, set up first-year bookkeeping, and
            prep for a first-year independent review.
          </li>
          <li>
            <strong>Photography and video.</strong> A photographer or
            videographer (San Diego County or willing to travel) for
            partner-club photo days and clinic events. All work is covered by
            parental consent and our{" "}
            <Link href="/safeguarding">Youth Safeguarding</Link> policy.
          </li>
          <li>
            <strong>Editorial / writing.</strong> Help drafting grant
            applications and the foundational story long-form (annual report,
            blog).
          </li>
          <li>
            <strong>Web / engineering.</strong> If you&apos;re a developer who
            has shipped donor portals, CRM integrations, or scholarship intake
            forms — we&apos;ll be building those soon and can use experienced
            eyes.
          </li>
          <li>
            <strong>Spanish-language translation.</strong> Site copy and
            family-facing materials translated for the South Bay community we
            serve.
          </li>
        </ul>

        <h3>Operational and field support (post-launch)</h3>
        <ul>
          <li>
            <strong>Clinic-day support.</strong> Field setup, sign-in, equipment
            distribution, and liaison work between coaches and
            scholarship-recipient families.
          </li>
          <li>
            <strong>Event volunteers.</strong> Fundraising events, partner-club
            meet-and-greets, and donor-facing receptions.
          </li>
          <li>
            <strong>Family services liaison.</strong> Bilingual volunteers who
            can support partner-club intake processes for Spanish-speaking
            families.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Background checks and youth-protection training</h2>
        <p>
          Volunteers in roles with direct contact with minors complete a
          background-check process appropriate to their role and
          youth-protection training before their first direct contact.
          Background checks and training are renewed at least every two years.
          See our <Link href="/safeguarding">Youth Safeguarding policy</Link>{" "}
          for the full posture, including the &ldquo;two-deep, observable,
          interruptible&rdquo; standard we follow.
        </p>
        <p>
          For pro bono professional roles that don&apos;t involve direct contact
          with minors (legal, accounting, web, editorial), background checks are
          not required.
        </p>
      </section>

      <section>
        <h2>3. What volunteering with us is not</h2>
        <ul>
          <li>
            <strong>Not a coaching role.</strong> Direct coaching is delivered
            by partner-club personnel under their own credentialing and
            SafeSport-aligned policies. We don&apos;t place volunteer coaches on
            partner-club teams.
          </li>
          <li>
            <strong>Not a recurring time commitment by default.</strong> Most
            volunteer engagements are project-scoped or event- based. Recurring
            roles are negotiated case by case.
          </li>
          <li>
            <strong>Not a credentialing pathway.</strong> Volunteering
            doesn&apos;t qualify a person for paid roles in partner clubs or in
            our organization later. We treat volunteer time as a gift, full
            stop.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. How to get involved</h2>
        <ol>
          <li>
            <Link href="/contact">Reach out</Link>&nbsp; with a short note about
            your skills, capacity, and what you&apos;d like to contribute. Two
            sentences is enough.
          </li>
          <li>
            We will respond within five business days with the next step —
            typically a 20-minute call to identify the right fit.
          </li>
          <li>
            For roles requiring background checks, we walk through that process
            alongside any required youth-protection training before the role
            begins.
          </li>
        </ol>
      </section>

      <section>
        <h2>5. Volunteer recognition</h2>
        <p>
          Volunteers are acknowledged in our annual report (with opt-in). For
          pro bono engagements that meaningfully advanced the organization, we
          are happy to provide a written attestation suitable for professional
          development records, firm pro bono reporting, or LinkedIn endorsement.
        </p>
      </section>
    </LegalScreen>
  );
}
