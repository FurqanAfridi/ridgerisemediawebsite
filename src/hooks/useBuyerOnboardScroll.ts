import { useEffect, type RefObject } from "react";

const DESKTOP_MQ = "(min-width: 1024px)";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function useBuyerOnboardScroll(
  sectionRef: RefObject<HTMLElement | null>,
  trackRef: RefObject<HTMLElement | null>,
  progressRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!section || !track) return;

    const desktopMq = window.matchMedia(DESKTOP_MQ);
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    let raf = 0;

    const setMode = () => {
      const stacked = reduceMq.matches;
      const scrollPin = desktopMq.matches && !reduceMq.matches;
      const snap = !desktopMq.matches && !reduceMq.matches;

      section.classList.toggle("buy-onboard--stacked", stacked);
      section.classList.toggle("buy-onboard--scroll", scrollPin);
      section.classList.toggle("buy-onboard--snap", snap);

      if (!scrollPin) {
        track.style.transform = "";
        if (progress) progress.style.width = "";
      }
    };

    const updateDesktop = () => {
      if (!desktopMq.matches || reduceMq.matches) return;

      const spacer = section.querySelector<HTMLElement>(".buy-onboard__spacer");
      const viewport = section.querySelector<HTMLElement>(
        ".buy-onboard__viewport",
      );
      if (!spacer || !viewport) return;

      const maxTravel = Math.max(
        0,
        track.scrollWidth - viewport.clientWidth,
      );
      const scrollRange = Math.min(
        Math.max(maxTravel + window.innerHeight * 0.35, window.innerHeight),
        window.innerHeight * 2,
      );

      spacer.style.setProperty("--buy-onboard-scroll", `${scrollRange}px`);

      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const raw = (window.scrollY - sectionTop) / scrollRange;
      const t = clamp(raw, 0, 1);

      track.style.transform = `translate3d(${-t * maxTravel}px, 0, 0)`;
      if (progress) {
        progress.style.width = `${t * 100}%`;
        const bar = progress.closest<HTMLElement>('[role="progressbar"]');
        if (bar) {
          bar.setAttribute("aria-valuenow", String(Math.round(t * 100)));
        }
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(updateDesktop);
    };

    const onResize = () => {
      setMode();
      updateDesktop();
    };

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const card = target.closest<HTMLElement>(".buy-onboard__card");
      if (!card || !track.contains(card)) return;

      const viewport = section.querySelector<HTMLElement>(
        ".buy-onboard__viewport",
      );
      if (!viewport) return;

      if (!desktopMq.matches || reduceMq.matches) {
        const cardLeft = card.offsetLeft;
        const cardRight = cardLeft + card.offsetWidth;
        const viewLeft = viewport.scrollLeft;
        const viewRight = viewLeft + viewport.clientWidth;

        if (cardLeft < viewLeft) {
          viewport.scrollTo({ left: cardLeft, behavior: "smooth" });
        } else if (cardRight > viewRight) {
          viewport.scrollTo({
            left: cardRight - viewport.clientWidth,
            behavior: "smooth",
          });
        }
        return;
      }

      const cards = Array.from(
        track.querySelectorAll<HTMLElement>(".buy-onboard__card"),
      );
      const index = cards.indexOf(card);
      if (index < 0) return;

      const spacer = section.querySelector<HTMLElement>(".buy-onboard__spacer");
      if (!spacer) return;

      const scrollRange =
        parseFloat(
          getComputedStyle(spacer).getPropertyValue("--buy-onboard-scroll"),
        ) || window.innerHeight * 1.5;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;
      const t = cards.length > 1 ? index / (cards.length - 1) : 0;

      window.scrollTo({
        top: sectionTop + t * scrollRange,
        behavior: reduceMq.matches ? "auto" : "smooth",
      });
    };

    setMode();
    updateDesktop();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    desktopMq.addEventListener("change", onResize);
    reduceMq.addEventListener("change", onResize);
    section.addEventListener("focusin", onFocusIn);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      desktopMq.removeEventListener("change", onResize);
      reduceMq.removeEventListener("change", onResize);
      section.removeEventListener("focusin", onFocusIn);
    };
  }, [sectionRef, trackRef, progressRef]);
}
