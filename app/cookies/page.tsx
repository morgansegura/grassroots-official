import type { Metadata } from "next";

import { CookiesScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "Cookies used on the Grassroots Foundation website, the categories you can control, and how to update your consent at any time.",
  path: "/cookies",
});

export default function CookiesPage() {
  return <CookiesScreen />;
}
