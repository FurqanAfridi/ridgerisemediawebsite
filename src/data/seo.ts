import { blogPosts, type BlogPost } from "@/data/blog";
import { site } from "@/data/site";
import { verticals, type Vertical } from "@/data/verticals";
import {
  aboutFaqs,
  blogFaqs,
  buyersFaqs,
  contactFaqs,
  homeFaqs,
  publishersFaqs,
  verticalDetailFaqs,
  verticalsFaqs,
} from "@/data/faqs";
import type { FaqProItem } from "@/components/ui/faq-pro";

export const DEFAULT_OG = "/assets/og-default.jpg";

export type RouteSeo = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildTitle(title: string) {
  const brand = site.name;
  const trimmed = title.trim();
  if (!trimmed) return brand;
  if (trimmed === brand) return brand;
  if (trimmed.endsWith(`| ${brand}`)) return trimmed;
  if (trimmed.includes(brand)) return trimmed;
  return `${trimmed} | ${brand}`;
}

export function canonicalUrl(path: string) {
  return `${site.url}${path === "/" ? "" : path}`;
}

export function ogImageUrl(image = DEFAULT_OG) {
  return image.startsWith("http") ? image : `${site.url}${image}`;
}

/** Exact titles already include the brand where needed. */
export const pageSeo = {
  home: {
    title: "Pay Per Call Media Buyer for Advertisers | RidgeRise Media",
    description:
      "In-house media buying on search, social, and display. You pay per billable call. Start a test campaign.",
    path: "/",
  },
  buyers: {
    title: "Buy Qualified Calls, Leads & Traffic | RidgeRise Media",
    description:
      "Buy pay-per-call, CPL leads, and qualified traffic with geo, hours, and exclusivity filters. Start a test campaign with RidgeRise Media.",
    path: "/buyers",
  },
  publishers: {
    title: "Pay Per Call Partner Programme for Publishers | RidgeRise Media",
    description:
      "Monetize call traffic with RidgeRise Media. Live buyer demand, quality standards, call-level tracking, and clear payout terms. Apply as a partner.",
    path: "/publishers",
  },
  verticals: {
    title: "Pay-Per-Call Verticals for Advertisers | RidgeRise Media",
    description:
      "Insurance, Legal, Home Services, Finance, and Education. Qualified inbound calls, CPL leads, and CPC traffic from RidgeRise Media.",
    path: "/verticals",
  },
  about: {
    title: "How RidgeRise Buys and Places Calls | RidgeRise Media",
    description:
      "US pay-per-call media buyer. We run our own campaigns and add screened partners. Buy calls, leads, and traffic on CPL or cost per call.",
    path: "/about",
  },
  blog: {
    title: "Pay-Per-Call Blog for Buyers and Publishers | RidgeRise Media",
    description:
      "Practical guides on buying qualified calls and leads, vertical filters, compliance, and call quality. Updated weekly.",
    path: "/blog",
  },
  contact: {
    title: "Contact RidgeRise Media | Start a Pay-Per-Call Campaign",
    description:
      "Tell us your vertical, states, and hours. We respond within one business day with volume and pricing for your pay-per-call campaign.",
    path: "/contact",
  },
  privacy: {
    title: "Privacy Policy | RidgeRise Media",
    description:
      "How RidgeRise Media collects, uses, stores, and protects your information. Read our full privacy practices.",
    path: "/privacy",
  },
  terms: {
    title: "Terms & Conditions | RidgeRise Media",
    description:
      "Terms & Conditions for RidgeRise Media publishers and buyers using our pay-per-call platform.",
    path: "/terms",
  },
} as const satisfies Record<string, RouteSeo>;

const VERTICAL_DISPLAY: Record<string, string> = {
  "auto-insurance": "Auto Insurance",
  "health-insurance": "Health Insurance",
  "life-insurance": "Life Insurance",
  "home-insurance": "Home Insurance",
  "medicare-advantage": "Medicare Advantage",
  "final-expense": "Final Expense",
  "personal-injury": "Personal Injury",
  "workers-compensation": "Workers Compensation",
  "disability-ssdi": "Disability / SSDI",
  bankruptcy: "Bankruptcy",
  "renters-insurance": "Renters Insurance",
  "commercial-auto-insurance": "Commercial Auto Insurance",
  "debt-settlement": "Debt Settlement",
  "personal-loans": "Personal Loans",
  "credit-repair": "Credit Repair",
  mortgage: "Mortgage / Home Loans",
  "tax-relief": "Tax Relief",
  education: "Education",
  "trade-schools": "Trade Schools",
  "online-education": "Online Education",
  "ssi-signed-retainer": "SSI Signed Retainer",
  "hospital-indemnity": "Hospital Indemnity",
  pharmacy: "Pharmacy",
  plumbing: "Plumbing",
  windows: "Windows & Doors",
  "water-damage": "Water Damage Restoration",
  solar: "Solar",
  hvac: "HVAC",
  roofing: "Roofing",
  "home-security": "Home Security",
  "pest-control": "Pest Control",
  "bathroom-remodel": "Bathroom Remodel",
  "final-expense-inbounds": "Final Expense Inbounds",
};

