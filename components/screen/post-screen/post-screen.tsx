import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";
import { CtaBanner } from "@/components/feature";
import { Section } from "@/components/layout";
import { ArticleSchema, FaqSchema } from "@/components/seo";
import type { Post } from "@/lib/blog";

import "./post-screen.css";

type PostScreenProps = {
  post: Post;
  className?: string;
};

export function PostScreen({ post, className }: PostScreenProps) {
  return (
    <main className={cn("post-screen", className)}>
      <ArticleSchema
        title={post.title}
        description={post.summary}
        slug={post.slug}
        datePublished={post.date}
      />

      <Section ariaLabel="Article header" tone="white">
        <header className="post-screen-header">
          {post.category ? (
            <p className="post-screen-category">{post.category}</p>
          ) : null}
          <h1 className="post-screen-title">{post.title}</h1>
          <p className="post-screen-summary">{post.summary}</p>
          <p className="post-screen-meta">
            <Link href="/blog" className="post-screen-back">
              ← Back to All Posts
            </Link>
            &nbsp;
            {post.readingTimeMinutes} min read · Grassroots Foundation
          </p>
        </header>
      </Section>

      <Section ariaLabel="Article body" tone="light">
        <article className="post-screen-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>
      </Section>

      {post.faq && post.faq.length > 0 ? (
        <>
          <FaqSchema items={post.faq} />
          <Section ariaLabel="Frequently asked questions" tone="white">
            <div className="post-screen-faq">
              <p className="post-screen-faq-eyebrow">Common questions</p>
              <h2 className="post-screen-faq-heading">
                Questions readers ask about this piece.
              </h2>
              <dl className="post-screen-faq-list">
                {post.faq.map((item) => (
                  <div key={item.question} className="post-screen-faq-item">
                    <dt className="post-screen-faq-question">
                      {item.question}
                    </dt>
                    <dd className="post-screen-faq-answer">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Section>
        </>
      ) : null}

      <Section tone="gold">
        <CtaBanner
          tone="light"
          eyebrow="Get involved"
          heading="Put a name on the roster."
          body="The numbers in this piece sit on real San Diego kids. Founding donors are funding the first 25 scholarships on the Class of '26 roster — every gift names a kid."
          cta={{ label: "Become a founding donor", href: "/donate" }}
          tiers={[]}
        />
      </Section>
    </main>
  );
}
