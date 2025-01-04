import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import StepsSection from "@/components/landing/StepsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import PricingDetailsSection from "@/components/landing/PricingDetailsSection";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <HeroSection />
      <BenefitsSection />
      <StepsSection />
      <PricingSection />
      <PricingDetailsSection />
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="container px-4 py-12 md:py-24 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          Don't Wait – Let's Make AI Your Competitive Edge, Starting Now.
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
          <p className="text-lg md:text-xl text-muted-foreground text-center px-4">
            Just $247 to Get Started. No Risk. Just Results.
          </p>
          <div className="flex justify-center px-4">
            <Button
              size="lg"
              className="mt-4 md:mt-8 text-base md:text-lg group w-full sm:w-auto"
              onClick={() => navigate("/login")}
            >
              Get Started Now – Only $247
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}