import { blogPosts, type BlogPost } from "@/data/blog";
import { site } from "@/data/site";
import { verticals, type Vertical } from "@/data/verticals";

export const DEFAULT_OG = "/assets/og-default.jpg";

export type RouteSeo = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildTitle(title: string) {
  const brand = site.name;
  const trimmed = title.trim();
  if (!trimmed) return brand;
  if (trimmed === brand) return brand;
  if (trimmed.endsWith(`| ${brand}`) || trimmed.endsWith(`— ${brand}`)) {
    return trimmed;
  }
  if (trimmed.includes(brand)) return trimmed;
  return `${trimmed} | ${brand}`;
}

export function canonicalUrl(path: string) {
  return `${site.url}${path === "/" ? "" : path}`;
}

export function ogImageUrl(image = DEFAULT_OG) {
  return image.startsWith("http") ? image : `${site.url}${image}`;
}

const homeAndBuyersTitle = "Pay Per Call Media Buyer for Advertisers";
const homeAndBuyersDescription =
  "In-house media buying on search, social, and display. You pay per billable call. Campaigns we run ourselves, plus a screened publisher layer. Start a test campaign.";

export const pageSeo = {
  home: {
    title: homeAndBuyersTitle,
    description: homeAndBuyersDescription,
    path: "/",
    keywords: [
      "pay per call media buyer",
      "pay per call",
      "cost per call",
      "CPL",
      "qualified inbound calls",
      "lead generation",
    ],
  },
  buyers: {
    title: homeAndBuyersTitle,
    description: homeAndBuyersDescription,
    path: "/buyers",
    keywords: [
      "buy qualified calls",
      "pay per call",
      "cost per call",
      "CPL leads",
      "live transfers",
      "exclusive calls",
      "shared calls",
    ],
  },
  publishers: {
    title: "Pay Per Call Partner Programme for Publishers",
    description:
      "Monetize call traffic with RidgeRise Media. Live buyer demand, quality standards, call-level tracking, and clear payout terms. Apply as a partner.",
    path: "/publishers",
    keywords: [
      "pay per call network for publishers",
      "monetize call traffic",
      "pay per call publishers",
      "call transfer network",
    ],
  },
  verticals: {
    title: "Pay Per Call & Lead Generation Verticals",
    description:
      "Browse RidgeRise verticals where buyer demand and campaign supply meet. Insurance, Legal, Home Services, Finance, and Education on CPL and cost per call.",
    path: "/verticals",
    keywords: [
      "pay per call verticals",
      "insurance pay per call",
      "legal call leads",
      "home services leads",
    ],
  },
  about: {
    title: "How RidgeRise Buys and Places Calls",
    description:
      "RidgeRise Media is a US pay-per-call media buyer. We run our own campaigns and add volume through screened partners. Buy calls, leads, and traffic on CPL or cost per call.",
    path: "/about",
    keywords: [
      "pay per call media buyer",
      "pay per call",
      "cost per call",
      "CPL",
      "qualified inbound calls",
    ],
  },
  blog: {
    title: "Pay-Per-Call Blog for Buyers",
    description:
      "Buyer-first guides on buying calls and leads, call quality, insurance campaigns, and how pay per call works. Written for intake and media teams.",
    path: "/blog",
    keywords: [
      "pay per call blog",
      "buy inbound calls",
      "call quality",
      "insurance pay per call",
    ],
  },
  contact: {
    title: "Contact RidgeRise Media",
    description:
      "Talk to RidgeRise about buying qualified inbound calls, leads, or traffic on CPL or cost per call. Publishers can apply as a partner. Tell us your brief.",
    path: "/contact",
    keywords: ["contact RidgeRise Media", "buy pay per call", "apply publisher"],
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "How RidgeRise Media collects, uses, stores, and protects your information. Read our full privacy practices.",
    path: "/privacy",
  },
  terms: {
    title: "Terms & Conditions",
    description:
      "Terms & Conditions for RidgeRise Media publishers and buyers using our pay-per-call platform.",
    path: "/terms",
  },
} as const satisfies Record<string, RouteSeo>;

export function verticalSeo(vertical: Vertical): RouteSeo {
  return {
    title: `${vertical.name} Pay Per Call & Leads`,
    description: `${vertical.name} pay per call and CPL. ${vertical.summary} Filters for geo, hours, and exclusivity. Start a test campaign.`,
    path: `/verticals/${vertical.slug}`,
    keywords: vertical.keywords,
  };
}

export function postSeo(post: BlogPost): RouteSeo {
  return {
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    keywords: post.tags,
    publishedTime: post.date,
  };
}

export function seoForPath(path: string): RouteSeo | null {
  const normalized = path === "" ? "/" : path;
  const staticPage = Object.values(pageSeo).find(
    (entry) => entry.path === normalized,
  );
  if (staticPage) return staticPage;

  if (normalized.startsWith("/blog/")) {
    const slug = normalized.slice("/blog/".length);
    const post = blogPosts.find((item) => item.slug === slug);
    return post ? postSeo(post) : null;
  }

  if (normalized.startsWith("/verticals/")) {
    const slug = normalized.slice("/verticals/".length);
    const vertical = verticals.find((item) => item.slug === slug);
    return vertical ? verticalSeo(vertical) : null;
  }

  return null;
}

function escapeAttr(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/** Static <head> tags for prerender. `data-rh` lets react-helmet-async reuse them. */
export function renderSeoHead(meta: RouteSeo) {
  const fullTitle = buildTitle(meta.title);
  const url = canonicalUrl(meta.path);
  const imageUrl = ogImageUrl();
  const type = meta.type ?? "website";
  const keywords = meta.keywords ?? [];

  const lines = [
    `<title data-rh="true">${escapeAttr(fullTitle)}</title>`,
    `<meta data-rh="true" name="description" content="${escapeAttr(meta.description)}" />`,
    keywords.length > 0
      ? `<meta data-rh="true" name="keywords" content="${escapeAttr(keywords.join(", "))}" />`
      : "",
    `<link data-rh="true" rel="canonical" href="${escapeAttr(url)}" />`,
    `<meta data-rh="true" property="og:type" content="${escapeAttr(type)}" />`,
    `<meta data-rh="true" property="og:title" content="${escapeAttr(fullTitle)}" />`,
    `<meta data-rh="true" property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta data-rh="true" property="og:url" content="${escapeAttr(url)}" />`,
    `<meta data-rh="true" property="og:site_name" content="${escapeAttr(site.name)}" />`,
    `<meta data-rh="true" property="og:image" content="${escapeAttr(imageUrl)}" />`,
    `<meta data-rh="true" property="og:image:alt" content="${escapeAttr(fullTitle)}" />`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
    `<meta data-rh="true" name="twitter:title" content="${escapeAttr(fullTitle)}" />`,
    `<meta data-rh="true" name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta data-rh="true" name="twitter:image" content="${escapeAttr(imageUrl)}" />`,
  ];

  if (meta.publishedTime) {
    lines.push(
      `<meta data-rh="true" property="article:published_time" content="${escapeAttr(meta.publishedTime)}" />`,
    );
  }
  if (meta.modifiedTime) {
    lines.push(
      `<meta data-rh="true" property="article:modified_time" content="${escapeAttr(meta.modifiedTime)}" />`,
    );
  }

  return lines.filter(Boolean).join("\n    ");
}

export function getPrerenderSeoRoutes(): RouteSeo[] {
  return [
    ...Object.values(pageSeo),
    ...verticals.map(verticalSeo),
    ...blogPosts.map(postSeo),
  ];
}
