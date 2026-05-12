"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { DonateDialog } from "@/components/feature";
import { HeaderNav, Logo, MobileNav } from "@/components/layout";
import { useHeaderVisibility } from "@/lib/hooks/use-header-visibility";

import "./header.css";

type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Header({ className }: HeaderProps) {
  const visible = useHeaderVisibility();

  return (
    <header
      data-visible={visible ? "true" : "false"}
      className={cn("header", className)}
    >
      <div className="header-container contain">
        <Link
          href="/"
          className="header-logo"
          aria-label="Grassroots Foundation home"
        >
          <Logo />
        </Link>

        <div className="header-actions">
          <HeaderNav />
          <DonateDialog>
            <button
              type="button"
              className="button button-donate button-size-sm"
            >
              Give Now
            </button>
          </DonateDialog>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
