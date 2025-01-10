import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PediatricsLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Streamline Patient Scheduling",
      description: "Let AI handle appointment scheduling and reminders, reducing no-shows and improving practice efficiency."
    },
    {
      title: "Enhance Parent Communication",
      description: "Provide 24/7 support for common questions about vaccinations, medications, and general pediatric care."
    }
  ];

  const benefits = [
    { text: "Reduce administrative workload for staff" },
    { text: "Improve parent satisfaction with instant responses" },
    { text: "Decrease missed appointments with automated reminders" },
    { text: "Provide consistent, accurate information to parents" }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Transform Your Pediatric Practice with AI Voice Agents"
        subtitle="Streamline your pediatric practice operations while improving parent satisfaction and reducing administrative burden."
      />
      
      <UseCasesSection 
        title="What Can AI Voice Agents Do for Your Pediatric Practice?"
        useCases={useCases}
      />
      
      <BenefitsSection 
        title="Benefits for Your Practice"
        benefits={benefits}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Pediatric Practice?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading pediatric practices in delivering exceptional care with AI support
          </p>
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={() => navigate("/checkout")}
              className="text-lg px-8 py-6 h-auto"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}