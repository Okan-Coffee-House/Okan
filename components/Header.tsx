"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HashLink } from "@/components/HashLink";
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
  const pathname = usePathname();
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

  const isHome = pathname === withLocale(locale);
  const isOverHero = isHome && !isScrolled && !isMenuOpen;

  return (
    <>
      <motion.header
        initial={reduce ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: okanEase }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 overflow-visible transition-[background-color,border-color,backdrop-filter,color] duration-[220ms] ease-[var(--ease-okan)]",
          isOverHero
            ? "border-b border-transparent bg-transparent text-cream"
            : isScrolled || isMenuOpen
              ? "border-b border-line bg-cream/92 text-ink backdrop-blur-[8px]"
              : "border-b border-transparent bg-cream/55 text-ink backdrop-blur-[2px]",
        )}
        data-over-hero={isOverHero ? "true" : undefined}
      >
        <div className="mx-auto grid h-16 max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-[var(--pad-x)] md:h-[4.5rem]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: reduce ? 0 : 0.08, ease: okanEase }}
            className="relative z-50 justify-self-start overflow-visible"
          >
            <Link
              href={withLocale(locale)}
              className="relative z-50 justify-self-start overflow-visible"
              aria-label={dictionary.a11y.home}
            >
              <Logo priority variant={isOverHero ? "reverse" : "color"} />
            </Link>
          </motion.div>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label={dictionary.a11y.primaryNav}
          >
            {nav.map((item, index) => (
              <motion.span
                key={item.href}
                initial={reduce ? false : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: reduce ? 0 : 0.12 + index * 0.04,
                  ease: okanEase,
                }}
              >
                <HashLink href={item.href} className="nav-link">
                  {item.label}
                </HashLink>
              </motion.span>
            ))}
          </nav>

          <div className="flex items-center justify-self-end gap-8">
            <div className="hidden items-center gap-8 lg:flex">
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
                    "block h-px w-full origin-center transition-transform duration-500 ease-[var(--ease-okan)]",
                    isOverHero ? "bg-cream" : "bg-ink",
                    isMenuOpen && "translate-y-[4px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-full origin-center transition-transform duration-500 ease-[var(--ease-okan)]",
                    isOverHero ? "bg-cream" : "bg-ink",
                    isMenuOpen && "-translate-y-[4px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>
      <div id="mobile-menu">
        <MobileMenu open={isMenuOpen} onClose={handleCloseMenu} />
      </div>
    </>
  );
}
