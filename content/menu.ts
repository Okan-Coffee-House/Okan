import type { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
  {
    id: "v60",
    category: "filter",
    nameEn: "V60",
    nameAr: "V60",
    descriptionEn: "Ask the bar what’s currently brewing.",
    descriptionAr: "اسأل البار عما يُحضَّر الآن.",
    featured: true,
    verified: true,
  },
  {
    id: "espresso",
    category: "espresso",
    nameEn: "Espresso",
    nameAr: "إسبرسو",
    descriptionEn: "Espresso, served short.",
    descriptionAr: "إسبرسو، يُقدَّم قصيرًا.",
    verified: true,
  },
  {
    id: "flat-white",
    category: "milk",
    nameEn: "Flat White",
    nameAr: "فلات وايت",
    descriptionEn: "Espresso with milk, in a smaller cup.",
    descriptionAr: "إسبرسو مع حليب، في كوب أصغر.",
    verified: true,
  },
  {
    id: "cortado",
    category: "milk",
    nameEn: "Cortado",
    nameAr: "كورتادو",
    descriptionEn: "A shorter milk drink.",
    descriptionAr: "مشروب حليب أقصر.",
    verified: true,
  },
];
