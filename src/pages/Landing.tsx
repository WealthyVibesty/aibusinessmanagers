import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import PricingDetailsSection from "@/components/landing/PricingDetailsSection";
import BusinessComparisonSection from "@/components/landing/BusinessComparisonSection";
import Header from "@/components/landing/Header";
import FooterSection from "@/components/landing/sections/FooterSection";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <div id="benefits">
          <BenefitsSection />
        </div>
        <div id="business-comparison">
          <BusinessComparisonSection />
        </div>
        <div id="case-studies">
          <CaseStudiesSection />
        </div>
        <div id="pricing-details">
          <PricingDetailsSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
}