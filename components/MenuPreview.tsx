"use client";

import Link from "next/link";
import { OrderLink } from "@/components/OrderLink";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { useSite } from "@/components/LocaleProvider";
import { getOrderUrl } from "@/lib/foodics";
import { withLocale } from "@/lib/locale";
import type { IMenuPreviewProps } from "@/types";

export function MenuPreview({ menu }: IMenuPreviewProps) {
  const orderUrl = getOrderUrl();
  const { locale, dictionary } = useSite();

  return (
    <section className="bg-warm/70 px-[var(--pad-x)] py-[var(--pad-y)]">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <Reveal className="max-w-[32rem]">
            <SectionMeta number={dictionary.menu.number} label={dictionary.menu.label} />
            <h2 className="section-title">{dictionary.menu.headline}</h2>
            <p className="mt-5 max-w-[36ch] text-ink/70">{dictionary.menu.body}</p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-6">
            <Link href={withLocale(locale, "/menu")} className="btn-ghost group">
              {dictionary.cta.menu}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <OrderLink href={orderUrl} className="btn-ink group">
              {dictionary.cta.order}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </OrderLink>
          </Reveal>
        </div>

        <Stagger
          className="mt-16 grid gap-12 sm:grid-cols-2 xl:grid-cols-4"
          stagger={0.07}
        >
          {menu.categories.map((category) => (
            <StaggerItem key={category.id}>
              <h3 className="kicker border-b border-line pb-3">{category.name}</h3>
              <ul className="mt-5 space-y-3">
                {category.items.map((item) => (
                  <li key={item.name} className="text-[1.05rem] tracking-tight">
                    {item.name}
                    {item.note ? (
                      <span className="mt-0.5 block text-sm text-olive">
                        {item.note}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
