import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import "./motion-footer.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
    to?: string;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement | null) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current =
            node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef)
            (forwardedRef as React.MutableRefObject<HTMLElement | null>).current =
              node;
        }}
        className={cn("mf-magnetic", className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
  <div className="mf-marquee__item">
    <span>Pay Per Call</span>
    <span className="mf-marquee__dot mf-marquee__dot--mint">✦</span>
    <span>Real-Time Tracking</span>
    <span className="mf-marquee__dot mf-marquee__dot--purple">✦</span>
    <span>Fast Payouts</span>
    <span className="mf-marquee__dot mf-marquee__dot--mint">✦</span>
    <span>Compliance-First</span>
    <span className="mf-marquee__dot mf-marquee__dot--purple">✦</span>
    <span>High-Intent Verticals</span>
    <span className="mf-marquee__dot mf-marquee__dot--mint">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={wrapperRef}
      className="mf-curtain"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <footer className="mf" id="footer">
        <div className="mf-aurora" aria-hidden="true" />
        <div className="mf-grid" aria-hidden="true" />

        <div ref={giantTextRef} className="mf-giant" aria-hidden="true">
          RIDGERISE
        </div>

        <div className="mf-marquee">
          <div className="mf-marquee__track">
            <MarqueeItem />
            <MarqueeItem />
          </div>
        </div>

        <div className="mf-center">
          <p className="mf-eyebrow">Next step</p>
          <h2 ref={headingRef} className="mf-heading">
            Ready to grow?
          </h2>
          <p className="mf-sub">
            Join publishers and buyers scaling pay-per-call with RidgeRise Media.
          </p>

          <div ref={linksRef} className="mf-actions">
            <div className="mf-actions__primary">
              <MagneticButton
                as={Link}
                to="/publishers"
                className="mf-pill mf-pill--primary"
              >
                Signup as Publisher
              </MagneticButton>
              <MagneticButton
                as={Link}
                to="/buyers"
                className="mf-pill mf-pill--mint"
              >
                Signup as Buyer
              </MagneticButton>
            </div>

            <div className="mf-actions__secondary">
              <MagneticButton as={Link} to="/about" className="mf-pill mf-pill--ghost">
                About us
              </MagneticButton>
              <MagneticButton
                as={Link}
                to="/verticals"
                className="mf-pill mf-pill--ghost"
              >
                Verticals
              </MagneticButton>
              <MagneticButton
                as={Link}
                to="/blog"
                className="mf-pill mf-pill--ghost"
              >
                Blog
              </MagneticButton>
              <MagneticButton
                as={Link}
                to="/contact"
                className="mf-pill mf-pill--ghost"
              >
                Contact
              </MagneticButton>
            </div>
          </div>

          <div className="mf-contact-row">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span aria-hidden="true">·</span>
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
        </div>

        <div className="mf-bottom">
          <p className="mf-copy">
            © {new Date().getFullYear()} RidgeRise Media. All rights reserved.
          </p>

          <div className="mf-badge">
            <span>Crafted for</span>
            <span className="mf-badge__heart" aria-hidden="true">
              ❤
            </span>
            <span className="mf-badge__brand">Publishers &amp; Buyers</span>
          </div>

          <MagneticButton
            as="button"
            type="button"
            onClick={scrollToTop}
            className="mf-top"
            aria-label="Back to top"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </MagneticButton>
        </div>
      </footer>
    </div>
  );
}
