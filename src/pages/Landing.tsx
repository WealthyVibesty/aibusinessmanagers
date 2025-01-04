import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import LifetimeAccessSection from "@/components/landing/LifetimeAccessSection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import PricingDetailsSection from "@/components/landing/PricingDetailsSection";
import Header from "@/components/landing/Header";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <div id="benefits">
          <BenefitsSection />
        </div>
        <div id="lifetime-access">
          <LifetimeAccessSection />
        </div>
        <div id="case-studies">
          <CaseStudiesSection />
        </div>
        <div id="pricing-details">
          <PricingDetailsSection />
        </div>
      </main>
    </div>
  );
}