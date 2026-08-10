import { Helmet } from "react-helmet-async";
import { site } from "@/data/site";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  keywords?: string[];
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const DEFAULT_OG = "/assets/og-default.jpg";

function buildTitle(title: string) {
  const brand = site.name;
  const trimmed = title.trim();
  if (!trimmed) return brand;
  if (trimmed === brand) return brand;
  if (trimmed.endsWith(`| ${brand}`) || trimmed.endsWith(`— ${brand}`)) {
    return trimmed;
  }
  if (trimmed.includes(brand)) return trimmed;
  return `${trimmed} | ${brand}`;
}

export function Seo({
  title,
  description,
  path = "/",
  type = "website",
  keywords = [],
  image = DEFAULT_OG,
  publishedTime,
  modifiedTime,
  jsonLd,
}: SeoProps) {
  const fullTitle = buildTitle(title);
  const url = `${site.url}${path === "/" ? "" : path}`;
  const imageUrl = image.startsWith("http") ? image : `${site.url}${image}`;

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    logo: `${site.url}/assets/logo-icon.svg`,
    description:
      "Pay-per-call network connecting publishers with verified buyers across high-intent verticals.",
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.tagline,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  const articleLd =
    type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: fullTitle,
          description,
          url,
          image: imageUrl,
          datePublished: publishedTime,
          dateModified: modifiedTime ?? publishedTime,
          author: {
            "@type": "Organization",
            name: site.name,
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            logo: {
              "@type": "ImageObject",
              url: `${site.url}/assets/logo-icon.svg`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
        }
      : null;

  const schemas = [
    organizationLd,
    websiteLd,
    ...(articleLd ? [articleLd] : []),
    ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []),
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={fullTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
