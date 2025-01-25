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
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-indigo-900 to-black">
        <div className="stars" />
        <div className="twinkling" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto text-center z-10 mt-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.2] mb-8">
            Let AI Business Managers Automate Your Entire Business Operations for You—Starting Today!
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-16 leading-relaxed max-w-3xl mx-auto px-4 animate-fadeIn">
            Get enterprise-level AI automation, fully implemented and managed for you, without the hassle.
          </p>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative inline-block"
        >
          <div className="rocket-flames" />
          <Button
            size="lg"
            onClick={() => navigate("/demo")}
            className="text-lg px-16 py-8 bg-white hover:bg-primary text-primary hover:text-white rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-500 transform hover:-translate-y-1 relative z-10 group"
          >
            <span className="text-xl font-bold">Get Started with AI</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}