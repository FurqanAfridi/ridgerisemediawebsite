import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import "./cta-with-text-marquee.css";

/** Common pay-per-call / performance marketing verticals */
const marqueeItems = [
  "Auto Insurance",
  "Health Insurance",
  "Life Insurance",
  "Home Insurance",
  "Medicare Advantage",
  "Final Expense",
  "Dental Insurance",
  "Disability Insurance",
  "Workers Comp",
  "Legal / Personal Injury",
  "Workers' Compensation",
  "Criminal Defense",
  "Bankruptcy",
  "Divorce",
  "Immigration Law",
  "SSDI",
  "Debt Settlement",
  "Credit Repair",
  "Tax Relief",
  "Mortgage / Home Loans",
  "Business Loans / MCA",
  "Solar",
  "Home Services",
  "HVAC",
  "Roofing",
  "Plumbing",
  "Windows & Remodeling",
  "Pest Control",
  "Home Security",
  "Education / Colleges",
  "Addiction Treatment",
  "Senior Care",
  "Auto Warranty",
  "Timeshare Exit",
  "Broadband / Internet",
  "Moving / Relocation",
  "Annuities",
  "Pet Insurance",
];

interface VerticalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
}: VerticalMarqueeProps) {
  return (
    <div
      className={cn("cta-marquee", className)}
      style={{ "--duration": `${speed}s` } as CSSProperties}
    >
      <div
        className={cn(
          "cta-marquee__track",
          reverse && "cta-marquee__track--reverse",
          pauseOnHover && "cta-marquee__track--pause",
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "cta-marquee__track",
          reverse && "cta-marquee__track--reverse",
          pauseOnHover && "cta-marquee__track--pause",
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

export default function CTAWithVerticalMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    let frame = 0;
    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll(".marquee-item");
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2 || 1;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        (item as HTMLElement).style.opacity = String(opacity);
      });

      frame = requestAnimationFrame(updateOpacity);
    };

    frame = requestAnimationFrame(updateOpacity);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      className="cta-vertical"
      id="contact"
      aria-labelledby="cta-vertical-heading"
    >
      <div className="cta-vertical__inner">
        <div className="cta-vertical__grid">
          <motion.div
            className="cta-vertical__copy"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -6% 0px" }}
            transition={{ type: "spring", stiffness: 110, damping: 18 }}
          >
            <h2 id="cta-vertical-heading" className="cta-vertical__title">
              Which Verticals Are You Interested to{" "}
              <span className="cta-vertical__title-accent">Buy/Sell</span>{" "}
              Calls?
            </h2>
            <p className="cta-vertical__sub">
              RidgeRise Media runs high-intent pay-per-call inventory across
              Insurance, Legal, Home Services, Finance, and 30+ performance
              verticals. Tell us where you buy or sell — we&apos;ll match you
              fast.
            </p>
            <div className="cta-vertical__actions">
              <Magnetic strength={0.35}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Link to="/publishers" className="cta-vertical__btn cta-vertical__btn--primary">
                    <span>Apply as Publisher</span>
                  </Link>
                </motion.div>
              </Magnetic>
              <Magnetic strength={0.35}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Link to="/buyers" className="cta-vertical__btn cta-vertical__btn--secondary">
                    <span>Get Started as Buyer</span>
                  </Link>
                </motion.div>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            ref={marqueeRef}
            className="cta-vertical__marquee-wrap"
            initial={{ opacity: 0, x: 64, rotate: 3, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -6% 0px" }}
            transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.12 }}
          >
            <div className="cta-vertical__marquee-inner">
              <VerticalMarquee speed={48} pauseOnHover className="cta-vertical__marquee">
                {marqueeItems.map((item) => (
                  <div key={item} className="marquee-item">
                    {item}
                  </div>
                ))}
              </VerticalMarquee>
              <div className="cta-vertical__vignette cta-vertical__vignette--top" />
              <div className="cta-vertical__vignette cta-vertical__vignette--bottom" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
