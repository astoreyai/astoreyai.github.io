import {
  cpSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { join } from 'node:path';
import { pages, render } from '../dist-ssr/entry-server.js';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
cpSync('public', 'dist', { recursive: true });
cpSync('src/assets/portfolio.css', 'dist/portfolio.css');
for (const page of pages) {
  const directory = join('dist', page.path);
  mkdirSync(directory, { recursive: true });
  writeFileSync(join(directory, 'index.html'), render(page.id));
}
// The previous portfolio registered /sw.js. Retire that worker so returning
// visitors leave its old app-shell cache on their next successful update.
writeFileSync('dist/sw.js', readFileSync('scripts/retire-worker.js'));
writeFileSync(
  'dist/sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    pages
      .map(
        (page) =>
          `<url><loc>https://astoreyai.github.io${page.path}</loc></url>`,
      )
      .join('') +
    '</urlset>\n',
);
writeFileSync(
  'dist/404.html',
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page not found | Aaron W. Storey</title><link rel="stylesheet" href="/portfolio.css"></head><body><main class="container page-heading"><h1>Page not found</h1><p>This address does not match a page in the portfolio.</p><a class="button" href="/">Return to the portfolio</a></main></body></html>',
);
console.log(
  `Built ${pages.length} complete HTML pages, document downloads, sitemap, and 404 page.`,
);
