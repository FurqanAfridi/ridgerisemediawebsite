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

function refreshAfterImages(container: HTMLElement) {
  const imgs = container.querySelectorAll("img");
  if (!imgs.length) return () => {};

  let pending = 0;
  const bump = () => {
    pending -= 1;
    if (pending <= 0) {
      ScrollTrigger.refresh();
    }
  };

  imgs.forEach((img) => {
    if (img.complete) return;
    pending += 1;
    img.addEventListener("load", bump, { once: true });
    img.addEventListener("error", bump, { once: true });
  });

  if (pending === 0) return () => {};
  return () => {
    imgs.forEach((img) => {
      img.removeEventListener("load", bump);
      img.removeEventListener("error", bump);
    });
  };
}

export function usePublisherMotion(
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
            ".pub-reveal",
            ".pub-reveal-left",
            ".pub-reveal-right",
            ".pub-float",
            ".float-bob",
            ".pub-benefit",
            ".pub-step",
            ".pub-source",
            ".pub-sources__toc-item",
            ".pub-cta__panel",
            ".pub-hero__copy > *",
            ".pub-hero__card",
          ],
          { clearProps: "all", opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 },
        );
        root
          .querySelectorAll(".pub-source, .pub-sources__toc-item")
          .forEach((el) => el.classList.add("is-active", "is-done"));
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

      gsap.utils.toArray<HTMLElement>(
        ".pub-sources__sticky > *",
      ).forEach((el) => {
        gsap.from(el, {
          y: narrow ? 20 : 28,
          autoAlpha: 0,
          duration: 0.65,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: narrow ? "top 92%" : "top 85%",
            once: true,
            invalidateOnRefresh: true,
          },
        });
      });

      const sourcesSection = root.querySelector<HTMLElement>(".pub-sources");
      const sourcesBoard = root.querySelector<HTMLElement>(".pub-sources__board");
      const sourcesRail = root.querySelector<HTMLElement>(
        ".pub-sources__rail-fill",
      );
      const sourcesProgress = root.querySelector<HTMLElement>(
        ".pub-sources__progress-fill",
      );
      const sourceItems = gsap.utils.toArray<HTMLElement>(".pub-source");
      const sourceToc = gsap.utils.toArray<HTMLElement>(
        ".pub-sources__toc-item",
      );

      const syncSourceActive = (index: number) => {
        sourceItems.forEach((item, i) => {
          item.classList.toggle("is-active", i === index);
          item.classList.toggle("is-done", i < index);
        });
        sourceToc.forEach((item, i) => {
          item.classList.toggle("is-active", i === index);
          item.classList.toggle("is-done", i < index);
        });
      };

      if (sourcesSection && sourcesBoard && sourceItems.length) {
        syncSourceActive(0);

        const scrubRange = {
          trigger: sourcesBoard,
          start: narrow ? "top 78%" : "top 72%",
          end: "bottom 50%",
          scrub: 0.45,
          invalidateOnRefresh: true,
        } as const;

        if (sourcesRail) {
          gsap.fromTo(
            sourcesRail,
            { height: "0%" },
            {
              height: "100%",
              ease: "none",
              immediateRender: false,
              scrollTrigger: scrubRange,
            },
          );
        }

        if (sourcesProgress) {
          gsap.fromTo(
            sourcesProgress,
            { width: "0%" },
            {
              width: "100%",
              ease: "none",
              immediateRender: false,
              scrollTrigger: { ...scrubRange },
            },
          );
        }

        sourceItems.forEach((item, index) => {
          ScrollTrigger.create({
            trigger: item,
            start: narrow ? "top 85%" : "top 70%",
            end: "bottom 40%",
            invalidateOnRefresh: true,
            onEnter: () => syncSourceActive(index),
            onEnterBack: () => syncSourceActive(index),
          });

          gsap.fromTo(
            item,
            { autoAlpha: 0.4, y: narrow ? 20 : 32 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: item,
                start: narrow ? "top 92%" : "top 85%",
                once: true,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      }
    }, root);

    const clearImageWait = refreshAfterImages(root);
    const clearScheduled = scheduleScrollTriggerRefresh([80, 350, 800, 1400, 2200]);
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
      ".pub-sources__toc-item",
      ".pub-cta__panel",
    ]);

    const clearSourcesSafety = window.setTimeout(() => {
      root.querySelectorAll<HTMLElement>(".pub-source").forEach((el) => {
        const opacity = parseFloat(window.getComputedStyle(el).opacity);
        if (opacity < 0.55) {
          gsap.set(el, { clearProps: "opacity,visibility,transform" });
        }
      });
    }, 2600);

    const frame1 = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      window.requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    const onLoad = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") {
      window.setTimeout(onLoad, 0);
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      window.cancelAnimationFrame(frame1);
      window.removeEventListener("load", onLoad);
      window.clearTimeout(clearSourcesSafety);
      clearImageWait();
      clearScheduled();
      unbindRefresh();
      clearSafety();
      ctx.revert();
    };
  }, [rootRef, routeKey]);
}
