import type { Metadata } from "next";

import { SafeguardingScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Youth Safeguarding",
  description:
    "Grassroots Foundation's youth safeguarding policy: background checks, consent-based story capture, family editorial control, and right-to-remove for every minor in our programs.",
  path: "/safeguarding",
});

export default function SafeguardingPage() {
  return <SafeguardingScreen />;
}
