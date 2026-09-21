# OKAN

Warm editorial website for OKAN Coffee House in Salmiya, Kuwait.

English: `/en` · Arabic (RTL): `/ar` · `/` redirects to `/en`.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editable content

- `constants/okan.ts` — name, address, hours, Instagram, maps, geo
- `content/messages/en.ts` and `content/messages/ar.ts` — page copy
- `content/coffees.ts` — current V60 / espresso coffees (hidden until `verified: true` with a `sourceUrl`)
- `constants/content.ts` — `HAS_VERIFIED_MENU` (keep false until a real menu is uploaded)
- `content/images.ts` — image paths, alt text, captions
- `.env.local` — Foodics order URL, optional WhatsApp / analytics

## Replace photography

Drop files into `public/` using the same paths as `content/images.ts`:

- `hero/hero-v60.webp`
- `images/coffee-v60.webp`, `coffee-v60-bar.webp`, `coffee-espresso.webp`, `flat-white.webp`
- `images/warm-scandinavian-cafe-interior.webp`, `sunlit-minimalist-cafe-nook.webp`
- `images/sunlit-okan-coffee-house-patio.webp`, `sunlit-minimalist-coffee-bar.webp`
- `images/sunlit-sunflower-coffee-nook.webp`
- gallery stills listed under `photos.moments`

Current images are concept placeholders, not production client photography.

## Notes

- Order Online is hidden until `NEXT_PUBLIC_FOODICS_ORDER_URL` is set.
- WhatsApp is hidden until `NEXT_PUBLIC_WHATSAPP_URL` is set.
- View Full Menu is hidden until `HAS_VERIFIED_MENU` is true.
- Analytics scripts are not loaded until measurement IDs are provided.
