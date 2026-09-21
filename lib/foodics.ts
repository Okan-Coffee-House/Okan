export function getOrderUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_FOODICS_ORDER_URL?.trim();
  return url ? url : null;
}

export function isOrderingEnabled(): boolean {
  return getOrderUrl() !== null;
}
