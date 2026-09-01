import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion-env";

export function bindOnboardingJourneyMotion(
  root: HTMLElement,
  narrow: boolean,
) {
  if (prefersReducedMotion()) {
    root
      .querySelectorAll(".buy-flow__step, .buy-flow__toc-item")
      .forEach((el) => el.classList.add("is-active", "is-done"));
    return;
  }

  gsap.utils
    .toArray<HTMLElement>(".buy-flow__sticky > *")
    .forEach((el) => {
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

  if (!flowBoard || !railFill || !flowSteps.length) return;

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
