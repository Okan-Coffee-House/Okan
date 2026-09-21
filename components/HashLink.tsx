"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { resolveNavHref } from "@/lib/locale";
import type { IHashLinkProps } from "@/types";

const MIN_DURATION = 380;
const MAX_DURATION = 700;

let scrollFrame = 0;
let removeInterrupt: (() => void) | null = null;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function easeOkan(t: number) {
  return 1 - (1 - t) ** 4;
}

export function headerOffset() {
  const value = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
  );
  return Number.isFinite(value) ? value : 72;
}

function cancelAnimatedScroll() {
  if (scrollFrame) {
    window.cancelAnimationFrame(scrollFrame);
    scrollFrame = 0;
  }
  if (removeInterrupt) {
    removeInterrupt();
    removeInterrupt = null;
  }
}

function listenForInterrupt() {
  const stop = () => cancelAnimatedScroll();
  const onKey = (event: KeyboardEvent) => {
    if (
      ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Escape"].includes(
        event.key,
      )
    ) {
      stop();
    }
  };

  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", onKey);
  removeInterrupt = () => {
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", onKey);
  };
}

export function smoothScrollTo(top: number) {
  if (prefersReducedMotion()) {
    cancelAnimatedScroll();
    window.scrollTo({ top, behavior: "auto" });
    return;
  }

  cancelAnimatedScroll();
  const start = window.scrollY;
  const delta = top - start;
  if (Math.abs(delta) < 2) {
    return;
  }

  const duration = Math.min(MAX_DURATION, Math.max(MIN_DURATION, Math.abs(delta) * 0.32));
  const startedAt = performance.now();
  listenForInterrupt();

  const step = (now: number) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    window.scrollTo({ top: start + delta * easeOkan(progress), behavior: "auto" });
    if (progress < 1) {
      scrollFrame = window.requestAnimationFrame(step);
      return;
    }
    cancelAnimatedScroll();
  };

  scrollFrame = window.requestAnimationFrame(step);
}

function scrollToId(id: string, instant = false) {
  const element = document.getElementById(id);
  if (!element) {
    return false;
  }

  const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - headerOffset());
  if (instant || prefersReducedMotion()) {
    cancelAnimatedScroll();
    window.scrollTo({ top, behavior: "auto" });
  } else {
    smoothScrollTo(top);
  }
  return true;
}

function scrollToCurrentHash(instant = true) {
  const id = window.location.hash.slice(1);
  if (!id) {
    return false;
  }

  return scrollToId(id, instant);
}

export function HashScroll() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const interval = window.setInterval(() => scrollToCurrentHash(true), 50);
    const timeout = window.setTimeout(() => {
      window.clearInterval(interval);
    }, 1200);

    scrollToCurrentHash(true);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, []);

  return null;
}

export function useHashNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (href: string) => {
    const resolved = resolveNavHref(pathname, href);
    const hashIndex = resolved.indexOf("#");

    if (hashIndex === -1) {
      router.push(resolved);
      return;
    }

    const path = resolved.slice(0, hashIndex).replace(/\/$/, "");
    const hash = resolved.slice(hashIndex);
    const current = pathname.replace(/\/$/, "") || "/";
    const target = path || current;

    if (target === current) {
      scrollToId(hash.slice(1));
      window.history.pushState(null, "", `${current}${hash}`);
      return;
    }

    router.push(`${target}${hash}`, { scroll: false });

    const id = hash.slice(1);
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      if (scrollToId(id)) {
        window.clearInterval(timer);
      }

      if (Date.now() - startedAt > 1200) {
        window.clearInterval(timer);
      }
    }, 50);
  };
}

export function HashLink({
  href,
  className,
  children,
  onNavigate,
  ariaCurrent,
}: IHashLinkProps) {
  const pathname = usePathname();
  const navigate = useHashNavigation();
  const resolved = resolveNavHref(pathname, href);

  return (
    <a
      href={resolved}
      className={className}
      aria-current={ariaCurrent}
      onClick={(event) => {
        event.preventDefault();
        onNavigate?.();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}
