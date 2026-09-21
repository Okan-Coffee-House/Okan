"use client";

import { Reveal } from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { availableLinks, links } from "@/content/site";
import { useSite } from "@/components/LocaleProvider";
import { OKAN } from "@/constants/okan";
import { isRemoteHref, mailHref, telHref } from "@/lib/utils";

export function Visit() {
  const { dictionary } = useSite();
  const actions = [
    {
      label: dictionary.cta.directions,
      href: availableLinks.maps ? links.maps : null,
    },
    {
      label: dictionary.cta.call,
      href: availableLinks.phone ? telHref(links.phone) : null,
    },
    {
      label: dictionary.cta.whatsapp,
      href: availableLinks.whatsapp ? links.whatsapp : null,
    },
    {
      label: dictionary.cta.email,
      href: availableLinks.email ? mailHref(links.email) : null,
    },
    {
      label: dictionary.cta.instagram,
      href: availableLinks.instagram ? links.instagram : null,
    },
    {
      label: dictionary.cta.tiktok,
      href: availableLinks.tiktok ? links.tiktok : null,
    },
    {
      label: dictionary.cta.journal,
      href: availableLinks.journal ? links.journal : null,
    },
  ];

  return (
    <section id="visit" className="scroll-mt-24 px-[var(--pad-x)] py-[var(--pad-y)]">
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <SectionMeta number={dictionary.visit.number} label={dictionary.visit.label} />
          <h2 className="section-title">{dictionary.visit.headline}</h2>
          <p className="mt-5 max-w-[34ch] text-ink/70">{dictionary.visit.body}</p>

          <div className="mt-10 space-y-8">
            <div>
              <p className="kicker">{dictionary.visit.placeLabel}</p>
              <p className="mt-2 text-[1.15rem] tracking-tight">
                {dictionary.visit.placeName}
              </p>
              <p className="text-ink/70">{dictionary.visit.address}</p>
            </div>
            <div>
              <p className="kicker">{dictionary.visit.hoursLabel}</p>
              <ul className="mt-2 space-y-1 text-ink/70">
                {dictionary.visit.hours.map((row) => (
                  <li key={row.days}>
                    <span className="text-ink">{row.days}</span>
                    <span className="mx-2 text-olive">—</span>
                    {row.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {actions.map((action) => (
              <li key={action.label}>
                {action.href ? (
                  <a
                    href={action.href}
                    className="link-underline text-[0.75rem] tracking-[0.16em] uppercase"
                    target={isRemoteHref(action.href) ? "_blank" : undefined}
                    rel={isRemoteHref(action.href) ? "noopener noreferrer" : undefined}
                  >
                    {action.label}
                  </a>
                ) : (
                  <span className="text-[0.75rem] tracking-[0.16em] uppercase text-olive/80">
                    {action.label}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {availableLinks.instagram ? (
            <a
              href={links.instagram}
              className="mt-12 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={OKAN.instagramQrSrc}
                alt={dictionary.a11y.instagramQr}
                className="h-28 w-28"
              />
              <p className="caption mt-3">{dictionary.visit.scan}</p>
            </a>
          ) : null}
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <MapPanel />
        </Reveal>
      </div>
    </section>
  );
}

function MapPanel() {
  const { dictionary } = useSite();

  if (availableLinks.mapsEmbed) {
    return (
      <iframe
        title={dictionary.a11y.map}
        src={links.mapsEmbed}
        className="h-[26rem] w-full border-0 bg-warm lg:h-full lg:min-h-[32rem]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="relative min-h-[26rem] overflow-hidden bg-warm lg:min-h-[32rem]">
      <div className="absolute bottom-6 start-6">
        <p className="kicker">{dictionary.visit.locationLabel}</p>
        <p className="mt-2 text-[1.15rem] tracking-tight">{dictionary.visit.locality}</p>
      </div>
    </div>
  );
}
