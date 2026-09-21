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
- `content/menu.ts` — mock menu until Foodics is connected
- `content/images.ts` — image paths, alt text, captions
- `.env.local` — Foodics order URL, optional phone / WhatsApp / analytics

## Replace photography

Drop client files into `public/images/` using the same filenames:

- `okan-hero.jpg`
- `story-01.jpg`
- `space-01.jpg`, `space-02.jpg`
- `coffee-beans.jpg`, `extraction.jpg`, `serving.jpg`, `experience.jpg`
- `sunflower.jpg`
- `moment-01.jpg` … `moment-06.jpg`
- `material-marble.jpg`, `material-wood.jpg`, `material-tile.jpg`, `material-earth.jpg`

Current images are concept placeholders, not production client photography.

## Notes

- Order Online stays disabled until `NEXT_PUBLIC_FOODICS_ORDER_URL` is set.
- Analytics scripts are not loaded until measurement IDs are provided.
- See `OKAN-BUILD-REPORT.md` for what is built and what is still needed from the client.
