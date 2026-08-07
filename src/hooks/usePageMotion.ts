import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Soft enter-once reveal — no exit blur/fade while the user is still reading */
function revealOnce(
  targets: gsap.TweenTarget,
  trigger: Element | string,
  from: gsap.TweenVars,
  options?: { start?: string; stagger?: number; delay?: number },
) {
  gsap.from(targets, {
    ...from,
    duration: 0.85,
    ease: "power3.out",
    stagger: options?.stagger,
    delay: options?.delay,
    clearProps: "transform,filter",
    scrollTrigger: {
      trigger,
      start: options?.start ?? "top 78%",
      toggleActions: "play none none none",
      once: true,
    },
  });
}

export function usePageMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(
          [
            ".reveal",
            ".reveal-child",
            ".header__shell",
            ".feature-cards",
            ".metric-card",
            ".bounce-card",
            ".cloud",
            ".float-bob",
            ".sky-layer",
            ".role-card",
            ".gallery__img",
            ".stats__item",
            ".hero__deco",
          ],
          { clearProps: "all", opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 },
        );
        return;
      }

      gsap.set([".metric-card", ".bounce-card", ".role-card", ".gallery__img"], {
        transformOrigin: "center center",
      });

      // ——— Ambient loops ———
      gsap.utils.toArray<HTMLElement>(".cloud").forEach((cloud, i) => {
        gsap.to(cloud, {
          x: i % 2 === 0 ? 14 : -12,
          duration: 42 + i * 8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 1.2,
        });
      });

      gsap.utils.toArray<HTMLElement>(".float-bob").forEach((el, i) => {
        gsap.to(el, {
          y: -(10 + (i % 4) * 3),
          rotate: i % 2 === 0 ? 3 : -4,
          duration: 2.8 + (i % 5) * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.18,
        });
      });

      const cloudScroll = {
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        scrub: 3.2,
      } as const;

      gsap.to(".cloud--far", {
        y: -70,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 3.6 },
      });
      gsap.to(".cloud--mid", {
        y: -100,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 3.2 },
      });
      gsap.to(".cloud--near:not(.cloud--header)", {
        y: -130,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 2.8 },
      });
      gsap.to(".cloud--header", {
        y: -28,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 4 },
      });
      gsap.to(".sky-layer__haze--mist", {
        y: 48,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 3.4 },
      });

      [
        { sel: ".parallax--money-hero", y: -90, x: 35 },
        { sel: ".parallax--money-hero-sm", y: -70, x: 20 },
        { sel: ".parallax--money-cards", y: -80, x: 40 },
        { sel: ".parallax--money-roles", y: -60, x: -24 },
      ].forEach(({ sel, y, x }) => {
        gsap.utils.toArray<HTMLElement>(sel).forEach((el) => {
          gsap.to(el, {
            y,
            x,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.3,
            },
          });
        });
      });

      // ——— Header + hero load-in ———
      gsap.from(".header__shell", {
        y: -28,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
      });

      gsap.from(".hero .parallax-wrap", {
        scale: 0.55,
        opacity: 0,
        duration: 1.1,
        stagger: 0.1,
        ease: "back.out(1.6)",
        delay: 0.2,
      });

      gsap.from(".feature-cards", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.45,
      });

      // ——— Metric cards: layered enter + hover-friendly float ———
      gsap.utils.toArray<HTMLElement>(".metric-card").forEach((card, i) => {
        const fromX = i % 2 === 0 ? -80 : 80;
        const text = card.querySelectorAll(".metric-card__text > *");
        const art = card.querySelector(".metric-card__art");
        const artWrap = card.querySelector(".metric-card__art-wrap");
        const glow = card.querySelector(".metric-card__glow");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".feature-cards",
            start: "top 82%",
            toggleActions: "play none none none",
            once: true,
          },
          delay: i * 0.12,
        });

        tl.from(card, {
          y: 72,
          x: fromX,
          rotate: i % 2 === 0 ? -5 : 5,
          scale: 0.9,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "transform",
        })
          .from(
            text,
            {
              y: 24,
              opacity: 0,
              duration: 0.55,
              stagger: 0.1,
              ease: "power2.out",
              clearProps: "all",
            },
            "-=0.4",
          )
          .from(
            art,
            {
              y: 60,
              scale: 0.78,
              rotate: i % 2 === 0 ? 8 : -8,
              opacity: 0,
              duration: 0.8,
              ease: "back.out(1.4)",
              clearProps: "transform",
            },
            "-=0.5",
          )
          .from(
            glow,
            { opacity: 0, duration: 0.5, ease: "power1.out" },
            "-=0.45",
          );

        if (artWrap) {
          gsap.to(artWrap, {
            y: i % 2 === 0 ? -12 : 12,
            duration: 2.8 + i * 0.3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 0.9 + i * 0.2,
          });

          gsap.to(artWrap, {
            yPercent: i % 2 === 0 ? -8 : 8,
            ease: "none",
            scrollTrigger: {
              trigger: ".feature-cards",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.25,
            },
          });
        }
      });

      gsap.utils
        .toArray<HTMLElement>(".metric-card__count[data-count]")
        .forEach((el) => {
          const target = parseFloat(el.dataset.count ?? "0");
          const suffix = el.dataset.suffix ?? "";
          if (Number.isNaN(target)) return;
          const obj = { val: 0 };
          const format = (n: number) =>
            Math.round(n).toLocaleString("en-US") + suffix;

          ScrollTrigger.create({
            trigger: el,
            start: "top 90%",
            once: true,
            onEnter: () => {
              gsap.to(obj, {
                val: target,
                duration: 1.35,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = format(obj.val);
                },
              });
            },
          });
        });

      // ——— Stats ———
      revealOnce(".stats__eyebrow", ".stats", { y: 28, opacity: 0 });
      revealOnce(".stats__item", ".stats", { y: 36, opacity: 0 }, {
        stagger: 0.08,
        start: "top 80%",
      });

      gsap.utils
        .toArray<HTMLElement>(".stats__value[data-count]")
        .forEach((el) => {
          const target = parseFloat(el.dataset.count ?? "0");
          const suffix = el.dataset.suffix ?? "";
          if (Number.isNaN(target)) return;
          const obj = { val: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 88%",
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

      // ——— Why / bouncy features ———
      revealOnce(
        ".bouncy-features__intro > *, .bouncy-features__cta",
        ".bouncy-features",
        { y: 32, opacity: 0 },
        { stagger: 0.08, start: "top 82%" },
      );
      revealOnce(".bounce-card", ".bouncy-features", { y: 40, opacity: 0 }, {
        stagger: 0.1,
        start: "top 75%",
      });

      // ——— Roles ———
      revealOnce(".roles__intro > *", ".roles", { y: 28, opacity: 0 }, {
        stagger: 0.08,
      });
      gsap.utils.toArray<HTMLElement>(".role-card").forEach((card, i) => {
        revealOnce(
          card,
          ".roles",
          { y: 36, x: i === 0 ? -24 : 24, opacity: 0 },
          { start: "top 72%", delay: i * 0.08 },
        );
      });

      // ——— Verticals ———
      revealOnce(".verticals__intro > *", ".verticals", { y: 28, opacity: 0 }, {
        stagger: 0.07,
      });
      revealOnce(".gallery__img", ".verticals", { y: 36, opacity: 0 }, {
        stagger: 0.06,
        start: "top 78%",
      });

      // ——— CTA ———
      revealOnce(".cta-vertical__copy > *", ".cta-vertical", { y: 28, opacity: 0 }, {
        stagger: 0.08,
      });
      revealOnce(".cta-vertical__marquee-wrap", ".cta-vertical", {
        y: 28,
        opacity: 0,
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [rootRef]);
}
