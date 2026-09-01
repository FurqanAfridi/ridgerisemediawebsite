export type BuyerVerticalCard = {
  label: string;
  body: string;
  tone: "violet" | "rose" | "mint" | "amber" | "pink" | "lime";
  to: string;
};

export const buyerVerticalCards: BuyerVerticalCard[] = [
  {
    label: "Medicare & ACA",
    body: "Medicare Advantage, supplements, ACA enrollment",
    tone: "violet",
    to: "/verticals/medicare-advantage",
  },
  {
    label: "Final Expense & Life",
    body: "Final expense, term life, burial insurance",
    tone: "pink",
    to: "/verticals/final-expense",
  },
  {
    label: "Auto Insurance",
    body: "Auto, SR-22, commercial auto",
    tone: "mint",
    to: "/verticals/auto-insurance",
  },
  {
    label: "Home & Property Insurance",
    body: "Homeowners, renters, flood",
    tone: "amber",
    to: "/verticals/home-insurance",
  },
  {
    label: "Health & U65",
    body: "Under-65 major medical, short-term medical",
    tone: "lime",
    to: "/verticals/health-insurance",
  },
  {
    label: "Mass Tort & Class Action",
    body: "Active tort campaigns, claim intake",
    tone: "rose",
    to: "/verticals/personal-injury",
  },
  {
    label: "Personal Injury",
    body: "Auto accident, premises, workers' comp",
    tone: "rose",
    to: "/verticals/personal-injury",
  },
  {
    label: "Home Services",
    body: "Pest control, HVAC, roofing, solar, plumbing, home security",
    tone: "mint",
    to: "/verticals",
  },
  {
    label: "Home Improvement",
    body: "Windows, bath and kitchen remodel, gutters, flooring",
    tone: "amber",
    to: "/verticals/windows",
  },
  {
    label: "Debt & Credit",
    body: "Debt relief, debt consolidation, credit repair",
    tone: "violet",
    to: "/verticals/debt-settlement",
  },
  {
    label: "Tax Relief",
    body: "Back taxes, IRS resolution, state tax debt",
    tone: "pink",
    to: "/verticals/tax-relief",
  },
  {
    label: "Mortgage & Refinance",
    body: "Purchase, refinance, reverse mortgage, HELOC",
    tone: "lime",
    to: "/verticals/mortgage",
  },
  {
    label: "Auto Warranty",
    body: "Vehicle service contracts, extended warranty",
    tone: "violet",
    to: "/verticals",
  },
  {
    label: "Education",
    body: "Degree programs, trade and vocational schools",
    tone: "amber",
    to: "/verticals/education",
  },
];
