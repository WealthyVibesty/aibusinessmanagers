import ElderlyHeroSection from "@/components/landing/sections/elderly/HeroSection";
import ElderlyFeaturesSection from "@/components/landing/sections/elderly/FeaturesSection";
import ElderlyBenefitsSection from "@/components/landing/sections/elderly/BenefitsSection";
import ElderlyCTASection from "@/components/landing/sections/elderly/CTASection";
import SEO from "@/components/SEO";

export default function ElderlyCare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <SEO 
        title="AI Solutions for Elderly Care" 
        description="Improve elderly care with AI assistance. 24/7 support, medication reminders & family communication tools."
      />
      <ElderlyHeroSection />
      <ElderlyFeaturesSection />
      <ElderlyBenefitsSection />
      <ElderlyCTASection />
    </div>
  );
}
