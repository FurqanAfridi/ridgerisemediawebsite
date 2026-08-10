import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BouncyCardsFeatures } from "@/components/ui/bounce-card-features";
import CTAWithVerticalMarquee from "@/components/ui/cta-with-text-marquee";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Magnetic } from "@/components/ui/magnetic";
import { Seo } from "@/components/Seo";
import { assets } from "@/data/site";

const stats = [
  { value: "500K+", label: "Calls Routed Annually", count: "500", suffix: "K+" },
  { value: "200+", label: "Active Buyer Campaigns", count: "200", suffix: "+" },
  { value: "98%", label: "Call Quality Match Rate", count: "98", suffix: "%" },
  { value: "24-48hr", label: "Publisher Payout Cycle", count: null, suffix: "" },
] as const;

const roleBullets = [
  "Access exclusive, high-payout Buyer campaigns across Insurance, Legal, Home Services & more",
  "Real-time call tracking dashboard — see every call, every conversion, every dollar",
  "Fast, reliable payouts (weekly, no chasing invoices)",
] as const;

const heroItemVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(18px)",
      y: 36,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        bounce: 0.38,
        duration: 1.35,
      },
    },
  },
};

function PayPerCallBadge() {
  return <span className="ppc-badge">Pay Per Call</span>;
}

