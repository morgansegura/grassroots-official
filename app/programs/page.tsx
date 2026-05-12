import type { Metadata } from "next";

import { ProgramsScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Programs · Five lines, one outcome",
  description:
    "Five programs: Player Scholarships, Team Sponsorship, Kit & Uniform Grants, Equipment Grants, and Methodology Clinic Access. Each closes one specific cost line that benches a kid in San Diego County club soccer.",
  path: "/programs",
});

export default function ProgramsPage() {
  return <ProgramsScreen />;
}
