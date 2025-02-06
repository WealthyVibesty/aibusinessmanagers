import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MainNavigation from "@/components/landing/MainNavigation";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FeaturesSection from "@/components/landing/FeaturesSection";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empower Your Business with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              AI-Driven Management
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Transform your operations with intelligent automation, real-time insights, and 24/7 business management powered by AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate("/demo")}
              className="text-lg px-8 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/case-studies")}
              className="text-lg px-8 py-6 h-auto rounded-full hover:bg-gray-100 transition-all"
            >
              View Case Studies
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join innovative companies already using AI to streamline their operations
          </p>
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => navigate("/demo")}
            className="text-lg px-8 py-6 h-auto rounded-full bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all group"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}