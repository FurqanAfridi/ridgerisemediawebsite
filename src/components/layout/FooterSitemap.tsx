import { Link } from "react-router-dom";
import { site } from "@/data/site";
import "./footer-sitemap.css";

const platformLinks = [
  { label: "Buy Live Calls", to: "/buyers" },
  { label: "Sell Live Calls", to: "/publishers" },
  { label: "How It Works", to: "/about" },
  { label: "Verticals", to: "/verticals" },
  { label: "About Us", to: "/about" },
] as const;

const transferLinks = [
  { label: "Health & Life Insurance", to: "/verticals#health-insurance" },
  { label: "Medicare Live Transfers", to: "/verticals#medicare-advantage" },
  { label: "Final Expense Leads", to: "/verticals#final-expense" },
  { label: "ACA Health Calls", to: "/verticals#health-insurance" },
  { label: "Home & Auto Insurance", to: "/verticals#auto-insurance" },
  { label: "Pest Control Leads", to: "/verticals" },
] as const;

const inboundLinks = [
  { label: "Solar Leads", to: "/verticals#solar" },
  { label: "Home Services Leads", to: "/verticals#hvac" },
  { label: "Debt Relief Leads", to: "/verticals#debt-settlement" },
] as const;

const complianceLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
] as const;

export function FooterSitemap() {
  return (
    <section className="footer-sitemap" aria-label="Site directory">
      <div className="footer-sitemap__inner">
        <div className="footer-sitemap__col footer-sitemap__col--brand">
          <p className="footer-sitemap__brand">{site.name}</p>
          <p className="footer-sitemap__desc">
            Pay-per-call network connecting publishers with verified buyers
            across high-intent verticals.
          </p>
          <p className="footer-sitemap__note">
            Compliance-first live routing with real-time call tracking.
          </p>
        </div>

        <div className="footer-sitemap__col">
          <h2 className="footer-sitemap__title">Pay-Per-Call Platform</h2>
          <ul className="footer-sitemap__list">
            {platformLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-sitemap__col">
          <h2 className="footer-sitemap__title">Live Transfer Verticals</h2>
          <ul className="footer-sitemap__list">
            {transferLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-sitemap__col">
          <h2 className="footer-sitemap__title">Inbound Sales Leads</h2>
          <ul className="footer-sitemap__list">
            {inboundLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a href="/admin" className="footer-sitemap__admin">
                Admin Login
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-sitemap__col">
          <h2 className="footer-sitemap__title">Contact &amp; Compliance</h2>
          <ul className="footer-sitemap__list">
            <li>
              <span className="footer-sitemap__support">
                Support: <em>TBD</em>
              </span>
            </li>
            {complianceLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
