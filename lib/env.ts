import { OKAN } from "@/constants/okan";

export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  foodicsOrderUrl: process.env.NEXT_PUBLIC_FOODICS_ORDER_URL || "",
  googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || OKAN.mapsUrl,
  googleMapsEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || OKAN.mapsEmbedUrl,
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || OKAN.instagramUrl,
  tiktokUrl: process.env.NEXT_PUBLIC_TIKTOK_URL || OKAN.tiktokUrl,
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || OKAN.whatsappUrl,
  phone: process.env.NEXT_PUBLIC_PHONE || OKAN.phone,
  email: process.env.NEXT_PUBLIC_EMAIL || OKAN.email,
  journalUrl: process.env.NEXT_PUBLIC_JOURNAL_URL || OKAN.journalUrl,
  googleBusinessUrl: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || "",
} as const;

export function hasValue(value: string): boolean {
  return value.trim().length > 0;
}