export function verticalDisplayName(vertical: Vertical | string) {
  const slug = typeof vertical === "string" ? vertical : vertical.slug;
  if (VERTICAL_DISPLAY[slug]) return VERTICAL_DISPLAY[slug];
  return typeof vertical === "string" ? vertical : vertical.name;
}

export function verticalSeo(vertical: Vertical): RouteSeo {
  const name = verticalDisplayName(vertical);
  return {
    title: `${name} Pay Per Call & Leads | RidgeRise Media`,
    description: `${name} pay per call and CPL leads from RidgeRise Media. Qualified inbound calls with geo, hours, and product filters. Start a test campaign.`,
    path: `/verticals/${vertical.slug}`,
  };
}

const BLOG_SEO: Record<string, Pick<RouteSeo, "title" | "description">> = {
  "what-is-pay-per-call-marketing": {
    title: "What Is Pay-Per-Call Marketing? (2026 Guide) | RidgeRise Media",
    description:
      "Pay per call means you pay for a qualified call, not a click. How filters, exclusive vs shared, and CPL work for buyers.",
  },
  "insurance-pay-per-call-best-practices": {
    title: "Insurance Pay-Per-Call: Filters Buyers Get Wrong | RidgeRise Media",
    description:
      "Auto, health, life, Medicare, and home calls convert when product, geo, and hours match intake. Avoid these common mistakes.",
  },
  "how-publishers-get-paid-faster": {
    title: "Publisher Payouts in Pay-Per-Call: What Speeds Them Up | RidgeRise Media",
    description:
      "Publisher payouts move when tracking is clean, duration rules are written, and traffic matches the buyer brief.",
  },
  "buyer-guide-call-quality": {
    title: "Call Quality Beyond Duration: What Buyers Should Track | RidgeRise Media",
    description:
      "Duration catches short junk. Track dispositions, wrong-product callers, and source quality to protect ROI on pay-per-call.",
  },
  "compliance-first-pay-per-call": {
    title:
      "Compliance-Conscious Pay-Per-Call: What Buyers Should Require | RidgeRise Media",
    description:
      "TCPA-aware setup and campaign-specific consent belong in the brief. Require them in writing before raising your budget.",
  },
  "home-services-call-seasonality": {
    title: "HVAC, Roofing & Solar Calls: Plan for Seasonality | RidgeRise Media",
    description:
      "HVAC, roofing, and solar call demand follows weather and storm calendars. Set caps, geos, and hours before the spike.",
  },
};

export function postSeo(post: BlogPost): RouteSeo {
  const override = BLOG_SEO[post.slug];
  return {
    title: override?.title ?? `${post.title} | RidgeRise Media`,
    description: override?.description ?? post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
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

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: site.name,
    url: site.url,
    logo: `${site.url}/assets/logo-icon.svg`,
    description:
      "US pay-per-call media buyer. In-house media buying plus screened publishers. Qualified inbound calls, CPL leads, and CPC traffic.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "82 Navratil Rd",
      addressLocality: "Willington",
      addressRegion: "CT",
      postalCode: "06279",
      addressCountry: "US",
    },
    telephone: "+1-202-773-7162",
    email: site.email,
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };
}

export function breadcrumbLd(
  crumbs: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: canonicalUrl(crumb.path),
    })),
  };
}

