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
            scrollTrigger: {
              trigger: flowBoard,
              start: narrow ? "top 75%" : "top 70%",
              end: "bottom 55%",
              scrub: 0.55,
            },
          },
        );

        flowSteps.forEach((step, index) => {
          ScrollTrigger.create({
            trigger: step,
            start: narrow ? "top 82%" : "top 68%",
            end: "bottom 42%",
            onEnter: () => syncFlowActive(index),
            onEnterBack: () => syncFlowActive(index),
          });

          gsap.fromTo(
            step,
            { autoAlpha: 0.35, y: narrow ? 24 : 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: step,
                start: narrow ? "top 90%" : "top 82%",
                once: true,
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

      if (teamsSection && teamsPin && teamsTrack && teamsStage) {
        const getScrollDistance = () =>
          Math.max(0, teamsTrack.scrollWidth - teamsStage.clientWidth);

        if (narrow) {
          gsap.from(teamCards, {
            y: 36,
            autoAlpha: 0,
            rotate: 2,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: teamsStage,
              start: "top 88%",
              once: true,
            },
          });

          if (teamsProgress) {
            gsap.fromTo(
              teamsProgress,
              { width: "0%" },
              {
                width: "100%",
                ease: "none",
                scrollTrigger: {
                  trigger: teamsSection,
                  start: "top 70%",
                  end: "bottom 45%",
                  scrub: 0.4,
                },
              },
            );
          }
        } else {
          gsap.set(teamCards, { y: 28, autoAlpha: 0.55, rotate: 1.5 });

          const teamsTl = gsap.timeline({
            scrollTrigger: {
              trigger: teamsSection,
              pin: teamsPin,
              pinSpacing: true,
              pinType: "fixed",
              start: "top top",
              end: () => `+=${Math.max(getScrollDistance() + 240, 1100)}`,
              scrub: 0.75,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              preventOverlaps: true,
              onUpdate: (self) => {
                if (teamsProgress) {
                  gsap.set(teamsProgress, { width: `${self.progress * 100}%` });
                }
              },
            },
          });

          teamsTl
            .to(
              teamCards,
              {
                y: 0,
                autoAlpha: 1,
                rotate: 0,
                stagger: 0.06,
                duration: 0.35,
                ease: "power2.out",
              },
              0,
            )
            .to(
              teamsTrack,
              {
                x: () => -getScrollDistance(),
                ease: "none",
                duration: 1,
              },
              0.08,
            );
        }
      }
    }, root);

    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 150);

    return () => {
      window.clearTimeout(refreshId);
      ctx.revert();
    };
  }, [rootRef]);
}
