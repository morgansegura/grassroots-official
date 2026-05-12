import { cn } from "@/lib/utils";

import "./section-header.css";

type SectionHeaderProps = {
  eyebrow?: string;
  heading: string;
  lead?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  frame?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
  lead,
  align = "left",
  size = "md",
  frame = false,
  className,
}: SectionHeaderProps) {
  return (
    <header
      data-align={align}
      data-size={size}
      data-frame={frame ? "true" : "false"}
      className={cn("section-header", className)}
    >
      {eyebrow ? (
        <p className="section-header-eyebrow">
          <span className="section-header-eyebrow-text">{eyebrow}</span>
        </p>
      ) : null}

      <h2 className="section-header-heading">{heading}</h2>

      {lead ? <p className="section-header-lead">{lead}</p> : null}
    </header>
  );
}
