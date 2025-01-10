import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";

export default function ActionableInsights() {
  const features = [
    {
      title: "Detailed Analytics",
      description: "Get detailed reports on call trends, patient satisfaction, and team performance"
    },
    {
      title: "Issue Identification",
      description: "Identify common patient issues and areas for improvement"
    },
    {
      title: "Performance Tracking",
      description: "Track cost savings, call resolution times, and wait times"
    }
  ];

  const steps = [
    {
      title: "Data Collection",
      description: "AI analyzes every patient interaction and extracts key data points"
    },
    {
      title: "Analysis",
      description: "Data is processed into easy-to-read dashboards and reports"
    },
    {
      title: "Action",
      description: "Make informed decisions to improve operations and patient experiences"
    }
  ];

  const benefits = [
    {
      title: "Clear Visibility",
      description: "Get complete visibility into call center performance"
    },
    {
      title: "Bottleneck Detection",
      description: "Quickly identify and address operational bottlenecks"
    },
    {
      title: "Continuous Improvement",
      description: "Drive improvements with measurable results"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="Actionable Insights: Turn Data into Better Decisions"
        subtitle="Get clear, data-driven insights to optimize your operations and improve patient care."
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