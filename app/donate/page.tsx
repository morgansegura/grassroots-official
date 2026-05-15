import type { Metadata } from "next";

import { DonateScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Become a Founding Donor",
  description:
    "Every gift names the first kids on the Class of '26 roster. $60 covers a pair of cleats; $200 a full kit; $2,500 a full season for one kid. 100% tax-deductible (EIN 35-2822183).",
  path: "/donate",
});

export default function DonatePage() {
  return <DonateScreen />;
}
