import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import { blogPosts, getPostBySlug } from "@/data/blog";
import {
  blogPostFaqs,
  blogPostingLd,
  breadcrumbLd,
  faqPageLd,
  postSeo,
} from "@/data/seo";
import { FaqSection } from "@/components/ui/faq-section";
import "./pages.css";

const POST_VERTICAL_LINKS: Record<
  string,
  { to: string; label: string }[]
> = {
  "what-is-pay-per-call-marketing": [
    { to: "/verticals/auto-insurance", label: "auto insurance pay per call" },
    { to: "/verticals/personal-injury", label: "personal injury call campaigns" },
  ],
  "insurance-pay-per-call-best-practices": [
    { to: "/verticals/medicare-advantage", label: "Medicare Advantage calls" },
    { to: "/verticals/final-expense", label: "final expense inbound calls" },
  ],
  "how-publishers-get-paid-faster": [
    { to: "/verticals/health-insurance", label: "health insurance buyer demand" },
    { to: "/verticals/debt-settlement", label: "debt settlement campaigns" },
  ],
  "buyer-guide-call-quality": [
    { to: "/verticals/hvac", label: "HVAC pay-per-call filters" },
    { to: "/verticals/life-insurance", label: "life insurance call quality" },
  ],
  "compliance-first-pay-per-call": [
    { to: "/verticals/medicare-advantage", label: "Medicare Advantage compliance" },
    { to: "/verticals/personal-loans", label: "personal loan call campaigns" },
  ],
  "home-services-call-seasonality": [
    { to: "/verticals/hvac", label: "HVAC seasonal call demand" },
    { to: "/verticals/roofing", label: "roofing storm call campaigns" },
    { to: "/verticals/solar", label: "solar pay per call and CPL" },
  ],
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const meta = postSeo(post);
  const faqs = blogPostFaqs(post.slug);
  const verticalLinks = POST_VERTICAL_LINKS[post.slug] ?? [
    { to: "/verticals/auto-insurance", label: "auto insurance pay per call" },
    { to: "/verticals/hvac", label: "HVAC call campaigns" },
  ];

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = [
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: meta.path },
    ]),
    blogPostingLd(post, meta),
    ...(faqs.length ? [faqPageLd(faqs)] : []),
  ];

  return (
    <main>
      <Seo {...meta} jsonLd={jsonLd} />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <section className="inner-section inner-section--tight">
        <div className="blog-meta">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime} read</span>
        </div>
      </section>

      <section className="inner-section">
        <article className="prose">
          {post.content.map((paragraph, index) => (
            <p key={`${post.slug}-${index}`}>
              {paragraph}
              {index === 1 ? (
                <>
                  {" "}
                  Related verticals:{" "}
                  {verticalLinks.map((link, i) => (
                    <span key={link.to}>
                      {i > 0 ? ", " : null}
                      <Link to={link.to}>{link.label}</Link>
                    </span>
                  ))}
                  .
                </>
              ) : null}
            </p>
          ))}
        </article>
      </section>

      {faqs.length > 0 ? (
        <FaqSection
          title="FAQ"
          description="Common questions buyers and publishers ask about this topic."
          items={faqs}
        />
      ) : null}

      <section className="inner-section inner-section--band">
        <div className="inner-section__head">
          <h2 className="inner-section__title">Related reading</h2>
        </div>
        <ul className="card-grid">
          {related.map((item) => (
            <li key={item.slug}>
              <Link className="card-grid__item" to={`/blog/${item.slug}`}>
                <span className="card-grid__meta">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <span className="card-grid__link">Read →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Use this on your next campaign</h2>
          <p>
            Tell us what a qualified call looks like for your intake team, or
            apply as a partner if you monetize call traffic.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact?role=buyer" className="btn btn--purple">
              Start a test campaign
            </Link>
            <Link to="/publishers" className="btn btn--mint">
              Apply as a partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
