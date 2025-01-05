import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight,
  Brain,
  Clock, 
  Heart,
  Shield,
  Stethoscope
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DentalCareLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-16 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 animate-slideUp">
          AI-Powered Dental Care Solutions
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slideUp max-w-3xl mx-auto" style={{ animationDelay: "100ms" }}>
          Transform your dental practice with intelligent scheduling, treatment planning, and patient care optimization
        </p>
        <Button 
          size="lg" 
          className="animate-slideUp" 
          style={{ animationDelay: "200ms" }}
          onClick={() => navigate("/checkout")}
        >
          Enhance Your Practice Today
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Advanced Dental Practice Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "Smart Treatment Planning",
                description: "AI-powered treatment plan optimization and recommendations"
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Intelligent Scheduling",
                description: "Automated appointment management and reminders"
              },
              {
                icon: <Stethoscope className="h-8 w-8 text-primary" />,
                title: "Patient Care Analysis",
                description: "Advanced diagnostics and treatment tracking"
              },
              {
                icon: <Heart className="h-8 w-8 text-primary" />,
                title: "Patient Experience",
                description: "Personalized care and communication"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Compliance Management",
                description: "Automated regulatory compliance and documentation"
              },
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "AI Diagnostics",
                description: "Advanced imaging analysis and detection"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all animate-slideUp" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
            ].map((benefit, index) => (
              <div 
                key={index} 
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
                onClick={() => navigate("/checkout")}
              >
                Get Started Now
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
  );
}