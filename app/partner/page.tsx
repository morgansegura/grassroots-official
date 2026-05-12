import type { Metadata } from "next";

import { PartnerScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Become a Partner Club",
  description:
    "For San Diego County club programs: integrate Grassroots scholarships into your existing intake. We pay tuition, kit, and equipment costs directly so a need-qualified kid stays on your roster.",
  path: "/partner",
});

export default function PartnerPage() {
  return <PartnerScreen />;
}
