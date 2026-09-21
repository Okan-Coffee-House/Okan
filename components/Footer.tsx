"use client";

import { motion, useReducedMotion } from "motion/react";
import { HashLink } from "@/components/HashLink";
import { Logo } from "@/components/Logo";
import { useSite } from "@/components/LocaleProvider";
import { Reveal, okanEase } from "@/components/Reveal";
import { OKAN } from "@/constants/okan";
import { availableLinks, getFooterNav, links } from "@/content/site";
import { withLocale } from "@/lib/locale";
import { isRemoteHref, mailHref, telHref } from "@/lib/utils";
import type { IFooterAction, TFooterActionIcon } from "@/types";

export function Footer() {
  const year = new Date().getFullYear();
  const reduce = useReducedMotion();
  const { locale, dictionary } = useSite();
  const visit = dictionary.visit;
  const hours = visit.hours[0];
  const explore = getFooterNav(locale, dictionary);
  const actions: IFooterAction[] = [
    {
      label: dictionary.a11y.directions,
      href: availableLinks.maps ? links.maps : null,
      icon: "directions",
    },
    {
      label: dictionary.a11y.callOkan,
      href: availableLinks.phone ? telHref(links.phone) : null,
      icon: "call",
    },
    {
      label: dictionary.a11y.instagramOkan,
      href: availableLinks.instagram ? links.instagram : null,
      icon: "instagram",
    },
    {
      label: dictionary.a11y.tiktokOkan,
      href: availableLinks.tiktok ? links.tiktok : null,
      icon: "tiktok",
    },
    {
      label: dictionary.a11y.emailOkan,
      href: availableLinks.email ? mailHref(links.email) : null,
      icon: "email",
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-grid">
          <Reveal className="footer-brand" y={18} duration={0.7}>
            <HashLink href={withLocale(locale, "/")} className="footer-logo">
              <Logo variant="reverse" />
            </HashLink>
            <p className="footer-brand-line">{dictionary.hero.headline}</p>
            <p className="footer-brand-copy">{dictionary.footer.support}</p>
          </Reveal>

          <Reveal className="footer-explore" y={18} duration={0.7} delay={0.08}>
            <nav aria-label={dictionary.a11y.footerNav}>
              <p className="footer-col-title">{dictionary.footer.explore}</p>
              <ul className="footer-nav-list">
                {explore.map((item) => (
                  <li key={item.href}>
                    <HashLink href={item.href} className="footer-nav-link">
                      {item.label}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal className="footer-visit" y={18} duration={0.7} delay={0.16}>
            <p className="footer-col-title">{dictionary.footer.visitHeading}</p>
            <p className="footer-place">{dictionary.footer.locality}</p>
            {hours ? (
              <p className="footer-hours">
                {hours.days} · {hours.time}
              </p>
            ) : null}
            <ul className="footer-actions">
              {actions.map((action, index) =>
                action.href ? (
                  <li key={action.icon}>
                    <Reveal delay={0.22 + index * 0.05} y={10} duration={0.5}>
                      <IconButton action={action} />
                    </Reveal>
                  </li>
                ) : null,
              )}
            </ul>
          </Reveal>
        </div>

        <motion.div
          className="footer-rule"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? undefined : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduce ? 0.16 : 0.7, ease: okanEase }}
        />
        <Reveal className="footer-meta" y={12} duration={0.6} delay={0.15}>
          <p>
            © {year} {OKAN.name}
          </p>
          <p>{dictionary.footer.meta}</p>
        </Reveal>
      </div>
    </footer>
  );
}

function IconButton({ action }: { action: IFooterAction }) {
  return (
    <a
      href={action.href ?? undefined}
      aria-label={action.label}
      title={action.label}
      className="footer-icon-btn"
      target={action.href && isRemoteHref(action.href) ? "_blank" : undefined}
      rel={action.href && isRemoteHref(action.href) ? "noopener noreferrer" : undefined}
    >
      <ActionIcon name={action.icon} />
    </a>
  );
}

function ActionIcon({ name }: { name: TFooterActionIcon }) {
  if (name === "call") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path
          d="M7.2 3.8h2.4l1.2 3-1.6 1.1a12.4 12.4 0 0 0 6.9 6.9l1.1-1.6 3 1.2v2.4c0 .8-.7 1.5-1.5 1.5C10.4 18.3 5.7 13.6 5.7 7.3c0-.8.7-1.5 1.5-1.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
      </svg>
    );
  }

  if (name === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path
          d="M14 5.5c.8 2.4 2.4 3.8 4.8 4.1v3.1c-1.7 0-3.3-.5-4.8-1.4v5.4c0 3.1-2.5 5.3-5.6 5.3S3 19.8 3 16.7c0-3 2.4-5.3 5.4-5.3.4 0 .8 0 1.2.1v3.2c-.4-.2-.8-.3-1.2-.3-1.4 0-2.4 1.1-2.4 2.4 0 1.4 1.1 2.4 2.5 2.4s2.5-1 2.5-2.4V5.5H14Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect x="3.4" y="5.5" width="17.2" height="13" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4.2 7.1 12 12.6 19.8 7.1" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M12 21s6.5-6.1 6.5-11.2A6.5 6.5 0 0 0 12 3.3a6.5 6.5 0 0 0-6.5 6.5C5.5 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="9.8" r="2.1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
