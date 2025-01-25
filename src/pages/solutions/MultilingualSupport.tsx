import { Globe, MessageCircle, Users } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";

export default function MultilingualSupport() {
  const features = [
    {
      title: "Real-time Translation",
      description: "Instant translation across multiple languages during conversations"
    },
    {
      title: "Cultural Adaptation",
      description: "AI that understands cultural nuances and context"
    },
    {
      title: "Voice & Text Support",
      description: "Multilingual support across all communication channels"
    }
  ];

  const steps = [
    {
      title: "Language Setup",
      description: "Configure your preferred languages and dialects"
    },
    {
      title: "AI Training",
      description: "Train the AI with industry-specific terminology"
    },
    {
      title: "Launch",
      description: "Start supporting customers in multiple languages"
    }
  ];

  const benefits = [
    {
      title: "Global Reach",
      description: "Expand your business to international markets"
    },
    {
      title: "Customer Satisfaction",
      description: "Provide support in customers' preferred languages"
    },
    {
      title: "Cost Efficiency",
      description: "Reduce the need for multiple language-specific teams"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <SEO 
        title="Multilingual Support - AI Voice Agents"
        description="Provide seamless customer support across multiple languages with AI-powered voice agents."
        path="/solutions/multilingual-support"
      />
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 pointer-events-none" />
        
        <SolutionHero 
          title="Break Language Barriers with AI-Powered Support"
          subtitle="Provide seamless customer support across multiple languages with intelligent voice agents"
          ctaText="Start Supporting Global Customers"
        />
      </div>
      
      <div className="relative z-10">
        <FeatureList 
          title="Key Features"
          features={features}
        />
        
        <div className="py-16 px-6 bg-gradient-to-b from-white/80 to-indigo-50/80 backdrop-blur-sm">
          <HowItWorks steps={steps} />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-purple-500/5 pointer-events-none" />
          <FeatureList 
            title="Benefits"
            features={benefits}
          />
        </div>
      </div>
    </div>
  );
}