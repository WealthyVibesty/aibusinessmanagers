
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import VideoBenefitCard from "@/components/landing/VideoBenefitCard";
import SEO from "@/components/SEO";
import { DollarSign, MessageSquare, Layers } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  
  const benefits = [
    {
      title: "75% Cost Reduction",
      description: "See how our AI solutions dramatically cut operational costs while maintaining quality service",
      delay: 0.2,
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Instant AI Responses",
      description: "Watch our AI system handle customer inquiries in real-time with natural conversations",
      delay: 0.4,
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      title: "Industry-Specific AI",
      description: "Discover how our AI adapts to your specific industry needs and workflows",
      delay: 0.6,
      icon: <Layers className="w-8 h-8" />
    }
  ];

  return (
    <>
      <SEO 
        title="AI Business Automation" 
        description="AI that works for you 24/7 with no learning curve. Implement AI automation for your business today."
        path="/"
      />
      <div>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6 sm:space-y-8 text-center md:text-left">
                <motion.span 
                  className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  AI isn't the future—it's the present. Let's implement it for your business—today.
                </motion.span>
                
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  AI That Works FOR You—24/7.
                  <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    No Learning Curve. No Extra Work.
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg sm:text-xl text-gray-600 max-w-2xl md:mx-0 mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  AI automation is replacing manual workflows, cutting costs, and scaling businesses faster than ever. We set it up, so you don't have to.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 pt-4 md:justify-start justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button 
                    size="lg"
                    onClick={() => navigate("/demo")}
                    className="text-lg px-8 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your AI Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => navigate("/courses")}
                    className="text-lg px-8 py-6 h-auto rounded-full hover:bg-gray-100 transition-all text-black border-black group"
                  >
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Join AI Business Managers University
                  </Button>
                </motion.div>
              </div>
              
              {/* Video Showcase */}
              <motion.div 
                className="flex-1 min-h-[320px] max-w-full md:max-w-[50%]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[320px] sm:h-[400px] relative">
                  {/* Replace this with your actual video embed */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <p className="text-gray-500 text-center px-6">
                      [Looping video showcasing AI automation in action]
                      <br />
                      <span className="text-sm">Customer interactions, lead generation, automated workflows</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section with Animated Icons */}
        <section className="py-12 sm:py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
                See Our AI in Action
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                Watch how our AI solutions deliver immediate impact with measurable results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <VideoBenefitCard
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                  delay={benefit.delay}
                  icon={benefit.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Get started with our AI Business Manager today and see the difference.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => navigate("/demo")}
                className="text-lg px-8 py-6 h-auto rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all group"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
