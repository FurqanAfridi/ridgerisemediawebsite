import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const indexHtml = join(dist, "index.html");
const sitemapPath = join(root, "public", "sitemap.xml");

if (!existsSync(indexHtml)) {
  console.error("prerender: dist/index.html missing — run vite build first");
  process.exit(1);
}

function stripManagedHeadTags(html) {
  return html
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<meta\b[^>]*name=["']description["'][^>]*>/gi, "")
    .replace(/<meta\b[^>]*name=["']keywords["'][^>]*>/gi, "")
    .replace(/<meta\b[^>]*property=["']og:[^"']+["'][^>]*>/gi, "")
    .replace(/<meta\b[^>]*name=["']twitter:[^"']+["'][^>]*>/gi, "")
    .replace(/<meta\b[^>]*property=["']article:[^"']+["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");
}

function injectHead(html, tags) {
  const stripped = stripManagedHeadTags(html);
  if (!stripped.includes("</head>")) {
    throw new Error("prerender: </head> missing from dist/index.html");
  }
  return stripped.replace("</head>", `    ${tags}\n  </head>`);
}

function countTag(html, pattern) {
  return (html.match(pattern) || []).length;
}

const sitemap = readFileSync(sitemapPath, "utf8");
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const origin = "https://ridgerisemedia.com";
const shell = readFileSync(indexHtml, "utf8");

const vite = await createServer({
  root,
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
  logLevel: "error",
});

try {
  const { seoForPath, renderSeoHead } = await vite.ssrLoadModule("/src/data/seo.ts");

  let written = 0;
  const missing = [];

  for (const loc of locs) {
    if (!loc.startsWith(origin)) continue;
    const path = loc.slice(origin.length) || "/";
    const meta = seoForPath(path);
    if (!meta) {
      missing.push(path);
      continue;
    }

    const html = injectHead(shell, renderSeoHead(meta, path));
    const titles = countTag(html, /<title\b/gi);
    const descriptions = countTag(html, /<meta\b[^>]*name=["']description["']/gi);
    const canonicals = countTag(html, /<link\b[^>]*rel=["']canonical["']/gi);

    if (titles !== 1 || descriptions !== 1 || canonicals !== 1) {
      throw new Error(
        `prerender: ${path} expected 1 title / description / canonical, got ${titles}/${descriptions}/${canonicals}`,
      );
    }

    if (path === "/") {
      writeFileSync(indexHtml, html);
    } else {
      const targetDir = join(dist, path.slice(1));
      mkdirSync(targetDir, { recursive: true });
      writeFileSync(join(targetDir, "index.html"), html);
    }
    written += 1;
  }

  if (missing.length) {
    console.warn(`prerender: no SEO map for ${missing.join(", ")}`);
  }

  console.log(`prerender: wrote ${written} route HTML files with unique head tags`);
} finally {
  await vite.close();
}
