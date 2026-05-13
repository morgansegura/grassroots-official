import { cn } from "@/lib/utils";
import { SectionCta } from "@/components/ui/section-cta";

import "./cta-banner.css";
import { Eyebrow, Heading } from "@/components/ui";
import { Section } from "@/components/layout";

type Tier = {
  amount: string;
  label: string;
};

export type CtaBannerProps = {
  className?: string;
  tone?: "dark" | "gold" | "light";
  eyebrow?: string;
  heading: string;
  body?: React.ReactNode;
  tiers?: Tier[];
  cta: { label: string; href: string };
  fineprint?: string;
};

const DEFAULT_PROPS: Omit<CtaBannerProps, "className"> = {
  tone: "dark",
  eyebrow: "First Touch · Sustainer program",
  heading: "$50 a month keeps a kid in the game.",
  body: "A First Touch sustainer covers a kid's club tuition, gear, and clinic spots for a season. We're funding 100 kids by World Cup 2026 — every monthly gift gets us closer.",
  tiers: [
    { amount: "$25/mo", label: "Funds gear and kits" },
    { amount: "$50/mo", label: "Adopt a kid for a season" },
    { amount: "$100/mo", label: "Sponsor a clinic spot" },
  ],
  cta: { label: "Become a sustainer", href: "/sustain" },
  fineprint:
    "Cancel anytime. 100% tax-deductible. Receipts emailed automatically.",
};

export function CtaBanner({
  className,
  tone = DEFAULT_PROPS.tone,
  eyebrow = DEFAULT_PROPS.eyebrow,
  heading = DEFAULT_PROPS.heading,
  body = DEFAULT_PROPS.body,
  tiers = DEFAULT_PROPS.tiers,
  cta = DEFAULT_PROPS.cta,
  fineprint = DEFAULT_PROPS.fineprint,
}: Partial<CtaBannerProps>) {
  return (
    <div
      className={cn("cta-banner", className)}
      data-tone={tone}
      aria-label={heading}
    >
      <Atmosphere />

      <div className="cta-banner-inner contain">
        <div>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}

          <Heading as="h2" className="cta-banner-heading">
            {heading}
          </Heading>
        </div>

        {body ? <p className="cta-banner-body">{body}</p> : null}

        {tiers && tiers.length > 0 ? (
          <ul className="cta-banner-tiers" role="list">
            {tiers.map((tier) => (
              <li key={tier.label} className="cta-banner-tier">
                <span className="cta-banner-tier-amount">{tier.amount}</span>
                <span className="cta-banner-tier-label">{tier.label}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <SectionCta href={cta.href}>{cta.label}</SectionCta>

        {fineprint ? <p className="cta-banner-fineprint">{fineprint}</p> : null}
      </div>
    </div>
  );
}

function Atmosphere() {
  return <div className="cta-banner-atmosphere" aria-hidden="true" />;
}
