import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Calendar, ClipboardList } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";

export default function SpecialtyCare() {
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
      title: "Complex Scheduling",
      description: "Complex scheduling and follow-up needs"
    },
    {
      title: "High Call Volume",
      description: "High call volumes for specialized inquiries"
    },
    {
      title: "Limited Staff",
      description: "Limited staff to manage patient communication"
    }
  ];

  const solutions = [
    {
      title: "AI Voice Agents",
      description: "AI voice agents handle routine calls, freeing staff to focus on complex cases"
    },
    {
      title: "Task Automation",
      description: "Task automation manages appointment reminders, follow-ups, and insurance checks"
    },
    {
      title: "Actionable Insights",
      description: "Actionable insights help you identify trends and improve patient care"
    }
  ];

  const benefits = [
    {
      title: "Reduced Workload",
      description: "Reduce staff workload by up to 50%"
    },
    {
      title: "Better Adherence",
      description: "Improve patient adherence with timely reminders and follow-ups"
    },
    {
      title: "Enhanced Satisfaction",
      description: "Enhance patient satisfaction with faster, more accurate support"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="AI Solutions for Specialty Care Providers"
        subtitle="Deliver personalized care with AI-powered efficiency."
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