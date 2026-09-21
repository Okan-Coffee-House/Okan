/**
 * Analytics is intentionally inactive in v1.
 *
 * When the client provides IDs, load scripts from the root layout only if
 * these values are present. Do not inject tracking without configuration.
 *
 * TODO: NEXT_PUBLIC_GA_ID
 * TODO: NEXT_PUBLIC_META_PIXEL_ID
 */
export function getAnalyticsConfig() {
  return {
    gaId: process.env.NEXT_PUBLIC_GA_ID?.trim() || null,
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || null,
  };
}

export function isAnalyticsEnabled() {
  const { gaId, metaPixelId } = getAnalyticsConfig();
  return Boolean(gaId || metaPixelId);
}
