"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useSite } from "@/components/LocaleProvider";
import { getVerifiedCoffees } from "@/lib/coffees";
import { cn } from "@/lib/utils";
import type { ICoffeeSelection, TCoffeeFactKey } from "@/types";

export function CurrentCoffees() {
  const { dictionary } = useSite();
  const coffees = getVerifiedCoffees();

  if (coffees.length === 0) {
    return null;
  }

  return (
    <section
      id="current-coffees"
      className="scroll-mt-[var(--header-h)] bg-warm/60 px-[var(--pad-x)] py-[var(--pad-y)]"
    >
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <p className="kicker">{dictionary.currentCoffees.label}</p>
          <h2 className="section-title mt-5">{dictionary.currentCoffees.headline}</h2>
          <p className="mt-5 max-w-[42ch] text-ink/70">{dictionary.currentCoffees.body}</p>
        </Reveal>

        <ul className="mt-14 grid gap-16 lg:grid-cols-2">
          {coffees.map((coffee) => (
            <li key={coffee.id} className="border-t border-line pt-8">
              <Reveal>
                <CoffeeRow coffee={coffee} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CoffeeRow({ coffee }: { coffee: ICoffeeSelection }) {
  const { dictionary } = useSite();
  const facts = buildFacts(coffee);
  const notes = coffee.tastingNotes?.filter(Boolean) ?? [];

  return (
    <a
      href={coffee.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group grid gap-8",
        coffee.image && "sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]",
      )}
    >
        {coffee.image ? (
          <div className="okan-photo-wrap relative aspect-[4/5] overflow-hidden bg-warm">
            <Image
              src={coffee.image}
              alt=""
              fill
              sizes="176px"
              className="okan-photo object-cover"
            />
          </div>
        ) : null}
        <div className="min-w-0">
          <h3 className="section-h3">{coffee.name}</h3>
          {notes.length > 0 ? (
            <p className="mt-3 text-sm text-ink/70">
              <span className="text-olive">{dictionary.currentCoffees.notes}</span>
              <span className="mx-2 text-olive">—</span>
              {notes.join(" · ")}
            </p>
          ) : null}
          {facts.length > 0 ? (
            <dl className="mt-5 space-y-2">
              {facts.map((fact) => (
                <div key={fact.key} className="grid grid-cols-[7rem_1fr] gap-3 text-sm">
                  <dt className="text-olive">{dictionary.currentCoffees.facts[fact.key]}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          {coffee.description ? (
            <p className="mt-4 max-w-[42ch] text-ink/70">{coffee.description}</p>
          ) : null}
        </div>
      </a>
  );
}

function buildFacts(coffee: ICoffeeSelection): Array<{ key: TCoffeeFactKey; value: string }> {
  const rows: Array<{ key: TCoffeeFactKey; value: string }> = [];
  if (coffee.country) rows.push({ key: "country", value: coffee.country });
  if (coffee.region) rows.push({ key: "region", value: coffee.region });
  if (coffee.process) rows.push({ key: "process", value: coffee.process });
  if (coffee.roast) rows.push({ key: "roast", value: coffee.roast });
  if (coffee.bestFor) rows.push({ key: "bestFor", value: coffee.bestFor });
  if (coffee.altitude) rows.push({ key: "altitude", value: coffee.altitude });
  return rows;
}
