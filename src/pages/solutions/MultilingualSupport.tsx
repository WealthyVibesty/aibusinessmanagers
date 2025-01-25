import { Globe, MessageCircle, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function MultilingualSupport() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Real-time Translation",
      description: "Instant, accurate translation across multiple languages",
      icon: <Globe className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Cultural Context",
      description: "AI that understands cultural nuances and regional differences",
      icon: <Users className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Omnichannel Support",
      description: "Consistent language support across all communication channels",
      icon: <MessageCircle className="w-8 h-8 text-emerald-500" />
    }
  ];

  const steps = [
    {
      title: "Language Setup",
      description: "Configure your preferred languages and translation settings"
    },
    {
      title: "Integration",
      description: "Connect with your existing communication channels"
    },
    {
      title: "Launch",
      description: "Start providing seamless multilingual support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 via-emerald-900 to-teal-900">
      <SEO 
        title="Multilingual AI Support"
        description="Break language barriers with AI-powered customer service"
        path="/multilingual-support"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400"
          >
            Break Language Barriers with AI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto"
          >
            Provide seamless customer support in any language with AI-powered translation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              size="lg"
              onClick={() => navigate("/demo")}
              className="text-lg px-8 py-6 h-auto bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 group"
            >
              Get Free Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-teal-800/50 backdrop-blur-sm border border-teal-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-teal-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-teal-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-teal-900/50 backdrop-blur-sm border border-teal-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block w-8 h-8 rounded-full bg-emerald-500 text-white text-center leading-8">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-teal-200">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Go Global?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Start providing multilingual support with AI today
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/demo")}
              className="text-lg px-8 py-6 h-auto bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 group"
            >
              Get Free Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}