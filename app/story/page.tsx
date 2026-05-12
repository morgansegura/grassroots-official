import type { Metadata } from "next";

import { StoryScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Story",
  description:
    "How Grassroots Foundation started: years inside San Diego club soccer, watching families step away when the cost wall hit. A founder's account of why this exists.",
  path: "/story",
});

export default function StoryPage() {
  return <StoryScreen />;
}
