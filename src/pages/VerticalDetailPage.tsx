import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import { getVerticalBySlug, verticals } from "@/data/verticals";
import { getVerticalGuide } from "@/data/vertical-guides";
import {
  relatedBlogForVertical,
  verticalDisplayName,
  verticalSeo,
  breadcrumbLd,
  faqPageLd,
} from "@/data/seo";
import { verticalDetailFaqs } from "@/data/faqs";
import { FaqSection } from "@/components/ui/faq-section";
import { site } from "@/data/site";
import "./pages.css";

export default function VerticalDetailPage() {
  const { slug } = useParams();
  const vertical = slug ? getVerticalBySlug(slug) : undefined;

  if (!vertical) {
    return <Navigate to="/verticals" replace />;
  }

  const guide = getVerticalGuide(vertical.slug);
  const name = verticalDisplayName(vertical);
  const meta = verticalSeo(vertical);

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

  const relatedPosts = relatedBlogForVertical(vertical.slug);
  const faqs = verticalDetailFaqs(name);

  const jsonLd = [
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Verticals", path: "/verticals" },
      { name: name, path: meta.path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${name} Pay Per Call & Leads`,
      description: meta.description,
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
    faqPageLd(faqs),
  ];

  return (
    <main>
      <Seo {...meta} jsonLd={jsonLd} />

      <PageHero
        eyebrow={vertical.category}
        title={
          <>
            {name}{" "}
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
            alt={`${name} pay per call and leads from RidgeRise Media`}
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
                <h3>{verticalDisplayName(item)}</h3>
                <p>{item.summary}</p>
                <span className="card-grid__link">View vertical →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="inner-section">
          <div className="inner-section__head">
            <h2 className="inner-section__title">Related insights</h2>
            <p className="inner-section__sub">
              Buyer guides that pair with {name} call and lead campaigns.
            </p>
          </div>
          <ul className="card-grid">
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <Link className="card-grid__item" to={`/blog/${post.slug}`}>
                  <span className="card-grid__meta">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="card-grid__link">Read article →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <FaqSection
        title={`${name} FAQ`}
        description={`Buying ${name} calls and leads. Models, qualification, and supply.`}
        items={faqs}
      />

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Need {name} calls or leads?</h2>
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
