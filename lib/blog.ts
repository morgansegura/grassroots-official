import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { SITE } from "@/lib/seo";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export type FaqItem = {
  question: string;
  answer: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags?: string[];
  category?: string;
  readingTimeMinutes: number;
  faq?: FaqItem[];
};

export type Post = PostMeta & {
  content: string;
};

function readPost(filename: string): Post {
  const slug = filename.replace(/\.mdx?$/, "");
  const fullPath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const wordCount = content.split(/\s+/g).filter(Boolean).length;
  const readingTimeMinutes = Math.max(1, Math.round(wordCount / 220));

  return {
    slug: (data.slug as string) ?? slug,
    title: data.title as string,
    summary: data.summary as string,
    date: (data.date as string) ?? "",
    tags: (data.tags as string[]) ?? [],
    category: data.category as string | undefined,
    faq: (data.faq as FaqItem[] | undefined) ?? undefined,
    readingTimeMinutes,
    content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith("_"));

  return files
    .map((f) => readPost(f))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostsMeta(): PostMeta[] {
  return getAllPosts().map(({ content: _content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function postUrl(slug: string): string {
  return `${SITE.url}/blog/${slug}`;
}
