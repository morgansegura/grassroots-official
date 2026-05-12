import { Award, Users, Shirt, Footprints, GraduationCap } from "lucide-react";

import { cn } from "@/lib/utils";
import { Callout, CtaBanner, MediaSection } from "@/components/feature";
import { Section } from "@/components/layout";
import { ServiceListSchema } from "@/components/seo";
import { SITE } from "@/lib/seo";

const PROGRAM_SERVICES = [
  {
    name: "Player Scholarships",
    description:
      "Need-based tuition coverage (full or partial) for individual youth players at partner club programs in San Diego County. Renewable each season. Recipients become part of the Class of '26 cohort.",
    url: `${SITE.url}/programs#scholarships`,
  },
  {
    name: "Team Sponsorship",
    description:
      "Underwriting an entire team's roster for a competitive season — every kid plays. Built for major-gift donors and family foundations at $25,000 and up across competitive tiers (community, NPL/DPL, MLS Next, ECNL).",
    url: `${SITE.url}/programs#team-sponsorship`,
  },
  {
    name: "Kit & Uniform Grants",
    description:
      "Match-day kit, training kit, sideline gear ($150–$300 per season). Direct-to-family or via partner-club retailer voucher. Renewable each season.",
    url: `${SITE.url}/programs#kit-uniform`,
  },
  {
    name: "Equipment Grants",
    description:
      "Cleats, ball, shin guards, goalkeeper gear, training bag ($60–$400 per year). Mid-season replacement covered. Goalkeepers get a dedicated grant tier.",
    url: `${SITE.url}/programs#equipment`,
  },
  {
    name: "Methodology Clinic Access",
    description:
      "Reserved scholarship seats at elite-methodology training clinics on partner-club fields. Self-sustaining: paying spots subsidize free seats for scholarship recipients.",
    url: `${SITE.url}/programs#clinics`,
  },
];

import "./programs-screen.css";
import { Eyebrow } from "@/components/ui";

type ProgramsScreenProps = {
  className?: string;
};

const HERO = {
  eyebrow: "Programs",
  title: <>What we fund.</>,
  description:
    "Five programs. Every one removes a specific cost that benches a kid. We work with established San Diego club programs and pay tuition, kit, equipment, and clinic costs directly — so the kid stays in their existing team and developmental pathway.",
};

