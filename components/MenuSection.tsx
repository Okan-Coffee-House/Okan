"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Reveal,
  RevealText,
  Stagger,
  StaggerItem,
  easePremium,
  revealViewport,
} from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { useSite } from "@/components/LocaleProvider";
import { getMenuItemsByCategory, getVisibleMenuCategories } from "@/lib/menu";
import type { IMenuItem, TLocale, TMenuCategory } from "@/types";

export function MenuSection() {
  const { locale, dictionary } = useSite();
  const categories = getVisibleMenuCategories();
  const copy = dictionary.menu;

  return (
    <section
      id="menu"
      className="scroll-mt-[var(--header-h)] bg-warm/60 px-[var(--pad-x)] py-[var(--pad-y)]"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="max-w-[38rem]">
          <Reveal y={12} duration={0.55}>
            <SectionMeta number={copy.number} label={copy.label} />
          </Reveal>
          <RevealText as="h2" className="section-title menu-title" delay={0.06} duration={0.75}>
            {copy.headline}
          </RevealText>
          <Reveal delay={0.14} y={16} duration={0.58}>
            <p className="mt-6 max-w-[42ch] text-ink/70">{copy.body}</p>
          </Reveal>
        </div>

        {categories.length > 0 ? (
          <Stagger className="menu-desk mt-12" stagger={0.045} delay={0.08}>
            {categories.map((category, index) => (
              <StaggerItem key={category} y={12} duration={0.5} className="menu-category">
                <CategoryBlock
                  category={category}
                  index={index}
                  locale={locale}
                  title={copy.navCategories[category]}
                />
              </StaggerItem>
            ))}
          </Stagger>
        ) : null}
      </div>
    </section>
  );
}

function CategoryBlock({
  category,
  index,
  locale,
  title,
}: {
  category: TMenuCategory;
  index: number;
  locale: TLocale;
  title: string;
}) {
  const items = getMenuItemsByCategory(category);
  const reduce = useReducedMotion();

  return (
    <article id={`menu-${category}`} className="scroll-mt-[var(--header-h)]">
      <p className="menu-index">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="menu-heading">{title}</h3>
      <ul>
        {items.map((item, itemIndex) => (
          <MenuRow
            key={item.id}
            item={item}
            locale={locale}
            delay={itemIndex * 0.04}
            reduce={Boolean(reduce)}
          />
        ))}
      </ul>
    </article>
  );
}

function MenuRow({
  item,
  locale,
  delay,
  reduce,
}: {
  item: IMenuItem;
  locale: TLocale;
  delay: number;
  reduce: boolean;
}) {
  const name = locale === "ar" ? item.nameAr ?? item.nameEn : item.nameEn;
  const description =
    locale === "ar" ? item.descriptionAr ?? item.descriptionEn : item.descriptionEn;
  const price =
    item.price !== undefined ? `${item.currency ?? "KWD"} ${item.price}` : null;

  return (
    <motion.li
      className="menu-row"
      initial={reduce ? false : { opacity: 0, y: 8 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: reduce ? 0.16 : 0.45, delay: reduce ? 0 : delay, ease: easePremium }}
    >
      <motion.span
        className="menu-row-rule"
        aria-hidden="true"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={revealViewport}
        transition={{ duration: reduce ? 0.16 : 0.45, ease: easePremium }}
      />
      <div className="flex items-baseline justify-between gap-6">
        <h4 className="menu-row-name">{name}</h4>
        {price ? <p className="menu-row-price">{price}</p> : null}
      </div>
      {description ? <p className="menu-row-desc">{description}</p> : null}
    </motion.li>
  );
}
