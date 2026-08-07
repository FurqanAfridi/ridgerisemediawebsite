import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  Gauge,
  Layers3,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";
import { Seo } from "@/components/Seo";
import { assets } from "@/data/site";
import { usePublisherMotion } from "@/hooks/usePublisherMotion";
import "./pages.css";
import "./publishers.css";

const benefits = [
  {
    title: "Exclusive buyer campaigns",
    body: "High-payout offers across Insurance, Legal, Home Services, and Finance — matched to your traffic.",
    icon: Layers3,
    art: assets.verticals[0],
    tone: "violet",
  },
  {
    title: "Live call dashboard",
    body: "Watch every transfer, duration rule, and earning event in real time. No mystery deductions.",
    icon: Gauge,
    art: assets.cardCalls,
    tone: "mint",
  },
  {
    title: "Weekly payout rhythm",
    body: "Predictable cash flow so you can scale inventory without chasing invoices.",
    icon: Wallet,
    art: assets.cardPayout,
    tone: "amber",
  },
  {
    title: "Compliance-first launch",
    body: "Campaigns reviewed against TCPA, DNC, and vertical rules before your traffic goes live.",
    icon: ShieldCheck,
    art: assets.verticals[3],
    tone: "rose",
  },
  {
    title: "Fast buyer matching",
    body: "We connect quality publishers with verified demand in days — not weeks of waiting.",
    icon: Zap,
    art: assets.verticals[2],
    tone: "violet",
  },
  {
    title: "Quality that sticks",
    body: "Clear filters and transparent reporting keep accounts healthy as you scale volume.",
    icon: BadgeCheck,
    art: assets.verticals[5],
    tone: "mint",
  },
] as const;

const steps = [
  {
    num: "01",
    title: "Apply with your sources",
    body: "Share traffic types, geos, and vertical experience. We review for fit and compliance readiness.",
    art: assets.verticals[1],
  },
  {
    num: "02",
    title: "Get matched to campaigns",
    body: "Access exclusive buyer offers with clear payout terms, caps, and tracking from day one.",
    art: assets.cardCalls,
  },
  {
    num: "03",
    title: "Launch, track, get paid",
    body: "Optimize live paths in the dashboard and cash out on a reliable weekly payout cycle.",
    art: assets.cardPayout,
  },
] as const;

const sources = [
  { label: "Search", art: assets.verticals[2] },
  { label: "Social", art: assets.verticals[4] },
  { label: "Native", art: assets.verticals[6] },
  { label: "Call paths", art: assets.verticals[0] },
  { label: "Email", art: assets.verticals[3] },
  { label: "Owned media", art: assets.verticals[5] },
] as const;

const payoutStats = [
  { value: "24-48hr", label: "Payout cycle", count: null, suffix: "" },
  { value: "500K+", label: "Calls routed / yr", count: "500", suffix: "K+" },
  { value: "30+", label: "Live verticals", count: "30", suffix: "+" },
  { value: "98%", label: "Quality match", count: "98", suffix: "%" },
] as const;

