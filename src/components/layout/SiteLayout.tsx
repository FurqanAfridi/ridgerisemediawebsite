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
import "./footer-stack.css";

gsap.registerPlugin(ScrollTrigger);

export function SiteLayout({ children }: { children?: ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  usePageMotion(pageRef, location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);

  return (
    <div className="page" ref={pageRef}>
      {isHome ? <SiteLoader /> : null}
      <CloudField />
      <SiteHeader />
      <div className={`content-sheet${isHome ? "" : " content-sheet--inner"}`}>
        {children ?? <Outlet />}
      </div>
      <div className="footer-stack">
        <FooterSitemap />
        <CinematicFooter />
      </div>
    </div>
  );
}
