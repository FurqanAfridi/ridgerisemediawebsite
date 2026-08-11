import { useEffect, useRef, useState, type FC } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
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
      "Hybrid supply helped when our in-house hours filled up — same filters, more concurrency without opening a free-for-all.",
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
      "One network for Insurance and Home Services beats juggling five vendors with five definitions of 'qualified.'",
    by: "Growth Director, Multi-Vertical Buyer",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=DavidRodriguez&backgroundColor=4c1678&textColor=ffffff",
  },
  {
    id: 4,
    testimonial:
      "As a publisher, payouts and dispositions are visible. No mystery holds — just the quality rules we already agreed to.",
    by: "Publisher Partner",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=EmmaThompson&backgroundColor=2ae2a8&textColor=000000",
  },
  {
    id: 5,
    testimonial:
      "CPL for web leads, cost per call for phone. Same team, same vertical map — that cut the back-and-forth.",
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
      "Not flashy. Just inbound calls that match the hours and states we can actually staff.",
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

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
  isCenter: boolean;
  cardWidth: number;
  cardHeight: number;
  cardRef: (el: HTMLDivElement | null) => void;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial,
  isCenter,
  cardWidth,
  cardHeight,
  cardRef,
}) => {
  return (
    <div
      ref={cardRef}
      className={cn(
        "stagger-card",
        isCenter ? "stagger-card--center" : "stagger-card--side",
      )}
      style={{
        width: cardWidth,
        height: cardHeight,
      }}
    >
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(",")[0]}
        className="stagger-card__avatar"
      />
      <h3 className="stagger-card__quote">"{testimonial.testimonial}"</h3>
      <p className="stagger-card__by">- {testimonial.by}</p>
    </div>
  );
};

export const StaggerTestimonials: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardEls = useRef<(HTMLDivElement | null)[]>([]);
  const activeRef = useRef(0);
  const [cardWidth, setCardWidth] = useState(360);
  const [cardHeight, setCardHeight] = useState(460);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const wide = window.matchMedia("(min-width: 640px)").matches;
      setCardWidth(wide ? 360 : 300);
      setCardHeight(wide ? 460 : 400);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const total = testimonials.length;

    const layoutCards = (activeIndex: number, immediate = false) => {
      cardEls.current.forEach((card, index) => {
        if (!card) return;
        const pos = wrapPosition(index, activeIndex, total);
        const isCenter = pos === 0;
        const x = (cardWidth / 1.45) * pos;
        const y = isCenter ? -28 : pos % 2 ? 22 : -22;
        const rot = isCenter ? 0 : pos % 2 ? 2.5 : -2.5;

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
          duration: immediate || reduceMotion ? 0 : 0.38,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    // Initial placement before ScrollTrigger measures
    layoutCards(0, true);

    if (reduceMotion) {
      return () => {
        gsap.killTweensOf(cardEls.current.filter(Boolean));
      };
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: "partners-testimonials",
        trigger: section,
        start: () => `top top+=${headerClearancePx()}`,
        end: () =>
          `+=${Math.max(total - 1, 1) * Math.round(window.innerHeight * 0.72)}`,
        pin: true,
        // Escape overflow-x:clip on .page so pin spacing / sticky work
        pinReparent: true,
        pinSpacing: true,
        scrub: 0.55,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
        snap: {
          snapTo: 1 / Math.max(total - 1, 1),
          duration: { min: 0.12, max: 0.28 },
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          const next = Math.round(self.progress * (total - 1));
          if (next === activeRef.current) return;
          activeRef.current = next;
          setActive(next);
          layoutCards(next);
        },
      });
    }, section);

    // Sticky vertical stack / rocket path can shift layout after mount
    const refreshTimers = [120, 700, 1500].map((ms) =>
      window.setTimeout(() => ScrollTrigger.refresh(), ms),
    );

    return () => {
      refreshTimers.forEach((id) => window.clearTimeout(id));
      ctx.revert();
      ScrollTrigger.getById("partners-testimonials")?.kill();
      ScrollTrigger.refresh();
    };
  }, [cardWidth, cardHeight]);

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
            isCenter={wrapPosition(index, active, testimonials.length) === 0}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            cardRef={(el) => {
              cardEls.current[index] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
};
