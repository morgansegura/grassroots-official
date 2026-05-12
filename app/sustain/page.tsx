import type { Metadata } from "next";

import { SustainScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Become a Sustainer · First Touch",
  description:
    "$50 a month keeps a kid in the game. Monthly giving funds the Class of '26 roster year over year. Predictable, renewable support for San Diego County club tuition.",
  path: "/sustain",
});

export default function SustainPage() {
  return <SustainScreen />;
}
