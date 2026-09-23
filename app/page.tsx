import type { Metadata } from "next";

import { LandingScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Grassroots Foundation — Access, the Goal!",
  description:
    "Grassroots Foundation helps San Diego County kids play club soccer with need-based scholarships, kit and equipment grants, and clinic seats at partner clubs.",
  path: "/",
});

export default function Home() {
  return <LandingScreen />;
}
