import { Link } from "react-router-dom";
import { site } from "@/data/site";
import "./footer-sitemap.css";

const platformLinks = [
  { label: "Buy Calls & Leads", to: "/buyers" },
  { label: "Partner as a Publisher", to: "/publishers" },
  { label: "How It Works", to: "/about" },
  { label: "Verticals", to: "/verticals" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const transferLinks = [
  { label: "Health & Life Insurance", to: "/verticals/health-insurance" },
  { label: "Medicare Live Transfers", to: "/verticals/medicare-advantage" },
  { label: "Final Expense Leads", to: "/verticals/final-expense" },
  { label: "ACA Health Calls", to: "/verticals/health-insurance" },
  { label: "Home & Auto Insurance", to: "/verticals/auto-insurance" },
  { label: "Personal Injury Calls", to: "/verticals/personal-injury" },
] as const;

const inboundLinks = [
  { label: "Solar Leads", to: "/verticals/solar" },
  { label: "Home Services Leads", to: "/verticals/hvac" },
  { label: "Debt Relief Leads", to: "/verticals/debt-settlement" },
  { label: "Blog", to: "/blog" },
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
            Performance marketing for advertisers: qualified inbound calls,
            leads, and traffic on CPL and cost-per-call models.
          </p>
          <p className="footer-sitemap__note">
            In-house media buying plus a vetted partner network, with
            compliance-conscious, call-level tracking.
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
          </ul>
        </div>

        <div className="footer-sitemap__col">
          <h2 className="footer-sitemap__title">Contact &amp; Compliance</h2>
          <ul className="footer-sitemap__list">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
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
