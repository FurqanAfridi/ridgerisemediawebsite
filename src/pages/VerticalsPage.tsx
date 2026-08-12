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
import { verticalsFaqs } from "@/data/faqs";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
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
        title="Pay Per Call & Lead Generation Verticals"
        description="Browse RidgeRise verticals where buyer demand and campaign supply meet — Insurance, Legal, Home Services, Finance, and more on CPL and cost per call."
        path="/verticals"
        keywords={[
          "pay per call verticals",
          "insurance pay per call",
          "legal call leads",
          "home services leads",
        ]}
        jsonLd={buildFaqJsonLd(verticalsFaqs)}
      />

      <PageHero
        eyebrow="Verticals"
        title={
          <>
            Where buyer demand meets{" "}
            <span className="grad-mint">campaign supply</span>
          </>
        }
        description="These are the categories we run and fill: qualified inbound calls, leads, and traffic on CPL and cost-per-call. Insurance is the core. Legal, Home Services, and Finance sit alongside it."
        primaryCta={{ label: "Discuss a campaign", to: "/buyers" }}
        secondaryCta={{ label: "Apply as a partner", to: "/publishers" }}
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

      <FaqSection
        title="Verticals FAQ"
        description="How we define categories, models, filters, and partner fit."
        items={verticalsFaqs}
      />

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Which verticals do you need filled?</h2>
          <p>
            Tell us your category, geos, and what a qualified call looks like —
            or which verticals you want to monetize as a partner.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--purple">
              Talk to our team
            </Link>
            <Link to="/blog" className="btn btn--mint">
              Read the blog
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
