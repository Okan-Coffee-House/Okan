"use client";

import { Photo } from "@/components/Photo";
import { Reveal, RevealImage, RevealText } from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { useSite } from "@/components/LocaleProvider";
import { GALLERY_LAYOUT } from "@/constants/content";
import { photos } from "@/content/images";
import { cn } from "@/lib/utils";
import type { TGalleryArea } from "@/types";

const TILE_MOTION: Record<TGalleryArea, { y: number; x: number; scale: number; duration: number }> = {
  terrace: { y: 28, x: 0, scale: 1, duration: 0.78 },
  window: { y: 18, x: 0, scale: 0.985, duration: 0.8 },
  takeaway: { y: 0, x: 22, scale: 1, duration: 0.72 },
  street: { y: 16, x: 0, scale: 0.99, duration: 0.82 },
  door: { y: 14, x: 0, scale: 0.98, duration: 0.72 },
  planter: { y: 0, x: -18, scale: 1, duration: 0.76 },
};

export function Gallery() {
  const { dictionary } = useSite();

  return (
    <section
      id="moments"
      className="scroll-mt-[var(--header-h)] px-[var(--pad-x)] py-[var(--pad-y)]"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="gallery-intro">
          <Reveal y={14} duration={0.55}>
            <SectionMeta number={dictionary.gallery.number} label={dictionary.gallery.label} />
          </Reveal>
          <RevealText as="h2" className="section-title" delay={0.08} duration={0.75}>
            {dictionary.gallery.headline}
          </RevealText>
        </div>

        <div className="gallery-wall">
          {GALLERY_LAYOUT.map((item, index) => {
            const photo = photos.moments[index];
            const caption = dictionary.gallery.captions[item.captionKey];
            const motion = TILE_MOTION[item.area];

            return (
              <RevealImage
                key={photo.src}
                className={cn("gallery-item", `gallery-item--${item.area}`)}
                delay={index * 0.08}
                duration={motion.duration}
                y={motion.y}
                x={motion.x}
                scale={motion.scale}
              >
                <figure>
                  <Photo
                    photo={photo}
                    className="gallery-photo w-full photo-detail"
                    imageClassName={galleryPosition(item.area)}
                    sizes={gallerySizes(item.area)}
                    quality={85}
                  />
                  <figcaption className="gallery-caption">{caption}</figcaption>
                </figure>
              </RevealImage>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function galleryPosition(area: TGalleryArea): string {
  if (area === "window") {
    return "object-[center_60%]";
  }
  if (area === "street") {
    return "object-[center_45%]";
  }
  return "object-center";
}

function gallerySizes(area: TGalleryArea): string {
  if (area === "window" || area === "street") {
    return "(min-width: 1280px) 42vw, (min-width: 768px) 48vw, 100vw";
  }
  if (area === "takeaway" || area === "door") {
    return "(min-width: 1280px) 26vw, (min-width: 768px) 42vw, 58vw";
  }
  return "(min-width: 1280px) 34vw, (min-width: 768px) 50vw, 100vw";
}
