import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function RehabilitationLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Exercise Program Management",
      description: "Send personalized exercise reminders, video demonstrations, and track patient progress through natural conversations."
    },
    {
      title: "Recovery Monitoring",
      description: "Collect regular progress updates, pain levels, and mobility assessments to inform treatment plans."
    }
  ];

  const benefits = [
    { text: "Improved Patient Adherence to Exercise Programs" },
    { text: "Better Treatment Outcomes" },
    { text: "Enhanced Patient Engagement" },
    { text: "Streamlined Progress Tracking" }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Transform Rehabilitation Care with AI Voice Agents"
        description="Enhance rehabilitation services with AI. Track progress, automate exercises & improve patient engagement."
      />
      <HeroSection 
        title="Transform Rehabilitation Care with AI Voice Agents"
        subtitle="Boost patient engagement, improve adherence to treatment plans, and streamline progress tracking."
      />
      
      <UseCasesSection 
        title="How AI Voice Agents Transform Rehabilitation Practices"
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
            Ready to Transform Your Rehabilitation Practice?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading rehabilitation practices in delivering exceptional care with AI support
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
