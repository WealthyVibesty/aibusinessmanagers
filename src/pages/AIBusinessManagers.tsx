import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, Lock, MessageSquare, Rocket, Server, Signal, Wifi } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const partners = [
  { name: "IBM", logo: "/lovable-uploads/ibm-logo.png" },
  { name: "Google", logo: "/lovable-uploads/google-logo.png" },
  { name: "Microsoft", logo: "/lovable-uploads/microsoft-logo.png" },
  { name: "Oracle", logo: "/lovable-uploads/oracle-logo.png" },
  { name: "NVIDIA", logo: "/lovable-uploads/nvidia-logo.png" },
  { name: "Amazon AWS", logo: "/lovable-uploads/aws-logo.png" },
  { name: "OpenAI", logo: "/lovable-uploads/openai-logo.png" },
  { name: "DeepSeek", logo: "/lovable-uploads/deepseek-logo.png" },
  { name: "Eleven Labs", logo: "/lovable-uploads/eleven-labs-logo.png" },
  { name: "Vapi AI", logo: "/lovable-uploads/vapi-ai-logo.png" },
  { name: "Anthropic", logo: "/lovable-uploads/anthropic-logo.png" }
];

const testimonials = [
  {
    quote: "AI Business Managers transformed our customer service experience. The AI solutions they provided were tailored perfectly to our needs. Their partnership with IBM gave us the confidence to trust them with our data.",
    author: "Sarah T.",
    role: "CEO of a Retail Chain"
  },
  {
    quote: "We saw a 75% cost reduction in operations after implementing their AI systems. Highly recommend!",
    author: "John D.",
    role: "Logistics Manager"
  },
  {
    quote: "Their AI voice agents handle everything for us, from lead management to customer support. It's like having an extra team!",
    author: "Emily R.",
    role: "Property Manager"
  }
];

const industries = [
  { icon: "🏥", name: "Healthcare", description: "Streamline patient management and scheduling" },
  { icon: "🍽️", name: "Restaurants", description: "Automate reservations, orders, and inventory management" },
  { icon: "🏨", name: "Hospitality", description: "Enhance guest experiences with personalized service" },
  { icon: "🚚", name: "Transportation", description: "Optimize fleet management and logistics" },
  { icon: "💼", name: "Finance", description: "Automate accounting, reporting, and customer service" },
  { icon: "🏠", name: "Property Management", description: "Simplify tenant communications and maintenance requests" }
];

export default function AIBusinessManagers() {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="AI Business Managers - Revolutionizing Operations with AI Voice Agents" 
        description="Transform your business operations with our done-for-you AI voice agents. Automate tasks, provide instant customer support, and reduce costs by up to 75%."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container px-4 mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            AI Business Managers: Revolutionizing Business Operations with AI Voice Agents
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            We deliver done-for-you AI voice agents designed to handle every aspect of your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate("/demo")}
              className="text-lg px-8 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group"
            >
              Watch Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/pricing")}
              className="text-lg px-8 py-6 h-auto rounded-full hover:bg-gray-100 transition-all"
            >
              View Pricing
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Brain className="w-8 h-8" />, title: "Fully Customized AI" },
              { icon: <Signal className="w-8 h-8" />, title: "Continuous Learning" },
              { icon: <Database className="w-8 h-8" />, title: "Trusted Partnerships" },
              { icon: <Server className="w-8 h-8" />, title: "Seamless Integration" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(`/industries/${industry.name.toLowerCase()}`)}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Trusted Partners</h2>
          <div className="flex animate-slideRight space-x-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get a live demo of our AI Business Manager today and see the difference it can make for your operations.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/demo")}
            className="text-lg px-8 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group"
          >
            Get Started Now
            <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </>
  );
}