export type BuyerOnboardStep = {
  num: string;
  title: string;
  body: string;
};

export const buyerOnboardingSteps: BuyerOnboardStep[] = [
  {
    num: "01",
    title: "Your vertical and product",
    body: "Which vertical, and which product inside it. Medicare and final expense are different campaigns with different callers, so we build to the product, not the category.",
  },
  {
    num: "02",
    title: "Your states and licensing",
    body: "Where you are licensed and where you want volume. We filter by geo before transfer, so anything outside your footprint never reaches your agents.",
  },
  {
    num: "03",
    title: "Your hours and capacity",
    body: "Operating hours, timezone, weekend coverage, and how many calls your floor can hold at once. Concurrency limits are set here so we never send more than you can answer.",
  },
  {
    num: "04",
    title: "What counts as qualified",
    body: "The criteria a caller must meet before we transfer. Age, homeowner status, coverage situation, intent. This becomes the IVR script, so the more specific you are, the fewer bad calls reach you.",
  },
  {
    num: "05",
    title: "Your billable duration and buffer",
    body: "The threshold a call must clear to be billable, and the buffer before the clock starts. We recommend setting this from your own conversion data rather than an industry default.",
  },
  {
    num: "06",
    title: "Traffic sources and exclusivity",
    body: "Which sources you will accept, which you want excluded, and whether calls are exclusive to you or shared. Every source is named, so you can cut one at any time without cutting the campaign.",
  },
  {
    num: "07",
    title: "Your caps and budget",
    body: "Daily and weekly call caps, plus your test budget and target acquisition cost. Caps protect your floor. The budget tells us how fast we can learn.",
  },
  {
    num: "08",
    title: "Routing and tracking",
    body: "Your tracking platform, your numbers, and where calls land. You can run us on your own ring pool and verify every figure we report against your own data.",
  },
  {
    num: "09",
    title: "Compliance requirements",
    body: "Your consent standard, DNC scrubbing, documentation retention, and any state rules specific to your product. We capture consent on every call and can produce it on request.",
  },
  {
    num: "10",
    title: "Go live",
    body: "We come back with pricing, realistic volume, and the sources we will run. Traffic starts, you watch it on your platform, and anything underperforming gets cut in week one.",
  },
];
