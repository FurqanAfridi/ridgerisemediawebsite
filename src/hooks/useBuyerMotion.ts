import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  configureScrollTriggerForDevices,
  isNarrowViewport,
  prefersReducedMotion,
} from "@/lib/motion-env";

gsap.registerPlugin(ScrollTrigger);

export function useBuyerMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    configureScrollTriggerForDevices();
    const narrow = isNarrowViewport();

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(
          [
            ".buy-queue",
            ".buy-mock",
            ".buy-chart__bar",
            ".buy-filter__fill",
            ".buy-flow__fill",
            ".buy-flow__dot",
            ".buy-flow__icon",
            ".buy-flow__ring",
          ],
          { clearProps: "all" },
        );
        return;
      }

      const queueTl = gsap.timeline();
      queueTl
        .from(".buy-queue", {
          scale: 0.88,
          rotate: -16,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        })
        .to(".buy-queue", {
          y: narrow ? -8 : -12,
          duration: 3.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

      gsap.from(".buy-chart__bar", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.85,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.55,
      });

      gsap.utils.toArray<HTMLElement>(".buy-filter__fill").forEach((el) => {
        const width = el.dataset.fill ?? "62%";
        gsap.fromTo(
          el,
          { width: "0%" },
          {
            width,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: narrow ? "top 94%" : "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.fromTo(
        ".buy-flow__fill",
        { width: "0%" },
        {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".buy-flow__line",
            start: "top 80%",
            end: "bottom 40%",
            scrub: 0.6,
          },
        },
      );

      gsap.fromTo(
        ".buy-flow__dot",
        { left: "0%" },
        {
          left: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".buy-flow__line",
            start: "top 80%",
            end: "bottom 40%",
            scrub: 0.6,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".buy-mock").forEach((el) => {
        gsap.to(el, {
          y: narrow ? -8 : -14,
          duration: 3.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      gsap.utils.toArray<HTMLElement>(".buy-flow__icon").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -8 : -5,
          duration: 2.2 + i * 0.25,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.18,
        });
      });

      gsap.utils.toArray<HTMLElement>(".buy-flow__ring").forEach((el, i) => {
        gsap.fromTo(
          el,
          { scale: 0.92, opacity: 0.45 },
          {
            scale: 1.28,
            opacity: 0,
            duration: 2.1,
            ease: "power1.out",
            repeat: -1,
            delay: i * 0.35,
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".buy-teams__icon").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -5 : 5,
          rotate: i % 2 === 0 ? -4 : 4,
          duration: 2.6 + (i % 3) * 0.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.12,
        });
      });
    }, root);

    return () => ctx.revert();
  }, [rootRef]);
}
