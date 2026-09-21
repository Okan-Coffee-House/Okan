"use client";

import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { useSite } from "@/components/LocaleProvider";
import { photos } from "@/content/images";

export function Story() {
  const { dictionary } = useSite();

  return (
    <section id="story" className="scroll-mt-24 px-[var(--pad-x)] pb-[var(--pad-y)]">
      <div className="mx-auto grid max-w-[1600px] items-end gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5 lg:pb-10">
          <SectionMeta number={dictionary.story.number} label={dictionary.story.label} />
          <h2 className="section-title max-w-[16ch]">{dictionary.story.headline}</h2>
          <p className="mt-7 max-w-[38ch] text-ink/70">{dictionary.story.body}</p>
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-7 lg:translate-y-8" y={28}>
          <figure>
            <Photo
              photo={photos.story}
              className="aspect-[4/5] w-full md:aspect-[5/4]"
              imageClassName="object-[center_40%] md:object-center"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
            <figcaption className="caption mt-3">{dictionary.captions.story}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
