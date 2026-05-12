import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function SponsorScreen() {
  return (
    <LegalScreen
      eyebrow="For donors"
      title="Sponsor a clinic."
      lastUpdated={LAST_UPDATED}
      intro={
        <p>
          Methodology Clinic Access is the most directly fundable program in our
          launch portfolio. Once running, every paying spot underwrites a free
          seat for a scholarship recipient. Sponsoring a clinic — partial or
          whole day — funds elite- methodology training for kids who otherwise
          would never see it.
        </p>
      }
    >
      <section>
        <h2>1. How clinic sponsorship works</h2>
        <p>
          Training clinics run on partner-club fields, taught by elite-
          methodology coaches. The financial model is self-sustaining: paying
          spots ($200–$300) cover the cost of the clinic and subsidize 5–10
          reserved seats per clinic for scholarship recipients. Sponsorship
          dollars unlock additional reserved seats beyond what the paying spots
          cover, plus kit and equipment for every scholarship attendee that day.
        </p>
        <p>
          The leverage is clean: every dollar contributed to clinic sponsorship
          moves directly to a kid&apos;s field time, kit, and elite training
          input. There is no facility overhead — we operate on partner-club
          pitches.
        </p>
      </section>

      <section>
        <h2>2. Sponsorship tiers</h2>

        <h3>$250 — One reserved seat</h3>
        <p>
          Underwrites one scholarship recipient&apos;s seat at one clinic day,
          including the kit and equipment they need for that day. Smallest unit
          of clinic-day impact.
        </p>

        <h3>$1,000 — Half a clinic day</h3>
        <p>
          Underwrites the reserved-seat block for half a clinic day, covering
          4–5 scholarship attendees including kit and gear.
        </p>

        <h3>$5,000 — A full clinic day</h3>
        <p>
          Underwrites a full clinic day, end to end. All reserved seats
          (typically 8–10), all kit and gear, plus a contribution toward the
          next clinic in the rotation. Donor recognition options include
          named-day designation if requested.
        </p>

        <h3>$25,000 — A season of clinics</h3>
        <p>
          Underwrites a quarterly clinic series — four full clinic days across
          one calendar year, reserved-seat blocks and kit/gear covered for each.
          Multi-year structures available. Recognition options designed in
          conversation with the donor (named-series designation, recognition on
          clinic-day signage, donor wall on this site).
        </p>
      </section>

      <section>
        <h2>3. What sponsoring a clinic delivers</h2>
        <ul>
          <li>
            <strong>Direct training input</strong> for kids who would otherwise
            never see elite-methodology coaching. The development gap closes one
            clinic at a time.
          </li>
          <li>
            <strong>Kit and equipment</strong> for every reserved-seat attendee
            — most have either outgrown or never had clinic- appropriate gear.
          </li>
          <li>
            <strong>Self-reinforcing model.</strong> Each clinic day sells
            paying spots that cover the next clinic&apos;s base cost.
            Sponsorship doesn&apos;t create a recurring liability; it expands
            what an already-sustainable program reaches.
          </li>
          <li>
            <strong>A clear, namable philanthropic moment.</strong> Clinic-day
            sponsorships have a clean unit boundary — a day, a series, a season.
            Easy to describe to a board, easy to steward, easy to evaluate.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Recognition</h2>
        <p>
          Recognition is opt-in. Sponsors may choose to be named publicly (on
          this site, on clinic-day materials, in the annual report); to be named
          with a specific phrasing (&ldquo;The Smith Family,&rdquo; &ldquo;In
          memory of...&rdquo;); or to remain anonymous. The default offered is
          the most private option. Anonymity is maintained in perpetuity unless
          the donor changes the designation in writing.
        </p>
      </section>

      <section>
        <h2>5. Multi-year and corporate sponsorship</h2>
        <p>
          Multi-year commitments and corporate sponsorships are designed in
          direct conversation. Typical structures include three- and five-year
          clinic-series sponsorships with recognition tied to a specific clinic
          series, age group, or competitive tier. Corporate matching gifts are
          handled through <Link href="/donate">our donation flow</Link> and
          stewarded separately.
        </p>
      </section>

      <section>
        <h2>6. Commit to a sponsorship</h2>
        <p>
          For tiers up to $5,000, the fastest path is{" "}
          <Link href="/donate">our donation flow</Link> with a note designating
          the gift as a clinic sponsorship. For full-day or season-of-clinics
          commitments, a direct conversation is better —{" "}
          <Link href="/contact">reach out</Link> and we will structure the gift,
          recognition, and reporting cadence alongside you.
        </p>
      </section>
    </LegalScreen>
  );
}
