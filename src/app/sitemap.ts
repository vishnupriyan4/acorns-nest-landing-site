import type { MetadataRoute } from "next";

import { PP_ANNOUNCEMENT_LIVE, PP_PATH, PP_PUBLISHED_ISO } from "@/lib/news/point-pleasant";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://acornsnest.com";

// Public marketing pages only. /accept-invite stays off (functional page,
// email in the query string).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/nova-scotia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/book`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/home-daycare`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/support`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Go-live only: stays out until PP_ANNOUNCEMENT_LIVE is true.
    ...(PP_ANNOUNCEMENT_LIVE
      ? [
          {
            url: `${siteUrl}${PP_PATH}`,
            lastModified: new Date(PP_PUBLISHED_ISO),
            changeFrequency: "monthly" as const,
            priority: 0.7,
          },
        ]
      : []),
    {
      url: `${siteUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
