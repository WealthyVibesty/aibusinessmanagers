import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Heart, Home, MessageSquare, Shield, Stethoscope, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomeHealthcareLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Transform Home Healthcare with AI-Powered Support
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 animate-slideUp">
            Enhance patient care and streamline operations with intelligent solutions 
            designed for home healthcare providers.
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
            Comprehensive Home Healthcare Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Home className="h-8 w-8" />,
                title: "Remote Patient Monitoring",
                text: "Track vital signs and health metrics in real-time"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Schedule Optimization",
                text: "Efficiently manage caregiver schedules and routes"
              },
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Care Communication",
                text: "Seamless communication between caregivers and families"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Compliance Management",
                text: "Ensure adherence to healthcare regulations"
              }
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Home Healthcare Platform?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Improve patient outcomes with data-driven care decisions",
              "Reduce administrative burden with automated scheduling",
              "Enhance communication between care team members",
              "Ensure compliance with regulatory requirements"
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm">
                <div className="flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Team Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Supporting Your Entire Care Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Stethoscope className="h-8 w-8" />,
                title: "Healthcare Providers",
                description: "Access patient data and care plans instantly"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Care Coordinators",
                description: "Efficiently manage schedules and resources"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Family Members",
                description: "Stay informed about loved ones' care progress"
              }
            ].map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Transform Your Home Healthcare Services Today
          </h2>
          <p className="text-xl text-gray-600">
            Join healthcare providers who are revolutionizing home care delivery
          </p>
          <div className="pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => navigate("/checkout")}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}