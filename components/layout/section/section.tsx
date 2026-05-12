import Link from "next/link";

import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";

import "./section.css";

export type SectionSize =
  | "compact"
  | "default"
  | "loose"
  | "flush"
  | "intro"
  | "hero";

export type SectionTone = "white" | "light" | "neutral" | "dark" | "gold";

export type SectionProps = {
  children?: React.ReactNode;
  className?: string;

  /** Vertical padding scale. Default: "default" (py-16 md:py-20). */
  size?: SectionSize;
  /**
   * Surface tone. Sets background + a set of CSS custom properties
   * (`--surface-bg`, `--surface-fg`, `--surface-muted-fg`,
   * `--surface-accent`) that features inside read from. Drop the same
   * feature into a `tone="dark"` Section vs. `tone="light"` and the
   * text colors adjust automatically.
   */
  tone?: SectionTone;
  /** Anchor id for in-page navigation. */
  id?: string;
  /** ARIA label for landmark navigation. */
  ariaLabel?: string;
  /**
   * Wrap children in the `.contain` max-width class. Default: true.
   * Set false when the feature inside manages its own width.
   */
  contain?: boolean;

  // ─── Section header (optional) ───
  /** Small uppercase label above the heading. */
  eyebrow?: string;
  /** Section heading. Renders an h2 via the Heading UI primitive. */
  heading?: string;
  /** One-paragraph supporting copy below the heading. */
  description?: string;
  /** Optional header-level CTA, rendered to the right of the heading on wide viewports. */
  cta?: { label: string; href: string };
};

export function Section({
  children,
  className,
  size = "default",
  tone,
  id,
  ariaLabel,
  contain = true,
  eyebrow,
  heading,
  description,
  cta,
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || heading || description || cta);

  const headerNode = hasHeader ? (
    <header className="section-heading">
      <div className="section-heading-text">
        <div>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          {heading ? <Heading>{heading}</Heading> : null}
        </div>
        {description ? (
          <p className="section-description">{description}</p>
        ) : null}
      </div>
      {cta ? (
        <Link href={cta.href} className="section-header-cta">
          {cta.label}
        </Link>
      ) : null}
    </header>
  ) : null;

  const inner = (
    <>
      {headerNode}
      {children}
    </>
  );

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      data-size={size}
      data-tone={tone}
      className={cn("section", className)}
    >
      {contain ? <div className="contain">{inner}</div> : inner}
    </section>
  );
}
