"use client";

import { Photo } from "@/components/Photo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { useSite } from "@/components/LocaleProvider";
import { MATERIAL_KEYS } from "@/constants/content";
import { photos } from "@/content/images";

export function Materials() {
  const { dictionary } = useSite();

  return (
    <section className="px-[var(--pad-x)] pt-[calc(var(--pad-y)+3rem)] pb-[var(--pad-y)] md:pt-[calc(var(--pad-y)+5rem)]">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-[28rem]">
          <SectionMeta
            number={dictionary.materials.number}
            label={dictionary.materials.label}
          />
          <h2 className="section-title">{dictionary.materials.headline}</h2>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6" stagger={0.09}>
          {MATERIAL_KEYS.map((key, index) => {
            const height =
              index === 1
                ? "aspect-[4/5] md:mt-10"
                : index === 2
                  ? "aspect-square md:mt-4"
                  : index === 3
                    ? "aspect-[4/5] md:mt-16"
                    : "aspect-square";

            return (
              <StaggerItem key={key}>
                <figure>
                  <Photo
                    photo={photos[key]}
                    className={`w-full ${height}`}
                    sizes="(min-width: 768px) 22vw, 48vw"
                  />
                  <figcaption className="caption mt-3">
                    {dictionary.materials.items[key]}
                  </figcaption>
                </figure>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
