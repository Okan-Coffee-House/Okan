import type { IPhotoAsset } from "@/types";

/**
 * Swap files in /public/images using these exact names.
 * Photo components fall back gracefully if a file is missing.
 */
export const photos = {
  hero: {
    src: "/images/okan-hero.jpg",
    alt: "Morning light across a quiet coffee bar of wood and marble.",
    caption: "Morning light",
    fallback: "morning",
  },
  story: {
    src: "/images/story-01.jpg",
    alt: "A sunlit seating corner with a wood table and two chairs.",
    caption: "The room, unhurried",
    fallback: "morning",
  },
  spaceWide: {
    src: "/images/space-01.jpg",
    alt: "A wide view of the cafe interior with long wooden tables and natural light.",
    caption: "Open space, quiet architecture",
    fallback: "wood",
  },
  spaceDetail: {
    src: "/images/space-02.jpg",
    alt: "Close detail of marble, oak, and a ceramic cup in morning light.",
    caption: "Marble, oak, ceramic",
    fallback: "stone",
  },
  beans: {
    src: "/images/coffee-beans.jpg",
    alt: "Roasted coffee beans in a ceramic bowl on wood.",
    caption: "Origin and character",
    fallback: "coffee",
  },
  extraction: {
    src: "/images/extraction.jpg",
    alt: "Pour-over coffee extraction on a marble bar.",
    caption: "Precision, without hurry",
    fallback: "coffee",
  },
  serving: {
    src: "/images/serving.jpg",
    alt: "A ceramic cup of coffee set down on a wooden table.",
    caption: "Attention in the small details",
    fallback: "coffee",
  },
  experience: {
    src: "/images/experience.jpg",
    alt: "Two coffee cups on a sunlit table, chairs drawn for conversation.",
    caption: "The moment around the cup",
    fallback: "morning",
  },
  sunflower: {
    src: "/images/sunflower.jpg",
    alt: "A single sunflower turning toward warm light.",
    caption: "Always toward the light",
    fallback: "sunflower",
  },
  marble: {
    src: "/images/material-marble.jpg",
    alt: "Close view of pale stone with soft veining.",
    fallback: "stone",
  },
  wood: {
    src: "/images/material-wood.jpg",
    alt: "Close view of warm oak grain.",
    fallback: "wood",
  },
  tile: {
    src: "/images/material-tile.jpg",
    alt: "Close view of dark matte tile.",
    fallback: "earth",
  },
  earth: {
    src: "/images/material-earth.jpg",
    alt: "Close view of earthy brick and clay.",
    fallback: "earth",
  },
  moments: [
    {
      src: "/images/moment-01.jpg",
      alt: "Hands holding a ceramic coffee cup on a wooden table.",
      caption: "Held, not hurried",
      fallback: "coffee",
    },
    {
      src: "/images/moment-02.jpg",
      alt: "A cafe table in morning light with a cup and open book.",
      caption: "A slower table",
      fallback: "morning",
    },
    {
      src: "/images/moment-03.jpg",
      alt: "Sunlight across cream plaster and warm brick.",
      caption: "Wall, light, earth",
      fallback: "earth",
    },
    {
      src: "/images/moment-04.jpg",
      alt: "Close view of dark coffee in a ceramic cup.",
      caption: "The cup, close",
      fallback: "coffee",
    },
    {
      src: "/images/moment-05.jpg",
      alt: "A small sunflower in a ceramic vessel on a cafe table.",
      caption: "A little light",
      fallback: "sunflower",
    },
    {
      src: "/images/moment-06.jpg",
      alt: "Empty wooden chairs in a wash of morning sunlight.",
      caption: "Room for lingering",
      fallback: "wood",
    },
  ],
} as const satisfies Record<string, IPhotoAsset | readonly IPhotoAsset[]>;
