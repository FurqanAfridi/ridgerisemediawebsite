import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { assets } from "@/data/site";
import "./site-loader.css";

const SESSION_KEY = "rr-loader-done";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type SiteLoaderProps = {
  onDone?: () => void;
};

/**
 * Sophisticated homepage opening loader — progress bar with logo mark.
 */
export function SiteLoader({ onDone }: SiteLoaderProps) {
  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return false;
    if (prefersReducedMotion()) return false;
    try {
      return sessionStorage.getItem(SESSION_KEY) !== "1";
    } catch {
      return true;
    }
  });

  const rootRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) {
      onDone?.();
      return;
    }

    const root = rootRef.current;
    const fill = fillRef.current;
    const mark = markRef.current;
    const pct = pctRef.current;
    const panel = panelRef.current;
    if (!root || !fill || !mark || !pct || !panel) return;

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const progress = { value: 0 };

    const finish = () => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      document.documentElement.style.overflow = prevOverflow;
      document.body.style.overflow = "";
      setActive(false);
      onDone?.();
    };

    const ctx = gsap.context(() => {
      gsap.set(fill, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(mark, { left: "0%" });
      gsap.set(panel, { opacity: 1, y: 0 });
      gsap.set(root, { opacity: 1 });

      const tl = gsap.timeline({
        onComplete: finish,
      });

      tl.from(
        panel,
        { opacity: 0, y: 12, duration: 0.45, ease: "power2.out" },
        0,
      );

      tl.to(
        progress,
        {
          value: 100,
          duration: 1.65,
          ease: "power1.inOut",
          onUpdate: () => {
            const v = progress.value;
            const pctVal = Math.round(v);
            fill.style.transform = `scaleX(${v / 100})`;
            mark.style.left = `${v}%`;
            pct.textContent = `${pctVal}`;
          },
        },
        0.2,
      );

      // Soft hold at complete, then exit
      tl.to({}, { duration: 0.28 });
      tl.to(
        root,
        { opacity: 0, duration: 0.55, ease: "power2.inOut" },
        "exit",
      );
      tl.to(
        panel,
        { y: -10, duration: 0.55, ease: "power2.inOut" },
        "exit",
      );
      tl.set(root, { pointerEvents: "none" }, "exit");
    }, root);

    return () => {
      ctx.revert();
      document.documentElement.style.overflow = prevOverflow;
      document.body.style.overflow = "";
    };
  }, [active, onDone]);

  if (!active) return null;

  return (
    <div className="site-loader" ref={rootRef} role="progressbar" aria-busy="true" aria-valuemin={0} aria-valuemax={100}>
      <div className="site-loader__backdrop" />
      <div className="site-loader__panel" ref={panelRef}>
        <p className="site-loader__label">RidgeRise Media</p>

        <div className="site-loader__track">
          <div className="site-loader__fill" ref={fillRef} />
          <div className="site-loader__mark" ref={markRef}>
            <span className="site-loader__mark-glow" />
            <img
              className="site-loader__icon"
              src={assets.logoIcon}
              alt=""
              width={36}
              height={29}
            />
          </div>
        </div>

        <div className="site-loader__meta">
          <span className="site-loader__status">Loading</span>
          <span className="site-loader__pct">
            <span ref={pctRef}>0</span>%
          </span>
        </div>
      </div>
    </div>
  );
}
