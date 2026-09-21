"use client";

import { Photo } from "@/components/Photo";
import { Reveal, RevealImage, RevealText } from "@/components/Reveal";
import { SectionMeta } from "@/components/SectionMeta";
import { useSite } from "@/components/LocaleProvider";
import { photos } from "@/content/images";

function headlineLines(value: string): string[] {
  const comma = value.indexOf(",");
  if (comma === -1) {
    return [value];
  }
  return [value.slice(0, comma + 1), value.slice(comma + 1).trim()];
}

export function CoffeeProgram() {
  const { dictionary } = useSite();

  return (
    <section id="coffee" className="coffee-program scroll-mt-[var(--header-h)]">
      <div className="coffee-grid">
        <RevealImage className="coffee-visual coffee-photo" delay={0.08} duration={0.75} y={18} scale={1}>
          <Photo
            photo={photos.coffeeBar}
            className="h-full w-full photo-static"
            imageClassName="object-[82%_48%]"
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 640px"
            quality={88}
          />
        </RevealImage>
        <div className="coffee-copy">
          <Reveal delay={0.12} y={14} duration={0.55}>
            <SectionMeta number={dictionary.coffee.number} label={dictionary.coffee.label} />
          </Reveal>
          <RevealText
            as="h2"
            className="section-title"
            delay={0.18}
            duration={0.78}
            stagger={0.09}
          >
            {headlineLines(dictionary.coffee.headline).map((line) => (
              <span key={line}>{line}</span>
            ))}
          </RevealText>
          <Reveal delay={0.32} y={18} duration={0.62}>
            <p className="coffee-body">{dictionary.coffee.body}</p>
            <p className="coffee-body coffee-body--secondary">{dictionary.coffee.secondary}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
