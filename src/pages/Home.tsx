
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, XCircle, DollarSign, MessageSquare, Layers, Calendar, GraduationCap, Brain, Rocket, Target, ChartBar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import VideoBenefitCard from "@/components/landing/VideoBenefitCard";
import SEO from "@/components/SEO";
import { useEffect, useRef } from "react";

export default function Home() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);
  
  const painPoints = [
    {
      title: "Manual Work Overload",
      icon: <Clock className="h-8 w-8 text-red-500" />,
      description: "Too much manual work and not enough time"
    },
    {
      title: "Lost Leads",
      icon: <XCircle className="h-8 w-8 text-red-500" />,
      description: "Leads slipping through the cracks due to slow follow-ups"
    },
    {
      title: "High Costs",
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      description: "High employee costs for repetitive tasks"
    },
    {
      title: "Missed Opportunities",
      icon: <Target className="h-8 w-8 text-red-500" />,
      description: "Missed revenue opportunities from inefficient systems"
    }
  ];

  const solutions = [
    {
      title: "AI-Powered Lead Management",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      description: "AI follows up with leads via SMS, email, and calls"
    },
    {
      title: "Automated Sales & Nurturing",
      icon: <ChartBar className="h-8 w-8 text-primary" />,
      description: "AI engages and converts leads 24/7"
    },
    {
      title: "Smart Workflow Automation",
      icon: <Layers className="h-8 w-8 text-primary" />,
      description: "AI handles scheduling, project management, and coordination"
    },
    {
      title: "Business Optimization",
      icon: <Rocket className="h-8 w-8 text-primary" />,
      description: "AI finds inefficiencies and optimizes operations for growth"
    }
  ];

  return (
    <div>
      <SEO 
        title="Done-For-You AI Growth Service | AI Business Managers" 
        description="We don't just offer AI—we build, manage, and scale it for you. Get a fully automated business that runs smoothly without lifting a finger."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 to-white -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center space-y-6 sm:space-y-8">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-[90%] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We Don't Just Offer AI—
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                We Build, Manage, and Scale It For You
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Imagine having a <span className="font-semibold">fully automated business</span> that runs smoothly, 
              generates leads, nurtures customers, and increases revenue—
              <span className="font-semibold">without you lifting a finger.</span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                size="lg"
                onClick={() => navigate("/demo")}
                className="text-lg px-8 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule A Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/courses")}
                className="text-lg px-8 py-6 h-auto rounded-full hover:bg-gray-100 transition-all w-full sm:w-auto text-black border-black group"
              >
                <Brain className="mr-2 h-5 w-5" />
                Watch Our Demo Video
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Before AI Business Managers, <br />Business Owners Struggled With:
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-red-100 rounded-full">{point.icon}</div>
                  <h3 className="text-xl font-semibold">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Introducing The AI Business Managers <br />Done-For-You Service
            </h2>
            <p className="text-xl text-gray-600">
              Instead of learning and setting up AI yourself, <span className="font-semibold">we do everything for you.</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-full">{solution.icon}</div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Automate & Grow Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's implement AI that works for you—24/7.
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
  );
}
