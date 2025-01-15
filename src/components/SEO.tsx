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

  // Truncate description to 130 characters
  const truncatedDescription = description.length > 130 
    ? `${description.substring(0, 127)}...` 
    : description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={truncatedDescription} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={truncatedDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={truncatedDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}