import type { Metadata } from "next";

import { MissionScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Mission · Free the Game",
  description:
    "Soccer should be free for every kid. We close the $2,000–$11,000-per-season cost wall that prices working-class San Diego families out of competitive club soccer. Partner-club integration, need-based intake, no auditions.",
  path: "/mission",
});

export default function MissionPage() {
  return <MissionScreen />;
}
