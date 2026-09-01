import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import GlassmorphismTrustHero from "@/components/ui/glassmorphism-trust-hero";
import CssImageStacking from "@/components/ui/css-image-stacking";
import AboutSection1 from "@/components/ui/about-section-1";
import ScrollRocketFlight from "@/components/ui/scroll-rocket-flight";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Magnetic } from "@/components/ui/magnetic";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
import { Seo } from "@/components/Seo";
import { assets } from "@/data/site";
import { trafficSources } from "@/data/traffic-sources";
import { homeFaqs } from "@/data/faqs";
import { pageSeo } from "@/data/seo";
import { usePublisherMotion } from "@/hooks/usePublisherMotion";
import "./publishers.css";

const stats = [
  {
    value: "CPL",
    label: "Cost-per-lead campaigns",
    count: null,
    suffix: "",
  },
  {
    value: "CPC",
    label: "Cost-per-click traffic",
    count: null,
    suffix: "",
  },
  {
    value: "Hybrid",
    label: "In-house media + screened partners",
    count: null,
    suffix: "",
  },
] as const;

const ridgeRisePublisherBullets = [
  "In-house campaigns across paid search, paid social, and display on accounts we own",
  "Creative, angles, and landing pages built and tested by our team",
  "IVR pre-qualification, geo filters, and duplicate suppression before any transfer",
  "Source-level monitoring, with underperforming sources cut the same day",
  "Consent captured and documented on every call",
] as const;

const advertiserBullets = [
  "Qualified inbound calls, live transfers, CPL leads, and CPC traffic matched to your vertical",
  "Filters for geo, hours, product, exclusivity, and billable duration so intake can keep up",
  "Call-level tracking with durations, dispositions, and acquisition cost",
  "Disputed calls reviewed against the criteria agreed in your brief",
  "TCPA-aware, with consent documentation available on request",
] as const;

const heroPreviewVariants = {
  item: {
    hidden: {
      opacity: 1,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.28,
        duration: 0.9,
      },
    },
  },
};

function PayPerCallBadge() {
  return <span className="ppc-badge">Pay Per Call</span>;
}

