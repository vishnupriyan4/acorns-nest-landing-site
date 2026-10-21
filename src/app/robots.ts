import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://acornsnest.com";

/**
 * Robots policy.
 *
 * - Allow all general web crawlers.
 * - Explicitly allow major AI assistant crawlers so Acorns Nest can appear
 *   as a cited source in ChatGPT, Perplexity, Google AI Overviews, Gemini
 *   and Claude. (This is "GEO" — generative engine optimisation.) Remove any
 *   of these groups to opt out of a specific assistant.
 * - Disallow the invite acceptance flow — it is a functional page, not a
 *   landing page, and Google treats soft-login pages as low quality.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/accept-invite"],
      },
      // AI assistants — allow citation + answer-engine retrieval.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
