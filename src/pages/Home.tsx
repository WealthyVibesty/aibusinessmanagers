import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Utensils, Hotel, Car, Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import VideoBenefitCard from "@/components/landing/VideoBenefitCard";

export default function Home() {
  const navigate = useNavigate();

  const industries = [
    {
      name: "Healthcare",
      icon: <Building2 className="h-8 w-8" />,
      path: "/healthcare"
    },
    {
      name: "Restaurants",
      icon: <Utensils className="h-8 w-8" />,
      path: "/restaurants"
    },
    {
      name: "Hospitality",
      icon: <Hotel className="h-8 w-8" />,
      path: "/hospitality"
    },
    {
      name: "Transportation",
      icon: <Car className="h-8 w-8" />,
      path: "/transportation"
    },
    {
      name: "Finance",
      icon: <Calculator className="h-8 w-8" />,
      path: "/finance"
    }
  ];

  const benefits = [
    {
      title: "75% Cost Reduction",
      description: "See how our AI solutions dramatically cut operational costs while maintaining quality service",
      videoUrl: "/lovable-uploads/cost-reduction-demo.mp4",
      delay: 0.2
    },
    {
      title: "Instant AI Responses",
      description: "Watch our AI system handle customer inquiries in real-time with natural conversations",
      videoUrl: "/lovable-uploads/ai-responses-demo.mp4",
      delay: 0.4
    },
    {
      title: "Industry-Specific AI",
      description: "Discover how our AI adapts to your specific industry needs and workflows",
      videoUrl: "/lovable-uploads/industry-specific-demo.mp4",
      delay: 0.6
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
              See How AI Business Managers Can{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Transform Your Operations Today
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Watch our AI in action and discover how it can revolutionize your business operations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={() => navigate("/demo")}
                className="text-lg px-8 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
              >
                Watch Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/pricing")}
                className="text-lg px-8 py-6 h-auto rounded-full hover:bg-gray-100 transition-all w-full sm:w-auto"
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section with Videos */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              See Our AI in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how our AI solutions deliver immediate impact with measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <VideoBenefitCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                videoUrl={benefit.videoUrl}
                delay={benefit.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Industries We Serve
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                onClick={() => navigate(industry.path)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all group-hover:-translate-y-1 duration-300">
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {industry.icon}
                    </div>
                    <p className="font-medium text-gray-900">{industry.name}</p>
                  </div>
                </div>
              </motion.div>
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
            <h2 className="text-3xl font-bold mb-6">
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
              Get Live Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}