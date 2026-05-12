import { getAllPostsMeta } from "@/lib/blog";
import { SITE } from "@/lib/seo";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPostsMeta();
  const updated = posts[0]?.date
    ? new Date(posts[0].date).toUTCString()
    : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = `${SITE.url}/blog/${post.slug}`;
      const pubDate = post.date
        ? new Date(post.date).toUTCString()
        : new Date().toUTCString();
      return [
        "  <item>",
        `    <title>${escapeXml(post.title)}</title>`,
        `    <link>${url}</link>`,
        `    <guid isPermaLink="true">${url}</guid>`,
        `    <description>${escapeXml(post.summary)}</description>`,
        `    <pubDate>${pubDate}</pubDate>`,
        "  </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)} — Field Notes</title>
    <link>${SITE.url}/blog</link>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(SITE.shortDescription)}</description>
    <language>en-us</language>
    <lastBuildDate>${updated}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
