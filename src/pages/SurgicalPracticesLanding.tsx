import HeroSection from "@/components/landing/sections/surgical/HeroSection";
import UseCasesSection from "@/components/landing/sections/surgical/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/surgical/BenefitsSection";
import CTASection from "@/components/landing/sections/surgical/CTASection";
import Header from "@/components/landing/Header";

export default function SurgicalPracticesLanding() {
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