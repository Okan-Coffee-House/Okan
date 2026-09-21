"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/constants/locales";
import { useLocaleContext } from "@/components/LocaleProvider";
import { switchLocalePath } from "@/lib/locale";
import { cn } from "@/lib/utils";
import type { ILanguageSwitchProps } from "@/types";

export function LanguageSwitch({ className }: ILanguageSwitchProps) {
  const pathname = usePathname();
  const { locale, dictionary } = useLocaleContext();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {LOCALES.map((item, index) => (
        <span key={item} className="flex items-center gap-2">
          {index > 0 ? (
            <span className="text-okan-olive/50" aria-hidden="true">
              /
            </span>
          ) : null}
          <Link
            href={switchLocalePath(pathname, item)}
            hrefLang={item}
            lang={item}
            className={cn(
              "lang-link text-[0.72rem] tracking-[0.18em] uppercase",
              item === locale ? "text-okan-ink" : "text-okan-olive hover:text-okan-ink",
            )}
            aria-current={item === locale ? "true" : undefined}
          >
            {dictionary.language[item]}
          </Link>
        </span>
      ))}
    </div>
  );
}
