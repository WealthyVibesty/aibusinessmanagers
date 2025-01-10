import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function ActionableInsights() {
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
      title: "Detailed Analytics",
      description: "Detailed reports on call trends, patient satisfaction, and team performance"
    },
    {
      title: "Issue Identification",
      description: "Identifies common patient issues and areas for improvement"
    },
    {
      title: "Performance Tracking",
      description: "Tracks cost savings, call resolution times, and wait times"
    }
  ];

  const steps = [
    {
      title: "Data Collection",
      description: "AI analyzes every patient interaction and extracts key data points"
    },
    {
      title: "Insight Generation",
      description: "Presents insights in easy-to-read dashboards and reports"
    },
    {
      title: "Decision Support",
      description: "Helps you make informed decisions to improve operations and patient experiences"
    }
  ];

  const benefits = [
    {
      title: "Performance Visibility",
      description: "Provides visibility into call center performance"
    },
    {
      title: "Process Optimization",
      description: "Helps identify and address bottlenecks"
    },
    {
      title: "Continuous Improvement",
      description: "Drives continuous improvement with measurable results"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="Actionable Insights: Turn Data into Better Decisions"
        subtitle="Get clear, data-driven insights to optimize your operations and improve patient care"
        ctaText="Unlock the Power of Data"
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