import type { Metadata } from "next";

import { PressScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Press",
  description:
    "Press resources for Grassroots Foundation — founding story, mission, programs, and pre-launch context. Media inquiries: hello@grassrootsfdn.org.",
  path: "/press",
});

export default function PressPage() {
  return <PressScreen />;
}
