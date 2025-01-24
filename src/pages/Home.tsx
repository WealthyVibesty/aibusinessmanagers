import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Utensils, Hotel, Car, Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

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
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            See How AI Business Managers Can Transform Your Operations Today
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience our AI-powered solution tailored to your industry before you commit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              onClick={() => navigate("/demo")}
              className="text-lg px-8 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group"
            >
              Try the Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Reduce Customer Service Costs by Up to 75%",
              "Instant Responses to Common Inquiries",
              "Tailored Solutions for Every Industry"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-900">{benefit}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/pricing")}
              className="text-lg px-8"
            >
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
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
    </div>
  );
}