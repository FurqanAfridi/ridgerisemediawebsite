import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import {
  verticalCategories,
  verticals,
  type Vertical,
} from "@/data/verticals";
import "./pages.css";

export default function VerticalsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return verticals;
    return verticals.filter((v) => v.category === active);
  }, [active]);

  return (
    <main>
      <Seo
        title="Pay-Per-Call Verticals"
        description="Explore RidgeRise Media pay-per-call verticals: Auto Insurance, Health, Life, Medicare, Legal, Solar, HVAC, Debt Settlement, Mortgage, and more high-intent categories."
        path="/verticals"
        keywords={[
          "pay per call verticals",
          "insurance pay per call",
          "legal call leads",
          "home services PPC",
        ]}
      />

      <PageHero
        eyebrow="Verticals"
        title={
          <>
            One platform. Every high-intent{" "}
            <span className="grad-mint">vertical</span>.
          </>
        }
        description="Insurance is our specialty — and our network runs deep across Legal, Home Services, Finance, Education, and more. Buy or sell calls where intent is highest."
        primaryCta={{ label: "Buy Call Traffic", to: "/buyers" }}
        secondaryCta={{ label: "Sell Call Traffic", to: "/publishers" }}
      />

      <section className="inner-section">
        <div className="pill-row" role="tablist" aria-label="Filter verticals">
          <button
            type="button"
            className={active === "All" ? "pill pill--active" : "pill"}
            onClick={() => setActive("All")}
          >
            All
          </button>
          {verticalCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={active === cat ? "pill pill--active" : "pill"}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="card-grid">
          {filtered.map((vertical) => (
            <VerticalCard key={vertical.slug} vertical={vertical} />
          ))}
        </ul>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Which verticals do you buy or sell?</h2>
          <p>
            Tell us your focus and we will match you with RidgeRise campaigns
            fast.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--purple">
              Get matched
            </Link>
            <Link to="/blog" className="btn btn--mint">
              Learn on the blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function VerticalCard({ vertical }: { vertical: Vertical }) {
  return (
    <li>
      <article className="card-grid__item" id={vertical.slug}>
        <span className="card-grid__meta">{vertical.category}</span>
        <h3>{vertical.name}</h3>
        <p>{vertical.description}</p>
        <p>
          <strong>Buyers:</strong> {vertical.buyerFit}
        </p>
        <p>
          <strong>Publishers:</strong> {vertical.publisherFit}
        </p>
        <Link className="card-grid__link" to="/contact">
          Inquire about {vertical.name} →
        </Link>
      </article>
    </li>
  );
}
