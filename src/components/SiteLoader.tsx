import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { assets } from "@/data/site";
import "./site-loader.css";

gsap.registerPlugin(useGSAP);

const SESSION_KEY = "rr-loader-v2";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type SiteLoaderProps = {
  onDone?: () => void;
};

/** Homepage intro — logo and wordmark, no boxed mark. */
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

  useGSAP(
    () => {
      if (!active) {
        onDone?.();
        return;
      }

      const root = rootRef.current;
      if (!root) return;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

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

      const brand = root.querySelector(".site-loader__brand");
      const fill = root.querySelector(".site-loader__fill");
      const orbs = root.querySelectorAll(".site-loader__orb");
      const line = root.querySelector(".site-loader__line");

      gsap.set(root, { opacity: 1 });
      gsap.set(orbs, { scale: 0.7, opacity: 0 });
      gsap.set(brand, { opacity: 0, y: 22, scale: 0.92 });
      gsap.set(fill, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(line, { opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: finish,
      });

      tl.to(orbs, { scale: 1, opacity: 1, duration: 0.9, stagger: 0.08 }, 0);
      tl.to(
        brand,
        { opacity: 1, y: 0, scale: 1, duration: 0.85 },
        0.12,
      );
      tl.to(line, { opacity: 1, duration: 0.3 }, 0.45);
      tl.to(fill, { scaleX: 1, duration: 1.05, ease: "power2.inOut" }, 0.5);
      tl.to({}, { duration: 0.28 });
      tl.to(
        root,
        { opacity: 0, scale: 1.04, duration: 0.55, ease: "power2.inOut" },
        "exit",
      );
      tl.set(root, { pointerEvents: "none" }, "exit");

      return () => {
        document.documentElement.style.removeProperty("overflow");
        document.body.style.removeProperty("overflow");
      };
    },
    { scope: rootRef, dependencies: [active, onDone] },
  );

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
      <span className="site-loader__orb site-loader__orb--a" aria-hidden="true" />
      <span className="site-loader__orb site-loader__orb--b" aria-hidden="true" />
      <div className="site-loader__stage">
        <div className="site-loader__brand">
          <img
            className="site-loader__icon"
            src={assets.logoIcon}
            alt=""
            width={72}
            height={58}
          />
          <span className="site-loader__wordmark" aria-hidden="true">
            <img src={assets.logoTextTop} alt="" width={118} height={25} />
            <img src={assets.logoTextBottom} alt="" width={118} height={13} />
          </span>
        </div>
        <div className="site-loader__line" aria-hidden="true">
          <span className="site-loader__fill" />
        </div>
      </div>
    </div>
  );
}
