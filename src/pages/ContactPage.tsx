import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import { site } from "@/data/site";
import { contactFaqs } from "@/data/faqs";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
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
        description="Talk to RidgeRise about buying qualified inbound calls, leads, or traffic on CPL or cost per call. Publishers can apply as a partner. Tell us your brief."
        path="/contact"
        keywords={["contact RidgeRise Media", "buy pay per call", "apply publisher"]}
        jsonLd={buildFaqJsonLd(contactFaqs)}
      />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what you need{" "}
            <span className="grad-mint">on the phone</span>
          </>
        }
        description={`Buyers: vertical, states, hours, and what a qualified call looks like. Publishers: traffic type and verticals. Email ${site.email} or use the form. We review every serious inquiry.`}
      />

      <section className="inner-section">
        {submitted ? (
          <div className="contact-success">
            <h2>Thanks. We got your note.</h2>
            <p className="inner-section__sub" style={{ margin: 0 }}>
              Someone on the team will review what you sent and follow up. Need
              us sooner? Email{" "}
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
                placeholder="Auto Insurance, Solar, Personal Injury…"
              />
            </label>
            <label>
              How can we help?
              <textarea
                name="message"
                required
                placeholder={
                  defaultRole === "buyer"
                    ? "Buyer: vertical, states, hours, and how you define a qualified call…"
                    : `Publisher: traffic type and verticals, or describe what you're looking for as a ${roleLabel.toLowerCase()}…`
                }
              />
            </label>
            <button type="submit" className="btn btn--purple">
              Send message
            </button>
          </form>
        )}
      </section>

      <FaqSection
        title="Contact FAQ"
        description="What to include as a buyer or publisher, and how we follow up."
        items={contactFaqs}
      />
    </main>
  );
}
