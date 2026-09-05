import { Helmet } from "react-helmet-async";
import {
  DEFAULT_OG,
  buildTitle,
  canonicalUrl,
  ogImageUrl,
  organizationLd,
  websiteLd,
} from "@/data/seo";
import { site } from "@/data/site";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function Seo({
  title,
  description,
  path = "/",
  type = "website",
  image = DEFAULT_OG,
  publishedTime,
  modifiedTime,
  jsonLd,
}: SeoProps) {
  const fullTitle = buildTitle(title);
  const url = canonicalUrl(path);
  const imageUrl = ogImageUrl(image);

  const schemas = [
    organizationLd(),
    ...(path === "/" ? [websiteLd()] : []),
    ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []),
  ];

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
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
