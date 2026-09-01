const A = "/assets/publishers";

export const trafficSources = [
  {
    label: "Search",
    body: "Paid & organic intent",
    detail: "High-intent queries that convert into qualified inbound calls.",
    icon: `${A}/source-search.svg`,
    tone: "violet",
  },
  {
    label: "Social",
    body: "Paid social click-to-call",
    detail: "Click-to-call and form-to-phone paths from paid social traffic.",
    icon: `${A}/source-social.svg`,
    tone: "mint",
  },
  {
    label: "Native",
    body: "Content-driven transfers",
    detail: "Content placements that move readers into tracked call offers.",
    icon: `${A}/source-native.svg`,
    tone: "amber",
  },
  {
    label: "Call paths",
    body: "IVR & warm transfers",
    detail: "IVR, warm transfers, and dedicated call routing into live buyers.",
    icon: `${A}/source-calls.svg`,
    tone: "rose",
  },
  {
    label: "Email",
    body: "Nurture to phone",
    detail: "Nurture sequences that land in a phone conversation, not just a click.",
    icon: `${A}/source-email.svg`,
    tone: "pink",
  },
  {
    label: "Owned media",
    body: "Sites, apps, communities",
    detail: "Sites, apps, and communities with steady qualified caller volume.",
    icon: `${A}/source-owned.svg`,
    tone: "lime",
  },
] as const;
