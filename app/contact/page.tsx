import type { Metadata } from "next";

import { ContactScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Reach the Grassroots Foundation team — for donor questions, partner-club inquiries, press, and family support. We respond within two business days.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactScreen />;
}
