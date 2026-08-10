import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import { getVerticalBySlug, verticals } from "@/data/verticals";
import { site } from "@/data/site";
import "./pages.css";

export default function VerticalDetailPage() {
  const { slug } = useParams();
  const vertical = slug ? getVerticalBySlug(slug) : undefined;

  if (!vertical) {
    return <Navigate to="/verticals" replace />;
  }

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${vertical.name} Pay-Per-Call`,
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
  };

  return (
    <main>
      <Seo
        title={`${vertical.name} Pay-Per-Call`}
        description={vertical.description}
        path={`/verticals/${vertical.slug}`}
        keywords={vertical.keywords}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow={vertical.category}
        title={
          <>
            {vertical.name}{" "}
            <span className="grad-mint">pay-per-call</span>
          </>
        }
        description={vertical.summary}
        primaryCta={{ label: "Buy this vertical", to: "/buyers" }}
        secondaryCta={{ label: "Sell this vertical", to: "/publishers" }}
      />

      <section className="inner-section inner-section--tight">
        <article className="prose">
          <p>{vertical.description}</p>
          <p>
            <strong>Buyer fit:</strong> {vertical.buyerFit}
          </p>
          <p>
            <strong>Publisher fit:</strong> {vertical.publisherFit}
          </p>
        </article>
      </section>

      <section className="inner-section">
        <div className="inner-section__head">
          <h2 className="inner-section__title">Related verticals</h2>
          <p className="inner-section__sub">
            Explore more high-intent categories in {vertical.category}.
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

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Ready for {vertical.name} volume?</h2>
          <p>
            Tell us whether you buy or sell calls and we will match you with
            RidgeRise campaigns fast.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--purple">
              Get matched
            </Link>
            <Link to="/verticals" className="btn btn--mint">
              All verticals
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
