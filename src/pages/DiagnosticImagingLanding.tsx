import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/sections/diagnostic/HeroSection";
import UseCasesSection from "@/components/landing/sections/diagnostic/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/diagnostic/BenefitsSection";
import CTASection from "@/components/landing/sections/diagnostic/CTASection";

export default function DiagnosticImagingLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <UseCasesSection />
        <BenefitsSection />
        <CTASection />
      </main>
    </div>
  );
}