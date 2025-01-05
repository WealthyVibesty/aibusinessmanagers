import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Heart, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MentalHealthLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "24/7 Crisis Support",
      description: "Provide immediate support and resources to patients in crisis, with seamless escalation to mental health professionals when needed."
    },
    {
      title: "Therapy Session Management",
      description: "Schedule appointments, send reminders, and share post-session resources to keep patients engaged in their mental health journey."
    }
  ];

  const benefits = [
    { text: "Reduced No-Shows and Better Continuity of Care" },
    { text: "Enhanced Patient Support Between Sessions" },
    { text: "Improved Patient Engagement" },
    { text: "24/7 Access to Resources and Support" }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Transform Mental Health Care with AI Voice Agents"
        subtitle="Provide compassionate, always-available support while reducing administrative burden on your staff."
      />
      
      <UseCasesSection 
        title="How AI Voice Agents Transform Mental Health Practices"
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
            Ready to Transform Your Mental Health Practice?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading mental health practices in delivering exceptional care with AI support
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