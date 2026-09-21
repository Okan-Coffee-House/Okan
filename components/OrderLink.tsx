import { cn } from "@/lib/utils";
import type { IOrderLinkProps } from "@/types";

export function OrderLink({ href, className, children }: IOrderLinkProps) {
  if (!href) {
    return (
      <span className={cn(className, "cursor-not-allowed opacity-40")} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
