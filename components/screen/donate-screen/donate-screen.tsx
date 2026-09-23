import { cn } from "@/lib/utils";
import { ZEFFY_FORM_URL } from "@/lib/givebutter";

import { DonateTrustStrip } from "@/components/feature";
import { DonateEmbedEngagement } from "@/components/analytics";

import "./donate-screen.css";

// Amounts match the giving levels in public/llms.txt.
const GIFT_USES = [
  { amount: "$60", label: "buys a pair of cleats" },
  { amount: "$200", label: "covers a full season of kit" },
  { amount: "$2,500", label: "pays a full season of tuition" },
];

type DonateScreenProps = {
  className?: string;
};

export function DonateScreen({ className }: DonateScreenProps) {
  return (
    <main className={cn("donate-screen", className)}>
      <DonateEmbedEngagement />
      <section className="donate-screen-embed-section" aria-label="Donate now">
        <div className="donate-screen-embed contain">
          <header className="donate-screen-embed-header">
            <h1 className="donate-screen-embed-heading">
              Help kids in San Diego play club soccer.
            </h1>
            <p className="donate-screen-embed-lead">
              Club soccer in San Diego County costs $2,000 to $5,000 a season in
              tuition alone. Grassroots Foundation pays those costs for kids
              whose families can&apos;t, so they can play alongside their
              teammates at the clubs they already love. This season we&apos;re
              funding our first 100 players, and we would be grateful for your
              help.
            </p>
            <ul className="donate-screen-embed-uses">
              {GIFT_USES.map((use) => (
                <li key={use.amount} className="donate-screen-embed-use">
                  <span className="donate-screen-embed-use-amount">
                    {use.amount}
                  </span>
                  <span>{use.label}</span>
                </li>
              ))}
            </ul>
          </header>

          <div className="donate-screen-embed-slot">
            <iframe
              src={ZEFFY_FORM_URL}
              title="Donate to Grassroots Foundation"
              className="donate-screen-embed-iframe"
              loading="lazy"
              allow="payment *"
            />
          </div>

          <footer className="donate-screen-embed-footer">
            <p className="donate-screen-embed-reminder">
              Every gift, monthly or one-time, helps a kid stay with their team
              this season. Thank you for being part of it.
            </p>
            <p className="donate-screen-embed-note">
              Tax-deductible, with no platform fees. Your receipt is emailed
              automatically.
            </p>
          </footer>
        </div>
      </section>

      <DonateTrustStrip />
    </main>
  );
}
