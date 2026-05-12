import type { Metadata } from "next";

import { TermsScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "Terms governing your use of the Grassroots Foundation website and any services we provide through it.",
  path: "/terms",
});

export default function TermsPage() {
  return <TermsScreen />;
}
