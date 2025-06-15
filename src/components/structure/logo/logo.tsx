import React from "react";
import { cn } from "@/lib/utils/cn";

import { When } from "@/components/helpers/when/when";
import { LogoIcon } from "./logo-icon";
import { LogoAcronym } from "./logo-acronym";
import type { LogoProps } from "./logo.types";
import { LogoTextStack } from "./logo-text-stack";
import { LogoText } from "./logo-text";

import "./logo.css";

export function Logo({
  className,
  size = "base",
  variant = "text",
}: LogoProps) {
  return (
    <div className={cn("logo", className)} data-logo-size={size}>
      <When condition={variant === "icon"}>
        <LogoIcon />
      </When>
      <When condition={variant === "text"}>
        <LogoText />
      </When>
      <When condition={variant === "text-stack"}>
        <LogoTextStack />
      </When>
      <When condition={variant === "acronym"}>
        <LogoAcronym />
      </When>
    </div>
  );
}
