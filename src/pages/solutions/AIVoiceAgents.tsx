import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AIVoiceAgents() {
  const navigate = useNavigate();

  const features = [
    {
      title: "24/7 Instant Call Answering",
      description: "Never miss a patient call with AI that's always available"
    },
    {
      title: "Comprehensive Support",
      description: "Handle scheduling, billing inquiries, and test result delivery"
    },
    {
      title: "Multilingual Support",
      description: "Serve diverse patient populations in their preferred language"
    }
  ];

  const steps = [
    {
      title: "Initial Contact",
      description: "Patients call your support line and are greeted by an AI voice agent"
    },
    {
      title: "Request Processing",
      description: "AI understands the request and provides instant answers or completes tasks"
    },
    {
      title: "Seamless Handoff",
      description: "Complex issues are transferred to human agents with full context"
    }
  ];

  const benefits = [
    {
      title: "Reduced Wait Times",
      description: "Cut patient wait times by up to 80%"
    },
    {
      title: "High Automation",
      description: "Handle 90% of routine calls automatically"
    },
    {
      title: "Improved Satisfaction",
      description: "Enhance patient experience with instant support"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="AI-Powered Voice Agents: Instant Support, 24/7"
        subtitle="Answer calls instantly, handle routine tasks, and free up your team to focus on patient care."
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

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Call Center?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading healthcare providers using AI voice agents to deliver exceptional support
          </p>
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={() => navigate("/checkout")}
              className="text-lg px-8 py-6 h-auto"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}