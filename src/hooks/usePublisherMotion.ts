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
            ".pub-benefit",
            ".pub-step",
            ".pub-source",
            ".pub-cta__panel",
          ],
          { clearProps: "all", opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 },
        );
        return;
      }

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

      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out", immediateRender: false },
      });
      heroTl
        .from(".pub-hero__copy > *", {
          y: 42,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          clearProps: "opacity,transform",
        })
        .from(
          ".pub-hero__card",
          {
            scale: 0.8,
            rotate: -12,
            opacity: 0,
            duration: 0.9,
            ease: "back.out(1.4)",
            clearProps: "opacity,transform",
          },
          "-=0.45",
        )
        .from(
          [".pub-hero__money", ".pub-hero__rocket", ".pub-hero__orb"],
          {
            scale: 0.5,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "back.out(1.6)",
            clearProps: "opacity,transform",
          },
          "-=0.55",
        );

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

      // One-shot reveals — never reverse to opacity 0
      gsap.utils.toArray<HTMLElement>(".pub-reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".pub-reveal-left").forEach((el) => {
        gsap.from(el, {
          x: -56,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".pub-reveal-right").forEach((el) => {
        gsap.from(el, {
          x: 56,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
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
            start: "top 90%",
            once: true,
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
          });
        });
    }, root);

    return () => ctx.revert();
  }, [rootRef]);
}
