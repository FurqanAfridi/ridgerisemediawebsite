import { Link } from "react-router-dom";
import { Gauge, Layers3, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import "./pages.css";

const values = [
  {
    title: "Hybrid supply on purpose",
    body: "We buy media in-house and work a vetted partner network. Controlling some traffic and vetting the rest is how volume scales without quality collapse.",
    icon: ShieldCheck,
    tone: "violet" as const,
  },
  {
    title: "Call-first measurement",
    body: "Campaigns are judged on conversations — duration, disposition, source — not vanity clicks. Buyers and publishers see the same call-level truth.",
    icon: Gauge,
    tone: "mint" as const,
  },
  {
    title: "Quality before volume",
    body: "Qualification rules, geo and hours filters, recording review where applicable, and source cutoffs. Compliance-conscious and TCPA-aware — never a legal guarantee.",
    icon: Layers3,
    tone: "amber" as const,
  },
];

const timeline = [
  {
    title: "Generate and aggregate demand",
    body: "In-house campaigns plus vetted publishers and media buyers feed high-intent verticals: Insurance, Legal, Home Services, Finance, and Education.",
  },
  {
    title: "Route with buyer rules",
    body: "Vertical, geo, schedule, concurrency, and exclusivity filters decide where each call, lead, or click goes — matched to intake capacity.",
  },
  {
    title: "Price on CPL or cost per call",
    body: "Buyers pay for qualified inbound calls, live transfers, CPL leads, or traffic. Publishers monetize against live demand with clear terms.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Seo
        title="About Our Pay Per Call Model"
        description="RidgeRise Media is a US pay-per-call demand aggregator. Hybrid media buying plus vetted partners deliver qualified calls, leads, and traffic. Talk to our team."
        path="/about"
        keywords={[
          "demand aggregator",
          "cost per call",
          "CPL leads",
          "qualified inbound calls",
        ]}
      />

      <PageHero
        eyebrow="About us"
        title={
          <>
            A demand aggregator built around the{" "}
            <span className="grad-mint">call</span>
          </>
        }
        description="RidgeRise Media is a US performance marketing company. We generate consumer demand through our own media buying, add volume from vetted publishers, and deliver qualified inbound calls, leads, and traffic to buyers on CPL and cost-per-call."
        primaryCta={{ label: "Discuss a campaign", to: "/buyers" }}
        secondaryCta={{ label: "Apply as a partner", to: "/publishers" }}
      />

      <section className="inner-section">
        <div className="inner-section__head">
          <h2 className="inner-section__title">Why this model</h2>
          <p className="inner-section__sub">
            Phone still closes deals that forms alone miss. Our job is to put the
            right caller on the line — and prove what happened after they dialed.
          </p>
        </div>
        <div className="prose">
          <p>
            Pure in-house buying caps scale. Pure network reselling loses control.
            RidgeRise sits in the middle on purpose: we run our own campaigns so
            we own messaging and source quality, then add vetted partner traffic
            when buyers need more volume in the same verticals.
          </p>
          <p>
            Call-first means we care about duration rules, dispositions, and
            source cutoffs — the mechanics that decide whether your cost per
            acquisition holds. Quality monitoring is operational, not a slogan.
          </p>
        </div>
      </section>

      <section className="inner-section inner-section--band">
        <div className="inner-section__head">
          <h2 className="inner-section__title">What we stand for</h2>
          <p className="inner-section__sub">
            Three operating bets that show up in every campaign we run.
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
          <h2>Talk to our team</h2>
          <p>
            Buyers: bring vertical, states, hours, and what a qualified call
            looks like. Publishers: bring traffic type and verticals. We'll tell
            you if there's a fit.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--purple">
              Discuss a campaign
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
