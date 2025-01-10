import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PharmaceuticalsLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Automated Prescription Management",
      description: "Let AI handle refill requests and provide medication information efficiently."
    },
    {
      title: "24/7 Pharmacy Support",
      description: "Provide instant answers about medications, side effects, and drug interactions."
    }
  ];

  const benefits = [
    { text: "Streamline prescription processing" },
    { text: "Improve medication adherence" },
    { text: "Reduce pharmacist workload" },
    { text: "Enhance patient safety and satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Transform Your Pharmacy with AI Voice Agents"
        subtitle="Streamline your pharmacy operations while improving patient satisfaction and reducing administrative burden."
      />
      
      <UseCasesSection 
        title="What Can AI Voice Agents Do for Your Pharmacy?"
        useCases={useCases}
      />
      
      <BenefitsSection 
        title="Benefits for Your Pharmacy"
        benefits={benefits}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Pharmacy?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading pharmacies in delivering exceptional care with AI support
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