import type { Metadata } from "next";

import { MissionScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Mission · Free the Game",
  description:
    "Soccer should be free for every kid. We help San Diego families with the cost of club soccer through need-based scholarships at partner clubs, with no auditions.",
  path: "/mission",
});

export default function MissionPage() {
  return <MissionScreen />;
}
