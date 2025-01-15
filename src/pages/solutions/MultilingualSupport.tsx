import { Globe, MessageCircle, Users } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";

export default function MultilingualSupport() {
  const features = [
    {
      title: "Real-time Translation",
      description: "Instant translation across multiple languages for seamless communication"
    },
    {
      title: "Cultural Context",
      description: "AI that understands cultural nuances and regional differences"
    },
    {
      title: "Multi-channel Support",
      description: "Consistent language support across all communication channels"
    }
  ];

  const steps = [
    {
      title: "Language Setup",
      description: "Configure your preferred languages and translation settings"
    },
    {
      title: "Integration",
      description: "Connect with your existing communication channels"
    },
    {
      title: "Launch",
      description: "Start providing multilingual support to your customers"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Multilingual AI Support"
        description="Provide customer service in multiple languages with AI-powered translation"
        path="/multilingual-support"
      />
      
      <SolutionHero 
        title="Multilingual AI Support"
        subtitle="Break language barriers with AI-powered customer service"
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