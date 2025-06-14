import React from "react";
import { cn } from "@/lib/utils/cn";

import "./footer-desktop.css";

import type { FooterDesktopProps } from "./footer-desktop.types";

export function FooterDesktop({ className }: FooterDesktopProps) {
  return (
    <footer className={cn("footer-desktop", className)}>Footer Desktop</footer>
  );
}
