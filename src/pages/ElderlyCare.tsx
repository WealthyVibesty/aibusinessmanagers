import { Button } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Clock, 
  Bell, 
  Shield,
  Brain,
  Activity,
  ArrowRight,
  HeartPulse,
  Stethoscope
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ElderlyCare() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            AI-Powered Elderly Care Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slideUp">
            Enhance senior care with intelligent monitoring, personalized assistance, 
            and proactive health management powered by artificial intelligence.
          </p>
          <Button 
            size="lg" 
            className="animate-slideUp"
            onClick={() => navigate("/checkout")}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Senior Care Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <HeartPulse className="h-8 w-8 text-primary" />,
                title: "Health Monitoring",
                description: "24/7 vital signs tracking and health status updates"
              },
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "Cognitive Support",
                description: "AI-powered activities for mental wellness"
              },
              {
                icon: <Bell className="h-8 w-8 text-primary" />,
                title: "Smart Alerts",
                description: "Immediate notifications for caregivers"
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Medication Management",
                description: "Automated reminders and tracking"
              },
              {
                icon: <Activity className="h-8 w-8 text-primary" />,
                title: "Activity Monitoring",
                description: "Real-time tracking of daily activities"
              },
              {
                icon: <Stethoscope className="h-8 w-8 text-primary" />,
                title: "Remote Care",
                description: "Virtual health check-ins and consultations"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Enhanced safety and security for seniors",
              "Peace of mind for family members",
              "Early detection of health issues",
              "Improved quality of life",
              "Reduced caregiver burden",
              "Cost-effective care management"
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
              Ready to Transform Senior Care?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join healthcare providers who are revolutionizing elderly care with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate("/checkout")}
              >
                Start Now
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