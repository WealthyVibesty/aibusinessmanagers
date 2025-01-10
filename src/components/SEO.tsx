import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export default function SEO({ title, description, path = "" }: SEOProps) {
  const baseUrl = "https://your-domain.com";
  const url = `${baseUrl}${path}`;
  const imageUrl = `${baseUrl}/lovable-uploads/07e07428-0372-4776-b862-598ba7fcb7bd.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}