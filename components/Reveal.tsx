"use client";

import { Children } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type {
  ILocaleTransitionProps,
  IRevealImageProps,
  IRevealProps,
  IRevealTextProps,
  IStaggerItemProps,
  IStaggerProps,
} from "@/types";

export const easePremium = [0.22, 1, 0.36, 1] as const;
export const easeSoft = [0.25, 0.1, 0.25, 1] as const;
export const easeReveal = [0.76, 0, 0.24, 1] as const;
export const okanEase = easePremium;
export const revealViewport = { once: true, amount: 0.2 } as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  x = 0,
  duration = 0.62,
  amount = 0.2,
}: IRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: reduce ? 0.16 : duration,
        delay: reduce ? 0 : delay,
        ease: easePremium,
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  as: Tag = "p",
  children,
  className,
  delay = 0,
  duration = 0.75,
  stagger = 0.08,
}: IRevealTextProps) {
  const reduce = useReducedMotion();
  const lines = Children.toArray(children);

  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <span key={index} className="reveal-line">
          <motion.span
            className="reveal-line__inner"
            initial={reduce ? false : { y: "110%" }}
            whileInView={reduce ? undefined : { y: "0%" }}
            viewport={revealViewport}
            transition={{
              duration: reduce ? 0.16 : duration,
              delay: reduce ? 0 : delay + index * stagger,
              ease: easePremium,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function RevealImage({
  children,
  className,
  delay = 0,
  duration = 0.75,
  y = 24,
  x = 0,
  scale = 1,
}: IRevealImageProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, x, scale }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={revealViewport}
      transition={{
        duration: reduce ? 0.16 : duration,
        delay: reduce ? 0 : delay,
        ease: easePremium,
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.07,
  delay = 0,
  as = "div",
}: IStaggerProps) {
  const reduce = useReducedMotion();
  const Tag = as === "dl" ? motion.dl : motion.div;

  return (
    <Tag
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={revealViewport}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  y = 18,
  x = 0,
  duration = 0.62,
}: IStaggerItemProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0, y, x },
              show: {
                opacity: 1,
                y: 0,
                x: 0,
                transition: { duration, ease: easePremium },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function LocaleTransition({ children, locale }: ILocaleTransitionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      key={locale}
      initial={reduce ? false : { opacity: 0.94 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduce ? 0.12 : 0.24, ease: easePremium }}
    >
      {children}
    </motion.div>
  );
}
