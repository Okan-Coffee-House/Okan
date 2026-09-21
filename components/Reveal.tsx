"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { IRevealProps, IStaggerItemProps, IStaggerProps } from "@/types";

export const okanEase = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
}: IRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.7, delay, ease: okanEase }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, stagger = 0.08 }: IStaggerProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: IStaggerItemProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0, y: 16 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: okanEase },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
