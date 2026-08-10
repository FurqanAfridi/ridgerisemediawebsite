import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function revealOnce(
  targets: gsap.TweenTarget,
  trigger: Element | string,
  from: gsap.TweenVars,
  options?: {
    start?: string;
    stagger?: number;
    delay?: number;
    duration?: number;
    ease?: string;
  },
) {
  const els = gsap.utils.toArray(targets);
  if (!els.length) return;

  gsap.from(els, {
    ...from,
    duration: options?.duration ?? 1,
    ease: options?.ease ?? "power4.out",
    stagger: options?.stagger,
    delay: options?.delay,
    immediateRender: false,
    clearProps: "transform,filter,opacity",
    scrollTrigger: {
      trigger,
      start: options?.start ?? "top 82%",
      toggleActions: "play none none none",
      once: true,
    },
  });
}

export function usePageMotion(
  rootRef: RefObject<HTMLElement | null>,
  routeKey = "",
) {
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

      // Refresh after layout settles (fonts / images)
      requestAnimationFrame(() => ScrollTrigger.refresh());

      gsap.set(
        [".metric-card", ".bounce-card", ".role-card", ".gallery__img"],
        { transformOrigin: "center center", willChange: "transform" },
      );

      // ——— Ambient loops (more presence) ———
      gsap.utils.toArray<HTMLElement>(".cloud").forEach((cloud, i) => {
        gsap.to(cloud, {
          x: i % 2 === 0 ? 28 : -22,
          y: i % 2 === 0 ? 10 : -8,
          duration: 18 + i * 5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.8,
        });
      });

      gsap.utils.toArray<HTMLElement>(".float-bob").forEach((el, i) => {
        gsap.to(el, {
          y: -(16 + (i % 4) * 5),
          rotate: i % 2 === 0 ? 6 : -7,
          duration: 2.2 + (i % 5) * 0.25,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.14,
        });
      });

      const cloudScroll = {
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      } as const;

      gsap.to(".cloud--far", {
        y: -120,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 1.8 },
      });
      gsap.to(".cloud--mid", {
        y: -180,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 1.4 },
      });
      gsap.to(".cloud--near:not(.cloud--header)", {
        y: -240,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 1.1 },
      });
      gsap.to(".cloud--header", {
        y: -48,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 2 },
      });
      gsap.to(".sky-layer__haze--mist", {
        y: 80,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 1.6 },
      });

      [
        { sel: ".parallax--money-hero", y: -140, x: 55, rotate: 8 },
        { sel: ".parallax--money-hero-sm", y: -110, x: 32, rotate: -6 },
        { sel: ".parallax--money-cards", y: -120, x: 50, rotate: 10 },
        { sel: ".parallax--money-roles", y: -90, x: -40, rotate: -8 },
      ].forEach(({ sel, y, x, rotate }) => {
        gsap.utils.toArray<HTMLElement>(sel).forEach((el) => {
          gsap.to(el, {
            y,
            x,
            rotate,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.85,
            },
          });
        });
      });

      // ——— Header load ———
      gsap.from(".header__shell", {
        y: -48,
        opacity: 0,
        scale: 0.94,
        duration: 1,
        ease: "back.out(1.5)",
      });

      // ——— Hero deco pop ———
      gsap.from(".hero .parallax-wrap", {
        scale: 0.2,
        opacity: 0,
        rotate: -18,
        duration: 1.25,
        stagger: 0.14,
        ease: "elastic.out(1, 0.55)",
        delay: 0.15,
      });

      // ——— Metric cards: cinematic entrance ———
      gsap.utils.toArray<HTMLElement>(".metric-card").forEach((card, i) => {
        const fromX = i % 2 === 0 ? -120 : 120;
        const text = card.querySelectorAll(".metric-card__text > *");
        const art = card.querySelector(".metric-card__art");
        const artWrap = card.querySelector(".metric-card__art-wrap");
        const glow = card.querySelector(".metric-card__glow");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".feature-cards",
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
          delay: i * 0.16,
        });

        tl.from(card, {
          y: 100,
          x: fromX,
          rotateY: i % 2 === 0 ? -18 : 18,
          rotateZ: i % 2 === 0 ? -8 : 8,
          scale: 0.82,
          opacity: 0,
          duration: 1.05,
          ease: "power4.out",
          clearProps: "transform",
        })
          .from(
            text,
            {
              y: 36,
              opacity: 0,
              filter: "blur(8px)",
              duration: 0.65,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "all",
            },
            "-=0.5",
          )
          .from(
            art,
            {
              y: 80,
              scale: 0.65,
              rotate: i % 2 === 0 ? 14 : -14,
              opacity: 0,
              duration: 0.95,
              ease: "back.out(1.7)",
              clearProps: "transform",
            },
            "-=0.55",
          )
          .from(
            glow,
            { opacity: 0, scale: 0.6, duration: 0.6, ease: "power2.out" },
            "-=0.5",
          );

        if (artWrap) {
          gsap.to(artWrap, {
            y: i % 2 === 0 ? -16 : 16,
            duration: 2.4 + i * 0.25,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1 + i * 0.15,
          });

          gsap.to(artWrap, {
            yPercent: i % 2 === 0 ? -14 : 14,
            ease: "none",
            scrollTrigger: {
              trigger: ".feature-cards",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.9,
            },
          });
        }
      });

      // Count-ups with overshoot feel
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
            start: "top 92%",
            once: true,
            onEnter: () => {
              gsap.to(obj, {
                val: target,
                duration: 1.7,
                ease: "power3.out",
                onUpdate: () => {
                  el.textContent = format(obj.val);
                },
              });
            },
          });
        });

      // ——— Stats: punchy stagger + scale ———
      revealOnce(
        ".stats__eyebrow",
        ".stats",
        { y: 40, opacity: 0, filter: "blur(10px)" },
        { duration: 0.8 },
      );
      gsap.fromTo(
        ".stats__eyebrow-text",
        { scale: 0.92, letterSpacing: "0.08em" },
        {
          scale: 1,
          letterSpacing: "0.14em",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats",
            start: "top 82%",
            once: true,
          },
        },
      );
      gsap.to(".stats__eyebrow-text", {
        y: -3,
        duration: 1.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.2,
        scrollTrigger: {
          trigger: ".stats",
          start: "top 82%",
          once: true,
        },
      });
      revealOnce(
        ".stats__item",
        ".stats",
        { y: 56, opacity: 0, scale: 0.88 },
        { stagger: 0.1, start: "top 84%", ease: "back.out(1.4)" },
      );

      gsap.utils
        .toArray<HTMLElement>(".stats__value[data-count]")
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
              gsap.fromTo(
                el,
                { scale: 0.7, opacity: 0.4 },
                { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" },
              );
              gsap.to(obj, {
                val: target,
                duration: 1.4,
                ease: "power3.out",
                onUpdate: () => {
                  el.textContent = `${Math.round(obj.val)}${suffix}`;
                },
              });
            },
          });
        });

      // ——— Why / bouncy features (Motion handles card enter; light GSAP scrub) ———
      gsap.utils.toArray<HTMLElement>(".bounce-card").forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -18 : 14,
          ease: "none",
          scrollTrigger: {
            trigger: ".bouncy-features",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      });

      // ——— Roles ———
      revealOnce(
        ".roles__intro > *",
        ".roles",
        { y: 40, opacity: 0, filter: "blur(8px)" },
        { stagger: 0.1 },
      );
      gsap.utils.toArray<HTMLElement>(".role-card").forEach((card, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".roles",
            start: "top 70%",
            once: true,
          },
          delay: i * 0.14,
        });
        tl.from(card, {
          y: 64,
          x: i === 0 ? -80 : 80,
          rotateY: i === 0 ? 18 : -18,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power4.out",
          clearProps: "transform",
        }).from(
          card.querySelectorAll(
            ".ppc-badge, .role-card__title, .role-card__tagline, .role-card__list li, .btn--role",
          ),
          {
            y: 24,
            opacity: 0,
            stagger: 0.07,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "all",
          },
          "-=0.45",
        );
      });

      // ——— Verticals gallery: cascade + scroll scrub ———
      revealOnce(
        ".verticals__intro > *",
        ".verticals",
        { y: 40, opacity: 0, filter: "blur(8px)" },
        { stagger: 0.09 },
      );

      gsap.utils.toArray<HTMLElement>(".gallery__img").forEach((img, i) => {
        gsap.from(img, {
          y: 80 + (i % 3) * 20,
          opacity: 0,
          scale: 0.86,
          rotate: (i % 2 === 0 ? -1 : 1) * (3 + (i % 3)),
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.07,
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".gallery",
            start: "top 82%",
            once: true,
          },
        });

        gsap.to(img, {
          y: i % 2 === 0 ? -48 : 36,
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // ——— CTA (Motion handles enter; light parallax on marquee) ———
      if (root.querySelector(".cta-vertical__marquee-wrap")) {
        gsap.to(".cta-vertical__marquee-wrap", {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: ".cta-vertical",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // ——— Testimonials section pin-feel (gentle scale) ———
      if (root.querySelector(".stagger-section")) {
        gsap.from(".stagger-section__intro > *", {
          y: 40,
          opacity: 0,
          filter: "blur(10px)",
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stagger-section",
            start: "top 80%",
            once: true,
          },
        });
      }

      // ——— Footer sitemap cascade ———
      if (root.querySelector(".footer-sitemap")) {
        revealOnce(
          ".footer-sitemap__col",
          ".footer-sitemap",
          { y: 36, opacity: 0 },
          { stagger: 0.08, start: "top 88%" },
        );
      }
    }, root);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
      clearScrollLocksSafe();
    };
  }, [rootRef, routeKey]);
}

function clearScrollLocksSafe() {
  try {
    document.documentElement.style.removeProperty("overflow");
    document.body.style.removeProperty("overflow");
  } catch {
    /* ignore */
  }
}
