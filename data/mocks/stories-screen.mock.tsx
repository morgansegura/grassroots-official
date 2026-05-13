import {
  BookOpen,
  Camera,
  FileText,
  Globe,
  Landmark,
  MapPin,
  MessageSquareQuote,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";

import type { SectionProps } from "@/components/layout";
import type {
  CalloutProps,
  CardGridProps,
  CtaBannerProps,
  MediaSectionProps,
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
  | { callout: CalloutProps }
  | { "card-grid": CardGridProps }
  | { "media-section": MediaSectionProps }
  | { "cta-banner": CtaBannerProps };

export type StoriesScreenSection = SectionConfig & FeatureEntry;

export const STORIES_SCREEN_MOCK: StoriesScreenSection[] = [
  // ─── Hero ───
  {
    contain: false,
    size: "intro",
    tone: "dark",
    ariaLabel: "Stories from the work",
    callout: {
      eyebrow: "Stories",
      title: (
        <>
          Stories from the field <br />— coming soon —
        </>
      ),
      description:
        "We don't have recipient stories yet. The Class of '26 is being funded now. When kids are on the roster, their stories — told with consent, by them and their families — will live here.",
    },
  },

  // ─── Pre-launch posture ───
  {
    ariaLabel: "Pre-launch posture",
    "media-section": {
      layout: "bg-half",
      eyebrow: "Pre-launch posture",
      heading: "No fabricated stories. No stock-photo recipients.",
      body: (
        <>
          <p>
            Most nonprofit websites lead with a face and a quote. We won&apos;t
            invent one to hit the visual. The Class of &apos;26 — our founding
            cohort of 100 kids — is being funded right now, from this page. The
            first scholarships go out as the founding donors come in.
          </p>
          <p>
            When real kids are on the roster, with their families&apos; consent,
            their stories will land here. Every story will be captured the same
            way: in the family&apos;s words, with full editorial control on
            their side, and the right to revoke or remove at any time.
          </p>
        </>
      ),
      media: {
        src: "media/image/apfc-group2.jpeg",
        alt: "Empty pitch at sunset",
        aspect: "4/3",
      },
      mediaCaption:
        "The first stories arrive once the first kids are on the roster.",
      cta: { label: "Become a founding donor", href: "/donate" },
    },
  },

  // ─── What stories will include ───
  {
    ariaLabel: "What every story will include",
    tone: "light",
    "media-section": {
      eyebrow: "What stories will include",
      heading: "Honest. Specific. Verifiable.",
      mediaPosition: "left",
      parallax: true,
      body: (
        <>
          <p>
            Every recipient story we publish will name the same four things: the
            program they&apos;re funded under, the dollars deployed on their
            behalf, the partner-club program they play with, and the impact in
            their own words.
          </p>
          <p>
            We don&apos;t round numbers up. We don&apos;t embellish. Every story
            is checked with the family before it goes live — copy, photo, and
            quotes — and either parent or legal guardian holds a permanent right
            to remove or revise it.
          </p>
        </>
      ),
      media: {
        src: "media/image/apfc-group.webp",
        alt: "Youth team huddled before a match",
        aspect: "4/3",
      },
      cta: { label: "Read our safeguarding policy", href: "/safeguarding" },
    },
  },

  // ─── How we work with families (consent + care) ───
  {
    ariaLabel: "How we work with families",
    tone: "gold",
    "card-grid": {
      eyebrow: "Story capture",
      heading: "How we work with families.",
      cards: [
        {
          id: "consent",
          icon: ShieldCheck,
          title: "Written parental consent",
          description:
            "No story, photo, or quote of a minor goes online without a signed media release from a parent or legal guardian. Consent covers the specific story and can be withdrawn at any time.",
        },
        {
          id: "family-edit",
          icon: MessageSquareQuote,
          title: "Family-edited copy",
          description:
            "The family reads the full story, photo, and quotes before it goes live. They can edit, remove anything, or pull the whole story. We don't publish until they sign off.",
        },
        {
          id: "photo-control",
          icon: Camera,
          title: "Photo & video controls",
          description:
            "Families choose the level — name and photo, first name only, or anonymous with imagery cropped to remove identifying features. Default is the most private option.",
        },
        {
          id: "right-to-remove",
          icon: FileText,
          title: "Right to remove, always",
          description:
            "At any point — that day, that year, ten years later — a family can ask us to remove a story. We act within seven days, every time, no questions asked.",
        },
      ],
    },
  },

  // ─── Field notes (the journal — live content while waiting for recipient stories) ───
  {
    ariaLabel: "Field notes",
    "card-grid": {
      eyebrow: "Field notes",
      heading: "What we're learning.",
      cards: [
        {
          id: "fn-cost-stack",
          icon: TrendingDown,
          title: "Why club soccer is $11K a year",
          description:
            "The cost stack, line by line. Tuition, travel, kits, ID camps, training. How a few hundred a season turns into eleven thousand by U15.",
        },
        {
          id: "fn-dropoff",
          icon: TrendingDown,
          title: "The 11–13 drop-off, by the numbers",
          description:
            "Why the developmental window where the most kids quit is also the window where club costs spike — and what the Project Play data actually says.",
        },
        {
          id: "fn-south-bay",
          icon: MapPin,
          title: "South Bay clubs, pay-to-play, and who gets left out",
          description:
            "What competitive youth soccer looks like in Chula Vista, National City, San Ysidro, and Imperial Beach — and where the gap shows up.",
        },
        {
          id: "fn-international",
          icon: Globe,
          title: "How the rest of the world funds development",
          description:
            "Most countries' kids play for €50–€300 a year. The U.S. is the outlier. A walk through how the major footballing nations actually do it.",
        },
        {
          id: "fn-world-cup",
          icon: Landmark,
          title: "What the World Cup '26 spotlight means for SD youth soccer",
          description:
            "LA is a host city. The world is watching American soccer for the first time in a generation. What it could mean for access — and what it probably won't.",
        },
        {
          id: "fn-theory-of-change",
          icon: BookOpen,
          title: "How a donor dollar becomes a kid on the pitch",
          description:
            "Our theory of change, mechanically: input → activity → output → outcome → impact. The exact path your gift travels.",
        },
      ],
      cta: { label: "Read the full journal", href: "/blog" },
    },
  },

  // ─── From the founders (hidden pre-launch — needs joint copy + portrait) ───
  // {
  //   ariaLabel: "From the founders",
  //   "media-section": {
  //     eyebrow: "From the founders",
  //     heading: "Why this exists.",
  //     mediaPosition: "left",
  //     body: (
  //       <>
  //         <p>
  //           We&apos;ve been inside San Diego club soccer for years. Our own kids
  //           have played MLS Next Homegrown and GA Aspire. Doing this work has
  //           put us alongside families across every league — top training groups,
  //           coaches, trainers, and club directors at clubs of every size.
  //         </p>
  //         <p>
  //           Year after year, we&apos;ve watched families step away because the
  //           cost wall hit them at U13 or U14. Some had real talent. Some just
  //           loved the game. None of them should have had to choose between
  //           playing and paying rent.
  //         </p>
  //         <p>
  //           Grassroots Foundation exists to close that gap. We want to live in a
  //           place where a kid&apos;s family finances don&apos;t decide who
  //           develops in U.S. soccer.
  //         </p>
  //         <p className="founder-signoff">— The founders, Grassroots Foundation</p>
  //       </>
  //     ),
  //     media: { src: "", alt: "", aspect: "1/1" },
  //     cta: { label: "Read our mission", href: "/mission" },
  //   },
  // },

  // ─── Class of '26 first stories ───
  {
    tone: "white",
    ariaLabel: "Class of '26 first stories",
    "media-section": {
      eyebrow: "Class of '26 · First stories",
      heading: "The first names land when the first kids are on the roster.",
      parallax: true,
      body: (
        <>
          <p>
            Founding donors fund the first scholarships. Those scholarships fund
            the first kids. Those kids — with their families&apos; permission —
            are the first stories on this page.
          </p>
          <p>
            Until then, the most honest thing we can do is leave this page empty
            of recipients. The fastest way to fill it is to be one of the donors
            who puts a kid on the roster.
          </p>
        </>
      ),
      media: {
        src: "https://images.unsplash.com/photo-1758845015691-6aa78edf8d20?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Youth players gathered on a San Diego pitch",
        aspect: "4/3",
      },
      mediaCaption: "100 kids by World Cup 2026.",
      cta: { label: "Fund the first names", href: "/donate" },
    },
  },

  // ─── In the news (hidden pre-launch — re-enable when there is real press) ───
  // {
  //   ariaLabel: "In the news",
  //   tone: "neutral",
  //   "card-grid": {
  //     eyebrow: "In the news",
  //     heading: "When we make news, it'll appear here.",
  //     cards: [
  //       {
  //         id: "press-coming",
  //         icon: Newspaper,
  //         title: "Press coverage — coming soon",
  //         description:
  //           "We'll list every interview, article, and mention here as they happen, with a link and a short note on what was discussed. Same posture as the rest of the page: honest, specific, verifiable.",
  //       },
  //     ],
  //   },
  // },

  // ─── Closing CTA ───
  {
    contain: false,
    tone: "gold",
    ariaLabel: "Closing CTA",
    "cta-banner": {
      tone: "light",
      eyebrow: "Get involved",
      heading: "Be the donor whose name funds the first story.",
      body: "The Class of '26 begins fall 2026. The first scholarship recipients are being identified now. Founding donors fund the first names on the roster — and the first stories that come back from the field.",
      cta: { label: "Become a founding donor", href: "/donate" },
      tiers: [],
    },
  },
];
