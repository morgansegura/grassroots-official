import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function TermsScreen() {
  return (
    <LegalScreen
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          These terms govern your use of this website and any donation or
          interaction with Grass Roots Foundation through it. By using this
          site, you agree to these terms. If you don&apos;t agree, please
          don&apos;t use the site.
        </p>
      }
    >
      <section>
        <h2>1. Who we are</h2>
        <p>
          Grassroots Foundation is the registered DBA of Grass Roots Foundation,
          a California public charity recognized by the IRS under Internal
          Revenue Code section 501(c)(3). Our EIN is 35-2822183. Donations are
          tax-deductible to the extent allowed by law.
        </p>
      </section>

      <section>
        <h2>2. Use of the site</h2>
        <p>
          You may use this site for lawful, personal, and informational
          purposes. You agree not to:
        </p>
        <ul>
          <li>
            Use the site in a way that violates any applicable law or
            regulation.
          </li>
          <li>
            Attempt to gain unauthorized access to the site, its systems, or any
            data on it.
          </li>
          <li>
            Introduce malware, scrape content at a rate that disrupts service,
            or interfere with normal operation.
          </li>
          <li>
            Misrepresent your identity, including using a false name when making
            a donation.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Donations</h2>
        <p>
          Donations are processed through our payment partner Zeffy.
          Payment-card information is collected and processed by Zeffy / Stripe
          under their own terms; we do not store payment-card numbers on our
          servers. By donating, you also agree to Zeffy&apos;s terms of service
          for the donation transaction.
        </p>
        <p>
          Donations are made in U.S. dollars. We are a registered California
          501(c)(3) and contributions are tax-deductible to the extent allowed
          by law. The exact deductible amount depends on your individual tax
          situation; consult a tax advisor for specifics.
        </p>
        <p>
          For our full donor protections — including refund handling,
          recurring-gift cancellation, and the AFP Donor Bill of Rights — see
          our <Link href="/donor-privacy">Donor Privacy Policy</Link>.
        </p>
      </section>

      <section>
        <h2>4. Recurring (sustainer) gifts</h2>
        <p>
          If you sign up for a recurring monthly or annual gift, your payment
          method will be charged automatically on the same day each period until
          you cancel. You may cancel at any time by contacting us or through the
          donor portal in our donation platform. Cancellation is effective
          immediately and prevents future charges.
        </p>
      </section>

      <section>
        <h2>5. Refunds</h2>
        <p>
          If you make a gift in error or change your mind within seven (7) days
          of the gift, contact us and we will refund the donation in full. After
          seven days, refund requests are reviewed case-by-case. We will issue
          refunds for confirmed processing errors at any time.
        </p>
      </section>

      <section>
        <h2>6. Intellectual property</h2>
        <p>
          The content on this site — including text, graphics, logos, images,
          and code — is owned by Grass Roots Foundation or used under license.
          You may share links to public pages and use brief quotations with
          attribution. You may not reproduce, modify, or distribute substantial
          portions of the site for commercial use without prior written
          permission.
        </p>
        <p>
          Our name, logos, and other brand marks may not be used to imply
          endorsement, sponsorship, or affiliation without prior written
          permission.
        </p>
      </section>

      <section>
        <h2>7. Third-party links and content</h2>
        <p>
          This site links to third-party sites and embeds third-party services
          (e.g., Zeffy donation form, ProPublica Nonprofit Explorer). We
          don&apos;t control those sites and aren&apos;t responsible for their
          content, privacy practices, or terms. Following a third-party link is
          at your own discretion.
        </p>
      </section>

      <section>
        <h2>8. Disclaimers</h2>
        <p>
          The site is provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; without warranties of any kind, express or implied.
          We do not warrant that the site will be uninterrupted, error-free, or
          free from viruses or other harmful components.
        </p>
        <p>
          Information on this site is for general information only. It is not
          legal, tax, or financial advice. Always consult a qualified
          professional regarding the tax treatment of your donation in your
          specific situation.
        </p>
      </section>

      <section>
        <h2>9. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Grass Roots Foundation, its
          officers, directors, volunteers, and contractors will not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising from your use of (or inability to use) the site. Our
          total liability for any claim arising from these terms or your use of
          the site is limited to the amount of any donation you made in the
          twelve months preceding the claim, or $100, whichever is greater.
        </p>
      </section>

      <section>
        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Grass Roots Foundation and
          its representatives from any claim or demand arising from your
          violation of these terms or your misuse of the site.
        </p>
      </section>

      <section>
        <h2>11. Governing law and jurisdiction</h2>
        <p>
          These terms are governed by the laws of the State of California,
          without regard to conflict-of-laws principles. Any dispute arising
          from these terms or your use of the site will be resolved exclusively
          in the state or federal courts located in San Diego County,
          California, and you consent to personal jurisdiction there.
        </p>
      </section>

      <section>
        <h2>12. Changes to these terms</h2>
        <p>
          We may update these terms from time to time. Material changes will be
          reflected by an updated &ldquo;Last updated&rdquo; date at the top,
          and where appropriate, by a notice on the site or via email to
          subscribers. Your continued use of the site after a change indicates
          acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2>13. Contact</h2>
        <p>
          Questions about these terms? <Link href="/contact">Contact us</Link>.
        </p>
      </section>
    </LegalScreen>
  );
}
