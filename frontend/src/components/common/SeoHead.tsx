import { Helmet } from "react-helmet-async";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, STRUCTURED_DATA } from "@/constants/seo";
import type { SeoMeta } from "@/types";

interface SeoHeadProps {
  meta: SeoMeta;
}

export function SeoHead({ meta }: SeoHeadProps) {
  const url = `${SITE_URL}${meta.path}`;
  const image = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(STRUCTURED_DATA)}</script>
    </Helmet>
  );
}
