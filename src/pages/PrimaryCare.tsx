import HeroSection from "@/components/landing/sections/primary-care/HeroSection";
import FeaturesSection from "@/components/landing/sections/primary-care/FeaturesSection";
import BenefitsSection from "@/components/landing/sections/primary-care/BenefitsSection";
import WorkflowSection from "@/components/landing/sections/primary-care/WorkflowSection";
import CTASection from "@/components/landing/sections/primary-care/CTASection";
import Header from "@/components/landing/Header";

export default function PrimaryCare() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <WorkflowSection />
        <CTASection />
      </main>
    </div>
  );
}