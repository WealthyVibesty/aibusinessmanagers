import { Button } from "@/components/ui/button";
import { ArrowRight, CircuitBoard, Cpu, Network, Server } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function VoiceAgents() {
  const navigate = useNavigate();

  const features = [
    {
      title: "24/7 Instant Call Answering",
      description: "Never miss a patient call with AI that's always available",
      icon: <CircuitBoard className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Comprehensive Support",
      description: "Handle scheduling, billing inquiries, and test result delivery",
      icon: <Cpu className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Multilingual Support",
      description: "Serve diverse patient populations in their preferred language",
      icon: <Network className="w-8 h-8 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400"
          >
            AI-Powered Voice Agents: Instant Support, 24/7
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Answer calls instantly, handle routine tasks, and free up your team to focus on patient care.
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
              <Server className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Reduces patient wait times by up to 80%",
              "Handles up to 90% of routine calls without human intervention",
              "Improves patient satisfaction with instant, accurate support"
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <p className="text-lg text-blue-100">{benefit}</p>
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
              Transform Your Call Center Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              See how AI Voice Agents can revolutionize your patient support
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/demo")}
              className="text-lg px-8 py-6 h-auto bg-blue-500 hover:bg-blue-600 transition-all duration-300 group"
            >
              Get Free Demo
              <Server className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}