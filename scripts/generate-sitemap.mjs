#!/usr/bin/env node
/**
 * Regenerates public/sitemap.xml from page/vertical/blog SEO routes.
 * Usage: node scripts/generate-sitemap.mjs
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "public", "sitemap.xml");

const vite = await createServer({
  root,
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
  logLevel: "error",
});

try {
  const { pageSeo, verticalSeo, postSeo } = await vite.ssrLoadModule("/src/data/seo.ts");
  const { verticals } = await vite.ssrLoadModule("/src/data/verticals.ts");
  const { blogPosts } = await vite.ssrLoadModule("/src/data/blog.ts");

  const today = new Date().toISOString().slice(0, 10);

  /** @type {{ loc: string, lastmod: string, changefreq: string, priority: string }[]} */
  const urls = [];

  const staticPriority = {
    "/": { priority: "1.0", changefreq: "weekly", lastmod: today },
    "/buyers": { priority: "0.9", changefreq: "weekly", lastmod: today },
    "/publishers": { priority: "0.9", changefreq: "weekly", lastmod: today },
    "/verticals": { priority: "0.9", changefreq: "weekly", lastmod: today },
    "/blog": { priority: "0.8", changefreq: "weekly", lastmod: today },
    "/about": { priority: "0.7", changefreq: "monthly", lastmod: today },
    "/contact": { priority: "0.8", changefreq: "monthly", lastmod: today },
    "/privacy": { priority: "0.3", changefreq: "yearly", lastmod: "2025-01-01" },
    "/terms": { priority: "0.3", changefreq: "yearly", lastmod: "2025-01-01" },
  };

  for (const page of Object.values(pageSeo)) {
    const meta = staticPriority[page.path] ?? {
      priority: "0.5",
      changefreq: "monthly",
      lastmod: today,
    };
    urls.push({
      loc: `https://ridgerisemedia.com${page.path === "/" ? "/" : page.path}`,
      ...meta,
    });
  }

  for (const vertical of verticals) {
    const seo = verticalSeo(vertical);
    urls.push({
      loc: `https://ridgerisemedia.com${seo.path}`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.8",
    });
  }

  for (const post of blogPosts) {
    const seo = postSeo(post);
    urls.push({
      loc: `https://ridgerisemedia.com${seo.path}`,
      lastmod: post.date,
      changefreq: "monthly",
      priority: "0.7",
    });
  }

  // Keep blog dates accurate on /blog lastmod
  const latestPost = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))[0];
  const blogEntry = urls.find((u) => u.loc.endsWith("/blog"));
  if (blogEntry && latestPost) blogEntry.lastmod = latestPost.date;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  writeFileSync(out, xml);
  console.log(`sitemap: wrote ${urls.length} URLs to public/sitemap.xml`);
} finally {
  await vite.close();
}
