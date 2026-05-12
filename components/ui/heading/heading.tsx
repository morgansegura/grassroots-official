import { cn } from "@/lib/utils";
import "./heading.css";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4";
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  variant?: "display" | "caption";
};

export function Heading({
  as = "h2",
  children,
  className,
  size = "xl",
  variant = "display",
}: HeadingProps) {
  const Component = as;
  return (
    <Component
      className={cn("heading", className)}
      data-variant={variant}
      data-size={size}
    >
      {children}
    </Component>
  );
}
