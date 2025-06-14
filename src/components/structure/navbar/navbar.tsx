import React from "react";

import { cn } from "@/lib/utils/cn";

import { Button } from "@/components/ui/button/button";

import "./navbar.css";

import type { NavbarProps } from "./navbar.types";

export function Navbar({ navItems, className }: NavbarProps) {
  return (
    <nav className={cn("header-nav", className)}>
      {navItems?.map((item, index: number) => (
        <Button key={index} {...item}>
          {item?.children}
        </Button>
      ))}
    </nav>
  );
}