export function faqPageLd(items: FaqProItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function blogPostingLd(post: BlogPost, meta: RouteSeo) {
  const url = canonicalUrl(meta.path);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title.replace(` | ${site.name}`, ""),
    description: meta.description,
    image: ogImageUrl(),
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/assets/logo-icon.svg`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/** Blog post FAQs for schema + on-page FAQ (kept out of BlogPost type). */
export function blogPostFaqs(slug: string): FaqProItem[] {
  const map: Record<string, FaqProItem[]> = {
    "what-is-pay-per-call-marketing": [
      {
        id: "ppc-what",
        question: "What is pay-per-call marketing?",
        answer:
          "You pay when a caller who meets your campaign rules reaches your phone line. Qualification, duration, and disposition decide what is billable.",
      },
      {
        id: "ppc-vs-cpc",
        question: "How is pay per call different from paying for clicks?",
        answer:
          "With pay per call you buy a live conversation that already cleared geo, product, and hours filters. A click only buys traffic that may never call.",
      },
      {
        id: "ppc-exclusive",
        question: "Should I buy exclusive or shared calls?",
        answer:
          "Exclusive fits when your agents need the only line. Shared fills leftover capacity or test geos at a lower rate. Match the model to staffing.",
      },
    ],
    "insurance-pay-per-call-best-practices": [
      {
        id: "ins-filters",
        question: "Which insurance call filters matter most?",
        answer:
          "Product split, licensed states, business hours, exclusivity, and disposition rules. Miss those and duration can look fine while ROI dies.",
      },
      {
        id: "ins-ma",
        question: "Is Medicare Advantage different from other insurance calls?",
        answer:
          "Yes. AEP timing, CMS marketing rules, and licensing constrain what you can say and when. Do not buy MA traffic your desk cannot place.",
      },
      {
        id: "ins-start",
        question: "How do I start an insurance pay-per-call test?",
        answer:
          "Bring licensed states, product split, hours, and how you define qualified. Start a test campaign on /buyers or /contact.",
      },
    ],
    "how-publishers-get-paid-faster": [
      {
        id: "pub-speed",
        question: "What slows publisher payouts in pay per call?",
        answer:
          "Disputes from off-geo, wrong-product, or short calls, plus unclear duration rules. Clean tracking and a written brief speed payout cycles.",
      },
      {
        id: "pub-traffic",
        question: "What traffic types work best for publishers?",
        answer:
          "Paths that can hold the buyer brief: duration floors, geo, and product screens. Loose traffic creates chargebacks and frozen invoices.",
      },
      {
        id: "pub-apply",
        question: "How do I apply as a RidgeRise publisher?",
        answer:
          "Apply on /publishers with traffic type, geos, verticals, and volumes you can sustain. We confirm live buyer demand from there.",
      },
    ],
    "buyer-guide-call-quality": [
      {
        id: "qual-duration",
        question: "Is call duration enough to measure quality?",
        answer:
          "No. Duration is a floor. Track dispositions, wrong-product callers, answer rate, and source-level trends to protect ROI.",
      },
      {
        id: "qual-invalid",
        question: "What should be on an invalid call list?",
        answer:
          "Wrong state, renter when owner is required, prank, duration miss if you set one, and already-a-customer when you can prove it. Write it before launch.",
      },
      {
        id: "qual-source",
        question: "Why track quality by source?",
        answer:
          "One publisher can drag an otherwise clean campaign. Source-level cutoffs keep good paths running while bad ones pause.",
      },
    ],
    "compliance-first-pay-per-call": [
      {
        id: "comp-tcpa",
        question: "What should buyers require for TCPA-aware campaigns?",
        answer:
          "Campaign-specific consent language, recording and review where applicable, and a written process for pausing sources that fail review.",
      },
      {
        id: "comp-guarantee",
        question: "Can a network guarantee 100% compliance?",
        answer:
          "No honest network can. Require TCPA-aware processes and documented filters, not courtroom guarantees.",
      },
      {
        id: "comp-brief",
        question: "Where do compliance rules belong?",
        answer:
          "In the campaign brief before traffic runs: consent, hours, creative limits, and vertical-specific marketing rules such as Medicare.",
      },
    ],
    "home-services-call-seasonality": [
      {
        id: "hs-season",
        question: "How does seasonality affect HVAC, roofing, and solar calls?",
        answer:
          "Heat and cold spikes HVAC. Storms spike roofing. Solar stays appointment and geo driven. Cap concurrency and staff hours before the window.",
      },
      {
        id: "hs-caps",
        question: "Why set capacity caps before a storm or heat wave?",
        answer:
          "Uncapped live transfers overload setters and create cancellations that look like bad media. Match volume to trucks and phone seats.",
      },
      {
        id: "hs-verticals",
        question: "Which RidgeRise verticals cover home services seasonality?",
        answer:
          "See HVAC, roofing, and solar vertical pages for filters, then start a test campaign with your geos and capacity.",
      },
    ],
  };
  return map[slug] ?? [];
}

export function relatedBlogForVertical(slug: string): BlogPost[] {
  const byCategory: Record<string, string[]> = {
    Insurance: [
      "insurance-pay-per-call-best-practices",
      "what-is-pay-per-call-marketing",
      "buyer-guide-call-quality",
    ],
    Legal: [
      "buyer-guide-call-quality",
      "compliance-first-pay-per-call",
      "what-is-pay-per-call-marketing",
    ],
    Finance: [
      "buyer-guide-call-quality",
      "what-is-pay-per-call-marketing",
      "compliance-first-pay-per-call",
    ],
    "Home Services": [
      "home-services-call-seasonality",
      "buyer-guide-call-quality",
      "what-is-pay-per-call-marketing",
    ],
    Other: [
      "what-is-pay-per-call-marketing",
      "buyer-guide-call-quality",
      "compliance-first-pay-per-call",
    ],
  };

  const vertical = verticals.find((item) => item.slug === slug);
  const preferred =
    byCategory[vertical?.category ?? ""] ??
    byCategory.Other ??
    [];

  return preferred
    .map((postSlug) => blogPosts.find((post) => post.slug === postSlug))
    .filter((post): post is BlogPost => Boolean(post))
    .slice(0, 2);
}

export function schemasForPath(path: string): Record<string, unknown>[] {
  const meta = seoForPath(path);
  if (!meta) return [organizationLd()];

  const schemas: Record<string, unknown>[] = [organizationLd()];

  if (path === "/") {
    schemas.push(websiteLd());
    schemas.push(
      breadcrumbLd([{ name: "Home", path: "/" }]),
    );
    schemas.push(faqPageLd(homeFaqs));
    return schemas;
  }

  if (path === "/about") {
    schemas.push(
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    );
    schemas.push(faqPageLd(aboutFaqs));
    return schemas;
  }

  if (path === "/contact") {
    schemas.push(
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    );
    schemas.push(faqPageLd(contactFaqs));
    return schemas;
  }

  if (path === "/blog") {
    schemas.push(
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    );
    schemas.push(faqPageLd(blogFaqs));
    return schemas;
  }

  if (path === "/verticals") {
    schemas.push(
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Verticals", path: "/verticals" },
      ]),
    );
    schemas.push(faqPageLd(verticalsFaqs));
    return schemas;
  }

  if (path === "/buyers") {
    schemas.push(
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Buyers", path: "/buyers" },
      ]),
    );
    schemas.push(faqPageLd(buyersFaqs));
    return schemas;
  }

  if (path === "/publishers") {
    schemas.push(
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Publishers", path: "/publishers" },
      ]),
    );
    schemas.push(faqPageLd(publishersFaqs));
    return schemas;
  }

  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length);
    const post = blogPosts.find((item) => item.slug === slug);
    if (post) {
      schemas.push(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: meta.path },
        ]),
      );
      schemas.push(blogPostingLd(post, meta));
      const faqs = blogPostFaqs(slug);
      if (faqs.length) schemas.push(faqPageLd(faqs));
    }
    return schemas;
  }

  if (path.startsWith("/verticals/")) {
    const slug = path.slice("/verticals/".length);
    const vertical = verticals.find((item) => item.slug === slug);
    if (vertical) {
      const name = verticalDisplayName(vertical);
      schemas.push(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Verticals", path: "/verticals" },
          { name, path: meta.path },
        ]),
      );
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${name} Pay Per Call & Leads`,
        description: meta.description,
        url: canonicalUrl(meta.path),
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        areaServed: "US",
        serviceType: "Pay-per-call marketing",
        category: vertical.category,
      });
      schemas.push(faqPageLd(verticalDetailFaqs(name)));
    }
    return schemas;
  }

  schemas.push(
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: meta.title.replace(` | ${site.name}`, ""), path: meta.path },
    ]),
  );
  return schemas;
}

function escapeAttr(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/** Static <head> tags for prerender. `data-rh` lets react-helmet-async reuse them. */
export function renderSeoHead(meta: RouteSeo, path?: string) {
  const fullTitle = buildTitle(meta.title);
  const url = canonicalUrl(meta.path);
  const imageUrl = ogImageUrl();
  const type = meta.type ?? "website";
  const routePath = path ?? meta.path;
  const schemas = schemasForPath(routePath);

  const lines = [
    `<title data-rh="true">${escapeAttr(fullTitle)}</title>`,
    `<meta data-rh="true" name="description" content="${escapeAttr(meta.description)}" />`,
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

  for (const schema of schemas) {
    lines.push(
      `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
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
