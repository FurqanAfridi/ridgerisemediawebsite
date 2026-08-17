import "./vertical-card-art.css";

type VerticalCardArtProps = {
  slug: string;
  active?: boolean;
};

export function VerticalCardArt({ slug, active = false }: VerticalCardArtProps) {
  return (
    <div
      className={
        active ? "vert-art vert-art--active" : "vert-art"
      }
      aria-hidden="true"
      data-slug={slug}
    >
      {scene(slug)}
    </div>
  );
}

function scene(slug: string) {
  switch (slug) {
    case "auto-insurance":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <path className="va-road" d="M0 148h320" />
          <path className="va-dash" d="M0 148h320" />
          <g className="va-car">
            <rect x="96" y="104" width="92" height="28" rx="8" fill="#5d62dd" />
            <path d="M112 104h28l12-18h28l10 18" fill="#8b68e5" />
            <circle cx="118" cy="136" r="10" fill="#1a1a1a" />
            <circle cx="118" cy="136" r="5" className="va-wheel" fill="#c4b5fd" />
            <circle cx="168" cy="136" r="10" fill="#1a1a1a" />
            <circle cx="168" cy="136" r="5" className="va-wheel" fill="#c4b5fd" />
          </g>
        </svg>
      );
    case "health-insurance":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <path
            className="va-ekg"
            d="M20 110h54l10-28 16 62 14-78 12 44h174"
          />
          <circle className="va-pulse-dot" cx="126" cy="110" r="6" fill="#45e9b5" />
        </svg>
      );
    case "life-insurance":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <path
            className="va-shield"
            d="M160 28l58 22v46c0 36-24 62-58 76-34-14-58-40-58-76V50z"
          />
          <path
            className="va-heart"
            d="M160 92c-10-18-36-12-36 8 0 22 36 40 36 40s36-18 36-40c0-20-26-26-36-8z"
          />
        </svg>
      );
    case "home-insurance":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <g className="va-house">
            <path d="M86 108l74-52 74 52v56H86z" fill="rgba(255,255,255,0.88)" />
            <path d="M86 108l74-52 74 52" fill="none" stroke="#5d62dd" strokeWidth="5" />
            <rect x="138" y="118" width="44" height="46" rx="3" fill="#8b68e5" />
            <rect className="va-window" x="102" y="118" width="22" height="18" rx="2" />
            <rect className="va-window" x="196" y="118" width="22" height="18" rx="2" />
          </g>
        </svg>
      );
    case "medicare-advantage":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <circle className="va-ring" cx="160" cy="96" r="46" />
          <rect x="148" y="64" width="24" height="64" rx="4" fill="#45e9b5" />
          <rect x="128" y="86" width="64" height="24" rx="4" fill="#45e9b5" />
        </svg>
      );
    case "final-expense":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <circle className="va-glow" cx="160" cy="92" r="50" />
          <path
            d="M160 48c18 0 32 12 32 28 0 22-32 44-32 44s-32-22-32-44c0-16 14-28 32-28z"
            fill="#7aecc8"
          />
          <circle cx="160" cy="74" r="8" fill="#fff" />
        </svg>
      );
    case "personal-injury":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <g className="va-gavel">
            <rect x="86" y="108" width="92" height="14" rx="4" fill="#4c1678" transform="rotate(-18 132 115)" />
            <rect x="168" y="72" width="70" height="22" rx="6" fill="#8b68e5" transform="rotate(-18 203 83)" />
            <rect x="198" y="128" width="64" height="10" rx="3" fill="#5d62dd" />
          </g>
        </svg>
      );
    case "mass-tort":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <g className="va-docs">
            <rect x="118" y="86" width="84" height="64" rx="6" fill="#fff" />
            <rect x="128" y="76" width="84" height="64" rx="6" fill="#eef5ff" />
            <rect x="138" y="66" width="84" height="64" rx="6" fill="#fff" />
            <path d="M152 86h56M152 100h48M152 114h40" stroke="#8b68e5" strokeWidth="4" />
          </g>
        </svg>
      );
    case "debt-settlement":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <circle className="va-coin va-coin--a" cx="132" cy="78" r="22" fill="#fbbf24" />
          <circle className="va-coin va-coin--b" cx="168" cy="102" r="22" fill="#f59e0b" />
          <circle className="va-coin va-coin--c" cx="150" cy="124" r="22" fill="#fcd34d" />
          <text x="144" y="130" fontSize="16" fontWeight="700" fill="#7c2d12">$</text>
        </svg>
      );
    case "solar":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <g className="va-sun">
            <circle cx="230" cy="48" r="18" fill="#fbbf24" />
            <g className="va-rays" stroke="#fbbf24" strokeWidth="3">
              <path d="M230 18v10M230 68v10M200 48h10M250 48h10M209 27l7 7M244 62l7 7M209 69l7-7M244 34l7-7" />
            </g>
          </g>
          <g className="va-panel">
            <rect x="70" y="92" width="130" height="52" rx="4" transform="skewX(-12)" fill="#0f766e" />
            <path d="M78 104h100M78 116h100M78 128h100M96 96v44M128 96v44M160 96v44" stroke="#99f6e4" strokeWidth="2" />
          </g>
        </svg>
      );
    case "hvac":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <circle cx="160" cy="96" r="48" fill="rgba(255,255,255,0.8)" />
          <g className="va-fan">
            <circle cx="160" cy="96" r="8" fill="#0ea5e9" />
            <path d="M160 96c18-28 40-28 40 0-18 8-32 8-40 0z" fill="#38bdf8" />
            <path d="M160 96c18 28 40 28 40 0-18-8-32-8-40 0z" fill="#0284c7" transform="rotate(120 160 96)" />
            <path d="M160 96c18 28 40 28 40 0-18-8-32-8-40 0z" fill="#7dd3fc" transform="rotate(240 160 96)" />
          </g>
        </svg>
      );
    case "roofing":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <path d="M60 120l100-64 100 64v20H60z" fill="#eb807b" />
          <path d="M70 120l90-56 90 56" fill="none" stroke="#fff" strokeWidth="3" />
          <g className="va-rain">
            <path d="M92 40l-6 16M128 28l-6 16M164 36l-6 16M200 24l-6 16M236 40l-6 16" />
          </g>
        </svg>
      );
    case "home-security":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <circle className="va-radar" cx="160" cy="96" r="54" />
          <circle className="va-radar va-radar--mid" cx="160" cy="96" r="32" />
          <path className="va-sweep" d="M160 96l48-28" />
          <circle cx="160" cy="96" r="8" fill="#45e9b5" />
        </svg>
      );
    case "mortgage":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <g className="va-key">
            <circle cx="128" cy="96" r="22" fill="none" stroke="#fbbf24" strokeWidth="8" />
            <rect x="148" y="88" width="86" height="16" rx="4" fill="#f59e0b" />
            <rect x="206" y="88" width="8" height="28" fill="#f59e0b" />
            <rect x="220" y="88" width="8" height="22" fill="#f59e0b" />
          </g>
        </svg>
      );
    case "tax-relief":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <rect x="108" y="48" width="104" height="112" rx="8" fill="#fff" />
          <path d="M124 76h72M124 96h56M124 116h64" stroke="#8b68e5" strokeWidth="4" />
          <g className="va-stamp">
            <circle cx="196" cy="128" r="22" fill="none" stroke="#ef4444" strokeWidth="4" />
            <text x="180" y="134" fontSize="12" fontWeight="800" fill="#ef4444">IRS</text>
          </g>
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 320 180" className="vert-art__svg">
          <g className="va-cap">
            <path d="M80 88l80-36 80 36-80 28z" fill="#4c1678" />
            <path d="M160 116v28" stroke="#fbbf24" strokeWidth="4" className="va-tassel" />
            <circle cx="160" cy="148" r="6" fill="#fbbf24" />
            <path d="M112 96v28c16 12 80 12 96 0V96" fill="#5d62dd" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}
