"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useHashNavigation } from "@/components/HashLink";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { useSite } from "@/components/LocaleProvider";
import { OrderLink } from "@/components/OrderLink";
import { okanEase } from "@/components/Reveal";
import { getOrderUrl } from "@/lib/foodics";
import { resolveNavHref, withLocale } from "@/lib/locale";
import type { IMobileMenuProps } from "@/types";

export function MobileMenu({ open, onClose }: IMobileMenuProps) {
  const reduce = useReducedMotion();
  const orderUrl = getOrderUrl();
  const pathname = usePathname();
  const { locale, dictionary, nav } = useSite();
  const visitHref = resolveNavHref(pathname, withLocale(locale, "/#visit"));
  const navigate = useHashNavigation();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const handleHrefClick = (event: { preventDefault: () => void }, href: string) => {
    event.preventDefault();
    onClose();
    const delay = reduce ? 0 : 320;
    window.setTimeout(() => {
      navigate(href);
    }, delay);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-40 bg-cream px-[var(--pad-x)] pb-10 pt-24"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.45, ease: okanEase }}
        >
          <nav aria-label={dictionary.a11y.mobileNav}>
            <ul className="flex flex-col gap-1">
              {nav.map((item, index) => {
                const href = resolveNavHref(pathname, item.href);

                return (
                  <li key={item.href}>
                    <motion.a
                      href={href}
                      onClick={(event) => handleHrefClick(event, href)}
                      className="display block py-2"
                      initial={reduce ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: reduce ? 0 : 0.08 * index,
                        ease: okanEase,
                      }}
                    >
                      {item.label}
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-10 flex flex-col gap-5">
            <LanguageSwitch />
            <OrderLink href={orderUrl} className="btn-ink w-fit group">
              {dictionary.cta.order}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </OrderLink>
            <a
              href={visitHref}
              onClick={(event) => handleHrefClick(event, visitHref)}
              className="link-underline w-fit"
            >
              {dictionary.cta.visit}
            </a>
          </div>
          <div className="mt-auto pt-16">
            <Logo />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
