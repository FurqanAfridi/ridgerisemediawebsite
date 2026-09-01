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
    summary: "Drivers shopping after rate hikes or life changes.",
    description:
      "Shoppers call when a renewal jumps, a policy lapses, or they need state-minimum vs full coverage spelled out. Buy on CPL or cost per call with filters for state, age band, coverage type, and exclusive vs shared transfers. Continuous shopping is normal in auto, so exclusivity and duration rules matter more than a pretty quote form.",
    buyerFit: "Carriers, captive agencies, and independent agencies buying auto inbound calls.",
    publisherFit: "Search, social, and click-to-call paths with rate-comparison or quote intent.",
    keywords: [
      "buy auto insurance calls",
      "auto insurance live transfers",
      "auto insurance pay per call",
      "exclusive auto insurance leads",
    ],
  },
  {
    slug: "health-insurance",
    name: "Health Insurance",
    category: "Insurance",
    summary: "Consumers shopping ACA, short-term, or individual plans.",
    description:
      "Demand spikes in open enrollment and Special Enrollment Periods, then continues year-round for short-term and individual products. Filter by product type, state licensing, and hours so licensed agents only take calls they can place. Mixing ACA and short-term in one queue without a product flag burns licensed time.",
    buyerFit: "Licensed health agencies and call centers writing ACA and ancillary products.",
    publisherFit: "Comparison, education, and SEP-aware traffic with clear consent language.",
    keywords: [
      "buy health insurance calls",
      "ACA live transfers",
      "health insurance pay per call",
      "health insurance CPL leads",
    ],
  },
  {
    slug: "life-insurance",
    name: "Life Insurance",
    category: "Insurance",
    summary: "Term and whole life shoppers ready for an agent.",
    description:
      "Callers often want face amount, term length, and underwriting path explained before they buy. Match on product (term vs permanent), age, and exclusive vs shared so your agents aren't fighting the same prospect on three lines. Phone-ready life demand is a conversation, not a rate table.",
    buyerFit: "Life agencies, IMOs, and FGAs buying phone-ready life prospects.",
    publisherFit: "Content and paid traffic around protection, family planning, and quote funnels.",
    keywords: [
      "buy life insurance calls",
      "term life live transfers",
      "life insurance pay per call",
    ],
  },
  {
    slug: "home-insurance",
    name: "Home Insurance",
    category: "Insurance",
    summary: "Homeowners shopping dwelling coverage and bundles.",
    description:
      "Intent rises at purchase, renewal, and after carrier non-renewals or rate shocks. Geo and property-type filters matter. Coastal, wildfire, and high-value homes need different buyer capacity than standard dwelling policies. Buy on CPL or cost per call with those rules in the brief.",
    buyerFit: "Property carriers and multi-line agencies writing homeowners and bundles.",
    publisherFit: "Moving, homebuying, and local-intent traffic tied to address or ZIP.",
    keywords: [
      "buy home insurance calls",
      "homeowners insurance live transfers",
      "home insurance pay per call",
    ],
  },
  {
    slug: "medicare-advantage",
    name: "Medicare Advantage",
    category: "Insurance",
    summary: "Seniors comparing MA plans during AEP and OEP.",
    description:
      "Volume concentrates in Annual Enrollment Period, with a smaller OEP window and limited year-round SEP traffic. CMS marketing rules shape creative and consent. Buyers need licensed MA agents and hours that match senior call patterns. This is not a year-round 'insurance calls' dump.",
    buyerFit: "Medicare-focused agencies and call centers with MA product authority.",
    publisherFit: "Senior-focused media with AEP-ready creative and compliant call paths.",
    keywords: [
      "buy Medicare Advantage calls",
      "Medicare Advantage pay per call",
      "Medicare live transfers",
    ],
  },
  {
    slug: "final-expense",
    name: "Final Expense",
    category: "Insurance",
    summary: "Seniors asking about burial and final expense coverage.",
    description:
      "Callers are typically older, phone-first, and deciding on smaller face amounts faster than term life. Age bands, state, and exclusive routing keep your FE agents on conversations they can underwrite and close. Shared FE in a crowded market gets shopped the same afternoon.",
    buyerFit: "Final expense specialists and senior life agencies.",
    publisherFit: "Senior and protection audiences on search, native, and call-path offers.",
    keywords: [
      "buy final expense calls",
      "final expense live transfers",
      "burial insurance pay per call",
    ],
  },
  {
    slug: "personal-injury",
    name: "Personal Injury",
    category: "Legal",
    summary: "Injury victims seeking legal representation now.",
    description:
      "Qualified PI callers usually need screening for injury type, timing vs statute of limitations, and whether they already retained counsel. Exclusive transfers and intake-hour filters protect firm capacity on high-value case types. A signed case is not the same as a qualified transfer.",
    buyerFit: "PI law firms and intake partners buying exclusive inbound calls.",
    publisherFit: "Local and accident-intent search or call paths with tight qualification scripts.",
    keywords: [
      "buy personal injury calls",
      "personal injury live transfers",
      "PI pay per call",
    ],
  },
  {
    slug: "workers-compensation",
    name: "Workers' Compensation",
    category: "Legal",
    summary: "Injured workers looking for workplace injury counsel.",
    description:
      "Callers need screening for work-related injury, employer coverage, and whether they already have representation. State rules and claim timing matter. Buy exclusive or shared transfers with hours that match intake capacity, not a generic legal dump.",
    buyerFit: "Workers' comp firms and legal intake teams with state coverage.",
    publisherFit: "Workplace injury and local legal intent traffic with clear screening.",
    keywords: [
      "buy workers compensation calls",
      "workers comp live transfers",
      "workers compensation pay per call",
    ],
  },
  {
    slug: "disability-ssdi",
    name: "Disability / SSDI",
    category: "Legal",
    summary: "Claimants seeking help with SSDI and disability claims.",
    description:
      "Callers often need help with denials, appeals, or first filings. Qualification usually includes claim status, prior representation, and whether they can still work. Buy CPL or cost per call with those screens in the brief before volume scales.",
    buyerFit: "Disability advocates and SSDI-focused legal intake teams.",
    publisherFit: "Disability and benefits-intent traffic with compliant consent paths.",
    keywords: [
      "buy SSDI calls",
      "disability live transfers",
      "SSDI pay per call",
    ],
  },
  {
    slug: "bankruptcy",
    name: "Bankruptcy",
    category: "Legal",
    summary: "Consumers exploring Chapter 7 and Chapter 13 options.",
    description:
      "Debt load, prior filings, and state matter more than raw volume. Filter for chapter fit and exclusive vs shared so attorneys are not competing on the same distressed caller. Phone-ready bankruptcy demand needs a clear qualification script.",
    buyerFit: "Bankruptcy attorneys and consumer legal intake partners.",
    publisherFit: "Debt and legal-intent publishers with hardship-aware landing paths.",
    keywords: [
      "buy bankruptcy calls",
      "bankruptcy live transfers",
      "Chapter 7 pay per call",
    ],
  },
  {
    slug: "renters-insurance",
    name: "Renters Insurance",
    category: "Insurance",
    summary: "Renters shopping liability and contents coverage.",
    description:
      "Callers often need a policy for a lease requirement or after a loss. Age, state, and occupancy filters keep agents on quote-ready conversations. Buy CPL or cost per call when renters demand is strong enough to staff.",
    buyerFit: "Carriers and agencies writing renters and multi-line personal lines.",
    publisherFit: "Moving, apartment, and local-intent traffic tied to lease or ZIP.",
    keywords: [
      "buy renters insurance calls",
      "renters insurance live transfers",
      "renters insurance pay per call",
    ],
  },
  {
    slug: "commercial-auto-insurance",
    name: "Commercial Auto Insurance",
    category: "Insurance",
    summary: "Business owners shopping fleet and commercial auto coverage.",
    description:
      "Fleet size, vehicle type, and state licensing change what a qualified call looks like. Filter for commercial vs personal auto so agents are not quoting the wrong product. Buy on CPL or cost per call with those rules written before the first transfer.",
    buyerFit: "Commercial lines agencies and carriers writing business auto.",
    publisherFit: "Small-business and fleet-intent traffic with clear commercial framing.",
    keywords: [
      "buy commercial auto insurance calls",
      "fleet insurance live transfers",
      "commercial auto pay per call",
    ],
  },
  {
    slug: "debt-settlement",
    name: "Debt Settlement",
    category: "Finance",
    summary: "Consumers with unsecured debt seeking relief options.",
    description:
      "Minimum debt thresholds are the core qualifier. Callers below your floor burn intake time. Filter by debt amount, unsecured vs secured mix, and state so your phone team only talks to enrollable prospects. Buy on CPL or cost per call with that floor written before the first transfer.",
    buyerFit: "Debt settlement companies and credit-resolution call centers.",
    publisherFit: "Finance publishers with hardship, credit-card, and debt-load traffic.",
    keywords: [
      "buy debt settlement calls",
      "debt relief live transfers",
      "debt settlement pay per call",
    ],
  },
  {
    slug: "personal-loans",
    name: "Personal Loans",
    category: "Finance",
    summary: "Consumers shopping personal loan and installment options.",
    description:
      "Credit band, loan purpose, and state decide whether a caller is fundable. Filter hard so your closers are not talking to people they cannot place. Buy CPL or cost per call with product and credit rules matched to your book.",
    buyerFit: "Lenders, brokers, and finance call centers buying loan-intent inbound.",
    publisherFit: "Credit and finance publishers with loan-comparison and rate intent.",
    keywords: [
      "buy personal loan calls",
      "personal loan live transfers",
      "personal loans pay per call",
    ],
  },
  {
    slug: "credit-repair",
    name: "Credit Repair",
    category: "Finance",
    summary: "Consumers seeking help improving credit scores.",
    description:
      "Callers usually want dispute help, score goals, and pricing explained on the phone. State compliance and exclusive vs shared routing protect closer capacity. Write qualification into the brief so soft credit curiosity does not fill the queue.",
    buyerFit: "Credit repair companies and finance call centers with phone closers.",
    publisherFit: "Credit and finance problem-aware traffic with clear consent language.",
    keywords: [
      "buy credit repair calls",
      "credit repair live transfers",
      "credit repair pay per call",
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    category: "Home Services",
    summary: "Homeowners needing plumbing repair or replacement.",
    description:
      "Emergency vs scheduled work changes ticket size and talk track. Geo and homeownership filters keep techs on jobs they can run. Cap concurrency so your board is not overloaded while calls keep landing after hours.",
    buyerFit: "Plumbing contractors and home-services networks with local capacity.",
    publisherFit: "Local service-area traffic with emergency and quote intent.",
    keywords: [
      "buy plumbing calls",
      "plumbing live transfers",
      "plumbing pay per call",
    ],
  },
  {
    slug: "windows",
    name: "Windows & Doors",
    category: "Home Services",
    summary: "Homeowners requesting window and door replacement quotes.",
    description:
      "Homeownership, project size, and geo decide whether a call becomes an in-home estimate. Filter for exclusive vs shared based on setter capacity. Buy CPL or cost per call with those rules before scaling.",
    buyerFit: "Window and door installers with appointment-setting teams.",
    publisherFit: "Home improvement traffic with ZIP-level targeting and quote intent.",
    keywords: [
      "buy window replacement calls",
      "windows live transfers",
      "window replacement pay per call",
    ],
  },
  {
    slug: "water-damage",
    name: "Water Damage Restoration",
    category: "Home Services",
    summary: "Homeowners seeking water and flood restoration help.",
    description:
      "Urgency is high after leaks, storms, and floods. Geo, homeownership, and insurance-claim intent are the usual filters. Buyers who ignore response-time capacity overspend on calls they cannot dispatch. Match hours and concurrency to crew availability.",
    buyerFit: "Restoration companies and home-services networks with rapid response.",
    publisherFit: "Storm, emergency, and local-intent publishers ready to surge.",
    keywords: [
      "buy water damage calls",
      "water restoration live transfers",
      "water damage pay per call",
    ],
  },
  {
    slug: "solar",
    name: "Solar",
    category: "Home Services",
    summary: "Homeowners requesting solar installation quotes.",
    description:
      "Homeownership, roof condition, utility territory, and sun exposure decide whether a call is worth an appointment. Geo and homeowner filters matter more here than raw volume. Shared vs exclusive depends on your setter capacity. A booked consult that isn't installable is a cost, not a win.",
    buyerFit: "Regional installers and national solar buyers with appointment teams.",
    publisherFit: "Home improvement and energy-savings traffic with ZIP-level targeting.",
    keywords: [
      "buy solar calls",
      "solar live transfers",
      "solar pay per call",
      "solar CPL leads",
    ],
  },
  {
    slug: "hvac",
    name: "HVAC",
    category: "Home Services",
    summary: "Homeowners needing heat, AC repair, or replacement.",
    description:
      "Demand spikes on heat waves and cold snaps. Replacement vs repair intent changes ticket size and talk track. Cap concurrency and geo tightly so your techs aren't booked out while calls keep landing. Soft weeks after a weather window are normal. Treat them like a broken campaign and you burn good sources.",
    buyerFit: "HVAC contractors and home-services networks with same-day or next-day capacity.",
    publisherFit: "Local SEO and paid service-area traffic with emergency and quote intent.",
    keywords: [
      "buy HVAC calls",
      "HVAC live transfers",
      "HVAC pay per call",
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    category: "Home Services",
    summary: "Homeowners seeking roof repair or replacement estimates.",
    description:
      "Storm corridors and hail seasons create short, intense demand windows. Homeownership, roof age, and insurance-claim intent are the usual filters. Buyers who ignore geo and weather timing overspend on soft weeks. Buy roofing calls and leads on CPL or cost per call with those rules in the brief.",
    buyerFit: "Roofing contractors and home-services platforms with storm-response capacity.",
    publisherFit: "Storm, home, and local-intent publishers ready to surge in weather windows.",
    keywords: [
      "buy roofing calls",
      "roofing live transfers",
      "roofing pay per call",
    ],
  },
  {
    slug: "home-security",
    name: "Home Security",
    category: "Home Services",
    summary: "Homeowners comparing monitored security systems.",
    description:
      "Callers often weigh DIY vs professionally monitored, and whether they rent or own. Product filters (equipment vs monitoring), exclusivity, and hours keep dealer and brand teams on installable appointments. Evening and weekend coverage matters because that's when people are home to talk about the house.",
    buyerFit: "Security brands and authorized dealers with install scheduling.",
    publisherFit: "Home and safety-focused search, social, and comparison traffic.",
    keywords: [
      "buy home security calls",
      "security system live transfers",
      "home security pay per call",
    ],
  },
  {
    slug: "mortgage",
    name: "Mortgage / Home Loans",
    category: "Finance",
    summary: "Borrowers exploring purchase and refinance options.",
    description:
      "Rate moves flip purchase vs refi mix quickly. Credit band and loan purpose are the filters that protect loan-officer time. Buy CPL or cost-per-call with product and state rules matched to what your team can close. A refinance shopper and a purchase shopper are not the same campaign.",
    buyerFit: "Lenders, brokers, and mortgage call centers.",
    publisherFit: "Finance and real-estate traffic with rate or homebuying intent.",
    keywords: [
      "buy mortgage calls",
      "refinance live transfers",
      "mortgage pay per call",
    ],
  },
  {
    slug: "tax-relief",
    name: "Tax Relief",
    category: "Finance",
    summary: "Taxpayers seeking help with IRS debt and resolution.",
    description:
      "Minimum tax debt and filing status usually decide whether a caller is enrollable. State rules and product fit (resolution vs prep) matter. Buyers who skip those filters pay for conversations they can't help. Write the floor into the brief before the first transfer.",
    buyerFit: "Tax relief firms and financial resolution companies with phone closers.",
    publisherFit: "Tax and finance problem-aware traffic with clear debt-size qualification.",
    keywords: [
      "buy tax relief calls",
      "IRS tax help live transfers",
      "tax relief pay per call",
    ],
  },
  {
    slug: "education",
    name: "Education / Colleges",
    category: "Other",
    summary: "Students exploring degree and training programs.",
    description:
      "Callers ask about program fit, start dates, and financing. Enrollment teams need program and geo filters so transfers match what the school actually offers. CPL and cost-per-call both work when qualification happens before the handoff. A transfer into a program you don't run is a wasted enrollment minute.",
    buyerFit: "Colleges, trade schools, and enrollment centers buying phone transfers.",
    publisherFit: "Education and career-intent media with program-matched landing paths.",
    keywords: [
      "buy education calls",
      "college enrollment live transfers",
      "education pay per call",
    ],
  },
  {
    slug: "trade-schools",
    name: "Trade Schools",
    category: "Other",
    summary: "Students exploring trade and vocational programs.",
    description:
      "Callers ask about programs, start dates, and financing for hands-on careers. Enrollment teams need program and geo filters so transfers match what the school can start. CPL and cost-per-call both work when qualification happens before the handoff.",
    buyerFit: "Trade schools and vocational enrollment centers buying phone transfers.",
    publisherFit: "Career and skills-intent media with program-matched landing paths.",
    keywords: [
      "buy trade school calls",
      "vocational enrollment live transfers",
      "trade school pay per call",
    ],
  },
  {
    slug: "online-education",
    name: "Online Education",
    category: "Other",
    summary: "Students shopping online degree and certificate programs.",
    description:
      "Callers want program fit, pacing, and financing explained on the phone. Filter by program type and geo so enrollment advisors only take transfers they can start. Buy CPL or cost per call with those rules in the brief.",
    buyerFit: "Online schools and enrollment centers with remote advising capacity.",
    publisherFit: "Education and career-intent publishers with program-specific paths.",
    keywords: [
      "buy online education calls",
      "online degree live transfers",
      "online education pay per call",
    ],
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
