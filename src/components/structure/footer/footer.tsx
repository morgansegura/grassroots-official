"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";

import { useDeviceType } from "@/hooks/use-device-type";

import { When } from "@/components/helpers/when/when";
import { FooterDesktop } from "./footer-desktop/footer-desktop";
import { FooterMobile } from "./footer-mobile/footer-mobile";

import "./footer.css";

import type { FooterProps } from "./footer.types";

export function Footer({ className }: FooterProps) {
  const device = useDeviceType();
  const mobile = device === "mobile";

  return (
    <footer className={cn("footer", className)}>
      <When condition={mobile}>
        <FooterMobile />
      </When>
      <When condition={!mobile}>
        <FooterDesktop />
      </When>
    </footer>
  );
}
