import { FaqPro, type FaqProItem } from "@/components/ui/faq-pro";

type FaqSectionProps = {
  title?: string;
  description?: string;
  items: FaqProItem[];
  defaultOpenFirst?: boolean;
  searchPlaceholder?: string;
  className?: string;
};

export function FaqSection({
  title = "Frequently asked questions",
  description,
  items,
  defaultOpenFirst = true,
  searchPlaceholder = "Search FAQs…",
  className,
}: FaqSectionProps) {
  if (!items.length) return null;

  return (
    <section className={`faq-section${className ? ` ${className}` : ""}`} aria-label="FAQ">
      <div className="faq-section__inner">
        <div className="faq-section__intro">
          <h2 className="section-title section-title--md">{title}</h2>
          {description ? (
            <p className="section-sub section-sub--sm">{description}</p>
          ) : null}
        </div>
        <FaqPro
          items={items}
          defaultOpenFirst={defaultOpenFirst}
          searchPlaceholder={searchPlaceholder}
        />
      </div>
    </section>
  );
}

export function buildFaqJsonLd(items: FaqProItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
