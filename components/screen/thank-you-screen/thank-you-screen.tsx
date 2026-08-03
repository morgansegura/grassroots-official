import Link from "next/link";

import { cn } from "@/lib/utils";
import { Section } from "@/components/layout";
import { DonationComplete } from "@/components/analytics";

import "./thank-you-screen.css";

const CONTACT_EMAIL = "hello@grassrootsfdn.org";

/** Runs before paint so site chrome never flashes inside the Zeffy embed. */
const EMBED_FLAG = `if(window.self!==window.top)document.documentElement.dataset.embed="true"`;

type ThankYouScreenProps = {
  className?: string;
};

export function ThankYouScreen({ className }: ThankYouScreenProps) {
  return (
    <main className={cn("thank-you-screen", className)}>
      <script dangerouslySetInnerHTML={{ __html: EMBED_FLAG }} />
      <DonationComplete />

      <Section size="intro" ariaLabel="Donation received">
        <div className="thank-you-screen-body">
          <p className="thank-you-screen-eyebrow">Gift received</p>
          <h1 className="thank-you-screen-heading">Thank you.</h1>
          <p className="thank-you-screen-lead">
            Your receipt is on its way by email from Zeffy. If it hasn&apos;t
            landed in a few minutes, check your spam folder. Grassroots
            Foundation is a 501(c)(3) nonprofit, EIN 35-2822183, so your gift is
            tax-deductible.
          </p>

          <div className="thank-you-screen-section">
            <h2 className="thank-you-screen-subheading">Where this goes</h2>
            <p>
              Club tuition, kit, equipment, and clinic spots for San Diego
              County kids whose families would otherwise have to step away from
              the game because of cost. We pay clubs directly.
            </p>
            <p>
              We&apos;re a launch-year organization, so we&apos;ll tell you
              plainly what your gift did and when it did it. No inflated
              numbers, no borrowed stories.
            </p>
          </div>

          <div className="thank-you-screen-section">
            <h2 className="thank-you-screen-subheading">If you need us</h2>
            <p>
              Questions about your gift, a recurring change, or a request to
              stay anonymous: email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
              and we&apos;ll answer within two business days.
            </p>
          </div>

          <nav className="thank-you-screen-links" aria-label="Next steps">
            <Link href="/programs">What we fund</Link>
            <Link href="/mission">Why we exist</Link>
            <Link href="/sustain">Make it monthly</Link>
          </nav>
        </div>
      </Section>
    </main>
  );
}
