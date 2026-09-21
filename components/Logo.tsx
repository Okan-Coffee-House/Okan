import { OKAN } from "@/constants/okan";
import { cn } from "@/lib/utils";
import type { ILogoProps } from "@/types";

export function Logo({ className, markClassName, variant = "color" }: ILogoProps) {
  const isReverse = variant === "reverse";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        isReverse ? "text-okan-cream" : "text-okan-ink",
        className,
      )}
    >
      {/* Brand SVG is already vector; next/image does not optimize it. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={isReverse ? OKAN.logoReverseSrc : OKAN.logoColorSrc}
        alt=""
        className={cn("h-10 w-auto", markClassName)}
        aria-hidden="true"
      />
      <span className="text-[0.82rem] font-semibold tracking-[0.28em]">
        {OKAN.shortName}
      </span>
    </span>
  );
}
