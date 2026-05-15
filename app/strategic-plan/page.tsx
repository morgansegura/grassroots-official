import type { Metadata } from "next";

import { StrategicPlanScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Strategic Plan · 2026–2031",
  description:
    "How Grassroots Foundation closes the cost wall in competitive youth soccer — the problem, the programs, the multi-year arc, the financial trajectory, and the partnerships behind it. San Diego County, Class of '26 anchor, five-year scaling roadmap.",
  path: "/strategic-plan",
});

export default function StrategicPlanPage() {
  return <StrategicPlanScreen />;
}
