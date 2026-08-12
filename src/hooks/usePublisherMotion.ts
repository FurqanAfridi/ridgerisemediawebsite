import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  bindScrollTriggerRefreshListeners,
  configureScrollTriggerForDevices,
  ensureMotionTargetsVisible,
  isNarrowViewport,
  prefersReducedMotion,
  scheduleScrollTriggerRefresh,
} from "@/lib/motion-env";

gsap.registerPlugin(ScrollTrigger);

export function usePublisherMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    configureScrollTriggerForDevices();
    const narrow = isNarrowViewport();

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(
          [
            ".pub-reveal",
            ".pub-reveal-left",
            ".pub-reveal-right",
            ".pub-float",
            ".float-bob",
            ".pub-benefit",
            ".pub-step",
            ".pub-source",
            ".pub-cta__panel",
            ".pub-hero__copy > *",
            ".pub-hero__card",
          ],
          { clearProps: "all", opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 },
        );
        return;
      }

      gsap.utils.toArray<HTMLElement>(".float-bob").forEach((el, i) => {
        gsap.to(el, {
          y: -(narrow ? 8 : 12) - (i % 3) * (narrow ? 3 : 4),
          rotate: i % 2 === 0 ? 4 : -5,
          duration: 2.6 + (i % 4) * 0.35,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.15,
        });
      });

      gsap.utils.toArray<HTMLElement>(".pub-float").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? (narrow ? -8 : -14) : narrow ? 8 : 12,
          duration: 3.2 + i * 0.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out", immediateRender: false },
      });
      heroTl
        .from(".pub-hero__copy > *", {
          y: narrow ? 28 : 42,
          opacity: 0,
          duration: narrow ? 0.6 : 0.75,
          stagger: 0.08,
          clearProps: "opacity,transform",
        })
        .from(
          ".pub-hero__card",
          {
            scale: narrow ? 0.9 : 0.8,
            rotate: narrow ? -4 : -12,
            opacity: 0,
            duration: narrow ? 0.7 : 0.9,
            ease: "power3.out",
            clearProps: "opacity,transform",
          },
          "-=0.4",
        )
        .from(
          [".pub-hero__money", ".pub-hero__rocket", ".pub-hero__orb"],
          {
            scale: 0.7,
            opacity: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power3.out",
            clearProps: "opacity,transform",
          },
          "-=0.45",
        );

      gsap.utils.toArray<HTMLElement>(".pub-parallax").forEach((el) => {
        const speed = parseFloat(el.dataset.speed ?? "0.3");
        gsap.to(el, {
          y: speed * (narrow ? 60 : 120),
          ease: "none",
          scrollTrigger: {
            trigger: ".pub-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });

      const start = narrow ? "top 94%" : "top 90%";

      gsap.utils.toArray<HTMLElement>(".pub-reveal").forEach((el) => {
        gsap.from(el, {
          y: narrow ? 28 : 40,
          opacity: 0,
          duration: narrow ? 0.6 : 0.75,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "opacity,transform",
          force3D: true,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".pub-reveal-left").forEach((el) => {
        gsap.from(el, {
          x: narrow ? -24 : -56,
          opacity: 0,
          duration: narrow ? 0.65 : 0.85,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "opacity,transform",
          force3D: true,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".pub-reveal-right").forEach((el) => {
        gsap.from(el, {
          x: narrow ? 24 : 56,
          opacity: 0,
          duration: narrow ? 0.65 : 0.85,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "opacity,transform",
          force3D: true,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        });
      });

      gsap.utils
        .toArray<HTMLElement>(".pub-metrics__value[data-count]")
        .forEach((el) => {
          const target = parseFloat(el.dataset.count ?? "0");
          const suffix = el.dataset.suffix ?? "";
          if (Number.isNaN(target)) return;
          const obj = { val: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 95%",
            once: true,
            onEnter: () => {
              gsap.to(obj, {
                val: target,
                duration: 1.1,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = `${Math.round(obj.val)}${suffix}`;
                },
              });
            },
          });
        });
    }, root);

    const clearScheduled = scheduleScrollTriggerRefresh();
    const unbindRefresh = bindScrollTriggerRefreshListeners();
    const clearSafety = ensureMotionTargetsVisible([
      ".pub-reveal",
      ".pub-reveal-left",
      ".pub-reveal-right",
      ".pub-hero__copy > *",
      ".pub-hero__card",
      ".pub-benefit",
      ".pub-step",
      ".pub-source",
      ".pub-cta__panel",
    ]);

    return () => {
      clearScheduled();
      unbindRefresh();
      clearSafety();
      ctx.revert();
    };
  }, [rootRef]);
}
