# OKAN website — build report

Date: 21 September 2026

This is what is live in the repo now: a production-quality marketing site for OKAN Coffee House, with English and Arabic, Kuwait business data, and the original editorial look preserved.

## What was built

### Site

- Next.js App Router homepage plus a menu route
- Visual language: cream, ink, olive, restrained sunflower yellow, Instrument Sans (English), IBM Plex Sans Arabic (Arabic)
- Homepage sections: Hero, brand statement, story, space, materials, coffee journey, menu preview, gallery, sunflower moment, visit, footer
- Motion on enter and scroll, with reduced-motion support
- Skip link, focus states, semantic headings, CafeOrCoffeeShop JSON-LD
- `robots.ts`, `sitemap.ts` (both locales), Open Graph image (Salmiya, Kuwait)
- Foodics-ready Order Online: the button is visible but disabled until `NEXT_PUBLIC_FOODICS_ORDER_URL` is set
- Concept photography in `public/images/` (placeholders, not client photos)

### Architecture (aligned with project coding rules, without LMS/Nexa/jods)

Those LMS rules belong to another codebase. Applying them here would change the look. What was applied from the rules, in a way that fits this site:

- Types live in `types/` (`I*` interfaces, `T*` types, no `any`)
- Business and UI constants live in `constants/`
- Copy is centralized, not scattered through components
- Existing components were reused instead of duplicating UI
- No extra npm dependencies (no `next-intl`)
- Path aliases use `@/`

Key files:

| Area | Location |
| --- | --- |
| Business NAP / hours / Instagram / maps | `constants/okan.ts` |
| Locales | `constants/locales.ts` |
| English copy | `content/messages/en.ts` |
| Arabic copy | `content/messages/ar.ts` |
| Shared types | `types/index.ts` |
| Locale helpers | `lib/locale.ts` |
| Locale routing (`/` → `/en`) | `proxy.ts` |
| Pages | `app/[locale]/page.tsx`, `app/[locale]/menu/page.tsx` |

### Languages

- `/en` LTR, Instrument Sans
- `/ar` RTL, IBM Plex Sans Arabic, logical CSS (`start` / `end`)
- Quiet `EN / ع` switcher in the header and mobile menu
- `hreflang` alternates on homepage and menu
- HTML `lang` and `dir` set from the active locale

### Corrected business facts

Replaced earlier placeholder location data with:

- OKAN COFFEE HOUSE, Salmiya, Hawalli Governorate, Kuwait
- Plus Code `82QX+HXM`
- Coordinates `29.3389192, 48.0498085`
- Google Place ID `ChIJRaZSBgCdzz8RPW42m0c0gM8`
- Daily hours `7:00 AM – 12:00 AM`
- Instagram [okancoffee](https://www.instagram.com/okancoffee/)
- Currency KWD, timezone Asia/Kuwait

Schema.org now includes address, geo, opening hours, map URL, and Instagram `sameAs`.

## What still looks the same

English layout, photography, type scale, cream/ink palette, and section rhythm are unchanged. Arabic uses the same composition with RTL mirroring and an Arabic typeface.

The wordmark still reads **OKAN** in Latin letters on both languages, waiting for the real logo.

## Still needed from you

These are the remaining client/assets gaps. The site is designed so they can drop in without a redesign.

1. **Logo** — you said this is coming. Wordmark + sunflower mark is the stand-in.
2. **Foodics order URL** — `NEXT_PUBLIC_FOODICS_ORDER_URL`. Until this exists, Order Online stays disabled.
3. **Phone number** — `NEXT_PUBLIC_PHONE`. Call CTA stays hidden until set.
4. **WhatsApp URL** — `NEXT_PUBLIC_WHATSAPP_URL`. Same as phone.
5. **Google Business Profile URL** (optional) — maps already work from the Place ID; this is only for schema `sameAs`.
6. **Street / building name** if you have one beyond the Plus Code (unit, block, street).
7. **Real photography** — replace files in `public/images/` using the same filenames (see README).
8. **Exact brand HEX** if cream / ink / sunflower should match print or interiors more tightly than the current tokens.
9. **Arabic copy review** — current Arabic is complete and usable; a native pass on tone is still worth it.
10. **Menu drink names in Arabic** — category labels are translated; item names (Espresso, V60, Flat White, etc.) are still English, which is common for specialty coffee. Say if you want them localized.
11. **Production site URL** — `NEXT_PUBLIC_SITE_URL` for canonicals, sitemap, and OG.
12. **Analytics IDs** — only if you want GA / Meta Pixel. Nothing loads until IDs are set.
13. **Favicon / app icons based on the real logo** — current icons are generated marks.

## How to run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open `/en` and `/ar`.
