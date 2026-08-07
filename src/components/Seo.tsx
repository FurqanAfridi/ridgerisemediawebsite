import { Helmet } from "react-helmet-async";
import { site } from "@/data/site";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  keywords?: string[];
};

export function Seo({
  title,
  description,
  path = "/",
  type = "website",
  keywords = [],
}: SeoProps) {
  const fullTitle = title.includes(site.name)
    ? title
    : `${title} | ${site.name}`;
  const url = `${site.url}${path}`;

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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
