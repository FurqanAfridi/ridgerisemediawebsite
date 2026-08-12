import { Link } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import { blogPosts } from "@/data/blog";
import { blogFaqs } from "@/data/faqs";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
import "./pages.css";

export default function BlogPage() {
  return (
    <main>
      <Seo
        title="Pay-Per-Call Blog for Buyers"
        description="Buyer-first guides on buying calls and leads, call quality, insurance and home services campaigns, compliance, and how pay per call works."
        path="/blog"
        keywords={[
          "pay per call blog",
          "buy inbound calls",
          "call quality",
          "insurance pay per call",
        ]}
        jsonLd={buildFaqJsonLd(blogFaqs)}
      />

      <PageHero
        eyebrow="Blog"
        title={
          <>
            Insights for buyers &amp;{" "}
            <span className="grad-mint">partners</span>
          </>
        }
        description="Practical guides on buying qualified calls and leads, vertical filters, compliance-conscious campaigns, and call quality—written for intake and media teams."
      />

      <section className="inner-section">
        <ul className="card-grid">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link className="card-grid__item" to={`/blog/${post.slug}`}>
                <span className="card-grid__meta">
                  {post.category} · {post.readTime}
                </span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="card-grid__link">Read article →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FaqSection
        title="Blog FAQ"
        description="Who these posts are for and where to go next."
        items={blogFaqs}
      />

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Want to put this into practice?</h2>
          <p>
            Discuss a campaign for your vertical, or apply as a partner if you
            have call traffic to monetize.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--purple">
              Contact us
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
