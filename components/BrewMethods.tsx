"use client";

import { motion, useReducedMotion } from "motion/react";
import { Photo } from "@/components/Photo";
import {
  Reveal,
  RevealImage,
  RevealText,
  Stagger,
  StaggerItem,
  easeReveal,
  revealViewport,
} from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { useSite } from "@/components/LocaleProvider";
import { BREW_FACT_KEYS } from "@/constants/content";
import { photos } from "@/content/images";
import { cn } from "@/lib/utils";
import type { IPhotoAsset, TBrewMethodKey } from "@/types";

const METHOD_PHOTOS: Record<TBrewMethodKey, IPhotoAsset> = {
  v60: photos.coffeeV60,
  espresso: photos.coffeeEspresso,
  milk: photos.coffeeMilk,
};

const METHOD_OBJECT: Record<TBrewMethodKey, string> = {
  v60: "object-center",
  espresso: "object-[center_52%]",
  milk: "object-[center_46%]",
};

const METHOD_SIZES: Record<TBrewMethodKey, string> = {
  v60: "(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px",
  espresso: "(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 680px",
  milk: "(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 680px",
};

export function BrewMethods() {
  const { dictionary } = useSite();
  const copy = dictionary.brewMethods;

  return (
    <section id="brew-methods" className="brew-methods scroll-mt-[var(--header-h)]">
      <div className="brew-frame">
        <div className="brew-intro">
          <Reveal y={12} duration={0.55}>
            <SectionMeta number={copy.number} label={copy.label} />
          </Reveal>
          <RevealText as="h2" className="section-title" delay={0.06} duration={0.78}>
            {copy.headline}
          </RevealText>
          <Reveal delay={0.16} y={16} duration={0.6}>
            <p className="brew-lede">{copy.body}</p>
          </Reveal>
        </div>

        <div className="brew-stories">
          <MethodStory methodKey="v60" index={0} />
          <MethodStory methodKey="espresso" index={1} />
          <MethodStory methodKey="milk" index={2} />
        </div>
      </div>
    </section>
  );
}

function MethodStory({
  methodKey,
  index,
}: {
  methodKey: TBrewMethodKey;
  index: number;
}) {
  const { dictionary } = useSite();
  const reduce = useReducedMotion();
  const method = dictionary.brewMethods.methods[methodKey];
  const labels = dictionary.brewMethods.facts;
  const number = String(index + 1).padStart(2, "0");
  const copyDelay = methodKey === "v60" ? 0.18 : 0.12;
  const copyX = methodKey === "espresso" ? -18 : methodKey === "milk" ? 18 : 0;

  return (
    <article className={cn("brew-story", `brew-story--${methodKey}`)}>
      {methodKey === "v60" ? (
        <RevealImage className="brew-photo" delay={0.1} duration={0.8} y={18} scale={1}>
          <Photo
            photo={METHOD_PHOTOS[methodKey]}
            className="h-full w-full photo-static"
            imageClassName={METHOD_OBJECT[methodKey]}
            sizes={METHOD_SIZES[methodKey]}
            quality={88}
          />
        </RevealImage>
      ) : null}
      {methodKey === "espresso" ? (
        <RevealImage className="brew-photo" delay={0.08} duration={0.8} y={16} x={0} scale={1}>
          <Photo
            photo={METHOD_PHOTOS[methodKey]}
            className="h-full w-full photo-static"
            imageClassName={METHOD_OBJECT[methodKey]}
            sizes={METHOD_SIZES[methodKey]}
            quality={88}
          />
        </RevealImage>
      ) : null}
      {methodKey === "milk" ? (
        <RevealImage className="brew-photo" delay={0.08} duration={0.8} y={18} scale={1}>
          <Photo
            photo={METHOD_PHOTOS[methodKey]}
            className="h-full w-full photo-static"
            imageClassName={METHOD_OBJECT[methodKey]}
            sizes={METHOD_SIZES[methodKey]}
            quality={88}
          />
        </RevealImage>
      ) : null}

      <div className="brew-copy">
        <Stagger stagger={0.07} delay={copyDelay}>
          <StaggerItem y={methodKey === "v60" ? 18 : 0} x={copyX}>
            <p className="brew-index">{number}</p>
          </StaggerItem>
          <StaggerItem y={methodKey === "v60" ? 18 : 0} x={copyX}>
            <h3 className="brew-title">{method.title}</h3>
          </StaggerItem>
          <StaggerItem y={methodKey === "v60" ? 18 : 0} x={copyX}>
            <p className="brew-descriptor">{method.descriptor}</p>
          </StaggerItem>
          <StaggerItem y={methodKey === "v60" ? 18 : 0} x={copyX}>
            <p className="brew-body">{method.body}</p>
          </StaggerItem>
        </Stagger>
        <motion.div
          className="brew-facts-rule"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? undefined : { scaleX: 1 }}
          viewport={revealViewport}
          transition={{
            duration: reduce ? 0.16 : 0.55,
            delay: reduce ? 0 : copyDelay + 0.28,
            ease: easeReveal,
          }}
        />
        <Stagger as="dl" className="brew-facts" stagger={0.055} delay={copyDelay + 0.32}>
          {BREW_FACT_KEYS.map((key) => (
            <StaggerItem key={key} className="brew-fact" y={0} x={10} duration={0.48}>
              <dt>{labels[key]}</dt>
              <dd>{method[key]}</dd>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </article>
  );
}
