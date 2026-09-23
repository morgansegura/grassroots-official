import type { Metadata } from "next";

import { DonateScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Become a Founding Donor",
  description:
    "Every gift names the first kids on the Class of '26 roster. Cleats run $60 to $300, a season's kit $300 to $600, and a season's tuition $2,500 to $4,500. 100% tax-deductible (EIN 35-2822183).",
  path: "/donate",
});

export default function DonatePage() {
  return <DonateScreen />;
}
