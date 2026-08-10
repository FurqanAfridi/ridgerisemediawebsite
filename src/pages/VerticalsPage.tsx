import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Car,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Scale,
  Shield,
  Sun,
  Thermometer,
  Umbrella,
  Wallet,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import {
  verticalCategories,
  verticals,
  type Vertical,
} from "@/data/verticals";
import "./pages.css";

const categoryIcons = {
  Insurance: Shield,
  Legal: Scale,
  "Home Services": Home,
  Finance: Wallet,
  Other: BookOpen,
} as const;

const slugIcons: Record<string, typeof Car> = {
  "auto-insurance": Car,
  "health-insurance": HeartPulse,
  "life-insurance": Umbrella,
  "home-insurance": Home,
  "medicare-advantage": HeartPulse,
  "final-expense": Umbrella,
  "personal-injury": Scale,
  "mass-tort": Scale,
  "debt-settlement": Wallet,
  solar: Sun,
  hvac: Thermometer,
  roofing: Home,
  "home-security": Shield,
  mortgage: Landmark,
  "tax-relief": Landmark,
  education: GraduationCap,
};

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
  const Icon =
    slugIcons[vertical.slug] ?? categoryIcons[vertical.category] ?? Shield;

  return (
    <li>
      <article className="card-grid__item" id={vertical.slug}>
        <span className="feature-grid__icon" aria-hidden="true">
          <Icon size={22} strokeWidth={2.25} />
        </span>
        <span className="card-grid__meta">{vertical.category}</span>
        <h3>
          <Link to={`/verticals/${vertical.slug}`}>{vertical.name}</Link>
        </h3>
        <p>{vertical.summary}</p>
        <Link className="card-grid__link" to={`/verticals/${vertical.slug}`}>
          View {vertical.name} →
        </Link>
      </article>
    </li>
  );
}
