import type { Metadata } from "next";
import Link from "next/link";
import { OrderLink } from "@/components/OrderLink";
import { getMenu, getOrderUrl } from "@/lib/foodics";
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
  const menu = await getMenu(locale);
  const orderUrl = getOrderUrl();

  return (
    <main id="content" className="px-[var(--pad-x)] pt-32 pb-[var(--pad-y)]">
      <div className="mx-auto max-w-[1100px]">
        <p className="kicker">{dictionary.menu.label}</p>
        <h1 className="display mt-5 max-w-[12ch] rtl:max-w-[16ch]">
          {dictionary.menu.headline}
        </h1>
        <p className="mt-6 max-w-[36ch] text-ink/70">{dictionary.menu.body}</p>

        <div className="mt-16 grid gap-16 sm:grid-cols-2">
          {menu.categories.map((category) => (
            <section key={category.id}>
              <h2 className="kicker border-b border-line pb-3">{category.name}</h2>
              <ul className="mt-6 space-y-4">
                {category.items.map((item) => (
                  <li key={item.name} className="text-[1.2rem] tracking-tight">
                    {item.name}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-6">
          <OrderLink href={orderUrl} className="btn-ink group">
            {dictionary.cta.order}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </OrderLink>
          <Link
            href={withLocale(locale, "/#visit")}
            className="link-underline text-[0.75rem] tracking-[0.16em] uppercase"
          >
            {dictionary.cta.visit}
          </Link>
        </div>
      </div>
    </main>
  );
}
