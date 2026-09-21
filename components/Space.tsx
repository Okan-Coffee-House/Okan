"use client";

import { ParallaxImage } from "@/components/ParallaxImage";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { useSite } from "@/components/LocaleProvider";
import { photos } from "@/content/images";

export function Space() {
  const { dictionary } = useSite();

  return (
    <section id="space" className="scroll-mt-24 bg-warm/60 px-0 py-[var(--pad-y)] md:pb-40">
      <div className="mx-auto max-w-[1600px] px-[var(--pad-x)]">
        <Reveal className="max-w-[36rem]">
          <SectionMeta number={dictionary.space.number} label={dictionary.space.label} />
          <h2 className="section-title">{dictionary.space.headline}</h2>
          <p className="mt-6 max-w-[42ch] text-ink/70">{dictionary.space.body}</p>
        </Reveal>

        <div className="relative mt-14 lg:mt-20">
          <Reveal y={24}>
            <figure>
              <ParallaxImage
                photo={photos.spaceWide}
                className="aspect-[16/10] w-full md:aspect-[16/8]"
                imageClassName="object-[center_60%] md:object-center"
                sizes="100vw"
              />
              <figcaption className="caption mt-3">
                {dictionary.captions.spaceWide}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mt-6 w-[78%] md:absolute md:-bottom-16 md:end-[var(--pad-x)] md:mt-0 md:w-[32%] lg:-bottom-24"
            y={28}
          >
            <figure className="md:shadow-[0_16px_28px_-22px_var(--okan-line)]">
              <Photo
                photo={photos.spaceDetail}
                className="aspect-[3/4] w-full"
                imageClassName="object-[center_30%]"
                sizes="(min-width: 768px) 32vw, 78vw"
              />
              <figcaption className="caption mt-3 bg-cream/0">
                {dictionary.captions.spaceDetail}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
