import { Instagram, MessageCircle, ArrowRight, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function InstagramAutomation() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Smart Comment Management",
      description: "AI-powered responses to comments that sound natural and on-brand",
      icon: <MessageCircle className="w-8 h-8 text-pink-500" />
    },
    {
      title: "Automated DM Campaigns",
      description: "Engage leads with personalized direct message sequences",
      icon: <Instagram className="w-8 h-8 text-pink-500" />
    },
    {
      title: "Lead Generation",
      description: "Convert social engagement into qualified business opportunities",
      icon: <Target className="w-8 h-8 text-pink-500" />
    }
  ];

  const steps = [
    {
      title: "Connect",
      description: "Link your Instagram business account securely"
    },
    {
      title: "Configure",
      description: "Set up AI-powered response templates and automation rules"
    },
    {
      title: "Engage",
      description: "Watch as your Instagram engagement grows automatically"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-purple-900">
      <SEO 
        title="Instagram Automation"
        description="Automate Instagram engagement with AI-powered responses and lead generation"
        path="/instagram-automation"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
          >
            Automate Your Instagram Growth
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto"
          >
            Scale your Instagram presence with AI-powered engagement and lead generation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              size="lg"
              onClick={() => navigate("/demo")}
              className="text-lg px-8 py-6 h-auto bg-pink-500 hover:bg-pink-600 transition-all duration-300 group"
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
                className="p-6 rounded-lg bg-purple-800/50 backdrop-blur-sm border border-purple-700 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-purple-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-purple-800/50">
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
                className="p-6 rounded-lg bg-purple-900/50 backdrop-blur-sm border border-purple-700 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block w-8 h-8 rounded-full bg-pink-500 text-white text-center leading-8">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-purple-200">{step.description}</p>
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
              Ready to Automate Your Instagram?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Start growing your Instagram presence with AI today
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/demo")}
              className="text-lg px-8 py-6 h-auto bg-pink-500 hover:bg-pink-600 transition-all duration-300 group"
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