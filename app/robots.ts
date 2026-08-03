import type { MetadataRoute } from "next";

import { SITE } from "@/lib/seo";

/**
 * Robots configuration with 2026 AI-crawler discrimination.
 *
 * Strategy: "block training, allow search."
 * - Training bots (build LLM corpora, no traffic back) → disallow
 * - Search bots (cite back to source, drive referral traffic) → allow
 * - robots.txt is honored by Anthropic, OpenAI search bots, Perplexity,
 *   and most major crawlers. Some bots (Bytespider) ignore — handle at
 *   CDN/WAF level when needed.
 *
 * Refs:
 *  - https://platform.openai.com/docs/bots
 *  - https://support.anthropic.com/en/articles/8896518
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";

  if (!isProduction) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      // ── Default: allow standard web crawlers ─────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/thank-you"],
      },

      // ── Training crawlers: disallow (no referral traffic back) ───────
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "Meta-ExternalAgent", disallow: "/" },
      { userAgent: "Amazonbot", disallow: "/" },
      { userAgent: "Applebot-Extended", disallow: "/" },
      { userAgent: "FacebookBot", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "Omgilibot", disallow: "/" },

      // ── Search-time AI bots: allow (cite us, send referral traffic) ──
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
