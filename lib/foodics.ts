import { mockMenu } from "@/content/menu";
import { getDictionary } from "@/lib/locale";
import type { IMenuData, TLocale } from "@/types";

export function getOrderUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_FOODICS_ORDER_URL?.trim();
  return url ? url : null;
}

export function isOrderingEnabled(): boolean {
  return getOrderUrl() !== null;
}

export async function getMenu(locale: TLocale): Promise<IMenuData> {
  const dictionary = getDictionary(locale);

  return {
    categories: mockMenu.categories.map((category) => ({
      ...category,
      name: dictionary.menu.categories[category.id],
    })),
  };
}
