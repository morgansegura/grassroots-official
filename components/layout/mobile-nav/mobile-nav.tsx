"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { DonateDialog } from "@/components/feature";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui";

import "./mobile-nav.css";

type MobileNavItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  className?: string;
  items?: MobileNavItem[];
};

const defaultItems: MobileNavItem[] = [
  { label: "Mission", href: "/mission" },
  { label: "Stories", href: "/stories" },
  { label: "Programs", href: "/programs" },
];

export function MobileNav({ className, items = defaultItems }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn("mobile-nav-root", className)}>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger
          className="mobile-nav-trigger"
          aria-label="Open navigation menu"
        >
          <MenuIcon className="mobile-nav-trigger-icon" />
        </DrawerTrigger>

        <DrawerContent side="right" title="Site navigation">
          <div className="mobile-nav-header">
            <DrawerClose
              className="mobile-nav-close"
              aria-label="Close navigation menu"
            >
              <CloseIcon className="mobile-nav-close-icon" />
            </DrawerClose>
          </div>

          <nav className="mobile-nav-list" aria-label="Mobile primary">
            {items.map(({ label, href }) => (
              <DrawerClose
                key={href}
                nativeButton={false}
                render={
                  <Link href={href} className="mobile-nav-link">
                    {label}
                  </Link>
                }
              />
            ))}
          </nav>

          <div className="mobile-nav-footer">
            <DonateDialog>
              <button
                type="button"
                className="button button-donate mobile-nav-cta"
              >
                Give Now
              </button>
            </DonateDialog>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
