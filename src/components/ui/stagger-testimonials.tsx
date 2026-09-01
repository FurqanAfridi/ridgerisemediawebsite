import { useEffect, useRef, type FC } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import {
  bindScrollTriggerRefreshListeners,
  configureScrollTriggerForDevices,
  scheduleScrollTriggerRefresh,
} from "@/lib/motion-env";
import "./stagger-testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 0,
    testimonial:
      "We buy auto insurance calls on cost per call. Clear duration rules and source notes made disputes easier to handle.",
    by: "Intake Manager, Insurance Agency",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=SarahChen&backgroundColor=5d62dd&textColor=ffffff",
  },
  {
    id: 1,
    testimonial:
      "Hybrid supply helped when our in-house hours filled up. Same filters, more concurrency, no free-for-all.",
    by: "Media Buyer, Performance Team",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=MarcusJohnson&backgroundColor=45e9b5&textColor=000000",
  },
  {
    id: 2,
    testimonial:
      "Legal intake needs case-type screening before transfer. Write that into the campaign up front, not after the fact.",
    by: "Ops Lead, Personal Injury Firm",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=PriyaPatel&backgroundColor=8b68e5&textColor=ffffff",
  },
  {
    id: 3,
    testimonial:
      "One media buyer for Insurance and Home Services beats juggling five vendors with five definitions of 'qualified.'",
    by: "Growth Director, Multi-Vertical Buyer",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=DavidRodriguez&backgroundColor=4c1678&textColor=ffffff",
  },
  {
    id: 4,
    testimonial:
      "As a publisher, payouts and dispositions are visible. No mystery holds. Just the quality rules we already agreed to.",
    by: "Publisher Partner",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=EmmaThompson&backgroundColor=2ae2a8&textColor=000000",
  },
  {
    id: 5,
    testimonial:
      "CPL for web leads, cost per call for phone. Same team, same vertical map. That cut the back-and-forth.",
    by: "Campaign Lead, Call Center",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=PeteAlvarez&backgroundColor=5d62dd&textColor=ffffff",
  },
  {
    id: 6,
    testimonial:
      "Geo and schedule filters stuck. When a source drifted, they cut it instead of arguing about billable minutes.",
    by: "Buyer, Home Services Contractor",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=AishaMohammed&backgroundColor=8b68e5&textColor=ffffff",
  },
  {
    id: 7,
    testimonial:
      "Inbound calls that match the hours and states we can actually staff. That's the whole brief.",
    by: "Sales Ops, Finance Vertical",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=AlexKim&backgroundColor=45e9b5&textColor=000000",
  },
];

function wrapPosition(index: number, active: number, total: number) {
  let pos = index - active;
  const half = Math.floor(total / 2);
  if (pos > half) pos -= total;
  if (pos < -half) pos += total;
  return pos;
}

function headerClearancePx() {
  const root = getComputedStyle(document.documentElement);
  const offset = parseFloat(root.getPropertyValue("--header-offset")) || 72;
  const gap = parseFloat(root.getPropertyValue("--header-gap")) || 36;
  return offset + gap;
}

function cardSize() {
  const wide = window.matchMedia("(min-width: 640px)").matches;
  if (wide) {
    return { width: 360, height: 460 };
  }
  const width = Math.min(280, Math.max(232, window.innerWidth - 48));
  const height = Math.min(360, Math.round(width * 1.28));
  return { width, height };
}

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
  cardRef: (el: HTMLDivElement | null) => void;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial,
  cardRef,
}) => {
  return (
    <div
      ref={cardRef}
      className={cn("stagger-card", "stagger-card--side")}
      data-stagger-card
    >
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(",")[0]}
        className="stagger-card__avatar"
      />
      <h3 className="stagger-card__quote">"{testimonial.testimonial}"</h3>
      <p className="stagger-card__by">{testimonial.by}</p>
    </div>
  );
};

