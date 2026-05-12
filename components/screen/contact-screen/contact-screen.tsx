import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const CONTACT_EMAIL = "hello@grassrootsfdn.org";
const LAST_UPDATED = "May 5, 2026";

export function ContactScreen() {
  return (
    <LegalScreen
      eyebrow="Contact"
      title="Get in touch."
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          Email is the fastest way to reach us. We answer every message — donor
          questions and partner-club inquiries within two business days, press
          inquiries within one. Below is what to include for each kind of
          conversation so we can route your message and respond well.
        </p>
      }
    >
      <section>
        <h2>Email us</h2>
        <p>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p>
          Use the same address for any topic — we route internally so you
          don&apos;t have to know our org chart. The notes below help us respond
          faster, but a one-line message is fine too.
        </p>
      </section>

      <section>
        <h2>Donor questions</h2>
        <p>
          Tax receipts, recurring-gift changes, anonymity preferences, refund
          requests, donor recognition, or anything related to a gift you&apos;ve
          made or are considering.
        </p>
        <p>
          Helpful to include: your name as it appeared on the gift, the
          approximate date and amount, and what you&apos;d like to change or
          confirm. We don&apos;t need a precise dollar figure if you don&apos;t
          have it handy.
        </p>
      </section>

      <section>
        <h2>Family inquiries</h2>
        <p>
          For families exploring scholarships, partner-club options, or where to
          start. See <Link href="/apply">how to apply</Link> for the full
          pathway.
        </p>
        <p>
          Helpful to include: the kid&apos;s age, the club they currently play
          with (or the area they live in if no current club), and a sentence
          about what would help most. All information is treated confidentially.
        </p>
      </section>

      <section>
        <h2>Partner-club inquiries</h2>
        <p>
          For San Diego County club programs interested in becoming a partner.
          The full posture is on the{" "}
          <Link href="/partner">partner-club page</Link>.
        </p>
        <p>
          Helpful to include: the club name, your role, the rough scale of your
          program (number of teams or competitive tiers), and whether you
          currently run a family services or financial- assistance channel. A
          30-minute call follows.
        </p>
      </section>

      <section>
        <h2>Press &amp; media</h2>
        <p>
          Reporters, producers, and editors covering youth sports access, San
          Diego County nonprofits, the cost of competitive youth soccer, or
          World Cup 2026 community impact. The full posture is on the{" "}
          <Link href="/press">press page</Link>.
        </p>
        <p>
          Identify yourself as press in the subject line and include your
          outlet, the angle you&apos;re working, and your deadline. Press
          inquiries get a one-business-day response window.
        </p>
      </section>

      <section>
        <h2>Concerns about a child</h2>
        <p>
          If your concern relates to a kid&apos;s safety in our programs or any
          conduct involving an adult: read our full reporting guidance on the{" "}
          <Link href="/safeguarding">Youth Safeguarding</Link> page. Severe or
          imminent concerns should go directly to the U.S. Center for SafeSport,
          the California Child Abuse Hotline, or 911 — not to us first.
        </p>
      </section>

      <section>
        <h2>Mailing address</h2>
        <p>
          Our registered mailing address is on file with the IRS and is publicly
          available through the{" "}
          <a
            href="https://projects.propublica.org/nonprofits/organizations/352822183"
            target="_blank"
            rel="noopener noreferrer"
          >
            ProPublica Nonprofit Explorer
          </a>
          . For postal correspondence with the organization, please use the
          address listed there.
        </p>
      </section>
    </LegalScreen>
  );
}
