import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function RadiologyLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Imaging Appointment Management",
      description: "Efficiently schedule and manage imaging appointments while reducing wait times and no-shows."
    },
    {
      title: "Results Communication",
      description: "Streamline the process of communicating imaging results to patients and referring physicians."
    }
  ];

  const benefits = [
    { text: "Optimize imaging scheduling efficiency" },
    { text: "Improve patient communication" },
    { text: "Reduce administrative overhead" },
    { text: "Enhance referring physician satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Transform Your Radiology Practice with AI Voice Agents" 
        description="Optimize radiology workflows with AI automation. Streamline imaging appointments & enhance result communication."
      />
      <HeroSection 
        title="Transform Your Radiology Practice with AI Voice Agents"
        subtitle="Streamline imaging operations while improving patient communication and reducing administrative burden."
      />
      
      <UseCasesSection 
        title="How AI Voice Agents Transform Radiology Practices"
        useCases={useCases}
      />
      
      <BenefitsSection 
        title="Benefits for Your Practice"
        benefits={benefits}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Radiology Practice?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading radiology practices in delivering exceptional care with AI support
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
