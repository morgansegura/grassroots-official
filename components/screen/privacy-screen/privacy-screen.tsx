import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function PrivacyScreen() {
  return (
    <LegalScreen
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          Grass Roots Foundation (&ldquo;Grassroots Foundation,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This policy
          explains what information we collect when you visit this site or
          interact with our organization, how we use it, who we share it with,
          and the choices you have. If you donate, please also read our{" "}
          <Link href="/donor-privacy">Donor Privacy Policy</Link>, which covers
          the additional commitments we make to donors.
        </p>
      }
    >
      <section>
        <h2>1. Information we collect</h2>
        <p>
          We only collect information that&apos;s necessary to operate the
          organization, communicate with you, and meet our legal obligations.
          The categories below cover everything we collect; we don&apos;t
          collect information for purposes not listed here.
        </p>

        <h3>Information you give us directly</h3>
        <ul>
          <li>
            <strong>Donation information.</strong> Name, email, billing address,
            gift amount, frequency, and any message or designation you include.
            Payment-card details go directly to our payment processor (Zeffy)
            and are never stored on our servers.
          </li>
          <li>
            <strong>Email signups.</strong> Email address and (optionally) a
            first name when you subscribe to our newsletter.
          </li>
          <li>
            <strong>Contact form / direct inquiries.</strong> Whatever you
            choose to include in a message — typically name, email, and the
            content of the inquiry.
          </li>
          <li>
            <strong>Scholarship-related inquiries.</strong> If a family
            initiates contact about scholarships, we may collect basic household
            contact information. Detailed need-verification information is
            collected by our partner clubs, not by us, and is governed by their
            privacy practices.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Server logs.</strong> IP address, browser type, pages
            visited, referring URL, timestamps. Used for security,
            troubleshooting, and basic traffic analysis.
          </li>
          <li>
            <strong>Cookies and similar technologies.</strong> See our{" "}
            <Link href="/cookies">Cookie Policy</Link> for the full list.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. How we use your information</h2>
        <ul>
          <li>Process donations and issue tax receipts.</li>
          <li>
            Communicate with donors about our work, the use of their gifts, and
            (where opted in) sustainer or campaign updates.
          </li>
          <li>Respond to inquiries and provide information about programs.</li>
          <li>
            Operate, secure, and improve this website and our donor systems.
          </li>
          <li>
            Comply with legal obligations, including IRS reporting and
            audit-related recordkeeping for charitable contributions.
          </li>
        </ul>
        <p>
          We do not use your information to make automated decisions that have
          legal or similarly significant effects on you.
        </p>
      </section>

      <section>
        <h2>3. How we share your information</h2>
        <p>
          <strong>We do not sell or rent personal information.</strong> Ever. We
          share information only in these limited cases:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> who run essential operations on
            our behalf — payment processing (Zeffy / Stripe), email delivery,
            analytics, hosting (Vercel). They&apos;re bound by written
            agreements to use information only as we direct.
          </li>
          <li>
            <strong>Legal requirements.</strong> When required by subpoena,
            court order, or applicable law (e.g., IRS reporting of donor
            information on Form 990 Schedule B as legally required).
          </li>
          <li>
            <strong>Organizational changes.</strong> If our 501(c)(3) merges
            with or transfers operations to another tax-exempt entity, donor and
            constituent information may transfer to the successor organization,
            with continued protection equivalent to or better than this policy.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Children&apos;s privacy</h2>
        <p>
          This site is not directed to children under 13, and we do not
          knowingly collect personal information directly from children under
          13. Information about kids in our scholarship programs is collected
          from parents or legal guardians, not from the kids themselves, and is
          handled under our{" "}
          <Link href="/safeguarding">Youth Safeguarding &amp; Media Use</Link>{" "}
          policy.
        </p>
        <p>
          If you believe a child under 13 has provided us with personal
          information, contact us and we will delete it.
        </p>
      </section>

      <section>
        <h2>5. Your choices and rights</h2>
        <p>
          You have meaningful choices over the information we hold about you:
        </p>
        <ul>
          <li>
            <strong>Access, correct, delete.</strong> Request a copy of the
            information we hold about you, ask us to correct inaccuracies, or
            request deletion (subject to recordkeeping obligations for
            tax-deductible donations).
          </li>
          <li>
            <strong>Opt out of communications.</strong> Every email we send
            includes an unsubscribe link. You can also email us directly to opt
            out.
          </li>
          <li>
            <strong>California residents (CCPA / CPRA).</strong> California law
            gives you additional rights, including the right to know what
            categories of information we collect and the right to request
            deletion. We do not sell personal information, so the right to opt
            out of sale doesn&apos;t apply to us in practice.
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us using the information at
          the bottom of this policy. We respond within 30 days.
        </p>
      </section>

      <section>
        <h2>6. Data security</h2>
        <p>
          We use industry-standard safeguards to protect information, including
          TLS encryption for all data in transit, restricted access to internal
          systems, and vendor selection that prioritizes security posture. No
          system is perfectly secure, and we can&apos;t guarantee absolute
          security; we will notify you if we ever experience a security incident
          affecting your personal information, in compliance with applicable
          law.
        </p>
      </section>

      <section>
        <h2>7. Data retention</h2>
        <p>
          We keep donation records for at least seven years to meet IRS
          recordkeeping requirements. Email-newsletter records are retained
          while you are subscribed and for a reasonable period after unsubscribe
          to prevent re-subscription errors. We delete or anonymize information
          that&apos;s no longer needed.
        </p>
      </section>

      <section>
        <h2>8. Third-party links</h2>
        <p>
          This site links to third-party sites (e.g., our donation form on
          Zeffy, our profile on the ProPublica Nonprofit Explorer). Their
          privacy practices are governed by their own policies, not ours. We
          don&apos;t endorse and aren&apos;t responsible for the information
          practices of any third-party site.
        </p>
      </section>

      <section>
        <h2>9. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The &ldquo;Last
          updated&rdquo; date at the top reflects the most recent change. If we
          make a material change, we&apos;ll notify you by email (if you have
          provided one) or by a prominent notice on this site before the change
          takes effect.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          Privacy questions, requests, or concerns:{" "}
          <Link href="/contact">contact us</Link>. For postal correspondence,
          see the registered address on our IRS filings, available via the{" "}
          <a
            href="https://projects.propublica.org/nonprofits/organizations/352822183"
            target="_blank"
            rel="noopener noreferrer"
          >
            ProPublica Nonprofit Explorer
          </a>
          .
        </p>
      </section>
    </LegalScreen>
  );
}
