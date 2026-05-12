import { cn } from "@/lib/utils";
import { Eyebrow, Heading } from "@/components/ui";

import "./callout.css";

export type CalloutProps = {
  children?: React.ReactNode;
  className?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "dark" | "primary" | "light";
};

export function Callout({
  children,
  className,
  description,
  eyebrow,
  title,
  variant = "primary",
}: CalloutProps) {
  return (
    <section className={cn("callout", className)} data-variant={variant}>
      {title ? (
        <div className="callout-title-block">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading size="2xl">{title}</Heading>
          </div>

          <p className="callout-description">{description}</p>
        </div>
      ) : null}
      {children}
    </section>
  );
}
