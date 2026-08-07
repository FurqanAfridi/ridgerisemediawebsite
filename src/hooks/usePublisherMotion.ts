import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function usePublisherMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(
          [
            ".pub-reveal",
            ".pub-reveal-left",
            ".pub-reveal-right",
            ".pub-float",
            ".float-bob",
          ],
          { clearProps: "all", opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 },
        );
        return;
      }

      // Ambient float loops
      gsap.utils.toArray<HTMLElement>(".float-bob").forEach((el, i) => {
        gsap.to(el, {
          y: -(12 + (i % 3) * 4),
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
          y: i % 2 === 0 ? -14 : 12,
          duration: 3.2 + i * 0.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // Hero entrance
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".pub-hero__copy > *", {
          y: 42,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
        })
        .from(
          ".pub-hero__card",
          { scale: 0.8, rotate: -12, opacity: 0, duration: 0.9, ease: "back.out(1.4)" },
          "-=0.45",
        )
        .from(
          [".pub-hero__rocket", ".pub-hero__money", ".pub-hero__orb"],
          { scale: 0.5, opacity: 0, duration: 0.7, stagger: 0.08, ease: "back.out(1.6)" },
          "-=0.55",
        );

      // Parallax on hero stage
      gsap.utils.toArray<HTMLElement>(".pub-parallax").forEach((el) => {
        const speed = parseFloat(el.dataset.speed ?? "0.3");
        gsap.to(el, {
          y: speed * 120,
          ease: "none",
          scrollTrigger: {
            trigger: ".pub-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });

      // Generic reveals
      gsap.utils.toArray<HTMLElement>(".pub-reveal").forEach((el) => {
        gsap.from(el, {
          y: 56,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            end: "top 55%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".pub-reveal-left").forEach((el) => {
        gsap.from(el, {
          x: -70,
          opacity: 0,
          rotate: -2,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".pub-reveal-right").forEach((el) => {
        gsap.from(el, {
          x: 70,
          opacity: 0,
          rotate: 2,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Benefit cards stagger cascade
      gsap.from(".pub-benefit", {
        y: 80,
        opacity: 0,
        scale: 0.92,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pub-benefits__grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Steps: clip wipe + scale
      gsap.utils.toArray<HTMLElement>(".pub-step").forEach((step, i) => {
        const media = step.querySelector(".pub-step__media");
        const copy = step.querySelector(".pub-step__copy");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
        tl.from(media, {
          clipPath: i % 2 === 0 ? "inset(0 40% 0 0)" : "inset(0 0 0 40%)",
          opacity: 0.4,
          duration: 0.85,
          ease: "power3.out",
        }).from(
          copy,
          { y: 40, opacity: 0, duration: 0.65, ease: "power3.out" },
          "-=0.45",
        );
      });

      // Sources rail slide-in
      gsap.from(".pub-source", {
        y: 60,
        opacity: 0,
        rotate: 4,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pub-sources__rail",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Metric count-ups
      gsap.utils
        .toArray<HTMLElement>(".pub-metrics__value[data-count]")
        .forEach((el) => {
          const target = parseFloat(el.dataset.count ?? "0");
          const suffix = el.dataset.suffix ?? "";
          if (Number.isNaN(target)) return;
          const obj = { val: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 90%",
            onEnter: () => {
              gsap.to(obj, {
                val: target,
                duration: 1.15,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = `${Math.round(obj.val)}${suffix}`;
                },
              });
            },
            onLeaveBack: () => {
              gsap.killTweensOf(obj);
              obj.val = 0;
              el.textContent = `0${suffix}`;
            },
          });
        });

      // CTA panel scale-in
      gsap.from(".pub-cta__panel", {
        y: 50,
        scale: 0.94,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pub-cta",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, root);

    return () => ctx.revert();
  }, [rootRef]);
}
