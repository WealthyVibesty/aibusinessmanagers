import { Code, Zap, Sparkles } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";

export default function AIWebsiteDevelopment() {
  const features = [
    {
      title: "AI-Driven Design",
      description: "Create modern, responsive websites optimized for conversion"
    },
    {
      title: "Dynamic Personalization",
      description: "Customize content based on user behavior and preferences"
    },
    {
      title: "Automation Integration",
      description: "Seamlessly integrate chatbots and data collection forms"
    }
  ];

  const steps = [
    {
      title: "Analysis",
      description: "AI analyzes your business needs and target audience"
    },
    {
      title: "Development",
      description: "Create a custom website with AI-powered features"
    },
    {
      title: "Integration",
      description: "Connect with your existing tools and platforms"
    }
  ];

  const benefits = [
    {
      title: "Faster Development",
      description: "Reduce development time by up to 70%"
    },
    {
      title: "Better Performance",
      description: "Optimized code and infrastructure"
    },
    {
      title: "Cost Effective",
      description: "Lower development and maintenance costs"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Website Development"
        description="Build modern, conversion-focused websites with AI-powered tools and features"
        path="/ai-website-development"
      />
      
      <SolutionHero 
        title="AI Website Development: Build Better Websites Faster"
        subtitle="Create modern, conversion-focused websites with AI-powered tools and features"
        ctaText="Start Building"
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