"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Photo } from "@/components/Photo";
import { cn } from "@/lib/utils";
import type { IParallaxImageProps } from "@/types";

export function ParallaxImage({
  photo,
  className,
  imageClassName,
  sizes,
  priority,
}: IParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-5%", "5%"]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        <Photo
          photo={photo}
          className="h-full w-full"
          imageClassName={imageClassName}
          sizes={sizes}
          priority={priority}
        />
      </motion.div>
    </div>
  );
}
