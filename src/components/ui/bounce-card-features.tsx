import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import "./bounce-card-features.css";

const features = [
  {
    title: "Compliance-conscious setup",
    body: "Campaign-specific consent and quality rules, TCPA-aware processes, and source checks before volume goes live.",
    art: "/assets/vertical-1.png",
    artAlt: "Compliance-ready verticals",
    tone: "violet",
  },
  {
    title: "Call-level transparency",
    body: "See calls, sources, and dispositions as they land — so your intake team knows what you're paying for.",
    art: "/assets/card-calls.png",
    artAlt: "Live calls tracking",
    tone: "amber",
  },
  {
    title: "Hybrid supply, clear filters",
    body: "In-house media buying plus vetted partners. You set geo, hours, exclusivity, and what counts as qualified.",
    art: "/assets/card-payout.png",
    artAlt: "Campaign filters and routing",
    tone: "mint",
  },
  {
    title: "High-intent verticals",
    body: "Insurance depth first, with Legal, Home Services, and Finance where a live call still moves acquisition.",
    art: "/assets/vertical-2.png",
    artAlt: "Growth across verticals",
    tone: "rose",
  },
] as const;

function BounceCard({
  className,
  children,
  index,
}: {
  className?: string;
  children: ReactNode;
  index: number;
}) {
  return (
    <motion.article
      className={cn("bounce-card", className)}
      initial={{ opacity: 0, y: 56, rotate: index % 2 === 0 ? -3 : 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 16,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 360, damping: 20 },
      }}
    >
      {children}
    </motion.article>
  );
}

export function BouncyCardsFeatures() {
  return (
    <section className="bouncy-features" id="why" aria-labelledby="why-heading">
      <div className="bouncy-features__header">
        <motion.div
          className="bouncy-features__intro"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 110, damping: 18 }}
        >
          <p className="bouncy-features__eyebrow">Why work with us</p>
          <h2 id="why-heading" className="bouncy-features__title">
            Built for buyers who need{" "}
            <span className="bouncy-features__title-muted">the call to count</span>
          </h2>
          <p className="bouncy-features__sub">
            Quality monitoring, tracking, filter control, and vertical depth —
            the four things that decide whether pay-per-call and CPL scale or stall.
          </p>
        </motion.div>
        <Magnetic strength={0.35}>
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.2 }}
          >
            <Link to="/contact" className="bouncy-features__cta">
              Discuss a campaign
            </Link>
          </motion.div>
        </Magnetic>
      </div>

      <div className="bouncy-features__grid">
        {features.map((feature, index) => (
          <BounceCard
            key={feature.title}
            index={index}
            className={`bounce-card--${feature.tone}`}
          >
            <div className="bounce-card__copy">
              <h3 className="bounce-card__title">{feature.title}</h3>
              <p className="bounce-card__body">{feature.body}</p>
            </div>
            <motion.div
              className={cn(
                "bounce-card__demo",
                `bounce-card__demo--${feature.tone}`,
              )}
              whileHover={{ y: -14, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
            >
              <img src={feature.art} alt={feature.artAlt} />
            </motion.div>
          </BounceCard>
        ))}
      </div>
    </section>
  );
}
