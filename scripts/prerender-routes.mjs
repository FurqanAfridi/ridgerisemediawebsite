import { mkdirSync, copyFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const indexHtml = join(dist, "index.html");
const sitemapPath = join(root, "public", "sitemap.xml");

if (!existsSync(indexHtml)) {
  console.error("prerender: dist/index.html missing — run vite build first");
  process.exit(1);
}

const sitemap = readFileSync(sitemapPath, "utf8");
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const origin = "https://ridgerisemedia.com";

const routes = locs
  .map((loc) => {
    if (!loc.startsWith(origin)) return null;
    const path = loc.slice(origin.length) || "/";
    return path;
  })
  .filter(Boolean);

for (const route of routes) {
  if (route === "/") continue;
  const targetDir = join(dist, route.slice(1));
  mkdirSync(targetDir, { recursive: true });
  copyFileSync(indexHtml, join(targetDir, "index.html"));
}

console.log(
  `prerender: wrote ${routes.length - 1} route shells for static hosting`,
);
