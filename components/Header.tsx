"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { useSite } from "@/components/LocaleProvider";
import { MobileMenu } from "@/components/MobileMenu";
import { OrderLink } from "@/components/OrderLink";
import { okanEase } from "@/components/Reveal";
import { SCROLL_HEADER_THRESHOLD } from "@/constants/content";
import { getOrderUrl } from "@/lib/foodics";
import { withLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const orderUrl = getOrderUrl();
  const { locale, dictionary, nav } = useSite();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_HEADER_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen((value) => !value);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={reduce ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: okanEase }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-[var(--ease-okan)]",
          isScrolled || isMenuOpen
            ? "border-b border-line bg-cream/92 backdrop-blur-[8px]"
            : "border-b border-transparent bg-cream/55 backdrop-blur-[2px]",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-[var(--pad-x)] md:h-[4.5rem]">
          <Link
            href={withLocale(locale)}
            className="relative z-50"
            aria-label={dictionary.a11y.home}
          >
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label={dictionary.a11y.primaryNav}>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-[0.72rem] tracking-[0.18em] uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <LanguageSwitch />
            <OrderLink href={orderUrl} className="btn-ink group">
              {dictionary.cta.order}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </OrderLink>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? dictionary.a11y.closeMenu : dictionary.a11y.openMenu}
            onClick={handleToggleMenu}
          >
            <span className="sr-only">
              {isMenuOpen ? dictionary.a11y.closeMenu : dictionary.a11y.openMenu}
            </span>
            <span className="flex w-5 flex-col gap-[7px]" aria-hidden="true">
              <span
                className={cn(
                  "block h-px w-full origin-center bg-ink transition-transform duration-500 ease-[var(--ease-okan)]",
                  isMenuOpen && "translate-y-[4px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-full origin-center bg-ink transition-transform duration-500 ease-[var(--ease-okan)]",
                  isMenuOpen && "-translate-y-[4px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </motion.header>
      <div id="mobile-menu">
        <MobileMenu open={isMenuOpen} onClose={handleCloseMenu} />
      </div>
    </>
  );
}
