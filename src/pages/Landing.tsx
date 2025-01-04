import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import StepsSection from "@/components/landing/StepsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <HeroSection />
      <BenefitsSection />
      <StepsSection />
      <PricingSection />
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="container px-4 py-24 mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Start for Free Today – Let Our AI Experts Do the Heavy Lifting for You</h2>
          <p className="text-xl text-muted-foreground">
            No Risk. No Commitment. Just Results.
          </p>
          <Button
            size="lg"
            className="mt-8 text-lg group"
            onClick={() => navigate("/login")}
          >
            Get Started Now – Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}