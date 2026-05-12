import Link from "next/link";

import { cn } from "@/lib/utils";
import { Eyebrow, Heading } from "@/components/ui";
import { Section } from "@/components/layout";

import "./legal-screen.css";

type LegalScreenProps = {
  className?: string;
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
};

export function LegalScreen({
  className,
  eyebrow,
  title,
  lastUpdated,
  intro,
  children,
}: LegalScreenProps) {
  return (
    <main className={cn("legal-screen", className)}>
      <Section size="hero" ariaLabel={title} className="border-b">
        <header className="legal-screen-header">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading className="legal-screen-title">{title}</Heading>
          <p className="legal-screen-meta">Last updated · {lastUpdated}</p>
          {intro ? <div className="legal-screen-intro">{intro}</div> : null}
        </header>
      </Section>

      <Section size="default">
        <div className="legal-screen-content">{children}</div>

        <footer className="legal-screen-footer">
          <p className="legal-screen-footer-org">
            Grassroots Foundation is the registered DBA of Grass Roots
            Foundation, a 501(c)(3) public charity. EIN 35-2822183.
          </p>
          <p className="legal-screen-footer-contact">
            Questions about this policy?{" "}
            <Link href="/contact" className="legal-screen-footer-link">
              Contact us
            </Link>
            .
          </p>
        </footer>
      </Section>
    </main>
  );
}
