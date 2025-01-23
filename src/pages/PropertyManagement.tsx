import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Building2, MessageSquare, BarChart3, Clock, Users, Shield, ArrowRight } from "lucide-react";

export default function PropertyManagement() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Multiple Channels",
      description: "One AI Assistant to handle all your communication channels"
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Elite CRM",
      description: "Seamlessly integrate with your existing property management software"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Smart Analytics",
      description: "Get actionable insights from tenant interactions"
    }
  ];

  const testimonials = [
    {
      quote: "Reduced our response time by 80% while improving tenant satisfaction",
      author: "Property Manager, Luxury Apartments",
      delay: "100ms"
    },
    {
      quote: "The AI assistant handles routine inquiries perfectly, letting our team focus on growth",
      author: "Regional Director, Real Estate Group",
      delay: "200ms"
    }
  ];

  const propertyTypes = [
    {
      title: "Residential",
      image: "/lovable-uploads/7684e1f5-eb8e-496a-b3c4-71d7de1d3444.png",
      description: "Perfect for apartment complexes and multi-family units",
      delay: "100ms"
    },
    {
      title: "Commercial",
      image: "/lovable-uploads/7684e1f5-eb8e-496a-b3c4-71d7de1d3444.png",
      description: "Ideal for office buildings and retail spaces",
      delay: "200ms"
    },
    {
      title: "Mixed-Use",
      image: "/lovable-uploads/7684e1f5-eb8e-496a-b3c4-71d7de1d3444.png",
      description: "Comprehensive solution for diverse property portfolios",
      delay: "300ms"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "24/7 Availability",
      description: "Never miss a tenant inquiry",
      delay: "100ms"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Reduced Workload",
      description: "Automate up to 80% of routine tasks",
      delay: "200ms"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Enhanced Security",
      description: "Enterprise-grade security for your data",
      delay: "300ms"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/7684e1f5-eb8e-496a-b3c4-71d7de1d3444.png')] opacity-10 bg-cover bg-center animate-pulse" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slideDown">
            Housing's All-in-One<br />AI Assistant & CRM
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 animate-slideUp opacity-90">
            Transform your property management operations with AI-powered automation
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50 animate-scale shadow-xl hover:shadow-2xl transition-all duration-300 group"
            onClick={() => navigate("/demo")}
          >
            Try It Free For 14 Days
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeIn">
            Powerful Features for Modern Property Management
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card 
                key={i} 
                className="p-8 hover:shadow-xl transition-all duration-300 animate-slideUp group hover:-translate-y-2"
                style={{ animationDelay: `${i * 100}ms` }}
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

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeIn">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card 
                key={i} 
                className="p-8 bg-white/10 backdrop-blur-lg border-none text-white animate-slideRight hover:bg-white/20 transition-all duration-300"
                style={{ animationDelay: testimonial.delay }}
              >
                <blockquote className="space-y-4">
                  <p className="text-xl italic leading-relaxed">"{testimonial.quote}"</p>
                  <footer className="text-sm opacity-75">— {testimonial.author}</footer>
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeIn">
            Solutions for Every Property Type
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {propertyTypes.map((type, i) => (
              <Card 
                key={i} 
                className="overflow-hidden group animate-slideUp hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: type.delay }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
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
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeIn">
            Why Choose Us
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

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-scale">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-xl text-blue-100">
            Join leading property management companies using our AI solution
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            onClick={() => navigate("/pricing")}
          >
            View Pricing
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}