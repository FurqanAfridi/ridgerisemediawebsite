import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import {
  verticalCategories,
  verticals,
  type Vertical,
} from "@/data/verticals";
import { verticalsFaqs } from "@/data/faqs";
import { pageSeo } from "@/data/seo";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
import { prefersReducedMotion } from "@/lib/motion-env";
import "./pages.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const categoryCopy: Record<Vertical["category"], string> = {
  Insurance:
    "Auto, health, life, home, Medicare Advantage, final expense, renters, and commercial auto on CPL and cost per call.",
  Legal:
    "Personal injury, workers' compensation, disability / SSDI, and bankruptcy. Exclusive transfers, case-type screens, and hours that match intake.",
  "Home Services":
    "Solar, HVAC, roofing, home security, plumbing, windows, and water damage. Geo and capacity filters before volume scales.",
  Finance:
    "Debt settlement, mortgage, tax relief, personal loans, and credit repair with the floors your closers actually need.",
  Other:
    "Education, trade schools, and online programs where enrollment filters match what the school can start.",
};

const categoryIds: Record<Vertical["category"], string> = {
  Insurance: "insurance",
  Legal: "legal",
  "Home Services": "home-services",
  Finance: "finance",
  Other: "other",
};

export default function VerticalsPage() {
  const catalogRef = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<
    Vertical["category"] | "All"
  >("All");

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return verticals.filter((vertical) => {
      const inCategory =
        activeCategory === "All" || vertical.category === activeCategory;
      if (!inCategory) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        vertical.name,
        vertical.summary,
        vertical.category,
        ...vertical.keywords,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [activeCategory, normalizedQuery]);

  const grouped = useMemo(() => {
    return verticalCategories
      .map((cat) => ({
        cat,
        items: filtered.filter((vertical) => vertical.category === cat),
      }))
      .filter((group) => group.items.length > 0);
  }, [filtered]);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const cards = gsap.utils.toArray<HTMLElement>(".vert-card");
      cards.forEach((card, index) => {
        gsap.from(card, {
          y: 36,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
            id: `vert-card-${index}`,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".vert-cat__head").forEach((head, index) => {
        gsap.from(head, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: head,
            start: "top 88%",
            once: true,
            id: `vert-cat-head-${index}`,
          },
        });
      });
    },
    { scope: catalogRef, dependencies: [activeCategory, normalizedQuery], revertOnUpdate: true },
  );

  return (
    <main>
      <Seo {...pageSeo.verticals} jsonLd={buildFaqJsonLd(verticalsFaqs)} />

      <PageHero
        eyebrow="Verticals"
        title={
          <>
            Where buyer demand meets{" "}
            <span className="grad-mint">campaign supply</span>
          </>
        }
        description="These are the categories we run and fill: qualified inbound calls, leads, and traffic on CPL and cost-per-call. Insurance is the core. Legal, Home Services, and Finance sit alongside it."
        primaryCta={{ label: "Start a test campaign", to: "/buyers" }}
        secondaryCta={{ label: "Apply as a partner", to: "/publishers" }}
      />

      <section className="inner-section vert-catalog" ref={catalogRef}>
        <div className="vert-catalog__toolbar">
          <label className="vert-catalog__search">
            <span className="sr-only">Search verticals</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search verticals, keywords, or categories…"
              autoComplete="off"
            />
          </label>
          <div className="pill-row" role="tablist" aria-label="Filter by category">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "All"}
              className={`pill${activeCategory === "All" ? " pill--active" : ""}`}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>
            {verticalCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`pill${activeCategory === cat ? " pill--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="vert-catalog__count">
            Showing {filtered.length} of {verticals.length} verticals
          </p>
        </div>

        {grouped.length === 0 ? (
          <div className="vert-catalog__empty">
            <h2>No verticals match that search</h2>
            <p>Try another keyword, or clear filters to see the full list.</p>
            <button
              type="button"
              className="btn btn--mint"
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="vert-cats">
            {grouped.map(({ cat, items }) => (
              <section
                key={cat}
                className="vert-cat"
                id={categoryIds[cat]}
                aria-labelledby={`${categoryIds[cat]}-heading`}
              >
                <div className="vert-cat__head inner-section__head">
                  <h2
                    id={`${categoryIds[cat]}-heading`}
                    className="inner-section__title"
                  >
                    {cat}
                  </h2>
                  <p className="inner-section__sub">{categoryCopy[cat]}</p>
                </div>
                <ul className="vert-grid">
                  {items.map((vertical) => (
                    <li key={vertical.slug}>
                      <Link
                        to={`/verticals/${vertical.slug}`}
                        className="vert-card"
                      >
                        <span className="vert-card__media">
                          <img
                            src={`/assets/verticals/${vertical.slug}.webp`}
                            alt=""
                            width={640}
                            height={420}
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                        <span className="vert-card__body">
                          <span className="vert-card__tag">{vertical.category}</span>
                          <strong className="vert-card__title">
                            {vertical.name}
                          </strong>
                          <em className="vert-card__summary">{vertical.summary}</em>
                          <span className="vert-card__cta">
                            View {vertical.name} →
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </section>

      <FaqSection
        title="Verticals FAQ"
        description="How we define categories, models, filters, and partner fit."
        items={verticalsFaqs}
      />

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Ready to buy or monetize in a vertical?</h2>
          <p>
            Tell us the category, states, and what a qualified call means for
            your desk. We will come back with a test plan.
          </p>
          <div className="page-hero__ctas">
            <Link to="/contact?role=buyer" className="btn btn--purple">
              Start a test campaign
            </Link>
            <Link to="/contact?role=publisher" className="btn btn--mint">
              Apply as a partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
