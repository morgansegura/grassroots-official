import type { Metadata } from "next";

import { SustainScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Become a Sustainer · First Touch",
  description:
    "Give monthly and help a San Diego kid play club soccer all season. Monthly gifts cover cleats, kit, and a share of tuition for the Class of '26 and beyond.",
  path: "/sustain",
});

export default function SustainPage() {
  return <SustainScreen />;
}
