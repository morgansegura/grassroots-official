import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import "./section-cta.css";

type SectionCtaProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionCta({ href, children, className }: SectionCtaProps) {
  return (
    <Link href={href} className={cn("section-cta", className)}>
      <span>{children}</span>
      <ArrowRight className="section-cta-arrow" aria-hidden="true" />
    </Link>
  );
}
