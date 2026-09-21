"use client";

import { Photo } from "@/components/Photo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { useSite } from "@/components/LocaleProvider";
import { COFFEE_STAGE_KEYS } from "@/constants/content";
import { photos } from "@/content/images";
import { cn } from "@/lib/utils";

const layouts = [
  "md:col-span-7 md:pe-8",
  "md:col-span-5 md:pt-16",
  "md:col-span-5 md:pt-6",
  "md:col-span-7 md:ps-8 md:pt-20",
];

const aspects = [
  "aspect-[4/3]",
  "aspect-[3/4] md:aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[4/3] md:aspect-[16/11]",
];

export function CoffeeJourney() {
  const { dictionary } = useSite();

  return (
    <section id="coffee" className="scroll-mt-24 px-[var(--pad-x)] pb-[var(--pad-y)]">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-[34rem]">
          <SectionMeta number={dictionary.coffee.number} label={dictionary.coffee.label} />
          <h2 className="section-title">{dictionary.coffee.headline}</h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-12" stagger={0.1}>
          {COFFEE_STAGE_KEYS.map((key, index) => {
            const stage = dictionary.coffee.stages[key];
            return (
              <StaggerItem key={key} className={layouts[index]}>
                <article>
                  <figure className="photo-zoom">
                    <Photo
                      photo={photos[key]}
                      className={cn("w-full", aspects[index])}
                      imageClassName={
                        index === 1 ? "object-[center_20%] md:object-center" : "object-center"
                      }
                      sizes="(min-width: 768px) 48vw, 100vw"
                    />
                  </figure>
                  <div className="mt-5 flex items-baseline gap-4">
                    <p className="kicker">{stage.number}</p>
                    <h3 className="text-[1.15rem] tracking-tight">{stage.title}</h3>
                  </div>
                  <p className="mt-2 max-w-[36ch] text-ink/70">{stage.body}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
