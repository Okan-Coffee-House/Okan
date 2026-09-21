import { DEFAULT_LOCALE, LOCALES } from "@/constants/locales";
import { ar } from "@/content/messages/ar";
import { en } from "@/content/messages/en";
import type { IDictionary, TDirection, TLocale } from "@/types";

const dictionaries: Record<TLocale, IDictionary> = { en, ar };

export function isLocale(value: string): value is TLocale {
  return LOCALES.includes(value as TLocale);
}

export function getLocale(value: string | undefined): TLocale {
  if (value && isLocale(value)) {
    return value;
  }
  return DEFAULT_LOCALE;
}

export function getDirection(locale: TLocale): TDirection {
  return locale === "ar" ? "rtl" : "ltr";
}

export function getDictionary(locale: TLocale): IDictionary {
  return dictionaries[locale];
}

export function withLocale(locale: TLocale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}

export function switchLocalePath(pathname: string, nextLocale: TLocale): string {
  const segments = pathname.split("/");
  if (segments.length > 1 && isLocale(segments[1])) {
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }
  return `/${nextLocale}${pathname}`;
}
