"use client";

import { createContext, useContext, useEffect } from "react";
import { getNav } from "@/content/site";
import { getDirection } from "@/lib/locale";
import type { ILocaleContextValue, ILocaleProviderProps } from "@/types";

const LocaleContext = createContext<ILocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: ILocaleProviderProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getDirection(locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, dictionary }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext(): ILocaleContextValue {
  const value = useContext(LocaleContext);
  if (!value) {
    throw new Error("useLocaleContext must be used within LocaleProvider");
  }
  return value;
}

export function useSite() {
  const { locale, dictionary } = useLocaleContext();
  return {
    locale,
    dictionary,
    nav: getNav(locale, dictionary),
  };
}
