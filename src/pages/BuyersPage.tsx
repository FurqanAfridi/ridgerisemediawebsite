import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  Building2,
  Crosshair,
  Filter,
  Gauge,
  GraduationCap,
  Home,
  PhoneCall,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  UserRoundSearch,
  Wallet,
} from "lucide-react";
import { Seo } from "@/components/Seo";
import { assets } from "@/data/site";
import { usePublisherMotion } from "@/hooks/usePublisherMotion";
import "./pages.css";
import "./publishers.css";
import "./buyers.css";

const benefits = [
  {
    title: "Exclusive or shared calls",
    body: "Buy exclusive inbound calls when your agents need sole access, or shared volume when you're testing a market.",
    icon: PhoneCall,
    tone: "mint",
  },
  {
    title: "Live transfers that fit intake",
    body: "Warm transfers routed to your queue with duration rules and qualification checks agreed before launch.",
    icon: SlidersHorizontal,
    tone: "violet",
  },
  {
    title: "CPL leads and qualified traffic",
    body: "Need form leads or clicks into your own funnel? We run CPL and traffic deals alongside pay-per-call.",
    icon: Gauge,
    tone: "amber",
  },
  {
    title: "TCPA-aware campaign setup",
    body: "Consent, hours, and vertical rules are set per campaign. Compliance-conscious — not a legal guarantee.",
    icon: ShieldCheck,
    tone: "rose",
  },
  {
    title: "Insurance depth",
    body: "Auto, Health, Life, Home, Medicare Advantage, and Final Expense — the verticals where phone intake pays.",
    icon: BadgeCheck,
    tone: "violet",
  },
  {
    title: "Legal, home services, finance",
    body: "Personal injury, mass tort, solar, HVAC, roofing, home security, debt, mortgage, tax relief, and education.",
    icon: Sparkles,
    tone: "mint",
  },
] as const;

const steps = [
  {
    num: "01",
    title: "Tell us what a qualified call looks like",
    body: "Vertical, states, hours, concurrency, exclusivity, and your duration or disposition rules.",
    icon: UserRoundSearch,
    tone: "violet",
  },
  {
    num: "02",
    title: "Pick CPL, cost per call, or traffic",
    body: "We price to the model that matches your funnel — pay per call for live transfers, CPL for leads, or qualified traffic into your pages.",
    icon: Filter,
    tone: "mint",
  },
  {
    num: "03",
    title: "Scale sources that hold quality",
    body: "In-house media buying plus vetted partners. Source-level monitoring, recording review where applicable, and cutoffs when quality slips.",
    icon: Crosshair,
    tone: "amber",
  },
] as const;

const buyerTypes = [
  {
    label: "Insurance",
    body: "Agencies, carriers & call centers",
    icon: Building2,
  },
  {
    label: "Legal",
    body: "PI firms & intake partners",
    icon: Scale,
  },
  {
    label: "Home services",
    body: "HVAC, solar, roofing & more",
    icon: Home,
  },
  {
    label: "Finance",
    body: "Debt, tax, mortgage buyers",
    icon: Wallet,
  },
  {
    label: "Education",
    body: "Enrollment & career programs",
    icon: GraduationCap,
  },
  {
    label: "Performance teams",
    body: "Buyers scaling phone CPA",
    icon: Target,
  },
] as const;

const buyerStats = [
  { value: "Calls", label: "Exclusive & shared inbound", count: null, suffix: "" },
  { value: "CPL", label: "Leads priced per lead", count: null, suffix: "" },
  { value: "CPP", label: "Cost-per-call / pay per call", count: null, suffix: "" },
  { value: "Live", label: "Transfer & duration tracking", count: null, suffix: "" },
] as const;

