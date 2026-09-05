import { useRef, type RefObject } from "react";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  Filter,
  Globe,
  Handshake,
  Headphones,
  LayoutGrid,
  Megaphone,
  MonitorPlay,
  MousePointerClick,
  Newspaper,
  PhoneCall,
  Radio,
  Search,
  Shield,
  Timer,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Seo } from "@/components/Seo";
import { aboutFaqs } from "@/data/faqs";
import { pageSeo, breadcrumbLd } from "@/data/seo";
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
    image: "/assets/about/buy-calls.webp?v=2",
    Icon: PhoneCall,
    tone: "violet",
  },
  {
    id: "transfers",
    title: "Live and warm transfers",
    body: "Qualification before the handoff. Duration rules and hours matched to the board you actually staff.",
    to: "/buyers",
    label: "Live transfers",
    image: "/assets/about/buy-transfers.webp?v=2",
    Icon: Headphones,
    tone: "mint",
  },
  {
    id: "cpl",
    title: "CPL leads",
    body: "Form or application events you define. Useful when the phone isn't the first step, or you want a record plus a call.",
    to: "/buyers",
    label: "CPL",
    image: "/assets/about/buy-cpl.webp?v=2",
    Icon: ClipboardList,
    tone: "amber",
  },
  {
    id: "traffic",
    title: "Qualified traffic",
    body: "Clicks and redirects into your own funnel when you already have intake and just need cleaner demand.",
    to: "/buyers",
    label: "Traffic",
    image: "/assets/about/buy-traffic.webp?v=2",
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

const mediaChannels = [
  {
    title: "Paid search",
    body: "Google and Bing. High-intent queries where the searcher is already looking to solve the problem. Click-to-call and call-only formats put them on the phone in one step.",
    Icon: Search,
  },
  {
    title: "Paid social",
    body: "Meta and TikTok. Interest and lookalike targeting into click-to-call paths, with creative built per product rather than per vertical.",
    Icon: Megaphone,
  },
  {
    title: "Native",
    body: "Content-driven placements that pre-frame the offer before the caller ever dials. Longer path, better-informed caller, and duration that holds.",
    Icon: Newspaper,
  },
  {
    title: "Display and video",
    body: "Prospecting and retargeting across programmatic inventory. Useful for verticals with a longer consideration window.",
    Icon: MonitorPlay,
  },
  {
    title: "Owned properties",
    body: "Our own sites and comparison pages, where we control the entire path from landing to dial and nothing is inherited from anyone else.",
    Icon: Globe,
  },
  {
    title: "Screened partners",
    body: "Publishers and media buyers who clear review, disclosed by source, held to the same duration and quality standards as our own campaigns.",
    Icon: Handshake,
  },
] as const;

const consentPoints = [
  {
    title: "Consent captured at the source.",
    body: "The disclosure sits on the page we built, in the flow we control, before the caller dials.",
    Icon: Shield,
  },
  {
    title: "Documented on every call.",
    body: "Records are retained and produced on request, not reconstructed after the fact.",
    Icon: ClipboardList,
  },
  {
    title: "DNC scrubbing and geo filters.",
    body: "Applied before transfer, not after a complaint.",
    Icon: Filter,
  },
  {
    title: "Partner traffic held to the same standard.",
    body: "Screened before activation. Sources disclosed. Excluded on request, no explanation required.",
    Icon: Headphones,
  },
] as const;

const whyConvertsPoints = [
  {
    title: "Creative matched to the product, not the vertical.",
    body: "A Medicare caller and a final expense caller respond to different angles. Building per product is what holds duration.",
    Icon: LayoutGrid,
  },
  {
    title: "IVR pre-qualification before transfer.",
    body: "Geography, intent, and your stated criteria confirmed while the caller is still on our side of the line.",
    Icon: PhoneCall,
  },
  {
    title: "Duration floors set from your data.",
    body: "We would rather set the threshold from where duration correlates with closes in your center than apply an industry default.",
    Icon: Timer,
  },
  {
    title: "Source-level monitoring, cut same day.",
    body: "When a path stops performing, we pause our own campaign. There is no publisher to negotiate with first.",
    Icon: Radio,
  },
] as const;

const channelTones = ["violet", "mint", "amber", "violet", "mint", "amber"] as const;

const teamMembers = [
  {
    name: "Spencer Peiffer",
    role: "Founder",
    image: "/assets/about/team/jim-martin.webp?v=4",
    featured: true,
  },
  {
    name: "Rafia Mairaj",
    role: "Consultant",
    image: "/assets/about/team/rafia-mairaj.webp?v=2",
  },
  {
    name: "Furqan",
    role: "Technical Manager",
    image: "/assets/about/team/furqan.webp?v=2",
  },
  {
    name: "M Hamza",
    role: "Media Buying Specialist",
    image: "/assets/about/team/m-hamza.webp?v=3",
  },
  {
    name: "Mark Ruffalo",
    role: "Onboarding Specialist",
    image: "/assets/about/team/mark-ruffalo.webp?v=2",
  },
  {
    name: "Jim Martin",
    role: "Technical Lead",
    image: "/assets/about/team/spencer-peiffer.webp?v=4",
  },
] as const;

function useChannelsMotion(ref: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const section = ref.current;
      if (!section) return;

      const cards = gsap.utils.toArray<HTMLElement>(".about-channels__card", section);
      const line = section.querySelector<HTMLElement>(".about-channels__line span");
      const orb = section.querySelector<HTMLElement>(".about-channels__orb");

      if (prefersReducedMotion()) {
        if (line) line.style.width = "100%";
        return;
      }

      gsap.from(".about-channels__head > *", {
        y: 36,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: section, start: "top 82%", once: true },
      });

      cards.forEach((card, index) => {
        const fromX = index % 2 === 0 ? -72 : 72;
        const rotate = index % 2 === 0 ? -5 : 5;

        gsap.from(card, {
          x: fromX,
          y: 48,
          opacity: 0,
          rotate,
          scale: 0.88,
          duration: 0.75,
          ease: "back.out(1.35)",
          immediateRender: false,
          scrollTrigger: { trigger: card, start: "top 92%", once: true },
        });
      });

      if (line) {
        ScrollTrigger.create({
          trigger: section,
          start: "top 55%",
          end: "bottom 45%",
          scrub: 0.6,
          onUpdate: (self) => {
            line.style.width = `${Math.max(8, self.progress * 100)}%`;
          },
        });
      }

      if (orb) {
        gsap.to(orb, {
          y: -40,
          x: 20,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    },
    { scope: ref },
  );
}

function useConsentMotion(ref: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const section = ref.current;
      if (!section) return;

      const steps = gsap.utils.toArray<HTMLElement>(".about-consent__step", section);
      const fill = section.querySelector<HTMLElement>(".about-consent__track-fill");

      const setActive = (index: number) => {
        steps.forEach((step, i) => {
          step.classList.toggle("is-active", i === index);
          step.classList.toggle("is-done", i < index);
        });
        const pct = steps.length <= 1 ? 100 : (index / (steps.length - 1)) * 100;
        if (fill) fill.style.height = `${pct}%`;
      };

      setActive(0);

      if (prefersReducedMotion()) {
        steps.forEach((step) => step.classList.add("is-active", "is-done"));
        if (fill) fill.style.height = "100%";
        return;
      }

      gsap.from(".about-consent__aside", {
        x: -48,
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
        duration: 0.85,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: section, start: "top 78%", once: true },
      });

      steps.forEach((step, index) => {
        gsap.from(step, {
          x: 64,
          opacity: 0,
          duration: 0.65,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: step, start: "top 88%", once: true },
        });

        ScrollTrigger.create({
          trigger: step,
          start: "top 68%",
          end: "bottom 68%",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });
    },
    { scope: ref },
  );
}

