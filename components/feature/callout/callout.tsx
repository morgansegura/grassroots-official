import { cn } from "@/lib/utils";
import { Eyebrow, Heading } from "@/components/ui";

import "./callout.css";

export type CalloutProps = {
  children?: React.ReactNode;
  className?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

export function Callout({
  children,
  className,
  description,
  eyebrow,
  title,
}: CalloutProps) {
  return (
    <div className={cn("callout", className)}>
      {title ? (
        <div className="callout-title-block contain">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading size="2xl">{title}</Heading>
          </div>

          <p className="callout-description">{description}</p>
        </div>
      ) : null}
      {children}
    </div>
  );
}
