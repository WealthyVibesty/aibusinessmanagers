import { Rocket, Target, TrendingUp } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";

export default function PilotPrograms() {
  const features = [
    {
      title: "Risk-Free Testing",
      description: "Try AI solutions on a small scale before full deployment"
    },
    {
      title: "ROI Analysis",
      description: "Measure the impact and benefits of AI implementation"
    },
    {
      title: "Customized Solutions",
      description: "Tailored programs based on your business needs"
    }
  ];

  const steps = [
    {
      title: "Assessment",
      description: "Evaluate your business needs and goals"
    },
    {
      title: "Implementation",
      description: "Deploy AI solutions on a small scale"
    },
    {
      title: "Analysis",
      description: "Measure results and plan for full deployment"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Pilot Programs"
        description="Test AI solutions with low-risk pilot programs before full implementation"
        path="/pilot-programs"
      />
      
      <SolutionHero 
        title="AI Pilot Programs"
        subtitle="Start small, prove value, and scale with confidence"
        ctaText="Get Started"
      />
      
      <FeatureList 
        title="Key Features"
        features={features}
      />
      
      <HowItWorks steps={steps} />
    </div>
  );
}