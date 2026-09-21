"use client";

import { motion, useReducedMotion } from "motion/react";
import { easePremium, revealViewport } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import type { ISectionMetaProps } from "@/types";

export function SectionMeta({
  number,
  label,
  className,
  light = false,
}: ISectionMetaProps) {
  const reduce = useReducedMotion();

  return (
    <p className={cn("kicker mb-5 flex items-center gap-4", light && "text-cream/70", className)}>
      {number ? (
        <>
          <span>{number}</span>
          <motion.span
          className={cn("h-px w-8 origin-left rtl:origin-right", light ? "bg-cream/25" : "bg-line")}
            aria-hidden="true"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1 }}
            viewport={revealViewport}
            transition={{ duration: reduce ? 0.16 : 0.55, ease: easePremium }}
          />
        </>
      ) : null}
      <span>{label}</span>
    </p>
  );
}
