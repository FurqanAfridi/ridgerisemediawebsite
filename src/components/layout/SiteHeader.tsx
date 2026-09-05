import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { assets, navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("logo", className)} aria-label="RidgeRise Media">
      <span className="logo__mark">
        <img src={assets.logoIcon} alt="RidgeRise Media logo" width={36} height={29} />
      </span>
      <span className="logo__wordmark">
        <img
          className="logo__text-top"
          src={assets.logoTextTop}
          alt=""
          width={56}
          height={12}
        />
        <img
          className="logo__text-bottom"
          src={assets.logoTextBottom}
          alt=""
          width={56}
          height={6}
        />
      </span>
      <img className="logo__dot" src={assets.logoDot} alt="" width={5} height={5} />
    </Link>
  );
}

export function SiteHeader() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">
      <nav
        className="header__nav"
        data-state={menuOpen ? "active" : "idle"}
        aria-label="Primary"
      >
        <div
          className={cn(
            "header__shell",
            isScrolled && "header__shell--scrolled",
          )}
        >
          <div className="header__bar">
            <div className="header__brand-row">
              <Logo />
              <div className="header__brand-actions">
                <ThemeToggle />
                <Link
                  to="/contact"
                  className="header__btn header__btn--solid header__btn--compact"
                  onClick={() => setMenuOpen(false)}
                >
                  Talk to our team
                </Link>
                <button
                  type="button"
                  className="header__menu-btn"
                  aria-expanded={menuOpen}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMenuOpen((open) => !open)}
                >
                  <Menu
                    className={cn(
                      "header__menu-icon",
                      menuOpen && "header__menu-icon--hide",
                    )}
                    size={22}
                  />
                  <X
                    className={cn(
                      "header__menu-icon header__menu-icon--close",
                      menuOpen && "header__menu-icon--show",
                    )}
                    size={22}
                  />
                </button>
              </div>
            </div>

            <ul className="header__links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn("header__link", isActive && "header__link--active")
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="header__actions">
              <div className="header__mobile-links">
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          cn(
                            "header__link",
                            isActive && "header__link--active",
                          )
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="header__cta-row">
                <Link
                  to="/publishers"
                  className="header__btn header__btn--ghost"
                  onClick={() => setMenuOpen(false)}
                >
                  Publishers
                </Link>
                <Link
                  to="/buyers"
                  className="header__btn header__btn--ghost"
                  onClick={() => setMenuOpen(false)}
                >
                  Buyers
                </Link>
                <Link
                  to="/contact"
                  className="header__btn header__btn--solid header__btn--get-started header__btn--desktop-only"
                  onClick={() => setMenuOpen(false)}
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
