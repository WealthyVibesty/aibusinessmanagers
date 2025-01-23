import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Building2, MessageSquare, BarChart3, Clock, Users, Shield } from "lucide-react";

export default function PropertyManagement() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Multiple Channels",
      description: "One AI Assistant to handle all your communication channels"
    },
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      title: "Elite CRM",
      description: "Seamlessly integrate with your existing property management software"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Smart Analytics",
      description: "Get actionable insights from tenant interactions"
    }
  ];

  const testimonials = [
    {
      quote: "Reduced our response time by 80% while improving tenant satisfaction",
      author: "Property Manager, Luxury Apartments"
    },
    {
      quote: "The AI assistant handles routine inquiries perfectly, letting our team focus on growth",
      author: "Regional Director, Real Estate Group"
    }
  ];

  const propertyTypes = [
    {
      title: "Residential",
      image: "/lovable-uploads/7684e1f5-eb8e-496a-b3c4-71d7de1d3444.png",
      description: "Perfect for apartment complexes and multi-family units"
    },
    {
      title: "Commercial",
      image: "/lovable-uploads/7684e1f5-eb8e-496a-b3c4-71d7de1d3444.png",
      description: "Ideal for office buildings and retail spaces"
    },
    {
      title: "Mixed-Use",
      image: "/lovable-uploads/7684e1f5-eb8e-496a-b3c4-71d7de1d3444.png",
      description: "Comprehensive solution for diverse property portfolios"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "24/7 Availability",
      description: "Never miss a tenant inquiry"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Reduced Workload",
      description: "Automate up to 80% of routine tasks"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Enhanced Security",
      description: "Enterprise-grade security for your data"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold animate-fadeIn">
            Housing's All-in-One<br />AI Assistant & CRM
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-slideUp">
            Transform your property management operations with AI-powered automation
          </p>
          <Button 
            size="lg" 
            className="mt-8 bg-white text-purple-900 hover:bg-gray-100 animate-scale"
            onClick={() => navigate("/demo")}
          >
            Try It Free For 14 Days
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow animate-fadeIn">
                <div className="space-y-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="p-6 bg-purple-800 border-none text-white animate-slideUp">
                <blockquote className="space-y-4">
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                  <footer className="text-sm opacity-75">— {testimonial.author}</footer>
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">All Property Types Supported</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {propertyTypes.map((type, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow animate-fadeIn">
                <img src={type.image} alt={type.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow animate-slideUp">
                <div className="space-y-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-purple-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Property Management?</h2>
          <p className="text-xl opacity-90">Join leading property management companies using our AI solution</p>
          <Button 
            size="lg" 
            className="mt-8 bg-white text-purple-900 hover:bg-gray-100"
            onClick={() => navigate("/pricing")}
          >
            View Pricing
          </Button>
        </div>
      </section>
    </div>
  );
}