import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DermatologyLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Book Cosmetic Consultations",
      description: "Let patients easily schedule consultations for Botox, fillers, or laser treatments through natural, conversational AI."
    },
    {
      title: "Send Pre-Appointment Instructions",
      description: "Automatically share skincare prep instructions or medication guidelines before procedures."
    }
  ];

  const benefits = [
    { text: "Reduce no-shows with timely reminders" },
    { text: "Enhance patient satisfaction with seamless booking and clear instructions" },
    { text: "Free up staff to focus on delivering specialized care" },
    { text: "Provide 24/7 support for patient inquiries" }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Transform Your Dermatology Practice with AI Voice Agents"
        subtitle="Streamline your cosmetic and medical dermatology operations while improving patient satisfaction and reducing administrative burden."
      />
      
      <UseCasesSection 
        title="What Can AI Voice Agents Do for Your Dermatology Practice?"
        useCases={useCases}
      />
      
      <BenefitsSection 
        title="Benefits for Your Practice"
        benefits={benefits}
      />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Dermatology Practice?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading dermatology practices in delivering exceptional care with AI support
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