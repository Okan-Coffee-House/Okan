import type { IMenuData } from "@/types";

export const mockMenu: IMenuData = {
  categories: [
    {
      id: "espresso",
      name: "Espresso",
      items: [
        { name: "Espresso" },
        { name: "Americano" },
        { name: "Macchiato" },
      ],
    },
    {
      id: "filter",
      name: "Filter",
      items: [{ name: "V60" }, { name: "Batch Brew" }],
    },
    {
      id: "milk",
      name: "Milk",
      items: [
        { name: "Flat White" },
        { name: "Latte" },
        { name: "Cortado" },
      ],
    },
    {
      id: "tea",
      name: "Tea",
      items: [{ name: "Matcha" }, { name: "Tea" }],
    },
  ],
};
