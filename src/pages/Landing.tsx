import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import StepsSection from "@/components/landing/StepsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <HeroSection />
      <BenefitsSection />
      <StepsSection />
      
      {/* Pricing Section */}
      <section className="bg-secondary/5 py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">What Does It Cost to Implement?</h2>
            <div className="p-8 bg-card rounded-lg shadow-lg">
              <div className="space-y-6 max-w-2xl mx-auto">
                <p className="text-lg">
                  We get it – pricing matters. That's why we don't charge you a dime until you see what we create for you.
                </p>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Start for Free: Fill out the form, and we'll create your AI Marketing Profile at no cost.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>See the Value: Review your profile and decide if it makes sense for your business.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Pay for Implementation: If you love it, we'll help you implement it. Our pricing is affordable for small businesses.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Final CTA */}
      <section className="container px-4 py-24 mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Don't Wait – Let's Make AI Easy Together</h2>
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