export default function HomePage() {
  return (
    <>
      <Seo
        title="RidgeRise Media — Turn Every Call into Revenue"
        description="RidgeRise Media connects top Publishers with verified Buyers across Insurance, Home Services, Legal, and 12+ high-intent pay-per-call verticals."
        path="/"
        keywords={[
          "pay per call",
          "pay per call network",
          "insurance leads",
          "publisher payouts",
          "call tracking",
        ]}
      />

      <main className="home-main">
        <section className="hero">
          <div className="hero__stage">
            <div className="parallax-wrap parallax--money-hero hero__deco hero__deco--money">
              <img
                className="float-bob"
                src={assets.money}
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="parallax-wrap parallax--money-hero-sm hero__deco hero__deco--money-sm">
              <img
                className="float-bob"
                src={assets.money}
                alt=""
                aria-hidden="true"
              />
            </div>

            <div className="hero__content">
              <AnimatedGroup variants={heroItemVariants}>
                <h1 className="hero__title">
                  Turn Every Call into{" "}
                  <span className="grad-mint">Revenue</span>
                </h1>

                <p className="hero__sub">
                  RidgeRise Media connects top{" "}
                  <em className="accent-italic">Publishers</em> with verified{" "}
                  <em className="accent-italic">Buyers</em> across Insurance,
                  Home Services, Legal, and more. Real-time tracking, fast
                  payouts, zero games.
                </p>
              </AnimatedGroup>

              <AnimatedGroup
                className="hero__ctas"
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.45,
                      },
                    },
                  },
                  ...heroItemVariants,
                }}
              >
                <Magnetic strength={0.4}>
                  <div className="hero__cta-shell">
                    <Link to="/publishers" className="btn btn--purple">
                      Signup as Publisher
                    </Link>
                  </div>
                </Magnetic>
                <Magnetic strength={0.4}>
                  <Link to="/buyers" className="btn btn--mint">
                    Signup as Buyer
                  </Link>
                </Magnetic>
              </AnimatedGroup>

              <AnimatedGroup
                className="hero__chip-wrap"
                variants={{
                  container: {
                    visible: {
                      transition: {
                        delayChildren: 0.7,
                      },
                    },
                  },
                  ...heroItemVariants,
                }}
              >
                <Link to="/verticals" className="hero__chip">
                  <span>Live transfers across 12+ high-intent verticals</span>
                  <span className="hero__chip-sep" aria-hidden="true" />
                  <span className="hero__chip-arrow" aria-hidden="true">
                    <span className="hero__chip-arrow-track">
                      <ArrowRight size={12} />
                      <ArrowRight size={12} />
                    </span>
                  </span>
                </Link>
              </AnimatedGroup>
            </div>

            <AnimatedGroup
              className="hero__preview"
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.7,
                    },
                  },
                },
                ...heroItemVariants,
              }}
            >
              <div className="hero__preview-wrap">
                <section className="feature-cards" aria-label="Live metrics">
                  <article className="metric-card metric-card--purple">
                    <div className="metric-card__glow" aria-hidden="true" />
                    <div className="metric-card__text">
                      <h2 className="metric-card__label">Publisher Payout</h2>
                      <p className="metric-card__value">
                        $
                        <span
                          className="metric-card__count"
                          data-count="4285"
                          data-prefix=""
                          data-suffix=""
                        >
                          4,285
                        </span>{" "}
                        <span className="metric-card__live">
                          <span
                            className="metric-card__pulse"
                            aria-hidden="true"
                          />
                          ✔ Live
                        </span>
                      </p>
                    </div>
                    <div className="metric-card__art-wrap">
                      <img
                        className="metric-card__art"
                        src={assets.cardPayout}
                        alt=""
                        aria-hidden="true"
                      />
                    </div>
                  </article>

                  <article className="metric-card metric-card--mint">
                    <div className="metric-card__glow" aria-hidden="true" />
                    <div className="metric-card__text">
                      <h2 className="metric-card__label">Live Calls</h2>
                      <p className="metric-card__value">
                        <span
                          className="metric-card__count"
                          data-count="312"
                          data-suffix="+"
                        >
                          300+
                        </span>
                        <span className="metric-card__live metric-card__live--dark">
                          <span
                            className="metric-card__pulse"
                            aria-hidden="true"
                          />
                          Now
                        </span>
                      </p>
                    </div>
                    <div className="metric-card__art-wrap metric-card__art-wrap--calls">
                      <img
                        className="metric-card__art metric-card__art--calls"
                        src={assets.cardCalls}
                        alt=""
                        aria-hidden="true"
                      />
                    </div>
                  </article>

                  <div className="parallax-wrap parallax--money-cards feature-cards__money">
                    <img
                      className="float-bob"
                      src={assets.money}
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                </section>
              </div>
            </AnimatedGroup>
          </div>
        </section>

        <section className="stats reveal" aria-label="Platform metrics">
          <p className="stats__eyebrow reveal-child">
            <span className="stats__eyebrow-text">Proven at scale</span>
          </p>
          <ul className="stats__grid">
            {stats.map((stat) => (
              <li key={stat.label} className="stats__item reveal-child">
                <span
                  className="stats__value"
                  data-count={stat.count ?? undefined}
                  data-suffix={stat.suffix || undefined}
                >
                  {stat.value}
                </span>
                <span className="stats__label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <BouncyCardsFeatures />

        <section className="roles">
          <div className="parallax-wrap parallax--money-roles roles__deco roles__deco--money">
            <img className="float-bob" src={assets.money} alt="" aria-hidden="true" />
          </div>

          <div className="roles__intro reveal">
            <h2 className="section-title reveal-child">
              &ldquo;Tell us who <span className="muted-brand">you are?</span>
              &rdquo;
            </h2>
            <p className="section-sub reveal-child">
              Built for Both Sides of the Call
            </p>
          </div>

          <div className="roles__grid">
            <article className="role-card">
              <PayPerCallBadge />
              <h3 className="role-card__title grad-purple">Publisher</h3>
              <p className="role-card__tagline">
                You Drive the Traffic. We Drive the Payout.
              </p>
              <ul className="role-card__list">
                {roleBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Magnetic strength={0.35}>
                <Link to="/publishers" className="btn btn--role btn--role-mint">
                  Apply as a Publisher →
                </Link>
              </Magnetic>
            </article>

            <article className="role-card">
              <PayPerCallBadge />
              <h3 className="role-card__title grad-purple">Advertiser</h3>
              <p className="role-card__tagline">
                You Drive the Traffic. We Drive the Payout.
              </p>
              <ul className="role-card__list">
                {roleBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Magnetic strength={0.35}>
                <Link to="/buyers" className="btn btn--role btn--role-purple">
                  Get Started as Buyer →
                </Link>
              </Magnetic>
            </article>
          </div>
        </section>

        <section className="verticals reveal">
          <div className="verticals__intro">
            <h2 className="section-title section-title--md reveal-child">
              One Platform. Every High-Intent Vertical.
            </h2>
            <p className="section-sub section-sub--sm reveal-child">
              Insurance is our specialty — but our network runs deep across
              performance-driven industries
            </p>
          </div>

          <div className="gallery" aria-hidden="true">
            <div className="gallery__col">
              <img
                className="gallery__img gallery__img--tall"
                src={assets.verticals[0]}
                alt=""
              />
              <img
                className="gallery__img gallery__img--mid"
                src={assets.verticals[1]}
                alt=""
              />
            </div>
            <div className="gallery__col">
              <img
                className="gallery__img gallery__img--short"
                src={assets.verticals[2]}
                alt=""
              />
              <img
                className="gallery__img gallery__img--mid-sm"
                src={assets.verticals[3]}
                alt=""
              />
              <img
                className="gallery__img gallery__img--short"
                src={assets.verticals[4]}
                alt=""
              />
            </div>
            <div className="gallery__col">
              <img
                className="gallery__img gallery__img--mid-sm"
                src={assets.verticals[5]}
                alt=""
              />
              <img
                className="gallery__img gallery__img--tall"
                src={assets.verticals[6]}
                alt=""
              />
            </div>
          </div>

          <div className="page-hero__ctas" style={{ marginTop: 8 }}>
            <Link to="/verticals" className="btn btn--purple">
              Explore All Verticals
            </Link>
          </div>
        </section>

        <CTAWithVerticalMarquee />
      </main>

      <StaggerTestimonials />
    </>
  );
}
