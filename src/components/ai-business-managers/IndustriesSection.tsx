import React from "react";
import { motion } from "framer-motion";

interface Industry {
  icon: string;
  name: string;
  description: string;
  gradient: string;
  delay: number;
}

export default function IndustriesSection() {
  const industries: Industry[] = [
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
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800"
        >
          Industries We Serve
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
                {industry.name}
              </h3>
              <p className="text-gray-600 text-center">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}