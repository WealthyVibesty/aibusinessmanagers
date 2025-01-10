import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export default function SEO({ title, description, path = "" }: SEOProps) {
  const baseUrl = "https://your-domain.com";
  const url = `${baseUrl}${path}`;
  const imageUrl = `${baseUrl}/lovable-uploads/ab5a6229-a3bb-476d-9eb2-5452bf6f7a52.png`;

  return (
    <Helmet>
      <title>{`${title} | Healthcare AI Solutions`}</title>
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