import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Signal, Lock, Server, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const partners = [
  { name: "VAPI", logo: "/lovable-uploads/689f666f-f360-42ec-8f5e-c106c7dc14a4.png" },
  { name: "DeepSeek", logo: "/lovable-uploads/99fbefff-3ce1-4226-b63c-3f4b25d618f1.png" },
  { name: "OpenAI", logo: "/lovable-uploads/cb8c7243-5b81-4b79-a213-5d169acaede2.png" },
  { name: "NVIDIA", logo: "/lovable-uploads/a86fa152-b9da-40f8-899e-6a7f321435a6.png" },
  { name: "Oracle", logo: "/lovable-uploads/4593bf5a-446b-418a-b024-f0848d36a02e.png" },
  { name: "Google", logo: "/lovable-uploads/ee8b507f-74cb-49de-81dc-a2282b1a7aba.png" },
  { name: "Eleven Labs", logo: "/lovable-uploads/d93e3f1a-ff0c-49a9-922f-a5ffd654647f.png" },
  { name: "Anthropic", logo: "/lovable-uploads/10c6384a-7a56-494c-bc22-6d612b09d170.png" },
  { name: "Amazon AWS", logo: "/lovable-uploads/57f47dd7-cc27-477d-9586-e32ed172d79b.png" },
  { name: "IBM", logo: "/lovable-uploads/d10dd79d-414a-4e5e-bfc7-7ff92e56f12f.png" },
  { name: "WatsonX", logo: "/lovable-uploads/22a4d603-9942-4a99-be71-c323c84bd0a3.png" },
  { name: "Microsoft", logo: "/lovable-uploads/1935155e-b63e-4ae4-a3f6-c51b7db8289a.png" }
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

export default function AIBusinessManagers() {
  const navigate = useNavigate();

  const features = [
    { 
      icon: <Brain className="w-8 h-8 text-primary/80 hover:text-primary transition-colors" />, 
      title: "Fully Customized AI" 
    },
    { 
      icon: <Signal className="w-8 h-8 text-primary/80 hover:text-primary transition-colors" />, 
      title: "Continuous Learning" 
    },
    { 
      icon: <Lock className="w-8 h-8 text-primary/80 hover:text-primary transition-colors" />, 
      title: "Trusted Partnerships" 
    },
    { 
      icon: <Server className="w-8 h-8 text-primary/80 hover:text-primary transition-colors" />, 
      title: "Seamless Integration" 
    }
  ];

  const industries = [
    { 
      icon: "🏥",
      name: "Healthcare",
      description: "Streamline patient management and scheduling",
      gradient: "from-blue-400 to-cyan-300",
      delay: 0.1
    },
    {
      icon: "🍽️",
      name: "Restaurants",
      description: "Automate reservations, orders, and inventory management",
      gradient: "from-orange-400 to-red-300",
      delay: 0.2
    },
    {
      icon: "🏨",
      name: "Hospitality",
      description: "Enhance guest experiences with personalized service",
      gradient: "from-purple-400 to-pink-300",
      delay: 0.3
    },
    {
      icon: "🚚",
      name: "Transportation",
      description: "Optimize fleet management and logistics",
      gradient: "from-green-400 to-emerald-300",
      delay: 0.4
    },
    {
      icon: "💼",
      name: "Finance",
      description: "Automate accounting, reporting, and customer service",
      gradient: "from-blue-500 to-indigo-400",
      delay: 0.5
    },
    {
      icon: "🏠",
      name: "Property Management",
      description: "Simplify tenant communications and maintenance requests",
      gradient: "from-teal-400 to-cyan-300",
      delay: 0.6
    }
  ];

  return (
    <>
      <SEO 
        title="AI Business Managers - Revolutionizing Operations with AI Voice Agents" 
        description="Transform your business operations with our done-for-you AI voice agents. Automate tasks, provide instant customer support, and reduce costs by up to 75%."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:40px_40px]" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative w-full max-w-4xl mx-auto text-center z-10 mt-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient leading-[1.2] mb-8">
              We Create Customized Done-for-You AI Business Managers that Automate Your Customer Service Operations
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto px-4 animate-fadeIn">
              Experience the future of business automation with AI managers that seamlessly integrate into your operations.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
                className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.9)" 
                }}
              >
                <motion.div 
                  className="mb-4 text-primary"
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-2 text-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3 + 0.5 }}
                >
                  {feature.title}
                </motion.h3>
              </motion.div>
            ))}
          </div>

          {/* Industries Grid */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: industry.delay }}
                className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${industry.gradient} flex items-center justify-center text-2xl`}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {industry.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Our Technology Partners</h2>
          <div className="relative">
            <div className="flex space-x-12 animate-scroll overflow-hidden whitespace-nowrap py-4">
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 transition-all duration-300 hover:scale-110"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Client Testimonials</h2>
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
                <div className="font-semibold text-gray-800">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container relative px-4 mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Get a live demo of our AI Business Manager today and see the difference it can make for your operations.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                onClick={() => navigate("/demo")}
                className="text-lg px-12 py-6 h-auto rounded-full bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Get Started Now
                <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
