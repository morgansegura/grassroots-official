import { HeartHandshake, Repeat, FileText } from "lucide-react";

import { cn } from "@/lib/utils";
import { Callout, CtaBanner, MediaSection } from "@/components/feature";
import { Section } from "@/components/layout";

import "./mission-screen.css";
import { Eyebrow } from "@/components/ui";

type MissionScreenProps = {
  className?: string;
};

const HERO = {
  eyebrow: "Our mission",
  title: <>Free the game.</>,

  description:
    "Soccer should be free for every kid. Grassroots Foundation closes the cost barrier that prices working-class families out of competitive youth soccer in San Diego County.",
};

export function MissionScreen({ className }: MissionScreenProps) {
  return (
    <main className={cn("mission-screen", className)}>
      <Section tone="dark" size="intro">
        <Callout {...HERO} className="hero-extended" />
      </Section>

      {/* ─── Section 1 — Our mission ───────────────────────────── */}
      <Section>
        <MediaSection
          layout="bg-half"
          eyebrow="Our mission"
          heading="Soccer should be free for every kid."
          body={
            <>
              <p>
                Club soccer in San Diego runs $2,000–$5,000 in tuition alone,
                and roughly $11,000 a year all-in once travel, kits, equipment,
                and training stack on top. Talented kids from working-class
                families price out long before the season starts — often between
                ages 11 and 13, the developmental window when most youth-soccer
                dropoff occurs.
              </p>
              <p>
                We exist to close that gap. Need-based scholarships will cover
                full or partial costs at partner club programs in San Diego
                County, so a kid stays on the roster — not on the waitlist.
              </p>
            </>
          }
          media={{
            src: "https://images.unsplash.com/photo-1494177310973-4841f7d5a882?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Youth soccer team huddled on a San Diego pitch",
            aspect: "4/3",
          }}
          mediaCaption="Illustrative — Class of '26 begins fall 2026"
          cta={{ label: "Become a founding donor", href: "/donate" }}
        />
      </Section>

      {/* ─── Section 2 — How we work ───────────────────────────── */}
      <Section tone="light">
        <MediaSection
          eyebrow="How we work"
          heading="Partner-club integration."
          parallax
          mediaPosition="left"
          body={
            <>
              <p>
                Rather than running our own programs in parallel, we work
                directly with established San Diego club programs to identify
                need-qualified families and pay tuition, kit, equipment, and
                clinic costs on their behalf. The kid stays in their existing
                team and developmental pathway.
              </p>
              <p>
                Need-based intake. No merit gatekeeping. No auditions.
                Households verify income confidentially. Scholarships are
                renewable each season so families can plan multi-year
                participation rather than re-applying annually.
              </p>
            </>
          }
          media={{
            src: "https://plus.unsplash.com/premium_photo-1684106554193-89dcabcd600b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Youth team gathered before a match",
            aspect: "4/3",
          }}
          cta={{ label: "See our programs", href: "/programs" }}
        />
      </Section>

      {/* ─── Section 3 — Where we focus ────────────────────────── */}
      <Section>
        <MediaSection
          eyebrow="Where we focus"
          heading="San Diego first."
          parallax
          body={
            <>
              <p>
                Phase 1 covers South Bay communities — Chula Vista, National
                City, San Ysidro, and Imperial Beach. Phase 2 expands to East
                County (El Cajon, La Mesa, Spring Valley, Lemon Grove, Lakeside,
                Santee), including the largest Iraqi-American community in the
                U.S. and significant Syrian refugee resettlement populations.
              </p>
              <p>
                Specificity is a strength. We prove the model where the cost
                barrier is most acute — South Bay and East County — before
                expanding county-wide. The Class of &apos;26 cohort funds 100
                kids by World Cup 2026.
              </p>
            </>
          }
          media={{
            src: "https://images.unsplash.com/photo-1566353820592-c81f362cbd46?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Youth soccer player on a San Diego pitch",
            aspect: "4/3",
          }}
          cta={{ label: "Read the strategic plan", href: "/about" }}
        />
      </Section>

      {/* ─── Section 4 — From the founders ─────────────────────── */}
      <Section tone="light" ariaLabel="From the founders">
        <Callout
          eyebrow="From the founders"
          title={
            <>
              This is the first step to <br />
              doing something about it.
            </>
          }
        >
          <div className="mission-screen-founder-body">
            <p>
              Our kids have played club soccer in San Diego for years — across
              age groups, across levels, across clubs. We&apos;ve driven the 3–7
              hours to be at a tournament at 6 a.m., juggled who takes whom to
              which training for our three soccer players until 10 p.m., Monday
              through Friday, for the better part of a decade. All of the
              cross-country and international travel for showcases, tournaments,
              and league matches. We&apos;ve been blessed to be able to do so.
              And year after year, we&apos;ve watched the cost of this sport
              climb. We&apos;ve seen players stop participating somewhere
              between U12 and U16, in part because many families are being
              priced out of the sport.
            </p>
            <p>
              Most parents we&apos;ve met — and likely many who we haven&apos;t
              — have said some version of the same thing:{" "}
              <em>somebody should do something. But what can we do?</em>{" "}
              Grassroots Foundation is the beginning of doing something — in San
              Diego, in public, funded honestly, one kid at a time.
            </p>
            <p className="mission-screen-founder-signoff text-center">
              — Mirella Hinojosa and Morgan Segura, founders
            </p>
            {/* <SectionCta href="/mission">Read the strategic plan</SectionCta> */}
          </div>
        </Callout>
      </Section>

      {/* ─── Section 5 — Three ways to be part of this ─────────── */}
      <Section tone="gold">
        <div className="mission-screen-involve">
          <header className="mission-screen-involve-header">
            <div>
              <Eyebrow>Get involved</Eyebrow>
              <h2 className="mission-screen-involve-heading">
                Multiple ways to give.
              </h2>
            </div>
            <p className="mission-screen-involve-lead">
              Donations fund the Class of &apos;26 directly. Founding sustainers
              fund the cohort year over year. Families who need support can
              apply for tuition, kit, and clinic scholarships.
            </p>
          </header>

          <ul className="mission-screen-involve-row">
            <li className="mission-screen-involve-item">
              <span className="mission-screen-involve-icon" aria-hidden="true">
                <HeartHandshake className="size-6" />
              </span>
              <div className="mission-screen-involve-content">
                <h3 className="mission-screen-involve-title">
                  Become a founding donor
                </h3>
                <p className="mission-screen-involve-body">
                  Single gifts of any size — every $60 covers a pair of cleats,
                  every $2,500 covers a full season for one kid.
                </p>
              </div>
            </li>

            <li className="mission-screen-involve-item">
              <span className="mission-screen-involve-icon" aria-hidden="true">
                <Repeat className="size-6" />
              </span>
              <div className="mission-screen-involve-content">
                <h3 className="mission-screen-involve-title">
                  First Touch sustainer
                </h3>
                <p className="mission-screen-involve-body">
                  $50 a month keeps a kid in the game. Monthly giving builds the
                  cohort that funds the Class of &apos;26 roster.
                </p>
              </div>
            </li>

            <li className="mission-screen-involve-item">
              <span className="mission-screen-involve-icon" aria-hidden="true">
                <FileText className="size-6" />
              </span>
              <div className="mission-screen-involve-content">
                <h3 className="mission-screen-involve-title">
                  Apply for a scholarship
                </h3>
                <p className="mission-screen-involve-body">
                  For families who need tuition, kit, equipment, or clinic
                  support. Need-based, confidential intake.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      {/* ─── Section 6 — Closing CTA banner ─────────────────────── */}
      <Section tone="light">
        <CtaBanner
          tone="light"
          eyebrow="Get involved"
          heading="Be part of the Class of '26."
          body="Founding donors decide which kids get the first call when the season begins. Every gift moves the roster from 0 toward 100 by World Cup 2026."
          cta={{ label: "Become a founding donor", href: "/donate" }}
          tiers={[]}
        />
      </Section>
    </main>
  );
}
