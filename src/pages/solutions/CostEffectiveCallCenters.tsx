import { useNavigate } from "react-router-dom";
import { ChartBar, Phone, TrendingUp } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";

export default function CostEffectiveCallCenters() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDemoClick = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.remove('hidden');
    }

    toast({
      title: "Ready to reduce costs?",
      description: (
        <div className="flex flex-col gap-4">
          <p>Let's discuss how our AI solutions can help you save up to 70% on call center costs.</p>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Schedule Demo
          </button>
        </div>
      )
    });
  };

  const features = [
    {
      title: "High Automation",
      description: "Handles up to 90% of routine calls without human intervention",
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: "Cost Reduction",
      description: "Reduces call center costs by up to 70%",
      icon: <ChartBar className="w-6 h-6" />
    },
    {
      title: "Scalable Solution",
      description: "Scales effortlessly to handle call volume spikes",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const steps = [
    {
      title: "AI Call Handling",
      description: "AI answers calls instantly, handling routine tasks like scheduling and billing"
    },
    {
      title: "Smart Transfer",
      description: "For complex issues, calls are transferred to human agents with full context"
    },
    {
      title: "Optimization",
      description: "Your call center operates more efficiently, with fewer staff needed for routine tasks"
    }
  ];

  const benefits = [
    {
      title: "Cost Savings",
      description: "Significant cost savings without compromising service quality"
    },
    {
      title: "Better Service",
      description: "Improved patient satisfaction with faster response times"
    },
    {
      title: "Easy Scaling",
      description: "Scalable solution that grows with your organization"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Cost-Effective Call Centers: Save Up to 70% with AI"
        description="Replace expensive manual call handling with fast, accurate AI automation for your healthcare call center."
        path="/cost-effective-call-centers"
      />
      
      <SolutionHero 
        title="Cost-Effective Call Centers: Save Up to 70% with AI"
        subtitle="Replace expensive manual call handling with fast, accurate AI automation."
        ctaText="Cut Call Center Costs by 70%"
        ctaAction={handleDemoClick}
      />
      
      <FeatureList 
        title="Key Features"
        features={features}
      />
      
      <HowItWorks steps={steps} />
      
      <FeatureList 
        title="Benefits"
        features={benefits}
      />
    </div>
  );
}