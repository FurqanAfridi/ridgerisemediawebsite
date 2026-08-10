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
    title: "High-intent callers",
    body: "Speak with consumers who asked to talk — not cold form dumps or recycled clicks.",
    icon: PhoneCall,
    tone: "mint",
  },
  {
    title: "Campaign controls",
    body: "Filter by geo, hours, exclusivity, and vertical rules so agents get the right calls.",
    icon: SlidersHorizontal,
    tone: "violet",
  },
  {
    title: "Live quality visibility",
    body: "Track transfers, durations, and performance in real time to optimize spend.",
    icon: Gauge,
    tone: "amber",
  },
  {
    title: "Compliance-first sourcing",
    body: "Campaigns are reviewed before launch to reduce regulatory and brand risk.",
    icon: ShieldCheck,
    tone: "rose",
  },
  {
    title: "Insurance specialty",
    body: "Deep expertise in Auto, Health, Life, Home, Medicare, and Final Expense demand.",
    icon: BadgeCheck,
    tone: "violet",
  },
  {
    title: "Cross-vertical scale",
    body: "Expand into Legal, Home Services, Finance, Education, and more from one network.",
    icon: Sparkles,
    tone: "mint",
  },
] as const;

const steps = [
  {
    num: "01",
    title: "Tell us your buying needs",
    body: "Share verticals, geos, caps, hours, and quality requirements so we can map supply accurately.",
    icon: UserRoundSearch,
    tone: "violet",
  },
  {
    num: "02",
    title: "Launch filtered campaigns",
    body: "We match publisher supply to your offer with clear pricing, tracking, and compliance checks.",
    icon: Filter,
    tone: "mint",
  },
  {
    num: "03",
    title: "Optimize with live data",
    body: "Use RidgeRise dashboards to scale sources that convert and pause what does not.",
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
    body: "Media buyers scaling phone ROI",
    icon: Target,
  },
] as const;

const buyerStats = [
  { value: "200+", label: "Active buyer campaigns", count: "200", suffix: "+" },
  { value: "98%", label: "Quality match rate", count: "98", suffix: "%" },
  { value: "500K+", label: "Calls routed / yr", count: "500", suffix: "K+" },
  { value: "Live", label: "Transfer tracking", count: null, suffix: "" },
] as const;

export default function BuyersPage() {
  const rootRef = useRef<HTMLElement>(null);
  usePublisherMotion(rootRef);

  return (
    <main className="pub-page buy-page" ref={rootRef}>
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

      <section className="pub-hero">
        <div className="pub-hero__glow" aria-hidden="true" />
        <div className="pub-hero__copy pub-reveal">
          <p className="page-hero__eyebrow">Buyers / Advertisers</p>
          <h1 className="pub-hero__title">
            Buy calls that are ready to{" "}
            <span className="grad-mint">convert</span>
          </h1>
          <p className="pub-hero__desc">
            Acquire phone-ready prospects across Insurance and high-intent
            verticals — with filters, transparency, and compliance built in.
          </p>
          <div className="page-hero__ctas">
            <Link to="/contact?role=buyer" className="btn btn--purple">
              Get Started as Buyer
            </Link>
            <Link to="/verticals" className="btn btn--mint">
              View Verticals
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
          <p className="page-hero__eyebrow">Quality</p>
          <h2>Callers who already raised their hand</h2>
          <p>
            Buy live transfers and inbound phone intent — not recycled forms.
            Your agents talk to people who asked to connect now.
          </p>
          <ul className="pub-checklist">
            <li>Phone-ready prospects, not cold dumps</li>
            <li>Vertical-matched publisher supply</li>
            <li>Clear duration and conversion rules</li>
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
          <h2>Filters that protect your spend</h2>
          <p>
            Set geo, hours, exclusivity, and quality rules so every transfer
            fits your offer — then optimize with live performance data.
          </p>
          <ul className="pub-checklist">
            <li>Geo, schedule, and cap controls</li>
            <li>Exclusivity options when you need them</li>
            <li>Live dashboards to scale what converts</li>
          </ul>
        </div>
      </section>

      <section className="pub-benefits">
        <div className="pub-benefits__head pub-reveal">
          <h2>Why buyers choose RidgeRise</h2>
          <p>
            Built for agencies, call centers, carriers, and performance marketers
            who need qualified live transfers.
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
          <p className="page-hero__eyebrow">Get started</p>
          <h2>Your path to live traffic</h2>
          <p>
            From brief to filtered campaigns — with tracking and quality
            visibility from day one.
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
          <h2>Ideal for teams ready to answer</h2>
          <p>
            Any buyer with agents ready to take the call — across Insurance and
            high-intent performance verticals.
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
          <h2>Start buying qualified calls</h2>
          <p>
            Get a custom media plan for your verticals, geos, and quality rules.
          </p>
          <div className="page-hero__ctas">
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
