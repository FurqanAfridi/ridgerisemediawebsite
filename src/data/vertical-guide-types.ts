export type VerticalGuideSection = {
  heading: string;
  paragraphs: string[];
};

export type VerticalGuide = {
  slug: string;
  lede: string;
  sections: VerticalGuideSection[];
};
