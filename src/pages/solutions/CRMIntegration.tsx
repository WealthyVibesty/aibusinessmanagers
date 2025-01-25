import { Database, RefreshCw, LineChart, ArrowRight } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function CRMIntegration() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Seamless Sync",
      description: "Automatic data synchronization with popular CRM platforms",
      icon: <Database className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Real-time Updates",
      description: "Track all customer interactions and update profiles automatically",
      icon: <RefreshCw className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Advanced Analytics",
      description: "Gain actionable insights from your customer data",
      icon: <LineChart className="w-8 h-8 text-blue-500" />
    }
  ];

  const steps = [
    {
      title: "Connect",
      description: "Link your CRM platform with our AI tools in minutes"
    },
    {
      title: "Configure",
      description: "Set up intelligent data mapping and automation rules"
    },
    {
      title: "Activate",
      description: "Start automating your customer relationship management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered CRM Integration"
        description="Seamlessly connect AI tools with your CRM platform for automated customer management"
        path="/crm-integration"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400"
          >
            Transform Your CRM with AI Integration
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Automate customer interactions and unlock powerful insights with AI-powered CRM integration
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              size="lg"
              onClick={() => navigate("/demo")}
              className="text-lg px-8 py-6 h-auto bg-blue-500 hover:bg-blue-600 transition-all duration-300 group"
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
                className="p-6 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-slate-800/50">
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
                className="p-6 rounded-lg bg-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block w-8 h-8 rounded-full bg-blue-500 text-white text-center leading-8">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
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
              Ready to Transform Your CRM?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started with our AI-powered CRM integration today
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/demo")}
              className="text-lg px-8 py-6 h-auto bg-blue-500 hover:bg-blue-600 transition-all duration-300 group"
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