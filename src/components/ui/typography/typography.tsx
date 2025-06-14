import { cn } from "@/lib/utils/cn";

import "./typography.css";

import type { TypographyProps } from "./typography.types";

export function Typography({
  as = "div",
  align = "left",
  children,
  className,
  size,
  type,
  transform,
}: TypographyProps) {
  const Element = as;

  return (
    <Element
      className={cn("typography", className)}
      data-typography-align={align}
      data-typography-size={size}
      data-typography-type={type}
      data-typography-transform={transform}
    >
      {children}
    </Element>
  );
}
