# Jejak Kota — Website & Landing Page

Static landing page for **Jejak Kota** (Voice of Movement) — urban movement,
pedestrian rights, public transport, climate, and inclusive public space.

No build step. Pure HTML/CSS/JS. Deploys anywhere.

## Project structure
```
jejak-kota-site/
├─ index.html              ← the whole page (edit content here)
├─ assets/
│  ├─ css/styles.css        ← design system + all styles
│  ├─ js/main.js            ← nav toggle, scroll effects (optional polish)
│  └─ img/logo.png          ← brand logo (replace with an SVG for crispness)
├─ vercel.json              ← Vercel config (static, no build)
└─ .gitignore
```

## How to edit content (no coding needed)
Open `index.html` and look for comments marked `EDIT:` — each one sits above the
text you can change safely:
- Hero headline & tagline
- Profile paragraph
- The 4 programs (names, descriptions, tags)
- Impact numbers — **verify these against your real records before publishing**
- Collaborator names (swap the text `<div class="collab">` blocks for `<img>` logos)
- Contact details

Brand colors live at the top of `assets/css/styles.css` under `:root` (`--navy`, `--gold`, …).

## Deploy to Vercel (recommended)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → **Add New → Project → Import** your repo.
3. Framework Preset: **Other**. Build Command: *(leave empty)*. Output Directory: `.`
4. Deploy. Done — Vercel serves it as a static site.

   *(Drag-and-drop alternative: `vercel.com` → upload the folder directly via the Vercel CLI `vercel` or the dashboard.)*

## Deploy to GitHub Pages
1. Push to GitHub.
2. Repo **Settings → Pages → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Save. Your site appears at `https://<user>.github.io/<repo>/`.

## Replace the logo
`assets/img/logo.png` is the supplied raster logo. For sharp rendering at all sizes,
export an **SVG** from your design file and update the `src` in the two `<img>` tags
(nav + footer) and the favicon `<link>`.

## Accessibility (built in)
Skip link, semantic landmarks, visible keyboard focus, `prefers-reduced-motion`
support, and alt text. If you want a full accessibility toolbar (like the reference
site), add the free OneTap plugin script — but the page is usable without it.

## If you outgrow a static site (blog / events / CMS)
Migrate to **Next.js** + a headless CMS (e.g. Sanity, or Notion as a source). The
HTML/CSS here ports directly into Next.js components; the design tokens stay the same.
Ask and this can be converted.
