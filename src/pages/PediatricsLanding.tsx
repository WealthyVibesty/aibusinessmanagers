import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Baby, Brain, Heart, Shield, Stethoscope, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PediatricsLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Transforming Pediatric Care with AI Innovation
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 animate-slideUp">
            Enhance your pediatric practice with AI-powered tools that support better diagnoses, 
            streamline communication, and improve patient outcomes.
          </p>
          <Button 
            size="lg"
            className="animate-slideUp text-lg px-8 py-6 h-auto"
            onClick={() => navigate("/checkout")}
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Pediatric Care Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Smart Diagnostics",
                description: "AI-assisted diagnosis support for complex pediatric cases"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Patient Engagement",
                description: "Interactive tools to keep young patients and families engaged"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Preventive Care",
                description: "Proactive health monitoring and early intervention tools"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Family Communication",
                description: "Enhanced communication platforms for families and care teams"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Development Tracking",
                description: "Advanced tools for monitoring child development milestones"
              },
              {
                icon: <Baby className="h-8 w-8" />,
                title: "Child-Friendly Interface",
                description: "Age-appropriate interfaces for better patient experience"
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
            Why Choose Our Pediatric Care Platform?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Improved patient outcomes through AI-assisted diagnosis",
              "Enhanced communication between providers and families",
              "Streamlined practice management and documentation",
              "Better engagement with young patients and their families",
              "Advanced growth and development monitoring tools",
              "Comprehensive support for complex pediatric cases"
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm">
                <div className="flex-shrink-0">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Transform Your Pediatric Practice Today
          </h2>
          <p className="text-xl text-gray-600">
            Join leading pediatric practices in delivering exceptional care with AI support
          </p>
          <div className="pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => navigate("/checkout")}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600">support@example.com</p>
              <p className="text-gray-600">1-800-PEDS-AI</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-600 hover:text-primary block">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-primary block">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-primary block">Facebook</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-600 hover:text-primary block">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-primary block">Terms of Service</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Trust & Security</h3>
              <div className="flex items-center gap-2 text-primary">
                <Shield className="h-5 w-5" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}