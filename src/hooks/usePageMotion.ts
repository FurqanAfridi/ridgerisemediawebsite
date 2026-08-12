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

  const narrow = isNarrowViewport();
  const safeFrom = { ...from };
  // Blur filters frequently fail / stick on mobile Safari
  if (narrow && "filter" in safeFrom) {
    delete safeFrom.filter;
  }

  gsap.from(els, {
    ...safeFrom,
    duration: options?.duration ?? (narrow ? 0.75 : 1),
    ease: options?.ease ?? "power3.out",
    stagger: options?.stagger,
    delay: options?.delay,
    immediateRender: false,
    clearProps: "transform,filter,opacity",
    force3D: true,
    scrollTrigger: {
      trigger,
      start: options?.start ?? (narrow ? "top 92%" : "top 82%"),
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

    configureScrollTriggerForDevices();
    const narrow = isNarrowViewport();

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
            ".cis__heading-inner",
            ".footer-sitemap__col",
            ".stagger-section__intro > *",
          ],
          { clearProps: "all", opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 },
        );
        return;
      }

      gsap.set(
        [".metric-card", ".bounce-card", ".role-card", ".gallery__img"],
        { transformOrigin: "center center", force3D: true },
      );

      // ——— Ambient loops ———
      gsap.utils.toArray<HTMLElement>(".cloud").forEach((cloud, i) => {
        gsap.to(cloud, {
          x: i % 2 === 0 ? (narrow ? 14 : 28) : narrow ? -12 : -22,
          y: i % 2 === 0 ? (narrow ? 6 : 10) : narrow ? -5 : -8,
          duration: (narrow ? 14 : 18) + i * 5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.8,
        });
      });

      gsap.utils.toArray<HTMLElement>(".float-bob").forEach((el, i) => {
        gsap.to(el, {
          y: -(narrow ? 10 : 16) - (i % 4) * (narrow ? 3 : 5),
          rotate: i % 2 === 0 ? (narrow ? 4 : 6) : narrow ? -5 : -7,
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

      const yFar = narrow ? -60 : -120;
      const yMid = narrow ? -90 : -180;
      const yNear = narrow ? -120 : -240;

      gsap.to(".cloud--far", {
        y: yFar,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 1.8 },
      });
      gsap.to(".cloud--mid", {
        y: yMid,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 1.4 },
      });
      gsap.to(".cloud--near:not(.cloud--header)", {
        y: yNear,
        scale: narrow ? 1.04 : 1.08,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 1.1 },
      });
      gsap.to(".cloud--header", {
        y: narrow ? -28 : -48,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 2 },
      });
      gsap.to(".sky-layer__haze--mist", {
        y: narrow ? 40 : 80,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: { ...cloudScroll, scrub: 1.6 },
      });

      const parallaxScale = narrow ? 0.45 : 1;
      [
        { sel: ".parallax--money-hero", y: -140, x: 55, rotate: 8 },
        { sel: ".parallax--rocket-hero", y: -90, x: -40, rotate: 6 },
        { sel: ".parallax--rocket-hero-sm", y: -70, x: 28, rotate: -5 },
        { sel: ".parallax--money-cards", y: -120, x: 50, rotate: 10 },
        { sel: ".parallax--money-roles", y: -90, x: -40, rotate: -8 },
      ].forEach(({ sel, y, x, rotate }) => {
        gsap.utils.toArray<HTMLElement>(sel).forEach((el) => {
          gsap.to(el, {
            y: y * parallaxScale,
            x: x * parallaxScale,
            rotate: rotate * parallaxScale,
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
        y: narrow ? -28 : -48,
        opacity: 0,
        scale: 0.96,
        duration: narrow ? 0.75 : 1,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });

      // ——— Hero deco pop ———
      gsap.from(".hero .parallax-wrap", {
        scale: narrow ? 0.55 : 0.2,
        opacity: 0,
        rotate: narrow ? -8 : -18,
        duration: narrow ? 0.9 : 1.25,
        stagger: 0.1,
        ease: narrow ? "power3.out" : "elastic.out(1, 0.55)",
        delay: 0.1,
        clearProps: "transform,opacity",
      });

      // ——— Metric cards ———
      gsap.utils.toArray<HTMLElement>(".metric-card").forEach((card, i) => {
        const fromX = narrow
          ? i % 2 === 0
            ? -36
            : 36
          : i % 2 === 0
            ? -120
            : 120;
        const text = card.querySelectorAll(".metric-card__text > *");
        const art = card.querySelector(".metric-card__art");
        const artWrap = card.querySelector(".metric-card__art-wrap");
        const glow = card.querySelector(".metric-card__glow");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".feature-cards",
            start: narrow ? "top 95%" : "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
          delay: i * (narrow ? 0.1 : 0.16),
        });

        tl.from(card, {
          y: narrow ? 48 : 100,
          x: fromX,
          ...(narrow
            ? {}
            : {
                rotateY: i % 2 === 0 ? -18 : 18,
                rotateZ: i % 2 === 0 ? -8 : 8,
              }),
          scale: narrow ? 0.92 : 0.82,
          opacity: 0,
          duration: narrow ? 0.75 : 1.05,
          ease: "power3.out",
          clearProps: "transform,opacity",
          force3D: true,
        })
          .from(
            text,
            {
              y: narrow ? 18 : 36,
              opacity: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: "power3.out",
              clearProps: "all",
            },
            "-=0.4",
          )
          .from(
            art,
            {
              y: narrow ? 36 : 80,
              scale: 0.8,
              rotate: narrow ? 0 : i % 2 === 0 ? 14 : -14,
              opacity: 0,
              duration: narrow ? 0.7 : 0.95,
              ease: "power3.out",
              clearProps: "transform,opacity",
            },
            "-=0.45",
          )
          .from(
            glow,
            { opacity: 0, scale: 0.7, duration: 0.5, ease: "power2.out" },
            "-=0.4",
          );

        if (artWrap) {
          gsap.to(artWrap, {
            y: i % 2 === 0 ? (narrow ? -10 : -16) : narrow ? 10 : 16,
            duration: 2.4 + i * 0.25,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 0.8 + i * 0.12,
          });

          gsap.to(artWrap, {
            yPercent: i % 2 === 0 ? (narrow ? -8 : -14) : narrow ? 8 : 14,
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
            start: "top 96%",
            once: true,
            onEnter: () => {
              gsap.to(obj, {
                val: target,
                duration: 1.4,
                ease: "power3.out",
                onUpdate: () => {
                  el.textContent = format(obj.val);
                },
              });
            },
          });
        });

      // ——— Stats ———
      revealOnce(
        ".stats__eyebrow",
        ".stats",
        { y: narrow ? 24 : 40, opacity: 0 },
        { duration: 0.7 },
      );
      gsap.fromTo(
        ".stats__eyebrow-text",
        { scale: 0.94 },
        {
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats",
            start: narrow ? "top 92%" : "top 82%",
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
        delay: 1,
        scrollTrigger: {
          trigger: ".stats",
          start: narrow ? "top 92%" : "top 82%",
          once: true,
        },
      });
      revealOnce(
        ".stats__item",
        ".stats",
        { y: narrow ? 32 : 56, opacity: 0, scale: 0.92 },
        {
          stagger: 0.08,
          start: narrow ? "top 92%" : "top 84%",
          ease: "power3.out",
        },
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
            start: "top 95%",
            once: true,
            onEnter: () => {
              gsap.fromTo(
                el,
                { scale: 0.85, opacity: 0.5 },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.45,
                  ease: "power3.out",
                },
              );
              gsap.to(obj, {
                val: target,
                duration: 1.2,
                ease: "power3.out",
                onUpdate: () => {
                  el.textContent = `${Math.round(obj.val)}${suffix}`;
                },
              });
            },
          });
        });

      // ——— Bounce cards scrub ———
      gsap.utils.toArray<HTMLElement>(".bounce-card").forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? (narrow ? -10 : -18) : narrow ? 8 : 14,
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
        { y: narrow ? 24 : 40, opacity: 0 },
        { stagger: 0.08 },
      );
      gsap.utils.toArray<HTMLElement>(".role-card").forEach((card, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".roles",
            start: narrow ? "top 88%" : "top 70%",
            once: true,
          },
          delay: i * (narrow ? 0.08 : 0.14),
        });
        tl.from(card, {
          y: narrow ? 40 : 64,
          x: narrow ? 0 : i === 0 ? -80 : 80,
          opacity: 0,
          scale: narrow ? 0.96 : 0.9,
          duration: narrow ? 0.7 : 1,
          ease: "power3.out",
          clearProps: "transform,opacity",
          force3D: true,
        }).from(
          card.querySelectorAll(
            ".ppc-badge, .role-card__title, .role-card__tagline, .role-card__list li, .btn--role",
          ),
          {
            y: 16,
            opacity: 0,
            stagger: 0.05,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "all",
          },
          "-=0.35",
        );
      });

      revealOnce(
        ".vfg-section .verticals__intro > *",
        ".vfg-section",
        { y: 28, opacity: 0 },
        { stagger: 0.08, duration: 0.7 },
      );

      if (root.querySelector(".cis__heading-inner")) {
        revealOnce(
          ".cis__heading-inner > :not(.cis__grid)",
          ".cis",
          { y: 16, opacity: 0 },
          { stagger: 0.05, duration: 0.6 },
        );
      }

      // Mobile: animate CIS cards in as they enter (sticky is off under 900px)
      if (narrow) {
        gsap.utils.toArray<HTMLElement>(".cis__card").forEach((card, i) => {
          gsap.from(card, {
            y: 40,
            opacity: 0,
            scale: 0.96,
            duration: 0.7,
            ease: "power3.out",
            immediateRender: false,
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              once: true,
            },
            delay: (i % 3) * 0.04,
          });
        });
      }

      if (root.querySelector(".cta-vertical__marquee-wrap")) {
        gsap.to(".cta-vertical__marquee-wrap", {
          y: narrow ? -20 : -40,
          ease: "none",
          scrollTrigger: {
            trigger: ".cta-vertical",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (root.querySelector(".stagger-section")) {
        gsap.from(".stagger-section__intro > *", {
          y: narrow ? 24 : 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.75,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: ".stagger-section",
            start: narrow ? "top 90%" : "top 80%",
            once: true,
          },
        });
      }

      if (root.querySelector(".footer-sitemap")) {
        revealOnce(
          ".footer-sitemap__col",
          ".footer-sitemap",
          { y: narrow ? 24 : 36, opacity: 0 },
          { stagger: 0.06, start: "top 92%" },
        );
      }
    }, root);

    const clearScheduled = scheduleScrollTriggerRefresh();
    const unbindRefresh = bindScrollTriggerRefreshListeners();
    const clearSafety = ensureMotionTargetsVisible([
      ".metric-card",
      ".bounce-card",
      ".role-card",
      ".stats__item",
      ".stats__eyebrow",
      ".cis__card",
      ".footer-sitemap__col",
      ".stagger-section__intro > *",
      ".header__shell",
    ]);

    return () => {
      clearScheduled();
      unbindRefresh();
      clearSafety();
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
