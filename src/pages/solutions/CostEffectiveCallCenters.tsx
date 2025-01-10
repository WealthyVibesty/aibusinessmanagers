import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import { DollarSign, TrendingUp, Users } from "lucide-react";

export default function CostEffectiveCallCenters() {
  const features = [
    {
      title: "High Automation",
      description: "Handles up to 90% of routine calls without human intervention"
    },
    {
      title: "Scalable Solution",
      description: "Scales effortlessly to handle call volume spikes"
    },
    {
      title: "Cost Reduction",
      description: "Reduces call center costs by up to 70%"
    }
  ];

  const steps = [
    {
      title: "AI Call Handling",
      description: "AI answers calls instantly, handling routine tasks"
    },
    {
      title: "Smart Transfer",
      description: "Complex issues are transferred to human agents with context"
    },
    {
      title: "Optimization",
      description: "Your call center operates efficiently with reduced staff needs"
    }
  ];

  const benefits = [
    {
      title: "Cost Savings",
      description: "Significant savings without compromising service quality"
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
      <SolutionHero 
        title="Cost-Effective Call Centers: Save Up to 70% with AI"
        subtitle="Replace expensive manual call handling with fast, accurate AI automation."
        ctaText="Ready to Transform Your Customer Service?"
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