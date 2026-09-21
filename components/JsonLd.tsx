import { cafeJsonLd } from "@/lib/schema";
import type { IJsonLdProps } from "@/types";

export function JsonLd({ dictionary }: IJsonLdProps) {
  const jsonLd = cafeJsonLd(dictionary);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
