import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";

import "./mission-grid.css";

type MissionCard = {
  id: string;
  image: { src: string; alt: string };
  aspect: "tall" | "short";
  title: string;
  description: string;
  href?: string;
  highlighted?: boolean;
};

export type MissionGridProps = {
  className?: string;
  eyebrow?: string;
  heading?: string;
  cards?: MissionCard[];
};

const DEFAULT_CARDS: MissionCard[] = [
  {
    id: "tuition",
    image: {
      src: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?auto=format&fit=crop&w=1200&q=80",
      alt: "Young player in club kit on the pitch",
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
      src: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&w=1200&q=80",
      alt: "Soccer cleats, ball, and bag at the touchline",
    },
    aspect: "short",
    title: "Equipment & gear",
    description:
      "Cleats, kits, training kits, balls, bags. The gear a kid needs to show up — covered by our grants when the family budget runs out before the season starts.",
    href: "/programs",
  },
  {
    id: "travel",
    image: {
      src: "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?auto=format&fit=crop&w=1200&q=80",
      alt: "Youth team huddled before a match",
    },
    aspect: "short",
    title: "Travel & tournaments",
    description:
      "Away matches, ID camps, showcase events. The hidden costs of competitive play that stack fastest at the top levels — folded into team-level sponsorships.",
    href: "/programs",
  },
  {
    id: "clinics",
    image: {
      src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80",
      alt: "Coach training a young soccer player",
    },
    aspect: "tall",
    title: "Clinics & coaching",
    description:
      "Elite-methodology training built so paying spots fund scholarship spots. Where Class of '26 kids will meet world-class coaching once the cohort launches.",
    href: "/programs#clinics",
  },
];

export function MissionGrid({
  className,
  eyebrow = "What we fund",
  heading = "From a pair of cleats to a full season — every gap that prices a kid out of the game.",
  cards = DEFAULT_CARDS,
}: MissionGridProps) {
  return (
    <div
      className={cn("mission-grid contain", className)}
      aria-label="What we fund"
    >
      {/* <DotPattern /> */}

      <div className="mission-grid-inner">
        <header className="mission-grid-header">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mission-grid-heading">{heading}</h2>
        </header>

        <div className="mission-grid-cards">
          <ul className="mission-grid-column" role="list">
            {cards
              .filter((_, i) => i % 2 === 0)
              .map((card) => (
                <li
                  key={card.id}
                  className="mission-grid-card"
                  data-aspect={card.aspect}
                  data-highlight={card.highlighted ? "true" : "false"}
                >
                  {card.href ? (
                    <Link href={card.href} className="mission-grid-card-link">
                      <Body card={card} />
                    </Link>
                  ) : (
                    <Body card={card} />
                  )}
                </li>
              ))}
          </ul>
          <ul className="mission-grid-column" role="list">
            {cards
              .filter((_, i) => i % 2 === 1)
              .map((card) => (
                <li
                  key={card.id}
                  className="mission-grid-card"
                  data-aspect={card.aspect}
                  data-highlight={card.highlighted ? "true" : "false"}
                >
                  {card.href ? (
                    <Link href={card.href} className="mission-grid-card-link">
                      <Body card={card} />
                    </Link>
                  ) : (
                    <Body card={card} />
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Body({ card }: { card: MissionCard }) {
  return (
    <>
      <figure className="mission-grid-card-figure">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={card.image.src} alt={card.image.alt} />
      </figure>
      <div className="mission-grid-card-body">
        <h3 className="mission-grid-card-title">{card.title}</h3>
        <p className="mission-grid-card-description">{card.description}</p>
        {card.href ? (
          <span className="mission-grid-card-arrow" aria-hidden="true">
            <ArrowUpRight className="size-4" />
          </span>
        ) : null}
      </div>
    </>
  );
}

function DotPattern() {
  return (
    <svg className="mission-grid-dots" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <pattern
          id="mission-grid-dots-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.4" fill="currentColor" />
        </pattern>
      </defs>
      <polygon
        points="0,120 120,120 0,0"
        fill="url(#mission-grid-dots-pattern)"
      />
    </svg>
  );
}
