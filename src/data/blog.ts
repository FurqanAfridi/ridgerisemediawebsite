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
      "You pay when a qualified caller reaches your line, not for a click. How buyers set filters, exclusive vs shared, and where cost per call breaks.",
    category: "Education",
    author: "RidgeRise Team",
    date: "2026-03-12",
    readTime: "5 min",
    tags: [
      "pay per call",
      "cost per call",
      "buy inbound calls",
      "call generation",
    ],
    content: [
      "You paid for the click. The shopper never called. Or they filled a form at 11pm and your team called back into voicemail. Pay per call flips that. A buyer pays when a consumer who meets campaign rules reaches the phone line. You are buying a live conversation with someone who already asked to talk.",
      "Most buyers set qualification before the transfer. Geo, product, hours, sometimes a short IVR or agent screen. Then a duration or disposition rule decides billable vs not. Exclusive calls cost more because only your team gets that prospect. Shared calls are cheaper and compete for the same caller. CPL still shows up when you want a lead record plus a call, or a call-only path isn't the right fit for intake.",
      "The filter work is the job. If you buy 'insurance calls' with no product split, your licensed agents will spend Monday morning explaining short-term medical to someone who needed ACA, or the reverse. If you leave hours open while your floor works 9 to 5, you will pay for transfers that hit voicemail. If you skip concurrency caps, ten live transfers land on two agents and everyone looks busy while close rates fall.",
      "The honest caveat: phone intent is high, but a qualified transfer is not a sale. Answer rate, talk track, and how tightly you defined qualified decide whether cost per call looks smart or expensive. Bad hours, loose geo, or no exclusivity plan will burn budget on calls your team can't take well. Duration is a floor, not proof the caller will buy.",
      "RidgeRise Media sells qualified inbound calls, leads, and traffic on CPL and cost-per-call models across Insurance, Legal, Finance, and Home Services. Volume comes from in-house media buying plus a vetted partner network, with source-level quality monitoring on both. We don't claim every call becomes a customer.",
      "If you're weighing pay per call against web leads for your intake team, start on /buyers and tell us what a qualified call looks like for your vertical. States, hours, exclusivity, and duration rules included.",
    ],
  },
  {
    slug: "insurance-pay-per-call-best-practices",
    title: "Insurance Pay-Per-Call: Filters Buyers Get Wrong",
    excerpt:
      "Auto, health, life, Medicare, and home calls convert when product, geo, and hours match intake. Miss those and duration looks fine while ROI dies.",
    category: "Insurance",
    author: "RidgeRise Team",
    date: "2026-02-28",
    readTime: "5 min",
    tags: [
      "insurance pay per call",
      "buy insurance calls",
      "auto insurance calls",
      "Medicare Advantage calls",
      "call quality",
    ],
    content: [
      "Insurance pay-per-call works because shoppers often need an agent to explain coverage, not another quote form. Auto callers show up after rate hikes. Health spikes in open enrollment and SEPs. Medicare Advantage piles into AEP. Final expense is phone-first and age-sensitive. Same marketplace, different filters. Treat them as one bucket and you will overpay for talk time that your desk can't place.",
      "Buyers who win write the campaign like an intake brief. Product (ACA vs short-term, term vs FE, MA vs Medigap), licensed states, business hours, exclusive vs shared, and what happens on transfers outside those rules. Disposition tracking matters more than vanity duration. Did the agent speak to the right person about the right product? A four-minute call on the wrong product is still a miss.",
      "What goes wrong is predictable. Buying 'insurance calls' with no product split. Taking MA traffic with creative that wouldn't survive a compliance review. Leaving concurrency uncapped so Monday morning dumps ten calls onto two agents. Shared calls aren't bad. They're a poor fit if your close process needs a clean exclusive handoff. Exclusive is a poor fit if you can't staff the volume you asked for.",
      "Medicare is the obvious special case. AEP is not a year-round faucet. CMS marketing rules shape what you can say, when you can call, and how consent is captured. If your team isn't licensed for MA in the states you buy, don't buy the traffic and hope the agents 'figure it out.' They won't, and you'll argue about billable after the fact.",
      "RidgeRise runs insurance campaigns on CPL and cost per call with those filters set before traffic goes live, and monitors sources when quality drifts. We don't claim every call becomes a policy. Auto, health, life, home, Medicare Advantage, and final expense each get their own brief.",
      "For vertical-specific demand, see /verticals or talk through pricing and filters on /buyers. Bring licensed states, product split, and hours. We'll map exclusive vs shared from there.",
    ],
  },
  {
    slug: "how-publishers-get-paid-faster",
    title: "Publisher Payouts in Pay-Per-Call: What Speeds Them Up",
    excerpt:
      "Publisher payouts move when tracking is clean, duration rules are written, and traffic matches the buyer brief. Mystery cycles stall invoices.",
    category: "Publishers",
    author: "RidgeRise Team",
    date: "2026-02-10",
    readTime: "4 min",
    tags: [
      "pay per call publishers",
      "call affiliate programs",
      "monetize call traffic",
      "publisher payouts",
    ],
    content: [
      "Publishers get paid faster when disputes are rare and reporting is clear enough that nobody argues about whether a call counted. Opaque duration rules and surprise chargebacks are what stall invoices. Not 'the network being slow' in the abstract. If you can't see transfer time, duration, and disposition against the buyer's written rules, you will spend Friday reconstructing a week of calls.",
      "Keep creative and call paths matched to the offer so you aren't flooding a campaign with short, off-geo, or wrong-product calls. Verticals with steady buyer demand (Insurance, Legal, Finance, Home Services) are easier to scale than one-off dockets you can't staff overnight. A mass tort that closed last month is not an open payout. It's a paused campaign.",
      "Chasing the highest posted payout with loose traffic is a short game. One bad week of invalids can freeze a payout cycle while QA reviews recordings. Quality standards and campaign-specific consent aren't optional paperwork. They're what keeps accounts open. If your path can't hold a duration floor or a case-type screen, don't send it 'just to test.' Tests that fail still create disputes.",
      "RidgeRise Media works with publishers and media buyers who can meet those filters across live buyer campaigns. We won't invent payout amounts or cycles here. Those get confirmed when you apply. Tracking stays visible. Black-box deductions are not the model.",
      "If you have call-path, search, or social traffic in our verticals, apply on /publishers and tell us traffic type, geos, and volumes you can sustain. We'll tell you where buyer demand is live.",
    ],
  },
  {
    slug: "buyer-guide-call-quality",
    title: "Call Quality Beyond Duration: What Buyers Should Track",
    excerpt:
      "Duration catches short junk. It misses wrong-product callers, missed answers, and sources that look clean until close rates fall. Track dispositions.",
    category: "Buyers",
    author: "RidgeRise Team",
    date: "2026-01-22",
    readTime: "4 min",
    tags: [
      "call quality",
      "buy inbound calls",
      "cost per call",
      "exclusive vs shared calls",
      "dispositions",
    ],
    content: [
      "Duration is a floor, not a scorecard. A two-minute call can be a wrong product. A six-minute call can be a tire-kicker who will never buy. Buyers who only watch billable minutes find out too late that close rates fell while invoices stayed 'healthy.' If your QA never listens, you are buying talk time, not intake.",
      "Track answer rate on your side first. If your team misses transfers, no network can fix that. Then dispositions: wrong geo, already insured, not the decision-maker, retained counsel, below debt threshold. Source-level trends matter. One publisher can drag an otherwise clean campaign. Exclusive vs shared should show up in how you judge intent, not just in the rate card.",
      "Write the invalid list before launch. Wrong state. Renter when you required owner. Already a customer if you can prove it. Prank. Duration miss if you set one. Gray areas (shade on a solar roof, credit on a loan) only count if you put them in the billable definition. Don't try to reverse a call because the closer didn't book. That's intake, not traffic.",
      "Honest limit: networks can enforce qualification scripts, recording review, and cutoffs on bad sources. They can't make your agents close. If talk tracks are weak or hours don't match when callers actually ring, you'll blame media for an intake problem. We can cut a path that fails the brief. We can't staff your floor.",
      "RidgeRise Media gives buyers campaign filters and quality monitoring across hybrid supply. Owned media plus vetted partners, so you can compare sources instead of guessing from a monthly PDF.",
      "Ready to define what qualified means for your intake team? Start at /buyers with vertical, states, hours, and disposition rules.",
    ],
  },
  {
    slug: "compliance-first-pay-per-call",
    title: "Compliance-Conscious Pay-Per-Call: What Buyers Should Require",
    excerpt:
      "TCPA-aware setup and campaign-specific consent belong in the campaign brief, not a footer. Require them in writing before you raise any budget.",
    category: "Compliance",
    author: "RidgeRise Team",
    date: "2026-01-08",
    readTime: "4 min",
    tags: [
      "TCPA",
      "pay per call compliance",
      "call generation company",
      "buy qualified calls",
    ],
    content: [
      "Buyers should treat compliance as a campaign design problem, not a footer on a landing page. Consent language, DNC awareness, recording rules, and vertical-specific marketing restrictions (Medicare is the obvious example) need to be set before traffic runs. After a complaint is too late. The creative, the IVR, and the hours are part of the same brief.",
      "Ask concrete questions. How is consent captured for this offer? What happens when a source fails review? Can you pause a publisher without killing the whole campaign? Call recording and spot review where applicable beat 'we trust our affiliates' every time. Campaign-specific requirements beat one generic policy pasted on every vertical.",
      "Caveat: no network can honestly promise '100% compliant' or 'zero risk.' Laws, carrier rules, and buyer policies change. What you want is TCPA-aware processes, documented filters, and a habit of cutting bad supply fast. Not a guarantee that belongs in a courtroom fantasy. Anyone selling you zero risk is selling you a story.",
      "RidgeRise builds campaigns with compliance-conscious routing and quality monitoring. We won't invent certifications or legal guarantees. The goal is durable buyer spend, not a week of cheap volume that gets you sued.",
      "If you're buying calls or leads and need those standards written into the campaign brief, talk to us on /buyers or /contact. Bring the vertical, the states, and the consent rules you already live with.",
    ],
  },
  {
    slug: "home-services-call-seasonality",
    title: "HVAC, Roofing & Solar Calls: Plan for Seasonality",
    excerpt:
      "HVAC, roofing, and solar call demand follows weather and storm calendars. Set caps, geos, and hours before the spike. Then staff to match it.",
    category: "Home Services",
    author: "RidgeRise Team",
    date: "2025-12-18",
    readTime: "5 min",
    tags: [
      "HVAC pay per call",
      "roofing calls",
      "solar leads",
      "home services calls",
      "buy HVAC calls",
    ],
    content: [
      "HVAC, roofing, and solar pay-per-call demand does not arrive in a flat line. Heat waves and cold snaps fill HVAC lines. Hail and wind create short roofing surges. Solar stays more appointment-driven and geo-sensitive. Homeownership and utility territory matter as much as the calendar. If you buy national 'home services' mush with no climate or storm filter, you will pay for calls your dispatch board can't schedule.",
      "Buyers who plan ahead raise or lower caps, tighten geos, and staff hours before the weather window, not after hold times explode. Shared vs exclusive should match setter capacity. Exclusive helps when every appointment slot is precious. Shared can fill volume when your team can absorb competition. CPL still fits if your funnel wants a lead plus a follow-up call.",
      "What fails: leaving concurrency uncapped so a Monday storm dumps more live transfers than your board can book. Running 9 to 5 only while buying evening media, when the homeowner is standing in the garage. Treating soft weeks after a spike like a broken campaign. Soft weeks are normal. Burning a publisher who held quality through the surge is how you start the next storm short on supply.",
      "Solar has its own traps. Shade, roof condition, and utility territory kill deals that look fine on a form. A renter who wants a quote is not an install. Put homeownership and geo in the brief. Roofing needs storm corridors and claim intent, not a national ZIP dump. HVAC needs replacement vs repair intent because the ticket and the talk track are different.",
      "RidgeRise covers HVAC, roofing, solar, and home security with filtered CPL and cost-per-call campaigns. We won't invent storm volumes or close rates. Your market and capacity set the plan.",
      "For vertical pages and filters, see /verticals/hvac, /verticals/roofing, and /verticals/solar, or discuss capacity and geos on /buyers.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