function useConvertsMotion(ref: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const section = ref.current;
      if (!section) return;

      const cards = gsap.utils.toArray<HTMLElement>(".about-converts__card", section);

      if (prefersReducedMotion()) return;

      gsap.from(".about-converts__head", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
      });

      cards.forEach((card, index) => {
        const fromLeft = index % 2 === 0;

        gsap.from(card, {
          x: fromLeft ? -90 : 90,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.8,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: card, start: "top 90%", once: true },
        });
      });

      gsap.from(".about-converts__cta", {
        scale: 0.85,
        opacity: 0,
        duration: 0.55,
        ease: "back.out(1.5)",
        immediateRender: false,
        scrollTrigger: { trigger: ".about-converts__cta", start: "top 92%", once: true },
      });

      gsap.to(".about-converts__glow", {
        scale: 1.15,
        opacity: 0.55,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: ref },
  );
}

function useTeamMotion(ref: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const section = ref.current;
      if (!section) return;

      if (prefersReducedMotion()) return;

      gsap.from(".about-team__head > *", {
        y: 28,
        opacity: 0,
        stagger: 0.08,
        duration: 0.55,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: { trigger: section, start: "top 82%", once: true },
      });

      gsap.from(".about-team__card", {
        y: 56,
        opacity: 0,
        scale: 0.82,
        rotateY: -12,
        transformPerspective: 900,
        stagger: 0.09,
        duration: 0.7,
        ease: "back.out(1.25)",
        immediateRender: false,
        scrollTrigger: { trigger: ".about-team__grid", start: "top 85%", once: true },
      });
    },
    { scope: ref },
  );
}

