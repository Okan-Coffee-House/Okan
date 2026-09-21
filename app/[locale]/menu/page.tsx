import type { Metadata } from "next";
import { HashLink } from "@/components/HashLink";
import { MenuSection } from "@/components/MenuSection";
import { OrderLink } from "@/components/OrderLink";
import { getOrderUrl } from "@/lib/foodics";
import { getDictionary, getLocale, withLocale } from "@/lib/locale";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = getLocale((await params).locale);
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.seo.menuTitle,
    description: dictionary.seo.menuDescription,
    alternates: {
      canonical: withLocale(locale, "/menu"),
      languages: {
        en: withLocale("en", "/menu"),
        ar: withLocale("ar", "/menu"),
      },
    },
  };
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = getLocale((await params).locale);
  const dictionary = getDictionary(locale);
  const orderUrl = getOrderUrl();

  return (
    <main id="content" className="pt-[var(--header-h)]">
      <MenuSection />
      <div className="mx-auto max-w-[1320px] px-[var(--pad-x)] pb-[var(--pad-y)]">
        <div className="flex flex-wrap gap-6">
          <OrderLink href={orderUrl} className="btn-ink">
            {dictionary.cta.order}
          </OrderLink>
          <HashLink href={withLocale(locale, "/#visit")} className="link-underline">
            {dictionary.cta.visit}
          </HashLink>
        </div>
      </div>
    </main>
  );
}
