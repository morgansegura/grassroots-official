import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function PressScreen() {
  return (
    <LegalScreen
      eyebrow="Press"
      title="Press &amp; media."
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          Reporters, producers, and editors covering youth sports access, San
          Diego County nonprofits, the cost of competitive youth soccer, or the
          World Cup 2026 community impact: we&apos;re available. Background,
          on-the-record interviews, data, and partner-club introductions where
          appropriate.
        </p>
      }
    >
      <section>
        <h2>Boilerplate</h2>
        <p>
          Grassroots Foundation is a San Diego County 501(c)(3) public charity
          working to remove the cost barrier that prices working-class families
          out of competitive youth soccer. We partner directly with established
          San Diego club programs to fund tuition, kit, equipment, and clinic
          costs for need-qualified youth players in their existing teams. Our
          founding cohort, the Class of &apos;26, is funding 100 youth players
          in San Diego County by World Cup 2026.
        </p>
      </section>

      <section>
        <h2>Key facts</h2>
        <ul>
          <li>
            <strong>Legal name:</strong> Grass Roots Foundation
          </li>
          <li>
            <strong>DBA:</strong> Grassroots Foundation
          </li>
          <li>
            <strong>EIN:</strong> 35-2822183
          </li>
          <li>
            <strong>Status:</strong> 501(c)(3) public charity, IRS-recognized
          </li>
          <li>
            <strong>Geography served:</strong> San Diego County, California —
            Phase 1 South Bay (Chula Vista, National City, San Ysidro, Imperial
            Beach); Phase 2 East County
          </li>
          <li>
            <strong>Programs:</strong> Player Scholarships, Team Sponsorship,
            Kit &amp; Uniform Grants, Equipment Grants, Methodology Clinic
            Access — five programs covering every layer of the cost stack
          </li>
          <li>
            <strong>Founding cohort:</strong> Class of &apos;26 — 100 youth
            players funded in San Diego County by World Cup 2026
          </li>
          <li>
            <strong>Public profiles:</strong>{" "}
            <a
              href="https://projects.propublica.org/nonprofits/organizations/352822183"
              target="_blank"
              rel="noopener noreferrer"
            >
              ProPublica Nonprofit Explorer
            </a>
            {" · "}Candid (in progress to Platinum transparency)
          </li>
        </ul>
      </section>

      <section>
        <h2>Story angles</h2>
        <p>
          For reporters looking for a frame, here are the angles we can speak to
          with primary detail:
        </p>
        <ul>
          <li>
            The actual all-in cost of competitive youth soccer in San Diego
            County (tuition, kit, equipment, travel, ID camps)
          </li>
          <li>
            How partner-club integration differs from running parallel
            scholarship programs — operational, financial, and outcomes
            differences
          </li>
          <li>
            Self-sustaining clinic economics — paying spots underwriting
            scholarship spots, and what makes that model durable
          </li>
          <li>
            World Cup 2026 as a community-impact moment in San Diego County and
            across the host-city region
          </li>
          <li>
            The South Bay youth-soccer landscape — populations served,
            partner-club ecosystem, and where the cost barrier is most acute
          </li>
          <li>
            Donor-tier laddering — how nonprofits at our scale can structure
            giving so every gift level maps to a definable outcome
          </li>
        </ul>
      </section>

      <section>
        <h2>What we will not do</h2>
        <ul>
          <li>
            Identify a minor in our scholarship program by name, image, quote,
            or any combination of identifying details, without written parental
            consent for that specific story. See our{" "}
            <Link href="/safeguarding">Youth Safeguarding</Link> policy.
          </li>
          <li>
            Publicly name our partner-club programs without their written
            permission for the specific story.
          </li>
          <li>
            Discuss specific donor identities or gift amounts beyond what is
            disclosed by the donor publicly or required by IRS reporting.
          </li>
          <li>
            Speak to other organizations&apos; programs or comment on specific
            clubs we don&apos;t partner with.
          </li>
        </ul>
      </section>

      <section>
        <h2>Press contact</h2>
        <p>
          For interview requests, fact-checking, image requests, or background
          conversations, please{" "}
          <Link href="/contact">reach out through our contact form</Link> and
          identify yourself as a member of the press. We aim to respond within
          one business day for media inquiries.
        </p>
      </section>

      <section>
        <h2>Brand assets</h2>
        <p>
          Logo files, brand-color references, and approved headshots are
          available on request through the contact form above. Use of our name
          or marks to imply endorsement, sponsorship, or affiliation requires
          prior written permission.
        </p>
      </section>
    </LegalScreen>
  );
}
