import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  FileCheck2,
  Gauge,
  Layers3,
  Mail,
  Megaphone,
  PhoneCall,
  Radio,
  Search,
  Share2,
  ShieldCheck,
  UserPlus,
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
    title: "Live buyer demand",
    body: "Open campaigns across Insurance, Legal, Home Services, Finance, and Education — matched to traffic you already run.",
    icon: Layers3,
    tone: "violet",
  },
  {
    title: "Call-level tracking",
    body: "See transfers, duration rules, and billable events in real time. No mystery deductions.",
    icon: Gauge,
    tone: "mint",
  },
  {
    title: "Clear payout terms",
    body: "Rates, caps, and billable rules upfront. We pay what we agree; schedule confirmed when you onboard.",
    icon: Wallet,
    tone: "amber",
  },
  {
    title: "Quality standards that stick",
    body: "TCPA-aware setup, campaign consent rules, and source expectations before your traffic goes live.",
    icon: ShieldCheck,
    tone: "rose",
  },
  {
    title: "Selective partner review",
    body: "We don't take every applicant. Fit, traffic type, and vertical experience matter.",
    icon: Zap,
    tone: "violet",
  },
  {
    title: "Healthy accounts at scale",
    body: "Filters and reporting keep you aligned with buyer quality so volume doesn't burn the offer.",
    icon: BadgeCheck,
    tone: "mint",
  },
] as const;

const steps = [
  {
    num: "01",
    title: "Apply with your sources",
    body: "Tell us traffic types, geos, and verticals. We review for fit and compliance readiness.",
    icon: UserPlus,
    tone: "violet",
  },
  {
    num: "02",
    title: "Get matched to live demand",
    body: "Approved partners see open buyer campaigns with payout terms, caps, and tracking from day one.",
    icon: FileCheck2,
    tone: "mint",
  },
  {
    num: "03",
    title: "Launch, track, get paid",
    body: "Optimize paths that convert. Pause what fails quality. Payouts follow the terms we set together.",
    icon: Wallet,
    tone: "amber",
  },
] as const;

const sources = [
  { label: "Search", body: "Paid & organic intent", icon: Search },
  { label: "Social", body: "Paid social click-to-call", icon: Share2 },
  { label: "Native", body: "Content-driven transfers", icon: Megaphone },
  { label: "Call paths", body: "IVR & warm transfers", icon: PhoneCall },
  { label: "Email", body: "Nurture to phone", icon: Mail },
  { label: "Owned media", body: "Sites, apps, communities", icon: Radio },
] as const;

const payoutStats = [
  { value: "Live", label: "Buyer demand open", count: null, suffix: "" },
  { value: "Tracked", label: "Call-level reporting", count: null, suffix: "" },
  { value: "Clear", label: "Payout terms upfront", count: null, suffix: "" },
  { value: "Vetted", label: "Partner review required", count: null, suffix: "" },
] as const;

export default function PublishersPage() {
  const rootRef = useRef<HTMLElement>(null);
  usePublisherMotion(rootRef);

  return (
    <main className="pub-page" ref={rootRef}>
      <Seo
        title="Pay Per Call Network for Publishers"
        description="Monetize call traffic with RidgeRise Media. Live buyer demand, quality standards, call-level tracking, and clear payout terms. Apply as a partner."
        path="/publishers"
        keywords={[
          "pay per call network for publishers",
          "monetize call traffic",
          "pay per call publishers",
          "call transfer network",
        ]}
      />

      {/* ——— Visual hero ——— */}
      <section className="pub-hero">
        <div className="pub-hero__glow" aria-hidden="true" />
        <div className="pub-hero__copy pub-reveal">
          <p className="page-hero__eyebrow">Publishers</p>
          <h1 className="pub-hero__title">
            Monetize call traffic against
            <br />
            live <span className="grad-mint">buyer demand</span>
          </h1>
          <p className="pub-hero__desc">
            Selective partner program for publishers and media buyers who can
            deliver qualified callers — with tracking and payout terms that stay
            clear.
          </p>
          <div className="page-hero__ctas">
            <Link to="/contact?role=publisher" className="btn btn--purple">
              Apply as a partner
            </Link>
            <Link to="/verticals" className="btn btn--mint">
              See open verticals
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
          <p className="page-hero__eyebrow">Payouts</p>
          <h2>Terms you can plan around</h2>
          <p>
            Billable rules, caps, and rates are written before you push volume.
            You see what converted. You get paid what we agreed. Ask for the
            current payout schedule when you apply.
          </p>
          <ul className="pub-checklist">
            <li>Duration and conversion rules in writing</li>
            <li>No black-box deductions</li>
            <li>Payout schedule confirmed at onboarding</li>
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
          <p className="page-hero__eyebrow">Tracking</p>
          <h2>Every transfer. Every billable event.</h2>
          <p>
            Watch calls land live. Keep paths that hold duration and disposition.
            Kill sources that fail quality before they burn your account.
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
          <h2>Why partners stay with RidgeRise</h2>
          <p>
            For publishers, media buyers, and call-path operators who want buyer
            demand without guessing on quality or pay.
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
                <div className="pub-benefit__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={2.25} />
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
          <p className="page-hero__eyebrow">Partner path</p>
          <h2>Three steps to live campaigns</h2>
          <p>
            Apply, get reviewed, then run against open buyer demand with tracking
            already wired.
          </p>
        </div>
        <ol className="pub-steps__list">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.num}
                className={`pub-step pub-step--${step.tone} pub-reveal`}
              >
                <div className="pub-step__media" aria-hidden="true">
                  <span className="pub-step__num">{step.num}</span>
                  <span className="pub-step__glyph">
                    <Icon size={36} strokeWidth={2} />
                  </span>
                </div>
                <div className="pub-step__copy">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ——— Traffic sources gallery ——— */}
      <section className="pub-sources">
        <div className="pub-sources__head pub-reveal">
          <h2>Traffic types we work with</h2>
          <p>
            Search, social, native, email, owned media, or dedicated call paths —
            if the caller is qualified for the offer, we want to talk.
          </p>
        </div>
        <ul className="pub-sources__grid">
          {sources.map((source) => {
            const Icon = source.icon;
            return (
              <li key={source.label} className="pub-source pub-reveal">
                <span className="pub-source__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={2.25} />
                </span>
                <span className="pub-source__label">{source.label}</span>
                <span className="pub-source__body">{source.body}</span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ——— Closing CTA stage ——— */}
      <section className="pub-cta">
        <div className="pub-cta__glow" aria-hidden="true" />
        <div className="pub-cta__panel pub-reveal">
          <h2>Apply as a RidgeRise partner</h2>
          <p>
            Share your traffic type and verticals. If there's fit, we'll match
            you to live buyer campaigns and confirm payout terms.
          </p>
          <div className="page-hero__ctas">
            <Link to="/contact?role=publisher" className="btn btn--purple">
              Apply as a partner
            </Link>
            <Link to="/buyers" className="btn btn--mint">
              I buy calls & leads
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
