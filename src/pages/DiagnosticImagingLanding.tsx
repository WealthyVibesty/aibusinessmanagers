import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function DiagnosticImagingLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Scheduling Imaging Appointments",
      description: "Allow patients to schedule, reschedule, or cancel appointments through natural, conversational AI."
    },
    {
      title: "Providing Prep Instructions",
      description: "Deliver personalized prep instructions and answer common questions about tests."
    }
  ];

  const benefits = [
    { text: "Reduced No-Shows and Better Resource Utilization" },
    { text: "Improved Patient Preparedness" },
    { text: "Enhanced Patient Satisfaction" },
    { text: "Streamlined Administrative Operations" }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Transform Your Diagnostic Center with AI Voice Agents" 
        description="Enhance diagnostic imaging operations with AI. Automate scheduling, prep instructions & results communication."
      />
      <HeroSection 
        title="Transform Your Diagnostic Center with AI Voice Agents"
        subtitle="Streamline appointments, improve patient preparedness, and reduce administrative burden."
      />
      
      <UseCasesSection 
        title="How AI Voice Agents Transform Diagnostic Centers"
        useCases={useCases}
      />
      
      <BenefitsSection 
        title="Benefits for Your Center"
        benefits={benefits}
      />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Diagnostic Center?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading diagnostic centers in delivering exceptional care with AI support
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
