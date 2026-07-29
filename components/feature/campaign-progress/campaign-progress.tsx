import Link from "next/link";
import { MoveRight } from "lucide-react";

import { cn } from "@/lib/utils";

import "./campaign-progress.css";

type Milestone = {
  label: string;
  detail: string;
  status: "complete" | "in-progress" | "upcoming";
};

type CampaignProgressProps = {
  className?: string;
  current?: number;
  goal?: number;
  unit?: string;
  milestones?: Milestone[];
};

const DEFAULT_MILESTONES: Milestone[] = [
  {
    label: "Phase 1",
    detail: "Foundation in place — board, banking, partner agreements",
    status: "in-progress",
  },
  {
    label: "Phase 2",
    detail: "First cohort placed at partner clubs",
    status: "upcoming",
  },
  {
    label: "Phase 3",
    detail: "Class of '26 — full Roster of 100",
    status: "upcoming",
  },
];

export function CampaignProgress({
  className,
  current = 0,
  goal = 100,
  unit = "on the roster",
  milestones = DEFAULT_MILESTONES,
}: CampaignProgressProps) {
  const percent = Math.min(100, Math.round((current / goal) * 100));

  return (
    <div className={cn("campaign-progress", className)}>
      <div className="campaign-progress-header">
        <div>
          <p className="campaign-progress-eyebrow">After the Cup</p>
          <h2 className="campaign-progress-heading">
            {goal} {unit}.
          </h2>
        </div>
        <p className="campaign-progress-lead">
          The Cup was the kickoff, not the final whistle. The club season starts
          this fall, and every kid we fund is another name on the Class of
          &rsquo;26 roster.
        </p>
      </div>

      <div className="campaign-progress-meter">
        <div className="campaign-progress-meter-stats">
          <span className="campaign-progress-meter-current">{current}</span>
          <span className="campaign-progress-meter-divider" aria-hidden="true">
            /
          </span>
          <span className="campaign-progress-meter-goal">{goal}</span>
          <span className="campaign-progress-meter-label">{unit} funded</span>
        </div>

        <div
          className="campaign-progress-meter-bar"
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={goal}
          aria-label={`${current} of ${goal} ${unit} funded`}
        >
          <div
            className="campaign-progress-meter-fill"
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="campaign-progress-meter-percent">{percent}% complete</p>
      </div>

      <ol className="campaign-progress-milestones" role="list">
        {milestones.map((milestone) => (
          <li
            key={milestone.label}
            data-status={milestone.status}
            className="campaign-progress-milestone"
          >
            <span
              className="campaign-progress-milestone-dot"
              aria-hidden="true"
            />
            <span className="campaign-progress-milestone-content">
              <span className="campaign-progress-milestone-label">
                {milestone.label}
              </span>
              <span className="campaign-progress-milestone-detail">
                {milestone.detail}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <Link href="/donate" className="campaign-progress-cta">
        <span>Sponsor the next on the roster</span>
        <MoveRight className="campaign-progress-cta-arrow" aria-hidden="true" />
      </Link>
    </div>
  );
}
