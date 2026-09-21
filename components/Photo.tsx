"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { IPhotoProps } from "@/types";

export function Photo({
  photo,
  className,
  imageClassName,
  sizes,
  priority = false,
  quality = 75,
  tone = "editorial",
}: IPhotoProps) {
  const [hasFailed, setHasFailed] = useState(false);
  const isGraded = tone !== "plain";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-warm",
        isGraded && "okan-photo-wrap",
        tone === "sunflower" && "okan-photo-wrap--sunflower",
        className,
      )}
    >
      <div
        className={cn("absolute inset-0", `fallback-${photo.fallback}`)}
        aria-hidden="true"
      />
      {!hasFailed ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          className={cn(
            "object-cover",
            isGraded && "okan-photo",
            tone === "sunflower" && "okan-photo--sunflower",
            imageClassName,
          )}
          onError={() => setHasFailed(true)}
        />
      ) : null}
    </div>
  );
}
