import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, Bell, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ObGynLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Prenatal Visit Scheduling",
      description: "Simplify appointment booking and reminders for expectant mothers."
    },
    {
      title: "Fertility Treatment Updates",
      description: "Keep patients informed about medication schedules and next steps."
    }
  ];

  const benefits = [
    { text: "Ensure timely prenatal care" },
    { text: "Reduce missed appointments" },
    { text: "Provide personalized support" },
    { text: "Improve patient communication" }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Transform Your OB/GYN Practice with AI Voice Agents"
        subtitle="Streamline prenatal care, improve patient communication, and reduce administrative burden."
      />
      
      <UseCasesSection 
        title="How AI Voice Agents Transform OB/GYN Practices"
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
            Ready to Transform Your OB/GYN Practice?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading OB/GYN practices in delivering exceptional care with AI support
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