"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { HeaderNav, Logo, MobileNav } from "@/components/layout";
import { useHeaderVisibility } from "@/lib/hooks/use-header-visibility";

import "./header.css";

type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Header({ className }: HeaderProps) {
  const visible = useHeaderVisibility();
  // The donation page drops the nav so nothing competes with the form.
  const focused = usePathname() === "/donate";

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

        {focused ? null : (
          <div className="header-actions">
            <HeaderNav />
            <Link
              href="/donate"
              className="button button-donate button-size-sm header-give"
            >
              <span>Give Monthly</span>
              <span className="header-give-reason">
                Join us in helping a kid play all year
              </span>
            </Link>
            <MobileNav />
          </div>
        )}
      </div>
    </header>
  );
}
