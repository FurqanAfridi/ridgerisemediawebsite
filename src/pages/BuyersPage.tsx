import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { buyersFaqs } from "@/data/faqs";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
import { Magnetic } from "@/components/ui/magnetic";
import { useBuyerMotion } from "@/hooks/useBuyerMotion";
import "./pages.css";
import "./buyers.css";

const A = "/assets/buyers";

const stats = [
  { value: "CPL", label: "Cost-per-lead campaigns" },
  { value: "CPP", label: "Pay-per-call buying" },
  { value: "Hybrid", label: "In-house + partner supply" },
  { value: "US", label: "High-intent vertical coverage" },
] as const;

const modelTabs = [
  {
    id: "ppc",
    label: "Pay per call",
    rows: [
      { name: "Shared · Home Services", value: "Quoted" },
      { name: "Live transfer · Legal", value: "Quoted" },
    ],
  },
  {
    id: "cpl",
    label: "CPL",
    rows: [
      { name: "Verified form lead · Medicare", value: "CPL" },
      { name: "Shared form lead · Health", value: "CPL" },
    ],
  },
  {
    id: "traffic",
    label: "Traffic",
    rows: [
      { name: "Qualified click · Auto", value: "Click" },
      { name: "Redirect · Home Services", value: "Click" },
    ],
  },
] as const;

const whyCards = [
  {
    id: "calls",
    num: "01",
    title: "Exclusive or shared calls",
    body: "Buy exclusive inbound calls when your agents need sole access, or shared volume when you're testing a market.",
    tone: "mint",
    art: "phone",
  },
  {
    id: "transfers",
    num: "02",
    title: "Live transfers that fit intake",
    body: "Warm transfers routed to your queue with duration rules and qualification checks agreed before launch.",
    tone: "violet",
    art: "transfers",
  },
  {
    id: "cpl",
    num: "03",
    title: "CPL leads and qualified traffic",
    body: "Need form leads or clicks into your own funnel? We run CPL and traffic deals alongside pay-per-call.",
    tone: "pink",
    art: "cpl",
  },
  {
    id: "tcpa",
    num: "04",
    title: "TCPA-aware campaign setup",
    body: "Consent, hours, and vertical rules are set per campaign. Compliance-conscious. Not a legal guarantee.",
    tone: "lime",
    art: "tcpa",
  },
  {
    id: "insurance",
    num: "05",
    title: "Insurance depth",
    body: "Auto, Health, Life, Home, Medicare Advantage, and Final Expense. The verticals where phone intake still pays.",
    tone: "amber",
    art: "insurance",
  },
  {
    id: "multi",
    num: "06",
    title: "Legal, home services, finance",
    body: "Personal injury, mass tort, solar, HVAC, roofing, home security, debt, mortgage, tax relief, and education.",
    tone: "rose",
    art: "legal",
  },
] as const;

const steps = [
  {
    num: "01",
    title: "Tell us what a qualified call looks like",
    body: "Vertical, states, hours, concurrency, exclusivity, and your duration or disposition rules.",
    icon: `${A}/step-1.svg`,
    mint: false,
  },
  {
    num: "02",
    title: "Pick CPL, cost per call, or traffic",
    body: "We price to the model that matches your funnel. Pay per call for live transfers, CPL for leads, or qualified traffic into your pages.",
    icon: `${A}/step-2.svg`,
    mint: false,
  },
  {
    num: "03",
    title: "Scale sources that hold quality",
    body: "In-house media buying plus vetted partners. Source-level monitoring, recording review where applicable, and cutoffs when quality slips.",
    icon: `${A}/step-3.svg`,
    mint: true,
  },
] as const;

const teams = [
  {
    label: "Insurance",
    body: "Agencies, carriers & call centers",
    icon: `${A}/team-insurance.svg`,
    tone: "violet",
    to: "/verticals",
  },
  {
    label: "Legal",
    body: "PI firms & intake partners",
    icon: `${A}/team-legal.svg`,
    tone: "rose",
    to: "/verticals/personal-injury",
  },
  {
    label: "Home services",
    body: "HVAC, solar, roofing & more",
    icon: `${A}/team-home.svg`,
    tone: "mint",
    to: "/verticals",
  },
  {
    label: "Finance",
    body: "Debt, tax, mortgage buyers",
    icon: `${A}/team-finance.svg`,
    tone: "amber",
    to: "/verticals",
  },
  {
    label: "Education",
    body: "Enrollment & career programs",
    icon: `${A}/team-education.svg`,
    tone: "pink",
    to: "/verticals/education",
  },
  {
    label: "Performance teams",
    body: "Buyers scaling phone CPA",
    icon: `${A}/team-performance.svg`,
    tone: "lime",
    to: "/contact?role=buyer",
  },
] as const;