export default function BuyersPage() {
  const rootRef = useRef<HTMLElement>(null);
  usePublisherMotion(rootRef);

  return (
    <main className="pub-page buy-page" ref={rootRef}>
      <Seo
        title="Buy Qualified Calls, Leads & Traffic"
        description="Buy exclusive or shared calls, live transfers, CPL leads, and traffic. Cost-per-call or CPL with geo, hours, and exclusivity filters. Discuss a campaign."
        path="/buyers"
        keywords={[
          "buy qualified calls",
          "pay per call",
          "cost per call",
          "CPL leads",
          "live transfers",
          "exclusive calls",
          "shared calls",
        ]}
      />

      <section className="pub-hero">
        <div className="pub-hero__glow" aria-hidden="true" />
        <div className="pub-hero__copy pub-reveal">
          <p className="page-hero__eyebrow">Buyers / Advertisers</p>
          <h1 className="pub-hero__title">
            Buy qualified calls, leads, and{" "}
            <span className="grad-mint">traffic</span>
          </h1>
          <p className="pub-hero__desc">
            Exclusive or shared inbound calls, live transfers, CPL leads, and
            qualified traffic — on cost-per-call or CPL, filtered to your intake.
          </p>
          <div className="page-hero__ctas">
            <Link to="/contact?role=buyer" className="btn btn--purple">
              Discuss a campaign
            </Link>
            <Link to="/verticals" className="btn btn--mint">
              Get vertical pricing
            </Link>
          </div>
        </div>

        <div className="pub-hero__stage" aria-hidden="true">
          <div className="pub-hero__card buy-hero__card pub-float pub-parallax" data-speed="0.2">
            <img src={assets.cardCalls} alt="" />
          </div>
          <div className="pub-hero__orb pub-hero__orb--mint pub-float" />
          <div className="pub-hero__orb pub-hero__orb--violet pub-float" />
          <img
            className="pub-hero__rocket buy-hero__rocket float-bob pub-parallax"
            data-speed="0.4"
            src={assets.rocket}
            alt=""
          />
        </div>
      </section>

      <section className="pub-metrics" aria-label="Buyer metrics">
        <ul className="pub-metrics__grid">
          {buyerStats.map((stat) => (
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

      <section className="pub-split">
        <div className="pub-split__visual pub-reveal-left">
          <div className="pub-split__frame pub-split__frame--violet">
            <img src={assets.cardCalls} alt="Live call tracking graphic" />
          </div>
          <img
            className="pub-split__deco pub-split__deco--rocket float-bob"
            src={assets.rocket}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="pub-split__copy pub-reveal-right">
          <p className="page-hero__eyebrow">What you buy</p>
          <h2>Calls that reach agents who can close</h2>
          <p>
            Pay per call when you want live transfers billed on duration or
            disposition. Buy CPL leads when your team works forms. Or take
            qualified traffic straight into your funnel. Volume comes from our
            own media buying plus a vetted publisher network — hybrid on purpose,
            so you can scale without relying on one source.
          </p>
          <ul className="pub-checklist">
            <li>Exclusive calls or shared calls by market</li>
            <li>Live transfers with agreed qualification</li>
            <li>CPL and traffic when phone isn't the only path</li>
          </ul>
        </div>
      </section>

      <section className="pub-split pub-split--reverse">
        <div className="pub-split__visual pub-reveal-right">
          <div className="pub-split__frame pub-split__frame--mint">
            <img src={assets.cardPayout} alt="Campaign controls graphic" />
          </div>
          <img
            className="pub-split__deco float-bob"
            src={assets.money}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="pub-split__copy pub-reveal-left">
          <p className="page-hero__eyebrow">Control</p>
          <h2>Filters that match your capacity</h2>
          <p>
            Set vertical, geo, schedule, concurrency caps, and exclusivity before
            a campaign goes live. We monitor sources, review recordings where
            applicable, and cut traffic that fails your rules — so spend follows
            quality, not vanity volume.
          </p>
          <ul className="pub-checklist">
            <li>Geo, hours, and concurrency controls</li>
            <li>Exclusivity when your agents need sole access</li>
            <li>Source-level cutoffs and dispute handling</li>
          </ul>
        </div>
      </section>

      <section className="pub-benefits">
        <div className="pub-benefits__head pub-reveal">
          <h2>Why buyers run campaigns with RidgeRise</h2>
          <p>
            Built for carriers, agencies, legal intake, home services, finance
            buyers, and call centers who need inbound that fits the desk.
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

      <section className="pub-steps">
        <div className="pub-steps__head pub-reveal">
          <p className="page-hero__eyebrow">How buying works</p>
          <h2>From brief to live transfers</h2>
          <p>
            You define qualified. We match hybrid supply, price the model, and
            keep tracking open so you can see what holds.
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

      <section className="pub-sources">
        <div className="pub-sources__head pub-reveal">
          <h2>Built for teams ready to answer</h2>
          <p>
            See open demand by vertical on our verticals hub — Insurance, Legal,
            Home Services, Finance, and Education.
          </p>
        </div>
        <ul className="pub-sources__grid">
          {buyerTypes.map((type) => {
            const Icon = type.icon;
            return (
              <li key={type.label} className="pub-source pub-reveal">
                <span className="pub-source__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={2.25} />
                </span>
                <span className="pub-source__label">{type.label}</span>
                <span className="pub-source__body">{type.body}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="pub-cta">
        <div className="pub-cta__glow" aria-hidden="true" />
        <div className="pub-cta__panel pub-reveal">
          <h2>Discuss a campaign with our team</h2>
          <p>
            Bring your vertical, states, hours, and what a qualified call means
            for your intake. We'll map CPL or cost-per-call options from there.
          </p>
          <div className="page-hero__ctas">
            <Link to="/contact?role=buyer" className="btn btn--purple">
              Talk to our team
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
