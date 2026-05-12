import { cn } from "@/lib/utils";
import "./footer-nav.css";

type FooterNavProps = {
  children?: React.ReactNode;
  className?: string;
};

export function FooterNav({ children, className }: FooterNavProps) {
  return <div className={cn("footer-nav", className)}>{children}</div>;
}
