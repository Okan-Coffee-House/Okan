"use client";

import { Logo } from "@/components/Logo";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { useSite } from "@/components/LocaleProvider";
import { photos } from "@/content/images";

export function SunflowerMoment() {
  const { dictionary } = useSite();

  return (
    <section className="bg-okan-ink text-okan-cream">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal className="flex flex-col justify-end px-[var(--pad-x)] py-20 lg:min-h-[85svh] lg:py-24">
          <Logo variant="reverse" className="mb-10" />
          <p className="mb-8 text-[0.6875rem] tracking-[0.22em] uppercase text-okan-sunflower">
            {dictionary.sunflower.kicker}
          </p>
          <h2 className="section-title max-w-[12ch] text-cream rtl:max-w-[16ch]">
            {dictionary.sunflower.headline}
          </h2>
          <p className="mt-6 max-w-[28ch] text-cream/72">{dictionary.sunflower.body}</p>
        </Reveal>
        <Reveal delay={0.1} y={24} className="relative">
          <Photo
            photo={photos.sunflower}
            className="aspect-[16/11] w-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            imageClassName="object-[center_45%] lg:object-center"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
