import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "@/data/site";
import "./scroll-rocket-flight.css";

gsap.registerPlugin(useGSAP, MotionPathPlugin, ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Scrubbed rocket flight between home section markers (MotionPath + ScrollTrigger).
 * Constant rocket size; cloud trail; nose reverses when scrolling back up.
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

        flightCtx = gsap.context(() => {
          const origin = root.getBoundingClientRect();
          const first = markers[0].getBoundingClientRect();

          gsap.set(ship, {
            x: 0,
            y: 0,
            rotation: 0,
            left:
              first.left -
              origin.left +
              first.width / 2 -
              ship.offsetWidth / 2,
            top:
              first.top -
              origin.top +
              first.height / 2 -
              ship.offsetHeight / 2,
            autoAlpha: 1,
          });
          gsap.set(inner, { scaleY: 1 });

          const shipRect = ship.getBoundingClientRect();
          const shipCx = shipRect.left + shipRect.width / 2;
          const shipCy = shipRect.top + shipRect.height / 2;

          const points = markers.slice(1).map((marker) => {
            const r = marker.getBoundingClientRect();
            return {
              x: r.left + r.width / 2 - shipCx,
              y: r.top + r.height / 2 - shipCy,
            };
          });

          const dropCloud = () => {
            const now = performance.now();
            if (now - lastCloud < 100) return;
            lastCloud = now;

            const rect = ship.getBoundingClientRect();
            const rootRect = root.getBoundingClientRect();
            const puff = document.createElement("span");
            puff.className = "rocket-flight__puff";
            puff.style.left = `${rect.left - rootRect.left + rect.width / 2}px`;
            puff.style.top = `${rect.top - rootRect.top + rect.height * 0.72}px`;
            trail.appendChild(puff);

            gsap.fromTo(
              puff,
              { opacity: 0.75, scale: 0.3 },
              {
                opacity: 0,
                scale: 1.4,
                y: gsap.utils.random(10, 40),
                x: gsap.utils.random(-20, 20),
                duration: 1.15,
                ease: "power1.out",
                onComplete: () => puff.remove(),
              },
            );
          };

          gsap
            .timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                id: "rocket-flight",
                trigger: markers[0],
                start: "clamp(top center)",
                endTrigger: markers[markers.length - 1],
                end: "clamp(top center)",
                scrub: 1,
                invalidateOnRefresh: true,
                refreshPriority: -2,
                onUpdate: (self) => {
                  // Reverse nose when scrolling back up
                  gsap.set(inner, {
                    scaleY: self.direction === -1 ? -1 : 1,
                  });
                  if (self.isActive && Math.abs(self.getVelocity()) > 2) {
                    dropCloud();
                  }
                },
              },
            })
            .to(ship, {
              duration: 1,
              motionPath: {
                path: points,
                curviness: 1.5,
                // Asset nose points up; offset so forward = path tangent
                autoRotate: 90,
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
      // Flip gallery / sticky stack shift layout after images & pins settle
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
