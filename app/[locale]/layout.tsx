import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { HashScroll } from "@/components/HashLink";
import { Header } from "@/components/Header";
import { LocaleProvider } from "@/components/LocaleProvider";
import { LocaleTransition } from "@/components/Reveal";
import { SkipLink } from "@/components/SkipLink";
import { LOCALES } from "@/constants/locales";
import { OKAN } from "@/constants/okan";
import { env } from "@/lib/env";
import { getDictionary, getLocale, withLocale } from "@/lib/locale";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dictionary = getDictionary(locale);

  return {
    title: {
      default: dictionary.seo.title,
      template: "%s | OKAN",
    },
    description: dictionary.seo.description,
    keywords: [
      OKAN.shortName,
      OKAN.category,
      OKAN.city,
      OKAN.country,
      "specialty coffee",
      "V60",
      "pour-over",
    ],
    alternates: {
      canonical: withLocale(locale),
      languages: {
        en: withLocale("en"),
        ar: withLocale("ar"),
        "x-default": withLocale("en"),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_KW" : "en_US",
      url: `${env.siteUrl}${withLocale(locale)}`,
      siteName: OKAN.shortName,
      title: dictionary.seo.ogTitle,
      description: dictionary.seo.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.seo.ogTitle,
      description: dictionary.seo.ogDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = getLocale(raw);
  const dictionary = getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <HashScroll />
      <SkipLink />
      <Header />
      <LocaleTransition locale={locale}>{children}</LocaleTransition>
      <Footer />
    </LocaleProvider>
  );
}
