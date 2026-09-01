import { getVerticalBySlug, type Vertical } from "./verticals";

const HOT_IMG_BASE = "/assets/verticals/hot";

export type HotRidgeRiseRef = {
  slug: string;
  label?: string;
  image: string;
};

export type HotRidgeRiseVertical = Vertical & {
  hotImage: string;
};

export const hotRidgeRiseRefs: HotRidgeRiseRef[] = [
  {
    slug: "ssi-signed-retainer",
    label: "SSI - Signed Retainer",
    image: `${HOT_IMG_BASE}/ssi-signed-retainer.webp`,
  },
  {
    slug: "hospital-indemnity",
    label: "Hospital Indemnity",
    image: `${HOT_IMG_BASE}/hospital-indemnity.webp`,
  },
  {
    slug: "home-insurance",
    label: "Home Insurance",
    image: `${HOT_IMG_BASE}/home-insurance.webp`,
  },
  {
    slug: "pest-control",
    label: "Pest control",
    image: `${HOT_IMG_BASE}/pest-control.webp`,
  },
  {
    slug: "final-expense-inbounds",
    label: "Final Expense Inbounds",
    image: `${HOT_IMG_BASE}/final-expense-inbounds.webp`,
  },
  {
    slug: "disability-ssdi",
    label: "SSDI Signed Retainer",
    image: `${HOT_IMG_BASE}/disability-ssdi.webp`,
  },
  {
    slug: "bathroom-remodel",
    label: "Bathroom",
    image: `${HOT_IMG_BASE}/bathroom-remodel.webp`,
  },
  {
    slug: "medicare-advantage",
    label: "Medicare",
    image: `${HOT_IMG_BASE}/medicare-advantage.webp`,
  },
  {
    slug: "pharmacy",
    label: "Pharmacy",
    image: `${HOT_IMG_BASE}/pharmacy.webp`,
  },
  {
    slug: "health-insurance",
    label: "ACA",
    image: `${HOT_IMG_BASE}/health-insurance.webp`,
  },
  {
    slug: "final-expense",
    label: "Final Expense",
    image: `${HOT_IMG_BASE}/final-expense.webp`,
  },
  {
    slug: "personal-injury",
    label: "MVA",
    image: `${HOT_IMG_BASE}/personal-injury.webp`,
  },
  {
    slug: "auto-insurance",
    label: "AUTO Insurance",
    image: `${HOT_IMG_BASE}/auto-insurance.webp`,
  },
];

export const hotRidgeRiseSlugs = new Set(
  hotRidgeRiseRefs.map((entry) => entry.slug),
);

export function getHotRidgeRiseVerticals(): HotRidgeRiseVertical[] {
  return hotRidgeRiseRefs.flatMap((entry) => {
    const vertical = getVerticalBySlug(entry.slug);
    if (!vertical) return [];
    return [
      {
        ...vertical,
        name: entry.label ?? vertical.name,
        hotImage: entry.image,
      },
    ];
  });
}
