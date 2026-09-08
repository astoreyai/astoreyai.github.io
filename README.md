# Aaron W. Storey

Personal research portfolio at [astoreyai.github.io](https://astoreyai.github.io/).

A five-page static portfolio built with React, TypeScript, and Vite. The site
presents research software, publications, professional experience, and downloadable
CV and resume documents.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm ci
npm run build
npm run preview -- --host 127.0.0.1
```

Open the preview URL printed by Vite. `npm run dev` builds and serves the site on
port 5173. Rebuild after editing; this static preview does not hot-reload.

## Content and layout

- `src/content.ts`: public biography, projects, publications, appointments, and education.
- `src/entry-server.tsx`: shared navigation, page layouts, copy, and metadata.
- `src/assets/portfolio.css`: typography, colors, spacing, responsive and print styles.
- `public/documents/`: academic CV and AI research engineer resume PDFs.
- `public/aaron-storey.jpg`: portrait from my GitHub profile.
- `scripts/build-site.mjs`: renders complete HTML pages into `dist/`.

React renders HTML at build time using Vite. The published pages require no
client-side JavaScript or API calls. Each route is a real directory with an
`index.html`, so direct links and refreshes work on GitHub Pages. The build also
creates a sitemap and a 404 page.

Keep accepted papers separate from published work. Keep OpenFIQA Studio labeled
as design-stage work. Update PDF files and page copy together when the underlying
career record changes. Do not put private career records or unpublished
manuscripts in this public repository.

## Verification and deployment

```sh
npm run lint
npm run prettier
npm run build
```

Review every page at desktop and phone sizes; verify navigation, keyboard focus,
publication links, and both document downloads against the actual built output.
The GitHub Actions workflow deploys `dist/` to GitHub Pages on a push to `main`.

The former GitProfile site registered a service worker at `/sw.js`. The build
retains that endpoint as a retirement worker for returning visitors: it removes
only Workbox precaches associated with this registration, unregisters itself,
and reloads controlled pages. Keep it available while old registrations may exist.

The site originated from [GitProfile](https://github.com/arifszn/gitprofile).
The original MIT license is retained in `LICENSE`.
