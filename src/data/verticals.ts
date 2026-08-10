export type Vertical = {
  slug: string;
  name: string;
  category: "Insurance" | "Legal" | "Home Services" | "Finance" | "Other";
  summary: string;
  description: string;
  buyerFit: string;
  publisherFit: string;
  keywords: string[];
};

export const verticals: Vertical[] = [
  {
    slug: "auto-insurance",
    name: "Auto Insurance",
    category: "Insurance",
    summary: "High-intent shoppers comparing quotes for car coverage.",
    description:
      "Route live callers comparing auto policies to verified buyers. Strong volume, clear intent, and consistent payout opportunities for publishers.",
    buyerFit: "Carriers and agencies buying exclusive or shared auto transfer calls.",
    publisherFit: "Media buyers and affiliates with search, social, or call-path traffic.",
    keywords: ["auto insurance leads", "pay per call auto insurance", "car insurance calls"],
  },
  {
    slug: "health-insurance",
    name: "Health Insurance",
    category: "Insurance",
    summary: "ACA, short-term, and individual health quote seekers.",
    description:
      "Connect consumers shopping health coverage with compliant buyers during open enrollment and year-round demand windows.",
    buyerFit: "Agencies and call centers licensed for health products.",
    publisherFit: "Publishers with education, comparison, and intent-driven traffic.",
    keywords: ["health insurance PPC", "ACA call leads", "health insurance pay per call"],
  },
  {
    slug: "life-insurance",
    name: "Life Insurance",
    category: "Insurance",
    summary: "Term and whole life shoppers ready to talk to an agent.",
    description:
      "Qualified life insurance callers with strong close rates when matched to licensed buyers and clear campaign filters.",
    buyerFit: "Life agencies and IMOs seeking phone-ready prospects.",
    publisherFit: "Content and paid publishers focused on protection and family planning.",
    keywords: ["life insurance calls", "term life PPC", "life insurance pay per call"],
  },
  {
    slug: "home-insurance",
    name: "Home Insurance",
    category: "Insurance",
    summary: "Homeowners shopping property coverage and bundling options.",
    description:
      "Transfer homeowners comparing dwelling coverage to buyers with regional and product filters.",
    buyerFit: "Property insurers and multi-line agencies.",
    publisherFit: "Home, moving, and local-intent traffic sources.",
    keywords: ["homeowners insurance leads", "home insurance calls"],
  },
  {
    slug: "medicare-advantage",
    name: "Medicare Advantage",
    category: "Insurance",
    summary: "Seniors evaluating MA and related Medicare products.",
    description:
      "Seasonal and evergreen Medicare Advantage call volume with compliance-first routing for licensed buyers.",
    buyerFit: "Medicare-focused agencies and call centers.",
    publisherFit: "Senior-focused media and compliant lead paths.",
    keywords: ["Medicare Advantage PPC", "Medicare pay per call"],
  },
  {
    slug: "final-expense",
    name: "Final Expense",
    category: "Insurance",
    summary: "Burial and final expense coverage inquiries.",
    description:
      "High-intent final expense callers for buyers specializing in senior life products.",
    buyerFit: "Final expense specialists and senior life agencies.",
    publisherFit: "Publishers with senior and protection-oriented audiences.",
    keywords: ["final expense calls", "burial insurance PPC"],
  },
  {
    slug: "personal-injury",
    name: "Personal Injury",
    category: "Legal",
    summary: "Injury victims seeking legal representation.",
    description:
      "Connect accident and injury callers with vetted law firms under compliant intake rules.",
    buyerFit: "PI firms and intake partners buying exclusive calls.",
    publisherFit: "Publishers with local and accident-intent traffic.",
    keywords: ["personal injury pay per call", "PI leads"],
  },
  {
    slug: "mass-tort",
    name: "Mass Tort / Legal",
    category: "Legal",
    summary: "Campaign-driven legal intakes across active dockets.",
    description:
      "Support mass tort and legal campaigns with filtered call traffic and transparent reporting.",
    buyerFit: "Law firms and legal marketers running docket campaigns.",
    publisherFit: "Publishers who can scale compliant legal call paths.",
    keywords: ["mass tort calls", "legal pay per call"],
  },
  {
    slug: "debt-settlement",
    name: "Debt Settlement",
    category: "Finance",
    summary: "Consumers seeking debt relief options.",
    description:
      "Transfer debt-burdened callers to buyers offering settlement and related financial solutions.",
    buyerFit: "Debt settlement and credit companies with phone sales teams.",
    publisherFit: "Finance publishers with hardship and credit traffic.",
    keywords: ["debt settlement PPC", "debt relief calls"],
  },
  {
    slug: "solar",
    name: "Solar",
    category: "Home Services",
    summary: "Homeowners exploring solar installation quotes.",
    description:
      "Route solar-interested homeowners to regional installers and vetted buyer campaigns.",
    buyerFit: "Solar installers and national home-services buyers.",
    publisherFit: "Home improvement and green-energy publishers.",
    keywords: ["solar pay per call", "solar leads"],
  },
  {
    slug: "hvac",
    name: "HVAC",
    category: "Home Services",
    summary: "Heating and cooling service and replacement callers.",
    description:
      "Local and national HVAC demand with strong seasonal peaks and clear service intent.",
    buyerFit: "HVAC companies and home-services networks.",
    publisherFit: "Local SEO and paid publishers with service-area traffic.",
    keywords: ["HVAC calls", "HVAC pay per call"],
  },
  {
    slug: "roofing",
    name: "Roofing",
    category: "Home Services",
    summary: "Homeowners requesting roof repair or replacement estimates.",
    description:
      "Connect roofing-intent callers to buyers with geo and storm filters.",
    buyerFit: "Roofing contractors and home-services platforms.",
    publisherFit: "Storm, home, and local intent publishers.",
    keywords: ["roofing pay per call", "roofing leads"],
  },
  {
    slug: "home-security",
    name: "Home Security",
    category: "Home Services",
    summary: "Homeowners comparing monitored security systems.",
    description:
      "Transfer security shoppers to national and regional buyer campaigns.",
    buyerFit: "Security brands and authorized dealers.",
    publisherFit: "Home and safety-focused traffic sources.",
    keywords: ["home security PPC", "security system calls"],
  },
  {
    slug: "mortgage",
    name: "Mortgage / Home Loans",
    category: "Finance",
    summary: "Borrowers exploring refinance and purchase options.",
    description:
      "Qualified mortgage callers matched to lenders with product and credit filters.",
    buyerFit: "Lenders, brokers, and mortgage call centers.",
    publisherFit: "Finance and real-estate oriented publishers.",
    keywords: ["mortgage pay per call", "refinance calls"],
  },
  {
    slug: "tax-relief",
    name: "Tax Relief",
    category: "Finance",
    summary: "Taxpayers seeking help with IRS debt and relief options.",
    description:
      "High-intent tax relief callers for compliant buyers with strong phone close rates.",
    buyerFit: "Tax relief firms and financial resolution companies.",
    publisherFit: "Publishers with tax and finance problem-aware traffic.",
    keywords: ["tax relief PPC", "IRS tax help calls"],
  },
  {
    slug: "education",
    name: "Education / Colleges",
    category: "Other",
    summary: "Prospective students exploring degree and training programs.",
    description:
      "Connect education shoppers with schools and enrollment partners buying phone transfers.",
    buyerFit: "Colleges, trade schools, and enrollment centers.",
    publisherFit: "Education publishers and career-intent media.",
    keywords: ["education pay per call", "college enrollment calls"],
  },
];

export const verticalCategories = [
  "Insurance",
  "Legal",
  "Home Services",
  "Finance",
  "Other",
] as const;

export function getVerticalBySlug(slug: string): Vertical | undefined {
  return verticals.find((vertical) => vertical.slug === slug);
}
