import { cn } from "@/lib/utils";

import "./eyebrow.css";

type EyebrowProps = {
  as?: "span" | "p" | "div";
  children?: React.ReactNode;
  className?: string;
  tone?: "quiet" | "gold" | "outline" | "dark";
};

export function Eyebrow({
  as: Component = "span",
  children,
  className,
  tone = "gold",
}: EyebrowProps) {
  return (
    <Component className={cn("eyebrow", className)} data-tone={tone}>
      {children}
    </Component>
  );
}
