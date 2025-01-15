import HeroSection from "@/components/landing/sections/specialty/HeroSection";
import UseCasesSection from "@/components/landing/sections/specialty/UseCasesSection";
import BenefitsSection from "@/components/landing/sections/specialty/BenefitsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/landing/Header";

export default function TelemedicineLanding() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "24/7 Patient Support",
      description: "AI voice agents handle appointment scheduling, prescription refills, and general inquiries around the clock."
    },
    {
      title: "Automated Follow-ups",
      description: "Voice agents conduct post-visit follow-ups, medication reminders, and care plan adherence checks."
    }
  ];

  const benefits = [
    { text: "Reduce administrative workload by 40%" },
    { text: "Improve patient satisfaction with instant support" },
    { text: "Decrease no-show rates through automated reminders" },
    { text: "Enable multilingual patient communication" }
  ];

  const handleDemoClick = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.remove('hidden');
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <SEO 
        title="Transform Your Telemedicine Practice with AI Voice Agents"
        description="Revolutionize telemedicine with AI support. 24/7 patient assistance, appointment scheduling & follow-up automation."
      />
      <HeroSection 
        title="Transform Your Telemedicine Practice with AI Voice Agents"
        subtitle="Streamline patient communication, automate administrative tasks, and provide 24/7 support with our intelligent voice technology."
      />
      
      <UseCasesSection 
        title="How AI Voice Agents Transform Telemedicine"
        useCases={useCases}
      />
      
      <BenefitsSection 
        title="Benefits for Your Practice"
        benefits={benefits}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Telemedicine Practice?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading telemedicine providers using AI voice agents to deliver exceptional care
          </p>
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={handleDemoClick}
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
