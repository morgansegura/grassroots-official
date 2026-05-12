import type { Metadata } from "next";

import { SponsorScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sponsor a Team or Clinic",
  description:
    "Major-gift sponsorship for an entire team's season ($25K–$150K+) or a methodology training clinic day. One definable philanthropic moment, every kid plays.",
  path: "/sponsor",
});

export default function SponsorPage() {
  return <SponsorScreen />;
}
