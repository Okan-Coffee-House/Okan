"use client";

import { Reveal } from "@/components/Reveal";
import { SunflowerMark } from "@/components/SunflowerMark";
import { useSite } from "@/components/LocaleProvider";

export function BrandStatement() {
  const { dictionary } = useSite();

  return (
    <section className="px-[var(--pad-x)] py-[var(--pad-y)]">
      <Reveal className="mx-auto max-w-[52rem] text-center">
        <SunflowerMark className="mx-auto mb-10 h-5 w-5 text-olive" accent />
        <p className="statement">{dictionary.statement.lead}</p>
        <p className="mx-auto mt-8 max-w-[34rem] text-ink/70">
          {dictionary.statement.body}
        </p>
      </Reveal>
    </section>
  );
}
