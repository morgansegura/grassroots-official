import { cn } from "@/lib/utils";

import { Eyebrow } from "@/components/ui/eyebrow";

import "./donate-hero.css";

type DonateHeroProps = {
  className?: string;
  eyebrow?: string;
  heading?: string;
  body?: React.ReactNode;
};

export function DonateHero({
  className,
  eyebrow = "Every kid plays.",
  heading = "Be a founding donor.",
  body = (
    <>
      Club soccer in San Diego runs $2,000–$5,000 in tuition alone, and roughly
      $11,000 a year all-in. Working-class families price out long before the
      season starts. Your gift covers tuition, kits, equipment, travel, and
      clinic seats — at partner clubs across San Diego County. Every kid plays.
    </>
  ),
}: DonateHeroProps) {
  return (
    <section className={cn("donate-hero", className)} aria-label="Donate">
      <div className="donate-hero-inner contain">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="donate-hero-heading">{heading}</h1>
        {body ? <p className="donate-hero-body">{body}</p> : null}
      </div>
    </section>
  );
}
