# Jesse Langley — Official Website

**Designed and developed by SRM卝SAMIヅ.**
Copyright © SRM卝SAMIヅ. All rights reserved. The design, layout, code and written structure of this website are the work of SRM卝SAMIヅ and are provided for Jesse Langley's use. Copying, reselling or re-publishing the design or code without written permission is not permitted.

## Project idea
A premium, cinematic personal site for **Jesse Langley**, a songwriter and lyricist from New Bern, North Carolina. It tells his real story (taken from the biography supplied by the client): small-town roots, a Marine Corps family, Havelock High (class of 2004), NJROTC, the Army National Guard, his first song "I Wish I" (2002), the red three-ring binder of songs, fast food and HVAC careers, and today's songwriting.
Design language: dark stage-black pages, one gold accent, big editorial type, vinyl and equalizer motifs, film grain, and "red binder" notebook pages for lyrics.

## Tech
HTML5, CSS3, JavaScript and Bootstrap 5.3 (included locally in `assets/vendor/`, no CDN needed). Fonts: Playfair Display, Inter, Bebas Neue, Caveat (Google Fonts). Works on GitHub Pages.

## Pages
Home (22 sections), About, Journey, Videos, Lyrics & Writings, Gallery, Contact, 404.

## Pictures (easy to change)
Put your pictures in `assets/images/` with these exact names: the 3 logos, `1.jpg`…`25.jpg` (`20 Transparent background.png` replaces 20), `My Prestige Award.png`, and the 5 childhood photos.
Open `assets/js/config.js` → `img`. Each spot has a name; change the file name to change the picture. A spot can also be a **list**, e.g. `heroHome: ["3.jpg","stock/bg-stage-lights.jpg"]`: the site uses the first file that exists, so new pictures are detected automatically.
- Background art (hero and bands): `assets/images/stock/` — 8 cinematic backgrounds generated for this project (original artwork, no third-party copyright). To use real photos instead, download free-license images (Unsplash, Pexels or Pixabay, in warm gold/dark tones) into `assets/images/` and put the file name first in the list.
- Crop: `pos: { storyMain: "center 20%" }`.
- Photos on the gallery page: `gallery` list. Childhood photos: `childhood` list.
I could not view the client's photos while building, so which photo sits in which section is a first guess. Change numbers in `img` until it looks right.

## Lyrics & Writings
`config.js` → `lyrics` and `poems`. **These are sample pieces** to show the layout (marked "Sample"). Replace each `title`, `theme` and `lines` with Jesse's own words, or copy a block to add more. The "Sample" badge text is in `assets/js/main.js` (search `demo`).

## Videos
`config.js` → `shorts`: paste any YouTube Shorts link and edit titles. Spotify and SoundCloud players on Home, Videos and Lyrics use the artist profiles from `platforms`.

## Social links
`config.js` → `platforms` (YouTube @LANGLEY313RD, Spotify, SoundCloud, TikTok, Instagram, Threads, Facebook).

## Contact form
Connected to Formspree: `https://formspree.io/f/mdeejynv` (confirm the email in your Formspree dashboard).

## To finish before launch
- Prestige Award details: name, year, presenter (search `PLACEHOLDER` in `index.html`).
- Replace `YOUR-USERNAME` / `YOUR-REPO` in each page `<head>`, `sitemap.xml` and `robots.txt`.
- Replace the sample lyrics and poems.

## Deploy on GitHub Pages
Upload everything with `index.html` at the root → Settings → Pages → Deploy from a branch → `main` / root → Save.
