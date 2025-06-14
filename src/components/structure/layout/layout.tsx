import React from "react";
import { cn } from "@/lib/utils/cn";

import { Header } from "@/components/structure/header/header";
import { Footer } from "@/components/structure/footer/footer";

import "./layout.css";

import type { LayoutProps } from "./layout.types";

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn("layout", className)}>
      <Header />
      <main className="layout-main h-[2000px]">{children}</main>
      <Footer />
    </div>
  );
}
