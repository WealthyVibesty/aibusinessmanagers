import { Instagram, MessageCircle, ArrowRight } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";

export default function InstagramAutomation() {
  const features = [
    {
      title: "Comment Management",
      description: "Automatically respond to comments on your Instagram posts"
    },
    {
      title: "DM Automation",
      description: "Send personalized follow-up messages to engaged users"
    },
    {
      title: "Lead Generation",
      description: "Convert social engagement into business opportunities"
    }
  ];

  const steps = [
    {
      title: "Connect",
      description: "Link your Instagram business account"
    },
    {
      title: "Configure",
      description: "Set up response templates and automation rules"
    },
    {
      title: "Engage",
      description: "Start automating your Instagram interactions"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Instagram Automation"
        description="Automate Instagram comments and DMs to boost engagement and generate leads"
        path="/instagram-automation"
      />
      
      <SolutionHero 
        title="Instagram Automation"
        subtitle="Automate your Instagram engagement to grow your business"
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