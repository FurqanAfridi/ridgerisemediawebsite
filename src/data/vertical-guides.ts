import type { VerticalGuide } from "./vertical-guide-types";
import { insuranceGuides } from "./guides/insurance";
import { legalAndSeniorGuides } from "./guides/legal-and-senior";
import { homeServicesGuides } from "./guides/home-services";
import { financeAndEducationGuides } from "./guides/finance-and-education";
import { expandedGuides } from "./guides/expanded";
import { hotVerticalGuides } from "./guides/hot-verticals";

export const verticalGuides: Record<string, VerticalGuide> = {
  ...insuranceGuides,
  ...legalAndSeniorGuides,
  ...homeServicesGuides,
  ...financeAndEducationGuides,
  ...expandedGuides,
  ...hotVerticalGuides,
};

export function getVerticalGuide(slug: string): VerticalGuide | undefined {
  return verticalGuides[slug];
}
