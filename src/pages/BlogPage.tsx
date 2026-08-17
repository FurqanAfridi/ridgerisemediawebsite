import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import { blogPosts } from "@/data/blog";
import { blogFaqs } from "@/data/faqs";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
import "./pages.css";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    if (active === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === active);
  }, [active]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main>
      <Seo
        title="Pay-Per-Call Blog for Buyers"
        description="Buyer-first guides on buying calls and leads, call quality, insurance campaigns, and how pay per call works. Written for intake and media teams."
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
            Insights for buyers and{" "}
            <span className="grad-mint">partners</span>
          </>
        }
        description="Practical guides on buying qualified calls and leads, vertical filters, compliance-conscious campaigns, and call quality. Written for intake and media teams."
      />

      <section className="inner-section blog-deck">
        <div className="pill-row" aria-label="Filter posts">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={active === cat ? "pill pill--active" : "pill"}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {featured ? (
          <motion.article
            key={featured.slug}
            className="blog-feature"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
          >
            <div className="blog-feature__meta">
              <span className="card-grid__meta">{featured.category}</span>
              <span>
                {featured.readTime} · {featured.date}
              </span>
            </div>
            <h2 className="blog-feature__title">
              <Link to={`/blog/${featured.slug}`}>{featured.title}</Link>
            </h2>
            <p>{featured.excerpt}</p>
            <Link className="btn btn--purple" to={`/blog/${featured.slug}`}>
              Read article
            </Link>
          </motion.article>
        ) : null}

        {rest.length > 0 ? (
          <ul className="blog-mosaic">
            {rest.map((post, index) => (
              <motion.li
                key={post.slug}
                className={`blog-tile blog-tile--${(index % 3) + 1}`}
                initial={reduce ? false : { opacity: 0, y: 36, rotate: index % 2 ? 1.4 : -1.4 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={reduce ? undefined : { y: -8, rotate: index % 2 ? 1.1 : -1.1 }}
                transition={{ type: "spring", stiffness: 240, damping: 20, delay: index * 0.04 }}
              >
                <Link className="blog-tile__link" to={`/blog/${post.slug}`}>
                  <span className="card-grid__meta">
                    {post.category} · {post.readTime}
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="card-grid__link">Read article →</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        ) : null}
      </section>

      <FaqSection
        title="Blog FAQ"
        description="Who these posts are for and where to go next."
        items={blogFaqs}
      />

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Ready to run a campaign, not just read about one?</h2>
          <p>
            Discuss a campaign for your vertical, or apply as a partner if you
            have call traffic to monetize.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact?role=buyer" className="btn btn--purple">
              Discuss a campaign
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
