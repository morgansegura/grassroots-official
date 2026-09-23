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
            "We help San Diego County kids play club soccer with their friends. Your gift covers club tuition, gear, and clinic spots for families who need a hand with the cost.",
          cta: { label: "Become a founding donor", href: "/donate" },
        },
        {
          id: "after-the-cup",
          image: {
            src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1429&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Youth players warming up on a club pitch",
          },
          eyebrow: "After the Cup",
          heading: "The World Cup came home.\nNow it's their turn to play.",
          tagline:
            "The club season starts this fall, and San Diego kids are ready. Founding donors help put the first names on the Class of '26 roster.",
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
            "A season of tuition runs $2,500 to $4,500, and gear and travel add more. We cover these costs so a kid can join the team and keep playing.",
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
      eyebrow: "What it takes to play",
      heading: "What goes into a season of club soccer.",
      cards: [
        {
          id: "outlier",
          icon: Globe,
          title: "Clubs are how kids grow",
          description:
            "In the U.S., most competitive youth soccer happens at clubs that families pay to join. It's where kids train with friends, learn from good coaches, and grow as players.",
        },
        {
          id: "all-in-cost",
          icon: DollarSign,
          title: "Tuition is only the start",
          description:
            "Club fees come first, then kit, gear, travel, and camps. At the top levels, the full cost can reach roughly $11,000 a year.",
        },
        {
          id: "geography",
          icon: MapPin,
          title: "Weekends on the road",
          description:
            "Tournaments and showcases often mean long drives and weekend travel. Those trips are part of the fun of being on a team, and part of the cost.",
        },
        {
          id: "showcase",
          icon: Trophy,
          title: "Camps help players get seen",
          description:
            "Showcases and ID camps are where many players meet college coaches. They carry their own fees on top of the season.",
        },
        {
          id: "drop-off",
          icon: TrendingDown,
          title: "Help matters most around 12",
          description:
            "Most kids who stop playing sports do it around age 12 or 13, just as club soccer gets more serious and more expensive. Support at that age helps a kid stay with the team they love.",
        },
        {
          id: "scholarships",
          icon: Award,
          title: "Scholarships open the door",
          description:
            "Our scholarships add to the help clubs already give, so more kids who love the game can join a team and keep playing.",
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
            "Families usually pay for competitive youth soccer directly. Recreational clubs run $200–$1,000+ a season. By U13, competitive tiers cost $2,500–$4,500 in club fees alone. At ECNL, MLS NEXT, and Girls Academy, all-in totals reach $8,000–$20,000 a year. This is where donors can help.",
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
            "In Costa Rica, Honduras, Jamaica, Trinidad, and El Salvador, most kids play through community leagues for minimal fees. Federation programs and small-club training make up the bulk; competitive selection is a separate, free track. Most families pay very little.",
        },
        {
          id: "outlier-south-america",
          title: "South America",
          description:
            "Across Brazil, Argentina, Colombia, and Uruguay, most kids play in community leagues, public fields, and barrio teams for next to nothing. Talented players are brought into club youth systems for free.",
        },
        {
          id: "outlier-europe",
          title: "Europe",
          description:
            "In England, Spain, Germany, Italy, and France, most kids play through community clubs with modest annual dues — typically €50–€300. Federation- and club-funded development sits on top of that base, free for selected players.",
        },
      ],
    },
  },

  // ─── Youth soccer in the U.S., by age group ───
  {
    ariaLabel: "Youth soccer in the U.S., by age group",
    tone: "gold",
    "card-grid": {
      eyebrow: "How club soccer works",
      heading: "Youth soccer in the U.S., by age group.",
      cards: [
        {
          id: "age-u9-u12",
          icon: Sparkles,
          title: "U9–U12 · Foundation",
          description:
            "Recreational and pre-academy play. Boys and girls develop fundamentals at modest cost ($300–$1,500 per season). This is where most kids fall in love with the game.",
        },
        {
          id: "age-u13-u17",
          icon: TrendingUp,
          title: "U13–U17 · Competitive years",
          description:
            "Players move into competitive tiers — NPL, DPL, and the top levels (ECNL, MLS NEXT for boys, Girls Academy for girls). Costs jump from $2,000 at entry to $8,000–$20,000 a year at the top. This is when a little help does the most to keep a kid on the team.",
        },
        {
          id: "age-u18-u19",
          icon: GraduationCap,
          title: "U18–U19 · College pipeline",
          description:
            "Showcases, ID camps, and college recruiting peak here. Camps that help a kid get seen by coaches run $500–$2,000 each, on top of season costs.",
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
            City, San Ysidro, and Imperial Beach — and grow from there.
          </p>
          <p>
            We work alongside clubs of every size to help more kids play. Our
            grants cover club tuition, kits, cleats, and clinic spots, so a
            family can say yes to the season and a kid can keep playing with
            their friends.
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
        "From a pair of cleats to a full season, we cover what it takes for a kid to play.",
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
            "A season of club fees runs $2,500 to $4,500. Need-based scholarships cover full or partial tuition at partner clubs, so a kid can join the team and stay with it.",
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
            "Cleats, kits, training kits, balls, and bags. Everything a kid needs to show up ready for practice, covered by our grants.",
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
              Directly to a kid playing soccer. We cover what a kid needs to
              play: club fees, travel, uniforms, cleats, gear, training, clinic
              spots — at partner clubs across San Diego County. Every gift is
              tied to a kid in our Class of &apos;26 cohort, so you see exactly
              where it lands as the roster fills.
            </>
          ),
        },
        {
          question: "How do you decide which kids to fund?",
          answer: (
            <>
              Need-based. No merit gatekeeping, no auditions. We work with
              partner clubs to find families who need help with the cost of the
              season. Households verify income; the intake process is
              straightforward and stays private.
            </>
          ),
        },
        {
          question:
            "Can I cover specific things — cleats, kit, a single season?",
          answer: (
            <>
              Yes. We fund the full range — from a $60 pair of cleats to a
              $2,500 to $4,500 season of tuition. Give to the general fund or
              sponsor a specific named campaign. Each campaign shows what your
              gift covers.
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
      heading: "Give monthly and help a kid play all season.",
      body: "Monthly gifts give us steady support, so we can commit to a player's season before it starts. We're funding 100 kids in the Class of '26, and every monthly gift brings one closer to their team.",
      tiers: [
        { amount: "$25/mo", label: "Cleats for a growing player" },
        { amount: "$50/mo", label: "A full season's kit" },
        { amount: "$100/mo", label: "Half a season of tuition" },
      ],
      cta: { label: "Give monthly", href: "/donate" },
      fineprint:
        "Cancel anytime. Tax-deductible, with receipts emailed automatically. Tuition figures use a $2,500 season at Chula Vista FC.",
    },
  },
];
