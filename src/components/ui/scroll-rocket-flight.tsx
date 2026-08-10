import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "@/data/site";
import "./scroll-rocket-flight.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Smooth cubic blend between waypoints (Catmull-Rom). */
function sampleSmooth(values: number[], progress: number) {
  const max = values.length - 1;
  if (max <= 0) return values[0] ?? 0;
  const f = gsap.utils.clamp(0, max, progress * max);
  const i = Math.min(Math.floor(f), max - 1);
  const t = f - i;
  const p0 = values[Math.max(0, i - 1)];
  const p1 = values[i];
  const p2 = values[i + 1];
  const p3 = values[Math.min(max, i + 2)];
  const v0 = (p2 - p0) * 0.5;
  const v1 = (p3 - p1) * 0.5;
  const t2 = t * t;
  const t3 = t2 * t;
  return (
    (2 * p1 - 2 * p2 + v0 + v1) * t3 +
    (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 +
    v0 * t +
    p1
  );
}

/**
 * Fixed rocket: sits at the top on load, settles into viewport middle on scroll,
 * then keeps flying horizontally through the middle while the page scrolls.
 */
export default function ScrollRocketFlight() {
  const rootRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const ship = shipRef.current;
      const inner = innerRef.current;
      const trail = trailRef.current;
      if (!root || !ship || !inner || !trail) return;

      if (prefersReducedMotion()) {
        gsap.set(ship, { autoAlpha: 0 });
        return;
      }

      let flightCtx: gsap.Context | undefined;
      let resizeTimer = 0;
      let rebuildTimer = 0;
      let lastCloud = 0;
      let building = false;

      const createFlight = () => {
        if (building) return;
        const markers = gsap.utils.toArray<HTMLElement>(
          document.querySelectorAll("[data-rocket-marker]"),
        );
        if (markers.length < 2) return;

        building = true;
        flightCtx?.revert();
        trail.replaceChildren();
        ScrollTrigger.getById("rocket-flight")?.kill();
        gsap.killTweensOf(ship);

        flightCtx = gsap.context(() => {
          const shipW = ship.offsetWidth || 200;
          const shipH = ship.offsetHeight || 250;

          // Extra X beats so the path keeps drifting through testimonials → footer
          const xPercents = markers.map((marker) => {
            const r = marker.getBoundingClientRect();
            const centerX = r.left + window.scrollX + r.width / 2;
            return (centerX / document.documentElement.scrollWidth) * 100;
          });
          const lastX = xPercents[xPercents.length - 1] ?? 50;
          xPercents.push(
            gsap.utils.clamp(12, 88, 100 - lastX),
            70,
            88, // drift toward the right before the final park
          );

          const first = markers[0].getBoundingClientRect();
          const startY = gsap.utils.clamp(
            12,
            window.innerHeight * 0.28,
            first.top + first.height / 2 - shipH / 2,
          );
          const midY = () => window.innerHeight / 2 - shipH / 2;
          const bottomY = () =>
            Math.max(midY(), window.innerHeight - shipH - 28);
          const rightX = () => Math.max(24, window.innerWidth - shipW - 32);
          const settleEase = gsap.parseEase("power2.inOut");

          // Lagged property setters — catch up smoothly instead of 1:1 with scroll ticks
          const xTo = gsap.quickTo(ship, "x", {
            duration: 0.7,
            ease: "power3.out",
          });
          const yTo = gsap.quickTo(ship, "y", {
            duration: 0.85,
            ease: "power3.out",
          });
          const rotTo = gsap.quickTo(ship, "rotation", {
            duration: 0.55,
            ease: "power2.out",
          });

          // First ~22% of flight: glide top → middle
          // Last ~22%: glide middle → bottom-right
          const settleEnd = 0.22;
          const exitStart = 0.78;
          let facing = 1;
          let smoothBank = 0;
          let lastTargetX = 0;

          const targetX = (progress: number) => {
            const p = sampleSmooth(xPercents, progress) / 100;
            // Soft sway only while cruising mid-page (not during exit park)
            const settle = gsap.utils.clamp(0, 1, progress / settleEnd);
            const exitT = gsap.utils.clamp(
              0,
              1,
              (progress - exitStart) / (1 - exitStart),
            );
            const swayAmp = settleEase(settle) * (1 - settleEase(exitT));
            const sway =
              swayAmp *
              Math.sin(progress * Math.PI * 2.2) *
              (window.innerWidth * 0.008);
            return window.innerWidth * p - shipW / 2 + sway;
          };

          const place = (progress: number, direction: number, immediate = false) => {
            if (direction === 1 || direction === -1) facing = direction;

            const rawSettle = gsap.utils.clamp(0, 1, progress / settleEnd);
            const settle = settleEase(rawSettle);
            let y = gsap.utils.interpolate(startY, midY(), settle);
            let nextX = targetX(progress);

            // Final stretch: settle into the bottom-right corner
            if (progress > exitStart) {
              const exit = settleEase(
                gsap.utils.clamp(0, 1, (progress - exitStart) / (1 - exitStart)),
              );
              y = gsap.utils.interpolate(midY(), bottomY(), exit);
              nextX = gsap.utils.interpolate(nextX, rightX(), exit);
            }

            // Smooth bank from horizontal velocity (not raw frame dx)
            const rawBank = gsap.utils.clamp(-22, 22, (nextX - lastTargetX) * 0.35);
            lastTargetX = nextX;
            smoothBank += (rawBank - smoothBank) * 0.12;

            // Asset nose UP at 0° — down scroll → 180°, up scroll → 0°
            const noseDown = facing !== -1;
            const nextFacing = noseDown ? "down" : "up";
            const base = noseDown ? 180 : 0;
            const rotation = base + (noseDown ? -smoothBank : smoothBank);

            if (immediate) {
              gsap.set(ship, {
                x: nextX,
                y,
                rotation,
                autoAlpha: 1,
              });
            } else {
              gsap.set(ship, { autoAlpha: 1 });
              xTo(nextX);
              yTo(y);
              rotTo(rotation);
            }

            ship.dataset.facing = nextFacing;
          };

          lastTargetX = targetX(0);
          gsap.set(ship, {
            x: lastTargetX,
            y: startY,
            rotation: 0,
            autoAlpha: 1,
            force3D: true,
          });
          gsap.set(inner, { scaleY: 1, scaleX: 1 });
          ship.dataset.facing = "up";

          const dropCloud = () => {
            const now = performance.now();
            if (now - lastCloud < 55) return;
            lastCloud = now;

            const rect = ship.getBoundingClientRect();
            const noseDown = ship.dataset.facing !== "up";
            const baseX = rect.left + rect.width / 2;
            const baseY = noseDown
              ? rect.top + rect.height * 0.18
              : rect.top + rect.height * 0.82;

            const burst = gsap.utils.random(2, 3, 1);
            for (let i = 0; i < burst; i++) {
              const puff = document.createElement("span");
              const size = gsap.utils.random(1, 3, 1);
              puff.className = `rocket-flight__puff rocket-flight__puff--${size}`;
              puff.style.left = `${baseX + gsap.utils.random(-14, 14)}px`;
              puff.style.top = `${baseY + gsap.utils.random(-4, 10)}px`;
              trail.appendChild(puff);

              gsap.fromTo(
                puff,
                {
                  opacity: gsap.utils.random(0.75, 0.95),
                  scale: gsap.utils.random(0.4, 0.65),
                },
                {
                  opacity: 0,
                  scale: gsap.utils.random(1.7, 2.5),
                  y: noseDown
                    ? gsap.utils.random(-64, -20)
                    : gsap.utils.random(20, 64),
                  x: gsap.utils.random(-28, 28),
                  duration: gsap.utils.random(1.8, 2.6),
                  delay: i * 0.05,
                  ease: "power1.out",
                  onComplete: () => puff.remove(),
                },
              );
            }
          };

          const startTrigger =
            document.querySelector<HTMLElement>(".hero") ?? markers[0];

          ScrollTrigger.create({
            id: "rocket-flight",
            trigger: startTrigger,
            start: "top top",
            // Fly for the full document scroll (testimonials + sitemap + footer curtain)
            end: "max",
            // Higher scrub = softer catch-up lag with scroll
            scrub: 2.2,
            invalidateOnRefresh: true,
            refreshPriority: -2,
            onUpdate: (self) => {
              place(self.progress, self.direction);
              // Keep trailing while scrolling the flight range (incl. footer)
              if (Math.abs(self.getVelocity()) > 0.45) {
                dropCloud();
              }
            },
            onRefresh: (self) => {
              place(self.progress, self.direction || 1, true);
            },
          });
        }, root);

        building = false;
      };

      const scheduleRebuild = (delay = 200) => {
        window.clearTimeout(rebuildTimer);
        rebuildTimer = window.setTimeout(() => {
          createFlight();
          ScrollTrigger.refresh();
        }, delay);
      };

      createFlight();
      scheduleRebuild(600);
      scheduleRebuild(1400);

      const onResize = () => {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          createFlight();
          ScrollTrigger.refresh();
        }, 200);
      };

      const onLoad = () => scheduleRebuild(100);

      window.addEventListener("resize", onResize);
      window.addEventListener("load", onLoad);

      return () => {
        window.clearTimeout(resizeTimer);
        window.clearTimeout(rebuildTimer);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("load", onLoad);
        flightCtx?.revert();
        ScrollTrigger.getById("rocket-flight")?.kill();
        gsap.killTweensOf(ship);
      };
    },
    { scope: rootRef },
  );

  return (
    <div className="rocket-flight" ref={rootRef} aria-hidden="true">
      <div className="rocket-flight__trail" ref={trailRef} />
      <div className="rocket-flight__ship" ref={shipRef}>
        <div className="rocket-flight__inner" ref={innerRef}>
          <img
            className="rocket-flight__img"
            src={assets.rocket}
            alt=""
            width={266}
            height={332}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
