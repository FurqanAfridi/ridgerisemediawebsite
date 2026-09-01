import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  Filter,
  Headphones,
  MousePointerClick,
  PhoneCall,
  Radio,
  Shield,
  Timer,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Seo } from "@/components/Seo";
import { aboutFaqs } from "@/data/faqs";
import { pageSeo } from "@/data/seo";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
import { Magnetic } from "@/components/ui/magnetic";
import { prefersReducedMotion } from "@/lib/motion-env";
import "./pages.css";
import "./about.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const buyables = [
  {
    id: "calls",
    title: "Exclusive or shared calls",
    body: "Exclusive when your agents need the only line. Shared when you're testing a geo or filling leftover capacity.",
    to: "/buyers",
    label: "Pay per call",
    image: "/assets/about/buy-calls.webp",
    Icon: PhoneCall,
    tone: "violet",
  },
  {
    id: "transfers",
    title: "Live and warm transfers",
    body: "Qualification before the handoff. Duration rules and hours matched to the board you actually staff.",
    to: "/buyers",
    label: "Live transfers",
    image: "/assets/about/buy-transfers.webp",
    Icon: Headphones,
    tone: "mint",
  },
  {
    id: "cpl",
    title: "CPL leads",
    body: "Form or application events you define. Useful when the phone isn't the first step, or you want a record plus a call.",
    to: "/buyers",
    label: "CPL",
    image: "/assets/about/buy-cpl.webp",
    Icon: ClipboardList,
    tone: "amber",
  },
  {
    id: "traffic",
    title: "Qualified traffic",
    body: "Clicks and redirects into your own funnel when you already have intake and just need cleaner demand.",
    to: "/buyers",
    label: "Traffic",
    image: "/assets/about/buy-traffic.webp",
    Icon: MousePointerClick,
    tone: "rose",
  },
];

