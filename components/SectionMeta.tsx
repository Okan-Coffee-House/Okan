import { cn } from "@/lib/utils";
import type { ISectionMetaProps } from "@/types";

export function SectionMeta({
  number,
  label,
  className,
  light = false,
}: ISectionMetaProps) {
  return (
    <p className={cn("kicker mb-5 flex items-center gap-4", light && "text-cream/70", className)}>
      <span>{number}</span>
      <span
        className={cn("h-px w-8", light ? "bg-cream/25" : "bg-line")}
        aria-hidden="true"
      />
      <span>{label}</span>
    </p>
  );
}
