import Link from "next/link";

import { cn } from "@/lib/utils";
import { SectionCta } from "@/components/ui/section-cta";

import "./campaigns-grid.css";
import { Heading } from "@/components/ui";

type Campaign = {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  goal: number;
  raised: number;
};

export type CampaignsGridProps = {
  className?: string;
  heading?: string;
  description?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  campaigns?: Campaign[];
};

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&w=1200&q=80";

const DEFAULT_CAMPAIGNS: Campaign[] = [
  {
    id: "founding-25",
    slug: "class-of-26-founding-25",
    category: "Scholarships",
    title: "Class of '26: Founding 25",
    description:
      "Fund the first 25 kids on the Roster of 100 alongside our founding donors.",
    image: {
      src: PLACEHOLDER_IMG,
      alt: "Soccer cleats, ball, and bag at the touchline",
    },
    goal: 50000,
    raised: 0,
  },
  {
    id: "cleats-and-kits",
    slug: "cleats-and-kits",
    category: "Equipment",
    title: "Cleats & Kits Drive",
    description:
      "Equipment grants for kids whose families can't cover gear before the season starts.",
    image: {
      src: PLACEHOLDER_IMG,
      alt: "Soccer cleats, ball, and bag at the touchline",
    },
    goal: 5000,
    raised: 0,
  },
  {
    id: "first-clinic",
    slug: "first-clinic-seats",
    category: "Clinics",
    title: "First Clinic — Reserved Seats",
    description:
      "Underwrite reserved seats for scholarship recipients at our first methodology training clinic. Date set once funding is secured.",
    image: {
      src: PLACEHOLDER_IMG,
      alt: "Soccer cleats, ball, and bag at the touchline",
    },
    goal: 7500,
    raised: 0,
  },
];

function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatPercent(n: number): string {
  return n % 1 === 0 ? `${n.toFixed(0)}%` : `${n.toFixed(1)}%`;
}

export function CampaignsGrid({
  className,
  heading = "Founding campaigns — every gift names the first kids on the roster.",
  description = "Each campaign covers a specific gap — tuition, gear, a clinic seat. Pick the one that fits how you want to give. We're at $0 raised on every line; founding donors put the first dollar on each.",
  viewAllHref = "/campaigns",
  viewAllLabel = "View all campaigns",
  campaigns = DEFAULT_CAMPAIGNS,
}: CampaignsGridProps) {
  return (
    <div
      className={cn("campaigns-grid", className)}
      aria-label="Founding campaigns"
    >
      <DotPattern />

      <div className="campaigns-grid-inner contain">
        <header className="campaigns-grid-header">
          <div className="campaigns-grid-header-text">
            <Heading as="h2" className="campaigns-grid-heading">
              {heading}
            </Heading>
            <p className="campaigns-grid-description">{description}</p>
          </div>

          <SectionCta href={viewAllHref}>{viewAllLabel}</SectionCta>
        </header>

        <ul className="campaigns-grid-cards" role="list">
          {campaigns.map((campaign) => {
            const rawPercent =
              campaign.goal > 0 ? (campaign.raised / campaign.goal) * 100 : 0;
            const percent = Math.min(100, rawPercent);

            return (
              <li
                key={campaign.id}
                id={campaign.slug}
                className="campaigns-grid-card"
              >
                <Link
                  href={`/campaigns#${campaign.slug}`}
                  className="campaigns-grid-card-link"
                >
                  <figure className="campaigns-grid-card-figure">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={campaign.image.src} alt={campaign.image.alt} />
                  </figure>

                  <div className="campaigns-grid-card-body">
                    <div>
                      <p className="campaigns-grid-card-category">
                        {campaign.category}
                      </p>
                      <h3 className="campaigns-grid-card-title">
                        {campaign.title}
                      </h3>
                      <p className="campaigns-grid-card-description">
                        {campaign.description}
                      </p>
                    </div>
                    <div className="campaigns-grid-card-progress-container">
                      <div className="campaigns-grid-card-progress">
                        <div
                          className="campaigns-grid-card-progress-bar"
                          role="progressbar"
                          aria-valuenow={Math.round(percent)}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="campaigns-grid-card-progress-fill"
                            style={{ width: `${percent}%` }}
                          />
                          <span
                            className="campaigns-grid-card-progress-percent"
                            style={{ left: `${percent}%` }}
                          >
                            {formatPercent(percent)}
                          </span>
                          <span
                            className="campaigns-grid-card-progress-indicator"
                            style={{ left: `${percent}%` }}
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <dl className="campaigns-grid-card-stats">
                        <div className="campaigns-grid-card-stat">
                          <dt>Goal:</dt>
                          <dd>{formatCurrency(campaign.goal)}</dd>
                        </div>
                        <span
                          className="campaigns-grid-card-stats-divider"
                          aria-hidden="true"
                        >
                          {"//"}
                        </span>
                        <div className="campaigns-grid-card-stat">
                          <dt>Raised:</dt>
                          <dd>{formatCurrency(campaign.raised)}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function DotPattern() {
  return (
    <svg
      className="campaigns-grid-dots"
      viewBox="0 0 120 120"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="campaigns-grid-dots-pattern"
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
        fill="url(#campaigns-grid-dots-pattern)"
      />
    </svg>
  );
}
