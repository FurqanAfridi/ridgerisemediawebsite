import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Shared motion environment helpers for GSAP + scroll animations. */

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isNarrowViewport(maxPx = 900) {
  if (typeof window === "undefined") return false;
  return window.matchMedia(`(max-width: ${maxPx}px)`).matches;
}

/** iOS URL bar resize thrash — keep ScrollTrigger stable on phones. */
export function configureScrollTriggerForDevices() {
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });
}

/** Schedule refreshes after layout / fonts / sticky sections settle. */
export function scheduleScrollTriggerRefresh(
  delays: number[] = [80, 400, 900, 1600],
) {
  const ids = delays.map((ms) =>
    window.setTimeout(() => ScrollTrigger.refresh(), ms),
  );
  return () => ids.forEach((id) => window.clearTimeout(id));
}

/** Bind resize / orientation / visualViewport listeners that refresh ST. */
export function bindScrollTriggerRefreshListeners() {
  let timer = 0;
  const refresh = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => ScrollTrigger.refresh(), 120);
  };

  window.addEventListener("resize", refresh);
  window.addEventListener("orientationchange", refresh);
  window.visualViewport?.addEventListener("resize", refresh);
  window.visualViewport?.addEventListener("scroll", refresh);

  return () => {
    window.clearTimeout(timer);
    window.removeEventListener("resize", refresh);
    window.removeEventListener("orientationchange", refresh);
    window.visualViewport?.removeEventListener("resize", refresh);
    window.visualViewport?.removeEventListener("scroll", refresh);
  };
}

/**
 * If a reveal tween never fires on mobile (IO / ST edge cases),
 * force key content visible so the page never looks "frozen empty".
 */
export function ensureMotionTargetsVisible(
  selectors: string[],
  delayMs = 2200,
) {
  const id = window.setTimeout(() => {
    selectors.forEach((sel) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        const opacity = window.getComputedStyle(el).opacity;
        if (opacity === "0") {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.filter = "none";
        }
      });
    });
  }, delayMs);
  return () => window.clearTimeout(id);
}
