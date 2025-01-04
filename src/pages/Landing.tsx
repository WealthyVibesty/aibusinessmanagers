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
      <HeroSection />
      <BenefitsSection />
      <LifetimeAccessSection />
      <CaseStudiesSection />
      <StepsSection />
      <PricingSection />
      <PricingDetailsSection />
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 mx-auto">
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Don't Wait – Let's Make AI Your Competitive Edge, Starting Now.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Just $247 to Get Started. No Risk. Just Results.
          </p>
          <div className="flex justify-center px-4">
            <Button
              size="lg"
              className="mt-4 sm:mt-8 text-base sm:text-lg group w-full sm:w-auto"
              onClick={() => navigate("/login")}
            >
              Get Started Now – Only $247
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            30-Day Money-Back Guarantee | Secure Checkout
          </p>
        </div>
      </section>
    </div>
  );
}