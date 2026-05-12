import type { Metadata } from "next";

import { StoriesScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Stories from the Field",
  description:
    "Field notes from inside San Diego club soccer — costs, drop-off, geography, World Cup '26. Recipient stories arrive only with family consent, once the first scholarships are on the roster.",
  path: "/stories",
});

export default function StoriesPage() {
  return <StoriesScreen />;
}
