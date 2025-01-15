import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export default function SEO({ title, description, path = "" }: SEOProps) {
  const baseUrl = "https://aibusinessmanagers.com";
  const url = `${baseUrl}${path}`;
  const imageUrl = `${baseUrl}/lovable-uploads/cd3826ee-3df6-4947-b0b1-a5ff9f03f4cb.png`;
  const siteName = "AI Business Managers For AI Customer Service, CRM automations & Customer Engagement";

  // Truncate description to 130 characters
  const truncatedDescription = description.length > 130 
    ? `${description.substring(0, 127)}...` 
    : description;

  console.log('SEO Component Rendered:', { url, imageUrl, title, description }); // Debug log

  return (
    <Helmet>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={truncatedDescription} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={truncatedDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={truncatedDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}