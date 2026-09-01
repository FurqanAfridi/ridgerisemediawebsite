import { verticals } from "@/data/verticals";

export type ContactVerticalOption = {
  slug: string;
  name: string;
  category: string;
};

const sorted = [...verticals].sort((a, b) => {
  if (a.category !== b.category) return a.category.localeCompare(b.category);
  return a.name.localeCompare(b.name);
});

export const contactVerticalOptions: ContactVerticalOption[] = sorted.map((v) => ({
  slug: v.slug,
  name: v.name,
  category: v.category,
}));

export const contactVerticalGroups = contactVerticalOptions.reduce<
  Record<string, ContactVerticalOption[]>
>((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {});

export function verticalLabelForSlug(slug: string) {
  if (!slug || slug === "other") return "Other / Multiple";
  return contactVerticalOptions.find((v) => v.slug === slug)?.name ?? slug;
}
