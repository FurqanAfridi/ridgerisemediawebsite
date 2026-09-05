import { Link } from "react-router-dom";
import { site, trustSignals } from "@/data/site";
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
            We buy our own media and add volume through screened partners. Call-level tracking on every campaign.
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

        <div className="footer-sitemap__col footer-sitemap__col--contact">
          <h2 className="footer-sitemap__title">Contact &amp; Compliance</h2>
          <div className="footer-sitemap__contact">
            <a className="footer-sitemap__contact-row" href={`mailto:${site.email}`}>
              <span className="footer-sitemap__contact-label">Email</span>
              <span className="footer-sitemap__contact-value">{site.email}</span>
            </a>
            <a className="footer-sitemap__contact-row" href={site.phoneHref}>
              <span className="footer-sitemap__contact-label">Phone</span>
              <span className="footer-sitemap__contact-value">{site.phone}</span>
            </a>
            <a
              className="footer-sitemap__contact-row"
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="footer-sitemap__contact-label">Office</span>
              <span className="footer-sitemap__contact-value">
                {site.addressLines[0]}
                <br />
                {site.addressLines[1]}
              </span>
            </a>
            {trustSignals.live && trustSignals.legalName ? (
              <p className="footer-sitemap__contact-legal">{trustSignals.legalName}</p>
            ) : null}
            {trustSignals.live
              ? trustSignals.leadership.map((person) => (
                  <a
                    key={person.name}
                    className="footer-sitemap__contact-row"
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="footer-sitemap__contact-label">Team</span>
                    <span className="footer-sitemap__contact-value">
                      {person.name}
                      {person.role ? ` · ${person.role}` : ""}
                    </span>
                  </a>
                ))
              : null}
          </div>
          <ul className="footer-sitemap__legal">
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
