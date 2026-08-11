export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-pay-per-call-marketing",
    title: "What Is Pay-Per-Call Marketing? A Practical Guide",
    excerpt:
      "Pay-per-call means you pay when a qualified phone conversation happens—not for a click. How buyers use it, filters that matter, and where it breaks.",
    category: "Education",
    author: "RidgeRise Team",
    date: "2026-03-12",
    readTime: "2 min",
    tags: [
      "pay per call",
      "cost per call",
      "buy inbound calls",
      "call generation",
    ],
    content: [
      "Pay-per-call marketing is simple on paper: a buyer pays when a consumer who meets campaign rules reaches their phone line. You're not buying a click or a form fill. You're buying a live conversation with someone who already asked to talk.",
      "Most buyers set qualification before the transfer—geo, product, hours, sometimes a short IVR or agent screen—then a duration or disposition rule decides billable vs not. Exclusive calls cost more because only your team gets that prospect. Shared calls are cheaper and compete for the same caller. CPL still shows up when you want a lead record plus a call, or a call-only path isn't the right fit for intake.",
      "The honest caveat: phone intent is high, but a qualified transfer is not a sale. Answer rate, talk track, and how tightly you defined \"qualified\" decide whether cost per call looks smart or expensive. Bad hours, loose geo, or no concurrency caps will burn budget on calls your team can't take well.",
      "RidgeRise Media sells qualified inbound calls, leads, and traffic on CPL and cost-per-call models across insurance, legal, finance, and home services. Volume comes from in-house media buying plus a vetted partner network, with source-level quality monitoring on both.",
      "If you're weighing pay per call against web leads for your intake team, start on /buyers and tell us what a qualified call looks like for your vertical—states, hours, exclusivity, and duration rules included.",
    ],
  },
  {
    slug: "insurance-pay-per-call-best-practices",
    title: "Insurance Pay-Per-Call: Filters Buyers Get Wrong",
    excerpt:
      "Auto, health, life, Medicare, and home insurance calls convert when geo, product, and hours match intake. Miss those and duration looks fine while ROI dies.",
    category: "Insurance",
    author: "RidgeRise Team",
    date: "2026-02-28",
    readTime: "2 min",
    tags: [
      "insurance pay per call",
      "buy insurance calls",
      "auto insurance calls",
      "Medicare Advantage calls",
      "call quality",
    ],
    content: [
      "Insurance pay-per-call works because shoppers often need an agent to explain coverage, not another quote form. Auto callers show up after rate hikes. Health spikes in open enrollment and SEPs. Medicare Advantage piles into AEP. Final expense is phone-first and age-sensitive. Same marketplace, different filters.",
      "Buyers who win write the campaign like an intake brief: product (ACA vs short-term, term vs FE, MA vs Medigap), licensed states, business hours, exclusive vs shared, and what happens on transfers outside those rules. Disposition tracking matters more than vanity duration—did the agent speak to the right person about the right product?",
      "What goes wrong: buying \"insurance calls\" with no product split, taking MA traffic with creative that wouldn't survive a compliance review, or leaving concurrency uncapped so Monday morning dumps ten calls onto two agents. Shared calls aren't \"bad\"; they're a poor fit if your close process needs a clean exclusive handoff.",
      "RidgeRise runs insurance campaigns on CPL and cost per call with those filters set before traffic goes live, and monitors sources when quality drifts. We don't claim every call becomes a policy.",
      "For vertical-specific demand—auto, health, life, home, Medicare Advantage, or final expense—see /verticals or talk through pricing and filters on /buyers.",
    ],
  },
  {
    slug: "how-publishers-get-paid-faster",
    title: "Publisher Payouts in Pay-Per-Call: What Speeds Them Up",
    excerpt:
      "Publisher payout speed follows clean call tracking, clear duration rules, and traffic that matches buyer filters—not mystery invoice cycles.",
    category: "Publishers",
    author: "RidgeRise Team",
    date: "2026-02-10",
    readTime: "1 min",
    tags: [
      "pay per call publishers",
      "call affiliate programs",
      "monetize call traffic",
      "publisher payouts",
    ],
    content: [
      "Publishers get paid faster when disputes are rare and reporting is clear enough that nobody argues about whether a call counted. Opaque duration rules and surprise chargebacks are what stall invoices—not \"the network being slow\" in the abstract.",
      "Practically: use tracking that shows transfer time, duration, and disposition against the buyer's written rules. Keep creative and call paths matched to the offer so you aren't flooding a campaign with short, off-geo, or wrong-product calls. Verticals with steady buyer demand—insurance, legal, finance, home services—are easier to scale than one-off dockets you can't staff overnight.",
      "Caveat: chasing the highest posted payout with loose traffic is a short game. One bad week of invalids can freeze a payout cycle while QA reviews recordings. Quality standards and campaign-specific consent aren't optional paperwork; they're what keeps accounts open.",
      "RidgeRise Media works with publishers and media buyers who can meet those filters across live buyer campaigns. We won't invent payout amounts or cycles here—those get confirmed when you apply.",
      "If you have call-path, search, or social traffic in our verticals, apply on /publishers and tell us traffic type, geos, and volumes you can sustain.",
    ],
  },
  {
    slug: "buyer-guide-call-quality",
    title: "Call Quality Beyond Duration: What Buyers Should Track",
    excerpt:
      "Duration filters catch short junk. They miss wrong-product callers, missed answers, and sources that look fine until close rates fall hard.",
    category: "Buyers",
    author: "RidgeRise Team",
    date: "2026-01-22",
    readTime: "1 min",
    tags: [
      "call quality",
      "buy inbound calls",
      "cost per call",
      "exclusive vs shared calls",
      "dispositions",
    ],
    content: [
      "Duration is a floor, not a scorecard. A two-minute call can be a wrong product. A six-minute call can be a tire-kicker who will never buy. Buyers who only watch billable minutes find out too late that close rates fell while invoices stayed \"healthy.\"",
      "Track answer rate on your side first—if your team misses transfers, no network can fix that. Then dispositions: wrong geo, already insured, not the decision-maker, retained counsel, below debt threshold. Source-level trends matter; one publisher can drag an otherwise clean campaign. Exclusive vs shared should show up in how you judge intent, not just in the rate card.",
      "Honest limit: networks can enforce qualification scripts, recording review, and cutoffs on bad sources. They can't make your agents close. If talk tracks are weak or hours don't match when callers actually ring, you'll blame media for an intake problem.",
      "RidgeRise Media gives buyers campaign filters and quality monitoring across hybrid supply—owned media plus vetted partners—so you can compare sources instead of guessing from a monthly PDF.",
      "Ready to define what \"qualified\" means for your intake team? Start at /buyers with vertical, states, hours, and disposition rules.",
    ],
  },
  {
    slug: "compliance-first-pay-per-call",
    title: "Compliance-Conscious Pay-Per-Call: What Buyers Should Require",
    excerpt:
      "TCPA-aware processes and campaign-specific consent aren't slogans. What buyers should require from any call network before raising budget.",
    category: "Compliance",
    author: "RidgeRise Team",
    date: "2026-01-08",
    readTime: "1 min",
    tags: [
      "TCPA",
      "pay per call compliance",
      "call generation company",
      "buy qualified calls",
    ],
    content: [
      "Buyers should treat compliance as a campaign design problem, not a footer on a landing page. Consent language, DNC awareness, recording rules, and vertical-specific marketing restrictions (Medicare is the obvious example) need to be set before traffic runs—not after a complaint.",
      "Ask concrete questions: How is consent captured for this offer? What happens when a source fails review? Can you pause a publisher without killing the whole campaign? Call recording and spot review where applicable beat \"we trust our affiliates\" every time. Campaign-specific requirements beat one generic policy pasted on every vertical.",
      "Caveat: no network can honestly promise \"100% compliant\" or \"zero risk.\" Laws, carrier rules, and buyer policies change. What you want is TCPA-aware processes, documented filters, and a habit of cutting bad supply fast—not a guarantee that belongs in a courtroom fantasy.",
      "RidgeRise builds campaigns with compliance-conscious routing and quality monitoring; we won't invent certifications or legal guarantees. The goal is durable buyer spend, not a week of cheap volume that gets you sued.",
      "If you're buying calls or leads and need those standards written into the campaign brief, talk to us on /buyers or /contact.",
    ],
  },
  {
    slug: "home-services-call-seasonality",
    title: "HVAC, Roofing & Solar Calls: Plan for Seasonality",
    excerpt:
      "HVAC, roofing, and solar call demand follows weather and storm calendars. Set caps, geos, and hours before the spike—not mid-week scramble.",
    category: "Home Services",
    author: "RidgeRise Team",
    date: "2025-12-18",
    readTime: "1 min",
    tags: [
      "HVAC pay per call",
      "roofing calls",
      "solar leads",
      "home services calls",
      "buy HVAC calls",
    ],
    content: [
      "HVAC, roofing, and solar pay-per-call demand does not arrive in a flat line. Heat waves and cold snaps fill HVAC lines. Hail and wind create short roofing surges. Solar stays more appointment-driven and geo-sensitive—homeownership and utility territory matter as much as the calendar.",
      "Buyers who plan ahead raise or lower caps, tighten geos, and staff hours before the weather window—not after hold times explode. Shared vs exclusive should match setter capacity: exclusive helps when every appointment slot is precious; shared can fill volume when your team can absorb competition. CPL still fits if your funnel wants a lead plus a follow-up call.",
      "What fails: buying national \"home services\" mush with no storm or climate filter, or leaving concurrency uncapped so a Monday storm dumps more live transfers than your dispatch board can schedule. Soft weeks after a spike are normal; treating them like a broken campaign burns good publisher relationships.",
      "RidgeRise covers HVAC, roofing, solar, and home security with filtered CPL and cost-per-call campaigns. We won't invent storm volumes or close rates—your market and capacity set the plan.",
      "For vertical pages and filters, see /verticals/hvac, /verticals/roofing, and /verticals/solar, or discuss capacity and geos on /buyers.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
