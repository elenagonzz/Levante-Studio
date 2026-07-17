import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Only real, resolvable pages are listed. Future routes
 * (/case-studies, /insights, /about) are added once they exist.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/growth-assessment", priority: 0.8 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
