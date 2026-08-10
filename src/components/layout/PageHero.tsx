import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Magnetic } from "@/components/ui/magnetic";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__desc">{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="page-hero__ctas">
            {primaryCta ? (
              <Magnetic strength={0.35}>
                <Link to={primaryCta.to} className="btn btn--purple">
                  {primaryCta.label}
                </Link>
              </Magnetic>
            ) : null}
            {secondaryCta ? (
              <Magnetic strength={0.35}>
                <Link to={secondaryCta.to} className="btn btn--mint">
                  {secondaryCta.label}
                </Link>
              </Magnetic>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
