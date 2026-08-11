export const assets = {
  money: "/assets/money-1.png",
  rocket: "/assets/rocket.png",
  cardPayout: "/assets/card-payout.png",
  cardCalls: "/assets/card-calls.png",
  logoIcon: "/assets/logo-icon.svg",
  logoTextTop: "/assets/logo-text-top.svg",
  logoTextBottom: "/assets/logo-text-bottom.svg",
  logoDot: "/assets/logo-dot.svg",
  ogDefault: "/assets/og-default.jpg",
  verticals: [
    "/assets/vertical-1.png",
    "/assets/vertical-2.png",
    "/assets/vertical-3.png",
    "/assets/vertical-4.png",
    "/assets/vertical-5.png",
    "/assets/vertical-6.png",
    "/assets/vertical-7.png",
  ],
} as const;

export const site = {
  name: "RidgeRise Media",
  url: "https://ridgerisemedia.com",
  email: "info@ridgerisemedia.com",
  phone: "+1 (202) 773-7162",
  phoneHref: "tel:+12027737162",
  tagline: "Qualified calls, leads & traffic",
} as const;

export const navLinks = [
  { label: "Buyers", to: "/buyers" },
  { label: "Publishers", to: "/publishers" },
  { label: "Verticals", to: "/verticals" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
] as const;
