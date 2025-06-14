import React from "react";
import { cn } from "@/lib/utils/cn";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button/button";
import { Container } from "@/components/structure/container/container";

import "./header-mobile.css";

import type { HeaderMobileProps } from "./header-mobile.types";

export default function HeaderMobile({ className }: HeaderMobileProps) {
  return (
    <header className={cn("header-mobile", className)}>
      <Container variant="wide" className="header-mobile-container">
        <div className="logo-block">Logo</div>
        <div className="menu-selector">
          <Button unstyled={true} variant="link" iconLeft={<MenuIcon />} />
        </div>
      </Container>
    </header>
  );
}
