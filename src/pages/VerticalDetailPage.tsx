import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import { getVerticalBySlug, verticals } from "@/data/verticals";
import { getVerticalGuide } from "@/data/vertical-guides";
import { site } from "@/data/site";
import { verticalSeo } from "@/data/seo";
import { verticalDetailFaqs } from "@/data/faqs";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
import "./pages.css";

export default function VerticalDetailPage() {
  const { slug } = useParams();
  const vertical = slug ? getVerticalBySlug(slug) : undefined;

  if (!vertical) {
    return <Navigate to="/verticals" replace />;
  }

  const guide = getVerticalGuide(vertical.slug);

  const related = verticals
    .filter(
      (item) =>
        item.slug !== vertical.slug && item.category === vertical.category,
    )
    .slice(0, 3);

  const fallbackRelated =
    related.length > 0
      ? related
      : verticals.filter((item) => item.slug !== vertical.slug).slice(0, 3);

  const faqs = verticalDetailFaqs(vertical.name);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${vertical.name} Pay Per Call & Leads`,
      description: vertical.description,
      url: `${site.url}/verticals/${vertical.slug}`,
      provider: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
      areaServed: "US",
      serviceType: "Pay-per-call marketing",
      category: vertical.category,
    },
    buildFaqJsonLd(faqs),
  ];

  return (
    <main>
      <Seo {...verticalSeo(vertical)} jsonLd={jsonLd} />

      <PageHero
        eyebrow={vertical.category}
        title={
          <>
            {vertical.name}{" "}
            <span className="grad-mint">pay per call & leads</span>
          </>
        }
        description={vertical.summary}
        primaryCta={{ label: "Start a test campaign", to: "/buyers" }}
        secondaryCta={{ label: "Apply as a partner", to: "/publishers" }}
      />

      <section className="inner-section">
        <figure className="vert-guide__media">
          <img
            src={`/assets/verticals/${vertical.slug}.webp`}
            alt=""
          />
        </figure>
        <article className="prose prose--guide">
          <p>{guide?.lede ?? vertical.description}</p>
          {guide?.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.heading}-${index}`}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>
        <ul className="fit-grid" style={{ marginTop: "var(--space-xl)" }}>
          <li className="fit-card">
            <span className="fit-card__label">Buyer fit</span>
            <p>{vertical.buyerFit}</p>
          </li>
          <li className="fit-card">
            <span className="fit-card__label">Publisher fit</span>
            <p>{vertical.publisherFit}</p>
          </li>
        </ul>
      </section>

      <section className="inner-section inner-section--band">
        <div className="inner-section__head">
          <h2 className="inner-section__title">Related verticals</h2>
          <p className="inner-section__sub">
            More {vertical.category} categories where we place calls, leads, and
            traffic.
          </p>
        </div>
        <ul className="card-grid">
          {fallbackRelated.map((item) => (
            <li key={item.slug}>
              <Link
                className="card-grid__item"
                to={`/verticals/${item.slug}`}
              >
                <span className="card-grid__meta">{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <span className="card-grid__link">View vertical →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FaqSection
        title={`${vertical.name} FAQ`}
        description={`Buying ${vertical.name} calls and leads. Models, qualification, and supply.`}
        items={faqs}
      />

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Need {vertical.name} calls or leads?</h2>
          <p>
            Tell us your states, hours, and how you define a qualified call.
            We&apos;ll talk CPL, cost per call, or traffic into your funnel.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact?role=buyer" className="btn btn--purple">
              Start a test campaign
            </Link>
            <Link to="/verticals" className="btn btn--mint">
              Browse verticals
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
