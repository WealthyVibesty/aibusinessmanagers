import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Activity, 
  Calendar, 
  HeartPulse, 
  Pill, 
  Clock, 
  Shield,
  ArrowRight,
  LineChart,
  Bell
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChronicDiseaseLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            AI-Powered Chronic Disease Management
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slideUp">
            Transform chronic disease care with intelligent monitoring, personalized insights, 
            and proactive interventions powered by artificial intelligence.
          </p>
          <Button 
            size="lg" 
            className="animate-slideUp"
            onClick={() => navigate("/checkout")}
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Disease Management
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <HeartPulse className="h-8 w-8 text-primary" />,
                title: "Real-time Monitoring",
                description: "Continuous tracking of vital signs and symptoms"
              },
              {
                icon: <LineChart className="h-8 w-8 text-primary" />,
                title: "Predictive Analytics",
                description: "Early detection of potential complications"
              },
              {
                icon: <Pill className="h-8 w-8 text-primary" />,
                title: "Medication Management",
                description: "Smart reminders and adherence tracking"
              },
              {
                icon: <Calendar className="h-8 w-8 text-primary" />,
                title: "Care Planning",
                description: "Personalized treatment schedules and goals"
              },
              {
                icon: <Bell className="h-8 w-8 text-primary" />,
                title: "Smart Alerts",
                description: "Timely notifications for patients and caregivers"
              },
              {
                icon: <Activity className="h-8 w-8 text-primary" />,
                title: "Lifestyle Tracking",
                description: "Monitor diet, exercise, and daily activities"
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
      <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Reduce hospital readmissions by up to 30%",
              "Improve medication adherence rates",
              "Early detection of health deterioration",
              "Better coordination between care providers",
              "Enhanced quality of life for patients",
              "Significant cost savings in long-term care"
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

      {/* How It Works */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="h-8 w-8 text-primary" />,
                title: "Connect Devices",
                description: "Seamlessly integrate with medical devices and wearables"
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Monitor & Analyze",
                description: "AI continuously analyzes data for patterns and risks"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Take Action",
                description: "Receive personalized recommendations and alerts"
              }
            ].map((step, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-primary text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Chronic Disease Management?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join healthcare providers who are revolutionizing patient care with AI
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
