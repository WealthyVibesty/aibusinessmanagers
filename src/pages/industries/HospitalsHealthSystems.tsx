import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";

export default function HospitalsHealthSystems() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDemoClick = () => {
    // Show AI assistant widget
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.remove('hidden');
      console.log('Showing AI assistant for demo request');
    }

    // Show toast with pay now button
    toast({
      title: "Talk to our AI Assistant",
      description: (
        <div className="space-y-4">
          <p>Our AI assistant is ready to help you. You can also proceed directly to purchase.</p>
          <Button 
            onClick={() => navigate("/checkout")}
            className="w-full bg-primary hover:bg-primary/90"
          >
            Pay Now - $247
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ),
      duration: 10000,
    });
  };

  const challenges = [
    {
      title: "High Call Volumes",
      description: "Overwhelmed call centers with high call volumes"
    },
    {
      title: "Long Wait Times",
      description: "Long patient wait times and frustrated callers"
    },
    {
      title: "Rising Costs",
      description: "Rising operational costs and staff burnout"
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Cut call center costs by up to 70%"
    },
    {
      title: "Patient Satisfaction",
      description: "Improve patient satisfaction with faster, more accurate support"
    },
    {
      title: "Staff Efficiency",
      description: "Reduce staff workload and prevent burnout"
    }
  ];

  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="AI Solutions for Hospitals & Health Systems"
        subtitle="Streamline operations, reduce costs, and improve patient experiences with AI-powered voice solutions."
        ctaText="Schedule a Demo"
        ctaAction={handleDemoClick}
      />
      
      <FeatureList 
        title="Key Challenges"
        features={challenges}
      />
      
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <p className="text-lg">AI-powered voice agents handle up to 90% of routine calls, reducing wait times by 80%</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-primary mb-4" />
              <p className="text-lg">Intelligent call routing ensures patients reach the right department quickly</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <p className="text-lg">Task automation frees staff to focus on critical care and complex cases</p>
            </div>
          </div>
        </div>
      </section>
      
      <FeatureList 
        title="Benefits"
        features={benefits}
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading hospitals using AI voice agents to deliver exceptional support
          </p>
          <div className="pt-4 space-y-4">
            <Button 
              size="lg"
              onClick={handleDemoClick}
              className="text-lg px-8 py-6 h-auto group"
            >
              Transform Your Hospital's Call Center
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}