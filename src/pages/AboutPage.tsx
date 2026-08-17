import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Filter,
  Headphones,
  PhoneCall,
  Radio,
  Shield,
  SlidersHorizontal,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Seo } from "@/components/Seo";
import { aboutFaqs } from "@/data/faqs";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
import { Magnetic } from "@/components/ui/magnetic";
import { prefersReducedMotion } from "@/lib/motion-env";
import "./pages.css";
import "./about.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const buyables = [
  {
    title: "Exclusive or shared calls",
    body: "Exclusive when your agents need the only line. Shared when you're testing a geo or filling leftover capacity.",
    to: "/buyers",
    label: "Pay per call",
  },
  {
    title: "Live and warm transfers",
    body: "Qualification before the handoff. Duration rules and hours matched to the board you actually staff.",
    to: "/buyers",
    label: "Live transfers",
  },
  {
    title: "CPL leads",
    body: "Form or application events you define. Useful when the phone isn't the first step, or you want a record plus a call.",
    to: "/buyers",
    label: "CPL",
  },
  {
    title: "Qualified traffic",
    body: "Clicks and redirects into your own funnel when you already have intake and just need cleaner demand.",
    to: "/buyers",
    label: "Traffic",
  },
];

const quality = [
  {
    title: "Qualification before transfer",
    body: "Geo, product, hours, and any IVR or agent screen get written into the brief. A call that misses those rules shouldn't hit your queue.",
  },
  {
    title: "Duration and dispositions",
    body: "Billable isn't 'they talked.' It's the floor you set, plus whether the caller was the right person for the right product.",
  },
  {
    title: "Source-level cutoffs",
    body: "We monitor paths, not just campaign averages. A publisher or in-house cell that drifts gets paused. The rest keeps running.",
  },
  {
    title: "TCPA-aware process",
    body: "Campaign-specific consent and quality requirements. Compliance-conscious. Not a courtroom promise, and we won't pretend otherwise.",
  },
];

const verticalLinks = [
  { label: "Insurance", to: "/verticals#insurance" },
  { label: "Legal", to: "/verticals#legal" },
  { label: "Home Services", to: "/verticals#home-services" },
  { label: "Finance", to: "/verticals#finance" },
  { label: "Education", to: "/verticals#other" },
];

