import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { buyersFaqs } from "@/data/faqs";
import { pageSeo } from "@/data/seo";
import { PROOF_METRICS_LIVE, proofFootnote, proofMetrics } from "@/data/proof";
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

const workTabs = [
  {
    id: "broker",
    label: "Broker",
    rows: [
      { name: "Publisher they don't control", value: "Ticket filed" },
      { name: "Quality drops", value: "You wait" },
      { name: "Sub-affiliate chain", value: "Blind" },
    ],
  },
  {
    id: "buyer",
    label: "Media buyer",
    rows: [
      { name: "Paid search · our account", value: "Live" },
      { name: "Social + display · our budget", value: "Live" },
      { name: "Screened partner · named", value: "On brief" },
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
    body: "Personal injury, workers' comp, SSDI, bankruptcy, solar, HVAC, roofing, plumbing, debt, mortgage, tax relief, and education.",
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
  const location = useLocation();
  useBuyerMotion(rootRef, location.pathname);
  const [model, setModel] = useState<(typeof modelTabs)[number]["id"]>("ppc");
  const [workModel, setWorkModel] = useState<(typeof workTabs)[number]["id"]>("buyer");
  const [openWhy, setOpenWhy] = useState(0);
  const activeModel = modelTabs.find((tab) => tab.id === model) ?? modelTabs[0];
  const activeWork = workTabs.find((tab) => tab.id === workModel) ?? workTabs[1];

  return (
    <main className="buy-page" ref={rootRef}>
      <Seo {...pageSeo.buyers} jsonLd={buildFaqJsonLd(buyersFaqs)} />

      <section className="buy-hero">
        <div className="buy-hero__glow" aria-hidden="true" />
        <div className="buy-hero__copy">
          <p className="page-hero__eyebrow">Buyers / Advertisers</p>
          <h1 className="buy-hero__title">
            We buy the media. You pay for the{" "}
            <span className="grad-mint">call.</span>
          </h1>
          <p className="buy-hero__desc">
            RidgeRise Media is a pay-per-call media buyer. We run our own
            campaigns on paid search, social and display. A screened publisher
            layer adds volume when you need more than we can produce in-house.
            Buy on cost per call or CPL. We take the media risk.
          </p>
          <div className="buy-hero__ctas">
            <Magnetic strength={0.4}>
              <Link to="/contact?role=buyer" className="btn btn--purple">
                Start a test campaign
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
          <div className="buy-hero__orb buy-hero__orb--mint" />
          <div className="buy-hero__orb buy-hero__orb--violet" />
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
        <div className="buy-split__copy">
          <p className="page-hero__eyebrow">How we work</p>
          <h2>Most pay-per-call companies are brokers. We are buyers.</h2>
          <p>
            A broker collects calls from publishers it does not control, adds a
            margin, and passes them on. When quality drops it files a ticket
            with the publisher and you wait.
          </p>
          <p>
            We buy media directly. Our own campaigns, our own creative, our own
            budget. When a source stops performing we shut it off the same day,
            because it is our money running, not someone else&apos;s. When a
            buyer says the Monday dump is killing answer rate, we can change
            the media, not just forward a complaint.
          </p>
          <p>
            Where we go beyond in-house, every partner is screened before
            activation and held to the same call-quality standards as our own
            campaigns.
          </p>
        </div>
        <div className="buy-split__visual">
          <article className="buy-mock buy-mock--mint">
            <div className="buy-mock__top">
              <p className="buy-mock__kicker buy-mock__kicker--mint">Supply mix</p>
              <span className="buy-mock__live">Live</span>
            </div>
            <div className="buy-tabs buy-tabs--2" role="tablist" aria-label="How volume is bought">
              {workTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={workModel === tab.id}
                  className={`buy-tabs__btn${workModel === tab.id ? " is-active" : ""}`}
                  onClick={() => setWorkModel(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <ul className="buy-mock__rows">
              {activeWork.rows.map((row) => (
                <li key={row.name}>
                  <span>{row.name}</span>
                  <strong>{row.value}</strong>
                </li>
              ))}
            </ul>
            <div className="buy-pills">
              <span className="buy-pill buy-pill--mint">Same-day cutoff</span>
              <span className="buy-pill">Named partners</span>
              <span className="buy-pill buy-pill--mint">Our budget</span>
            </div>
            <div className="buy-mock__track buy-mock__track--mint" aria-hidden="true">
              <span className="buy-mock__shimmer buy-mock__shimmer--mint" />
            </div>
          </article>
        </div>
      </section>

      {PROOF_METRICS_LIVE ? (
        <section className="stats" aria-label="Campaign proof">
          <p className="stats__eyebrow">
            <span className="stats__eyebrow-text">Proof, not slogans</span>
          </p>
          <ul className="stats__grid">
            {proofMetrics.map((metric) => (
              <li key={metric.label} className="stats__item">
                <span className="stats__value">{metric.value}</span>
                <span className="stats__label">{metric.label}</span>
              </li>
            ))}
          </ul>
          <p className="section-sub section-sub--sm">{proofFootnote}</p>
        </section>
      ) : null}

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
          <h2>Calls we bought the media for</h2>
          <p>
            Pay per call when you want live transfers billed on duration or
            disposition. Buy CPL leads when your team works forms. Or take
            qualified traffic straight into your funnel. We buy the media for
            these campaigns ourselves. Our accounts, our creative, our budget
            spent before a call reaches you. A screened publisher layer adds
            volume when you need more than in-house can carry. Every partner is
            named to you. No blind sub-affiliate chains.
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
            applicable, and cut traffic that fails your rules. When a source
            stops performing we shut it off the same day, because it is our
            money running.
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

      <section className="buy-flow" aria-labelledby="buy-flow-heading">
        <div className="buy-flow__layout">
          <div className="buy-flow__sticky">
            <p className="page-hero__eyebrow">How buying works</p>
            <h2 id="buy-flow-heading" className="section-title section-title--md">
              Brief, model, then live transfers
            </h2>
            <p className="section-sub section-sub--sm">
              You define demand. We match hybrid supply, price the model, and keep
              tracking open so you can see what holds.
            </p>
            <ol className="buy-flow__toc" aria-hidden="true">
              {steps.map((step, index) => (
                <li
                  key={step.num}
                  className={`buy-flow__toc-item${index === 0 ? " is-active" : ""}`}
                  data-step={step.num}
                >
                  <span>{step.num}</span>
                  <em>{step.title}</em>
                </li>
              ))}
            </ol>
          </div>

          <div className="buy-flow__board">
            <div className="buy-flow__rail" aria-hidden="true">
              <span className="buy-flow__rail-track" />
              <span className="buy-flow__rail-fill" />
            </div>
            <ol className="buy-flow__steps">
              {steps.map((step, index) => (
                <li
                  key={step.num}
                  className={`buy-flow__step${step.mint ? " buy-flow__step--mint" : ""}${index === 0 ? " is-active" : ""}`}
                  data-step={step.num}
                >
                  <span className="buy-flow__node" aria-hidden="true">
                    {step.num}
                  </span>
                  <article className="buy-flow__card">
                    <span className="buy-flow__icon" aria-hidden="true">
                      <img src={step.icon} alt="" width={30} height={30} />
                    </span>
                    <div className="buy-flow__card-copy">
                      <span className="buy-flow__n">Step {step.num}</span>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="buy-teams" aria-labelledby="buy-teams-heading">
        <div className="buy-teams__pin">
          <div className="buy-teams__shell">
            <div className="buy-teams__head">
              <p className="page-hero__eyebrow">Who we supply</p>
              <h2 id="buy-teams-heading" className="section-title section-title--md">
                Built for teams ready to answer
              </h2>
              <p className="section-sub section-sub--sm">
                See open demand by vertical on our verticals hub. Insurance, Legal,
                Home Services, Finance, and Education.
              </p>
              <div className="buy-teams__progress" aria-hidden="true">
                <span className="buy-teams__progress-fill" />
              </div>
            </div>

            <div className="buy-teams__stage">
              <ul className="buy-teams__track">
                {teams.map((team, index) => (
                  <li key={team.label} className="buy-teams__slide">
                    <Link
                      to={team.to}
                      className={`buy-teams__card buy-teams__card--${team.tone}`}
                    >
                      <span className="buy-teams__index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="buy-teams__icon" aria-hidden="true">
                        <img src={team.icon} alt="" width={32} height={32} />
                      </span>
                      <span className="buy-teams__copy">
                        <strong>{team.label}</strong>
                        <em>{team.body}</em>
                      </span>
                      <span className="buy-teams__cta">
                        Explore vertical
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        title="Buyer FAQ"
        description="CPL vs cost per call, supply mix, quality rules, and how campaigns start."
        items={buyersFaqs}
      />

      <section className="buy-cta">
        <div className="buy-cta__panel">
          <h2 className="section-title section-title--md">Start a test campaign with our team</h2>
          <div className="buy-cta__side">
            <p>
              Send your vertical, states, hours, and what a qualified call means
              for your intake. We will come back with volume and pricing within
              one business day.
            </p>
            <div className="buy-cta__actions">
              <Magnetic strength={0.4}>
                <Link to="/contact?role=buyer" className="btn btn--purple">
                  Start a test campaign
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
