import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { publishersFaqs } from "@/data/faqs";
import { pageSeo } from "@/data/seo";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
import { usePublisherMotion } from "@/hooks/usePublisherMotion";
import "./pages.css";
import "./buyers.css";
import "./publishers.css";

const A = "/assets/publishers";

const whyCards = [
  {
    id: "demand",
    num: "01",
    title: "Live buyer demand",
    body: "Open campaigns across Insurance, Legal, Home Services, Finance, and Education, matched to traffic you already run.",
    tone: "mint",
    art: "phone",
  },
  {
    id: "tracking",
    num: "02",
    title: "Call-level tracking",
    body: "See transfers, duration rules, and billable events in real time. No mystery deductions.",
    tone: "violet",
    art: "transfers",
  },
  {
    id: "payouts",
    num: "03",
    title: "Clear payout terms",
    body: "Rates, caps, and billable rules upfront. We pay what we agree; schedule confirmed when you onboard.",
    tone: "pink",
    art: "cpl",
  },
  {
    id: "quality",
    num: "04",
    title: "Quality standards that stick",
    body: "TCPA-aware setup, campaign consent rules, and source expectations before your traffic goes live.",
    tone: "lime",
    art: "quality",
  },
  {
    id: "review",
    num: "05",
    title: "Selective partner review",
    body: "We don't take every applicant. Fit, traffic type, and vertical experience matter.",
    tone: "amber",
    art: "insurance",
  },
  {
    id: "scale",
    num: "06",
    title: "Healthy accounts at scale",
    body: "Filters and reporting keep you aligned with buyer quality so volume doesn't burn the offer.",
    tone: "rose",
    art: "legal",
  },
] as const;

const steps = [
  {
    num: "01",
    title: "Apply with your sources",
    body: "Tell us traffic types, geos, and verticals. We review for fit and compliance readiness.",
    icon: `${A}/step-1.svg`,
    image: `${A}/path-apply.webp`,
    imageAlt: "Partners reviewing campaign sources together at a desk",
    tone: "violet",
  },
  {
    num: "02",
    title: "Get matched to live demand",
    body: "Approved partners see open buyer campaigns with payout terms, caps, and tracking from day one.",
    icon: `${A}/step-2.svg`,
    image: `${A}/path-match.webp`,
    imageAlt: "Live analytics dashboard showing demand and performance",
    tone: "mint",
  },
  {
    num: "03",
    title: "Launch, track, get paid",
    body: "Optimize paths that convert. Pause what fails quality. Payouts follow the terms we set together.",
    icon: `${A}/step-3.svg`,
    image: `${A}/path-launch.webp`,
    imageAlt: "Partnership handshake after launching a paid campaign",
    tone: "amber",
  },
] as const;

const sources = [
  {
    label: "Search",
    body: "Paid & organic intent",
    detail: "High-intent queries that convert into qualified inbound calls.",
    icon: `${A}/source-search.svg`,
    tone: "violet",
  },
  {
    label: "Social",
    body: "Paid social click-to-call",
    detail: "Click-to-call and form-to-phone paths from paid social traffic.",
    icon: `${A}/source-social.svg`,
    tone: "mint",
  },
  {
    label: "Native",
    body: "Content-driven transfers",
    detail: "Content placements that move readers into tracked call offers.",
    icon: `${A}/source-native.svg`,
    tone: "amber",
  },
  {
    label: "Call paths",
    body: "IVR & warm transfers",
    detail: "IVR, warm transfers, and dedicated call routing into live buyers.",
    icon: `${A}/source-calls.svg`,
    tone: "rose",
  },
  {
    label: "Email",
    body: "Nurture to phone",
    detail: "Nurture sequences that land in a phone conversation, not just a click.",
    icon: `${A}/source-email.svg`,
    tone: "pink",
  },
  {
    label: "Owned media",
    body: "Sites, apps, communities",
    detail: "Sites, apps, and communities with steady qualified caller volume.",
    icon: `${A}/source-owned.svg`,
    tone: "lime",
  },
] as const;

