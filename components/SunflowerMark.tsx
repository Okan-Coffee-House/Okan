import { cn } from "@/lib/utils";
import type { ISunflowerMarkProps } from "@/types";

const RAYS = [
  { x1: 23.2, y1: 16, x2: 29.4, y2: 16 },
  { x1: 22.24, y1: 19.6, x2: 27.6, y2: 22.7 },
  { x1: 19.6, y1: 22.24, x2: 22.7, y2: 27.6 },
  { x1: 16, y1: 23.2, x2: 16, y2: 29.4 },
  { x1: 12.4, y1: 22.24, x2: 9.3, y2: 27.6 },
  { x1: 9.76, y1: 19.6, x2: 6.4, y2: 22.7 },
  { x1: 8.8, y1: 16, x2: 2.6, y2: 16 },
  { x1: 9.76, y1: 12.4, x2: 6.4, y2: 9.3 },
  { x1: 12.4, y1: 9.76, x2: 9.3, y2: 6.4 },
  { x1: 16, y1: 8.8, x2: 16, y2: 2.6 },
  { x1: 19.6, y1: 9.76, x2: 22.7, y2: 6.4 },
  { x1: 22.24, y1: 12.4, x2: 27.6, y2: 9.3 },
] as const;

export function SunflowerMark({ className, accent = false }: ISunflowerMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("overflow-visible", className)}
      aria-hidden="true"
      focusable="false"
    >
      {RAYS.map((ray) => (
        <line
          key={`${ray.x1}-${ray.y1}`}
          x1={ray.x1}
          y1={ray.y1}
          x2={ray.x2}
          y2={ray.y2}
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
      ))}
      <circle
        cx="16"
        cy="16"
        r="3.1"
        fill={accent ? "var(--okan-sunflower)" : "currentColor"}
      />
    </svg>
  );
}
