import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, HeadphonesIcon, Clock } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";

export default function TelehealthProviders() {
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
      title: "Technical Support",
      description: "High call volumes for scheduling and technical support"
    },
    {
      title: "Platform Navigation",
      description: "Patients struggling to navigate telehealth platforms"
    },
    {
      title: "After-Hours Support",
      description: "Limited resources for after-hours support"
    }
  ];

  const solutions = [
    {
      title: "24/7 Support",
      description: "AI voice agents provide 24/7 support for scheduling, technical issues, and FAQs"
    },
    {
      title: "Smart Routing",
      description: "Intelligent call routing ensures patients reach the right support team quickly"
    },
    {
      title: "Proactive Engagement",
      description: "Proactive engagement keeps patients informed about appointments and follow-ups"
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Reduce call center costs by up to 70%"
    },
    {
      title: "Patient Satisfaction",
      description: "Improve patient satisfaction with instant, accurate support"
    },
    {
      title: "Scalability",
      description: "Scale your operations without adding staff"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="AI Solutions for Telehealth Providers"
        subtitle="Enhance virtual care with AI-powered patient support."
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