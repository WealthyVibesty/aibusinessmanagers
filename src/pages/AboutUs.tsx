import HeroSection from "@/components/landing/sections/HeroSection";
import SEO from "@/components/SEO";

export default function AboutUs() {
  return (
    <>
      <SEO 
        title="About AI Business Managers" 
        description="Learn about our mission to revolutionize healthcare with AI. Meet our team of experts dedicated to transforming patient care through innovation."
      />
      <div className="min-h-screen">
        <HeroSection
          title="About AI Business Managers"
          subtitle="We're on a mission to transform healthcare operations with intelligent AI solutions."
          ctaText="Join Our Mission"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead">
              AI Business Managers is at the forefront of healthcare innovation, developing AI-powered solutions that streamline operations and improve patient care.
            </p>
            <p>
              Our team of healthcare and technology experts is dedicated to creating intelligent solutions that make healthcare more efficient, accessible, and effective.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
