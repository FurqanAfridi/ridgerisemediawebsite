import { useEffect, useRef, useState, type FC } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import "./stagger-testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const SQRT_5000 = Math.sqrt(5000);

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

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  cardSize: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  position,
  testimonial,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      className={cn(
        "stagger-card",
        isCenter ? "stagger-card--center" : "stagger-card--side",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -40 : position % 2 ? 18 : -18}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px rgba(76, 22, 120, 0.18)"
          : "0px 0px 0px 0px transparent",
        zIndex: isCenter ? 10 : Math.max(0, 5 - Math.abs(position)),
        pointerEvents: "none",
      }}
    >
      <span
        className="stagger-card__corner"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardSize, setCardSize] = useState(340);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 340 : 280);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const total = testimonials.length;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${Math.max(total - 1, 1) * window.innerHeight * 0.55}`,
        pin: true,
        scrub: 0.65,
        anticipatePin: 1,
        onUpdate: (self) => {
          const next = Math.round(self.progress * (total - 1));
          setActive((prev) => (prev === next ? prev : next));
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

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
            position={wrapPosition(index, active, testimonials.length)}
            cardSize={cardSize}
          />
        ))}
      </div>
    </section>
  );
};
