import Link from "next/link";

import { LegalScreen } from "../legal-screen";

const LAST_UPDATED = "May 5, 2026";

export function SafeguardingScreen() {
  return (
    <LegalScreen
      eyebrow="Legal · Youth protection"
      title="Youth Safeguarding & Media Use"
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          <p>
            We are a youth-serving organization. Most of the kids in our
            programs are minors. This page explains how we protect them — from
            how we collect and use photos and quotes, to how adults in our
            programs interact with kids, to how concerns are reported.
          </p>
          <p>
            This policy is binding on every staff member, board member,
            volunteer, partner-club contact, and contractor working with Grass
            Roots Foundation.
          </p>
        </>
      }
    >
      <section>
        <h2>1. Our commitments to families</h2>
        <ul>
          <li>
            <strong>
              No story or image of a minor goes online without written, signed
              consent
            </strong>{" "}
            from a parent or legal guardian. Verbal consent is never sufficient.
          </li>
          <li>
            <strong>Consent is specific.</strong> Each consent covers a specific
            story, image set, or video. Consent for one use does not extend to
            other uses without a new release.
          </li>
          <li>
            <strong>Families review and approve before publish.</strong>
            The family reads the full draft (copy, photos, quotes) and confirms
            it before anything goes live.
          </li>
          <li>
            <strong>Families control identification level.</strong>
            Options include full name and photo, first name only, or anonymous
            with imagery cropped to remove identifying features. The default
            offered is the most private option.
          </li>
          <li>
            <strong>Right to remove, always.</strong> A family may request
            removal of any story, image, or quote at any time, for any reason.
            We act on removal requests within seven (7) days.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Information we collect from minors</h2>
        <p>
          <strong>
            We do not collect personal information directly from children under
            13.
          </strong>{" "}
          This site is not directed at children under 13, has no interactive
          features for children, and does not request information from them.
        </p>
        <p>
          For kids in our scholarship programs (any age), all program
          information — name, household details, school grade, program
          assignment — is collected from a parent or legal guardian, not from
          the kid. Detailed need-verification data is collected by our partner
          clubs under their own privacy practices and is shared with us only at
          the level required to administer the program.
        </p>
        <p>
          Our practices align with the Children&apos;s Online Privacy Protection
          Act (COPPA). If you believe a child under 13 has provided personal
          information through this site, contact us and we will delete it
          promptly.
        </p>
      </section>

      <section>
        <h2>3. Photo, video, and quote release</h2>

        <h3>What requires a release</h3>
        <ul>
          <li>Any identifiable photograph or video of a minor.</li>
          <li>Any direct quote attributed to a minor by name.</li>
          <li>
            Any biographical information about a minor (school, age,
            neighborhood, family details).
          </li>
          <li>
            Any combination of details that, together, could reasonably identify
            a minor.
          </li>
        </ul>

        <h3>What the release covers</h3>
        <p>
          Each release form names: the kid, the parent or guardian authorizing
          it, the specific media or quotes, the channels where they may appear
          (e.g., website, fundraising email, social media), the duration of
          consent, and the family&apos;s right to revoke consent at any time.
        </p>

        <h3>Limits on use</h3>
        <ul>
          <li>
            We will not use a kid&apos;s name, image, or story to imply
            endorsement of a commercial product or service.
          </li>
          <li>
            We will not provide identifiable images of minors to news media or
            other third parties without specific additional consent for that
            purpose.
          </li>
          <li>
            We will not use a kid&apos;s image alongside language that would
            expose them to ridicule, embarrassment, or stigmatization.
          </li>
        </ul>

        <h3>Removing content</h3>
        <p>
          If a family asks us to remove a story or image, we do — within seven
          days, no questions asked. We also make a reasonable effort to recall
          the content from any third-party syndication (e.g., social media),
          recognizing that some redistributed content may be outside our control
          once published.
        </p>
      </section>

      <section>
        <h2>4. Adult interaction with minors</h2>

        <h3>Two-deep, observable, interruptible</h3>
        <p>
          Adults in our programs follow the &ldquo;two-deep&rdquo; standard
          common across major youth-sport governing bodies: at least two
          unrelated, vetted adults are present during any direct interaction
          with minors. Interactions take place in observable, interruptible
          settings — never behind closed doors, never in private one-on-one
          settings.
        </p>

        <h3>Communication with minors</h3>
        <ul>
          <li>
            Direct one-on-one electronic communication (text, DM, email) between
            an adult and a minor in our programs is not permitted.
          </li>
          <li>
            Any communication with a minor must include a parent or guardian, or
            another vetted adult, on the thread.
          </li>
        </ul>

        <h3>Volunteer screening</h3>
        <ul>
          <li>
            Volunteers and staff with direct contact with minors complete a
            background-check process appropriate to their role before they
            begin.
          </li>
          <li>
            Volunteers complete youth-protection training prior to first direct
            contact with minors.
          </li>
          <li>
            Background checks and training are renewed at least every two years.
          </li>
        </ul>

        <h3>SafeSport alignment</h3>
        <p>
          Where our programs operate alongside U.S. Soccer-affiliated partner
          clubs, we follow U.S. Center for SafeSport guidelines on the
          prevention of physical, sexual, and emotional abuse. Direct coaching
          is delivered by partner-club personnel under their own
          SafeSport-aligned policies; we ensure alignment before partnership.
        </p>
      </section>

      <section>
        <h2>5. Mandated reporting</h2>
        <p>
          Our staff, board members, and volunteers who have direct contact with
          minors are mandated reporters under California Penal Code § 11164 et
          seq. (Child Abuse and Neglect Reporting Act). Any suspected child
          abuse or neglect — physical, sexual, emotional, or neglect — is
          reported immediately to the appropriate county or state child welfare
          agency or to law enforcement, in addition to internal reporting.
        </p>
      </section>

      <section>
        <h2>6. Reporting concerns</h2>
        <p>
          If you have a concern about how a kid is being treated, how their
          image or story is being used, or any conduct involving an adult in our
          programs, please report it. You can:
        </p>
        <ul>
          <li>
            <strong>Contact us directly.</strong>{" "}
            <Link href="/contact">Use our contact form</Link> — concerns
            involving a minor&apos;s safety are routed immediately to the
            executive director.
          </li>
          <li>
            <strong>Report to the U.S. Center for SafeSport.</strong>{" "}
            <a
              href="https://uscenterforsafesport.org/report-a-concern/"
              target="_blank"
              rel="noopener noreferrer"
            >
              uscenterforsafesport.org/report-a-concern
            </a>
            .
          </li>
          <li>
            <strong>California Child Abuse Hotline.</strong> Call 800-540- 4000
            (Los Angeles County) or your county&apos;s reporting line.
          </li>
          <li>
            <strong>Emergency.</strong> Call 911 if a child is in immediate
            danger.
          </li>
        </ul>
        <p>
          Reports may be made anonymously. We do not retaliate against anyone
          who in good faith raises a concern about youth safety.
        </p>
      </section>

      <section>
        <h2>7. Our internal review</h2>
        <p>
          Concerns received through our channels are reviewed by the executive
          director within twenty-four hours. Where the concern involves
          potential abuse or neglect, we follow mandated reporting requirements
          first and conduct an internal review in parallel. Confidentiality is
          maintained to the extent compatible with our legal reporting
          obligations and the safety of any affected child.
        </p>
      </section>

      <section>
        <h2>8. Updates to this policy</h2>
        <p>
          We review this policy annually and update it as our programs evolve,
          as guidance from SafeSport, U.S. Soccer, or California law changes, or
          as we identify ways to do better. The &ldquo;Last updated&rdquo; date
          at the top reflects the most recent change.
        </p>
      </section>
    </LegalScreen>
  );
}
