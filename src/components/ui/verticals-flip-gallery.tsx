import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "@/data/site";
import { verticals } from "@/data/verticals";
import "./verticals-flip-gallery.css";

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger);

const featuredSlugs = [
  "auto-insurance",
  "health-insurance",
  "life-insurance",
  "personal-injury",
  "solar",
  "medicare-advantage",
  "hvac",
  "debt-settlement",
] as const;

const cards = featuredSlugs.map((slug, index) => {
  const vertical = verticals.find((item) => item.slug === slug) ?? verticals[index];
  return {
    ...vertical,
    src: assets.verticals[index % assets.verticals.length],
  };
});

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function waitForImages(root: HTMLElement) {
  const images = Array.from(root.querySelectorAll("img"));
  return Promise.all(
    images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete && img.naturalWidth > 0) {
            resolve();
            return;
          }
          const done = () => resolve();
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
        }),
    ),
  );
}

/**
 * Scrubbed bento gallery — CodePen GreenSock/vYMzKZx pattern:
 * Flip layout from compact bento → expanded tiles, driven by ScrollTrigger scrub + pin.
 */
export default function VerticalsFlipGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const gallery = galleryRef.current;
      if (!wrap || !gallery) return;

      if (prefersReducedMotion()) {
        gallery.classList.add("gallery--final");
        return;
      }

      let flipCtx: gsap.Context | undefined;
      let resizeTimer = 0;
      let cancelled = false;

      const createTween = () => {
        const items = gsap.utils.toArray<HTMLElement>(
          gallery.querySelectorAll(".gallery__item"),
        );
        if (!items.length) return;

        flipCtx?.revert();
        gallery.classList.remove("gallery--final");

        // CodePen pattern: capture FINAL state, then flip from current → final on scrub
        flipCtx = gsap.context(() => {
          gallery.classList.add("gallery--final");
          const state = Flip.getState(items);
          gallery.classList.remove("gallery--final");

          const flip = Flip.to(state, {
            simple: true,
            // scrubbed Flip: linear mapping to scroll (ScrollTrigger skill)
            ease: "none",
          });

          gsap.timeline({
            scrollTrigger: {
              id: "verticals-flip",
              trigger: gallery,
              start: "center center",
              end: "+=100%",
              scrub: true,
              pin: wrap,
              // Escape overflow-x:clip ancestors (.page / .home-main) so pin works
              pinReparent: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              refreshPriority: -1,
            },
          }).add(flip);

          return () => {
            gsap.set(items, { clearProps: "all" });
          };
        }, wrap);
      };

      const boot = async () => {
        await waitForImages(gallery);
        if (cancelled) return;
        createTween();
        ScrollTrigger.refresh();
      };

      void boot();

      const onResize = () => {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          createTween();
          ScrollTrigger.refresh();
        }, 200);
      };

      window.addEventListener("resize", onResize);

      return () => {
        cancelled = true;
        window.clearTimeout(resizeTimer);
        window.removeEventListener("resize", onResize);
        flipCtx?.revert();
        ScrollTrigger.getById("verticals-flip")?.kill();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="verticals vfg-section"
      aria-labelledby="vfg-heading"
    >
      <span className="rocket-marker rocket-marker--c" data-rocket-marker />
      <div className="verticals__intro">
        <h2 id="vfg-heading" className="section-title section-title--md">
          One Platform. Every High-Intent Vertical.
        </h2>
        <p className="section-sub section-sub--sm">
          Insurance is our specialty — but our network runs deep across
          performance-driven industries. Hover a tile, then scroll to zoom.
        </p>
      </div>

      {/* CodePen: .gallery-wrap — pinned parent */}
      <div className="gallery-wrap vfg-wrap" ref={wrapRef}>
        {/* CodePen: .gallery.gallery--bento — Flip target; .gallery--final toggled for state */}
        <div
          className="vfg gallery--bento"
          id="gallery-verticals"
          ref={galleryRef}
        >
          {cards.map((card) => (
            <div key={card.slug} className="gallery__item vfg__item">
              <img src={card.src} alt="" />
              <div className="vfg__overlay">
                <span className="vfg__category">{card.category}</span>
                <h3 className="vfg__name">{card.name}</h3>
                <p className="vfg__desc">{card.summary}</p>
                <div className="vfg__actions">
                  <Link
                    to={`/verticals/${card.slug}`}
                    className="btn btn--mint vfg__cta"
                  >
                    Explore {card.name}
                  </Link>
                  <Link to="/contact" className="btn btn--purple vfg__cta">
                    Get matched
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-hero__ctas vfg-outro">
        <Link to="/verticals" className="btn btn--purple">
          Explore All Verticals
        </Link>
      </div>
    </section>
  );
}
