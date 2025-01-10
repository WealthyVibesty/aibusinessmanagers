import HeroSection from "@/components/landing/sections/HeroSection";
import SEO from "@/components/SEO";

export default function Whitepapers() {
  return (
    <>
      <SEO 
        title="Whitepapers" 
        description="In-depth research and insights on healthcare AI technology and implementation."
      />
      <div className="min-h-screen">
        <HeroSection
          title="Healthcare AI Insights"
          subtitle="Access in-depth research and analysis on the latest healthcare AI technologies and implementation strategies."
          ctaText="Download Now"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for whitepapers - to be implemented */}
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-gray-600">Whitepapers are being prepared and will be available shortly.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}