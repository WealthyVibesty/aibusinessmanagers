import HeroSection from "@/components/landing/sections/HeroSection";
import SEO from "@/components/SEO";

export default function OurTeam() {
  return (
    <>
      <SEO 
        title="Our Team" 
        description="Meet the experts behind our healthcare AI solutions."
      />
      <div className="min-h-screen">
        <HeroSection
          title="Meet Our Team"
          subtitle="A dedicated team of healthcare and technology experts working to transform patient care."
          ctaText="Join Our Team"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for team members - to be implemented */}
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-gray-600">Team profiles are being prepared and will be available shortly.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}