export const StaggerTestimonials: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardEls = useRef<(HTMLDivElement | null)[]>([]);
  const activeRef = useRef(0);
  const sizeRef = useRef(cardSize());

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    configureScrollTriggerForDevices();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const total = testimonials.length;
    let st: ScrollTrigger | undefined;
    let cancelled = false;

    const applySize = () => {
      sizeRef.current = cardSize();
      const { width, height } = sizeRef.current;
      cardEls.current.forEach((card) => {
        if (!card) return;
        card.style.width = `${width}px`;
        card.style.height = `${height}px`;
      });
    };

    const layoutCards = (activeIndex: number, immediate = false) => {
      const { width } = sizeRef.current;
      const narrow = window.matchMedia("(max-width: 640px)").matches;
      cardEls.current.forEach((card, index) => {
        if (!card) return;
        const pos = wrapPosition(index, activeIndex, total);
        const isCenter = pos === 0;
        const spread = narrow ? width * 0.38 : width / 1.45;
        const x = spread * pos;
        const y = isCenter
          ? narrow
            ? -8
            : -28
          : pos % 2
            ? narrow
              ? 8
              : 22
            : narrow
              ? -8
              : -22;
        const rot = isCenter ? 0 : pos % 2 ? (narrow ? 1.4 : 2.5) : narrow ? -1.4 : -2.5;

        card.classList.toggle("stagger-card--center", isCenter);
        card.classList.toggle("stagger-card--side", !isCenter);

        gsap.to(card, {
          xPercent: -50,
          yPercent: -50,
          x,
          y,
          rotation: rot,
          zIndex: isCenter ? 10 : Math.max(0, 5 - Math.abs(pos)),
          boxShadow: isCenter
            ? "0px 10px 0px 4px rgba(76, 22, 120, 0.18)"
            : "0px 0px 0px 0px transparent",
          duration: immediate || reduceMotion ? 0 : 0.34,
          ease: "power2.out",
          overwrite: "auto",
          force3D: true,
        });
      });
    };

    const createTrigger = () => {
      if (cancelled) return;
      ScrollTrigger.getById("partners-testimonials")?.kill();

      // Wait until card nodes exist
      if (cardEls.current.filter(Boolean).length < total) {
        window.requestAnimationFrame(createTrigger);
        return;
      }

      applySize();
      layoutCards(activeRef.current, true);

      if (reduceMotion) return;

      st = ScrollTrigger.create({
        id: "partners-testimonials",
        trigger: section,
        start: () => `top top+=${headerClearancePx()}`,
        end: () => {
          const perCard = window.matchMedia("(max-width: 640px)").matches
            ? 0.42
            : 0.7;
          return `+=${Math.max(total - 1, 1) * Math.round(window.innerHeight * perCard)}`;
        },
        pin: true,
        pinReparent: true,
        pinSpacing: true,
        scrub: 0.75,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 2,
        onRefresh: (self) => {
          applySize();
          const next = Math.round(self.progress * (total - 1));
          activeRef.current = next;
          layoutCards(next, true);
        },
        onUpdate: (self) => {
          const next = Math.round(self.progress * (total - 1));
          if (next === activeRef.current) return;
          activeRef.current = next;
          // DOM-only updates — no React setState during scrub (avoids ST breakage)
          layoutCards(next);
        },
      });

      ScrollTrigger.refresh();
    };

    // Defer until after paint so pin measures correctly with FAQ / sticky sections above
    const boot = window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(createTrigger);
      });
    }, 60);

    const onResize = () => {
      applySize();
      layoutCards(activeRef.current, true);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);
    const clearScheduled = scheduleScrollTriggerRefresh([200, 800, 1600]);
    const unbindRefresh = bindScrollTriggerRefreshListeners();

    return () => {
      cancelled = true;
      window.clearTimeout(boot);
      window.removeEventListener("resize", onResize);
      clearScheduled();
      unbindRefresh();
      st?.kill();
      ScrollTrigger.getById("partners-testimonials")?.kill();
      gsap.killTweensOf(cardEls.current.filter(Boolean));
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stagger-section"
      aria-label="Testimonials"
    >
      <div className="stagger-section__intro">
        <h2 className="section-title section-title--md">How call teams talk</h2>
        <p className="section-sub section-sub--sm">
          Scroll to browse · Composite notes from intake and media conversations
        </p>
      </div>
      <div className="stagger-testimonials">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            cardRef={(el) => {
              cardEls.current[index] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
};
