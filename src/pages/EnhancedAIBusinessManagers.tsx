
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  RocketLaunch, 
  Play, 
  Brain, 
  FileText, 
  ArrowRight, 
  Robot, 
  ChartLine, 
  Clock, 
  Building, 
  Shield, 
  Users, 
  CheckCircle,
  XCircle,
  Calendar,
  Globe,
  DollarSign,
  PieChart,
  Star,
  ChevronDown,
  ChevronUp,
  BarChart,
  MessageSquare
} from "lucide-react";
import ROICalculatorDialog from "@/components/ROICalculatorDialog";
import StrategyCallForm from "@/components/StrategyCallForm";
import PilotProgramForm from "@/components/PilotProgramForm";
import SocialProofSection from "@/components/landing/sections/SocialProofSection";

export default function EnhancedAIBusinessManagers() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();
  
  // References for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Dialog open states
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false);
  const [isStrategyCallOpen, setIsStrategyCallOpen] = useState(false);
  const [isPilotProgramOpen, setIsPilotProgramOpen] = useState(false);
  const [showAIChatAssistant, setShowAIChatAssistant] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  
  // Expanded state for collapsible sections
  const [expandedFAQs, setExpandedFAQs] = useState<Record<number, boolean>>({});
  const [expandedCaseStudy, setExpandedCaseStudy] = useState(false);
  
  // Counters for animated statistics
  const [counterStats, setCounterStats] = useState({
    businessesHelped: 0,
    revenueGenerated: 0,
    timeAutomated: 0,
    satisfactionRate: 0
  });
  
  // Demo video state
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  // Email capture state
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [businessType, setBusinessType] = useState("");
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  // Auto-display chat assistant after a delay
  useEffect(() => {
    // Show progress bar
    setShowProgressBar(true);
    
    // Animate progress over time
    const progressInterval = setInterval(() => {
      setProgressValue(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    
    // Show chat assistant after user has been on page for a bit
    const chatTimer = setTimeout(() => {
      setShowAIChatAssistant(true);
      toast({
        title: "AI Assistant Available",
        description: "Have questions? Our AI assistant is ready to help!",
        duration: 5000,
      });
    }, 15000);
    
    // Start counter animations when in view
    const counterInterval = setInterval(() => {
      setCounterStats(prev => ({
        businessesHelped: prev.businessesHelped >= 2000 ? 2000 : prev.businessesHelped + 20,
        revenueGenerated: prev.revenueGenerated >= 25 ? 25 : prev.revenueGenerated + 0.25,
        timeAutomated: prev.timeAutomated >= 80 ? 80 : prev.timeAutomated + 1,
        satisfactionRate: prev.satisfactionRate >= 98 ? 98 : prev.satisfactionRate + 1
      }));
    }, 50);
    
    // Cleanup
    return () => {
      clearTimeout(chatTimer);
      clearInterval(counterInterval);
      clearInterval(progressInterval);
    };
  }, [toast]);
  
  // Parallax effects
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const problemTextParallax = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  const problemOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !fullName) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and email to continue.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Request Received!",
      description: "We'll be in touch shortly with your personalized AI strategy.",
    });
    
    // Reset form
    setEmail("");
    setFullName("");
    setBusinessType("");
    
    // Show strategy call form after successful submission
    setTimeout(() => {
      setIsStrategyCallOpen(true);
    }, 1500);
  };
  
  // FAQ items
  const faqItems = [
    {
      question: "Is AI hard to implement in my business?",
      answer: "Not at all! Our team handles the entire implementation process. You don't need any technical expertise – we take care of everything from setup to maintenance while you focus on what you do best: running your business."
    },
    {
      question: "Will AI replace my employees?",
      answer: "AI doesn't replace your team – it enhances their capabilities. Our AI solutions handle repetitive, time-consuming tasks, allowing your employees to focus on creative, high-value work that drives growth and requires human expertise."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients see measurable improvements within the first 30 days. Simple automations like scheduling and customer service can show immediate results, while more complex revenue-generating AI systems typically demonstrate significant ROI within 60-90 days."
    },
    {
      question: "What makes your AI solution different from others?",
      answer: "Unlike generic AI tools, our AI Business Managers are custom-tailored to your specific business operations and goals. We don't just provide software – we create a comprehensive AI strategy with ongoing optimization and partner with you on implementation."
    },
    {
      question: "Is my data secure with your AI systems?",
      answer: "Absolutely. We implement enterprise-grade security protocols and comply with all relevant data protection regulations. Your business data is encrypted, securely stored, and never shared with third parties."
    }
  ];
  
  // Toggle FAQ expansion
  const toggleFAQ = (index: number) => {
    setExpandedFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  // Handle demo video
  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
  };
  
  // Trigger chat assistant
  const launchChatAssistant = () => {
    setShowAIChatAssistant(true);
    // Activate chat widget through DOM
    const elevenlabsWidget = document.querySelector('elevenlabs-convai');
    if (elevenlabsWidget) {
      elevenlabsWidget.classList.remove('hidden', 'animate-fadeOut');
      elevenlabsWidget.classList.add('animate-fadeIn');
      
      toast({
        title: "AI Assistant Activated",
        description: "Ask any questions about how AI can help your business!",
        duration: 3000,
      });
    } else {
      toast({
        title: "Chat Assistant",
        description: "Our chat assistant is launching...",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <SEO 
        title="AI Business Managers - Transform Your Operations With AI" 
        description="Scale your business with AI-powered automation. Reduce costs, increase revenue, and optimize operations with zero upfront investment."
      />
      
      {/* Progress bar at the top */}
      {showProgressBar && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-all duration-500"
            style={{ width: `${progressValue}%` }}
          />
        </div>
      )}
      
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 overflow-hidden"
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
        
        {/* Floating elements for futuristic feel */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-blue-500/10 backdrop-blur-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                scale: 0.5 + Math.random(),
              }}
              animate={{
                y: [0, 30, 0],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            style={{ y: heroParallax }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <div className="flex items-center space-x-2">
                <RocketLaunch className="h-5 w-5 text-blue-400" />
                <span className="text-white/90 font-medium">The Future of Scalable Business Operations</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI Business Managers
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tired of juggling too many tasks, dealing with inefficiencies, and missing out on revenue opportunities?
            </motion.p>
            
            <motion.h2
              className="text-2xl md:text-4xl font-bold mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              What If You Had An AI-Powered Business Partner To Handle It All?
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Automate Workflows & Increase Efficiency</h3>
                <p className="text-blue-100">Save hours daily by letting AI handle repetitive tasks.</p>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Boost Revenue With AI-Powered Sales Agents</h3>
                <p className="text-blue-100">AI nurtures and closes leads 24/7.</p>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Optimize Operations Without Hiring More Staff</h3>
                <p className="text-blue-100">AI automates follow-ups, scheduling, and customer support.</p>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Performance-Based Partnership</h3>
                <p className="text-blue-100">You Win, We Win – No upfront costs, only results-driven collaboration.</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                size="lg" 
                onClick={() => navigate("/demo")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 h-auto text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                See AI Business Managers In Action
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                onClick={launchChatAssistant}
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white px-8 py-6 h-auto text-lg rounded-full"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Talk to AI Assistant
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <p className="text-sm mb-2">Scroll to explore</p>
          <ChevronDown className="h-6 w-6 text-white/70" />
        </motion.div>
      </section>
      
      {/* Live Stats Counters */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                {counterStats.businessesHelped.toLocaleString()}+
              </div>
              <div className="text-gray-600">Businesses Automated</div>
            </div>
            
            <div className="p-6">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                ${counterStats.revenueGenerated}M+
              </div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            
            <div className="p-6">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                {counterStats.timeAutomated}%
              </div>
              <div className="text-gray-600">Time Automated</div>
            </div>
            
            <div className="p-6">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                {counterStats.satisfactionRate}%
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problems Section */}
      <section 
        ref={problemRef}
        className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            style={{ opacity: problemOpacity, y: problemTextParallax }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Before AI Business Managers, Business Owners Faced:
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Burnout from managing everything manually</h3>
                    <p className="text-gray-600">Business owners spending 80+ hours weekly on tasks that don't directly generate revenue</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Inconsistent sales and low conversion rates</h3>
                    <p className="text-gray-600">Lost opportunities due to delayed follow-ups and inconsistent customer communication</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Wasted time on non-revenue-generating tasks</h3>
                    <p className="text-gray-600">Hours spent on scheduling, data entry, and administrative work instead of growth</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Hiring and training staff repeatedly</h3>
                    <p className="text-gray-600">The constant cycle of recruitment, training, and turnover draining resources</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col gap-6"
            >
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                {videoPlaying ? (
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="AI Business Managers Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div 
                    className="w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center cursor-pointer group"
                    onClick={toggleVideo}
                  >
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-12 w-12 text-white" fill="white" />
                      </div>
                      <div className="absolute bottom-6 left-6 text-white text-lg font-semibold">
                        Watch How AI Eliminates These Pain Points
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-lg mb-4 flex items-center text-gray-900">
                  <BarChart className="h-5 w-5 mr-2 text-blue-600" />
                  Dynamic Comparison: AI vs Traditional
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Operational Efficiency</span>
                      <span className="text-sm font-medium text-gray-700">+400%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Revenue Growth</span>
                      <span className="text-sm font-medium text-gray-700">+250%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Cost Reduction</span>
                      <span className="text-sm font-medium text-gray-700">-70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => setIsROICalculatorOpen(true)}
                className="w-full py-6 h-auto text-lg bg-gradient-to-r from-blue-600 to-blue-700"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Your Potential AI Savings
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section 
        ref={solutionRef}
        className="py-24 relative bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Introducing AI Business Managers
            </h2>
            <p className="text-xl md:text-2xl text-blue-100">
              Your Ultimate Business Growth Partner
            </p>
            <div className="mt-6 text-lg text-blue-100">
              We Don't Just Offer A Service—We Partner With You To Scale Your Business Using AI.
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <Brain className="h-10 w-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI-Powered Business Optimization</h3>
              <p className="text-blue-100">Transform inefficiencies into revenue opportunities with intelligent workflow analysis and automation.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <MessageSquare className="h-10 w-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Automated Customer Engagement</h3>
              <p className="text-blue-100">AI voice & SMS agents handle follow-ups and nurture leads 24/7, never missing an opportunity.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <Clock className="h-10 w-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart AI Workflow Automation</h3>
              <p className="text-blue-100">AI handles scheduling, project management, and daily tasks that previously consumed hours of your time.</p>
            </motion.div>
          </div>
          
          {/* Testimonial Video Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Hear From Our Clients</h3>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/1935155e-b63e-4ae4-a3f6-c51b7db8289a.png" 
                  alt="Client Testimonial" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex items-start gap-4">
                <img 
                  src="/lovable-uploads/d10dd79d-414a-4e5e-bfc7-7ff92e56f12f.png" 
                  alt="Client" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-3">
                    "AI Business Managers helped us cut manual work by 80% while increasing revenue. It's like having an entire team working 24/7."
                  </p>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-blue-200">Marketing Director, GrowthTech Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Interactive Walkthrough */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Interactive Walkthrough</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer">
                <div className="bg-blue-500/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Initial AI Assessment</h4>
                <p className="text-blue-100 text-sm">We analyze your current workflows and identify automation opportunities.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer">
                <div className="bg-blue-500/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Robot className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">AI Solutions Deployment</h4>
                <p className="text-blue-100 text-sm">Custom AI systems tailored to your specific business needs and goals.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer">
                <div className="bg-blue-500/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <ChartLine className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Continuous Optimization</h4>
                <p className="text-blue-100 text-sm">AI learns and improves over time, maximizing efficiency and ROI.</p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-16">
            <Button 
              onClick={() => setIsROICalculatorOpen(true)}
              size="lg"
              className="text-blue-800 bg-white hover:bg-gray-100 px-8 py-6 h-auto text-lg font-medium group"
            >
              Calculate Your Potential AI Savings
              <Calculator className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section 
        ref={whyUsRef}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Businesses Are Partnering With AI Business Managers
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Zero Upfront Risk</h3>
              <p className="text-gray-600">We only succeed when you do, with our performance-based partnership model that aligns our goals with yours.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <Clock className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">AI Works 24/7</h3>
              <p className="text-gray-600">Unlike human staff, our AI systems work around the clock, scaling your business even while you sleep.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <ChartLine className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Proven AI Strategies</h3>
              <p className="text-gray-600">Our AI solutions are built on proven methodologies that deliver measurable results and continuous improvement.</p>
            </motion.div>
          </div>
          
          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Client Success Story</h3>
              <Button 
                variant="outline" 
                onClick={() => setExpandedCaseStudy(!expandedCaseStudy)}
                className="text-blue-600 border-blue-200"
              >
                {expandedCaseStudy ? "Read Less" : "View Case Study"}
                {expandedCaseStudy ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/lovable-uploads/d93e3f1a-ff0c-49a9-922f-a5ffd654647f.png" 
                alt="Michael Chen" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                <p className="text-gray-600">TechNova Inc.</p>
              </div>
            </div>
            
            <div className="text-gray-700 mb-4">
              How TechNova increased revenue by $250K with AI Business Managers while reducing operational costs by 70%.
            </div>
            
            <AnimatePresence>
              {expandedCaseStudy && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 text-gray-700 mt-4">
                    <p>
                      TechNova was struggling with inconsistent sales performance and high operational costs. Their team was spending over 30 hours per week on manual follow-ups, scheduling, and customer service tasks.
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-b border-gray-200 py-3">
                      <div className="font-medium text-gray-900">Before AI Implementation</div>
                      <div className="text-red-600">$450K Annual Revenue</div>
                    </div>
                    
                    <p>
                      After implementing our AI Business Managers solution, TechNova's sales team was able to focus exclusively on high-value client interactions while the AI handled:
                    </p>
                    
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>24/7 lead qualification and nurturing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Automated scheduling and follow-ups</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Customer support ticket triage and resolution</span>
                      </li>
                    </ul>
                    
                    <div className="flex items-center justify-between border-t border-b border-gray-200 py-3">
                      <div className="font-medium text-gray-900">After AI Implementation</div>
                      <div className="text-green-600">$700K Annual Revenue (+56%)</div>
                    </div>
                    
                    <p>
                      "The ROI was immediate and substantial. Not only did we increase our revenue by over $250K, but we also reduced our operational costs by 70%. The AI handles customer inquiries seamlessly while our team focuses on strategic work." - Michael Chen, Operations Manager
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="mt-6">
              <Button
                onClick={() => setIsStrategyCallOpen(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Free AI Strategy Call
              </Button>
            </div>
          </motion.div>
          
          {/* Logos Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h3 className="text-lg text-center text-gray-500 uppercase tracking-wider mb-8">
              Trusted By Industry Leaders
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <img
                src="/lovable-uploads/cb8c7243-5b81-4b79-a213-5d169acaede2.png"
                alt="Company Logo"
                className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src="/lovable-uploads/97d27ffa-5e3f-47b1-b550-d47dc525b2cf.png"
                alt="Company Logo"
                className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src="/lovable-uploads/10c6384a-7a56-494c-bc22-6d612b09d170.png"
                alt="Company Logo"
                className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src="/lovable-uploads/4593bf5a-446b-418a-b024-f0848d36a02e.png"
                alt="Company Logo"
                className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src="/lovable-uploads/57f47dd7-cc27-477d-9586-e32ed172d79b.png"
                alt="Company Logo"
                className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* How It Works */}
      <section 
        ref={howItWorksRef}
        className="py-24 bg-gradient-to-b from-gray-900 to-blue-900 text-white relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works – The AI Business Manager Model
            </h2>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8 mb-16"
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold">
                  1
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">AI-Driven Business Audit</h3>
                <p className="text-blue-100 text-lg mb-6">
                  We identify inefficiencies & revenue leaks through a comprehensive analysis of your current business processes, technology stack, and growth bottlenecks.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center text-blue-200 mb-2">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Timeline: 1-2 weeks</span>
                  </div>
                  <div className="text-sm text-blue-200">
                    We'll identify at least 3 high-impact areas where AI can immediately improve your operations.
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16"
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold">
                  2
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">AI Strategy & Implementation</h3>
                <p className="text-blue-100 text-lg mb-6">
                  We deploy AI solutions tailored to your business needs, integrating them seamlessly with your existing systems and training your team on how to leverage them.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center text-blue-200 mb-2">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Timeline: 2-4 weeks</span>
                  </div>
                  <div className="text-sm text-blue-200">
                    Custom AI configuration, integration, and testing to ensure optimal performance.
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold">
                  3
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Automation & Optimization</h3>
                <p className="text-blue-100 text-lg mb-6">
                  AI continuously improves workflows & customer engagement, learning from interactions to optimize performance and deliver increasing returns over time.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center text-blue-200 mb-2">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Timeline: Ongoing</span>
                  </div>
                  <div className="text-sm text-blue-200">
                    Monthly performance reviews and AI optimization to ensure maximum ROI and continuous improvement.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="max-w-xl mx-auto mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button 
                onClick={launchChatAssistant}
                size="lg"
                className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-6 h-auto text-lg font-medium group"
              >
                <Robot className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Live AI Demo – Talk to an AI Business Manager
              </Button>
              <p className="text-blue-200 mt-4">
                Experience firsthand how our AI can transform your business operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full text-left p-6 rounded-lg flex justify-between items-center ${expandedFAQs[index] ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'} border hover:bg-blue-50 transition-colors duration-200`}
                >
                  <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                  {expandedFAQs[index] ? (
                    <ChevronUp className={`h-5 w-5 ${expandedFAQs[index] ? 'text-blue-600' : 'text-gray-500'}`} />
                  ) : (
                    <ChevronDown className={`h-5 w-5 ${expandedFAQs[index] ? 'text-blue-600' : 'text-gray-500'}`} />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedFAQs[index] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white border border-gray-200 border-t-0 rounded-b-lg">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Full SocialProof Section */}
      <SocialProofSection 
        variant="light"
        showStats={true}
        showLogos={true}
        showTestimonials={true}
        testimonials={[
          {
            name: "Sarah Johnson",
            role: "Marketing Director",
            company: "GrowthTech Solutions",
            quote: "AI Business Managers helped us cut manual work by 80% while increasing revenue by 40%. The ROI has been phenomenal.",
            avatar: "/lovable-uploads/d10dd79d-414a-4e5e-bfc7-7ff92e56f12f.png",
            rating: 5
          },
          {
            name: "Michael Chen",
            role: "Operations Manager",
            company: "TechNova Inc.",
            quote: "We eliminated the need for additional staff, thanks to AI-powered automation. Customer service inquiries are handled seamlessly now.",
            avatar: "/lovable-uploads/d93e3f1a-ff0c-49a9-922f-a5ffd654647f.png",
            rating: 5
          },
          {
            name: "Emma Williams",
            role: "CEO",
            company: "Innovative Solutions",
            quote: "The best business decision we've made—AI handles sales & customer follow-ups seamlessly while we focus on strategic growth.",
            avatar: "/lovable-uploads/1935155e-b63e-4ae4-a3f6-c51b7db8289a.png",
            rating: 5
          }
        ]}
      />
      
      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Partner With AI Business Managers Today
                </h2>
                
                <p className="text-xl text-white/90">
                  Join hundreds of businesses that have transformed their operations and scaled revenue with AI Business Managers.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Exclusive Guide: AI Business Growth</h3>
                      <p className="text-white/80">Learn how AI Business Managers unlock $100K+ in growth</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Private Webinar Access</h3>
                      <p className="text-white/80">Join our exclusive webinar on AI-powered business strategies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Free AI Business Audit</h3>
                      <p className="text-white/80">Limited spots available for complimentary assessments</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={() => setIsStrategyCallOpen(true)}
                    className="text-blue-800 bg-white hover:bg-gray-100 px-8 py-6 h-auto text-lg group"
                  >
                    Schedule Your Strategy Call
                    <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => setIsPilotProgramOpen(true)}
                    className="bg-transparent border-white/30 hover:bg-white/10 text-white px-8 py-6 h-auto text-lg"
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    Start a Pilot Program
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20"
              >
                <h3 className="text-2xl font-bold mb-6">Get Your Free AI Strategy</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="text-white/90 block mb-2">Full Name</label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-white/90 block mb-2">Email Address</label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="businessType" className="text-white/90 block mb-2">Business Type</label>
                    <Input
                      id="businessType"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      placeholder="e.g., E-commerce, Real Estate, etc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="challenges" className="text-white/90 block mb-2">Your Biggest Business Challenge</label>
                    <Textarea
                      id="challenges"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[100px]"
                      placeholder="Tell us what's holding your business back..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-white text-blue-800 hover:bg-gray-100 py-6 h-auto text-lg font-medium"
                  >
                    Get My Free AI Strategy
                  </Button>
                  
                  <p className="text-sm text-white/70 text-center">
                    By submitting, you agree to receive communications from us. We respect your privacy.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fixed Chat Assistant Button (when not expanded) */}
      <AnimatePresence>
        {!showAIChatAssistant && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={launchChatAssistant}
              className="group bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Robot className="h-7 w-7 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Dialogs/Modals */}
      <ROICalculatorDialog 
        isOpen={isROICalculatorOpen}
        onClose={() => setIsROICalculatorOpen(false)}
      />
      
      <StrategyCallForm 
        isOpen={isStrategyCallOpen}
        onClose={() => setIsStrategyCallOpen(false)}
      />
      
      <PilotProgramForm
        isOpen={isPilotProgramOpen}
        onClose={() => setIsPilotProgramOpen(false)}
      />
    </>
  );
}
