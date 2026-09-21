import type { TGalleryArea, TGalleryCaptionKey } from "@/types";

export const SCROLL_HEADER_THRESHOLD = 24;

export const COFFEE_FACT_KEYS = [
  "country",
  "region",
  "process",
  "roast",
  "bestFor",
  "altitude",
] as const;

export const BREW_METHOD_KEYS = ["v60", "espresso", "milk"] as const;

export const BREW_FACT_KEYS = ["bestFor", "style", "servedAs"] as const;

export const MENU_CATEGORY_KEYS = [
  "filter",
  "milk",
  "espresso",
  "tea",
  "dessert",
  "seasonal",
] as const;

export const GALLERY_LAYOUT: Array<{
  captionKey: TGalleryCaptionKey;
  area: TGalleryArea;
}> = [
  { captionKey: "morning", area: "terrace" },
  { captionKey: "close", area: "window" },
  { captionKey: "toGo", area: "takeaway" },
  { captionKey: "street", area: "street" },
  { captionKey: "details", area: "door" },
  { captionKey: "outsideOkan", area: "planter" },
];
