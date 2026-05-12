import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buildDonateUrl, type CampaignKey } from "@/lib/givebutter";

import { Eyebrow } from "@/components/ui/eyebrow";

import "./donate-tiers.css";

type Tier = {
  id: string;
  amount: number;
  frequency: "once" | "monthly";
  campaign?: CampaignKey;
  label: string;
  unit: string;
  description: string;
  highlighted?: boolean;
};

type DonateTiersProps = {
  className?: string;
  eyebrow?: string;
  heading?: string;
  tiers?: Tier[];
};

const DEFAULT_TIERS: Tier[] = [
  {
    id: "cleats",
    amount: 60,
    frequency: "once",
    campaign: "cleatsAndKits",
    label: "$60",
    unit: "One pair of cleats",
    description:
      "Funds a single pair of cleats for a kid who'd otherwise sit out.",
  },
  {
    id: "first-touch",
    amount: 50,
    frequency: "monthly",
    campaign: "firstTouch",
    label: "$50/mo",
    unit: "First Touch sustainer",
    description:
      "Monthly giving that funds tuition, gear, and clinic spots for one kid across a season.",
    highlighted: true,
  },
  {
    id: "season",
    amount: 2500,
    frequency: "once",
    campaign: "classOf26",
    label: "$2,500",
    unit: "One full season",
    description:
      "Covers full season tuition for one kid at most South Bay club programs.",
  },
  {
    id: "all-in",
    amount: 11000,
    frequency: "once",
    campaign: "classOf26",
    label: "$11K",
    unit: "All-in, top tier",
    description:
      "Full all-in cost for one kid at the highest competitive level: tuition, travel, kit, equipment, clinics.",
  },
];

export function DonateTiers({
  className,
  eyebrow = "Pick a unit of good",
  heading = "Every gift is tied to a specific outcome.",
  tiers = DEFAULT_TIERS,
}: DonateTiersProps) {
  return (
    <section
      className={cn("donate-tiers", className)}
      aria-label="Donation tiers"
    >
      <div className="donate-tiers-inner contain">
        <header className="donate-tiers-header">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="donate-tiers-heading">{heading}</h2>
        </header>

        <ul className="donate-tiers-grid" role="list">
          {tiers.map((tier) => (
            <li
              key={tier.id}
              className="donate-tiers-card"
              data-highlight={tier.highlighted ? "true" : "false"}
            >
              <Link
                href={buildDonateUrl({
                  amount: tier.amount,
                  frequency: tier.frequency,
                  campaign: tier.campaign,
                })}
                className="donate-tiers-card-link"
              >
                <span className="donate-tiers-card-amount">{tier.label}</span>
                <span className="donate-tiers-card-unit">{tier.unit}</span>
                <p className="donate-tiers-card-description">
                  {tier.description}
                </p>
                <span className="donate-tiers-card-arrow" aria-hidden="true">
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
