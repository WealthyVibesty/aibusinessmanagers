import ElderlyHeroSection from "@/components/landing/sections/elderly/HeroSection";
import ElderlyFeaturesSection from "@/components/landing/sections/elderly/FeaturesSection";
import ElderlyBenefitsSection from "@/components/landing/sections/elderly/BenefitsSection";
import ElderlyCTASection from "@/components/landing/sections/elderly/CTASection";

export default function ElderlyCare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <ElderlyHeroSection />
      <ElderlyFeaturesSection />
      <ElderlyBenefitsSection />
      <ElderlyCTASection />
    </div>
  );
}