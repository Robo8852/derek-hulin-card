# Project Notes / TODOs

## Derek Hulin — Peacock Premier Painting Digital Business Card

This card was cloned from the David Whitmire template and rebranded for **Peacock Premier Painting**. All company copy is verbatim from the **Peacock Premier Painting website** (peacockpremierpainting.com, built with Lovable.app). The following are flagged for awareness:

- **Derek's title** — unknown. Derek Hulin is mentioned as the owner/contact on the website but has no stated title. `src/components/Identity.tsx` shows a generic badge "Painting & Coatings" instead of a role. `TITLE:` was omitted from `public/Derek-Hulin.vcf`. Do not invent a title.

- **Email addresses** — the website uses two email addresses:
  - `info@peacockpremierpainting.com` — main contact (used on this card)
  - `contact@email.peacockpremierpainting.com` — contact form mailer
  Only one is used on the card; flagging the inconsistency for client awareness.

- **AI-built site flagged** — Peacock Premier Painting's website was built with Lovable.app (AI website builder). The service-tile images and the 3 testimonials (Madeline Coseli, Gary Waverly, Megan Ross) are hardcoded on the live site. All copy is verbatim from the site, but the material itself carries the same AI-generation context as the source. Card ships with this content FLAGGED for client confirmation.

- **No socials** — no social media links appear on the website, so `Socials.tsx` was deleted and no social profiles were added to the vCard.

- **No social proof metadata** — no license number, years-established, or legal credentials on the website. "Licensed & insured" is stated in the Why Choose section, but no specific license numbers are provided. Do not invent any.

- **Gallery / Lightbox deleted** — the website's "portfolio" fails verification as real job
  photography: its 7 "projects" are only 4 unique images (byte-identical files reused under
  different project names, e.g. "Modern Coastal Living Room" = "Ranch Residence" = "Master
  Suite Makeover"), each also doubling as a service-category image, and the og:image is an
  AI-looking house render. `Gallery.tsx` and `Lightbox.tsx` were deleted; the hero band is a
  plain navy-to-background gradient with a gold hairline. The 4 images ARE still used on the
  service tiles (mirroring the live site's own use) — swap in real photos when they exist.

- **og:image / icons** — `og:image` is a rasterized 1200×630 PNG of the peacock mark
  (`public/assets/og-image.png`) at the absolute deployed URL; favicon and apple-touch-icon
  were regenerated from the mark. Update the og:image URL if a custom domain is attached.

- **Canonical URL** — `src/lib/site.ts` hardcodes `https://derek-hulin-card.vercel.app` (used by the Connect SMS and Share buttons). Update it if a custom domain is attached.

## Footer agency credit needs its link restored

The footer says "Card by **Proclaim Agency**" but is intentionally **plain text, not a link** right now. The old link pointed to `https://costadelsolweb.com`, which is the wrong site for the Proclaim Agency branding. Once the correct Proclaim Agency URL exists/is decided:

1. Edit `src/components/Footer.tsx` — wrap the agency name back in an `<a>` with
   `target="_blank" rel="noopener"` and the classes `font-semibold text-primary no-underline`.
2. Remove this section from the notes.
