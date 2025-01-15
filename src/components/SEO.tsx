import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export default function SEO({ title, description, path = "" }: SEOProps) {
  const baseUrl = "https://your-domain.com";
  const url = `${baseUrl}${path}`;
  const imageUrl = `${baseUrl}/lovable-uploads/cd3826ee-3df6-4947-b0b1-a5ff9f03f4cb.png`;

  // Truncate description to 150 characters
  const truncatedDescription = description.length > 150 
    ? `${description.substring(0, 147)}...` 
    : description;

  // Format title for better SERP visibility
  const formattedTitle = `${title} | AI Healthcare Solutions`;

  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="description" content={truncatedDescription} />
      
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={truncatedDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={truncatedDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}