export default function AboutPage() {
  const rootRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const blocks = gsap.utils.toArray<HTMLElement>(".about-reveal");
      blocks.forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <main className="about-page" ref={rootRef}>
      <Seo
        title="How RidgeRise Buys and Places Calls"
        description="RidgeRise Media is a US demand aggregator. Hybrid in-house buying plus vetted partners. Buy qualified calls, leads, and traffic on CPL or cost per call."
        path="/about"
        keywords={[
          "demand aggregator",
          "pay per call",
          "cost per call",
          "CPL",
          "qualified inbound calls",
        ]}
        jsonLd={buildFaqJsonLd(aboutFaqs)}
      />

      <section className="about-hero">
        <div className="about-hero__copy">
          <p className="page-hero__eyebrow">About us</p>
          <h1 className="about-hero__title">
            We buy the demand. We also vet the partners.{" "}
            <span className="grad-mint">You get the call.</span>
          </h1>
          <p className="about-hero__desc">
            RidgeRise Media is a US pay-per-call and CPL shop that operates as a
            demand aggregator. Qualified inbound calls, leads, and traffic for
            buyers who need intake to keep up. Volume comes from campaigns we
            run and a vetted partner network, with filters and quality
            monitoring on both.
          </p>
          <div className="about-hero__ctas">
            <Magnetic strength={0.35}>
              <Link to="/buyers" className="btn btn--purple">
                Discuss a campaign
              </Link>
            </Magnetic>
            <Magnetic strength={0.35}>
              <Link to="/publishers" className="btn btn--mint">
                Apply as a partner
              </Link>
            </Magnetic>
          </div>
        </div>

        <div className="about-hero__stage" aria-hidden="true">
          <div className="about-flow">
            <div className="about-flow__node about-flow__node--in">
              <Radio size={18} strokeWidth={2.2} />
              <span>In-house media</span>
            </div>
            <div className="about-flow__node about-flow__node--out">
              <Headphones size={18} strokeWidth={2.2} />
              <span>Vetted partners</span>
            </div>
            <div className="about-flow__merge" />
            <div className="about-flow__node about-flow__node--end">
              <PhoneCall size={20} strokeWidth={2.2} />
              <strong>Your intake</strong>
              <em>Calls · CPL · Traffic</em>
            </div>
          </div>
        </div>
      </section>

      <section className="about-split" aria-labelledby="about-hybrid-heading">
        <header className="about-head about-reveal">
          <h2 id="about-hybrid-heading">Why we refuse to pick one supply lane</h2>
          <p>
            Pure in-house buying hits a ceiling. Pure network reselling turns
            into someone else's leftover traffic. We sit in the middle on
            purpose.
          </p>
        </header>
        <div className="about-split__grid">
          <motion.article
            className="about-panel about-reveal"
            whileHover={reduce ? undefined : { y: -8 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            <span className="about-panel__kicker">What we run</span>
            <h3>Owned media buying</h3>
            <p>
              We build and buy campaigns ourselves. That means we own the
              creative, the offer path, and the first look at whether a source
              can hold a duration rule. When a buyer says the Monday dump is
              killing answer rate, we can change the media, not just forward a
              complaint.
            </p>
          </motion.article>
          <motion.article
            className="about-panel about-panel--mint about-reveal"
            whileHover={reduce ? undefined : { y: -8 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            <span className="about-panel__kicker">What we add</span>
            <h3>Vetted partner volume</h3>
            <p>
              Publishers, media buyers, and aggregators fill the rest, after
              they clear quality standards. More volume in the same vertical
              without opening the floodgates. If a path fails review, it gets
              cut. The campaign doesn't have to die with it.
            </p>
          </motion.article>
        </div>
        <p className="about-split__note about-reveal">
          Hybrid isn't a slogan. It's how you scale Insurance, Legal, Home
          Services, and Finance without watching cost per acquisition fall
          apart the week you ask for more.
        </p>
      </section>

      <section className="about-band" aria-labelledby="about-call-heading">
        <div className="about-band__inner about-reveal">
          <h2 id="about-call-heading">The phone is still the product</h2>
          <p>
            In these verticals a shopper often needs an agent, an intake rep, or
            a setter on the line. A form fill can wait overnight. A live
            transfer can't. We design around conversations: duration floors,
            dispositions, exclusive vs shared, concurrency caps so your board
            isn't drowning at 9:05.
          </p>
          <p>
            That doesn't mean every qualified call becomes a sale. Answer rate
            and talk track still sit on your side. We can enforce the brief. We
            can't close for you.
          </p>
        </div>
      </section>

      <section className="about-buy" aria-labelledby="about-buy-heading">
        <header className="about-head about-reveal">
          <h2 id="about-buy-heading">What a buyer actually purchases</h2>
          <p>
            Cost per call (pay per call) and CPL, plus traffic into your funnel.
            Filters for vertical, geo, hours, exclusivity, and duration get
            agreed before anything goes live.{" "}
            <Link to="/buyers">See buying models</Link>.
          </p>
        </header>
        <ul className="about-buy__grid">
          {buyables.map((item, index) => (
            <motion.li
              key={item.title}
              className="about-buy__card about-reveal"
              whileHover={reduce ? undefined : { y: -8, rotate: index % 2 ? 0.6 : -0.6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <span>{item.label}</span>
              <h3>
                <Link to={item.to}>{item.title}</Link>
              </h3>
              <p>{item.body}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="about-quality" aria-labelledby="about-quality-heading">
        <header className="about-head about-reveal">
          <h2 id="about-quality-heading">How quality gets enforced</h2>
          <p>
            "High-quality calls" is a useless phrase until you say how. These
            are the practices. No invented rates. No guarantee a caller buys.
          </p>
        </header>
        <ol className="about-quality__list">
          {quality.map((item, i) => (
            <li key={item.title} className="about-quality__item about-reveal">
              <span className="about-quality__num">0{i + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <ul className="about-quality__icons" aria-hidden="true">
          <li>
            <Filter size={18} /> Filters
          </li>
          <li>
            <SlidersHorizontal size={18} /> Duration
          </li>
          <li>
            <Shield size={18} /> Source cuts
          </li>
        </ul>
      </section>

      <section className="about-verts" aria-labelledby="about-verts-heading">
        <header className="about-head about-reveal">
          <h2 id="about-verts-heading">Verticals we fill</h2>
          <p>
            Insurance is the core. Legal, Home Services, Finance, and Education
            sit next to it. If you buy in one of these, start with the category
            and tell us what qualified means for your intake.
          </p>
        </header>
        <ul className="about-verts__row about-reveal">
          {verticalLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="about-verts__chip">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="about-verts__more about-reveal">
          <Link to="/verticals">Browse all verticals</Link>
        </p>
      </section>

      <section className="about-pub" aria-labelledby="about-pub-heading">
        <div className="about-pub__inner about-reveal">
          <h2 id="about-pub-heading">If you monetize call traffic</h2>
          <p>
            We have live buyer demand across those same verticals. Tracking
            stays visible. Quality standards are the price of admission. This
            is a selective partner program, not an open affiliate signup.
          </p>
          <Link to="/publishers" className="btn btn--mint">
            Apply as a partner
          </Link>
        </div>
      </section>

      <FaqSection
        title="About FAQ"
        description="Hybrid supply, call-first campaigns, and who this model is for."
        items={aboutFaqs}
      />

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Tell us what a qualified call looks like</h2>
          <p>
            Bring vertical, states, hours, and how you define qualified. We'll
            talk CPL or cost per call from there. Publishers: traffic type and
            verticals.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact?role=buyer" className="btn btn--purple">
              Discuss a campaign
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
