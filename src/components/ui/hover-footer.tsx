import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import "./hover-footer.css";

/** RidgeRise brand palette */
const BRAND = {
  purple: "#5d62dd",
  purpleDeep: "#4c1678",
  mint: "#45e9b5",
  mintDeep: "#2ae2a8",
  accent: "#8b68e5",
} as const;

function IconFacebook({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.6-3 3.5V12H8v3h3v7h3v-7h3.1l.9-3H14V9.5c0-.3.2-.5.5-.5z" />
    </svg>
  );
}

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconX({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.828l-4.35-5.68L5.66 22H3l6.98-7.97L2 2h7l3.94 5.22L18.244 2zm-1.2 18h1.86L7.03 3.94H5.05L17.044 20z" />
    </svg>
  );
}

function IconLinkedIn({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.94 8.5H4V20h2.94V8.5zM5.47 7.1a1.71 1.71 0 1 0 0-3.42 1.71 1.71 0 0 0 0 3.42zM20 20h-2.93v-5.6c0-1.33-.48-2.24-1.68-2.24-.92 0-1.46.62-1.7 1.22-.09.21-.11.5-.11.8V20H10.6s.04-9.55 0-10.54h2.94v1.49c.39-.6 1.09-1.46 2.66-1.46 1.94 0 3.4 1.27 3.4 4V20z" />
    </svg>
  );
}

export function TextHoverEffect({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("hf-hover-text", className)}
    >
      <defs>
        <linearGradient
          id="rrTextGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor={BRAND.mint} />
              <stop offset="35%" stopColor={BRAND.purple} />
              <stop offset="70%" stopColor={BRAND.accent} />
              <stop offset="100%" stopColor={BRAND.mintDeep} />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="rrRevealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="rrTextMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#rrRevealMask)"
          />
        </mask>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="hf-hover-text__ghost"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>

      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="hf-hover-text__outline"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#rrTextGradient)"
        strokeWidth="0.3"
        mask="url(#rrTextMask)"
        className="hf-hover-text__fill"
      >
        {text}
      </text>
    </svg>
  );
}

export function FooterBackgroundGradient() {
  return <div className="hf-bg" aria-hidden="true" />;
}

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Verticals", href: "#verticals" },
      { label: "Publishers", href: "#publishers" },
      { label: "Buyers", href: "#buyers" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Signup as Publisher", href: "#publishers" },
      { label: "Signup as Buyer", href: "#buyers" },
      { label: "Explore Verticals", href: "#verticals", pulse: true },
      { label: "Contact us", href: "#contact" },
    ],
  },
];

const contactInfo = [
  {
    icon: Mail,
    text: "info@ridgerisemedia.com",
    href: "mailto:info@ridgerisemedia.com",
  },
  {
    icon: Phone,
    text: "+1 (888) 555-0142",
    href: "tel:+18885550142",
  },
  {
    icon: MapPin,
    text: "United States · Pay Per Call Media Buyer",
  },
];

const socialLinks: Array<{
  icon: ReactNode;
  label: string;
  href: string;
}> = [
  { icon: <IconFacebook />, label: "Facebook", href: "#" },
  { icon: <IconInstagram />, label: "Instagram", href: "#" },
  { icon: <IconX />, label: "X", href: "#" },
  { icon: <IconLinkedIn />, label: "LinkedIn", href: "#" },
  { icon: <Globe size={20} />, label: "Website", href: "#" },
];

export default function HoverFooter() {
  return (
    <footer className="hf" id="footer">
      <div className="hf__inner">
        <div className="hf__grid">
          <div className="hf__brand">
            <div className="hf__logo">
              <span className="hf__logo-mark" aria-hidden="true">
                R
              </span>
              <span className="hf__logo-name">RidgeRise Media</span>
            </div>
            <p className="hf__tagline">
              Connecting top Publishers with verified Buyers across Insurance,
              Home Services, Legal, and 12+ high-intent verticals. Real-time
              tracking, fast payouts, zero games.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="hf__col">
              <h4 className="hf__heading">{section.title}</h4>
              <ul className="hf__list">
                {section.links.map((link) => (
                  <li key={link.label} className="hf__list-item">
                    <a href={link.href} className="hf__link">
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="hf__pulse" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="hf__col">
            <h4 className="hf__heading">Contact Us</h4>
            <ul className="hf__contact">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="hf__contact-item">
                    <Icon size={18} className="hf__contact-icon" aria-hidden />
                    {item.href ? (
                      <a href={item.href} className="hf__link">
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <hr className="hf__rule" />

        <div className="hf__bottom">
          <div className="hf__social">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hf__social-link"
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="hf__copy">
            &copy; {new Date().getFullYear()} RidgeRise Media. All rights
            reserved.
          </p>
        </div>
      </div>

      <div className="hf__effect">
        <TextHoverEffect text="RIDGERISE" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
