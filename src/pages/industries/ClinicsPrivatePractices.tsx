import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, Clock } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";

export default function ClinicsPrivatePractices() {
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
      description: "Limited staff to handle high call volumes"
    },
    {
      title: "Missed Appointments",
      description: "Missed appointments and inefficient scheduling"
    },
    {
      title: "24/7 Support",
      description: "Lack of resources for 24/7 patient support"
    }
  ];

  const solutions = [
    {
      title: "24/7 Support",
      description: "AI voice agents answer calls 24/7, handling scheduling, billing, and FAQs"
    },
    {
      title: "Automated Reminders",
      description: "Automated appointment reminders reduce no-show rates by up to 30%"
    },
    {
      title: "Patient Engagement",
      description: "Proactive patient engagement keeps patients informed and engaged"
    }
  ];

  const benefits = [
    {
      title: "Cost Savings",
      description: "Save time and money with AI-driven call handling"
    },
    {
      title: "Patient Satisfaction",
      description: "Improve patient adherence and satisfaction"
    },
    {
      title: "Focus on Care",
      description: "Focus on delivering high-quality care, not managing calls"
    }
  ];
  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Voice Agents for Clinics & Private Practices" 
        description="Transform clinic operations with AI voice agents. Automate appointment scheduling, improve patient engagement & reduce administrative workload."
      />
      <SolutionHero 
        title="AI Solutions for Clinics & Private Practices"
        subtitle="Deliver exceptional patient care without the overhead."
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
    </div>
  );
}
