import { cn } from "@/lib/utils";
import type { IOrderLinkProps } from "@/types";

export function OrderLink({ href, className, children }: IOrderLinkProps) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
    >
      {children}
    </a>
  );
}
