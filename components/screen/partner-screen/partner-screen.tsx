import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function PartnerScreen() {
  return (
    <LegalScreen
      eyebrow="For clubs"
      title="Become a partner club."
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          <p>
            For San Diego County club programs that want to keep more
            need-qualified kids in their teams. We work directly with partner
            clubs to fund tuition, kit, equipment, and clinic costs for families
            surfaced through the club&apos;s existing family services intake.
          </p>
          <p>
            We don&apos;t run parallel programs. We don&apos;t pull kids out of
            your developmental pathway. We pay tuition into your existing
            structure and let you keep coaching the kids you already coach.
          </p>
        </>
      }
    >
      <section>
        <h2>1. Why partner</h2>
        <ul>
          <li>
            <strong>Keep the kids you&apos;d otherwise lose.</strong>{" "}
            Partner-club integration is the most operationally efficient way to
            fund a kid: the coach already knows them, the developmental plan is
            already set, the teammates are already theirs.
          </li>
          <li>
            <strong>No new operational burden.</strong> We work through your
            existing family services or financial-assistance channel. The same
            person who would have told a family &ldquo;sorry, we can&apos;t
            cover this&rdquo; can now route them to a scholarship pathway.
          </li>
          <li>
            <strong>Direct payment.</strong> Funds are paid directly to the
            club, on the family&apos;s behalf, on the same cadence you bill
            tuition. No reimbursement chasing.
          </li>
          <li>
            <strong>Renewable scholarships.</strong> Once a kid is on
            scholarship, the funding renews each season as long as they&apos;re
            on the roster. Multi-year retention is the point.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. What partnership looks like</h2>

        <h3>Scholarships paid directly to your club</h3>
        <p>
          For each scholarship recipient, we pay tuition (full or partial), kit,
          equipment, and any clinic-spot reservations directly to the club, on
          the family&apos;s behalf. No money flows through the family. Quarterly
          reporting summarizes which kids are funded and at what level.
        </p>

        <h3>Confidential intake handled at the club level</h3>
        <p>
          Your existing family services or financial-assistance coordinator
          surfaces candidate families through the club&apos;s ordinary channels.
          We trust the club&apos;s judgment on financial need within standard
          documentation guidelines. We do not require families to interact with
          us directly.
        </p>

        <h3>Reserved clinic seats</h3>
        <p>
          We&apos;re launching methodology training clinics with
          elite-methodology partners on partner-club fields. The model funds
          itself — paying spots subsidize 5–10 reserved seats per clinic for
          scholarship recipients. Partner clubs receive priority access to
          reserved seats for their scholarship kids.
        </p>

        <h3>Reporting and transparency</h3>
        <p>
          Quarterly reports document funding deployed at your club, by program
          (tuition, kit, equipment, clinic). Annual reporting aggregates this
          for our 990 and Candid profile. Partner-club identification in
          donor-facing materials is opt-in — we do not name partner clubs
          publicly without your explicit written permission for the specific
          use.
        </p>
      </section>

      <section>
        <h2>3. What we look for in a partner club</h2>
        <ul>
          <li>
            Established San Diego County club program with at least one full
            competitive season behind it.
          </li>
          <li>
            Existing family services or financial-assistance channel — even a
            small one. We work with what your club already runs.
          </li>
          <li>
            Willingness to confidentially surface need-qualified families
            through that channel.
          </li>
          <li>
            Alignment on the principle that need-based access does not require
            auditions or merit gates.
          </li>
          <li>
            Clear policies on youth protection, background checks for adults in
            direct contact with minors, and SafeSport-aligned interactions. (We
            don&apos;t run direct coaching, but our partner clubs do.)
          </li>
        </ul>
      </section>

      <section>
        <h2>4. What we don&apos;t require</h2>
        <ul>
          <li>
            We don&apos;t require exclusivity. Your club can partner with other
            scholarship programs simultaneously.
          </li>
          <li>
            We don&apos;t require branding changes. Your kit stays your kit.
            Your team name stays your team name.
          </li>
          <li>
            We don&apos;t require a specific competitive tier. We partner with
            community-level, NPL/DPL, MLS Next, and ECNL programs — the tier
            shapes scholarship size, not eligibility to partner.
          </li>
          <li>
            We don&apos;t require minimum scholarship counts. One kid is a real
            partnership.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. How partnerships start</h2>
        <ol>
          <li>
            <strong>Initial conversation.</strong>{" "}
            <Link href="/contact">Reach out</Link>. A 30-minute call to walk
            through how your club already handles financial assistance and how
            the partnership would fit.
          </li>
          <li>
            <strong>Partnership memo.</strong> A short written memorandum of
            understanding covers scholarship intake workflow, payment cadence,
            reporting expectations, and recognition opt-in/out.
          </li>
          <li>
            <strong>Pilot with one or two families.</strong> First scholarship
            cycle starts small — one or two families to validate the operational
            fit. Expand from there based on what works for your club.
          </li>
        </ol>
      </section>

      <section>
        <h2>6. Get in touch</h2>
        <p>
          Club registrars, directors of coaching, family services coordinators,
          and board members are all welcome to start the conversation.{" "}
          <Link href="/contact">Contact us</Link> and identify yourself as a
          club inquiry. Partner-club inquiries are prioritized and acknowledged
          within two business days.
        </p>
      </section>
    </LegalScreen>
  );
}
