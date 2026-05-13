import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionCta } from "@/components/ui/section-cta";

import "./card-grid.css";
import { Heading } from "@/components/ui";

export type CardGridItem = {
  id: string;
  icon?: LucideIcon;
  title: string;
  description: string;
};

export type CardGridProps = {
  className?: string;
  eyebrow?: string;
  heading?: string;
  cards: CardGridItem[];
  cta?: { label: string; href: string } | null;
};

export function CardGrid({
  className,
  eyebrow,
  heading,
  cards,
  cta,
}: CardGridProps) {
  return (
    <div className={cn("card-grid", className)}>
      <Curve />

      <div className="card-grid-inner">
        {eyebrow || heading ? (
          <header className="card-grid-header">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            {heading ? (
              <Heading as="h2" size="lg" className="card-grid-heading">
                {heading}
              </Heading>
            ) : null}
          </header>
        ) : null}

        <ul className="card-grid-cards" role="list">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <li key={card.id} className="card-grid-card">
                {Icon ? (
                  <Icon
                    className="card-grid-card-icon"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                ) : null}
                <h3 className="card-grid-card-title">{card.title}</h3>
                <p className="card-grid-card-description">{card.description}</p>
              </li>
            );
          })}
        </ul>

        {cta ? (
          <div className="card-grid-cta-row">
            <SectionCta href={cta.href}>{cta.label}</SectionCta>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Curve() {
  return (
    <svg
      className="card-grid-curve"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M -50 360 Q 200 280, 380 500 Q 540 660, 760 480 Q 920 360, 1080 540 T 1300 470"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
