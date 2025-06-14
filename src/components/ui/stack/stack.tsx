import { cn } from "@/lib/utils/cn";

import "./stack.css";

import type { StackProps } from "./stack.types";

export function Stack({
  align = "center",
  children,
  className,
  cols,
  gap = "none",
  direction = "row",
  justify = "start",
  type = "flex",
}: StackProps) {
  return (
    <div
      className={cn("stack", className)}
      data-stack-align={align}
      data-stack-cols={cols}
      data-stack-direction={direction}
      data-stack-gap={gap}
      data-stack-justify={justify}
      data-stack-type={type}
    >
      {children}
    </div>
  );
}
