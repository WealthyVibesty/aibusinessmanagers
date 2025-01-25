import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import HeroSection from "@/components/ai-business-managers/HeroSection";
import IndustriesSection from "@/components/ai-business-managers/IndustriesSection";
import PartnersSection from "@/components/ai-business-managers/PartnersSection";

export default function AIBusinessManagers() {
  const navigate = useNavigate();

  const testimonials = [
    {
      quote: "AI Business Managers transformed our customer service experience. The AI solutions they provided were tailored perfectly to our needs.",
      author: "Sarah T.",
      role: "CEO of a Retail Chain",
      delay: 0.1
    },
    {
      quote: "We saw a 75% cost reduction in operations after implementing their AI systems. Highly recommend!",
      author: "John D.",
      role: "Logistics Manager",
      delay: 0.2
    },
    {
      quote: "Their AI voice agents handle everything for us, from lead management to customer support. It's like having an extra team!",
      author: "Emily R.",
      role: "Property Manager",
      delay: 0.3
    }
  ];

  return (
    <>
      <SEO 
        title="AI Business Managers - Revolutionizing Operations with AI Voice Agents" 
        description="Transform your business operations with our done-for-you AI voice agents. Automate tasks, provide instant customer support, and reduce costs by up to 75%."
      />
      
      <HeroSection />
      <IndustriesSection />
      <PartnersSection />

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container px-4 mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: testimonial.delay }}
                viewport={{ once: true }}
                className="relative p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-4">
                  <motion.p 
                    className="text-gray-600 italic relative z-10 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: testimonial.delay + 0.2 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                  <div className="pt-4 border-t border-gray-100">
                    <motion.h4 
                      className="font-semibold text-gray-800"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: testimonial.delay + 0.3 }}
                    >
                      {testimonial.author}
                    </motion.h4>
                    <motion.p 
                      className="text-primary/80"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: testimonial.delay + 0.4 }}
                    >
                      {testimonial.role}
                    </motion.p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
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
                onClick={() => navigate("/")}
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