import { env, hasValue } from "@/lib/env";
import { withLocale } from "@/lib/locale";
import type { IDictionary, INavItem, TLocale } from "@/types";

export function getNav(locale: TLocale, dictionary: IDictionary): INavItem[] {
  return [
    { href: withLocale(locale, "/#story"), label: dictionary.nav.story },
    { href: withLocale(locale, "/#coffee"), label: dictionary.nav.coffee },
    { href: withLocale(locale, "/#space"), label: dictionary.nav.space },
    { href: withLocale(locale, "/#visit"), label: dictionary.nav.visit },
  ];
}

export const links = {
  order: env.foodicsOrderUrl,
  maps: env.googleMapsUrl,
  mapsEmbed: env.googleMapsEmbedUrl,
  instagram: env.instagramUrl,
  tiktok: env.tiktokUrl,
  whatsapp: env.whatsappUrl,
  phone: env.phone,
  email: env.email,
  journal: env.journalUrl,
  googleBusiness: env.googleBusinessUrl,
};

export const availableLinks = {
  order: hasValue(links.order),
  maps: hasValue(links.maps),
  mapsEmbed: hasValue(links.mapsEmbed),
  instagram: hasValue(links.instagram),
  tiktok: hasValue(links.tiktok),
  whatsapp: hasValue(links.whatsapp),
  phone: hasValue(links.phone),
  email: hasValue(links.email),
  journal: hasValue(links.journal),
  googleBusiness: hasValue(links.googleBusiness),
};
