import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Ambulance, 
  Clock, 
  HeartPulse, 
  Phone, 
  Shield, 
  ArrowRight,
  MapPin,
  AlertCircle,
  Stethoscope
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EmergencyServicesLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-16 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-red-600 mb-6 animate-slideUp">
          AI-Enhanced Emergency Response Services
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slideUp max-w-3xl mx-auto" style={{ animationDelay: "100ms" }}>
          Revolutionizing emergency response with intelligent dispatch, real-time coordination, and predictive analytics
        </p>
        <Button 
          size="lg" 
          className="animate-slideUp bg-red-600 hover:bg-red-700" 
          style={{ animationDelay: "200ms" }}
          onClick={() => navigate("/checkout")}
        >
          Learn More
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Advanced Emergency Response Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Ambulance className="h-8 w-8 text-red-600" />,
                title: "Smart Dispatch",
                description: "AI-powered dispatch system for optimal resource allocation"
              },
              {
                icon: <MapPin className="h-8 w-8 text-red-600" />,
                title: "Real-time Tracking",
                description: "Live location tracking and route optimization"
              },
              {
                icon: <Phone className="h-8 w-8 text-red-600" />,
                title: "Emergency Communication",
                description: "Instant multi-channel emergency communications"
              },
              {
                icon: <HeartPulse className="h-8 w-8 text-red-600" />,
                title: "Vital Monitoring",
                description: "Real-time patient vital signs monitoring"
              },
              {
                icon: <AlertCircle className="h-8 w-8 text-red-600" />,
                title: "Incident Prediction",
                description: "AI-driven emergency incident prediction"
              },
              {
                icon: <Stethoscope className="h-8 w-8 text-red-600" />,
                title: "Medical Integration",
                description: "Seamless integration with medical facilities"
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
      <section className="py-16 px-6 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Emergency Services Platform?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Reduce response times by up to 40%",
              "Improve resource allocation efficiency",
              "Enhanced coordination between emergency teams",
              "Better patient outcomes through quick response",
              "Real-time data-driven decision making",
              "Comprehensive emergency management system"
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Shield className="h-6 w-6 text-red-600 flex-shrink-0" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-red-600 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Emergency Services?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join leading emergency response teams using AI to save more lives
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
                className="bg-white text-red-600 hover:bg-white/90"
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