import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DentalCareLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Automated Appointment Management",
      description: "Let AI handle scheduling, confirmations, and reminders for dental appointments efficiently."
    },
    {
      title: "Patient Education",
      description: "Provide instant answers about procedures, post-care instructions, and dental hygiene practices."
    }
  ];

  const benefits = [
    { text: "Reduce front desk workload with automated scheduling" },
    { text: "Improve patient education and compliance" },
    { text: "Decrease missed appointments with smart reminders" },
    { text: "Enhance patient communication and satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Transform Your Dental Practice with AI Voice Agents"
        subtitle="Streamline your dental practice operations while improving patient satisfaction and reducing administrative burden."
      />
      
      <UseCasesSection 
        title="What Can AI Voice Agents Do for Your Dental Practice?"
        useCases={useCases}
      />
      
      <BenefitsSection 
        title="Benefits for Your Practice"
        benefits={benefits}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Dental Practice?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading dental practices in delivering exceptional care with AI support
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