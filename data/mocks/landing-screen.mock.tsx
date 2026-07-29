import Link from "next/link";

import {
  Award,
  DollarSign,
  Globe,
  GraduationCap,
  MapPin,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Trophy,
} from "lucide-react";

import type { SectionProps } from "@/components/layout";
import type {
  CampaignsGridProps,
  CardGridProps,
  CtaBannerProps,
  FaqSectionProps,
  HeroCarouselProps,
  ImpactStatsProps,
  MediaSectionProps,
  MissionGridProps,
} from "@/components/feature";

type SectionConfig = Pick<
  SectionProps,
  | "size"
  | "tone"
  | "className"
  | "ariaLabel"
  | "id"
  | "contain"
  | "eyebrow"
  | "heading"
  | "description"
  | "cta"
>;

type FeatureEntry =
  | { "hero-carousel": HeroCarouselProps }
  | { "card-grid": CardGridProps }
  | { "impact-stats": ImpactStatsProps }
  | { "media-section": MediaSectionProps }
  | { "mission-grid": MissionGridProps }
  | { "campaigns-grid": CampaignsGridProps }
  | { "faq-section": FaqSectionProps }
  | { "cta-banner": CtaBannerProps };

export type LandingScreenSection = SectionConfig & FeatureEntry;

export const LANDING_SCREEN_MOCK: LandingScreenSection[] = [
  // ─── Hero ───
  {
    contain: false,
    ariaLabel: "Hero",
    size: "flush",
    "hero-carousel": {
      slides: [
        {
          id: "access-the-goal",
          image: {
            src: "https://images.unsplash.com/photo-1629977007371-0ba395424741?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A soccer field at golden hour",
          },
          eyebrow: "San Diego, CA",
          heading: "Access,\nthe Goal!",
          tagline:
            "We fund youth soccer scholarships in San Diego County — covering club tuition, gear, and clinic spots for kids whose families can't sustain the all-in cost of competitive youth soccer.",
          cta: { label: "Become a founding donor", href: "/donate" },
        },
        {
          id: "after-the-cup",
          image: {
            src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1429&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Youth players warming up on a club pitch",
          },
          eyebrow: "After the Cup",
          heading:
            "The World Cup came home.\nMost kids still can't afford to play.",
          tagline:
            "The Cup left in July. The cost wall didn't. The season starts this fall, and founding donors put the first names on the Class of '26 roster.",
          cta: { label: "Read our mission", href: "/mission" },
        },
        {
          id: "what-we-fund",
          image: {
            src: "https://images.unsplash.com/photo-1728520508268-1766303e1ebb?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A soccer ball at rest on the touchline",
          },
          eyebrow: "What we fund",
          heading: "Tuition. Cleats. Clinics.",
          tagline:
            "Tuition runs $2,000–$5,000 a season. Travel, gear, ID camps, and training kits add another $5,000+. We cover the line items that usually decide who plays.",
          cta: { label: "See programs", href: "/programs" },
        },
      ],
    },
  },

  // ─── The system (problem) ───
  {
    ariaLabel: "The system",
    className: "section-swirl-2",
    "card-grid": {
      eyebrow: "The system, in six facts",
      heading: "Pay-to-play decides who develops in U.S. soccer.",
      cards: [
        {
          id: "outlier",
          icon: Globe,
          title: "The U.S. is the outlier",
          description:
            "In most countries, talented kids train through publicly-funded academies. In the U.S., families pay club fees for the same development path.",
        },
        {
          id: "all-in-cost",
          icon: DollarSign,
          title: "The fee is the floor",
          description:
            "Club fees are line one. Travel, kit, ID camps, training kits, gear — the all-in cost runs to roughly $11,000 a year at the top levels.",
        },
        {
          id: "geography",
          icon: MapPin,
          title: "Where you live decides who plays",
          description:
            "Elite training and showcase events cluster around expensive metros. Driving two hours to a tournament is normalized at the top tier.",
        },
        {
          id: "showcase",
          icon: Trophy,
          title: "ID camps aren't free",
          description:
            "College recruitment runs through showcases and ID camps that cost extra. Families who can't afford the season can't afford the camps that get a kid seen.",
        },
        {
          id: "drop-off",
          icon: TrendingDown,
          title: "12 is the average drop-off age",
          description:
            "Across U.S. youth sports, the average age a child stops playing is 12 — exactly when competitive club soccer becomes most expensive. Cost is the most-cited reason families step away in Project Play's community surveys.",
        },
        {
          id: "scholarships",
          icon: Award,
          title: "Scholarships are the exception",
          description:
            "Most clubs don't fund a meaningful scholarship pool. The kids who'd benefit most from elite training are the least likely to be on the roster.",
        },
      ],
      cta: { label: "See what we fund", href: "/programs" },
    },
  },

  // ─── The scale (impact stats) ───
  {
    ariaLabel: "The scale",
    tone: "dark",
    "impact-stats": {
      heading: "What it actually costs to play.",
      stats: [
        {
          value: "$8K–$20K",
          label: "All-in per year at top tiers (ECNL · MLS NEXT · GA)",
        },
        {
          value: "+46%",
          label: "Family spending on youth sports (Project Play, 2025)",
        },
        {
          value: "41%",
          label:
            "Of parents say cost is the top barrier to their kid playing sports (Project Play, 2025)",
        },
        { value: "100", label: "Scholarships in the Class of '26" },
      ],
    },
  },

  // ─── How development is funded elsewhere ───
  {
    ariaLabel: "How development is funded elsewhere",
    tone: "light",
    "card-grid": {
      eyebrow: "The international comparison",
      heading: "How development is funded elsewhere.",
      cards: [
        {
          id: "outlier-united-states",
          title: "United States",
          description:
            "Competitive youth soccer is a private market at every level. Recreational clubs run $200–$1,000+ a season. By U13, competitive tiers cost $2,000–$5,000 in club fees alone. At ECNL, MLS NEXT, and Girls Academy, all-in totals reach $8,000–$20,000 a year. Families pay the entire pipeline.",
        },
        {
          id: "outlier-canada",
          title: "Canada",
          description:
            "Canada follows the U.S. model more closely than most. Community soccer is more accessible — a few hundred dollars a season — but competitive tiers run through provincial associations where families pay $1,500–$4,000+ a year. Cheaper than the U.S., still pay-to-play.",
        },
        {
          id: "outlier-mexico",
          title: "Mexico",
          description:
            "Most kids play through community ligas amateurs — affordable neighborhood leagues with small fees. Talent gets pulled into Liga MX club youth systems, where signed players train without family fees. The bulk plays, and plays well, for very little.",
        },
        {
          id: "outlier-concacaf",
          title: "CONCACAF countries",
          description:
            "In Costa Rica, Honduras, Jamaica, Trinidad, and El Salvador, most kids play through community leagues for minimal fees. Federation programs and small-club training make up the bulk; competitive selection is a separate, free track. U.S.-scale pay-to-play isn't the regional norm.",
        },
        {
          id: "outlier-south-america",
          title: "South America",
          description:
            "Across Brazil, Argentina, Colombia, and Uruguay, most kids play in community leagues, public fields, and barrio teams for next to nothing. Talent identified there gets pulled into club youth systems for free. Pay-to-play at the U.S. scale doesn't exist.",
        },
        {
          id: "outlier-europe",
          title: "Europe",
          description:
            "In England, Spain, Germany, Italy, and France, most kids play through community clubs with modest annual dues — typically €50–€300. Federation- and club-funded development sits on top of that base, free for selected players. The U.S. pay-to-play model has no equivalent here.",
        },
      ],
    },
  },

  // ─── Youth soccer in the U.S., by age group ───
  {
    ariaLabel: "Youth soccer in the U.S., by age group",
    tone: "gold",
    "card-grid": {
      eyebrow: "How the system works",
      heading: "Youth soccer in the U.S., by age group.",
      cards: [
        {
          id: "age-u9-u12",
          icon: Sparkles,
          title: "U9–U12 · Foundation",
          description:
            "Recreational and pre-academy play. Boys and girls develop fundamentals at modest cost ($300–$1,500 per season). The system is most accessible here — families haven't hit the cost wall yet.",
        },
        {
          id: "age-u13-u17",
          icon: TrendingUp,
          title: "U13–U17 · Competitive years",
          description:
            "Players move into competitive tiers — NPL, DPL, and the top levels (ECNL, MLS NEXT for boys, Girls Academy for girls). Costs jump from $2,000 at entry to $8,000–$20,000 a year at the top. This is the developmental drop-off window — many families step away.",
        },
        {
          id: "age-u18-u19",
          icon: GraduationCap,
          title: "U18–U19 · College pipeline",
          description:
            "Showcases, ID camps, and college recruiting peak here. Pay-to-play extends to the camps that get a kid seen by coaches — $500–$2,000 per camp on top of season costs.",
        },
      ],
    },
  },

  // ─── Who we are ───
  {
    ariaLabel: "Who we are",
    tone: "light",
    "media-section": {
      eyebrow: "Who we are",
      heading: "Founded by parents and coaches inside the system.",
      parallax: true,
      body: (
        <>
          <p>
            Grassroots Foundation is a San Diego–based 501(c)(3) public charity
            (EIN 35-2822183) that funds youth soccer scholarships across San
            Diego County. We start in the South Bay — Chula Vista, National
            City, San Ysidro, and Imperial Beach — where the cost gradient is
            sharpest, and expand from there.
          </p>
          <p>
            Most clubs in the U.S. don&apos;t run scholarship pools at any
            meaningful scale. The kids who&apos;d benefit most from elite
            training are the least likely to be on the roster. Our grants cover
            the line items families can&apos;t sustain — club tuition, travel
            kits, cleats, and clinic spots — at clubs of every size.
          </p>
        </>
      ),
      media: {
        src: "https://images.unsplash.com/photo-1519823038424-f8dbabca95f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "A soccer field at sunset",
        aspect: "4/3",
      },
      mediaPosition: "left",
      cta: { label: "Read our mission", href: "/mission" },
    },
  },

  // ─── Mission grid ───
  {
    contain: false,
    ariaLabel: "What we fund",
    "mission-grid": {
      eyebrow: "What we fund",
      heading:
        "From a pair of cleats to a full season — every gap that prices a kid out of the game.",
      cards: [
        {
          id: "tuition",
          image: {
            src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A soccer pitch under stadium lights",
          },
          aspect: "tall",
          title: "Tuition",
          description:
            "Club fees alone run $2,000–$5,000 a season. Need-based scholarships will cover full or partial tuition at partner clubs so a kid stays on the roster — not the waitlist.",
          href: "/programs#scholarships",
          highlighted: true,
        },
        {
          id: "equipment",
          image: {
            src: "https://plus.unsplash.com/premium_photo-1663133623858-f9573e2e587b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Soccer cleats and gear ready for a match",
          },
          aspect: "short",
          title: "Equipment & gear",
          description:
            "Cleats, kits, training kits, balls, bags. The gear a kid needs to show up — covered by our grants when the family budget runs out before the season starts.",
          href: "/programs#equipment",
        },
        {
          id: "travel",
          image: {
            src: "https://images.unsplash.com/photo-1552318965-6e6be7484ada?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Players gathering near the team bench between matches",
          },
          aspect: "short",
          title: "Travel & tournaments",
          description:
            "Away matches, ID camps, showcase events. The hidden costs of competitive play that stack fastest at the top levels — folded into team-level sponsorships.",
          href: "/programs#team-sponsorship",
        },
        {
          id: "clinics",
          image: {
            src: "https://images.unsplash.com/photo-1629977009896-44a567a0543c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A coach demonstrating during a training session",
          },
          aspect: "tall",
          title: "Clinics & coaching",
          description:
            "Methodology training clinics where paying spots subsidize scholarship spots. Every paying registration funds a reserved seat for a Class of '26 kid.",
          href: "/programs#clinics",
        },
      ],
    },
  },

  // ─── Founding cohort ───
  {
    className: "section-warm",
    ariaLabel: "Founding cohort",
    tone: "light",
    "media-section": {
      parallax: true,
      eyebrow: "The founding cohort",
      heading: "We're funding our first 25 scholarships now.",
      body: (
        <>
          <p>
            Class of &apos;26 is our first cohort: 100 funded scholarships
            across San Diego County by the start of the 2026 season. The first
            25 are the founding cohort — funded entirely by donors who give
            before kickoff.
          </p>
          <p>
            Every gift between now and the 2026 season goes directly into Class
            of &apos;26 scholarships: club tuition, gear, and clinic spots, the
            line items that usually decide whether a kid stays on the team.
          </p>
        </>
      ),
      media: {
        src: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Soccer cleats, ball, and bag at the touchline",
        aspect: "4/3",
      },
      mediaCaption: "Placeholder — to be replaced with SD field photography",
      cta: { label: "Become a founding donor", href: "/donate" },
    },
  },

  // ─── FAQ ───
  {
    contain: false,
    tone: "gold",
    ariaLabel: "Frequently asked questions",

    "faq-section": {
      eyebrow: "Honest answers",
      heading:
        "How donations work, who we fund, and how to be sure we're legit.",
      images: [
        {
          src: "https://plus.unsplash.com/premium_photo-1682435576307-a71fec9529be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Two young soccer players on a San Diego pitch",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1676737201924-ba969467bc12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cleats and ball at the touchline",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1663133611323-69d98d17de90?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Youth team huddled before a match",
        },
      ],
      items: [
        {
          question: "Where does the money go?",
          answer: (
            <>
              Directly to a kid playing soccer. We cover whatever the cost
              barrier is — club fees, travel, uniforms, cleats, gear, training,
              clinic spots — at partner clubs across San Diego County. Every
              gift is tied to a kid in our Class of &apos;26 cohort, so you see
              exactly where it lands as the roster fills.
            </>
          ),
        },
        {
          question: "How do you decide which kids to fund?",
          answer: (
            <>
              Need-based. No merit gatekeeping, no auditions. We work with
              partner clubs to identify families whose financial situation means
              a kid would otherwise step away from the game. Households verify
              income; the intake process is straightforward and stays private.
            </>
          ),
        },
        {
          question:
            "Can I cover specific things — cleats, kit, a single season?",
          answer: (
            <>
              Yes. We fund the full range — from a $60 pair of cleats to a
              $5,000–$11,000 full season. Give to the general fund or sponsor a
              specific named campaign. Each campaign shows what your gift
              covers.
            </>
          ),
        },
        {
          question: "What if I want to sponsor a whole team or age group?",
          answer: (
            <>
              That&apos;s the plan. Our funding ladder runs from individual kids
              up through full team sponsorships, then full levels (DPL, MLS
              Next, ECNL), then full age groups across the region. Reach out —
              we&apos;ll structure a campaign to your gift.
            </>
          ),
        },
        {
          question: "How do I know this is legit?",
          answer: (
            <>
              Grassroots Foundation is a registered DBA of Grass Roots
              Foundation, a 501(c)(3) public charity (EIN 35-2822183).
              We&apos;re listed in the IRS Tax-Exempt Organization database, the{" "}
              <Link
                href="https://projects.propublica.org/nonprofits/organizations/352822183"
                target="_blank"
              >
                ProPublica Nonprofit Explorer
              </Link>
              , and hold the Candid Platinum Seal of Transparency. We&apos;ll
              publish our 990 the day it&apos;s filed.
            </>
          ),
        },
      ],
    },
  },

  // ─── Closing CTA ───
  {
    contain: false,
    ariaLabel: "Sustainer CTA",
    tone: "light",
    "cta-banner": {
      tone: "light",
      eyebrow: "Access, the Goal!",
      heading: "$50 a month keeps a kid in the game.",
      body: "A First Touch sustainer covers a kid's club tuition, gear, and clinic spots for a season. We're funding 100 kids in the Class of '26 — every monthly gift gets us closer.",
      tiers: [
        { amount: "$25/mo", label: "Funds gear and kits" },
        { amount: "$50/mo", label: "Adopt a kid for a season" },
        { amount: "$100/mo", label: "Sponsor a clinic spot" },
      ],
      cta: { label: "Become a sustainer", href: "/sustain" },
      fineprint:
        "Cancel anytime. 100% tax-deductible. Receipts emailed automatically.",
    },
  },
];
