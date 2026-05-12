import type { Metadata } from "next";

import { ApplyScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Apply for a Scholarship",
  description:
    "Need-based scholarship intake for San Diego County families. Confidential income verification, no auditions, renewable each season. Covers tuition, kit, equipment, and clinic seats at partner clubs.",
  path: "/apply",
});

export default function ApplyPage() {
  return <ApplyScreen />;
}
