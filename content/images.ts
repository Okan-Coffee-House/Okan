import type { IPhotoAsset } from "@/types";

function asset(photo: IPhotoAsset): IPhotoAsset {
  return photo;
}

export const photos = {
  hero: asset({
    src: "/hero/hero-v60.webp",
    alt: "V60 pour-over brewing at the bar at OKAN Coffee House, Salmiya",
    fallback: "coffee",
    width: 3200,
    height: 2000,
  }),
  coffeeV60: asset({
    src: "/images/coffee-v60.webp",
    alt: "V60 pour-over brewing into a glass server",
    fallback: "coffee",
    width: 1122,
    height: 1402,
  }),
  coffeeEspresso: asset({
    src: "/images/coffee-espresso.webp",
    alt: "Espresso extracting at the OKAN bar",
    fallback: "coffee",
    width: 1122,
    height: 1402,
  }),
  coffeeBar: asset({
    src: "/images/coffee-v60-bar.webp",
    alt: "V60 being prepared at the OKAN bar",
    fallback: "coffee",
    width: 1672,
    height: 941,
  }),
  coffeeMilk: asset({
    src: "/images/flat-white.webp",
    alt: "A flat white with latte art in an OKAN cup",
    fallback: "morning",
    width: 1122,
    height: 1402,
  }),
  spaceWide: asset({
    src: "/images/warm-scandinavian-cafe-interior.webp",
    alt: "Warm wood, natural light and seating inside OKAN Coffee House",
    fallback: "wood",
    width: 1122,
    height: 1402,
  }),
  spaceNook: asset({
    src: "/images/sunlit-minimalist-cafe-nook.webp",
    alt: "Sunlit seating corner inside OKAN",
    fallback: "morning",
    width: 1122,
    height: 1402,
  }),
  spaceOutdoor: asset({
    src: "/images/sunlit-okan-coffee-house-patio.webp",
    alt: "Outdoor seating at OKAN Coffee House",
    fallback: "wood",
    width: 1536,
    height: 1024,
  }),
  spaceBar: asset({
    src: "/images/sunlit-minimalist-coffee-bar.webp",
    alt: "The coffee bar at OKAN",
    fallback: "wood",
    width: 1122,
    height: 1402,
  }),
  sunflower: asset({
    src: "/images/sunlit-sunflower-coffee-nook.webp",
    alt: "A sunflower in a ceramic vase with coffee on a sunlit table",
    fallback: "sunflower",
    width: 1586,
    height: 992,
  }),
  moments: [
    asset({
      src: "/images/sunlit-okan-coffee-house-terrace.webp",
      alt: "OKAN Coffee House exterior in warm morning light",
      fallback: "wood",
      width: 1122,
      height: 1402,
    }),
    asset({
      src: "/images/sunlit-cafe-coffee-by-the-window.webp",
      alt: "Coffee by the window at OKAN",
      fallback: "morning",
      width: 1122,
      height: 1402,
    }),
    asset({
      src: "/images/okan-coffee-house-takeaway-moment.webp",
      alt: "OKAN takeaway coffee outside the coffee house",
      fallback: "coffee",
      width: 1032,
      height: 1122,
    }),
    asset({
      src: "/images/sunlit-okan-cafe-streetfront.webp",
      alt: "Streetfront of OKAN Coffee House",
      fallback: "wood",
      width: 853,
      height: 1402,
    }),
    asset({
      src: "/images/sunlit-cafe-door-with-patterned-scarf.webp",
      alt: "Wooden entrance detail at OKAN",
      fallback: "stone",
      width: 1122,
      height: 1402,
    }),
    asset({
      src: "/images/sunlit-cafe-front-with-planter-and-bench.webp",
      alt: "Plants and seating outside OKAN",
      fallback: "earth",
      width: 1122,
      height: 1402,
    }),
  ],
} as const satisfies Record<string, IPhotoAsset | readonly IPhotoAsset[]>;
