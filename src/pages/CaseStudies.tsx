import HeroSection from "@/components/landing/sections/HeroSection";
import SEO from "@/components/SEO";

export default function CaseStudies() {
  return (
    <>
      <SEO 
        title="Success Stories in Healthcare AI" 
        description="Real success stories of healthcare providers using our AI solutions. See how we've helped transform patient care & operational efficiency."
      />
      <div className="min-h-screen">
        <HeroSection
          title="Success Stories in Healthcare AI"
          subtitle="Discover how leading healthcare organizations are transforming patient care and operations with our AI solutions."
          ctaText="Schedule a Demo"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for case studies - to be implemented */}
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-gray-600">Case studies are being prepared and will be available shortly.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
