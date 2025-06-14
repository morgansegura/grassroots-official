"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";

import { Container } from "@/components/structure/container/container";
import { Navbar } from "@/components/structure/navbar/navbar";
import { Logo } from "@/components/structure/logo/logo";

import "./header-desktop.css";

import type { HeaderDesktopProps } from "./header-desktop.types";
import { HEADER_MOCK_DATA } from "@/data/mocks/header";

export function HeaderDesktop({ className, variant }: HeaderDesktopProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    if (variant === "scroll") {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Run once on mount
    }

    return () => {
      if (variant === "scroll") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [variant]);

  const { navbarMain, navbarAdmin } = HEADER_MOCK_DATA;

  return (
    <header
      className={cn("header-desktop", className)}
      data-header-scrolled={scrolled}
      data-header-variant={variant}
    >
      <Container variant="wide" className="header-container">
        <Navbar
          className="header-navigation header-admin-navigation"
          navItems={navbarAdmin}
        />
      </Container>
      <Container variant="wide" className="header-container">
        <Logo className="header-logo" size="sm" />

        <Navbar
          className="header-navigation header-main-navigation"
          navItems={navbarMain}
        />
      </Container>
    </header>
  );
}