export default function AboutPage() {
  const rootRef = useRef<HTMLElement>(null);
  const channelsRef = useRef<HTMLElement>(null);
  const consentRef = useRef<HTMLElement>(null);
  const convertsRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const buyRef = useRef<HTMLElement>(null);
  const qualityRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useChannelsMotion(channelsRef);
  useConsentMotion(consentRef);
  useConvertsMotion(convertsRef);
  useTeamMotion(teamRef);

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
      <Seo
        {...pageSeo.about}
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          buildFaqJsonLd(aboutFaqs),
        ]}
      />

      <section className="about-hero">
        <div className="about-hero__copy">
          <p className="page-hero__eyebrow">About us</p>
          <h1 className="about-hero__title">
            We run the campaigns. We own the consent.{" "}
            <span className="grad-mint">You get the call.</span>
          </h1>
          <p className="about-hero__desc">
            RidgeRise Media is a US pay-per-call media buying agency. We build and
            run the campaigns that produce the calls: paid search, paid social,
            native, display, and owned properties on accounts we control, with
            consent captured at the source and documented on every call. When a
            buyer needs more volume than in-house can carry, screened partners
            extend it against the same standards. Insurance, legal, home
            services, finance, and education.
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

      <section
        className="about-channels"
        aria-labelledby="about-channels-heading"
        ref={channelsRef}
      >
        <div className="about-channels__orb" aria-hidden="true" />
        <div className="about-channels__inner">
          <header className="about-channels__head">
            <p className="page-hero__eyebrow">Our media channels</p>
            <h2 id="about-channels-heading">Every call starts on a campaign we built</h2>
            <p>
              Not a feed we resold. These are the channels we buy on, the accounts
              we hold, and the paths a caller travels before your phone rings.
            </p>
            <div className="about-channels__line" aria-hidden="true">
              <span />
            </div>
          </header>
          <ul className="about-channels__bento">
            {mediaChannels.map((item, index) => (
              <motion.li
                key={item.title}
                className={`about-channels__card about-channels__card--${index + 1}`}
                whileHover={reduce ? undefined : { y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
              >
                <span
                  className={`about-channels__icon about-channels__icon--${channelTones[index % channelTones.length]}`}
                  aria-hidden="true"
                >
                  <item.Icon size={22} strokeWidth={2.2} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="about-consent"
        aria-labelledby="about-consent-heading"
        ref={consentRef}
      >
        <div className="about-consent__inner">
          <div className="about-consent__layout">
            <aside className="about-consent__aside">
              <p className="page-hero__eyebrow">Consent and compliance</p>
              <h2 id="about-consent-heading">
                The consent comes from our path, not someone else&apos;s
              </h2>
              <div className="about-consent__lead">
                <p>
                  Compliance exposure in this industry travels downstream. A caller
                  consents on a page three companies removed from the buyer, and when
                  the documentation is requested, nobody can produce it.
                </p>
                <p className="about-consent__lead-accent">
                  Because we own the path, we own the record.
                </p>
              </div>
              <p className="about-consent__foot">
                We are compliance-conscious and we build for it. That is not a legal
                guarantee, and we won&apos;t pretend otherwise. Your counsel should
                confirm what your product and states require.
              </p>
            </aside>
            <div className="about-consent__timeline">
              <div className="about-consent__track" aria-hidden="true">
                <span className="about-consent__track-fill" />
              </div>
              <ol className="about-consent__steps">
                {consentPoints.map((item, index) => (
                  <li
                    key={item.title}
                    className={`about-consent__step${index === 0 ? " is-active" : ""}`}
                  >
                    <span className="about-consent__dot">{index + 1}</span>
                    <motion.article
                      className="about-consent__panel"
                      whileHover={reduce ? undefined : { x: 6 }}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    >
                      <span className="about-consent__glyph" aria-hidden="true">
                        <item.Icon size={20} strokeWidth={2.2} />
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </motion.article>
                  </li>
                ))}
              </ol>
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
      </section>

      <section
        className="about-converts"
        aria-labelledby="about-converts-heading"
        ref={convertsRef}
      >
        <div className="about-converts__glow" aria-hidden="true" />
        <div className="about-converts__inner">
          <header className="about-converts__head">
            <p className="page-hero__eyebrow">Why it converts</p>
            <h2 id="about-converts-heading">
              Owning the path is what makes the call worth taking
            </h2>
            <p>
              A call is only as good as the path that produced it. When you buy from
              a reseller, the creative, the landing page, the disclosure, and the
              IVR were all built by someone else, and the first time anyone looks
              closely is when your close rate drops.
            </p>
            <p>
              We built all of it. So when something slips, we change the media
              instead of forwarding a complaint.
            </p>
          </header>
          <ul className="about-converts__stack">
            {whyConvertsPoints.map((item, index) => (
              <motion.li
                key={item.title}
                className={`about-converts__card${index % 2 === 1 ? " is-right" : ""}`}
                whileHover={reduce ? undefined : { scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 360, damping: 24 }}
              >
                <span className="about-converts__num">0{index + 1}</span>
                <span
                  className={`about-converts__icon about-converts__icon--${channelTones[index % channelTones.length]}`}
                  aria-hidden="true"
                >
                  <item.Icon size={22} strokeWidth={2.2} />
                </span>
                <div className="about-converts__copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <p className="about-converts__cta">
            <Magnetic strength={0.35}>
              <Link to="/buyers" className="btn btn--purple">
                Start a test campaign
              </Link>
            </Magnetic>
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
                  <img src={item.image} alt={item.title} width={700} height={500} loading="lazy" />
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
                src="/assets/about/quality-ops.webp?v=2"
                alt=""
                width={700}
                height={500}
                loading="lazy"
              />
              <img
                className="about-quality__shot about-quality__shot--float"
                src="/assets/about/quality-review.webp?v=2"
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

      <section
        className="about-team"
        aria-labelledby="about-team-heading"
        ref={teamRef}
      >
        <header className="about-team__head">
          <p className="page-hero__eyebrow">Our team</p>
          <h2 id="about-team-heading">The people behind the campaigns</h2>
          <p>
            Media buying, onboarding, compliance ops, and technical infrastructure.
            Each lane owned by a specialist, not a generalist pretending to cover all of it.
          </p>
        </header>
        <ul className="about-team__grid">
          {teamMembers.map((member) => (
            <motion.li
              key={member.name}
              className={`about-team__card${"featured" in member && member.featured ? " about-team__card--founder" : ""}`}
              whileHover={reduce ? undefined : { y: -10, rotateX: 2 }}
              transition={{ type: "spring", stiffness: 340, damping: 22 }}
            >
              <img
                className="about-team__avatar"
                src={member.image}
                alt={`${member.name}, ${member.role} at RidgeRise Media`}
                width={168}
                height={168}
                loading="lazy"
                decoding="async"
              />
              <div className="about-team__meta">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </motion.li>
          ))}
        </ul>
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
