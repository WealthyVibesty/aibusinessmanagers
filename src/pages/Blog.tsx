import HeroSection from "@/components/landing/sections/HeroSection";
import SEO from "@/components/SEO";

export default function Blog() {
  return (
    <>
      <SEO 
        title="Healthcare AI Blog: Latest Insights & Trends" 
        description="Explore expert analysis on healthcare AI trends, medical technology innovation, and digital transformation in patient care."
        path="/blog"
      />
      <div className="min-h-screen">
        <HeroSection
          title="Healthcare AI Blog: Latest Insights & Trends"
          subtitle="Stay updated with the latest trends, insights, and best practices in healthcare AI technology."
          ctaText="Subscribe"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-gray-600">Blog posts are being prepared and will be available shortly.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}