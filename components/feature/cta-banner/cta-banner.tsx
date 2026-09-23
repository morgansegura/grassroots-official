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
