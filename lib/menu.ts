import { menuItems } from "@/content/menu";
import { MENU_CATEGORY_KEYS } from "@/constants/content";
import type { IMenuItem, TMenuCategory } from "@/types";

export function isDisplayableMenuItem(item: IMenuItem): boolean {
  return item.verified;
}

export function getVerifiedMenuItems(): IMenuItem[] {
  return menuItems.filter(isDisplayableMenuItem);
}

export function getMenuItemsByCategory(category: TMenuCategory): IMenuItem[] {
  return getVerifiedMenuItems().filter((item) => item.category === category);
}

export function getVisibleMenuCategories(): TMenuCategory[] {
  return MENU_CATEGORY_KEYS.filter((category) => getMenuItemsByCategory(category).length > 0);
}