export default function PublishersPage() {
  const rootRef = useRef<HTMLElement>(null);
  usePublisherMotion(rootRef);

  return (
    <main className="pub-page" ref={rootRef}>
      <Seo
        title="Publishers — Monetize Pay-Per-Call Traffic"
        description="Join RidgeRise Media as a publisher. Access exclusive pay-per-call campaigns, real-time tracking, and reliable weekly payouts across Insurance, Legal, Home Services, and Finance."
        path="/publishers"
        keywords={[
          "pay per call publishers",
          "affiliate pay per call",
          "publisher payouts",
          "call transfer network",
        ]}
      />

      {/* ——— Visual hero ——— */}
      <section className="pub-hero">
        <div className="pub-hero__glow" aria-hidden="true" />
        <div className="pub-hero__copy pub-reveal">
          <p className="page-hero__eyebrow">Publishers</p>
          <h1 className="pub-hero__title">
            You drive the traffic.
            <br />
            We drive the <span className="grad-mint">payout</span>.
          </h1>
          <p className="pub-hero__desc">
            Monetize high-intent callers with exclusive buyer campaigns, live
            tracking, and weekly payouts across Insurance and 30+ PPC verticals.
          </p>
          <div className="page-hero__ctas">
            <Link to="/contact?role=publisher" className="btn btn--purple">
              Apply as Publisher
            </Link>
            <Link to="/verticals" className="btn btn--mint">
              Browse Verticals
            </Link>
          </div>
        </div>

        <div className="pub-hero__stage" aria-hidden="true">
          <div className="pub-hero__card pub-float pub-parallax" data-speed="0.2">
            <img src={assets.cardPayout} alt="" />
          </div>
          <div className="pub-hero__orb pub-hero__orb--mint pub-float" />
          <div className="pub-hero__orb pub-hero__orb--violet pub-float" />
          <img
            className="pub-hero__money float-bob pub-parallax"
            data-speed="0.45"
            src={assets.money}
            alt=""
          />
        </div>
      </section>

      {/* ——— Live metrics strip ——— */}
      <section className="pub-metrics" aria-label="Publisher metrics">
        <ul className="pub-metrics__grid">
          {payoutStats.map((stat) => (
            <li key={stat.label} className="pub-metrics__item pub-reveal">
              <span
                className="pub-metrics__value"
                data-count={stat.count ?? undefined}
                data-suffix={stat.suffix || undefined}
              >
                {stat.value}
              </span>
              <span className="pub-metrics__label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ——— Split feature: payouts ——— */}
      <section className="pub-split">
        <div className="pub-split__visual pub-reveal-left">
          <div className="pub-split__frame pub-split__frame--mint">
            <img src={assets.cardPayout} alt="Publisher payout dashboard graphic" />
          </div>
          <img
            className="pub-split__deco float-bob"
            src={assets.money}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="pub-split__copy pub-reveal-right">
          <p className="page-hero__eyebrow">Cash flow</p>
          <h2>Payouts you can plan around</h2>
          <p>
            Weekly publisher payouts, transparent call rules, and a live earnings
            view — so scaling traffic never means guessing when you get paid.
          </p>
          <ul className="pub-checklist">
            <li>Clear duration and conversion rules</li>
            <li>No black-box deductions</li>
            <li>Reliable 24–48hr payout cycles</li>
          </ul>
        </div>
      </section>

      {/* ——— Split feature: tracking (reversed) ——— */}
      <section className="pub-split pub-split--reverse">
        <div className="pub-split__visual pub-reveal-right">
          <div className="pub-split__frame pub-split__frame--violet">
            <img src={assets.cardCalls} alt="Live calls tracking graphic" />
          </div>
          <img
            className="pub-split__deco pub-split__deco--money float-bob"
            src={assets.money}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="pub-split__copy pub-reveal-left">
          <p className="page-hero__eyebrow">Visibility</p>
          <h2>Every call. Every dollar. Live.</h2>
          <p>
            Watch transfers land in real time. Optimize paths that convert and
            pause what does not — with the same clarity buyers see on quality.
          </p>
          <ul className="pub-checklist">
            <li>Live transfer and duration tracking</li>
            <li>Campaign-level performance views</li>
            <li>Source insights you can act on</li>
          </ul>
        </div>
      </section>

      {/* ——— Benefit mosaic ——— */}
      <section className="pub-benefits">
        <div className="pub-benefits__head pub-reveal">
          <h2>Why publishers choose RidgeRise</h2>
          <p>
            Visual tools, vertical depth, and compliance support — built for
            affiliates, media buyers, and call-path operators.
          </p>
        </div>
        <ul className="pub-benefits__grid">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className={`pub-benefit pub-benefit--${item.tone} pub-reveal`}
              >
                <div className="pub-benefit__art">
                  <img src={item.art} alt="" />
                </div>
                <div className="pub-benefit__icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={2.25} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ——— Visual steps ——— */}
      <section className="pub-steps">
        <div className="pub-steps__head pub-reveal">
          <p className="page-hero__eyebrow">Get started</p>
          <h2>Three steps to live payouts</h2>
        </div>
        <ol className="pub-steps__list">
          {steps.map((step, i) => (
            <li key={step.num} className="pub-step pub-reveal">
              <div className="pub-step__media">
                <img src={step.art} alt="" />
                <span className="pub-step__num">{step.num}</span>
              </div>
              <div className="pub-step__copy">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {i < steps.length - 1 ? (
                  <span className="pub-step__connector" aria-hidden="true" />
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ——— Traffic sources gallery ——— */}
      <section className="pub-sources">
        <div className="pub-sources__head pub-reveal">
          <h2>Bring the traffic you already run</h2>
          <p>
            Search, social, native, email, owned media, or dedicated call paths —
            if intent converts on phone, we can help you monetize it.
          </p>
        </div>
        <ul className="pub-sources__rail">
          {sources.map((source) => (
            <li key={source.label} className="pub-source pub-reveal">
              <img src={source.art} alt="" />
              <span>{source.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ——— Closing CTA stage ——— */}
      <section className="pub-cta">
        <div className="pub-cta__art" aria-hidden="true">
          <img className="pub-cta__money float-bob" src={assets.money} alt="" />
        </div>
        <div className="pub-cta__panel pub-reveal">
          <h2>Start monetizing calls this week</h2>
          <p>
            Apply as a publisher and get matched to high-payout RidgeRise
            campaigns across Insurance and beyond.
          </p>
          <div className="page-hero__ctas">
            <Link to="/contact?role=publisher" className="btn btn--purple">
              Apply now
            </Link>
            <Link to="/buyers" className="btn btn--mint">
              I am a buyer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
