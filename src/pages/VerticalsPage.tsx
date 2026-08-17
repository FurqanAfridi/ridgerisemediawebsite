import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import {
  CardStack,
  type CardStackItem,
} from "@/components/ui/card-stack";
import {
  verticalCategories,
  verticals,
  type Vertical,
} from "@/data/verticals";
import { verticalsFaqs } from "@/data/faqs";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
import { prefersReducedMotion } from "@/lib/motion-env";
import "./pages.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const categoryCopy: Record<Vertical["category"], string> = {
  Insurance:
    "The core of what we fill: auto, health, life, home, Medicare Advantage, and final expense on CPL and cost per call.",
  Legal:
    "Personal injury and mass tort intake. Exclusive transfers, case-type screens, and hours that match your attorneys.",
  "Home Services":
    "Solar, HVAC, roofing, and home security. Geo, homeownership, and capacity filters before volume scales.",
  Finance:
    "Debt settlement, mortgage, and tax relief with the debt, credit, and product floors your closers actually need.",
  Other:
    "Education enrollment calls where program and geo match what the school can start.",
};

const categoryIds: Record<Vertical["category"], string> = {
  Insurance: "insurance",
  Legal: "legal",
  "Home Services": "home-services",
  Finance: "finance",
  Other: "other",
};

const verticalTone: Record<string, string> = {
  "auto-insurance": "linear-gradient(160deg, #d7e584 0%, #14b8a6 100%)",
  "health-insurance": "linear-gradient(160deg, #f1a8ec 0%, #8b68e5 100%)",
  "life-insurance": "linear-gradient(160deg, #7dd3fc 0%, #5eccdb 100%)",
  "home-insurance": "linear-gradient(160deg, #c4b5fd 0%, #5d62dd 100%)",
  "medicare-advantage": "linear-gradient(160deg, #c4b5fd 0%, #aaa0ec 100%)",
  "final-expense": "linear-gradient(160deg, #6ff0c8 0%, #2ae2a8 55%, #0d9488 100%)",
  "personal-injury": "linear-gradient(160deg, #c4b5fd 0%, #5d62dd 100%)",
  "mass-tort": "linear-gradient(160deg, #fda4af 0%, #8b68e5 100%)",
  "debt-settlement": "linear-gradient(160deg, #fcd34d 0%, #f97316 100%)",
  solar: "linear-gradient(160deg, #ffebf1 0%, #f9a8d4 100%)",
  hvac: "linear-gradient(160deg, #7dd3fc 0%, #0ea5e9 100%)",
  roofing: "linear-gradient(160deg, #fda4af 0%, #eb807b 100%)",
  "home-security": "linear-gradient(160deg, #eb807b 0%, #f97316 100%)",
  mortgage: "linear-gradient(160deg, #6ff0c8 0%, #14b8a6 100%)",
  "tax-relief": "linear-gradient(160deg, #fcd34d 0%, #f59e0b 100%)",
  education: "linear-gradient(160deg, #c4b5fd 0%, #8b68e5 100%)",
};

function toStackItem(vertical: Vertical): CardStackItem {
  return {
    id: vertical.slug,
    title: vertical.name,
    description: vertical.summary,
    tag: vertical.category,
    href: `/verticals/${vertical.slug}`,
    ctaLabel: `View ${vertical.name} →`,
    imageSrc: `/assets/verticals/${vertical.slug}.jpg`,
    background: verticalTone[vertical.slug],
  };
}

export default function VerticalsPage() {
  const catsRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const cats = gsap.utils.toArray<HTMLElement>(".vert-cat");
      cats.forEach((cat, index) => {
        const head = cat.querySelector(".inner-section__head");
        const stack = cat.querySelector(".card-stack");
        if (!head || !stack) return;

        gsap.from(head, {
          y: 32,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: cat,
            start: "top 82%",
            toggleActions: "play none none reverse",
            id: `vert-head-${index}`,
          },
        });

        gsap.from(stack, {
          y: 80,
          opacity: 0,
          scale: 0.9,
          rotateX: 14,
          transformOrigin: "50% 100%",
          duration: 0.95,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: cat,
            start: "top 78%",
            toggleActions: "play none none reverse",
            id: `vert-stack-${index}`,
          },
        });
      });
    },
    { scope: catsRef },
  );

  return (
    <main>
      <Seo
        title="Pay Per Call & Lead Generation Verticals"
        description="Browse RidgeRise verticals where buyer demand and campaign supply meet. Insurance, Legal, Home Services, Finance, and Education on CPL and cost per call."
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

      <section className="inner-section" ref={catsRef}>
        <div className="pill-row" aria-label="Jump to a category">
          {verticalCategories.map((cat) => (
            <a key={cat} className="pill" href={`#${categoryIds[cat]}`}>
              {cat}
            </a>
          ))}
        </div>

        <div className="vert-cats">
          {verticalCategories.map((cat) => {
            const items = verticals
              .filter((vertical) => vertical.category === cat)
              .map((vertical) => toStackItem(vertical));

            return (
              <section
                key={cat}
                className="vert-cat"
                id={categoryIds[cat]}
                aria-labelledby={`${categoryIds[cat]}-heading`}
              >
                <div className="inner-section__head">
                  <h2
                    id={`${categoryIds[cat]}-heading`}
                    className="inner-section__title"
                  >
                    {cat}
                  </h2>
                  <p className="inner-section__sub">{categoryCopy[cat]}</p>
                </div>
                <CardStack
                  items={items}
                  initialIndex={0}
                  cardWidth={560}
                  cardHeight={360}
                  maxVisible={Math.min(7, Math.max(3, items.length))}
                  autoAdvance={items.length > 1}
                  intervalMs={3400}
                  pauseOnHover
                  showDots={items.length > 1}
                  loop={items.length > 1}
                />
                {items.length > 1 ? (
                  <p className="vert-cat__hint" aria-hidden="true">
                    Drag, tilt, or tap a card to browse
                  </p>
                ) : null}
              </section>
            );
          })}
        </div>
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
            Tell us your category, geos, and what a qualified call looks like.
            Publishers: which verticals you want to monetize.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact?role=buyer" className="btn btn--purple">
              Discuss a campaign
            </Link>
            <Link to="/publishers" className="btn btn--mint">
              Apply as a partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
