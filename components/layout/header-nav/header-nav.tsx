import { cn } from "@/lib/utils";
import Link from "next/link";
import "./header-nav.css";

type HeaderNavItem = {
  label: string;
  href: string;
};

type HeaderNavProps = {
  items?: HeaderNavItem[];
  children?: React.ReactNode;
  className?: string;
};

const defaultItems: HeaderNavItem[] = [
  { label: "Mission", href: "/mission" },
  { label: "Stories", href: "/stories" },
  { label: "Programs", href: "/programs" },
  { label: "Blog", href: "/blog" },
];

export function HeaderNav({
  items = defaultItems,
  children,
  className,
}: HeaderNavProps) {
  return (
    <nav className={cn("header-nav", className)} aria-label="Primary">
      {children ?? (
        <ul className="header-nav-list">
          {items.map(({ label, href }) => (
            <li key={href} className="header-nav-item">
              <Link href={href} className="header-nav-link">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
