import React from "react";
import { cn } from "@/lib/utils/cn";

import { LogoIcon } from "./logo-icon";
import { When } from "@/components/helpers/when/when";

import "./logo.css";

import type { LogoProps } from "./logo.types";

export function Logo({
  className,
  size = "base",
  variant = "default",
}: LogoProps) {
  return (
    <div className={cn("logo", className)} data-logo-size={size}>
      <When condition={variant === "icon"}>
        <LogoIcon />
      </When>
      <When condition={variant === "text"}>
        <LogoIcon />
      </When>
      <When condition={variant === "default"}>
        <LogoIcon />
      </When>
    </div>
  );
}
