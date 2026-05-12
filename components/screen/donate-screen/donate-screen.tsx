import { cn } from "@/lib/utils";
import { ZEFFY_FORM_URL } from "@/lib/givebutter";

import { DonateTrustStrip } from "@/components/feature";

import "./donate-screen.css";

type DonateScreenProps = {
  className?: string;
};

export function DonateScreen({ className }: DonateScreenProps) {
  return (
    <main className={cn("donate-screen", className)}>
      <section className="donate-screen-embed-section" aria-label="Donate now">
        <div className="donate-screen-embed contain">
          <header className="donate-screen-embed-header">
            <h1 className="donate-screen-embed-heading">Make a gift.</h1>
            <p className="donate-screen-embed-lead">
              100% goes to the org. No platform fees. Tax receipts emailed
              automatically.
            </p>
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
        </div>
      </section>

      <DonateTrustStrip />
    </main>
  );
}
