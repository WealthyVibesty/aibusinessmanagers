import { MessageSquare, Bot, Zap } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";

export default function AIChatbots() {
  const features = [
    {
      title: "Real-time Engagement",
      description: "Engage customers instantly on websites and social media"
    },
    {
      title: "Smart Escalation",
      description: "Seamlessly transfer complex cases to human agents"
    },
    {
      title: "Multi-platform Support",
      description: "Deploy across websites, Instagram, Facebook, and more"
    }
  ];

  const steps = [
    {
      title: "Setup",
      description: "Configure chatbot with your business rules and responses"
    },
    {
      title: "Integration",
      description: "Deploy across your digital channels"
    },
    {
      title: "Optimization",
      description: "Continuously improve responses based on interactions"
    }
  ];

  const benefits = [
    {
      title: "24/7 Availability",
      description: "Provide instant support around the clock"
    },
    {
      title: "Lead Generation",
      description: "Convert more visitors into qualified leads"
    },
    {
      title: "Cost Savings",
      description: "Reduce support costs while improving service"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI-Powered Chatbots"
        description="Engage customers instantly with intelligent chatbots across all your digital channels"
        path="/ai-chatbots"
      />
      
      <SolutionHero 
        title="AI-Powered Chatbots: Instant Customer Engagement"
        subtitle="Convert more visitors into leads with intelligent conversation automation"
        ctaText="Start Converting"
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