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

export function useBuyerMotion(
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
            ".buy-queue",
            ".buy-mock",
            ".buy-chart__bar",
            ".buy-filter__fill",
            ".buy-flow__rail-fill",
            ".buy-flow__step",
            ".buy-flow__toc-item",
            ".buy-teams__track",
            ".buy-teams__progress-fill",
            ".buy-teams__card",
          ],
          { clearProps: "all" },
        );
        root
          .querySelectorAll(".buy-flow__step, .buy-flow__toc-item")
          .forEach((el) => el.classList.add("is-active", "is-done"));
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
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              start: narrow ? "top 94%" : "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".buy-mock").forEach((el) => {
        gsap.to(el, {
          y: narrow ? -8 : -14,
          duration: 3.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      gsap.utils.toArray<HTMLElement>(
        ".buy-flow__sticky > *, .buy-teams__head > *",
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
          },
        });
      });

      const flowBoard = root.querySelector<HTMLElement>(".buy-flow__board");
      const railFill = root.querySelector<HTMLElement>(".buy-flow__rail-fill");
      const flowSteps = gsap.utils.toArray<HTMLElement>(".buy-flow__step");
      const tocItems = gsap.utils.toArray<HTMLElement>(".buy-flow__toc-item");

      const syncFlowActive = (index: number) => {
        flowSteps.forEach((step, i) => {
          step.classList.toggle("is-active", i === index);
          step.classList.toggle("is-done", i < index);
        });
        tocItems.forEach((item, i) => {
          item.classList.toggle("is-active", i === index);
          item.classList.toggle("is-done", i < index);
        });
      };

      if (flowBoard && railFill && flowSteps.length) {
        syncFlowActive(0);

        gsap.fromTo(
          railFill,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: flowBoard,
              start: narrow ? "top 78%" : "top 72%",
              end: "bottom 50%",
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          },
        );

        flowSteps.forEach((step, index) => {
          ScrollTrigger.create({
            trigger: step,
            start: narrow ? "top 85%" : "top 70%",
            end: "bottom 40%",
            invalidateOnRefresh: true,
            onEnter: () => syncFlowActive(index),
            onEnterBack: () => syncFlowActive(index),
          });

          gsap.fromTo(
            step,
            { autoAlpha: 0.4, y: narrow ? 20 : 32 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: step,
                start: narrow ? "top 92%" : "top 85%",
                once: true,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      }

      const teamsSection = root.querySelector<HTMLElement>(".buy-teams");
      const teamsPin = root.querySelector<HTMLElement>(".buy-teams__pin");
      const teamsTrack = root.querySelector<HTMLElement>(".buy-teams__track");
      const teamsStage = root.querySelector<HTMLElement>(".buy-teams__stage");
      const teamsProgress = root.querySelector<HTMLElement>(
        ".buy-teams__progress-fill",
      );
      const teamCards = gsap.utils.toArray<HTMLElement>(".buy-teams__card");

      if (teamsSection && teamsPin && teamsTrack && teamsStage && teamCards.length) {
        const getScrollDistance = () =>
          Math.max(0, teamsTrack.scrollWidth - teamsStage.clientWidth);

        if (narrow) {
          gsap.from(teamCards, {
            y: 32,
            autoAlpha: 0,
            rotate: 1.5,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: teamsStage,
              start: "top 90%",
              once: true,
              invalidateOnRefresh: true,
            },
          });

          if (teamsProgress) {
            gsap.fromTo(
              teamsProgress,
              { width: "0%" },
              {
                width: "100%",
                ease: "none",
                immediateRender: false,
                scrollTrigger: {
                  trigger: teamsSection,
                  start: "top 75%",
                  end: "bottom 40%",
                  scrub: 0.35,
                  invalidateOnRefresh: true,
                },
              },
            );
          }
        } else {
          const teamsTl = gsap.timeline({
            scrollTrigger: {
              trigger: teamsSection,
              pin: teamsPin,
              pinSpacing: true,
              pinType: "fixed",
              start: "top top",
              end: () => `+=${Math.max(getScrollDistance() + 280, 1200)}`,
              scrub: 0.55,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              fastScrollEnd: true,
              preventOverlaps: true,
              onUpdate: (self) => {
                if (teamsProgress) {
                  gsap.set(teamsProgress, { width: `${self.progress * 100}%` });
                }
              },
            },
          });

          teamsTl
            .fromTo(
              teamCards,
              { y: 24, autoAlpha: 0.5, rotate: 1.2 },
              {
                y: 0,
                autoAlpha: 1,
                rotate: 0,
                stagger: 0.05,
                duration: 0.32,
                ease: "power2.out",
                immediateRender: false,
              },
              0,
            )
            .fromTo(
              teamsTrack,
              { x: 0 },
              {
                x: () => -getScrollDistance(),
                ease: "none",
                duration: 1,
                immediateRender: false,
              },
              0.06,
            );
        }
      }
    }, root);

    const clearImageWait = refreshAfterImages(root);
    const clearScheduled = scheduleScrollTriggerRefresh([80, 350, 800, 1400, 2200]);
    const unbindRefresh = bindScrollTriggerRefreshListeners();
    const clearSafety = ensureMotionTargetsVisible([
      ".buy-flow__step",
      ".buy-flow__card",
      ".buy-teams__card",
      ".buy-teams__track",
    ]);

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
      clearImageWait();
      clearScheduled();
      unbindRefresh();
      clearSafety();
      ctx.revert();
    };
  }, [rootRef, routeKey]);
}
