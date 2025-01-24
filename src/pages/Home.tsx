import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Utensils, Hotel, Car, Calculator, DollarSign, Clock, Users, ArrowDownToLine, Zap, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "75% Cost Reduction",
      icon: <DollarSign className="h-8 w-8 text-blue-500" />,
      description: "Cut operational costs while maintaining quality service",
      details: [
        "Automated customer support 24/7",
        "Reduced staff training needs",
        "Lower operational overhead"
      ],
      animation: {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5, delay: 0.2 }
      }
    },
    {
      title: "Instant AI Responses",
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      description: "24/7 automated responses to common inquiries",
      details: [
        "< 1 second response time",
        "Multi-language support",
        "Natural conversations"
      ],
      animation: {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5, delay: 0.4 }
      }
    },
    {
      title: "Industry-Specific AI",
      icon: <Target className="h-8 w-8 text-blue-500" />,
      description: "Customized solutions for your exact needs",
      details: [
        "Tailored to your industry",
        "Custom knowledge base",
        "Specialized workflows"
      ],
      animation: {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5, delay: 0.6 }
      }
    }
  ];

  const industries = [
    { icon: <Hotel className="h-8 w-8" />, name: "Hospitality", path: "/demo/hospitality" },
    { icon: <Building2 className="h-8 w-8" />, name: "Property Management", path: "/demo/property" },
    { icon: <Car className="h-8 w-8" />, name: "Automotive", path: "/demo/automotive" },
    { icon: <Utensils className="h-8 w-8" />, name: "Food & Beverage", path: "/demo/food" },
    { icon: <Calculator className="h-8 w-8" />, name: "Tax & Financial", path: "/demo/tax" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
              Experience our AI-powered solution tailored to your industry before you commit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={() => navigate("/demo")}
                className="text-lg px-8 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
              >
                Try the Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/pricing")}
                className="text-lg px-8 py-6 h-auto rounded-full hover:bg-gray-100 transition-all w-full sm:w-auto"
              >
                View Pricing Plans
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI solutions deliver immediate impact with measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={benefit.animation.initial}
                animate={benefit.animation.animate}
                transition={benefit.animation.transition}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden group"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Circle Background */}
                  <div className="mb-6 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {benefit.description}
                  </p>

                  {/* Details List with Animations */}
                  <ul className="space-y-3">
                    {benefit.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center text-gray-700"
                      >
                        <ArrowRight className="h-4 w-4 text-blue-500 mr-2 group-hover:translate-x-1 transition-transform" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              onClick={() => navigate("/demo")}
              className="text-lg px-8 py-6 h-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all group"
            >
              See It In Action
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
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
