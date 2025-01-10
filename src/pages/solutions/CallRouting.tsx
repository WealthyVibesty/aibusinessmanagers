import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function CallRouting() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDemoClick = () => {
    // Show the AI assistant
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.remove('hidden');
    }

    // Show toast with Pay Now button
    toast({
      title: "Let's get started!",
      description: (
        <div className="flex flex-col gap-4">
          <p>Our AI assistant is here to help you. Feel free to ask any questions!</p>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Pay Now
          </button>
        </div>
      )
    });
  };

  const features = [
    {
      title: "AI-Powered Routing",
      description: "AI identifies call purpose and routes it to the appropriate department"
    },
    {
      title: "Context Preservation",
      description: "Provides agents with full call context for faster resolution"
    },
    {
      title: "Smart Escalation",
      description: "Reduces call transfer times and improves first-call resolution rates"
    }
  ];

  const steps = [
    {
      title: "Call Analysis",
      description: "AI analyzes the caller's request and determines the best department or agent"
    },
    {
      title: "Instant Routing",
      description: "Calls are routed instantly, with all relevant information passed to the agent"
    },
    {
      title: "Seamless Escalation",
      description: "Complex issues are escalated seamlessly, ensuring no patient is left waiting"
    }
  ];

  const benefits = [
    {
      title: "Faster Resolution",
      description: "Reduces call resolution time by 50%"
    },
    {
      title: "Improved Efficiency",
      description: "Improves agent efficiency and reduces frustration"
    },
    {
      title: "Enhanced Satisfaction",
      description: "Enhances patient satisfaction with faster, more accurate support"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="Intelligent Call Routing: Faster, Smarter Support"
        subtitle="Route calls to the right person, every time, with AI-powered precision"
        ctaText="Optimize Your Call Routing Today"
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