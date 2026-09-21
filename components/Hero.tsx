"use client";

import { motion, useReducedMotion } from "motion/react";
import { HashLink } from "@/components/HashLink";
import { Photo } from "@/components/Photo";
import { okanEase } from "@/components/Reveal";
import { useSite } from "@/components/LocaleProvider";
import { photos } from "@/content/images";

export function Hero() {
  const reduce = useReducedMotion();
  const { dictionary } = useSite();

  return (
    <section className="relative h-[100svh] min-h-[36rem]">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.08, ease: okanEase }}
      >
        <Photo
          photo={photos.hero}
          className="h-full w-full"
          imageClassName="object-cover object-[68%_42%] md:object-[center_40%]"
          sizes="100vw"
          priority
          quality={90}
          tone="plain"
        />
        <div className="hero-scrim pointer-events-none absolute inset-0" aria-hidden="true" />
      </motion.div>

      <div className="hero-copy relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col justify-end px-[var(--pad-x)] pb-14 pt-[calc(var(--header-h)+1.5rem)] md:pb-16">
        <motion.p
          className="kicker mb-6"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.18, ease: okanEase }}
        >
          {dictionary.hero.kicker}
        </motion.p>
        <motion.h1
          className="display max-w-[12ch] rtl:max-w-[16ch]"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduce ? 0 : 0.28, ease: okanEase }}
        >
          {dictionary.hero.headline}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-[32ch]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: reduce ? 0 : 0.48, ease: okanEase }}
        >
          {dictionary.hero.body}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.66, ease: okanEase }}
        >
          <HashLink href="#coffee" className="btn-sunflower">
            {dictionary.cta.discover}
          </HashLink>
          <HashLink href="#visit" className="btn-ghost">
            {dictionary.cta.visit}
          </HashLink>
        </motion.div>
        <p className="caption pointer-events-none mt-8 text-cream/80">
          {dictionary.captions.hero}
        </p>
      </div>
    </section>
  );
}
