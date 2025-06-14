"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";

import { useDeviceType } from "@/hooks/use-device-type";
import { When } from "@/components/helpers/when/when";
import HeaderMobile from "./header-mobile/header-mobile";
import { HeaderDesktop } from "./header-desktop/header-desktop";

import "./header.css";

import type { HeaderProps } from "./header.types";

export function Header({ className }: HeaderProps) {
  const device = useDeviceType();
  const mobile = device === "mobile";

  return (
    <header className={cn("header", className)}>
      <When condition={mobile}>
        <HeaderMobile />
      </When>
      <When condition={!mobile}>
        <HeaderDesktop />
      </When>
    </header>
  );
}