const payoutStats = [
  { value: "Live", label: "Buyer demand open" },
  { value: "Tracked", label: "Call-level reporting" },
  { value: "Clear", label: "Payout terms upfront" },
  { value: "Vetted", label: "Partner review required" },
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
        <img src={`${A}/icon-transfers.svg`} alt="" width={156} height={156} />
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
  if (art === "quality") {
    return (
      <div className="buy-why__art" aria-hidden="true">
        <img src={`${A}/icon-quality.svg`} alt="" width={156} height={156} />
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

export default function PublishersPage() {
  const rootRef = useRef<HTMLElement>(null);
  const location = useLocation();
  usePublisherMotion(rootRef, location.pathname);
  const [openWhy, setOpenWhy] = useState(0);

  return (
    <main className="pub-page" ref={rootRef}>
      <Seo {...pageSeo.publishers} jsonLd={buildFaqJsonLd(publishersFaqs)} />

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
            deliver qualified callers, with tracking and payout terms that stay
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
            <article className="pub-mock pub-mock--live">
              <div className="pub-mock__top">
                <span className="pub-mock__live-dot" />
                <p className="pub-mock__kicker">Live call</p>
                <span className="pub-mock__time">02:14</span>
              </div>
              <div className="pub-mock__bars pub-mock__bars--hero">
                <span className="pub-mock__bar pub-mock__bar--lilac" style={{ height: "62%" }} />
                <span className="pub-mock__bar pub-mock__bar--violet" style={{ height: "46%" }} />
                <span className="pub-mock__bar pub-mock__bar--lilac" style={{ height: "37%" }} />
                <span className="pub-mock__bar pub-mock__bar--mint" style={{ height: "36%" }} />
                <span className="pub-mock__bar pub-mock__bar--lilac" style={{ height: "42%" }} />
                <span className="pub-mock__bar pub-mock__bar--violet" style={{ height: "56%" }} />
                <span className="pub-mock__bar pub-mock__bar--lilac" style={{ height: "74%" }} />
                <span className="pub-mock__bar pub-mock__bar--mint" style={{ height: "90%" }} />
                <span className="pub-mock__bar pub-mock__bar--lilac" style={{ height: "99%" }} />
                <span className="pub-mock__bar pub-mock__bar--violet" style={{ height: "100%" }} />
              </div>
              <div className="pub-mock__foot">
                <span>Qualified transfer</span>
                <strong>Quoted</strong>
              </div>
            </article>
          </div>
          <div className="pub-hero__orb pub-hero__orb--mint pub-float" />
          <div className="pub-hero__orb pub-hero__orb--violet pub-float" />
        </div>
      </section>

      <section className="pub-metrics" aria-label="Publisher metrics">
        <ul className="pub-metrics__grid">
          {payoutStats.map((stat) => (
            <li key={stat.label} className="pub-metrics__item pub-reveal">
              <span className="pub-metrics__value">{stat.value}</span>
              <span className="pub-metrics__label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pub-split">
        <div className="pub-split__visual pub-reveal-left">
          <article className="pub-mock pub-mock--payout" aria-hidden="true">
            <div className="pub-mock__top">
              <p className="pub-mock__kicker pub-mock__kicker--mint">Payout schedule</p>
              <span className="pub-mock__meta">On brief</span>
            </div>
            <ul className="pub-mock__rows">
              <li>
                <span>Legal · duration floor</span>
                <strong>Quoted</strong>
              </li>
              <li>
                <span>Home Services · duration floor</span>
                <strong>Quoted</strong>
              </li>
            </ul>
            <div className="pub-mock__foot">
              <span>Deductions</span>
              <em>None</em>
            </div>
            <div className="pub-mock__track" aria-hidden="true">
              <span className="pub-mock__shimmer" />
            </div>
          </article>
        </div>
        <div className="pub-split__copy pub-reveal-right">
          <p className="page-hero__eyebrow">Payouts</p>
          <h2>Terms you can plan around</h2>
          <p>
            Billable rules, caps, and rates are written before you push volume.
            You see what converted. You get paid what we agreed. Ask for the
            current payout schedule when you apply.
          </p>
          <p>
            We buy most of our own media. We run this programme because in-house
            capacity has a ceiling in every vertical, and we would rather raise
            it with a small number of partners we know than open the floodgates.
            That is why the standards are what they are.
          </p>
          <ul className="pub-checklist">
            <li>Duration and conversion rules in writing</li>
            <li>No black-box deductions</li>
            <li>Payout schedule confirmed at onboarding</li>
          </ul>
        </div>
      </section>

      <section className="pub-split pub-split--reverse">
        <div className="pub-split__visual pub-reveal-right">
          <article className="pub-mock pub-mock--track" aria-hidden="true">
            <div className="pub-mock__top">
              <p className="pub-mock__kicker">Transfers today</p>
              <span className="pub-mock__live-pill">
                <span className="pub-mock__live-dot" />
                Live
              </span>
            </div>
            <div className="pub-track__chart">
              <img
                className="pub-track__chart-line"
                src={`${A}/chart-line-1.svg`}
                alt=""
                width={343}
                height={69}
              />
              <img
                className="pub-track__chart-line pub-track__chart-line--dash"
                src={`${A}/chart-line-2.svg`}
                alt=""
                width={343}
                height={69}
              />
              <img
                className="pub-track__chart-dot"
                src={`${A}/chart-dot.svg`}
                alt=""
                width={10}
                height={10}
              />
            </div>
            <div className="pub-mock__bars">
              <span className="pub-mock__bar pub-mock__bar--wash" style={{ height: "57%" }} />
              <span className="pub-mock__bar pub-mock__bar--lilac" style={{ height: "67%" }} />
              <span className="pub-mock__bar pub-mock__bar--violet" style={{ height: "76%" }} />
              <span className="pub-mock__bar pub-mock__bar--lilac" style={{ height: "84%" }} />
              <span className="pub-mock__bar pub-mock__bar--mint" style={{ height: "91%" }} />
              <span className="pub-mock__bar pub-mock__bar--wash" style={{ height: "96%" }} />
              <span className="pub-mock__bar pub-mock__bar--violet" style={{ height: "100%" }} />
            </div>
            <div className="pub-track__stats">
              <div>
                <strong>Live</strong>
                <span>Calls</span>
              </div>
              <div>
                <strong>Tracked</strong>
                <span>Billable</span>
              </div>
            </div>
          </article>
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

      <section className="buy-why" aria-labelledby="why-partners-heading">
        <div className="buy-why__head">
          <h2 id="why-partners-heading">
            Why partners stay
            <br />
            with RidgeRise
          </h2>
          <p>
            For publishers, media buyers, and call-path operators who want buyer
            demand without guessing on quality or pay.
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
          {steps.map((step) => (
            <li
              key={step.num}
              className={`pub-step pub-step--${step.tone} pub-reveal`}
            >
              <div className="pub-step__media">
                <img
                  className="pub-step__image"
                  src={step.image}
                  alt={step.imageAlt}
                  width={600}
                  height={480}
                  loading="lazy"
                  decoding="async"
                />
                <span className="pub-step__num" aria-hidden="true">
                  {step.num}
                </span>
                <span className="pub-step__glyph" aria-hidden="true">
                  <img src={step.icon} alt="" width={30} height={30} />
                </span>
              </div>
              <div className="pub-step__copy">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="pub-sources" aria-labelledby="pub-sources-heading">
        <div className="pub-sources__layout">
          <div className="pub-sources__sticky">
            <p className="page-hero__eyebrow">Traffic types</p>
            <h2 id="pub-sources-heading">Traffic types we work with</h2>
            <p>
              Search, social, native, email, owned media, or dedicated call paths.
              If the caller is qualified for the offer, we want to talk.
            </p>
            <ol className="pub-sources__toc" aria-hidden="true">
              {sources.map((source, index) => (
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
              {sources.map((source, index) => (
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

      <FaqSection
        title="Publisher FAQ"
        description="Demand, traffic types, tracking, payouts, and how to apply."
        items={publishersFaqs}
      />

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
