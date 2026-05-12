import type { Metadata } from "next";

import { PrivacyScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Grassroots Foundation collects, uses, and protects personal information from donors, families, partner clubs, and website visitors.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <PrivacyScreen />;
}
