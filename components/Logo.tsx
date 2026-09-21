import Image from "next/image";
import { OKAN } from "@/constants/okan";
import { cn } from "@/lib/utils";
import type { ILogoProps } from "@/types";

export function Logo({ className, markClassName, variant = "color", priority }: ILogoProps) {
  const isReverse = variant === "reverse";

  return (
    <span
      className={cn("logo-lockup", isReverse ? "text-okan-cream" : "text-okan-ink", className)}
    >
      <Image
        src={isReverse ? OKAN.logoMarkReverseSrc : OKAN.logoMarkSrc}
        alt=""
        width={367}
        height={1102}
        priority={priority}
        className={cn("logo-mark", markClassName)}
        sizes="28px"
        unoptimized
        style={{ width: "auto" }}
      />
      <span className="wordmark">{OKAN.shortName}</span>
    </span>
  );
}
