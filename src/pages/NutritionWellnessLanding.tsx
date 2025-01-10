import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NutritionWellnessLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Automated Consultation Booking",
      description: "Let AI handle scheduling and reminders for nutrition consultations efficiently."
    },
    {
      title: "24/7 Nutrition Support",
      description: "Provide instant answers about meal plans, supplements, and wellness practices."
    }
  ];

  const benefits = [
    { text: "Streamline client scheduling and management" },
    { text: "Provide consistent nutrition guidance" },
    { text: "Improve client engagement and retention" },
    { text: "Reduce administrative workload" }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Transform Your Nutrition Practice with AI Voice Agents"
        subtitle="Streamline your nutrition and wellness practice while improving client satisfaction and reducing administrative burden."
      />
      
      <UseCasesSection 
        title="What Can AI Voice Agents Do for Your Nutrition Practice?"
        useCases={useCases}
      />
      
      <BenefitsSection 
        title="Benefits for Your Practice"
        benefits={benefits}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Nutrition Practice?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading nutrition practices in delivering exceptional care with AI support
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