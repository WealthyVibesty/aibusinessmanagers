import { MessageSquare, Zap, Users } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";

export default function SMSMarketing() {
  const features = [
    {
      title: "Automated SMS Campaigns",
      description: "Schedule and send targeted SMS messages to your customer base"
    },
    {
      title: "List Building Tools",
      description: "Grow your SMS subscriber list with opt-in forms and landing pages"
    },
    {
      title: "Analytics & Tracking",
      description: "Monitor campaign performance and engagement metrics"
    }
  ];

  const steps = [
    {
      title: "Setup",
      description: "Connect your SMS provider and import contacts"
    },
    {
      title: "Campaign Creation",
      description: "Design your SMS campaigns and set targeting rules"
    },
    {
      title: "Launch & Monitor",
      description: "Send campaigns and track results in real-time"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="SMS Marketing and List Building"
        description="Engage customers with automated SMS campaigns and grow your subscriber list"
        path="/sms-marketing"
      />
      
      <SolutionHero 
        title="SMS Marketing & List Building"
        subtitle="Build and engage your audience through targeted SMS campaigns"
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