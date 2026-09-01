import { Link } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { site } from "@/data/site";
import "@/pages/pages.css";

export default function PrivacyPage() {
  return (
    <main>
      <Seo {...pageSeo.privacy} />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains what information RidgeRise Media collects, why we collect it, how we use and protect it, and what choices you have."
      />
      <section className="inner-section">
        <div className="prose">
          <p>
            <strong>Effective date:</strong> January 1, 2026
            <br />
            <strong>Last updated:</strong> August 18, 2026
          </p>

          <h2>Who we are</h2>
          <p>
            RidgeRise Media ("{site.name}," "we," "us," or "our") operates a
            performance marketing platform at{" "}
            <a href={site.url}>{site.url}</a>. We connect advertisers (buyers)
            who purchase qualified inbound calls, leads, and traffic with
            publishers (partners) who supply that demand. This privacy policy
            applies to all visitors, buyers, publishers, and users of our
            website and services.
          </p>

          <h2>Information we collect</h2>
          <p>We collect the following categories of information:</p>
          <ul>
            <li>
              <strong>Contact information:</strong> Name, email address, phone
              number, and company name that you provide when you fill out a
              contact form, apply as a partner, or request campaign information.
            </li>
            <li>
              <strong>Business information:</strong> Vertical interests, traffic
              types, geographic preferences, and campaign requirements you share
              with us during onboarding or campaign setup.
            </li>
            <li>
              <strong>Call and campaign data:</strong> Call tracking metadata
              including call duration, timestamps, source identifiers, and
              disposition outcomes for calls routed through our platform.
            </li>
            <li>
              <strong>Website usage data:</strong> Pages visited, time on site,
              browser type, device type, IP address, and referring URL. This is
              collected through standard analytics tools and server logs.
            </li>
            <li>
              <strong>Cookies and similar technologies:</strong> We use cookies
              and local storage to remember your preferences (such as theme
              settings) and to understand how visitors use the site.
            </li>
          </ul>

          <h2>Why we collect this information</h2>
          <p>We use the information we collect for these purposes:</p>
          <ul>
            <li>
              To operate our platform: matching buyer demand with publisher
              supply, routing calls, tracking campaign performance, and
              processing payouts.
            </li>
            <li>
              To respond to inquiries you submit through our contact forms or
              email.
            </li>
            <li>
              To evaluate publisher applications and buyer campaign fit.
            </li>
            <li>
              To monitor call quality, enforce campaign rules, and resolve
              disputes between buyers and publishers.
            </li>
            <li>
              To improve our website, understand usage patterns, and fix
              technical issues.
            </li>
            <li>
              To comply with legal obligations and protect our rights.
            </li>
          </ul>

          <h2>How we share information</h2>
          <p>
            We do not sell your personal information. We share information only
            in these circumstances:
          </p>
          <ul>
            <li>
              <strong>Between buyers and publishers:</strong> Campaign-related
              data (call metadata, disposition, source identifiers) is shared
              between the parties involved in a campaign so both sides can track
              performance and resolve quality questions.
            </li>
            <li>
              <strong>Service providers:</strong> We use third-party tools for
              analytics, email, hosting, and call tracking. These providers
              access data only to perform services on our behalf and are bound
              by their own privacy obligations.
            </li>
            <li>
              <strong>Legal requirements:</strong> We may disclose information
              if required by law, regulation, legal process, or government
              request.
            </li>
          </ul>

          <h2>Data retention</h2>
          <p>
            We retain contact and business information for as long as your
            account or business relationship is active, plus a reasonable period
            afterward for record-keeping, legal compliance, and dispute
            resolution. Call tracking data is retained for the duration needed
            to support campaign reporting and quality review. You can request
            deletion of your information by contacting us.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            Our website uses cookies and local storage for functional purposes
            (such as saving your theme preference) and analytics (understanding
            page traffic and user behavior). You can control cookies through
            your browser settings. Disabling cookies may affect some site
            functionality.
          </p>

          <h2>Your rights and choices</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your personal information.</li>
            <li>Opt out of certain data processing activities.</li>
            <li>Withdraw consent where processing is based on consent.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the information
            below.
          </p>

          <h2>Security</h2>
          <p>
            We use commercially reasonable measures to protect the information
            we collect, including encrypted connections (HTTPS), access
            controls, and secure hosting. No method of transmission or storage
            is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>Children's privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18.
            We do not knowingly collect personal information from children. If
            you believe we have collected information from a minor, please
            contact us and we will delete it promptly.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this privacy policy from time to time. Changes will
            be posted on this page with an updated "Last updated" date. We
            encourage you to review this page periodically.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have questions about this privacy policy or how we handle
            your information, contact us at:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              Phone:{" "}
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              Or use our{" "}
              <Link to="/contact">contact page</Link>.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
