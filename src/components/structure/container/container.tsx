import React from "react";

import { cn } from "@/lib/utils/cn";

import "./container.css";

import type { ContainerProps } from "./container.types";

export function Container({
  children,
  className,
  variant = "full",
}: ContainerProps) {
  return (
    <div className={cn("contain", className)} data-container-variant={variant}>
      {children}
    </div>
  );
}
