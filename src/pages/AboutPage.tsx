import { Link } from "react-router-dom";
import { Gauge, Layers3, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import "./pages.css";

const values = [
  {
    title: "Compliance-First",
    body: "Every campaign is reviewed against TCPA, DNC, and vertical-specific rules before traffic goes live.",
    icon: ShieldCheck,
    tone: "violet" as const,
  },
  {
    title: "Transparent Tracking",
    body: "Publishers and buyers see the same truth: live calls, conversions, and payout visibility.",
    icon: Gauge,
    tone: "mint" as const,
  },
  {
    title: "Vertical Expertise",
    body: "Insurance is our specialty, with deep coverage across Legal, Home Services, Finance, and more.",
    icon: Layers3,
    tone: "amber" as const,
  },
];

const timeline = [
  {
    title: "Match quality traffic",
    body: "We connect publishers with verified buyers across high-intent pay-per-call verticals.",
  },
  {
    title: "Route with controls",
    body: "Geo, hours, exclusivity, and compliance filters keep campaigns clean and conversion-ready.",
  },
  {
    title: "Pay and scale",
    body: "Reliable publisher payouts and buyer ROI reporting make growth sustainable on both sides.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Seo
        title="About RidgeRise Media"
        description="Learn about RidgeRise Media — a compliance-first pay-per-call network connecting publishers and buyers across Insurance, Legal, Home Services, and Finance."
        path="/about"
        keywords={[
          "about RidgeRise Media",
          "pay per call network",
          "call marketing company",
        ]}
      />

      <PageHero
        eyebrow="About us"
        title={
          <>
            Built for both sides of the <span className="grad-mint">call</span>
          </>
        }
        description="RidgeRise Media is a pay-per-call network designed for publishers who need reliable payouts and buyers who need high-intent phone traffic — with compliance and transparency at the core."
        primaryCta={{ label: "Become a Publisher", to: "/publishers" }}
        secondaryCta={{ label: "Advertise as a Buyer", to: "/buyers" }}
      />

      <section className="inner-section">
        <div className="inner-section__head">
          <h2 className="inner-section__title">Our mission</h2>
          <p className="inner-section__sub">
            Make pay-per-call simple, compliant, and profitable — so publishers
            can monetize intent and buyers can speak with people ready to convert.
          </p>
        </div>
        <div className="prose">
          <p>
            Phone conversations still close deals that clicks cannot. RidgeRise
            Media exists to route those conversations fairly: quality traffic for
            buyers, clear earnings for publishers, and no black-box reporting in
            between.
          </p>
          <p>
            From Insurance and Medicare to Legal, Solar, HVAC, and Finance, we
            help partners scale campaigns with real-time tracking, vertical
            expertise, and payout reliability.
          </p>
        </div>
      </section>

      <section className="inner-section inner-section--band">
        <div className="inner-section__head">
          <h2 className="inner-section__title">What we stand for</h2>
          <p className="inner-section__sub">
            Three principles guide every campaign on the RidgeRise network.
          </p>
        </div>
        <ul className="feature-grid">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="feature-grid__item">
                <div
                  className={`feature-grid__icon${
                    item.tone === "mint"
                      ? " feature-grid__icon--mint"
                      : item.tone === "amber"
                        ? " feature-grid__icon--amber"
                        : ""
                  }`}
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={2.25} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="inner-section">
        <div className="inner-section__head">
          <h2 className="inner-section__title">How RidgeRise works</h2>
        </div>
        <ol className="step-list">
          {timeline.map((step, i) => (
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

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Ready to grow with RidgeRise?</h2>
          <p>
            Whether you sell call traffic or buy high-intent transfers, our team
            will match you to the right verticals fast.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--purple">
              Contact us
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
