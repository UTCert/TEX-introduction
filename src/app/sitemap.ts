import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  return [
    {
      url: "https://www.texblabs.com",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.texblabs.com/private",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
