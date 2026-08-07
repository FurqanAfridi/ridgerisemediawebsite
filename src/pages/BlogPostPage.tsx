import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import { blogPosts, getPostBySlug } from "@/data/blog";
import "./pages.css";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        keywords={post.tags}
      />

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
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </article>
      </section>

      <section className="inner-section" style={{ background: "#f7fffe" }}>
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
          <h2>Put these ideas to work</h2>
          <p>
            Join RidgeRise as a publisher or buyer and scale compliant
            pay-per-call campaigns.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--purple">
              Get started
            </Link>
            <Link to="/blog" className="btn btn--mint">
              Back to blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
