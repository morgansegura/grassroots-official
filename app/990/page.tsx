import type { Metadata } from "next";

import { FinancialsScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Form 990 & Financials",
  description:
    "Annual Form 990 filings, financial statements, and governance disclosures for Grassroots Foundation. EIN 35-2822183. Full transparency, year over year.",
  path: "/990",
});

export default function FinancialsPage() {
  return <FinancialsScreen />;
}
