import { Database, RefreshCw, LineChart } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";

export default function CRMIntegration() {
  const features = [
    {
      title: "Seamless Sync",
      description: "Automatic data synchronization with popular CRM platforms"
    },
    {
      title: "Customer Tracking",
      description: "Track all customer interactions and update profiles automatically"
    },
    {
      title: "Workflow Automation",
      description: "Automate follow-ups and task management"
    }
  ];

  const steps = [
    {
      title: "Connect",
      description: "Link your CRM platform with our AI tools"
    },
    {
      title: "Configure",
      description: "Set up data mapping and automation rules"
    },
    {
      title: "Activate",
      description: "Start automating your customer relationship management"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="CRM Integration"
        description="Seamlessly connect AI tools with your CRM platform for automated customer management"
        path="/crm-integration"
      />
      
      <SolutionHero 
        title="CRM Integration"
        subtitle="Connect AI tools with your CRM for seamless customer management"
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