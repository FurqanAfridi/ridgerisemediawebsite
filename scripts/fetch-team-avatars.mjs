import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join("public", "assets", "about", "team");
fs.mkdirSync(outDir, { recursive: true });

/** Illustrated portraits — micah (male), lorelei (female) */
const members = [
  {
    slug: "spencer-peiffer",
    seed: "Spencer Peiffer",
    style: "micah",
    params: {
      facialHairProbability: 100,
      facialHair: "beard",
      hair: "mrClean",
      eyebrows: "up",
      earringsProbability: 0,
      mouth: "smirk",
      shirt: "collared",
      shirtColor: "5d62dd",
      baseColor: "ac6651",
      backgroundColor: "e8ecff",
    },
  },
  {
    slug: "rafia-mairaj",
    seed: "Rafia Mairaj",
    style: "lorelei",
    params: {
      beardProbability: 0,
      earringsProbability: 90,
      mouth: "happy05",
      hair: "variant38",
      backgroundColor: "fce7f3",
    },
  },
  {
    slug: "furqan",
    seed: "Furqan",
    style: "micah",
    params: {
      facialHairProbability: 100,
      facialHair: "scruff",
      hair: "fonze",
      mouth: "smirk",
      shirt: "crew",
      shirtColor: "14b8a6",
      backgroundColor: "d1fae5",
    },
  },
  {
    slug: "m-hamza",
    seed: "M Hamza",
    style: "micah",
    params: {
      facialHairProbability: 100,
      facialHair: "beard",
      hair: "mrT",
      eyebrows: "up",
      earringsProbability: 0,
      mouth: "smile",
      shirt: "collared",
      shirtColor: "4f46e5",
      baseColor: "77311d",
      backgroundColor: "e0e7ff",
    },
  },
  {
    slug: "mark-ruffalo",
    seed: "Mark Ruffalo",
    style: "micah",
    params: {
      facialHairProbability: 100,
      facialHair: "scruff",
      hair: "dougFunny",
      mouth: "laughing",
      shirt: "collared",
      shirtColor: "f97316",
      backgroundColor: "ffedd5",
    },
  },
  {
    slug: "jim-martin",
    seed: "Jim Martin",
    style: "micah",
    params: {
      facialHairProbability: 100,
      facialHair: "beard",
      hair: "fonze",
      eyebrows: "up",
      earringsProbability: 0,
      glassesProbability: 100,
      glasses: "square",
      mouth: "smile",
      shirt: "crew",
      shirtColor: "0f766e",
      baseColor: "f9c9b6",
      backgroundColor: "ccfbf1",
    },
  },
];

const size = 256;
const obsolete = ["m-furqan.webp"];

function buildUrl(style, seed, params) {
  const url = new URL(`https://api.dicebear.com/9.x/${style}/png`);
  url.searchParams.set("seed", seed);
  url.searchParams.set("size", "512");
  url.searchParams.set("radius", "50");

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, String(value));
  }

  return url;
}

for (const obsoleteFile of obsolete) {
  const obsoletePath = path.join(outDir, obsoleteFile);
  if (fs.existsSync(obsoletePath)) fs.unlinkSync(obsoletePath);
}

for (const member of members) {
  const url = buildUrl(member.style, member.seed, member.params);
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed ${member.slug}: ${res.status} ${res.statusText}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  const outPath = path.join(outDir, `${member.slug}.webp`);

  await sharp(buffer)
    .resize(size, size, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(outPath);

  console.log(`✓ ${member.slug}.webp (${member.style})`);
}

console.log(`Done — ${members.length} avatars in ${outDir}`);
