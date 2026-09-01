/**
 * One-shot: convert public JPG/PNG assets to compressed WebP, then remove originals
 * (keeps a compressed JPEG for og-default for social crawlers).
 *
 * Usage: node scripts/optimize-images.mjs
 */
import { readdir, unlink, stat } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assets = join(root, "public", "assets");

const SKIP_DELETE = new Set(["og-default.jpg"]); // social OG stays JPEG

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function maxWidthFor(file) {
  const name = basename(file);
  if (name.startsWith("og-")) return 1200;
  if (file.includes(`${join("assets", "vertical-cards")}`)) return 900;
  if (file.includes(`${join("assets", "verticals")}`)) return 1200;
  if (file.includes(`${join("assets", "about")}`)) return 1200;
  if (file.includes(`${join("assets", "publishers")}`)) return 1200;
  // UI decorative PNGs
  if (/^vertical-\d/.test(name) || name.startsWith("card-")) return 800;
  if (name === "money-1.png" || name === "rocket.png") return 640;
  return 1200;
}

function qualityFor(file) {
  if (file.includes("vertical-cards")) return 70;
  if (extname(file).toLowerCase() === ".png") return 72;
  return 70;
}

async function convert(file) {
  const ext = extname(file).toLowerCase();
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") return null;

  const name = basename(file);
  const isOg = name === "og-default.jpg" || name === "og-default.jpeg";

  const input = sharp(file, { failOn: "none" });
  const meta = await input.metadata();
  const width = meta.width ?? 0;
  const maxW = maxWidthFor(file);
  const pipeline = sharp(file, { failOn: "none" }).rotate();

  if (width > maxW) pipeline.resize({ width: maxW, withoutEnlargement: true });

  if (isOg) {
    // Keep JPEG for Open Graph / Twitter cards
    const out = join(dirname(file), "og-default.jpg");
    const tmp = join(dirname(file), "og-default.tmp.jpg");
    await pipeline
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(tmp);
    // replace in place via unlink + rename handled by writing then deleting if different path
    const { size: before } = await stat(file);
    await unlink(file).catch(() => {});
    const { rename } = await import("node:fs/promises");
    await rename(tmp, out);
    const { size: after } = await stat(out);
    return { file: out, before, after, format: "jpeg" };
  }

  const out = join(dirname(file), `${basename(file, ext)}.webp`);
  const q = qualityFor(file);
  const hasAlpha = meta.hasAlpha === true;

  await pipeline
    .webp({
      quality: q,
      alphaQuality: hasAlpha ? 80 : 100,
      effort: 6,
    })
    .toFile(out);

  const { size: before } = await stat(file);
  const { size: after } = await stat(out);

  if (!SKIP_DELETE.has(name)) {
    await unlink(file);
  }

  return { file: out, before, after, format: "webp", removed: file };
}

const all = await walk(assets);
const targets = all.filter((f) => /\.(jpe?g|png)$/i.test(f));

let beforeTotal = 0;
let afterTotal = 0;
const rows = [];

for (const file of targets) {
  try {
    const result = await convert(file);
    if (!result) continue;
    beforeTotal += result.before;
    afterTotal += result.after;
    rows.push(result);
    const saved = (((result.before - result.after) / result.before) * 100).toFixed(0);
    console.log(
      `${basename(result.file)}  ${(result.before / 1024).toFixed(0)}KB → ${(result.after / 1024).toFixed(0)}KB  (-${saved}%)`,
    );
  } catch (err) {
    console.error("FAIL", file, err.message);
  }
}

console.log("\n---");
console.log(
  `Total: ${(beforeTotal / 1024 / 1024).toFixed(1)}MB → ${(afterTotal / 1024 / 1024).toFixed(1)}MB`,
);
console.log(`Files converted: ${rows.length}`);
