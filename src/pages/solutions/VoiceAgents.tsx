import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function VoiceAgents() {
  const navigate = useNavigate();

  const features = [
    {
      title: "24/7 Instant Call Answering",
      description: "Never miss a patient call with AI that's always available",
      icon: <Clock className="w-6 h-6 text-primary" />
    },
    {
      title: "Comprehensive Support",
      description: "Handle scheduling, billing inquiries, and test result delivery",
      icon: <Phone className="w-6 h-6 text-primary" />
    },
    {
      title: "Multilingual Support",
      description: "Serve diverse patient populations in their preferred language",
      icon: <Users className="w-6 h-6 text-primary" />
    }
  ];

  const benefits = [
    "Reduces patient wait times by up to 80%",
    "Handles up to 90% of routine calls without human intervention",
    "Improves patient satisfaction with instant, accurate support"
  ];

  const steps = [
    {
      title: "Initial Contact",
      description: "Patients call your support line and are greeted by an AI voice agent"
    },
    {
      title: "Instant Resolution",
      description: "The AI understands their request and provides instant answers or completes tasks"
    },
    {
      title: "Seamless Escalation",
      description: "Complex issues are transferred to human agents with full context"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Voice Agents: Instant Support, 24/7
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Answer calls instantly, handle routine tasks, and free up your team to focus on patient care.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/checkout")}
            className="text-lg px-8 py-6 h-auto"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-blue-50">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transform Your Call Center Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            See how AI Voice Agents can revolutionize your patient support
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/checkout")}
            className="text-lg px-8 py-6 h-auto"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}