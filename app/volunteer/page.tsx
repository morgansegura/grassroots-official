import type { Metadata } from "next";

import { VolunteerScreen } from "@/components/screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Volunteer",
  description:
    "Volunteer roles at Grassroots Foundation: event support, family intake assistance, photo and story capture, San Diego club outreach.",
  path: "/volunteer",
});

export default function VolunteerPage() {
  return <VolunteerScreen />;
}