function WhyArt({ art }: { art: (typeof whyCards)[number]["art"] }) {
  if (art === "phone") {
    return (
      <div className="buy-why__art buy-why__art--phone" aria-hidden="true">
        <img className="buy-why__layer buy-why__layer--o" src={`${A}/phone-ring-outer.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--m" src={`${A}/phone-ring-mid.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--i" src={`${A}/phone-ring-inner.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--h" src={`${A}/phone-handset.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--dot" src={`${A}/phone-dot.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--mark" src={`${A}/phone-mark.svg`} alt="" />
      </div>
    );
  }
  if (art === "transfers") {
    return (
      <div className="buy-why__art" aria-hidden="true">
        <img src={`${A}/icon-transfers.svg`} alt="" />
      </div>
    );
  }
  if (art === "cpl") {
    return (
      <div className="buy-why__art buy-why__art--cpl" aria-hidden="true">
        <img className="buy-why__layer buy-why__layer--frame" src={`${A}/cpl-frame.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--c1" src={`${A}/cpl-1.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--c2" src={`${A}/cpl-2.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--c3" src={`${A}/cpl-3.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--c4" src={`${A}/cpl-4.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--c5" src={`${A}/cpl-5.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--pulse" src={`${A}/cpl-pulse.svg`} alt="" />
      </div>
    );
  }
  if (art === "tcpa") {
    return (
      <div className="buy-why__art" aria-hidden="true">
        <img src={`${A}/icon-tcpa.svg`} alt="" />
      </div>
    );
  }
  if (art === "insurance") {
    return (
      <div className="buy-why__art buy-why__art--ins" aria-hidden="true">
        <img className="buy-why__layer buy-why__layer--ib" src={`${A}/ins-base.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--i2" src={`${A}/ins-2.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--i3" src={`${A}/ins-3.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--i4" src={`${A}/ins-4.svg`} alt="" />
        <img className="buy-why__layer buy-why__layer--ip" src={`${A}/ins-pulse.svg`} alt="" />
      </div>
    );
  }
  return (
    <div className="buy-why__art buy-why__art--legal" aria-hidden="true">
      <img className="buy-why__layer buy-why__layer--lb" src={`${A}/legal-base.svg`} alt="" />
      <img className="buy-why__layer buy-why__layer--b1" src={`${A}/legal-bar-1.svg`} alt="" />
      <img className="buy-why__layer buy-why__layer--b2" src={`${A}/legal-bar-2.svg`} alt="" />
      <img className="buy-why__layer buy-why__layer--b3" src={`${A}/legal-bar-3.svg`} alt="" />
      <img className="buy-why__layer buy-why__layer--b4" src={`${A}/legal-bar-4.svg`} alt="" />
      <img className="buy-why__layer buy-why__layer--lt" src={`${A}/legal-top.svg`} alt="" />
    </div>
  );
}

export default function BuyersPage() {
  const rootRef = useRef<HTMLElement>(null);
  useBuyerMotion(rootRef);
  const [model, setModel] = useState<(typeof modelTabs)[number]["id"]>("ppc");
  const [openWhy, setOpenWhy] = useState(0);
  const activeModel = modelTabs.find((tab) => tab.id === model) ?? modelTabs[0];

  return (
    <main className="buy-page" ref={rootRef}>
      <Seo
        title="Buy Qualified Calls, Leads & Traffic"
        description="Buy exclusive or shared calls, live transfers, CPL leads, and traffic. Cost per call or CPL with geo, hours, and exclusivity filters. Discuss a campaign."
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
        jsonLd={buildFaqJsonLd(buyersFaqs)}
      />

      <section className="buy-hero">
        <div className="buy-hero__copy">
          <p className="page-hero__eyebrow">Buyers / Advertisers</p>
          <h1 className="buy-hero__title">
            Buy qualified calls, leads, and{" "}
            <span className="grad-mint">traffic</span>
          </h1>
          <p className="buy-hero__desc">
            Exclusive or shared inbound calls, live transfers, CPL leads, and
            qualified traffic on cost per call or CPL, filtered to your intake.
          </p>
          <div className="buy-hero__ctas">
            <Magnetic strength={0.4}>
              <Link to="/contact?role=buyer" className="btn btn--purple">
                Discuss a campaign
              </Link>
            </Magnetic>
            <Magnetic strength={0.4}>
              <Link to="/verticals" className="btn btn--mint">
                Get vertical pricing
              </Link>
            </Magnetic>
          </div>
        </div>

        <div className="buy-hero__stage" aria-hidden="true">
          <div className="buy-hero__orbit buy-hero__orbit--outer" />
          <div className="buy-hero__orbit buy-hero__orbit--inner" />
          <div className="buy-hero__float">
            <div className="buy-queue">
            <div className="buy-queue__top">
              <span>Inbound queue</span>
              <span className="buy-queue__live">
                <span className="buy-queue__dot" />
                Routing
              </span>
            </div>
            <div className="buy-queue__row">
              <span className="buy-queue__icon">
                <img src={`${A}/queue-solar.svg`} alt="" width={16} height={16} />
              </span>
              <span className="buy-queue__meta">
                <strong>Solar · TX</strong>
                <em>CPL lead · verified</em>
              </span>
              <span className="buy-queue__tag">CPL</span>
            </div>
            <div className="buy-chart">
              {[36, 27, 20, 17, 18, 22, 30, 39].map((h, i) => (
                <span
                  key={i}
                  className={`buy-chart__bar buy-chart__bar--${i % 3 === 1 ? "violet" : i % 3 === 2 ? "mint" : "lilac"}`}
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="What advertisers buy with us">
        <p className="stats__eyebrow">
          <span className="stats__eyebrow-text">What advertisers buy with us</span>
        </p>
        <ul className="stats__grid">
          {stats.map((stat) => (
            <li key={stat.value} className="stats__item">
              <span className="stats__value">{stat.value}</span>
              <span className="stats__label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="buy-split">
        <div className="buy-split__visual">
          <article className="buy-mock buy-mock--violet">
            <p className="buy-mock__kicker">Buying model</p>
            <div className="buy-tabs" role="tablist" aria-label="Buying model">
              {modelTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={model === tab.id}
                  className={`buy-tabs__btn${model === tab.id ? " is-active" : ""}`}
                  onClick={() => setModel(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <ul className="buy-mock__rows">
              {activeModel.rows.map((row) => (
                <li key={row.name}>
                  <span>{row.name}</span>
                  <strong>{row.value}</strong>
                </li>
              ))}
            </ul>
            <div className="buy-mock__track" aria-hidden="true">
              <span className="buy-mock__shimmer" />
            </div>
          </article>
        </div>
        <div className="buy-split__copy">
          <p className="page-hero__eyebrow">What you buy</p>
          <h2>Calls that reach agents who can close</h2>
          <p>
            Pay per call when you want live transfers billed on duration or
            disposition. Buy CPL leads when your team works forms. Or take
            qualified traffic straight into your funnel. Volume comes from our
            own media buying plus a vetted publisher network. Hybrid on purpose,
            so you can scale without relying on one source.
          </p>
          <ul className="buy-list">
            <li>Exclusive calls or shared calls by market</li>
            <li>Live transfers with agreed qualification</li>
            <li>CPL and traffic when phone isn&apos;t the only path</li>
          </ul>
        </div>
      </section>

      <section className="buy-split buy-split--reverse">
        <div className="buy-split__copy">
          <p className="page-hero__eyebrow">Control</p>
          <h2>Filters that match your capacity</h2>
          <p>
            Set vertical, geo, schedule, concurrency caps, and exclusivity before
            a campaign goes live. We monitor sources, review recordings where
            applicable, and cut traffic that fails your rules. Spend follows
            quality, not vanity volume.
          </p>
          <ul className="buy-list buy-list--mint">
            <li>Geo, hours, and concurrency controls</li>
            <li>Exclusivity when your agents need sole access</li>
            <li>Source-level cutoffs and dispute handling</li>
          </ul>
        </div>
        <div className="buy-split__visual">
          <article className="buy-mock buy-mock--mint">
            <div className="buy-mock__top">
              <p className="buy-mock__kicker buy-mock__kicker--mint">Campaign filters</p>
              <span className="buy-mock__live">Live</span>
            </div>
            <div className="buy-pills">
              <span className="buy-pill buy-pill--mint">CA · TX · FL</span>
              <span className="buy-pill">Business hours</span>
              <span className="buy-pill">Exclusive</span>
              <span className="buy-pill buy-pill--mint">Duration floor</span>
            </div>
            <div className="buy-filter">
              <div className="buy-filter__row">
                <span>Concurrency cap</span>
                <strong>Set</strong>
              </div>
              <div className="buy-filter__bar">
                <span className="buy-filter__fill buy-filter__fill--mint" data-fill="62%" />
              </div>
            </div>
            <div className="buy-filter">
              <div className="buy-filter__row">
                <span>Daily budget</span>
                <strong>Capped</strong>
              </div>
              <div className="buy-filter__bar">
                <span className="buy-filter__fill buy-filter__fill--violet" data-fill="78%" />
              </div>
            </div>
            <div className="buy-mock__track buy-mock__track--mint" aria-hidden="true">
              <span className="buy-mock__shimmer buy-mock__shimmer--mint" />
            </div>
          </article>
        </div>
      </section>

      <section className="buy-why" aria-labelledby="why-buyers-heading">
        <div className="buy-why__head">
          <h2 id="why-buyers-heading">
            Why buyers run
            <br />
            campaigns with RidgeRise
          </h2>
          <p>
            Built for carriers, agencies, legal intake, home services, finance
            buyers, and call centers who need inbound that fits the desk.
          </p>
        </div>
        <ul className="buy-why__track">
          {whyCards.map((card, index) => (
            <li
              key={card.id}
              className={`buy-why__card buy-why__card--${card.tone}${openWhy === index ? " is-open" : ""}`}
              onMouseEnter={() => setOpenWhy(index)}
              onFocus={() => setOpenWhy(index)}
            >
              <button
                type="button"
                className="buy-why__hit"
                aria-expanded={openWhy === index}
                onClick={() => setOpenWhy(index)}
              >
                <WhyArt art={card.art} />
                {card.art === "phone" ? (
                  <span className="buy-why__badge" aria-hidden="true">
                    <img src={`${A}/icon-check.svg`} alt="" width={20} height={20} />
                  </span>
                ) : null}
                <span className="buy-why__num">{card.num}</span>
                <span className="buy-why__title">{card.title}</span>
                <span className="buy-why__body">{card.body}</span>
                <span className="buy-why__spine">{card.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="buy-flow">
        <div className="buy-flow__head">
          <p className="page-hero__eyebrow">How buying works</p>
          <h2 className="section-title section-title--md">Brief, model, then live transfers</h2>
          <p className="section-sub section-sub--sm">
            You define demand. We match hybrid supply, price the model, and keep
            tracking open so you can see what holds.
          </p>
        </div>
        <div className="buy-flow__board">
          <div className="buy-flow__line" aria-hidden="true">
            <span className="buy-flow__fill" />
            <span className="buy-flow__dot" />
          </div>
          <ol className="buy-flow__steps">
            {steps.map((step) => (
              <li
                key={step.num}
                className={`buy-flow__step${step.mint ? " buy-flow__step--mint" : ""}`}
              >
                <span className="buy-flow__icon-wrap">
                  <span className="buy-flow__ring" aria-hidden="true" />
                  <span className="buy-flow__icon">
                    <img src={step.icon} alt="" width={30} height={30} />
                  </span>
                </span>
                <span className="buy-flow__n">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="buy-teams">
        <div className="buy-teams__head">
          <p className="page-hero__eyebrow">Who we supply</p>
          <h2 className="section-title section-title--md">Built for teams ready to answer</h2>
          <p className="section-sub section-sub--sm">
            See open demand by vertical on our verticals hub. Insurance, Legal,
            Home Services, Finance, and Education.
          </p>
        </div>
        <ul className="buy-teams__grid">
          {teams.map((team) => (
            <li key={team.label}>
              <Link to={team.to} className={`buy-teams__item buy-teams__item--${team.tone}`}>
                <span className="buy-teams__icon" aria-hidden="true">
                  <img src={team.icon} alt="" width={28} height={28} />
                </span>
                <span>
                  <strong>{team.label}</strong>
                  <em>{team.body}</em>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FaqSection
        title="Buyer FAQ"
        description="CPL vs cost per call, supply mix, quality rules, and how campaigns start."
        items={buyersFaqs}
      />

      <section className="buy-cta">
        <div className="buy-cta__panel">
          <h2 className="section-title section-title--md">Discuss a campaign with our team</h2>
          <div className="buy-cta__side">
            <p>
              Bring your vertical, states, hours, and what a qualified call means
              for your intake. We&apos;ll map CPL or cost-per-call options from
              there.
            </p>
            <div className="buy-cta__actions">
              <Magnetic strength={0.4}>
                <Link to="/contact?role=buyer" className="btn btn--purple">
                  Discuss a campaign
                </Link>
              </Magnetic>
              <Magnetic strength={0.4}>
                <Link to="/publishers" className="btn btn--mint">
                  Apply as a partner
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
