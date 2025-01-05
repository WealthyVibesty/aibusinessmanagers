import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Shield, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SurgicalPracticesLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Pre-Surgery Instructions",
      description: "Deliver personalized pre-op instructions and answer common questions about procedures."
    },
    {
      title: "Post-Op Follow-Up",
      description: "Send reminders for wound care, medication schedules, and follow-up appointments."
    }
  ];

  const benefits = [
    { text: "Enhanced Patient Preparedness" },
    { text: "Reduced No-Shows and Complications" },
    { text: "Improved Patient Satisfaction" },
    { text: "Freed-Up Staff for Critical Tasks" }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Transform Surgical Care with AI Voice Agents"
        subtitle="Streamline communication, improve outcomes, and free up your staff with intelligent automation."
      />
      
      <UseCasesSection 
        title="How AI Voice Agents Transform Surgical Practices"
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
            Ready to Transform Your Surgical Practice?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading surgical practices in delivering exceptional care with AI support
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