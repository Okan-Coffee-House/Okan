"use client";

import { useLocaleContext } from "@/components/LocaleProvider";

export function SkipLink() {
  const { dictionary } = useLocaleContext();

  return (
    <a href="#content" className="skip-link">
      {dictionary.a11y.skip}
    </a>
  );
}
