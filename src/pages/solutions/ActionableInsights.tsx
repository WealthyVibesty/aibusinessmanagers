import { useNavigate } from "react-router-dom";
import { ChartBar, Database, Eye } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";

export default function ActionableInsights() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDemoClick = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.remove('hidden');
    }

    toast({
      title: "Let's explore your data needs",
      description: (
        <div className="flex flex-col gap-4">
          <p>Our AI assistant is here to help you understand how our insights can improve your operations.</p>
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
      title: "Detailed Analytics",
      description: "Detailed reports on call trends, patient satisfaction, and team performance",
      icon: <ChartBar className="w-6 h-6" />
    },
    {
      title: "Issue Identification",
      description: "Identifies common patient issues and areas for improvement",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Performance Tracking",
      description: "Tracks cost savings, call resolution times, and wait times",
      icon: <Database className="w-6 h-6" />
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

  return (
    <div className="min-h-screen">
      <SEO 
        title="Actionable Insights: Turn Data into Better Decisions"
        description="Get clear, data-driven insights to optimize your operations and improve patient care with AI-powered analytics."
        path="/actionable-insights"
      />
      
      <SolutionHero 
        title="Actionable Insights: Turn Data into Better Decisions"
        subtitle="Get clear, data-driven insights to optimize your operations and improve patient care."
        ctaText="Unlock the Power of Data"
        ctaAction={handleDemoClick}
      />
      
      <FeatureList 
        title="Key Features"
        features={features}
      />
      
      <HowItWorks steps={steps} />
      
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Performance Visibility</h3>
              <p className="text-gray-600">Provides visibility into call center performance</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Process Optimization</h3>
              <p className="text-gray-600">Helps identify and address bottlenecks</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
              <p className="text-gray-600">Drives continuous improvement with measurable results</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}