import Link from "next/link";

import { cn } from "@/lib/utils";
import { Callout, CtaBanner } from "@/components/feature";
import { Section } from "@/components/layout";
import type { PostMeta } from "@/lib/blog";

import "./blog-screen.css";

type BlogScreenProps = {
  posts: PostMeta[];
  className?: string;
};

const HERO = {
  eyebrow: "Field notes",
  title: (
    <>
      What we&apos;re learning
      <br /> from inside the system.
    </>
  ),
  description:
    "Long-form notes on the cost of competitive youth soccer in San Diego — the math, the geography, the developmental window, and what the rest of the world does differently. Quiet, factual, and source-driven.",
};

export function BlogScreen({ posts, className }: BlogScreenProps) {
  return (
    <main className={cn("blog-screen", className)}>
      <Section tone="white">
        <Callout {...HERO} />
      </Section>

      {posts.length > 0 ? (
        <Section ariaLabel="All field notes" tone="light">
          <ul className="blog-screen-list contain" role="list">
            {posts.map((post) => (
              <li key={post.slug} className="blog-screen-item">
                <Link
                  href={`/blog/${post.slug}`}
                  className="blog-screen-item-link"
                >
                  {post.category ? (
                    <p className="blog-screen-item-category">{post.category}</p>
                  ) : null}
                  <h2 className="blog-screen-item-title">{post.title}</h2>
                  <p className="blog-screen-item-summary">{post.summary}</p>
                  <p className="blog-screen-item-meta">
                    {post.readingTimeMinutes} min read
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section tone="white">
        <CtaBanner
          eyebrow="Get involved"
          heading="Read the math, then put a kid on the roster."
          body="Every field note traces back to the same point: working-class kids in San Diego County are being priced out of the game. Founding donors are funding the first names on the Class of '26 roster."
          cta={{ label: "Become a founding donor", href: "/donate" }}
          tiers={[]}
        />
      </Section>
    </main>
  );
}
