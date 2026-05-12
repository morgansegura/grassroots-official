import type { Metadata } from "next";

import { DonorPrivacyScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Donor Privacy",
  description:
    "Grassroots Foundation's donor privacy commitments: no list sharing, no list rental, opt-in only for recognition, anonymous giving honored on request.",
  path: "/donor-privacy",
});

export default function DonorPrivacyPage() {
  return <DonorPrivacyScreen />;
}
