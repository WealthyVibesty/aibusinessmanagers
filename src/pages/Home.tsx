
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, UtensilsCrossed, Hotel, Car, Wallet, MessageSquare, Layers, DollarSign, Calendar, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import VideoBenefitCard from "@/components/landing/VideoBenefitCard";
import SEO from "@/components/SEO";
import { useEffect, useRef } from "react";

export default function Home() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Ensure video playback starts on component mount
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);
  
  const industries = [
    {
      name: "Healthcare",
      icon: <Stethoscope className="h-8 w-8 text-[#8B5CF6]" />,
      path: "/healthcare",
      color: "bg-[#E5DEFF]",
      description: "AI-powered healthcare solutions"
    },
    {
      name: "Restaurants",
      icon: <UtensilsCrossed className="h-8 w-8 text-[#F97316]" />,
      path: "/restaurants",
      color: "bg-[#FDE1D3]",
      description: "Streamline restaurant operations"
    },
    {
      name: "Hospitality",
      icon: <Hotel className="h-8 w-8 text-[#0EA5E9]" />,
      path: "/hospitality",
      color: "bg-[#D3E4FD]",
      description: "Enhance guest experiences"
    },
    {
      name: "Transportation",
      icon: <Car className="h-8 w-8 text-[#16A34A]" />,
      path: "/transportation",
      color: "bg-[#F2FCE2]",
      description: "Optimize fleet management"
    },
    {
      name: "Finance",
      icon: <Wallet className="h-8 w-8 text-[#D946EF]" />,
      path: "/finance",
      color: "bg-[#FFDEE2]",
      description: "Automate financial processes"
    }
  ];

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
    <div>
      <SEO 
        title="AI That Works FOR You—24/7 | No Learning Curve. No Extra Work" 
        description="AI automation is replacing manual workflows, cutting costs, and scaling businesses faster than ever. We set it up, so you don't have to."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 to-white -z-10"></div>
        
        {/* Background Video Element */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Fallback background gradient with grid pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-blue-100/30 animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Video background with overlay */}
          <div className="absolute inset-0 mix-blend-overlay opacity-60">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/lovable-uploads/ai-automation-demo.mp4" type="video/mp4" />
              {/* Note: Upload a video file named "ai-automation-demo.mp4" for this to work */}
            </video>
          </div>
        </div>
        
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Hook */}
            <motion.p 
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm sm:text-base font-medium mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI isn't the future—it's the present. Let's implement it for your business—today.
            </motion.p>
            
            {/* Headline */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-[90%] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              AI That Works <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">FOR You—24/7.</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl">No Learning Curve. No Extra Work.</span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              AI automation is replacing manual workflows, cutting costs, and scaling businesses faster than ever. 
              <span className="font-semibold"> We set it up, so you don't have to.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* Primary CTA */}
              <Button 
                size="lg"
                onClick={() => navigate("/demo")}
                className="text-lg px-8 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your AI Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Secondary CTA */}
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/courses")}
                className="text-lg px-8 py-6 h-auto rounded-full hover:bg-gray-100 transition-all w-full sm:w-auto text-black border-black group"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Join AI Business Managers University
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section with Animated Icons */}
      <section className="py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how our AI solutions transform operations across different sectors
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                onClick={() => navigate(industry.path)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`p-6 rounded-xl ${industry.color} shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>
                  <div className="flex flex-col items-center gap-4">
                    <div className="transition-all duration-300">
                      {industry.icon}
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                      <p className="text-sm text-gray-600">{industry.description}</p>
                    </div>
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
