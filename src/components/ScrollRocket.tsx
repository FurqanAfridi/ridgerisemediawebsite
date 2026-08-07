import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "@/data/site";
import "./scroll-rocket.css";

gsap.registerPlugin(ScrollTrigger);

type Puff = {
  el: HTMLSpanElement;
  life: number;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Scroll-driven 3D rocket that flies through the page and leaves a cloud trail.
 * Home-page only — fixed layer, non-interactive.
 */
export function ScrollRocket() {
  const rootRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);
  const bobRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const ship = shipRef.current;
    const bob = bobRef.current;
    const trail = trailRef.current;
    if (!root || !ship || !bob || !trail) return;

    if (prefersReducedMotion()) {
      root.classList.add("scroll-rocket--static");
      return;
    }

    const puffs: Puff[] = [];
    const maxPuffs = 28;
    let lastSpawn = -1;
    let lastX = 0;
    let lastY = 0;

    const spawnPuff = (x: number, y: number, progress: number) => {
      let puff = puffs.find((p) => p.life <= 0);
      if (!puff) {
        if (puffs.length >= maxPuffs) return;
        const el = document.createElement("span");
        el.className = "scroll-rocket__puff";
        trail.appendChild(el);
        puff = { el, life: 0 };
        puffs.push(puff);
      }

      const size = 48 + Math.random() * 90;
      const driftX = (Math.random() - 0.5) * 40;
      const driftY = 20 + Math.random() * 50;
      puff.life = 1;
      gsap.killTweensOf(puff.el);
      gsap.set(puff.el, {
        x: x + driftX - size / 2,
        y: y + driftY - size / 2,
        width: size,
        height: size * 0.62,
        opacity: 0.55 + Math.random() * 0.25,
        scale: 0.35 + progress * 0.15,
        rotate: (Math.random() - 0.5) * 30,
      });
      gsap.to(puff.el, {
        opacity: 0,
        scale: 1.35 + Math.random() * 0.4,
        y: `+=${60 + Math.random() * 80}`,
        x: `+=${(Math.random() - 0.5) * 50}`,
        duration: 1.6 + Math.random() * 0.9,
        ease: "power1.out",
        onComplete: () => {
          puff!.life = 0;
        },
      });
    };

    // Flight path: launch from bottom-left, climb, then soar across
    const pathX = gsap.utils.interpolate([10, 18, 36, 62, 86]);
    const pathY = gsap.utils.interpolate([86, 68, 48, 30, 10]);

    const ctx = gsap.context(() => {
      gsap.set(ship, {
        xPercent: -50,
        yPercent: -50,
        left: "10%",
        top: "86%",
        transformOrigin: "50% 60%",
      });

      gsap.set(bob, {
        rotateX: 16,
        rotateY: -20,
        rotateZ: -28,
        scale: 0.72,
        transformOrigin: "50% 60%",
      });

      const flame = bob.querySelector(".scroll-rocket__flame");
      if (flame) {
        gsap.to(flame, {
          scaleY: 1.28,
          opacity: 0.9,
          duration: 0.32,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }

      gsap.to(bob, {
        y: -8,
        duration: 1.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.15,
        onUpdate: (self) => {
          const p = self.progress;
          const xPct = pathX(p);
          const yPct = pathY(p);

          const prev = Math.max(0, p - 0.025);
          const dx = xPct - pathX(prev);
          const dy = yPct - pathY(prev);
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

          gsap.set(ship, {
            left: `${xPct}%`,
            top: `${yPct}%`,
            opacity: p < 0.015 ? p / 0.015 : p > 0.97 ? (1 - p) / 0.03 : 1,
          });

          gsap.set(bob, {
            rotateZ: angle + 90,
            rotateY: -20 + dx * 5,
            rotateX: 16 - dy * 2.5,
            scale: 0.7 + p * 0.28,
          });

          const rect = ship.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height * 0.78;

          const moved = Math.hypot(cx - lastX, cy - lastY);
          const step = Math.floor(p * 48);
          if ((step !== lastSpawn && moved > 14) || moved > 42) {
            spawnPuff(cx, cy, p);
            if (moved > 30) spawnPuff(cx - 12, cy + 18, p);
            lastSpawn = step;
            lastX = cx;
            lastY = cy;
          }
        },
      });
    }, root);

    return () => {
      ctx.revert();
      puffs.forEach((p) => p.el.remove());
    };
  }, []);

  return (
    <div className="scroll-rocket" ref={rootRef} aria-hidden="true">
      <div className="scroll-rocket__trail" ref={trailRef} />
      <div className="scroll-rocket__perspective">
        <div className="scroll-rocket__ship" ref={shipRef}>
          <div className="scroll-rocket__bob" ref={bobRef}>
            <img
              className="scroll-rocket__img"
              src={assets.rocket}
              alt=""
              draggable={false}
            />
            <span className="scroll-rocket__flame" />
            <span className="scroll-rocket__glow" />
          </div>
        </div>
      </div>
    </div>
  );
}
