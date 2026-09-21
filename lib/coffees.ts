import { coffeeSelections } from "@/content/coffees";
import type { ICoffeeSelection } from "@/types";

export function isDisplayableCoffee(coffee: ICoffeeSelection): boolean {
  return coffee.verified && coffee.sourceUrl.trim().length > 0;
}

export function getVerifiedCoffees(): ICoffeeSelection[] {
  return coffeeSelections.filter(isDisplayableCoffee);
}
