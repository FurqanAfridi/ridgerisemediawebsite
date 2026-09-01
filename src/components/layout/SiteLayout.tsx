import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CloudField } from "@/components/CloudField";
import { SiteLoader } from "@/components/SiteLoader";
import { FooterSitemap } from "@/components/layout/FooterSitemap";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { usePageMotion } from "@/hooks/usePageMotion";
import {
  configureScrollTriggerForDevices,
  scheduleScrollTriggerRefresh,
} from "@/lib/motion-env";
import "./footer-stack.css";

gsap.registerPlugin(ScrollTrigger);

function clearScrollLocks() {
  document.documentElement.style.removeProperty("overflow");
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("height");
  document.body.style.removeProperty("width");
  document.body.style.removeProperty("padding-right");
  document.body.style.removeProperty("position");
  document.body.style.removeProperty("top");
}

function jumpToTop() {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  document.body.scrollTop = 0;
  html.style.scrollBehavior = previous;
}

export function SiteLayout({ children }: { children?: ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const routeKey = `${location.pathname}${location.search}`;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Reset scroll + tear down pinned triggers before paint (before child useEffects run)
  useLayoutEffect(() => {
    clearScrollLocks();
    jumpToTop();
    ScrollTrigger.getAll().forEach((st) => {
      st.kill(true);
    });
  }, [routeKey]);

  // Refresh layout after route swap — do not kill triggers here (runs after child effects)
  useEffect(() => {
    configureScrollTriggerForDevices();
    clearScrollLocks();
    jumpToTop();

    const frame = window.requestAnimationFrame(() => {
      jumpToTop();
      ScrollTrigger.refresh();
    });

    const id = window.setTimeout(() => {
      clearScrollLocks();
      jumpToTop();
      ScrollTrigger.refresh();
    }, 40);

    const lateId = window.setTimeout(jumpToTop, 160);

    const clearScheduled = scheduleScrollTriggerRefresh([120, 500, 1200]);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(id);
      window.clearTimeout(lateId);
      clearScheduled();
      clearScrollLocks();
    };
  }, [routeKey]);

  usePageMotion(pageRef, location.pathname);

  return (
    <div className="page" ref={pageRef}>
      {isHome ? <SiteLoader /> : null}
      <CloudField />
      <SiteHeader />
      <div className={`content-sheet${isHome ? "" : " content-sheet--inner"}`}>
        {/* Force a clean remount so Motion/GSAP never leave opacity:0 leftovers */}
        <div key={routeKey} className="content-sheet__route">
          {children ?? <Outlet />}
        </div>
      </div>
      <div className="footer-stack">
        <FooterSitemap />
        <CinematicFooter />
      </div>
    </div>
  );
}
