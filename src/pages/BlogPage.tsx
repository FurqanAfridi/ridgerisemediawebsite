import { Link } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import { blogPosts } from "@/data/blog";
import "./pages.css";

export default function BlogPage() {
  return (
    <main>
      <Seo
        title="Pay-Per-Call Blog"
        description="Guides and insights on pay-per-call marketing, insurance call campaigns, publisher payouts, buyer call quality, and compliance from RidgeRise Media."
        path="/blog"
        keywords={[
          "pay per call blog",
          "call marketing tips",
          "insurance PPC guides",
        ]}
      />

      <PageHero
        eyebrow="Blog"
        title={
          <>
            Insights for publishers &amp;{" "}
            <span className="grad-mint">buyers</span>
          </>
        }
        description="Practical guides on pay-per-call strategy, vertical performance, compliance, and scaling call revenue with RidgeRise Media."
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
    </main>
  );
}
