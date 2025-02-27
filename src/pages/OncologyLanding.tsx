import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OncologyLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Treatment Planning Coordination",
      description: "Streamline communication between oncologists, radiologists, and support staff for comprehensive cancer care."
    },
    {
      title: "Patient Care Management",
      description: "Monitor treatment progress, manage appointments, and provide 24/7 support for cancer patients."
    }
  ];

  const benefits = [
    { text: "Improve treatment coordination efficiency" },
    { text: "Enhance patient communication and support" },
    { text: "Reduce administrative workload" },
    { text: "Better manage complex treatment schedules" }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Transform Your Oncology Practice with AI Voice Agents"
        subtitle="Streamline cancer care coordination while improving patient support and reducing administrative burden."
      />
      
      <UseCasesSection 
        title="How AI Voice Agents Transform Oncology Practices"
        useCases={useCases}
      />
      
      <BenefitsSection 
        title="Benefits for Your Practice"
        benefits={benefits}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Oncology Practice?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading oncology practices in delivering exceptional care with AI support
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