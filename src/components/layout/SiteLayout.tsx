import { useEffect, useRef, type ReactNode } from "react";
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

export function SiteLayout({ children }: { children?: ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Reset scroll locks / pin leftovers before page motion re-inits
  useEffect(() => {
    configureScrollTriggerForDevices();
    clearScrollLocks();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // Kill any triggers left behind by unmounted pages (e.g. pinned sections)
    ScrollTrigger.getAll().forEach((st) => {
      st.kill(true);
    });

    const id = window.setTimeout(() => {
      clearScrollLocks();
      ScrollTrigger.refresh();
    }, 40);

    const clearScheduled = scheduleScrollTriggerRefresh([120, 500, 1200]);

    return () => {
      window.clearTimeout(id);
      clearScheduled();
      clearScrollLocks();
    };
  }, [location.pathname]);

  usePageMotion(pageRef, location.pathname);

  return (
    <div className="page" ref={pageRef}>
      {isHome ? <SiteLoader /> : null}
      <CloudField />
      <SiteHeader />
      <div className={`content-sheet${isHome ? "" : " content-sheet--inner"}`}>
        {/* Force a clean remount so Motion/GSAP never leave opacity:0 leftovers */}
        <div key={location.pathname} className="content-sheet__route">
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
