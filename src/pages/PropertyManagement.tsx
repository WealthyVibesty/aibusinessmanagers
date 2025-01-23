import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Bot, Zap, BarChart3, Clock, Users, Shield, ArrowRight, MessageSquare, Smartphone, Workflow } from "lucide-react";
import SEO from "@/components/SEO";

export default function PropertyManagement() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Efficiency & Productivity",
      description: "Automate repetitive tasks and enable teams to focus on high-value activities",
      delay: "100ms"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Real-Time Decision-Making",
      description: "AI-powered analytics provide actionable insights for better business decisions",
      delay: "200ms"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Cost Reduction",
      description: "Save time and resources through precision-driven AI systems",
      delay: "300ms"
    }
  ];

  const features = [
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "AI Workflow Automation",
      description: "Create dynamic workflows for automated updates and notifications",
      delay: "100ms"
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "AI Agent Integration",
      description: "Deploy AI agents capable of performing specific tasks and managing inquiries",
      delay: "200ms"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Communication Enhancement",
      description: "Integrate SMS notifications and WhatsApp bots for automated responses",
      delay: "300ms"
    }
  ];

  const useCases = [
    {
      title: "Print Shop Automation",
      description: "Dynamic pricing updates and automated customer notifications",
      image: "/lovable-uploads/7684e1f5-eb8e-496a-b3c4-71d7de1d3444.png",
      delay: "100ms"
    },
    {
      title: "Customer Service",
      description: "Instant responses and seamless client onboarding",
      image: "/lovable-uploads/7684e1f5-eb8e-496a-b3c4-71d7de1d3444.png",
      delay: "200ms"
    },
    {
      title: "Remote Management",
      description: "AI tools for distributed teams and digital operations",
      image: "/lovable-uploads/7684e1f5-eb8e-496a-b3c4-71d7de1d3444.png",
      delay: "300ms"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Business Managers - Streamline Your Operations"
        description="Transform your business operations with AI-powered automation and management solutions."
      />

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] animate-grid-flow" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slideDown leading-tight">
            Transform Your Business<br />with AI Business Managers
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 animate-slideUp max-w-3xl mx-auto opacity-90">
            Streamline operations, improve efficiency, and reduce manual workloads with AI-driven solutions tailored for your business.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50 animate-scale shadow-xl hover:shadow-2xl transition-all duration-300 group"
            onClick={() => navigate("/demo")}
          >
            Get Started for $250
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeIn">
            Key Benefits of AI Business Managers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card 
                key={i} 
                className="p-8 hover:shadow-xl transition-all duration-300 animate-slideUp group hover:-translate-y-2"
                style={{ animationDelay: benefit.delay }}
              >
                <div className="space-y-4">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeIn">
            Powerful Features for Modern Business
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card 
                key={i} 
                className="p-8 hover:shadow-xl transition-all duration-300 animate-slideUp group hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: feature.delay }}
              >
                <div className="space-y-4">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeIn">
            Real-World Applications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, i) => (
              <Card 
                key={i} 
                className="overflow-hidden group animate-slideUp hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: useCase.delay }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-scale">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl text-blue-100">
            Get started with a personalized strategy session for just $250
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            onClick={() => navigate("/demo")}
          >
            Schedule Your Session
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}