import type { Metadata } from "next";

import { ThankYouScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Thank you",
    description:
      "Your gift to Grassroots Foundation is received. Receipts are emailed automatically. EIN 35-2822183.",
    path: "/thank-you",
  }),
  // Post-donation confirmation. Nothing to rank, and it must never surface
  // as an ad landing page or a search result.
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouScreen />;
}
