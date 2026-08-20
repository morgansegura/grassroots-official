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
  /**
   * Rendered after the prose block but outside `.legal-screen-content`, whose
   * descendant selectors (p, ul, a, strong) would otherwise win on specificity
   * over a component's own classes. Use this for interactive content — forms,
   * widgets — rather than nesting it in the prose.
   */
  after?: React.ReactNode;
};

export function LegalScreen({
  className,
  eyebrow,
  title,
  lastUpdated,
  intro,
  children,
  after,
}: LegalScreenProps) {
  return (
    <main className={cn("legal-screen", className)}>
      <Section tone="gold" size="hero" ariaLabel={title}>
        <header className="legal-screen-header">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading className="legal-screen-title">{title}</Heading>
          </div>
          <p className="legal-screen-meta">Last updated · {lastUpdated}</p>
          {intro ? <div className="legal-screen-intro">{intro}</div> : null}
        </header>
      </Section>

      <Section tone="white">
        <div className="legal-screen-content">{children}</div>

        {after ? <div className="legal-screen-after">{after}</div> : null}

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