export default function HomePage() {
  const homeRef = useRef<HTMLElement>(null);
  const location = useLocation();
  usePublisherMotion(homeRef, location.pathname);

  return (
    <>
      <Seo {...pageSeo.home} jsonLd={buildFaqJsonLd(homeFaqs)} />

      <main className="home-main" ref={homeRef}>
        <ScrollRocketFlight />

        <section className="hero">
          <div className="hero__stage">
            {/* Path start — beside hero copy (matches prior deco rocket slot) */}
            <span
              className="rocket-marker rocket-marker--start"
              data-rocket-marker
            />
            {/* Figma 1:327 — floating money, top-right */}
            <div className="parallax-wrap parallax--money-hero hero__deco hero__deco--money">
              <img
                className="float-bob"
                src={assets.money}
                alt=""
                aria-hidden="true"
              />
            </div>

            <div className="hero__content">
              <div className="hero__text">
                <h1 className="hero__title">
                  Qualified Calls, Leads &{" "}
                  <span className="grad-mint">Traffic</span>
                </h1>

                <p className="hero__sub">
                  RidgeRise Media is a pay-per-call media buyer for
                  advertisers. We generate demand through in-house media buying
                  on paid search, paid social, and display on accounts we run,
                  plus screened partners, then deliver qualified inbound calls,
                  leads, and traffic in Insurance, Legal, Home Services, and
                  other high-intent verticals.
                </p>
              </div>

              <div className="hero__ctas">
                <Magnetic strength={0.4}>
                  <Link to="/buyers" className="btn btn--purple hero__btn">
                    Start a test campaign
                  </Link>
                </Magnetic>
                <Magnetic strength={0.4}>
                  <Link to="/publishers" className="btn btn--mint hero__btn">
                    Apply as a partner
                  </Link>
                </Magnetic>
              </div>
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
                ...heroPreviewVariants,
              }}
            >
              <div className="hero__preview-wrap">
                <section className="feature-cards" aria-label="Live metrics">
                  <article className="metric-card metric-card--purple">
                    <div className="metric-card__glow" aria-hidden="true" />
                    <div className="metric-card__text">
                      <h2 className="metric-card__label">Buyer models</h2>
                      <p className="metric-card__value">
                        <span className="metric-card__count">CPL + CPC</span>{" "}
                        <span className="metric-card__live">
                          <span
                            className="metric-card__pulse"
                            aria-hidden="true"
                          />
                          Live demand
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
                      <h2 className="metric-card__label">Inbound calls</h2>
                      <p className="metric-card__value">
                        <span className="metric-card__count">Qualified</span>
                        <span className="metric-card__live metric-card__live--dark">
                          <span
                            className="metric-card__pulse"
                            aria-hidden="true"
                          />
                          Tracked
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
          <span className="rocket-marker rocket-marker--a" data-rocket-marker />
          <p className="stats__eyebrow reveal-child">
            <span className="stats__eyebrow-text">What advertisers buy with us</span>
          </p>
          <ul className="stats__grid stats__grid--triple">
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

        <GlassmorphismTrustHero />

        <section className="roles">
          <span className="rocket-marker rocket-marker--b" data-rocket-marker />
          <div className="parallax-wrap parallax--money-roles roles__deco roles__deco--money">
            <img className="float-bob" src={assets.money} alt="" aria-hidden="true" />
          </div>

          <div className="roles__intro reveal">
            <h2 className="section-title reveal-child">
              We&apos;re the publisher. You&apos;re the buyer.
            </h2>
            <p className="section-sub reveal-child">
              The traffic starts with us. Our media buying runs the campaigns,
              we screen every caller before transfer, and hand you demand that
              has already cleared the filters.
            </p>
          </div>

          <div className="roles__grid">
            <article className="role-card">
              <span className="ppc-badge">RidgeRise Media</span>
              <h3 className="role-card__title grad-purple">Publisher</h3>
              <p className="role-card__tagline">
                We generate the demand. Our campaigns, our accounts, our budget.
              </p>
              <ul className="role-card__list">
                {ridgeRisePublisherBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Magnetic strength={0.35}>
                <Link to="/about" className="btn btn--role btn--role-purple">
                  How our media buying works
                </Link>
              </Magnetic>
            </article>

            <article className="role-card">
              <PayPerCallBadge />
              <h3 className="role-card__title grad-purple">Advertiser</h3>
              <p className="role-card__tagline">
                You buy demand that already cleared our filters.
              </p>
              <ul className="role-card__list">
                {advertiserBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Magnetic strength={0.35}>
                <Link to="/buyers" className="btn btn--role btn--role-mint">
                  Start a test campaign →
                </Link>
              </Magnetic>
            </article>
          </div>
        </section>

        <CssImageStacking
          title="High-intent verticals with live buyer demand"
          description="Insurance is the core. Legal, Home Services, Finance, and Education sit next to it. Buy calls, leads, or traffic where shoppers already pick up the phone."
          ctaTo="/verticals"
        />

        <section className="pub-sources" aria-labelledby="home-sources-heading">
          <div className="pub-sources__layout">
            <div className="pub-sources__sticky">
              <p className="page-hero__eyebrow">Traffic types</p>
              <h2 id="home-sources-heading">Traffic types we work with</h2>
              <p>
                Search, social, native, email, owned media, or dedicated call paths.
                If the caller is qualified for the offer, we want to talk.
              </p>
              <ol className="pub-sources__toc" aria-hidden="true">
                {trafficSources.map((source, index) => (
                  <li
                    key={source.label}
                    className={`pub-sources__toc-item${index === 0 ? " is-active" : ""}`}
                    data-source={source.label}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <em>{source.label}</em>
                  </li>
                ))}
              </ol>
              <div className="pub-sources__progress" aria-hidden="true">
                <span className="pub-sources__progress-fill" />
              </div>
            </div>

            <div className="pub-sources__board">
              <div className="pub-sources__rail" aria-hidden="true">
                <span className="pub-sources__rail-fill" />
              </div>
              <ul className="pub-sources__list">
                {trafficSources.map((source, index) => (
                  <li
                    key={source.label}
                    className={`pub-source pub-source--${source.tone}${index === 0 ? " is-active" : ""}`}
                    data-source={source.label}
                  >
                    <span className="pub-source__node" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <article className="pub-source__card">
                      <span className="pub-source__icon" aria-hidden="true">
                        <img src={source.icon} alt="" width={28} height={28} />
                      </span>
                      <div className="pub-source__copy">
                        <span className="pub-source__kicker">{source.body}</span>
                        <h3 className="pub-source__label">{source.label}</h3>
                        <p className="pub-source__body">{source.detail}</p>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <AboutSection1 />


      <FaqSection
        title="Questions buyers actually ask"
        description="Pay per call, supply mix, quality rules, and how a campaign starts."
        items={homeFaqs}
      />
    </>
  );
}
