import type { Metadata } from "next";

import { LandingScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Grassroots Foundation — Access, the Goal!",
  description:
    "Grassroots Foundation closes the cost wall pricing working-class kids out of competitive youth soccer in San Diego County. Need-based scholarships, kit & equipment grants, clinic seats — at established partner clubs.",
  path: "/",
});

export default function Home() {
  return <LandingScreen />;
}
