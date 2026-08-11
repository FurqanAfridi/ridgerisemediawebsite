import { Link } from "react-router-dom";
import { BouncyCardsFeatures } from "@/components/ui/bounce-card-features";
import CssImageStacking from "@/components/ui/css-image-stacking";
import ScrollRocketFlight from "@/components/ui/scroll-rocket-flight";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Magnetic } from "@/components/ui/magnetic";
import { Seo } from "@/components/Seo";
import { assets } from "@/data/site";

const stats = [
  {
    value: "CPL",
    label: "Cost-per-lead campaigns",
    count: null,
    suffix: "",
  },
  {
    value: "CPP",
    label: "Pay-per-call buying",
    count: null,
    suffix: "",
  },
  {
    value: "Hybrid",
    label: "In-house + partner supply",
    count: null,
    suffix: "",
  },
  {
    value: "US",
    label: "High-intent vertical coverage",
    count: null,
    suffix: "",
  },
] as const;

const advertiserBullets = [
  "Qualified inbound calls, live transfers, CPL leads, and traffic matched to your vertical",
  "Filters for geo, hours, product, exclusivity, and duration so intake can keep up",
  "Volume from our own media buying plus a vetted partner network, with source-level monitoring",
  "Call-level tracking so you can see quality, conversion behavior, and acquisition cost",
] as const;

const publisherBullets = [
  "Access to active buyer campaigns across Insurance, Legal, Home Services, and more",
  "Real-time call tracking so you see every call and every conversion",
  "Clear quality standards and payment terms agreed before you send traffic",
  "A partner that runs its own media, so we know what good traffic looks like",
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
  return (
    <>
      <Seo
        title="Pay Per Call Network for Advertisers"
        description="Buy qualified inbound calls, leads, and traffic on CPL or cost per call. RidgeRise Media mixes in-house media buying with a vetted partner network across high-intent verticals."
        path="/"
        keywords={[
          "pay per call network",
          "pay per call",
          "cost per call",
          "CPL",
          "qualified inbound calls",
          "lead generation",
        ]}
      />

      <main className="home-main">
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
                  RidgeRise Media is a pay per call and CPL network for
                  advertisers. We generate consumer demand through in-house media
                  buying and a vetted partner network, then deliver qualified
                  inbound calls, leads, and traffic in Insurance, Legal, Home
                  Services, and other high-intent verticals.
                </p>
              </div>

              <div className="hero__ctas">
                <Magnetic strength={0.4}>
                  <Link to="/buyers" className="btn btn--purple hero__btn">
                    Discuss a Campaign
                  </Link>
                </Magnetic>
                <Magnetic strength={0.4}>
                  <Link to="/publishers" className="btn btn--mint hero__btn">
                    Apply as a Partner
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
                        <span className="metric-card__count">CPL + CPP</span>{" "}
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
          <span className="rocket-marker rocket-marker--b" data-rocket-marker />
          <div className="parallax-wrap parallax--money-roles roles__deco roles__deco--money">
            <img className="float-bob" src={assets.money} alt="" aria-hidden="true" />
          </div>

          <div className="roles__intro reveal">
            <h2 className="section-title reveal-child">
              Built for both sides of the{" "}
              <span className="muted-brand">call</span>
            </h2>
            <p className="section-sub reveal-child">
              Advertisers buy qualified demand. Partners supply traffic that can
              hold up under call-level review.
            </p>
          </div>

          <div className="roles__grid">
            <article className="role-card">
              <PayPerCallBadge />
              <h3 className="role-card__title grad-purple">Advertiser</h3>
              <p className="role-card__tagline">
                You need customers. We put them on the phone.
              </p>
              <ul className="role-card__list">
                {advertiserBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Magnetic strength={0.35}>
                <Link to="/buyers" className="btn btn--role btn--role-mint">
                  Discuss a Campaign →
                </Link>
              </Magnetic>
            </article>

            <article className="role-card">
              <PayPerCallBadge />
              <h3 className="role-card__title grad-purple">Publisher</h3>
              <p className="role-card__tagline">
                You drive the traffic. We make it worth more.
              </p>
              <ul className="role-card__list">
                {publisherBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Magnetic strength={0.35}>
                <Link to="/publishers" className="btn btn--role btn--role-purple">
                  Apply as a Partner →
                </Link>
              </Magnetic>
            </article>
          </div>
        </section>

        <CssImageStacking
          title="High-intent verticals with live buyer demand"
          description="Insurance is the core specialty, with active depth across Legal, Home Services, Finance, and Education. Buy calls, leads, or traffic where consumers already pick up the phone."
          ctaTo="/verticals"
        />
      </main>

      <StaggerTestimonials />
    </>
  );
}
