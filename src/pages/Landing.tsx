import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import StepsSection from "@/components/landing/StepsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import PricingDetailsSection from "@/components/landing/PricingDetailsSection";
import LifetimeAccessSection from "@/components/landing/LifetimeAccessSection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-[100vw] overflow-hidden">
        <HeroSection />
        <BenefitsSection />
        <LifetimeAccessSection />
        <CaseStudiesSection />
        <StepsSection />
        <PricingSection />
        <PricingDetailsSection />
        <TestimonialsSection />

        {/* Final CTA */}
        <section className="px-4 py-8 sm:py-12 md:py-16">
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              Don't Wait – Let's Make AI Your Competitive Edge, Starting Now.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Just $247 to Get Started. No Risk. Just Results.
            </p>
            <div className="flex justify-center px-4">
              <Button
                size="lg"
                className="mt-4 text-sm sm:text-base group w-full sm:w-auto"
                onClick={() => navigate("/login")}
              >
                Get Started Now – Only $247
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              30-Day Money-Back Guarantee | Secure Checkout
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}