import type { MetadataRoute } from "next";
import { LOCALES } from "@/constants/locales";
import { env } from "@/lib/env";
import { withLocale } from "@/lib/locale";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu"];

  return LOCALES.flatMap((locale) =>
    routes.map((route) => ({
      url: `${env.siteUrl}${withLocale(locale, route || "/")}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route ? 0.6 : 1,
    })),
  );
}
