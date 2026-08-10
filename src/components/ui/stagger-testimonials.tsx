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
      "RidgeRise matched us with high-intent Insurance traffic in days. Payouts hit on schedule — no chasing invoices.",
    by: "Sarah Chen, Publisher Partner",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=SarahChen&backgroundColor=5d62dd&textColor=ffffff",
  },
  {
    id: 1,
    testimonial:
      "Real-time call tracking that actually matches the buyer side. Transparency changed everything.",
    by: "Marcus Johnson, Media Buyer",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=MarcusJohnson&backgroundColor=45e9b5&textColor=000000",
  },
  {
    id: 2,
    testimonial:
      "Compliance-first routing gave our Legal campaigns peace of mind. Quality match rate stayed above 95%.",
    by: "Priya Patel, Compliance Lead",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=PriyaPatel&backgroundColor=8b68e5&textColor=ffffff",
  },
  {
    id: 3,
    testimonial:
      "From Home Services to Insurance, RidgeRise's vertical depth meant we never had to juggle five networks.",
    by: "David Rodriguez, Growth Director",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=DavidRodriguez&backgroundColor=4c1678&textColor=ffffff",
  },
  {
    id: 4,
    testimonial:
      "Fast matching and weekly payouts let us scale publisher inventory without cash-flow stress.",
    by: "Emma Thompson, Affiliate Owner",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=EmmaThompson&backgroundColor=2ae2a8&textColor=000000",
  },
  {
    id: 5,
    testimonial:
      "I've been searching for a pay-per-call partner like RidgeRise for years. Glad we finally found one.",
    by: "Pete Alvarez, Sales Director",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=PeteAlvarez&backgroundColor=5d62dd&textColor=ffffff",
  },
  {
    id: 6,
    testimonial:
      "Call quality is consistent and the dashboard is clear. No black-box deductions.",
    by: "Aisha Mohammed, Campaign Manager",
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=AishaMohammed&backgroundColor=8b68e5&textColor=ffffff",
  },
  {
    id: 7,
    testimonial:
      "We switched years of volume over and never looked back. RidgeRise just works.",
    by: "Alex Kim, Ops Lead",
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
        <h2 className="section-title section-title--md">What Partners Say</h2>
        <p className="section-sub section-sub--sm">
          Scroll to browse · Publishers &amp; Buyers on RidgeRise Media
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
