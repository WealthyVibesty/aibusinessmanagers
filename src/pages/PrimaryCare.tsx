import Header from "@/components/landing/Header";
import FooterSection from "@/components/landing/sections/FooterSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, Bell, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function PrimaryCare() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "24/7 Patient Support",
      description: "AI voice agents handle routine inquiries, appointment scheduling, and prescription refills"
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Smart Scheduling",
      description: "Automated appointment management with intelligent prioritization"
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Proactive Care",
      description: "Automated preventive care reminders and follow-ups"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Multilingual Support",
      description: "Break language barriers with AI voice agents that speak multiple languages"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
              Transform Your Primary Care Practice with AI Voice Agents
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slideUp">
              Streamline operations, enhance patient care, and reduce administrative burden with intelligent voice technology
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/checkout")}
              className="animate-slideUp text-lg px-8 py-6 h-auto"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Comprehensive Voice AI Solutions for Primary Care
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => (
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

        <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-gray-600">
              Join leading primary care practices using AI voice agents to deliver exceptional care
            </p>
            <div className="pt-4">
              <Button 
                size="lg"
                onClick={() => navigate("/checkout")}
                className="text-lg px-8 py-6 h-auto"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}