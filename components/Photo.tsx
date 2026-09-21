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
}: IPhotoProps) {
  const [hasFailed, setHasFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-warm", className)}>
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
          className={cn("object-cover", imageClassName)}
          onError={() => setHasFailed(true)}
        />
      ) : null}
    </div>
  );
}
