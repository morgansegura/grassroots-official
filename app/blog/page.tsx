import type { Metadata } from "next";

import { BlogScreen } from "@/components/screen";
import { getAllPostsMeta } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Field Notes · Blog",
  description:
    "Long-form notes on the cost of competitive youth soccer in San Diego County — the math, the geography, the developmental drop-off window, and what the rest of the world funds differently.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPostsMeta();
  return <BlogScreen posts={posts} />;
}
