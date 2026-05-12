import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function FinancialsScreen() {
  return (
    <LegalScreen
      eyebrow="Transparency"
      title="Form 990 &amp; financials."
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          <p>
            We are a launch-year organization. Our first IRS Form 990 will be
            filed for the fiscal year ending June 30, 2027 and published here
            the day it is filed — unredacted, alongside audited financials when
            available.
          </p>
          <p>
            Until then, this page documents what we are, what we&apos;re
            registered to do, and where our public records can be verified
            independently.
          </p>
        </>
      }
    >
      <section>
        <h2>1. Organization status</h2>
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
            <strong>Federal status:</strong> 501(c)(3) public charity
            (IRS-recognized; contributions deductible under section 170)
          </li>
          <li>
            <strong>State of formation:</strong> California
          </li>
          <li>
            <strong>Fiscal year:</strong> July 1 – June 30
          </li>
          <li>
            <strong>First fiscal year:</strong> FY 2026–2027 (closing June 30,
            2027)
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Form 990 filing schedule</h2>
        <p>
          501(c)(3) organizations file Form 990 (or 990-EZ, depending on gross
          receipts) annually, due 4½ months after the close of the fiscal year.
          Our first filing schedule:
        </p>
        <ul>
          <li>
            <strong>FY 2026–2027 (first filing):</strong> Due by November 15,
            2027. Will be published on this page within seven (7) days of
            filing.
          </li>
          <li>
            <strong>Subsequent years:</strong> Each fiscal year&apos;s filing
            will be added to this page within seven days of submission to the
            IRS.
          </li>
        </ul>
        <p>
          We do not redact any portion of our 990 that is required to be
          publicly disclosed. Schedule B (donor information) is shielded from
          public disclosure for 501(c)(3) organizations under federal law and is
          not posted; this is standard practice and complies with IRS rules.
        </p>
      </section>

      <section>
        <h2>3. Independent public verification</h2>
        <p>
          You can verify our IRS recognition and (once filed) inspect our 990
          through these third-party sources:
        </p>
        <ul>
          <li>
            <strong>IRS Tax-Exempt Organization Search.</strong>{" "}
            <a
              href="https://apps.irs.gov/app/eos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              apps.irs.gov/app/eos
            </a>{" "}
            — look up by EIN <code>35-2822183</code>.
          </li>
          <li>
            <strong>ProPublica Nonprofit Explorer.</strong>{" "}
            <a
              href="https://projects.propublica.org/nonprofits/organizations/352822183"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our profile
            </a>{" "}
            — surfaces 990s shortly after IRS publication.
          </li>
          <li>
            <strong>Candid (formerly GuideStar) profile.</strong> We maintain an
            active Candid profile and are working through the transparency tiers
            (Bronze → Silver → Gold → Platinum). The Platinum tier requires
            audited financials, multi-year goals, and strategy disclosure —
            it&apos;s the most rigorous transparency standard available to U.S.
            nonprofits.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Annual report</h2>
        <p>
          A pre-launch annual letter — covering the organization&apos;s
          formation, donor baseline, and planned activity — will be published at
          the close of fiscal year 2026–2027 alongside the first Form 990. After
          that, annual reports follow the same calendar: a written narrative
          report plus the filed 990, posted here and emailed to all subscribers.
        </p>
      </section>

      <section>
        <h2>5. How we steward each dollar</h2>
        <p>
          Until audited financials are available, here is what we can commit to
          in advance:
        </p>
        <ul>
          <li>
            <strong>Direct program spending</strong> covers tuition, kit,
            equipment, and clinic costs paid directly to partner club programs
            on behalf of identified scholarship recipients.
          </li>
          <li>
            <strong>Operational spending</strong> covers payment-platform fees
            (Zeffy / Stripe), the IRS-recognition and California registration
            fees, the website, and basic insurance. We have no paid staff at
            launch.
          </li>
          <li>
            <strong>No paid fundraisers.</strong> Outreach is conducted by
            volunteers and the founding board.
          </li>
          <li>
            <strong>No commission-based solicitation.</strong> No third party is
            paid a percentage of donations raised.
          </li>
        </ul>
        <p>
          Once the first 990 is filed, this page will publish program- expense
          ratios, fundraising-expense ratios, and management-and- general
          expense ratios calculated from audited numbers — not self-reported
          claims.
        </p>
      </section>

      <section>
        <h2>6. State registration</h2>
        <p>
          We comply with California&apos;s Registry of Charitable Trusts
          requirements, including initial registration (Form CT-1) and annual
          filings (Form RRF-1). California-registered status is publicly
          searchable through the California Attorney General&apos;s Registry of
          Charities and Fundraisers:{" "}
          <a
            href="https://oag.ca.gov/charities/registry"
            target="_blank"
            rel="noopener noreferrer"
          >
            oag.ca.gov/charities/registry
          </a>
          .
        </p>
      </section>

      <section>
        <h2>7. Audit and review policy</h2>
        <p>
          We will engage a qualified independent CPA firm to review our first
          full fiscal year and to perform a full audit when the
          organization&apos;s gross receipts cross the threshold customary for
          that practice (typically $500,000 in annual revenue). The board&apos;s
          finance committee will meet at least quarterly and review monthly
          statements.
        </p>
      </section>

      <section>
        <h2>8. Donor protections</h2>
        <p>
          Our financial transparency commitments sit alongside the donor
          protections documented in our{" "}
          <Link href="/donor-privacy">Donor Privacy Policy</Link>: we do not
          sell, rent, trade, or share donor information; we adhere to the AFP
          Donor Bill of Rights; and we honor refund requests within seven days
          of any gift, no questions asked.
        </p>
      </section>

      <section>
        <h2>9. Questions</h2>
        <p>
          For questions about our financials, governance, or audit posture,{" "}
          <Link href="/contact">contact us</Link>. Inquiries from donors,
          foundation officers, due-diligence researchers, or regulators are
          answered as a priority.
        </p>
      </section>
    </LegalScreen>
  );
}
