import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import { site } from "@/data/site";
import "./pages.css";

export default function ContactPage() {
  const [params] = useSearchParams();
  const defaultRole = params.get("role") === "buyer" ? "buyer" : params.get("role") === "publisher" ? "publisher" : "publisher";
  const [submitted, setSubmitted] = useState(false);

  const roleLabel = useMemo(() => {
    if (defaultRole === "buyer") return "Buyer / Advertiser";
    return "Publisher";
  }, [defaultRole]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <Seo
        title="Contact RidgeRise Media"
        description="Contact RidgeRise Media to apply as a publisher, buy pay-per-call traffic, or ask about Insurance, Legal, Home Services, and Finance campaigns."
        path="/contact"
        keywords={["contact RidgeRise Media", "apply publisher", "buy call leads"]}
      />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s match you to the right{" "}
            <span className="grad-mint">campaigns</span>
          </>
        }
        description={`Tell us whether you buy or sell calls. Email ${site.email} or use the form — we typically respond within one business day.`}
      />

      <section className="inner-section">
        {submitted ? (
          <div className="contact-success">
            <h2>Thanks — we got your note.</h2>
            <p className="inner-section__sub" style={{ margin: 0 }}>
              Our team will review your details and follow up shortly. Prefer to
              reach us now? Email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
              <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              I am a
              <select name="role" defaultValue={defaultRole} required>
                <option value="publisher">Publisher</option>
                <option value="buyer">Buyer / Advertiser</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Full name
              <input name="name" type="text" required placeholder="Alex Rivera" />
            </label>
            <label>
              Work email
              <input
                name="email"
                type="email"
                required
                placeholder="alex@company.com"
              />
            </label>
            <label>
              Company
              <input name="company" type="text" placeholder="Company name" />
            </label>
            <label>
              Verticals of interest
              <input
                name="verticals"
                type="text"
                placeholder="Auto Insurance, Solar, Legal…"
              />
            </label>
            <label>
              How can we help?
              <textarea
                name="message"
                required
                placeholder={`I'm a ${roleLabel.toLowerCase()} looking to…`}
              />
            </label>
            <button type="submit" className="btn btn--purple">
              Send message
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
