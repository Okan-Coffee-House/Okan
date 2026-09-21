"use client";

import { motion, useReducedMotion } from "motion/react";
import { OrderLink } from "@/components/OrderLink";
import { Photo } from "@/components/Photo";
import { okanEase } from "@/components/Reveal";
import { useSite } from "@/components/LocaleProvider";
import { photos } from "@/content/images";
import { getOrderUrl } from "@/lib/foodics";

export function Hero() {
  const reduce = useReducedMotion();
  const orderUrl = getOrderUrl();
  const { dictionary } = useSite();

  return (
    <section className="relative lg:h-[100svh]">
      <div className="grid min-h-0 lg:h-full lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="order-2 flex flex-col justify-end px-[var(--pad-x)] pb-14 pt-10 lg:order-1 lg:pb-16 lg:pt-28">
          <motion.h1
            className="display max-w-[11ch] rtl:max-w-[16ch]"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: reduce ? 0 : 0.28, ease: okanEase }}
          >
            {dictionary.hero.headline}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-[28ch] text-[1.05rem] leading-relaxed text-ink/70"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.48, ease: okanEase }}
          >
            {dictionary.hero.body}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: reduce ? 0 : 0.66, ease: okanEase }}
          >
            <a href="#story" className="btn-ink group">
              {dictionary.cta.discover}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a href="#visit" className="link-underline text-[0.75rem] tracking-[0.16em] uppercase">
              {dictionary.cta.visit}
            </a>
            <OrderLink
              href={orderUrl}
              className="link-underline text-[0.75rem] tracking-[0.16em] uppercase group"
            >
              {dictionary.cta.order}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </OrderLink>
          </motion.div>
        </div>

        <div className="relative order-1 h-[62svh] min-h-[22rem] lg:order-2 lg:h-full lg:min-h-0">
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: reduce ? 0 : 1.15, delay: reduce ? 0 : 0.2, ease: okanEase }}
          >
            <motion.div
              className="h-full w-full"
              initial={reduce ? false : { scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: reduce ? 0 : 1.4, delay: reduce ? 0 : 0.2, ease: okanEase }}
            >
              <Photo
                photo={photos.hero}
                className="h-full w-full"
                imageClassName="object-[center_35%] md:object-center lg:object-[center_40%]"
                sizes="(min-width: 1024px) 54vw, 100vw"
                priority
                quality={75}
              />
            </motion.div>
            <p className="caption pointer-events-none absolute bottom-5 start-5 text-cream md:start-8">
              {dictionary.captions.hero}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
