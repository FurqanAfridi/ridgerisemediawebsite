import { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  type MotionValue,
} from "motion/react";
import "./horizontal-testimonials.css";

const GAP = 48;

const items = [
  {
    id: 1,
    quote:
      "RidgeRise matched us with high-intent Insurance traffic in days. Payouts hit on schedule — no chasing invoices.",
    by: "Sarah Chen",
    role: "Publisher Partner",
    theme: "purple" as const,
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=SarahChen&backgroundColor=5d62dd&textColor=ffffff",
  },
  {
    id: 2,
    quote:
      "Real-time call tracking that actually matches the buyer side. Transparency changed everything for our team.",
    by: "Marcus Johnson",
    role: "Media Buyer",
    theme: "mint" as const,
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=MarcusJohnson&backgroundColor=45e9b5&textColor=000000",
  },
  {
    id: 3,
    quote:
      "Compliance-first routing gave our Legal campaigns peace of mind. Quality match rate stayed above 95%.",
    by: "Priya Patel",
    role: "Compliance Lead",
    theme: "accent" as const,
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=PriyaPatel&backgroundColor=8b68e5&textColor=ffffff",
  },
  {
    id: 4,
    quote:
      "From Home Services to Insurance, RidgeRise's vertical depth meant we never had to juggle five networks.",
    by: "David Rodriguez",
    role: "Growth Director",
    theme: "deep" as const,
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=DavidRodriguez&backgroundColor=4c1678&textColor=ffffff",
  },
  {
    id: 5,
    quote:
      "Fast matching and weekly payouts let us scale publisher inventory without cash-flow stress.",
    by: "Emma Thompson",
    role: "Affiliate Owner",
    theme: "mint" as const,
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=EmmaThompson&backgroundColor=2ae2a8&textColor=000000",
  },
  {
    id: 6,
    quote:
      "I've been searching for a pay-per-call partner like RidgeRise for years. Glad we finally found one.",
    by: "Pete Alvarez",
    role: "Sales Director",
    theme: "purple" as const,
    imgSrc:
      "https://api.dicebear.com/7.x/initials/svg?seed=PeteAlvarez&backgroundColor=5d62dd&textColor=ffffff",
  },
];

const STEP = 1 / (items.length - 1);

function useCardWidth() {
  const [width, setWidth] = useState(() =>
    typeof window === "undefined"
      ? 920
      : Math.min(920, window.innerWidth * 0.88),
  );

  useEffect(() => {
    const update = () => setWidth(Math.min(920, window.innerWidth * 0.88));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}

function TestimonialCard({
  item,
  index,
  progress,
  width,
}: {
  item: (typeof items)[number];
  index: number;
  progress: MotionValue<number>;
  width: number;
}) {
  const center = index * STEP;
  const prev = Math.max(0, center - STEP);
  const next = Math.min(1, center + STEP);

  const scale = useTransform(progress, [prev, center, next], [0.78, 1, 0.78]);
  const opacity = useTransform(
    progress,
    [prev, center, next],
    [0.4, 1, 0.4],
  );
  const blur = useTransform(progress, [prev, center, next], [16, 0, 16]);
  const filter = useMotionTemplate`blur(${blur}px)`;
  const zIndex = useTransform(progress, (p) => {
    const dist = Math.abs(p - center);
    return Math.round((1 - dist) * 20);
  });

  return (
    <motion.article
      className={`ht-card ht-card--${item.theme}`}
      style={{
        width,
        scale,
        opacity,
        filter,
        zIndex,
      }}
    >
      <div className="ht-card__inner">
        <img
          className="ht-card__avatar"
          src={item.imgSrc}
          alt=""
          width={64}
          height={72}
        />
        <p className="ht-card__quote">"{item.quote}"</p>
        <div className="ht-card__meta">
          <span className="ht-card__num">0{item.id}</span>
          <p className="ht-card__by">
            {item.by}
            <span>{item.role}</span>
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function HorizontalTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = useCardWidth();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalDistance = (items.length - 1) * (cardWidth + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);
  const sidePad = `max(16px, calc((100vw - ${cardWidth}px) / 2))`;

  return (
    <div
      ref={containerRef}
      className="ht-scroll"
      style={{ height: `${Math.max(items.length, 3) * 100}vh` }}
    >
      <div className="ht-sticky">
        <div className="ht-track" style={{ paddingInline: sidePad }}>
          <motion.div className="ht-gallery" style={{ x, gap: GAP }}>
            {items.map((item, index) => (
              <TestimonialCard
                key={item.id}
                item={item}
                index={index}
                progress={scrollYProgress}
                width={cardWidth}
              />
            ))}
          </motion.div>
        </div>
        <p className="ht-hint" aria-hidden="true">
          Scroll to browse
        </p>
      </div>
    </div>
  );
}
