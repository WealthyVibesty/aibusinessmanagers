import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowRight, Pill, Shield, Phone } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";

export default function Pharmaceuticals() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDemoClick = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.remove('hidden');
    }

    toast({
      title: "Let's get started!",
      description: (
        <div className="flex flex-col gap-4">
          <p>Our AI assistant is here to help you. Feel free to ask any questions!</p>
          <Button
            onClick={() => navigate("/checkout")}
            className="w-full"
          >
            Pay Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    });
  };

  const challenges = [
    {
      title: "High Call Volume",
      description: "High call volumes for medication inquiries and support"
    },
    {
      title: "Compliance",
      description: "Complex compliance and data security requirements"
    },
    {
      title: "24/7 Support",
      description: "Limited resources for 24/7 patient engagement"
    }
  ];

  const solutions = [
    {
      title: "AI Support",
      description: "AI voice agents provide 24/7 support for medication inquiries, refills, and side effect information"
    },
    {
      title: "HIPAA Compliance",
      description: "HIPAA-compliant solutions ensure patient data is always secure"
    },
    {
      title: "Patient Engagement",
      description: "Proactive engagement keeps patients informed about medications and treatment plans"
    }
  ];

  const benefits = [
    {
      title: "Cost Savings",
      description: "Reduce call center costs by up to 70%"
    },
    {
      title: "Better Outcomes",
      description: "Improve patient adherence and outcomes with timely reminders and support"
    },
    {
      title: "Compliance",
      description: "Ensure compliance with strict healthcare regulations"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="AI Solutions for Pharmaceutical Companies"
        subtitle="Streamline patient support and improve outcomes with AI-powered voice solutions."
        ctaText="Ready to Transform Your Customer Service?"
        ctaAction={handleDemoClick}
      />
      
      <FeatureList 
        title="Key Challenges"
        features={challenges}
      />
      
      <HowItWorks steps={solutions} />
      
      <FeatureList 
        title="Benefits"
        features={benefits}
      />
      
      <SEO 
        title="AI Voice Agents for Pharmaceutical Services" 
        description="Optimize pharmaceutical services with AI voice agents. Automate medication reminders, improve adherence & enhance patient support."
      />
    </div>
  );
}
