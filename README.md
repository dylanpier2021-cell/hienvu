# Hien Vu Nails, Champaign IL

A fast, single-page marketing website for **Hien Vu** (sole proprietor), a luxury nail
salon in Champaign, Illinois. One scrolling home page plus two legal pages
(`/privacy` and `/terms`), pre-rendered to static HTML for full Google
indexability and top Lighthouse scores.

Built with Vite, React, TypeScript and Tailwind CSS, pre-rendered with
`vite-react-ssg`. Fonts are self-hosted (Playfair Display and Montserrat).

## Quick start

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:5173
npm run build      # pre-render to static HTML in /dist, then write sitemap.xml
npm run preview    # preview the production build locally
```

Other useful scripts:

```bash
npm run typecheck     # TypeScript, no emit
npm run lint:emdash   # fails if any em dash or en dash sneaks into source
npm run assets        # regenerate favicon, app icons, og-image.png, manifest
```

## Where to paste the GoHighLevel embeds

All GoHighLevel (GHL) settings live in **one file**: [`src/data/booking.ts`](src/data/booking.ts).

| Constant | What to paste | Where to find it in GHL |
| --- | --- | --- |
| `GHL_BOOKING_SRC` | The calendar widget iframe `src` | Calendars > your calendar > share / embed, copy the iframe `src` |
| `GHL_FORM_SRC` | A lead / contact form iframe `src` (optional) | Sites > Forms > your form > Integrate > Embed, copy the iframe `src` |
| `GHL_CHAT_WIDGET_SRC` | The chat widget loader script `src` (optional) | Sites > Chat Widget > copy the script `src`. Leave `''` to keep chat off |

The booking calendar and form are **lazy-loaded** (they only mount when the
booking section scrolls into view) so they never block first paint. Until
`GHL_BOOKING_SRC` is filled in, the booking section shows a clear **Call to Book**
fallback. A Call to Book button always appears under the widget as well.

The chat widget script (when set) is injected with `defer` and only after the
browser is idle, so it never competes with first paint. If your chat snippet has
extra `data-*` attributes, add them to the `attrs` object in
[`src/components/ChatWidget.tsx`](src/components/ChatWidget.tsx).

### Native request form

There is also a built-in, A2P 10DLC compliant "Request an appointment" form
(name, phone, optional email, message, and a required, unchecked SMS consent
checkbox). To capture submissions server-side, set `CONTACT_ENDPOINT` in
[`src/data/booking.ts`](src/data/booking.ts) to a backend you control (a GHL
inbound webhook, Formspree, etc.). If left blank, the form opens the guest's
email app with the details pre-filled to the salon address.

## Editing content

Content is centralized so you rarely touch components:

- [`src/data/business.ts`](src/data/business.ts) name, address, phone, email, hours, service areas, **production domain (`SITE_URL`)**
- [`src/data/services.ts`](src/data/services.ts) service cards
- [`src/data/pricing.ts`](src/data/pricing.ts) the price menu
- [`src/data/reviews.ts`](src/data/reviews.ts) featured reviews
- [`src/data/faqs.ts`](src/data/faqs.ts) FAQ items (also drives FAQ schema)

## Before you launch

1. **Set the real domain.** Update `SITE_URL` in
   [`src/data/business.ts`](src/data/business.ts) **and** the matching `SITE_URL`
   in [`scripts/generate-sitemap.mjs`](scripts/generate-sitemap.mjs) and the
   `Sitemap:` line in [`public/robots.txt`](public/robots.txt). These drive
   canonical tags, Open Graph URLs and the sitemap.
2. **Verify the map coordinates** in `business.ts` (`geo`) against the real
   location if you want exact pin placement.
3. **Paste the GHL embed URLs** (see above).
4. Run `npm run build` and deploy the `/dist` folder to any static host
   (Netlify, Vercel, Cloudflare Pages, etc.). Configure the host to serve
   `404.html` for unknown routes.

## What ships

- `index.html` per route with a unique title, meta description and canonical
- `sitemap.xml` (home, privacy, terms) and `robots.txt`
- `NailSalon` / `LocalBusiness`, `WebSite` and `FAQPage` JSON-LD (only for
  content visible on the page)
- Favicon, app icons and an Open Graph image (regenerate with `npm run assets`)

## Accessibility and SEO notes

- One `<h1>` per page, semantic landmarks, skip-to-content link, visible focus
  states, `prefers-reduced-motion` support.
- Hero image and fonts are preloaded; images are WebP with explicit width and
  height to keep layout shift near zero.
- No em dashes in visible text (enforced by `npm run lint:emdash`).
- Only the 404 page is `noindex`.
