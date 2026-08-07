import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import "./bounce-card-features.css";

const features = [
  {
    title: "Compliance-First",
    body: "TCPA, DNC & vertical checks before every campaign goes live — so every transfer is clean.",
    art: "/assets/vertical-1.png",
    artAlt: "Compliance-ready verticals",
    tone: "violet",
  },
  {
    title: "Live Call Transparency",
    body: "Real-time dashboards with every call, conversion, and payout visible the moment it happens.",
    art: "/assets/card-calls.png",
    artAlt: "Live calls tracking",
    tone: "amber",
  },
  {
    title: "Fast Match & Payouts",
    body: "Buyers matched in days. Publishers paid weekly — no chasing invoices or surprise holds.",
    art: "/assets/card-payout.png",
    artAlt: "Publisher payouts",
    tone: "mint",
  },
  {
    title: "High-Intent Verticals",
    body: "Insurance specialty plus Legal, Home Services, and performance PPC depth that converts.",
    art: "/assets/rocket.png",
    artAlt: "Growth across verticals",
    tone: "rose",
  },
] as const;

function BounceCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={cn("bounce-card", className)}
    >
      {children}
    </motion.article>
  );
}

export function BouncyCardsFeatures() {
  return (
    <section className="bouncy-features" id="why" aria-labelledby="why-heading">
      <div className="bouncy-features__header">
        <div className="bouncy-features__intro">
          <p className="bouncy-features__eyebrow">Why work with us</p>
          <h2 id="why-heading" className="bouncy-features__title">
            Built for publishers and buyers who{" "}
            <span className="bouncy-features__title-muted">want the call to count</span>
          </h2>
          <p className="bouncy-features__sub">
            Compliance, tracking, payouts, and vertical depth — the four things that
            decide whether pay-per-call scales or stalls.
          </p>
        </div>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Link to="/contact" className="bouncy-features__cta">
            Get Started
          </Link>
        </motion.div>
      </div>

      <div className="bouncy-features__grid">
        {features.map((feature) => (
          <BounceCard
            key={feature.title}
            className={`bounce-card--${feature.tone}`}
          >
            <div className="bounce-card__copy">
              <h3 className="bounce-card__title">{feature.title}</h3>
              <p className="bounce-card__body">{feature.body}</p>
            </div>
            <div
              className={cn(
                "bounce-card__demo",
                `bounce-card__demo--${feature.tone}`,
              )}
            >
              <img src={feature.art} alt={feature.artAlt} />
            </div>
          </BounceCard>
        ))}
      </div>
    </section>
  );
}
