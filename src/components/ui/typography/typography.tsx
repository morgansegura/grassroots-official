import { cn } from "@/lib/utils/cn";

import "./typography.css";

import type { TypographyProps } from "./typography.types";

export function Typography({
  as = "div",
  align,
  children,
  className,
  size = "base",
  variant = "body",
  transform,
}: TypographyProps) {
  const Element = as;

  const baseProps = {
    "data-typography-align": align,
    "data-typography-size": size,
    "data-typography-variant": variant,
    "data-typography-transform": transform,
  };

  return (
    <Element className={cn("typography", className)} {...baseProps}>
      {children}
    </Element>
  );
}
