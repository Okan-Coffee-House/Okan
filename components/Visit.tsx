"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal, RevealText, easePremium, revealViewport } from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { availableLinks, links } from "@/content/site";
import { useSite } from "@/components/LocaleProvider";

export function Visit() {
  const { dictionary } = useSite();
  const visit = dictionary.visit;

  return (
    <section
      id="visit"
      className="scroll-mt-[var(--header-h)] px-[var(--pad-x)] py-[var(--pad-y)]"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 lg:items-stretch">
          <div className="lg:col-span-4">
            <Reveal y={14} duration={0.55}>
              <SectionMeta number={visit.number} label={visit.label} />
            </Reveal>
            <RevealText as="h2" className="section-title" delay={0.08} duration={0.75}>
              {visit.headline}
            </RevealText>
            <Reveal delay={0.16} y={16} duration={0.6}>
              <p className="mt-5 max-w-[36ch] text-ink/70">{visit.body}</p>
            </Reveal>
          </div>

          <div className="flex lg:col-span-7 lg:col-start-6">
            <MapPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function MapPanel() {
  const { locale, dictionary } = useSite();
  const reduce = useReducedMotion();

  if (!availableLinks.mapsEmbed) {
    return (
      <Reveal delay={0.12} duration={0.7} className="w-full">
        <div className="map-panel flex items-end p-6">
          <div>
            <p className="kicker">{dictionary.visit.locationLabel}</p>
            <p className="mt-2 text-[1.15rem]">{dictionary.visit.locality}</p>
          </div>
        </div>
      </Reveal>
    );
  }

  const separator = links.mapsEmbed.includes("?") ? "&" : "?";

  return (
    <motion.div
      className="map-panel w-full"
      initial={reduce ? false : { opacity: 0, clipPath: "inset(0 0 10% 0)" }}
      whileInView={reduce ? undefined : { opacity: 1, clipPath: "inset(0 0 0 0)" }}
      viewport={revealViewport}
      transition={{ duration: reduce ? 0.16 : 0.85, delay: reduce ? 0 : 0.12, ease: easePremium }}
    >
      <iframe
        title={dictionary.a11y.map}
        src={`${links.mapsEmbed}${separator}hl=${locale}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </motion.div>
  );
}
