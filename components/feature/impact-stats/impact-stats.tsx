import { cn } from "@/lib/utils";

import "./impact-stats.css";
import { Heading } from "@/components/ui";

type Stat = {
  value: string;
  label: string;
};

export type ImpactStatsProps = {
  className?: string;
  heading?: string;
  stats?: Stat[];
};

const DEFAULT_STATS: Stat[] = [
  { value: "$2K–$5K", label: "Club fees, just to be on the team" },
  { value: "~$11K", label: "All-in per kid, per year at the top tiers" },
  { value: "100", label: "Kids in the Class of '26" },
  { value: "$50/mo", label: "Funds one kid for a season — First Touch" },
];

export function ImpactStats({
  className,
  heading = "What it costs to play.",
  stats = DEFAULT_STATS,
}: ImpactStatsProps) {
  return (
    <div className={cn("impact-stats", className)}>
      {heading ? (
        <Heading as="h2" size="lg" className="impact-stats-heading">
          {heading}
        </Heading>
      ) : null}

      <ul className="impact-stats-grid" role="list">
        {stats.map((stat) => (
          <li key={stat.label} className="impact-stats-item">
            <span className="impact-stats-value">{stat.value}</span>
            <span className="impact-stats-label">{stat.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
