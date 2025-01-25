import { Instagram, Zap, BarChart } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";

export default function InstagramAutomation() {
  const features = [
    {
      title: "Smart Comment Management",
      description: "AI-powered responses to comments and DMs"
    },
    {
      title: "Engagement Automation",
      description: "Automated likes, follows, and interaction management"
    },
    {
      title: "Analytics Dashboard",
      description: "Track performance and engagement metrics"
    }
  ];

  const steps = [
    {
      title: "Account Connection",
      description: "Link your Instagram business account"
    },
    {
      title: "Response Setup",
      description: "Configure AI response patterns and rules"
    },
    {
      title: "Automation Launch",
      description: "Start automating your Instagram engagement"
    }
  ];

  const benefits = [
    {
      title: "Time Savings",
      description: "Automate routine engagement tasks"
    },
    {
      title: "Increased Engagement",
      description: "Respond to comments and messages 24/7"
    },
    {
      title: "Better Insights",
      description: "Track and analyze your Instagram performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <SEO 
        title="Instagram Automation - AI Voice Agents"
        description="Automate your Instagram engagement with AI-powered tools for better reach and interaction."
        path="/solutions/instagram-automation"
      />
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 pointer-events-none" />
        
        <SolutionHero 
          title="Transform Your Instagram Presence with AI"
          subtitle="Automate engagement, manage comments, and grow your following with intelligent automation"
          ctaText="Boost Your Instagram Engagement"
        />
      </div>
      
      <div className="relative z-10">
        <FeatureList 
          title="Key Features"
          features={features}
        />
        
        <div className="py-16 px-6 bg-gradient-to-b from-white/80 to-pink-50/80 backdrop-blur-sm">
          <HowItWorks steps={steps} />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-purple-500/5 pointer-events-none" />
          <FeatureList 
            title="Benefits"
            features={benefits}
          />
        </div>
      </div>
    </div>
  );
}