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

/** Simple homepage loader — progress bar with favicon. */
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

  useEffect(() => {
    if (!active) {
      onDone?.();
      return;
    }

    const root = rootRef.current;
    const fill = fillRef.current;
    const mark = markRef.current;
    if (!root || !fill || !mark) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const progress = { value: 0 };

    const finish = () => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      document.documentElement.style.removeProperty("overflow");
      document.body.style.removeProperty("overflow");
      setActive(false);
      onDone?.();
    };

    const ctx = gsap.context(() => {
      gsap.set(fill, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(mark, { left: "0%" });
      gsap.set(root, { opacity: 1 });

      const tl = gsap.timeline({ onComplete: finish });

      tl.from(root, { opacity: 0, duration: 0.25, ease: "power2.out" }, 0);

      tl.to(
        progress,
        {
          value: 100,
          duration: 1.35,
          ease: "power1.inOut",
          onUpdate: () => {
            const v = progress.value;
            fill.style.transform = `scaleX(${v / 100})`;
            mark.style.left = `${v}%`;
          },
        },
        0.1,
      );

      tl.to({}, { duration: 0.18 });
      tl.to(root, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, "exit");
      tl.set(root, { pointerEvents: "none" }, "exit");
    }, root);

    return () => {
      ctx.revert();
      document.documentElement.style.removeProperty("overflow");
      document.body.style.removeProperty("overflow");
    };
  }, [active, onDone]);

  if (!active) return null;

  return (
    <div
      className="site-loader"
      ref={rootRef}
      role="progressbar"
      aria-busy="true"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading"
    >
      <div className="site-loader__backdrop" />
      <div className="site-loader__bar">
        <div className="site-loader__track">
          <div className="site-loader__fill" ref={fillRef} />
          <div className="site-loader__mark" ref={markRef}>
            <img
              className="site-loader__icon"
              src={assets.logoIcon}
              alt=""
              width={28}
              height={22}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
