"use client";

import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { useSite } from "@/components/LocaleProvider";
import { photos } from "@/content/images";
import { cn } from "@/lib/utils";

const mosaic = [
  "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto md:min-h-[36rem]",
  "md:col-span-5 aspect-[4/3] md:aspect-[5/4]",
  "md:col-span-5 aspect-[4/5] md:aspect-[4/3]",
  "md:col-span-4 aspect-[4/5]",
  "md:col-span-4 aspect-[3/4] md:mt-10",
  "md:col-span-4 aspect-[16/10] md:mt-4",
];

export function Gallery() {
  const { dictionary } = useSite();

  return (
    <section className="px-[var(--pad-x)] py-[var(--pad-y)]">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-[30rem]">
          <SectionMeta number={dictionary.gallery.number} label={dictionary.gallery.label} />
          <h2 className="section-title">{dictionary.gallery.headline}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {photos.moments.map((photo, index) => (
            <Reveal
              key={photo.src}
              delay={index * 0.05}
              className={cn("photo-zoom", mosaic[index])}
              y={20}
            >
              <figure className="h-full">
                <Photo
                  photo={photo}
                  className="h-full min-h-[16rem] w-full"
                  imageClassName={
                    index === 0
                      ? "object-[center_30%] md:object-center"
                      : "object-center"
                  }
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <figcaption className="caption mt-3 md:sr-only">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
