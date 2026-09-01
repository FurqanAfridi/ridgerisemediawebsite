export const assets = {
  money: "/assets/money-1.webp",
  rocket: "/assets/rocket.webp",
  cardPayout: "/assets/card-payout.webp",
  cardCalls: "/assets/card-calls.webp",
  logoIcon: "/assets/logo-icon.svg",
  logoTextTop: "/assets/logo-text-top.svg",
  logoTextBottom: "/assets/logo-text-bottom.svg",
  logoDot: "/assets/logo-dot.svg",
  ogDefault: "/assets/og-default.jpg",
  verticals: [
    "/assets/vertical-1.webp",
    "/assets/vertical-2.webp",
    "/assets/vertical-3.webp",
    "/assets/vertical-4.webp",
    "/assets/vertical-5.webp",
    "/assets/vertical-6.webp",
    "/assets/vertical-7.webp",
  ],
} as const;

export const site = {
  name: "RidgeRise Media",
  url: "https://ridgerisemedia.com",
  email: "info@ridgerisemedia.com",
  phone: "+1 (202) 773-7162",
  phoneHref: "tel:+12027737162",
  address: "82 Navratil Rd, Willington, CT 06279",
  addressLines: ["82 Navratil Rd", "Willington, CT 06279"] as const,
  mapsHref:
    "https://maps.google.com/?q=82+Navratil+Rd+Willington+CT+06279",
  tagline: "Qualified inbound calls, leads, and traffic",
} as const;

/** Flip `live` after legal entity, address, and leadership are confirmed. Do not invent these. */
export const trustSignals = {
  live: false,
  legalName: "",
  registeredAddress: "",
  leadership: [] as { name: string; role: string; linkedin: string }[],
};

export const navLinks = [
  { label: "Buyers", to: "/buyers" },
  { label: "Publishers", to: "/publishers" },
  { label: "Verticals", to: "/verticals" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
] as const;