const quality = [
  {
    title: "Qualification before transfer",
    body: "Geo, product, hours, and any IVR or agent screen get written into the brief. A call that misses those rules shouldn't hit your queue.",
    Icon: Filter,
  },
  {
    title: "Duration and dispositions",
    body: "Billable isn't 'they talked.' It's the floor you set, plus whether the caller was the right person for the right product.",
    Icon: Timer,
  },
  {
    title: "Source-level cutoffs",
    body: "We monitor paths, not just campaign averages. A publisher or in-house cell that drifts gets paused. The rest keeps running.",
    Icon: Headphones,
  },
  {
    title: "TCPA-aware process",
    body: "Campaign-specific consent and quality requirements. Compliance-conscious. Not a courtroom promise, and we won't pretend otherwise.",
    Icon: Shield,
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
  const buyRef = useRef<HTMLElement>(null);
  const qualityRef = useRef<HTMLElement>(null);
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

  useGSAP(
    () => {
      const stage = buyRef.current;
      if (!stage) return;

      const steps = gsap.utils.toArray<HTMLElement>(".about-buy__step");
      const frames = gsap.utils.toArray<HTMLElement>(".about-buy__frame");
      const progress = stage.querySelector<HTMLElement>(".about-buy__progress-fill");

      const setActive = (index: number) => {
        steps.forEach((step, i) => {
          step.classList.toggle("is-active", i === index);
          step.classList.toggle("is-done", i < index);
        });
        frames.forEach((frame, i) => {
          frame.classList.toggle("is-active", i === index);
        });
        if (progress) {
          const pct = steps.length <= 1 ? 100 : (index / (steps.length - 1)) * 100;
          progress.style.height = `${pct}%`;
        }
      };

      setActive(0);

      if (prefersReducedMotion()) {
        steps.forEach((step) => step.classList.add("is-active"));
        frames.forEach((frame) => frame.classList.add("is-active"));
        if (progress) progress.style.height = "100%";
        return;
      }

      steps.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 62%",
          end: "bottom 62%",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });

      gsap.from(".about-buy__visual", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: stage,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: buyRef },
  );

  useGSAP(
    () => {
      const section = qualityRef.current;
      if (!section) return;

      const cards = gsap.utils.toArray<HTMLElement>(".about-quality__card");
      const fill = section.querySelector<HTMLElement>(".about-quality__line-fill");
      const dial = section.querySelector<HTMLElement>(".about-quality__dial-fill");

      const setActive = (index: number) => {
        cards.forEach((card, i) => {
          card.classList.toggle("is-active", i === index);
          card.classList.toggle("is-done", i < index);
        });
        const pct = cards.length <= 1 ? 100 : ((index + 1) / cards.length) * 100;
        if (fill) fill.style.width = `${pct}%`;
        if (dial) dial.style.setProperty("--pct", String(pct));
      };

      setActive(0);

      if (prefersReducedMotion()) {
        cards.forEach((card) => card.classList.add("is-active", "is-done"));
        if (fill) fill.style.width = "100%";
        if (dial) dial.style.setProperty("--pct", "100");
        return;
      }

      gsap.from(".about-quality__media", {
        scale: 0.94,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      cards.forEach((card, index) => {
        gsap.from(card, {
          y: 48,
          opacity: 0,
          duration: 0.65,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top 70%",
          end: "bottom 70%",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });
    },
    { scope: qualityRef },
  );

  return (
    <main className="about-page" ref={rootRef}>
      <Seo {...pageSeo.about} jsonLd={buildFaqJsonLd(aboutFaqs)} />

      <section className="about-hero">
        <div className="about-hero__copy">
          <p className="page-hero__eyebrow">About us</p>
          <h1 className="about-hero__title">
            We buy the demand. We also vet the partners.{" "}
            <span className="grad-mint">You get the call.</span>
          </h1>
          <p className="about-hero__desc">
            RidgeRise Media is a US pay-per-call and CPL media buyer. Qualified inbound calls, leads, and traffic for
            buyers who need intake to keep up. Volume comes from campaigns we
            run and screened partners, with filters and quality
            monitoring on both.
          </p>
          <div className="about-hero__ctas">
            <Magnetic strength={0.35}>
              <Link to="/buyers" className="btn btn--purple">
                Start a test campaign
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

      <section className="about-buy" aria-labelledby="about-buy-heading" ref={buyRef}>
        <header className="about-head about-reveal">
          <h2 id="about-buy-heading">What a buyer actually purchases</h2>
          <p>
            Cost per call (pay per call) and CPL, plus traffic into your funnel.
            Filters for vertical, geo, hours, exclusivity, and duration get
            agreed before anything goes live.{" "}
            <Link to="/buyers">See buying models</Link>.
          </p>
        </header>

        <div className="about-buy__stage">
          <aside className="about-buy__visual" aria-hidden="true">
            <div className="about-buy__frames">
              {buyables.map((item, index) => (
                <figure
                  key={item.id}
                  className={`about-buy__frame about-buy__frame--${item.tone}${index === 0 ? " is-active" : ""}`}
                >
                  <img src={item.image} alt="" width={700} height={500} loading="lazy" />
                  <figcaption>
                    <item.Icon size={18} strokeWidth={2.2} />
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="about-buy__progress">
              <span className="about-buy__progress-fill" />
            </div>
          </aside>

            <ol className="about-buy__rail">
            {buyables.map((item, index) => (
              <li
                key={item.id}
                className={`about-buy__step${index === 0 ? " is-active" : ""}`}
              >
                <div className={`about-buy__card about-buy__card--${item.tone}`}>
                  <div className="about-buy__meta">
                    <span className="about-buy__num">0{index + 1}</span>
                    <span className="about-buy__tag">{item.label}</span>
                  </div>
                  <div className="about-buy__icon">
                    <item.Icon size={22} strokeWidth={2.2} />
                  </div>
                  <h3>
                    <Link to={item.to}>{item.title}</Link>
                  </h3>
                  <p>{item.body}</p>
                  <Link to={item.to} className="about-buy__cta">
                    Explore buying →
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="about-quality"
        aria-labelledby="about-quality-heading"
        ref={qualityRef}
      >
        <header className="about-head about-reveal">
          <h2 id="about-quality-heading">How quality gets enforced</h2>
          <p>
            "High-quality calls" is a useless phrase until you say how. These
            are the practices. No invented rates. No guarantee a caller buys.
          </p>
        </header>

        <div className="about-quality__layout">
          <div className="about-quality__media" aria-hidden="true">
            <div className="about-quality__shots">
              <img
                className="about-quality__shot about-quality__shot--main"
                src="/assets/about/quality-ops.webp"
                alt=""
                width={700}
                height={500}
                loading="lazy"
              />
              <img
                className="about-quality__shot about-quality__shot--float"
                src="/assets/about/quality-review.webp"
                alt=""
                width={420}
                height={320}
                loading="lazy"
              />
            </div>
            <div className="about-quality__dial">
              <svg viewBox="0 0 120 120" className="about-quality__dial-ring">
                <circle cx="60" cy="60" r="48" className="about-quality__dial-track" />
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  className="about-quality__dial-fill"
                  pathLength="100"
                />
              </svg>
              <div className="about-quality__dial-copy">
                <strong>QC</strong>
                <span>Live review</span>
              </div>
            </div>
          </div>

          <div className="about-quality__board">
            <div className="about-quality__line" aria-hidden="true">
              <span className="about-quality__line-fill" />
            </div>
            <ol className="about-quality__grid">
              {quality.map((item, i) => (
                <li
                  key={item.title}
                  className={`about-quality__card${i === 0 ? " is-active" : ""}`}
                >
                  <span className="about-quality__badge">0{i + 1}</span>
                  <span className="about-quality__glyph">
                    <item.Icon size={20} strokeWidth={2.2} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
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
              Start a test campaign
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
