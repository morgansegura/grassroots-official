import type { MetadataRoute } from "next";

import { SITE } from "@/lib/seo";
import { getAllPostsMeta } from "@/lib/blog";

const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/mission", changeFrequency: "monthly", priority: 0.9 },
  { path: "/programs", changeFrequency: "monthly", priority: 0.9 },
  { path: "/stories", changeFrequency: "weekly", priority: 0.8 },
  { path: "/donate", changeFrequency: "monthly", priority: 0.9 },
  { path: "/sustain", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sponsor", changeFrequency: "monthly", priority: 0.7 },
  { path: "/partner", changeFrequency: "monthly", priority: 0.6 },
  { path: "/apply", changeFrequency: "monthly", priority: 0.7 },
  { path: "/volunteer", changeFrequency: "monthly", priority: 0.5 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/press", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  { path: "/990", changeFrequency: "yearly", priority: 0.5 },
  { path: "/safeguarding", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/donor-privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = getAllPostsMeta().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogIndex, ...blogPosts];
}
