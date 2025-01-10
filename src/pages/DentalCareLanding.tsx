import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Clock, Heart, Shield, Stethoscope, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FooterSection from "@/components/landing/sections/FooterSection";

export default function DentalCareLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
              Transform Your Dental Practice with AI Innovation
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 animate-slideUp">
              Enhance your dental practice with AI-powered tools that support better diagnoses, 
              streamline communication, and improve patient outcomes.
            </p>
            <Button 
              size="lg"
              className="animate-slideUp text-lg px-8 py-6 h-auto"
              onClick={() => navigate("/voice-agents")}
            >
              Explore Voice Agents
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Dental Care Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Smart Diagnostics",
                description: "AI-assisted diagnosis support for complex dental cases"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Patient Engagement",
                description: "Interactive tools to keep patients engaged in their dental health"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Treatment Planning",
                description: "AI-powered treatment plan optimization"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Scheduling",
                description: "Intelligent appointment management system"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Patient Experience",
                description: "Enhanced communication and care coordination"
              },
              {
                icon: <Stethoscope className="h-8 w-8" />,
                title: "Clinical Efficiency",
                description: "Streamlined workflows and documentation"
              }
            ].map((feature, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Dental AI Platform?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Increase practice efficiency by up to 40%",
              "Improve patient satisfaction and retention",
              "Reduce administrative workload",
              "Enhanced treatment outcomes",
              "Better resource allocation",
              "Comprehensive practice management"
            ].map((benefit, i) => (
              <div 
                key={i} 
                className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 bg-primary text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Dental Practice?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join leading dental practices using AI to enhance patient care
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate("/voice-agents")}
                >
                  Explore Voice Agents
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Schedule Demo
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
