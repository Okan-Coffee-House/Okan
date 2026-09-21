"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect } from "react";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { useSite } from "@/components/LocaleProvider";
import { OrderLink } from "@/components/OrderLink";
import { okanEase } from "@/components/Reveal";
import { getOrderUrl } from "@/lib/foodics";
import { withLocale } from "@/lib/locale";
import type { IMobileMenuProps } from "@/types";

export function MobileMenu({ open, onClose }: IMobileMenuProps) {
  const reduce = useReducedMotion();
  const orderUrl = getOrderUrl();
  const { locale, dictionary, nav } = useSite();

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
              {nav.map((item, index) => (
                <li key={item.href}>
                  <motion.a
                    href={item.href}
                    onClick={onClose}
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
              ))}
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
            <Link
              href={withLocale(locale, "/#visit")}
              onClick={onClose}
              className="link-underline w-fit"
            >
              {dictionary.cta.visit}
            </Link>
          </div>
          <div className="mt-auto pt-16">
            <Logo />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
