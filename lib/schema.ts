import { OKAN } from "@/constants/okan";
import { env, hasValue } from "@/lib/env";
import type { ICafeJsonLd, IDictionary } from "@/types";

export function cafeJsonLd(dictionary: IDictionary): ICafeJsonLd {
  const data: ICafeJsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: OKAN.shortName,
    alternateName: OKAN.name,
    description: dictionary.seo.description,
    url: env.siteUrl,
    image: `${env.siteUrl}/images/okan-hero.jpg`,
    logo: `${env.siteUrl}${OKAN.logoColorSrc}`,
    servesCuisine: "Coffee",
    currenciesAccepted: OKAN.currency,
    hasMap: env.googleMapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: OKAN.address,
      addressLocality: OKAN.city,
      addressRegion: OKAN.governorate,
      addressCountry: OKAN.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: OKAN.latitude,
      longitude: OKAN.longitude,
    },
    openingHoursSpecification: OKAN.openingHoursIso.days.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: OKAN.openingHoursIso.opens,
      closes: OKAN.openingHoursIso.closes,
    })),
  };

  if (hasValue(env.phone)) {
    data.telephone = env.phone;
  }

  if (hasValue(env.email)) {
    data.email = env.email;
  }

  const sameAs = [env.instagramUrl, env.tiktokUrl, env.googleBusinessUrl].filter(
    hasValue,
  );
  if (sameAs.length > 0) {
    data.sameAs = sameAs;
  }

  return data;
}
