import { Link } from "react-router-dom";
import { getVerticalBySlug } from "@/data/verticals";
import "./css-image-stacking.css";

type StackCard = {
  id: string;
  name: string;
  summary: string;
  to: string;
  image: string;
  background: string;
  width: string;
  top: string;
  tilt: string;
  /** Details on the left; art on the right — flipped when false */
  copyLeft: boolean;
};

function summaryFor(slug: string, fallback: string) {
  return getVerticalBySlug(slug)?.summary ?? fallback;
}

const stackCards: StackCard[] = [
  {
    id: "auto-insurance",
    name: "Auto Insurance",
    summary: summaryFor(
      "auto-insurance",
      "High-intent shoppers comparing quotes for car coverage.",
    ),
    to: "/verticals/auto-insurance",
    image: "/assets/vertical-cards/auto-insurance.png",
    background: "#d7e584",
    width: "92%",
    top: "0px",
    tilt: "-2.2deg",
    copyLeft: true,
  },
  {
    id: "home-services",
    name: "Home Services",
    summary:
      "HVAC, roofing, solar, and home security. Route homeowners who are ready to book.",
    to: "/verticals",
    image: "/assets/vertical-cards/home-services.png",
    background: "#ffebf1",
    width: "94%",
    top: "10px",
    tilt: "2deg",
    copyLeft: false,
  },
  {
    id: "medical-insurance",
    name: "Medical Insurance",
    summary: summaryFor(
      "medicare-advantage",
      "Seniors evaluating MA and related Medicare products.",
    ),
    to: "/verticals/medicare-advantage",
    image: "/assets/vertical-cards/medical-insurance.png",
    background: "#aaa0ec",
    width: "95%",
    top: "20px",
    tilt: "-1.8deg",
    copyLeft: true,
  },
  {
    id: "final-expense",
    name: "Final Expense",
    summary: summaryFor(
      "final-expense",
      "Burial and final expense coverage inquiries.",
    ),
    to: "/verticals/final-expense",
    image: "/assets/vertical-cards/final-expense.png",
    background: "#7aecc8",
    width: "96%",
    top: "30px",
    tilt: "2.4deg",
    copyLeft: false,
  },
  {
    id: "health-insurance",
    name: "Health Insurance",
    summary: summaryFor(
      "health-insurance",
      "ACA, short-term, and individual health quote seekers.",
    ),
    to: "/verticals/health-insurance",
    image: "/assets/vertical-cards/health-insurance.png",
    background: "#f1a8ec",
    width: "97%",
    top: "40px",
    tilt: "-2deg",
    copyLeft: true,
  },
  {
    id: "life-insurance",
    name: "Life Insurance",
    summary: summaryFor(
      "life-insurance",
      "Term and whole life shoppers ready to talk to an agent.",
    ),
    to: "/verticals/life-insurance",
    image: "/assets/vertical-cards/life-insurance.png",
    background: "#5eccdb",
    width: "98%",
    top: "50px",
    tilt: "1.6deg",
    copyLeft: false,
  },
  {
    id: "home-security",
    name: "Home Security",
    summary: summaryFor(
      "home-security",
      "Homeowners comparing monitored security systems.",
    ),
    to: "/verticals/home-security",
    image: "/assets/vertical-cards/home-security.png",
    background: "#eb807b",
    width: "98%",
    top: "60px",
    tilt: "-1.2deg",
    copyLeft: true,
  },
];

type CssImageStackingProps = {
  title?: string;
  description?: string;
  ctaTo?: string;
};

export default function CssImageStacking({
  title = "One Platform. Every High-Intent Vertical.",
  description = "Insurance is the core. Legal, Home Services, Finance, and Education sit next to it.",
  ctaTo = "/verticals",
}: CssImageStackingProps) {
  return (
    <section className="cis" aria-labelledby="cis-heading">
      <span className="rocket-marker rocket-marker--c" data-rocket-marker />
      <span className="rocket-marker rocket-marker--end" data-rocket-marker />

      <header className="cis__intro">
        <h2 id="cis-heading" className="section-title section-title--md">
          {title}
        </h2>
        <p className="section-sub section-sub--sm">{description}</p>
      </header>

      <div className="cis__stack">
        {stackCards.map((card, index) => (
          <div
            key={card.id}
            className="cis__sticky"
            style={{
              ["--cis-top" as string]: card.top,
              ["--cis-width" as string]: card.width,
              ["--cis-tilt" as string]: card.tilt,
              ["--cis-layer" as string]: String(index + 1),
            }}
          >
            <figure className="cis__figure">
              <article
                className={`cis__card${card.copyLeft ? " cis__card--copy-left" : " cis__card--copy-right"}`}
                style={{ backgroundColor: card.background }}
              >
                <div className="cis__body">
                  <h3 className="cis__name">{card.name}</h3>
                  <p className="cis__desc">{card.summary}</p>
                  <div className="cis__actions">
                    <Link to={card.to} className="cis__cta">
                      View vertical
                    </Link>
                    <Link to={ctaTo} className="cis__cta cis__cta--ghost">
                      Browse all
                    </Link>
                  </div>
                </div>
                <div className="cis__media">
                  <img
                    src={card.image}
                    alt=""
                    className="cis__img"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width={600}
                    height={560}
                  />
                </div>
              </article>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
