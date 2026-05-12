import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function DonorPrivacyScreen() {
  return (
    <LegalScreen
      eyebrow="Legal"
      title="Donor Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          Your gift carries trust. We treat donor information with that in mind.
          This policy is specific to donors and supplements our general{" "}
          <Link href="/privacy">Privacy Policy</Link>. Where the two conflict on
          donor-specific matters, this one governs.
        </p>
      }
    >
      <section>
        <h2>1. The Donor Bill of Rights</h2>
        <p>
          We adhere to the <em>Donor Bill of Rights</em> as published by the
          Association of Fundraising Professionals (AFP), the Council for
          Advancement and Support of Education (CASE), and the Giving Institute.
          As a donor, you have the right:
        </p>
        <ol>
          <li>
            To be informed of the organization&apos;s mission, the way the
            organization intends to use donated resources, and its capacity to
            use donations effectively for their intended purposes.
          </li>
          <li>
            To be informed of the identity of those serving on the
            organization&apos;s governing board, and to expect the board to
            exercise prudent judgment in its stewardship responsibilities.
          </li>
          <li>
            To have access to the organization&apos;s most recent financial
            statements.
          </li>
          <li>
            To be assured your gifts will be used for the purposes for which
            they were given.
          </li>
          <li>To receive appropriate acknowledgement and recognition.</li>
          <li>
            To be assured that information about your donation is handled with
            respect and with confidentiality to the extent provided by law.
          </li>
          <li>
            To expect that all relationships with individuals representing the
            organization will be professional in nature.
          </li>
          <li>
            To be informed whether those seeking donations are volunteers,
            employees of the organization, or hired solicitors.
          </li>
          <li>
            To have the opportunity for your name to be deleted from mailing
            lists that an organization may intend to share.
          </li>
          <li>
            To feel free to ask questions when making a donation and to receive
            prompt, truthful, and forthright answers.
          </li>
        </ol>
      </section>

      <section>
        <h2>2. We never sell, rent, trade, or share your information</h2>
        <p>
          <strong>
            We do not sell, rent, trade, or share donor names, addresses, email
            addresses, phone numbers, or any other personal information with any
            third party for their own marketing or fundraising purposes.
          </strong>{" "}
          This applies to current donors, prospective donors, and anyone who has
          previously given.
        </p>
        <p>
          Some nonprofits exchange or rent donor lists with other nonprofits. We
          do not. If that ever changed, we would notify donors first and provide
          an opportunity to opt out before any information was shared.
        </p>
      </section>

      <section>
        <h2>3. What we do with donor information</h2>
        <ul>
          <li>
            <strong>Process the gift</strong> through our payment processor and
            issue a tax-deductible acknowledgement.
          </li>
          <li>
            <strong>Communicate with you</strong> about how your gift was used
            and the impact of our work — at the cadence you choose.
          </li>
          <li>
            <strong>Recognize you</strong>, if and only if you have
            affirmatively consented to recognition (see below).
          </li>
          <li>
            <strong>Comply with the law</strong> — including IRS Form 990 and
            Schedule B reporting where legally required.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Anonymous and named gifts</h2>
        <p>
          Every donor may give anonymously. Anonymous gifts are recorded in our
          internal records (we still need the information to issue your tax
          receipt and meet IRS requirements), but your name will not appear in
          donor recognition, publications, websites, donor walls, or any other
          public-facing material.
        </p>
        <p>
          If you choose to be recognized, we will use your name only as you
          specifically authorize — the name and form (e.g., &ldquo;The Smith
          Family,&rdquo; &ldquo;In memory of Maria Lopez&rdquo;, first-name
          only, etc.) are your call. Recognition consent is opt-in, not opt-out.
        </p>
      </section>

      <section>
        <h2>5. Communication preferences</h2>
        <p>
          You control how often and through which channels we contact you. Every
          email includes an unsubscribe link, and you can adjust preferences
          (frequency, channel, topic) at any time by contacting us.
        </p>
        <p>
          Donors who unsubscribe from email will continue to receive legally
          required communications (e.g., tax receipts, change-of- terms
          notices). You can request that we stop all communication entirely;
          we&apos;ll honor that request and only retain the minimum information
          required by law.
        </p>
      </section>

      <section>
        <h2>6. IRS reporting and donor confidentiality</h2>
        <p>
          As a 501(c)(3) public charity, we are required to file IRS Form 990
          annually. Schedule B of Form 990 contains certain contributor
          information; the IRS protects most of this information from public
          disclosure for 501(c)(3) organizations, and we don&apos;t voluntarily
          disclose donor names or addresses on public filings.
        </p>
        <p>
          Aggregate financial information (total contributions, expenses,
          program ratios) is public on our Form 990 and on platforms like Candid
          and ProPublica Nonprofit Explorer. Individual donor names and amounts
          are not.
        </p>
      </section>

      <section>
        <h2>7. Donor data retention</h2>
        <p>
          Donation records (donor name, gift amount, gift date, designation, tax
          acknowledgement) are retained for at least seven years to meet IRS
          recordkeeping requirements. After that period, records may be
          archived, anonymized for historical aggregate reporting, or deleted.
        </p>
      </section>

      <section>
        <h2>8. Refunds and gift adjustments</h2>
        <p>
          If you make a gift in error or change your mind within seven days of
          the gift, contact us and we&apos;ll refund the donation. After seven
          days, refunds are at our discretion and are reviewed case-by-case.
          Recurring (sustainer) gifts may be cancelled at any time and stop with
          the next billing cycle.
        </p>
      </section>

      <section>
        <h2>9. Questions, requests, concerns</h2>
        <p>
          If you have a question about your gift, want to update or correct your
          information, request anonymity for past or future gifts, or have any
          other concern, <Link href="/contact">contact us</Link> directly. Donor
          requests are prioritized and acknowledged within three business days.
        </p>
      </section>
    </LegalScreen>
  );
}
