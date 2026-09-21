"use client";

import { Photo } from "@/components/Photo";
import { Reveal, RevealImage, RevealText } from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { useSite } from "@/components/LocaleProvider";
import { photos } from "@/content/images";
import type { IPhotoAsset, TSpacePhotoKey } from "@/types";

const SPACE_PHOTOS: Record<TSpacePhotoKey, IPhotoAsset> = {
  wide: photos.spaceWide,
  nook: photos.spaceNook,
  outside: photos.spaceOutdoor,
  bar: photos.spaceBar,
};

export function Space() {
  const { dictionary } = useSite();

  return (
    <section
      id="space"
      className="scroll-mt-[var(--header-h)] px-[var(--pad-x)] py-[var(--pad-y)]"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="max-w-[40rem]">
          <Reveal y={14} duration={0.55}>
            <SectionMeta number={dictionary.space.number} label={dictionary.space.label} />
          </Reveal>
          <RevealText as="h2" className="section-title" delay={0.08} duration={0.78}>
            {dictionary.space.headline}
          </RevealText>
          <Reveal delay={0.18} y={16} duration={0.62}>
            <p className="mt-6 max-w-[46ch] text-ink/70">{dictionary.space.body}</p>
            <p className="mt-4 max-w-[46ch] text-ink/70">{dictionary.space.secondary}</p>
          </Reveal>
        </div>

        <div className="space-wall">
          <figure className="space-item space-item--wide">
            <RevealImage className="space-photo w-full" duration={0.85} y={16} scale={1}>
              <Photo
                photo={SPACE_PHOTOS.wide}
                className="h-full w-full photo-soft"
                imageClassName="object-center"
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 62vw"
                quality={85}
              />
            </RevealImage>
            <figcaption className="space-caption">{dictionary.space.captions.wide}</figcaption>
          </figure>

          <RevealImage delay={0.12} duration={0.72} y={18} scale={1} className="space-item space-item--nook">
            <figure>
              <Photo
                photo={SPACE_PHOTOS.nook}
                className="space-photo w-full photo-soft"
                imageClassName="object-center"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 48vw, 32vw"
                quality={85}
              />
              <figcaption className="space-caption">{dictionary.space.captions.nook}</figcaption>
            </figure>
          </RevealImage>

          <figure className="space-item space-item--outside">
            <RevealImage className="space-photo w-full" delay={0.16} duration={0.75} y={16} scale={1}>
              <Photo
                photo={SPACE_PHOTOS.outside}
                className="h-full w-full photo-soft"
                imageClassName="object-[center_45%]"
                sizes="(max-width: 767px) 100vw, 50vw"
                quality={85}
              />
            </RevealImage>
            <figcaption className="space-caption">{dictionary.space.captions.outside}</figcaption>
          </figure>

          <figure className="space-item space-item--bar">
            <RevealImage className="space-photo w-full" delay={0.22} duration={0.75} y={16} scale={1}>
              <Photo
                photo={SPACE_PHOTOS.bar}
                className="h-full w-full photo-soft"
                imageClassName="object-[60%_center]"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 48vw, 50vw"
                quality={85}
              />
            </RevealImage>
            <figcaption className="space-caption">{dictionary.space.captions.bar}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
