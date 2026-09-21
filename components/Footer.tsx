"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useSite } from "@/components/LocaleProvider";
import { OrderLink } from "@/components/OrderLink";
import { OKAN } from "@/constants/okan";
import { availableLinks, links } from "@/content/site";
import { getOrderUrl } from "@/lib/foodics";
import { isRemoteHref, mailHref, telHref } from "@/lib/utils";

export function Footer() {
  const orderUrl = getOrderUrl();
  const year = new Date().getFullYear();
  const { dictionary, nav } = useSite();
  const contact = [
    {
      label: dictionary.cta.instagram,
      href: availableLinks.instagram ? links.instagram : null,
    },
    {
      label: dictionary.cta.tiktok,
      href: availableLinks.tiktok ? links.tiktok : null,
    },
    {
      label: dictionary.cta.email,
      href: availableLinks.email ? mailHref(links.email) : null,
    },
    {
      label: dictionary.cta.call,
      href: availableLinks.phone ? telHref(links.phone) : null,
    },
    {
      label: dictionary.cta.journal,
      href: availableLinks.journal ? links.journal : null,
    },
  ];

  return (
    <footer className="border-t border-line px-[var(--pad-x)] py-12">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Logo />
            <p className="mt-4 max-w-[22ch] text-ink/70">{dictionary.footer.line}</p>
          </div>
          <nav aria-label={dictionary.a11y.footerNav}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link text-[0.72rem] tracking-[0.16em] uppercase"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {contact.map((item) =>
                item.href ? (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="nav-link text-[0.72rem] tracking-[0.16em] uppercase"
                      target={isRemoteHref(item.href) ? "_blank" : undefined}
                      rel={isRemoteHref(item.href) ? "noopener noreferrer" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ) : null,
              )}
              <li>
                <OrderLink
                  href={orderUrl}
                  className="nav-link text-[0.72rem] tracking-[0.16em] uppercase group"
                >
                  {dictionary.cta.order}
                </OrderLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-line pt-6 text-[0.72rem] tracking-[0.12em] uppercase text-olive sm:flex-row">
          <p>
            © {year} {OKAN.shortName}
          </p>
          <p>{dictionary.visit.locality}</p>
        </div>
      </div>
    </footer>
  );
}
