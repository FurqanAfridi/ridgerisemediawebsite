import { Link } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import "./pages.css";

const benefits = [
  {
    title: "High-intent callers",
    body: "Speak with consumers who asked to talk — not cold form dumps or recycled clicks.",
  },
  {
    title: "Campaign controls",
    body: "Filter by geo, hours, exclusivity, and vertical rules so your agents get the right calls.",
  },
  {
    title: "Live quality visibility",
    body: "Track transfers, durations, and performance in real time to optimize spend.",
  },
  {
    title: "Compliance-first sourcing",
    body: "Campaigns are reviewed before launch to reduce regulatory and brand risk.",
  },
  {
    title: "Insurance specialty",
    body: "Deep expertise in Auto, Health, Life, Home, Medicare, and Final Expense call demand.",
  },
  {
    title: "Cross-vertical scale",
    body: "Expand into Legal, Home Services, Finance, Education, and more from one network.",
  },
];

const steps = [
  {
    title: "Tell us your buying needs",
    body: "Share verticals, geos, caps, hours, and quality requirements.",
  },
  {
    title: "Launch filtered campaigns",
    body: "We match publisher supply to your offer with clear pricing and tracking.",
  },
  {
    title: "Optimize with live data",
    body: "Use RidgeRise dashboards to scale sources that convert and pause what does not.",
  },
];

export default function BuyersPage() {
  return (
    <main>
      <Seo
        title="Buyers & Advertisers — Buy High-Intent Pay-Per-Call Traffic"
        description="Advertise with RidgeRise Media. Buy filtered, high-intent pay-per-call traffic across Insurance, Legal, Home Services, and Finance with live tracking and compliance-first routing."
        path="/buyers"
        keywords={[
          "buy pay per call traffic",
          "call leads for advertisers",
          "insurance call buyers",
          "pay per call network for buyers",
        ]}
      />

      <PageHero
        eyebrow="Buyers / Advertisers"
        title={
          <>
            Buy calls that are ready to{" "}
            <span className="grad-mint">convert</span>
          </>
        }
        description="RidgeRise Media helps buyers and advertisers acquire phone-ready prospects across Insurance and high-intent performance verticals — with filters, transparency, and compliance built in."
        primaryCta={{ label: "Get Started as Buyer", to: "/contact?role=buyer" }}
        secondaryCta={{ label: "View Verticals", to: "/verticals" }}
      />

      <section className="inner-section">
        <div className="inner-section__head">
          <h2 className="inner-section__title">Why buyers choose RidgeRise</h2>
          <p className="inner-section__sub">
            Built for agencies, call centers, carriers, and performance marketers
            who need qualified live transfers.
          </p>
        </div>
        <ul className="feature-grid">
          {benefits.map((item) => (
            <li key={item.title} className="feature-grid__item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="inner-section" style={{ background: "#f0fefe" }}>
        <div className="inner-section__head">
          <h2 className="inner-section__title">Your path to live traffic</h2>
        </div>
        <ol className="step-list">
          {steps.map((step, i) => (
            <li key={step.title} className="step-list__item">
              <span className="step-list__num">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="inner-section">
        <div className="inner-section__head">
          <h2 className="inner-section__title">Ideal for</h2>
        </div>
        <div className="prose">
          <p>
            Insurance agencies and carriers, legal intake teams, home-services
            networks, debt and tax relief companies, lenders, and education
            enrollment centers — any buyer with agents ready to answer and close.
          </p>
          <p>
            Tell us your vertical mix and capacity. We will map publisher supply
            to your filters and get campaigns live quickly.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Start buying qualified calls</h2>
          <p>
            Get a custom media plan for your verticals, geos, and quality rules.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact?role=buyer" className="btn btn--purple">
              Talk to sales
            </Link>
            <Link to="/publishers" className="btn btn--mint">
              I am a publisher
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
