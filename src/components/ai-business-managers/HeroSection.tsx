import React from "react";
import { motion } from "framer-motion";
import { Brain, Signal, Lock, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
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

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto text-center z-10 mt-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient leading-[1.2] mb-8">
            Transform Your Business Operations with AI-Powered Automation
          </h1>

          <p className="text-xl sm:text-2xl text-gray-800 mb-12 leading-relaxed max-w-3xl mx-auto px-4 animate-fadeIn">
            Unlock the power of intelligent automation with our AI managers that seamlessly integrate into your workflow
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
              className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.9)" 
              }}
            >
              <div className="flex items-center gap-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            size="lg"
            onClick={() => navigate("/demo")}
            className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Get Started with AI
          </Button>
        </motion.div>
      </div>
    </section>
  );
}