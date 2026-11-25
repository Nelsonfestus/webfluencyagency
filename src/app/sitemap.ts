import { MetadataRoute } from "next";
import { SERVICES, SITE_METADATA } from "@/content/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_METADATA.url;
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...SERVICES.map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
