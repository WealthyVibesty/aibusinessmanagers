import { Database, Zap, Users } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";

export default function CRMIntegration() {
  const features = [
    {
      title: "Seamless Integration",
      description: "Connect your CRM system with AI voice agents for unified customer data"
    },
    {
      title: "Automated Data Entry",
      description: "Eliminate manual data entry with intelligent automation"
    },
    {
      title: "Real-time Updates",
      description: "Keep your CRM up-to-date with instant conversation syncing"
    }
  ];

  const steps = [
    {
      title: "Connect",
      description: "Link your CRM system with our AI platform"
    },
    {
      title: "Configure",
      description: "Set up data mapping and automation rules"
    },
    {
      title: "Launch",
      description: "Start automating your customer interactions"
    }
  ];

  const benefits = [
    {
      title: "Enhanced Efficiency",
      description: "Save hours of manual data entry and updates"
    },
    {
      title: "Better Insights",
      description: "Get a complete view of customer interactions"
    },
    {
      title: "Improved Accuracy",
      description: "Eliminate human error in data entry"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <SEO 
        title="CRM Integration - AI Voice Agents"
        description="Seamlessly integrate AI voice agents with your CRM system for automated customer data management."
        path="/solutions/crm-integration"
      />
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none" />
        
        <SolutionHero 
          title="Seamless CRM Integration for Enhanced Customer Management"
          subtitle="Connect your CRM system with AI voice agents for unified customer data and automated workflows"
          ctaText="Get Started with CRM Integration"
        />
      </div>
      
      <div className="relative z-10">
        <FeatureList 
          title="Key Features"
          features={features}
        />
        
        <div className="py-16 px-6 bg-gradient-to-b from-white/80 to-blue-50/80 backdrop-blur-sm">
          <HowItWorks steps={steps} />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 pointer-events-none" />
          <FeatureList 
            title="Benefits"
            features={benefits}
          />
        </div>
      </div>
    </div>
  );
}