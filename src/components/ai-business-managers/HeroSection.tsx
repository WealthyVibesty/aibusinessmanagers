import React from "react";
import { motion } from "framer-motion";
import { Brain, Signal, Lock, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  
  const features = [
    { 
      icon: <Brain className="w-12 h-12 text-primary/80 hover:text-primary transition-colors" />, 
      title: "Enterprise-Grade AI",
      description: "Custom-built solutions that adapt to your specific business needs"
    },
    { 
      icon: <Signal className="w-12 h-12 text-primary/80 hover:text-primary transition-colors" />, 
      title: "24/7 Operation",
      description: "Continuous learning and improvement through real-world interactions"
    },
    { 
      icon: <Lock className="w-12 h-12 text-primary/80 hover:text-primary transition-colors" />, 
      title: "Secure & Reliable",
      description: "Bank-level security with 99.9% uptime guarantee"
    },
    { 
      icon: <Server className="w-12 h-12 text-primary/80 hover:text-primary transition-colors" />, 
      title: "Full Integration",
      description: "Seamlessly connects with your existing tools and workflows"
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-indigo-900 to-black" />

      <div className="relative w-full max-w-6xl mx-auto text-center z-10 mt-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.2] mb-8">
            Let AI Business Managers Automate Your Entire Business Operations for You—Starting Today!
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto px-4 animate-fadeIn">
            Get enterprise-level AI automation, fully implemented and managed for you, without the hassle.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <div className="relative">
              <div className="rocket-flames" />
              <Button
                size="lg"
                onClick={() => navigate("/index")}
                className="text-lg px-16 py-8 bg-white hover:bg-primary text-primary hover:text-white rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-500 transform hover:-translate-y-1 relative z-10 group whitespace-nowrap"
              >
                <span className="text-xl font-bold">Get Started with AI</span>
              </Button>
            </div>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/pricing")}
              className="text-lg px-16 py-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary rounded-full transition-all duration-500 transform hover:-translate-y-1 whitespace-nowrap"
            >
              <span className="text-xl font-bold">View Pricing</span>
            </Button>
          </div>
        </motion.div>

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
              className="p-8 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)" 
              }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                {feature.icon}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-black/10" />
          
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
                Get a live demo of our AI Business Managers today and see the difference it can make for your operations.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col md:flex-row gap-4 justify-center items-center"
              >
                <Button 
                  size="lg"
                  onClick={() => navigate("/index")}
                  className="text-lg px-12 py-6 h-auto rounded-full bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 group w-full md:w-auto"
                >
                  Get Started Now
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/pricing")}
                  className="text-lg px-12 py-6 h-auto rounded-full border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 w-full md:w-auto"
                >
                  View Pricing
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}