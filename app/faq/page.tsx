import type { Metadata } from "next";

import { FaqScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ · Honest answers",
  description:
    "How donations work, who we fund, how to verify us. Plain answers to the questions donors, families, and partner clubs ask about Grassroots Foundation.",
  path: "/faq",
});

export default function FaqPage() {
  return <FaqScreen />;
}
