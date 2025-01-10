import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";

export default function CallRouting() {
  const features = [
    {
      title: "AI-Powered Routing",
      description: "Automatically identify call purpose and route to the right department"
    },
    {
      title: "Context Preservation",
      description: "Provide agents with full call context for faster resolution"
    },
    {
      title: "Smart Escalation",
      description: "Seamlessly transfer complex issues to specialized teams"
    }
  ];

  const steps = [
    {
      title: "Call Analysis",
      description: "AI analyzes the caller's request in real-time"
    },
    {
      title: "Smart Routing",
      description: "Calls are instantly routed to the best available agent"
    },
    {
      title: "Context Transfer",
      description: "All relevant information is passed to the agent"
    }
  ];

  const benefits = [
    {
      title: "50% Faster Resolution",
      description: "Reduce average call resolution time significantly"
    },
    {
      title: "Improved Efficiency",
      description: "Optimize agent workload and reduce transfers"
    },
    {
      title: "Better Experience",
      description: "Enhance patient satisfaction with faster routing"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="Intelligent Call Routing: Faster, Smarter Support"
        subtitle="Route calls to the right person, every time, with AI-powered precision."
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