export function ProgramsScreen({ className }: ProgramsScreenProps) {
  return (
    <main className={cn("programs-screen", className)}>
      <ServiceListSchema services={PROGRAM_SERVICES} />
      <Callout {...HERO} className="hero-extended" />

      {/* ─── Program 1 — Player Scholarships ─────────────────────── */}
      <Section size="intro" id="scholarships">
        <MediaSection
          layout="bg-half"
          eyebrow="Program · Player Scholarships"
          heading="Need-based tuition for the kids who'd otherwise step away."
          body={
            <>
              <p>
                Club tuition in San Diego runs $2,000–$5,000 a season. All-in,
                with travel and showcase costs, the highest competitive tiers
                reach $11,000 a year per kid. Working-class families price out
                long before the season starts.
              </p>
              <p>
                We cover full or partial tuition at partner club programs for
                need-qualified players. Confidential intake — no auditions.
                Renewable each season so families plan multi-year participation,
                not an annual lottery. Recipients become part of the{" "}
                <strong>Class of &apos;26</strong> — 100 kids on the roster by
                World Cup 2026.
              </p>
            </>
          }
          media={{
            src: "https://images.unsplash.com/photo-1571771952187-6ef2a937b4f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Youth soccer player on a San Diego pitch",
            aspect: "4/3",
          }}
          mediaCaption="$2,500 funds one full season. $25,000 funds ten kids."
          cta={{ label: "Fund a scholarship", href: "/donate" }}
        />
      </Section>

      {/* ─── Program 2 — Team Sponsorship ────────────────────────── */}
      <Section id="team-sponsorship">
        <MediaSection
          eyebrow="Program · Team Sponsorship"
          heading="Underwrite an entire roster — every kid plays."
          mediaPosition="left"
          parallax
          body={
            <>
              <p>
                Player Scholarships fund individuals one at a time. Team
                Sponsorship funds an entire team for a full competitive season —
                every roster spot, every match, every away tournament, every kit
                and equipment need.
              </p>
              <p>
                Built for major-gift donors and family foundations who want one
                definable philanthropic moment with a clearly-defined cohort.
                Multi-year structures available across competitive tiers
                (community level, NPL/DPL, MLS Next, ECNL). Recognition terms
                are designed in conversation with the donor.
              </p>
            </>
          }
          media={{
            src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1429&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Youth soccer team huddled before a match",
            aspect: "4/3",
          }}
          mediaCaption="Team-level gifts start at $25,000."
          cta={{ label: "Talk to us about a team", href: "/donate" }}
        />
      </Section>

      {/* ─── Program 3 — Kit & Uniform Grants ────────────────────── */}
      <Section id="kit-uniform" className="section-light">
        <MediaSection
          eyebrow="Program · Kit & Uniform Grants"
          heading="Match-day kit, training kit, team bag."
          parallax
          body={
            <>
              <p>
                Most clubs require season-specific kits that rotate annually —
                match-day jersey, training shirt, shorts, socks, team bag. Costs
                run $150–$300 per kid per season. For a family already at the
                financial edge, kit alone is enough to push them out.
              </p>
              <p>
                We fulfill kit directly to the family or via voucher at a
                partner-club retailer. Renewable each season as long as the kid
                is on the roster. Mid-season replacement covered for outgrown or
                damaged kit.
              </p>
            </>
          }
          media={{
            src: "https://images.unsplash.com/photo-1668791160369-d20b8175eab2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Youth players in club kits",
            aspect: "4/3",
          }}
          mediaCaption="$200 covers a full season's kit for one kid."
          cta={{ label: "Fund a kit", href: "/donate" }}
        />
      </Section>

      {/* ─── Program 4 — Equipment Grants ────────────────────────── */}
      <Section id="equipment">
        <MediaSection
          eyebrow="Program · Equipment Grants"
          heading="Cleats, ball, shin guards, training bag."
          mediaPosition="left"
          parallax
          body={
            <>
              <p>
                At top-tier clubs, families bring their own gear — adding
                $200–$400 per kid before kit and tuition. A $60 pair of cleats
                that doesn&apos;t fit at the start of a season can end the
                season.
              </p>
              <p>
                We deliver direct or via partner-retailer voucher. Mid-season
                replacement is covered for growth-spurts and torn boots.
                Goalkeepers — who carry the highest equipment cost — get a
                dedicated grant tier.
              </p>
            </>
          }
          media={{
            src: "https://plus.unsplash.com/premium_photo-1682435576307-a71fec9529be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Cleats and soccer ball on the pitch",
            aspect: "4/3",
          }}
          mediaCaption="$60 covers a pair of cleats. $300 covers a goalkeeper kit."
          cta={{ label: "Fund equipment", href: "/donate" }}
        />
      </Section>

      {/* ─── Program 5 — Methodology Clinic Access ──────────────── */}
      <Section id="clinics" className="section-warm">
        <MediaSection
          eyebrow="Program · Methodology Clinic Access"
          heading="Reserved seats at elite-methodology training clinics."
          body={
            <>
              <p>
                Training clinics with elite-methodology partners run on
                partner-club fields. The model funds itself — paying spots
                ($200–$300) subsidize 5–10 reserved seats per clinic for
                scholarship recipients. Every paying registration funds a free
                seat.
              </p>
              <p>
                $250 covers one reserved clinic seat. $5,000 underwrites a full
                clinic day, including kit and equipment for every reserved seat
                that day.
              </p>
            </>
          }
          media={{
            src: "media/image/apfc-group.webp",
            alt: "Training clinic with young players",
            aspect: "4/3",
          }}
          mediaCaption="Self-sustaining: paying spots fund free seats, every time."
          cta={{ label: "Sponsor a clinic seat", href: "/donate" }}
        />
      </Section>

      {/* ─── How the programs fit together ──────────────────────── */}
      <Section>
        <div className="programs-screen-stack">
          <header className="programs-screen-stack-header">
            <div>
              <Eyebrow>How they stack</Eyebrow>
              <h2 className="programs-screen-stack-heading">
                Five programs. One outcome.
              </h2>
            </div>
            <p className="programs-screen-stack-lead">
              The cost of competitive youth soccer isn&apos;t one number —
              it&apos;s a stack. Tuition, kit, equipment, clinics, travel. Each
              program removes a layer. Together they keep a kid on the roster.
            </p>
          </header>

          <ul className="programs-screen-stack-row">
            <li className="programs-screen-stack-item">
              <Award
                className="programs-screen-stack-icon"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="programs-screen-stack-title">
                Player Scholarships
              </h3>
              <p className="programs-screen-stack-body">
                Full or partial tuition for need-qualified players at partner
                clubs. Confidential intake, no auditions. Renewable each season
                so families plan multi-year, not annual lottery.
              </p>
            </li>

            <li className="programs-screen-stack-item">
              <Users
                className="programs-screen-stack-icon"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="programs-screen-stack-title">Team Sponsorship</h3>
              <p className="programs-screen-stack-body">
                Underwrite an entire roster for a competitive season — every
                kid, every kit, every away tournament. Designed for major-gift
                donors who want one definable cohort funded start to finish.
              </p>
            </li>

            <li className="programs-screen-stack-item">
              <Shirt
                className="programs-screen-stack-icon"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="programs-screen-stack-title">
                Kit &amp; Uniform Grants
              </h3>
              <p className="programs-screen-stack-body">
                Match-day kit, training kit, team bag — the season- specific
                gear most clubs require fresh each year. Mid-season replacement
                covered. Renewable as long as the kid stays on the roster.
              </p>
            </li>

            <li className="programs-screen-stack-item">
              <Footprints
                className="programs-screen-stack-icon"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="programs-screen-stack-title">Equipment Grants</h3>
              <p className="programs-screen-stack-body">
                Cleats, shin guards, ball, training bag — the gear families are
                expected to bring. Covered so a $60 pair of cleats that
                doesn&apos;t fit doesn&apos;t end a season. Goalkeepers get
                their own tier.
              </p>
            </li>

            <li className="programs-screen-stack-item">
              <GraduationCap
                className="programs-screen-stack-icon"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="programs-screen-stack-title">
                Methodology Clinic Access
              </h3>
              <p className="programs-screen-stack-body">
                Reserved seats at elite-methodology training clinics on
                partner-club fields. Self-sustaining: every paying spot
                underwrites a free seat for a scholarship recipient.
              </p>
            </li>
          </ul>
        </div>
      </Section>

      {/* ─── Closing CTA banner ─────────────────────────────────── */}
      <Section tone="white" size="flush">
        <CtaBanner
          eyebrow="Get involved"
          heading="Every kid plays the game."
          body="Founding donors fund the first names on the Class of '26 roster. Every gift removes a layer of the cost stack — tuition, kit, equipment, clinic — for one more kid."
          cta={{ label: "Become a founding donor", href: "/donate" }}
          tiers={[]}
        />
      </Section>
    </main>
  );
}
