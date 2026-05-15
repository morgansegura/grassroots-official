import { cn } from "@/lib/utils";
import { Callout, CtaBanner, MediaSection } from "@/components/feature";
import { Section } from "@/components/layout";
import { Eyebrow, Heading } from "@/components/ui";

import "./strategic-plan-screen.css";

type StrategicPlanScreenProps = {
  className?: string;
};

const HERO = {
  eyebrow: "Strategic Plan · 2026–2031",
  title: (
    <>
      How we get to a world <br /> where every kid plays.
    </>
  ),
  description:
    "Grassroots Foundation is a San Diego–based 501(c)(3) closing the cost wall that prices working-class kids out of competitive youth soccer. This is our plan — the problem we're addressing, the programs we operate, the partners we work with, and the multi-year arc we're building toward.",
};

export function StrategicPlanScreen({ className }: StrategicPlanScreenProps) {
  return (
    <main className={cn("strategic-plan-screen", className)}>
      <Section>
        <Callout {...HERO} />
      </Section>

      {/* ─── Executive Summary ────────────────────────────────── */}
      <Section tone="gold" ariaLabel="Executive summary">
        <div className="strategic-plan-screen-summary">
          <div>
            <Eyebrow>Executive summary</Eyebrow>
            <Heading
              as="h2"
              size="lg"
              className="strategic-plan-screen-summary-heading"
            >
              Free is the goal. Affordable for now.
            </Heading>
          </div>
          <div className="strategic-plan-screen-summary-body">
            <p>
              Competitive club soccer in San Diego runs $2,000–$5,000 in tuition
              alone, and roughly $11,000 a year all-in once travel, kits,
              equipment, and training are added. Working-class families price
              out long before the season starts. We close that gap — through
              need-based scholarships, equipment grants, kit and uniform
              support, team-level sponsorships, and reserved seats at
              elite-methodology training clinics.
            </p>
            <p>
              We work in partnership with established San Diego County club
              programs. Kids stay on their existing teams and developmental
              pathways while we cover the financial barriers behind the scenes.
              No parallel programs. No auditions. No merit gatekeeping.
            </p>
            <p>
              Our near-term anchor is the <strong>Class of &apos;26</strong> —
              100 youth players in San Diego County funded through World Cup
              2026, regardless of what their family can afford. The five-year
              arc expands to additional partner clubs and the highest
              competitive tiers, where the per-kid cost barrier is steepest.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── The Problem ──────────────────────────────────────── */}
      <Section ariaLabel="The problem">
        <MediaSection
          eyebrow="The problem"
          heading="The cost wall, in numbers."
          mediaPosition="left"
          // parallax
          layout="bg-half"
          body={
            <>
              <p>
                The drop-off cliff for U.S. youth-sports participation occurs
                between ages 11 and 13 — exactly the developmental window where
                club soccer becomes most expensive. A kid with the talent and
                desire to play at the next level often steps away during this
                window because the family cannot afford the next tier.
              </p>
              <p>
                The kids most affected live in working-class households across
                South Bay San Diego — Chula Vista, National City, San Ysidro,
                Imperial Beach — and East County. These are the communities
                where talented youth players are concentrated and where median
                household income makes competitive club soccer economically out
                of reach.
              </p>
              <p>
                The United States is the global outlier in pay-to-play youth
                sports. In most countries, talented youth train through
                publicly-funded academies tied to professional clubs or national
                federations. In the U.S., families pay private club fees for the
                equivalent developmental path. The resulting cost barrier
                filters kids by household income rather than by talent.
              </p>
            </>
          }
          media={{
            src: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=1470&auto=format&fit=crop",
            alt: "Youth soccer player on a San Diego pitch",
            aspect: "4/3",
          }}
        />
      </Section>

      {/* ─── Vision & Mission ─────────────────────────────────── */}
      <Section tone="dark" ariaLabel="Vision and mission">
        <div className="strategic-plan-screen-vision">
          <div>
            <Eyebrow>Our vision</Eyebrow>
            <Heading
              as="h2"
              size="lg"
              className="strategic-plan-screen-vision-heading"
            >
              Soccer should be free for every kid in America.
            </Heading>
          </div>
          <div className="strategic-plan-screen-vision-block">
            <div>
              <Eyebrow>Our mission today</Eyebrow>
              <p className="strategic-plan-screen-vision-body">
                Keep talented youth players in San Diego County on the pitch
                when their families can&apos;t afford the cost of competitive
                club soccer — through need-based scholarships, equipment and kit
                support, team-level sponsorships, and reserved access to
                elite-methodology training.
              </p>
            </div>
          </div>
          <div className="strategic-plan-screen-vision-tagline">
            <span className="strategic-plan-screen-vision-tagline-prefix">
              Tagline:
            </span>{" "}
            Access, the Goal!
          </div>
        </div>
      </Section>

      {/* ─── Theory of Change ─────────────────────────────────── */}
      <Section ariaLabel="Theory of change">
        <div className="strategic-plan-screen-toc">
          <header className="strategic-plan-screen-toc-header">
            <Eyebrow>Theory of change</Eyebrow>
            <Heading
              as="h2"
              size="lg"
              className="strategic-plan-screen-toc-heading"
            >
              How philanthropic dollars
              <br /> become kids on the pitch.
            </Heading>
          </header>
          <ol className="strategic-plan-screen-toc-list">
            <li className="strategic-plan-screen-toc-item">
              <span className="strategic-plan-screen-toc-step">Input</span>
              <p>
                Donor capital — individual gifts, sustainer-program
                contributions, foundation grants, corporate matching,
                team-sponsor commitments.
              </p>
            </li>
            <li className="strategic-plan-screen-toc-item">
              <span className="strategic-plan-screen-toc-step">Activity</span>
              <p>
                Direct payment of need-based costs (tuition, kit, equipment,
                clinic seats) to partner club programs on behalf of qualified
                families. Operations run lean, integrated with partner-club
                infrastructure.
              </p>
            </li>
            <li className="strategic-plan-screen-toc-item">
              <span className="strategic-plan-screen-toc-step">Output</span>
              <p>
                Dollars granted, scholarships awarded, equipment kits delivered,
                clinic seats funded, teams sponsored.
              </p>
            </li>
            <li className="strategic-plan-screen-toc-item">
              <span className="strategic-plan-screen-toc-step">Outcome</span>
              <p>
                Kids stay in competitive soccer through the developmental
                drop-off window. Recipients persist season-over-season. Families
                avoid the binary choice between paying out-of-budget club fees
                and stepping away from the sport.
              </p>
            </li>
            <li className="strategic-plan-screen-toc-item">
              <span className="strategic-plan-screen-toc-step">Impact</span>
              <p>
                A documented, transparent model proving that cost — not talent
                or interest — is the deciding variable in U.S. youth-soccer
                access. The model&apos;s success in San Diego County becomes a
                demonstration case for scaling to other regions and for
                advocating systemic change in U.S. youth-sports funding.
              </p>
            </li>
          </ol>
        </div>
      </Section>

      {/* ─── Our Programs ─────────────────────────────────────── */}
      <Section tone="light" ariaLabel="Our programs">
        <header className="strategic-plan-screen-programs-header">
          <div>
            <Eyebrow>Our programs</Eyebrow>
            <Heading
              as="h2"
              size="lg"
              className="strategic-plan-screen-programs-heading"
            >
              Five programs, mapped <br /> to the full cost stack.
            </Heading>
          </div>
          <p className="strategic-plan-screen-programs-lead">
            Each program covers a specific line item in the all-in cost of
            competitive youth soccer. Together they remove the financial
            barriers that decide who plays and who doesn&apos;t.
          </p>
        </header>

        <ol className="strategic-plan-screen-programs-list">
          <li className="strategic-plan-screen-program">
            <span className="strategic-plan-screen-program-index">01</span>
            <div className="strategic-plan-screen-program-body">
              <h3 className="strategic-plan-screen-program-title">
                Player Scholarships
              </h3>
              <p>
                Need-based tuition coverage — full or partial — for individual
                youth players at partner club programs. Annual renewal so
                families plan multi-year participation. Recipients become part
                of the Class of &apos;26 cohort.
              </p>
            </div>
          </li>
          <li className="strategic-plan-screen-program">
            <span className="strategic-plan-screen-program-index">02</span>
            <div className="strategic-plan-screen-program-body">
              <h3 className="strategic-plan-screen-program-title">
                Team Sponsorship
              </h3>
              <p>
                Underwriting an entire team&apos;s roster for a season — every
                kid plays. Built for major-gift donors and family foundations at
                $25,000 and up, across competitive tiers (community level,
                NPL/DPL, MLS Next, ECNL).
              </p>
            </div>
          </li>
          <li className="strategic-plan-screen-program">
            <span className="strategic-plan-screen-program-index">03</span>
            <div className="strategic-plan-screen-program-body">
              <h3 className="strategic-plan-screen-program-title">
                Kit &amp; Uniform Grants
              </h3>
              <p>
                Match-day kit, training kit, sideline gear. Direct delivery via
                partner-club retailer voucher or shipping. Renewable each
                season.
              </p>
            </div>
          </li>
          <li className="strategic-plan-screen-program">
            <span className="strategic-plan-screen-program-index">04</span>
            <div className="strategic-plan-screen-program-body">
              <h3 className="strategic-plan-screen-program-title">
                Equipment Grants
              </h3>
              <p>
                Cleats, ball, shin guards, goalkeeper gear, training bag.
                Mid-season replacement covered for growth-spurt and wear-out
                scenarios.
              </p>
            </div>
          </li>
          <li className="strategic-plan-screen-program">
            <span className="strategic-plan-screen-program-index">05</span>
            <div className="strategic-plan-screen-program-body">
              <h3 className="strategic-plan-screen-program-title">
                Methodology Clinic Access
              </h3>
              <p>
                Reserved scholarship seats at elite-methodology training clinics
                held in San Diego County. Self-sustaining model: paying spots
                subsidize 5–10 reserved seats per clinic. Every paying
                registration funds a free seat for a scholarship recipient.
              </p>
            </div>
          </li>
        </ol>
      </Section>

      {/* ─── Funding Ladder ──────────────────────────────────── */}
      <Section ariaLabel="Funding ladder">
        <div className="strategic-plan-screen-ladder">
          <header className="strategic-plan-screen-ladder-header">
            <Eyebrow>Funding ladder</Eyebrow>
            <Heading
              as="h2"
              size="lg"
              className="strategic-plan-screen-ladder-heading"
            >
              How we scale the dollar-per-kid leverage of philanthropic capital.
            </Heading>
            <p className="strategic-plan-screen-ladder-lead">
              The org grows through five sequential rungs. Lower rungs continue
              funding alongside higher ones — each rung is an additional
              capacity layer, not a replacement.
            </p>
          </header>

          <div className="strategic-plan-screen-ladder-table">
            <div className="strategic-plan-screen-ladder-row strategic-plan-screen-ladder-head">
              <div>Rung</div>
              <div>What we fund</div>
              <div>Donor pool</div>
              <div>Year active</div>
            </div>
            <div className="strategic-plan-screen-ladder-row">
              <div className="strategic-plan-screen-ladder-rung">01</div>
              <div>Individual kids</div>
              <div>Small donors, monthly sustainers, founding cohort</div>
              <div>Year 1</div>
            </div>
            <div className="strategic-plan-screen-ladder-row">
              <div className="strategic-plan-screen-ladder-rung">02</div>
              <div>Team-season sponsorship</div>
              <div>Major-gift donors, family foundations</div>
              <div>Year 1–2</div>
            </div>
            <div className="strategic-plan-screen-ladder-row">
              <div className="strategic-plan-screen-ladder-rung">03</div>
              <div>Full competitive level (DPL, MLS Next, ECNL)</div>
              <div>Family foundations, corporate sponsors</div>
              <div>Year 3</div>
            </div>
            <div className="strategic-plan-screen-ladder-row">
              <div className="strategic-plan-screen-ladder-rung">04</div>
              <div>Full age groups across the region</div>
              <div>Institutional funders, major foundations</div>
              <div>Year 4–5</div>
            </div>
            <div className="strategic-plan-screen-ladder-row">
              <div className="strategic-plan-screen-ladder-rung">05</div>
              <div>Systemic / regional model expansion</div>
              <div>Mixed funder coalition</div>
              <div>Year 5+</div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Where We Focus ──────────────────────────────────── */}
      <Section ariaLabel="Where we focus" tone="gold">
        <MediaSection
          layout="bg-half"
          eyebrow="Where we focus"
          heading="San Diego County, in stages."
          body={
            <>
              <p>
                <strong>Phase 1</strong> covers South Bay communities — Chula
                Vista, National City, San Ysidro, and Imperial Beach. Working-
                class neighborhoods with deep, multi-generational soccer culture
                and the most acute cost-barrier signal in the county.
              </p>
              <p>
                <strong>Phase 2</strong> expands to East County (El Cajon, La
                Mesa, Spring Valley, Lemon Grove, Lakeside, Santee) and
                Southeast San Diego (Encanto, Lincoln Park, Skyline, Valencia
                Park). These neighborhoods include significant working-class
                immigrant and refugee resettlement populations — long-standing
                Iraqi-American, Syrian, and East African communities — with
                strong soccer participation and concentrated cost barriers.
              </p>
              <p>
                <strong>Phase 3 (Years 4–5)</strong> covers San Diego County
                broadly, with three to five partner club programs operating
                across the region. Methodology clinics expand to monthly
                cadence.
              </p>
              <p>
                <strong>Beyond Year 5</strong>, the replication framework is
                documented for other U.S. metropolitan regions. Specificity is a
                strength — we prove the model where the cost barrier is most
                acute before expanding by claim.
              </p>
            </>
          }
          media={{
            src: "https://images.unsplash.com/photo-1566353820592-c81f362cbd46?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Youth soccer team on a San Diego pitch",
            aspect: "4/3",
          }}
        />
      </Section>

      {/* ─── Partnership Model ───────────────────────────────── */}
      <Section ariaLabel="Partnership model">
        <MediaSection
          eyebrow="Partnership model"
          heading="Integration, not duplication."
          mediaPosition="left"
          layout="bg-half"
          body={
            <>
              <p>
                We do not operate parallel programs. We integrate with
                established San Diego club programs that already run
                developmental soccer at competitive levels and have the
                infrastructure — coaches, fields, family services, registration
                systems — we&apos;d otherwise have to replicate.
              </p>
              <p>The integration runs in five steps:</p>
              <ol className="strategic-plan-screen-partnership-list">
                <li>
                  <strong>Identification.</strong> Partner-club family services
                  surface need-qualified families.
                </li>
                <li>
                  <strong>Verification.</strong> Households verify income
                  through a confidential intake managed by the partner club.
                  Kids do not audition.
                </li>
                <li>
                  <strong>Direct payment.</strong> We pay tuition, equipment
                  costs, and clinic fees directly to the partner club or partner
                  retailer on behalf of the family.
                </li>
                <li>
                  <strong>Continuity.</strong> The kid stays on their existing
                  team in their existing developmental pathway. No disruption.
                </li>
                <li>
                  <strong>Reporting.</strong> The partner club reports quarterly
                  on recipient retention and program engagement. We track
                  outcome data centrally.
                </li>
              </ol>
              <p>
                Partner names are kept confidential in public materials until
                each partner provides written permission. The brand stands on
                its own — Grassroots Foundation is not the foundation arm of any
                single partner club.
              </p>
            </>
          }
          media={{
            src: "https://images.unsplash.com/photo-1494177310973-4841f7d5a882?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Coach and youth player in conversation on the sideline",
            aspect: "4/3",
          }}
        />
      </Section>

      {/* ─── Financial Projections ───────────────────────────── */}
      <Section ariaLabel="Financial projections" tone="light">
        <div className="strategic-plan-screen-financials">
          <header className="strategic-plan-screen-financials-header">
            <div>
              <Eyebrow>Financial projections</Eyebrow>
              <Heading
                as="h2"
                size="lg"
                className="strategic-plan-screen-financials-heading"
              >
                Five-year revenue and program trajectory.
              </Heading>
            </div>
            <p className="strategic-plan-screen-financials-lead">
              All figures are working forecasts, subject to revision as actuals
              materialize. Updated annually with audited or reviewed financial
              statements.
            </p>
          </header>

          <div className="strategic-plan-screen-financials-table">
            <div className="strategic-plan-screen-financials-row strategic-plan-screen-financials-head">
              <div>Revenue source</div>
              <div>Y1</div>
              <div>Y2</div>
              <div>Y3</div>
              <div>Y4</div>
              <div>Y5</div>
            </div>
            <div className="strategic-plan-screen-financials-row">
              <div>Individual donors (small gifts)</div>
              <div>$35K</div>
              <div>$75K</div>
              <div>$150K</div>
              <div>$250K</div>
              <div>$400K</div>
            </div>
            <div className="strategic-plan-screen-financials-row">
              <div>First Touch sustainers (recurring)</div>
              <div>$15K</div>
              <div>$50K</div>
              <div>$120K</div>
              <div>$200K</div>
              <div>$300K</div>
            </div>
            <div className="strategic-plan-screen-financials-row">
              <div>Major gifts + team sponsorships</div>
              <div>$50K</div>
              <div>$150K</div>
              <div>$400K</div>
              <div>$600K</div>
              <div>$800K</div>
            </div>
            <div className="strategic-plan-screen-financials-row">
              <div>Foundation grants</div>
              <div>$50K</div>
              <div>$150K</div>
              <div>$300K</div>
              <div>$500K</div>
              <div>$700K</div>
            </div>
            <div className="strategic-plan-screen-financials-row">
              <div>Corporate matching, Goodstack, PayPal</div>
              <div>$25K</div>
              <div>$50K</div>
              <div>$100K</div>
              <div>$150K</div>
              <div>$200K</div>
            </div>
            <div className="strategic-plan-screen-financials-row strategic-plan-screen-financials-total">
              <div>Total revenue</div>
              <div>~$175K</div>
              <div>~$475K</div>
              <div>~$1.07M</div>
              <div>~$1.7M</div>
              <div>~$2.4M</div>
            </div>
          </div>

          <div className="strategic-plan-screen-financials-notes">
            <p>
              <strong>Program ratio.</strong> We target greater than 75% of
              expenses going to programs in every year — a standard foundation
              officers screen for. Trajectory improves as the org scales, since
              administrative overhead grows slower than program scale.
            </p>
            <p>
              <strong>Public support test.</strong> Year 1 targets a diversified
              donor mix in compliance with the 33% public-support threshold
              (Schedule A test). No single donor exceeds ~25% of revenue in Year
              1.
            </p>
            <p>
              <strong>Per-kid economics.</strong> Average cost per scholarship
              recipient ranges from $1,800 (Y1) to $2,500 (Y5), reflecting
              competitive-tier progression. We fund roughly 75 kids in Y1, 250
              by Y3, and 600 by Y5.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── Governance ──────────────────────────────────────── */}
      <Section ariaLabel="Governance">
        <div className="strategic-plan-screen-governance">
          <header className="strategic-plan-screen-governance-header">
            <div>
              <Eyebrow>Governance</Eyebrow>
              <Heading
                as="h2"
                size="lg"
                className="strategic-plan-screen-governance-heading"
              >
                Independent board. Documented controls. Public accountability.
              </Heading>
            </div>
          </header>

          <div className="strategic-plan-screen-governance-grid">
            <div className="strategic-plan-screen-governance-card">
              <h3>Board composition</h3>
              <p>
                Three to five directors in Year 1, growing to five to seven by
                Year 3. Directors are not financially connected to partner club
                programs, ensuring independence in scholarship allocation
                decisions.
              </p>
            </div>
            <div className="strategic-plan-screen-governance-card">
              <h3>Conflict of Interest Policy</h3>
              <p>
                Formal written COI policy. All directors and officers complete
                annual disclosure. Conflicts trigger recusal from related
                decisions. Reviewed annually at the post-fiscal-year meeting.
              </p>
            </div>
            <div className="strategic-plan-screen-governance-card">
              <h3>Financial controls</h3>
              <p>
                Two-signature requirement for disbursements above $1,000.
                Monthly bank reconciliation. Quarterly financial reporting to
                the full board. Annual review or audit by independent CPA.
              </p>
            </div>
            <div className="strategic-plan-screen-governance-card">
              <h3>Founder transparency</h3>
              <p>
                The founders are active members of the San Diego youth-soccer
                community and parents of kids who have played in club programs.
                Founders receive no compensation in Year 1. Any future
                compensation is reviewed and approved by the independent Board
                and disclosed on Form 990.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Risk & Mitigation ──────────────────────────────── */}
      <Section tone="light" ariaLabel="Risk and mitigation">
        <div className="strategic-plan-screen-risk">
          <header className="strategic-plan-screen-risk-header">
            <div>
              <Eyebrow>Risk &amp; Mitigation</Eyebrow>
              <Heading
                as="h2"
                size="lg"
                className="strategic-plan-screen-risk-heading"
              >
                What could go wrong, and <br /> how we&apos;ve planned for it.
              </Heading>
            </div>
          </header>

          <ul className="strategic-plan-screen-risk-list">
            <li>
              <h3>Fundraising concentration</h3>
              <p>
                Reliance on a small number of major donors creates revenue
                volatility and risks failing the public-support test. We
                actively diversify through sustainer recruiting, foundation
                pipeline development, and corporate matching. No single donor
                exceeds 33% of revenue in any year.
              </p>
            </li>
            <li>
              <h3>Partner-club dependency</h3>
              <p>
                Operating with a single partner club program creates exposure if
                the relationship changes. We onboard a second partner club by
                Year 2 and maintain three to five active partnerships by Year 5.
                The brand stands independent of any single partner.
              </p>
            </li>
            <li>
              <h3>Regulatory compliance</h3>
              <p>
                Multi-state fundraising creates exposure to state solicitation
                registration requirements. California AG Registry registration
                is current at all times. Multi-state registration is handled
                through compliance services for the highest-priority states.
              </p>
            </li>
            <li>
              <h3>Financial / audit</h3>
              <p>
                Financial misreporting creates reputational and legal exposure.
                Annual CPA review starting Year 1. Full audit when revenue
                exceeds $500K. Schedule B donor records maintained continuously.
                Public support test calculated annually.
              </p>
            </li>
            <li>
              <h3>Public narrative</h3>
              <p>
                Framing that names or attacks specific clubs, leagues, or actors
                as adversaries creates donor-base friction and legal exposure.
                Our locked editorial voice is calm and factual,
                non-antagonistic. We name asymmetry, not villains.
              </p>
            </li>
            <li>
              <h3>Talent and capacity</h3>
              <p>
                Dependence on founder and a small staff creates execution risk.
                Documented operations playbook by Year 2. Part-time staff hires
                by Year 3. Board recruitment focused on adding operational and
                fundraising capacity.
              </p>
            </li>
          </ul>
        </div>
      </Section>

      {/* ─── Roadmap ─────────────────────────────────────────── */}
      <Section ariaLabel="12-month roadmap">
        <div className="strategic-plan-screen-roadmap">
          <header className="strategic-plan-screen-roadmap-header">
            <div>
              <Eyebrow>The next 12 months</Eyebrow>
              <Heading
                as="h2"
                size="lg"
                className="strategic-plan-screen-roadmap-heading"
              >
                From activation to first cohort funded.
              </Heading>
            </div>
          </header>

          <ol className="strategic-plan-screen-roadmap-list">
            <li>
              <span className="strategic-plan-screen-roadmap-month">M1</span>
              <p>
                Board formation complete (3–5 members). Banking infrastructure
                live. CA AG Registry registration filed. Candid Bronze + Silver
                shipped.
              </p>
            </li>
            <li>
              <span className="strategic-plan-screen-roadmap-month">M2</span>
              <p>
                Donate flow live. Multi-state solicitation strategy decided.
                Partner-club agreements signed.
              </p>
            </li>
            <li>
              <span className="strategic-plan-screen-roadmap-month">M3</span>
              <p>
                First scholarships placed. Founding cohort donor outreach
                begins. Strategic plan finalized and uploaded to Candid.
              </p>
            </li>
            <li>
              <span className="strategic-plan-screen-roadmap-month">M4</span>
              <p>
                First clinic event held. Photographer commissioned. Press kit
                assembled. Local media outreach begins.
              </p>
            </li>
            <li>
              <span className="strategic-plan-screen-roadmap-month">M5</span>
              <p>
                First foundation grant submissions (LA84, U.S. Soccer
                Foundation, San Diego Foundation).
              </p>
            </li>
            <li>
              <span className="strategic-plan-screen-roadmap-month">M6</span>
              <p>
                First quarterly impact report published. First sustainer cohort
                onboarded. CPA review engagement initiated.
              </p>
            </li>
            <li>
              <span className="strategic-plan-screen-roadmap-month">M7–9</span>
              <p>
                Scholarship cohort grows. Second clinic event. Schema markup +
                llms.txt shipped. Wikidata entry created.
              </p>
            </li>
            <li>
              <span className="strategic-plan-screen-roadmap-month">M10</span>
              <p>
                Year-end appeal launched. Board recruits additional members for
                Year 2 capacity.
              </p>
            </li>
            <li>
              <span className="strategic-plan-screen-roadmap-month">M11</span>
              <p>Annual report drafted. Year 2 budget approved.</p>
            </li>
            <li>
              <span className="strategic-plan-screen-roadmap-month">M12</span>
              <p>
                Fiscal year close. CPA review issues report. 990-EZ preparation
                begins.
              </p>
            </li>
          </ol>
        </div>
      </Section>

      {/* ─── Closing CTA ─────────────────────────────────────── */}
      <Section tone="gold" contain={false} ariaLabel="Get involved">
        <CtaBanner
          tone="dark"
          eyebrow="The plan, in motion"
          heading="The Class of '26 begins now."
          body="Founding donors fund the first 100 scholarship recipients. Family foundations and corporate sponsors underwrite the multi-year arc. Partner clubs run the work on the ground. The plan is real because the dollars are real."
          cta={{ label: "Become a founding donor", href: "/donate" }}
          tiers={[]}
        />
      </Section>
    </main>
  );
}
