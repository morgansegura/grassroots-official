import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PostScreen } from "@/components/screen";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`,
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return <PostScreen post={post} />;
}
