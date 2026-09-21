"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Photo } from "@/components/Photo";
import { easeSoft, revealViewport } from "@/components/Reveal";
import { useSite } from "@/components/LocaleProvider";
import { photos } from "@/content/images";
import type { ITypedHeadingProps } from "@/types";

const TYPE_MS = 78;
const LINE_PAUSE_MS = 420;
const HOLD_MS = 2200;
const DELETE_MS = 34;

export function SunflowerMoment() {
  const { dictionary } = useSite();
  const reduce = useReducedMotion();

  return (
    <section className="sunflower-moment">
      <div className="sunflower-media">
        <Photo
          photo={photos.sunflower}
          className="h-full w-full"
          imageClassName="object-cover object-[20%_42%]"
          sizes="100vw"
          quality={85}
          tone="sunflower"
        />
      </div>
      <motion.div
        className="sunflower-scrim"
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        whileInView={reduce ? undefined : { opacity: 1 }}
        viewport={revealViewport}
        transition={{
          duration: reduce ? 0.16 : 0.8,
          delay: reduce ? 0 : 0.25,
          ease: easeSoft,
        }}
      />
      <div className="sunflower-copy">
        <div className="sunflower-copy-inner">
          <TypedHeading lines={dictionary.sunflower.lines} />
        </div>
      </div>
    </section>
  );
}

function TypedHeading({ lines }: ITypedHeadingProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const lineKey = lines.join("|");
  const [typed, setTyped] = useState<string[]>(() => lines.map(() => ""));
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"type" | "hold" | "delete">("type");

  useEffect(() => {
    requestAnimationFrame(() => {
      setTyped(lines.map(() => ""));
      setActive(0);
      setPhase("type");
    });
  }, [lineKey, lines]);

  useEffect(() => {
    if (reduce) {
      return;
    }

    if (!inView) {
      const isIdle =
        active === 0 &&
        phase === "type" &&
        typed.every((value) => value === "");
      if (!isIdle) {
        requestAnimationFrame(() => {
          setTyped(lines.map(() => ""));
          setActive(0);
          setPhase("type");
        });
      }
      return;
    }

    const full = Array.from(lines[active] ?? "");
    const shown = Array.from(typed[active] ?? "");

    if (phase === "hold") {
      const hold = window.setTimeout(() => {
        setActive(Math.max(lines.length - 1, 0));
        setPhase("delete");
      }, HOLD_MS);
      return () => window.clearTimeout(hold);
    }

    if (phase === "type") {
      if (shown.length < full.length) {
        const step = window.setTimeout(() => {
          setTyped((current) => {
            const next = [...current];
            next[active] = full.slice(0, shown.length + 1).join("");
            return next;
          });
        }, TYPE_MS);
        return () => window.clearTimeout(step);
      }

      const pause = window.setTimeout(() => {
        if (active < lines.length - 1) {
          setActive(active + 1);
          return;
        }
        setPhase("hold");
      }, LINE_PAUSE_MS);
      return () => window.clearTimeout(pause);
    }

    if (shown.length > 0) {
      const step = window.setTimeout(() => {
        setTyped((current) => {
          const next = [...current];
          next[active] = shown.slice(0, -1).join("");
          return next;
        });
      }, DELETE_MS);
      return () => window.clearTimeout(step);
    }

    if (active > 0) {
      requestAnimationFrame(() => {
        setActive(active - 1);
      });
      return;
    }

    requestAnimationFrame(() => {
      setPhase("type");
    });
  }, [active, inView, lineKey, lines, phase, reduce, typed]);
  return (
    <h2 ref={ref} className="sunflower-heading">
      <span className="sr-only">{lines.join(" ")}</span>
      <span aria-hidden="true">
        {lines.map((line, index) => (
          <span key={line} className="sunflower-line">
            <span className="sunflower-line__ghost">{line}</span>
            <span className="sunflower-line__live">
              {reduce ? line : (typed[index] ?? "")}
              {!reduce && inView && index === active ? (
                <span className="sunflower-caret" />
              ) : null}
            </span>
          </span>
        ))}
      </span>
    </h2>
  );
}
