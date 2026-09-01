import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join("public", "assets", "verticals", "hot");
fs.mkdirSync(outDir, { recursive: true });

/** Stock photos (Unsplash / Pexels — free license) */
const sources = [
  [
    "ssi-signed-retainer",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  ],
  [
    "hospital-indemnity",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  ],
  [
    "home-insurance",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  ],
  [
    "pest-control",
    "https://images.pexels.com/photos/5691657/pexels-photo-5691657.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  [
    "final-expense-inbounds",
    "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  [
    "disability-ssdi",
    "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  [
    "bathroom-remodel",
    "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  [
    "medicare-advantage",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  ],
  [
    "pharmacy",
    "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  [
    "health-insurance",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  ],
  [
    "final-expense",
    "https://images.pexels.com/photos/3823497/pexels-photo-3823497.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  [
    "personal-injury",
    "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  [
    "auto-insurance",
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
  ],
];

async function download(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (error) {
      if (attempt === 2) throw error;
      await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
    }
  }
  throw new Error("unreachable");
}

for (const [slug, url] of sources) {
  const buffer = await download(url);
  const output = path.join(outDir, `${slug}.webp`);
  const info = await sharp(buffer)
    .resize(800, 500, { fit: "cover", position: "centre" })
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toFile(output);
  console.log(`${slug}.webp: ${(info.size / 1024).toFixed(1)} KB`);
}
