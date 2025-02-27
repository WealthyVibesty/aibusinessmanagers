
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Download, 
  BookOpen, 
  Check, 
  X, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Bot, 
  Rocket, 
  Award, 
  ExternalLink, 
  ChevronRight
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function AIBusinessPartner() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showChat, setShowChat] = useState(false);
  const [chatMinimized, setChatMinimized] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showScrollCTA, setShowScrollCTA] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const handlePurchase = () => {
    navigate("/checkout");
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Question Received",
      description: "We'll get back to you soon with answers about the AI Business Partner model.",
    });
    setMessage("");
  };

  const handleLeadCapture = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You'll receive your free business AI assessment within 24 hours.",
    });
    setEmail("");
  };

  // Show chat widget after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChat(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Show scroll CTA after 15 seconds if user hasn't scrolled
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollCTA(true);
    }, 15000);
    
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollCTA(false);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Counter animation
  const CounterAnimation = ({ end, label, duration = 2500 }: { end: number, label: string, duration?: number }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
  
      if (counterRef.current) {
        observer.observe(counterRef.current);
      }
  
      return () => observer.disconnect();
    }, []);
  
    useEffect(() => {
      if (!isVisible) return;
  
      let start = 0;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
  
      return () => clearInterval(timer);
    }, [end, duration, isVisible]);
  
    return (
      <div ref={counterRef} className="text-center">
        <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{count}+</p>
        <p className="text-gray-600">{label}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900 text-white">
      <SEO
        title="AI Business Partner Model - Scale Your Business With AI"
        description="New book reveals how business owners can partner with AI experts to scale effortlessly and unlock $100k+ revenue streams without becoming a tech guru."
        path="/ai-business-partner"
      />

      {/* Hero Section with Parallax Effect */}
      <div 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-slate-900/90 z-10"></div>
          <img 
            src="/lovable-uploads/cd3826ee-3df6-4947-b0b1-a5ff9f03f4cb.png" 
            alt="AI Business Partner" 
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto px-4 pt-32 pb-16 relative z-20"
        >
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="inline-block px-4 py-1 bg-indigo-600 rounded-full text-sm font-medium mb-4">
              INTRODUCING THE AI BUSINESS PARTNER MODEL
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              New Book Reveals How Business Owners Can Partner With AI Experts To Scale <span className="text-indigo-400">Effortlessly</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-indigo-200 mb-8">
              And Unlock $100k+ Revenue Streams Without Adding More Work
            </h2>
            
            <Card className="bg-indigo-800/50 border-indigo-700 mb-12 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  The AI Business Partner Model Is The Key To Sustainable Growth Without Hiring More Staff Or Burning Out
                </h3>
              </CardContent>
            </Card>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-6 py-3 md:px-8 md:py-6 h-auto rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                onClick={handlePurchase}
              >
                <Download className="mr-2 h-5 w-5" />
                <span className="whitespace-normal">Send Me The Book + All The Free Bonuses</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <p className="mt-4 text-indigo-300 text-sm">Only $14.40 — 100% Money-Back Guarantee</p>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white/80"
          >
            <p className="mb-2 text-sm font-medium">Scroll to discover</p>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Floating scroll CTA that appears after 15 seconds */}
        {showScrollCTA && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center">
              <p className="mr-2">Discover how AI can transform your business</p>
              <motion.div
                animate={{ 
                  x: [0, 5, 0],
                }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronRight className="h-5 w-5" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Social Proof Stats Section */}
      <section ref={statsRef} className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Trusted By Growing Businesses</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <CounterAnimation end={127} label="Business Partners" />
              <CounterAnimation end={6.2} label="Million in Revenue Generated" />
              <CounterAnimation end={84} label="% Average Growth Rate" />
              <CounterAnimation end={32} label="Hours Saved Per Week" />
            </div>
          </div>

          {/* Client Logos */}
          <div className="mt-12">
            <p className="text-center text-indigo-400 mb-6">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
              <img src="/placeholder.svg" alt="Client Logo" className="h-8 md:h-10" />
              <img src="/placeholder.svg" alt="Client Logo" className="h-8 md:h-10" />
              <img src="/placeholder.svg" alt="Client Logo" className="h-8 md:h-10" />
              <img src="/placeholder.svg" alt="Client Logo" className="h-8 md:h-10" />
              <img src="/placeholder.svg" alt="Client Logo" className="h-8 md:h-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-indigo-900/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Before We Introduced The AI Business Partner Model...
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <X className="mr-3 h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white/80">Businesses struggled with inconsistent sales and unpredictable revenue</p>
                </div>
                <div className="flex items-start">
                  <X className="mr-3 h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white/80">Marketing efforts produced diminishing returns and rising costs</p>
                </div>
                <div className="flex items-start">
                  <X className="mr-3 h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white/80">Business owners were trapped working IN their business rather than ON it</p>
                </div>
                <div className="flex items-start">
                  <X className="mr-3 h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-white/80">Digital transformations failed due to complexity and poor implementation</p>
                </div>
              </div>
              
              <p className="text-lg text-white/80">
                Many had tried digital marketing agencies, ad campaigns, and funnel optimizations, only to find themselves trapped in a cycle of unpredictable ROI and growing frustration.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-75"></div>
              <div className="relative bg-slate-800 p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">That's Where We Come In</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Check className="mr-3 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-lg text-white/80">We partner with you instead of just selling another service</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-lg text-white/80">We optimize what's already working and automate the rest</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-lg text-white/80">We integrate AI-powered systems that drive consistent growth</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-3 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-lg text-white/80">We only win when you win—performance-based partnerships</p>
                  </div>
                </div>
                
                <div className="py-4 px-6 bg-indigo-900/50 rounded-lg border border-indigo-700/50">
                  <p className="text-lg italic text-white/90">
                    "We don't just sell another marketing service or software. We <span className="text-indigo-400 font-semibold">partner</span> with businesses like yours to optimize what's already working and <span className="text-indigo-400 font-semibold">automate the rest</span>."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Business Partner Model Section */}
      <section ref={featureRef} className="py-20 bg-indigo-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-600/30 text-indigo-300 text-sm font-medium mb-4">
              REVOLUTIONARY APPROACH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Introducing The AI Business Partner Model
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We don't just sell services—we become an extension of your business, leveraging AI to drive revenue and optimize operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="h-10 w-10 text-indigo-400" />,
                title: "No Upfront Risk",
                description: "We only profit when you do. Our performance-based model aligns our success with yours."
              },
              {
                icon: <Zap className="h-10 w-10 text-indigo-400" />,
                title: "No Extra Workload",
                description: "AI handles the heavy lifting, automating repetitive tasks and optimizing workflows."
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-indigo-400" />,
                title: "No Unpredictable Spend",
                description: "We optimize what's already working, focusing on proven strategies that bring results."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-indigo-500/20 p-8 rounded-xl hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* How It Works Animation */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              How The AI Business Partner Model Works
            </h3>

            <div className="grid md:grid-cols-5 gap-4 relative">
              {/* Connection lines */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 z-0"></div>
              
              {[
                {
                  icon: <Bot className="h-8 w-8 text-white" />,
                  title: "AI-Powered Lead Engagement",
                  description: "Instantly follow up with leads via text, email, and calls using AI voice agents."
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-white" />,
                  title: "Automated Customer Nurturing",
                  description: "Keep customers engaged without manually reaching out."
                },
                {
                  icon: <Award className="h-8 w-8 text-white" />,
                  title: "Performance-Based Marketing",
                  description: "No ad spend guesswork—only proven strategies that bring results."
                },
                {
                  icon: <Zap className="h-8 w-8 text-white" />,
                  title: "AI-Optimized Workflows",
                  description: "Automate tasks that slow your business down."
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-white" />,
                  title: "Revenue Growth Strategies",
                  description: "Leverage AI insights to identify and monetize untapped opportunities."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <div className="bg-slate-800 rounded-full w-full h-full flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white text-center mb-2">{step.title}</h4>
                  <p className="text-white/70 text-center text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Our Partners Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The AI Business Partner model completely transformed our sales process. We're closing deals 40% faster and our team is more focused on high-value activities.",
                author: "Sarah Johnson",
                role: "CEO, TechSolutions Inc.",
                image: "/placeholder.svg"
              },
              {
                quote: "Unlike other agencies that promised the world but delivered little, this team actually aligned their success with ours. Our revenue is up 78% in just 6 months.",
                author: "Michael Chen",
                role: "Founder, GrowthMasters",
                image: "/placeholder.svg"
              },
              {
                quote: "The AI systems they implemented have saved us 25+ hours per week in manual tasks. We're now able to focus on strategy instead of getting caught in daily operations.",
                author: "Jennifer Taylor",
                role: "Operations Director, Elevate Inc.",
                image: "/placeholder.svg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-xl border border-indigo-500/20"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.author}</h4>
                    <p className="text-indigo-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-indigo-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Partner With Us?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div className="bg-slate-800/50 border border-red-500/20 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <X className="mr-3 h-6 w-6 text-red-400" />
                Traditional Agencies
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <X className="mr-3 h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-white/80">Expensive monthly retainers regardless of results</p>
                </div>
                <div className="flex items-start">
                  <X className="mr-3 h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-white/80">Long-term contracts that lock you in</p>
                </div>
                <div className="flex items-start">
                  <X className="mr-3 h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-white/80">Experimental ad spend with unpredictable ROI</p>
                </div>
                <div className="flex items-start">
                  <X className="mr-3 h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-white/80">Generic solutions not tailored to your business</p>
                </div>
                <div className="flex items-start">
                  <X className="mr-3 h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-white/80">More work for your team implementing recommendations</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 border border-green-500/20 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Check className="mr-3 h-6 w-6 text-green-400" />
                AI Business Partner Model
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="mr-3 h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-white/80">Performance-based fees — we only profit when you do</p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-white/80">Flexible partnerships that grow with your business</p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-white/80">Proven strategies optimized by AI for maximum ROI</p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-white/80">Custom solutions built specifically for your business</p>
                </div>
                <div className="flex items-start">
                  <Check className="mr-3 h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-white/80">AI automation reduces your team's workload</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Details Section */}
      <section className="py-20 bg-indigo-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What's Inside The Book?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              To show you exactly how this works, we put everything into a <span className="text-indigo-400 font-bold">$14.40 guide</span> called:
            </p>
            
            <Card className="bg-indigo-800/50 border-indigo-700 mt-8 mb-12 backdrop-blur-sm max-w-3xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 italic">
                  The AI Business Partner: How We Help Business Owners Unlock $100,000+ In Revenue While AI Handles The Work
                </h3>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Inside, you'll discover:</h3>
              
              <div className="space-y-4">
                {[
                  "How to turn AI into your biggest competitive advantage",
                  "The 3-step system to automating sales and customer engagement",
                  "How to scale to 7 figures without hiring more staff",
                  "How we structure performance-based partnerships that align with your growth",
                  "Why traditional marketing agencies are failing, and how AI changes the game"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <BookOpen className="mr-3 h-6 w-6 text-indigo-400 flex-shrink-0 mt-1" />
                    <p className="text-lg text-white/80">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Plus, FREE bonuses:</h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Plug & Play Business Optimization Dashboard",
                      description: "Track and improve key business metrics instantly."
                    },
                    {
                      title: "Pre-Built AI Sales Assistant",
                      description: "A ready-to-go AI voice agent that automates customer interactions."
                    },
                    {
                      title: "Revenue Expansion Strategies",
                      description: "Identify hidden opportunities for increasing your profits."
                    },
                    {
                      title: "Compliance & AI Integration Training",
                      description: "Ensure smooth AI adoption without legal headaches."
                    },
                    {
                      title: "42 Most Profitable AI-Enabled Niches",
                      description: "Know exactly where to apply AI for maximum impact."
                    }
                  ].map((bonus, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="mr-3 h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-lg font-bold text-white">{bonus.title}</p>
                        <p className="text-white/70">{bonus.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-75"></div>
                <div className="relative bg-slate-800 p-8 rounded-xl shadow-xl border border-indigo-500/30">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    Limited Time Offer
                  </h3>
                  
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-indigo-500/30">
                    <span className="text-white/80">The AI Business Partner Book</span>
                    <span className="text-white font-bold">$47.00</span>
                  </div>
                  
                  {[
                    "Business Optimization Dashboard",
                    "AI Sales Assistant",
                    "Revenue Expansion Strategies",
                    "Compliance & Integration Training",
                    "42 Profitable AI Niches Guide"
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-4 pb-4 border-b border-indigo-500/30">
                      <span className="text-white/80">{item}</span>
                      <span className="text-white font-bold">$97.00</span>
                    </div>
                  ))}
                  
                  <div className="flex justify-between items-center mb-4 pt-2">
                    <span className="text-lg text-white font-bold">Total Value:</span>
                    <span className="text-lg text-white font-bold">$532.00</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6 pt-2 pb-4 border-b border-t border-indigo-500/30">
                    <span className="text-xl text-white font-bold">Today's Price:</span>
                    <span className="text-xl text-green-400 font-bold">$14.40</span>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-4"
                  >
                    <Button 
                      size="lg" 
                      className="w-full text-lg py-6 h-auto rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                      onClick={handlePurchase}
                    >
                      <Download className="mr-2 h-5 w-5" />
                      <span className="whitespace-normal">Send Me The Book + Bonuses</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                  
                  <p className="text-center text-white/70 text-sm">
                    100% Money-Back Guarantee for 30 Days
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready To Transform Your Business With AI?
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            This is your chance to partner with an AI-driven business team and transform your revenue growth strategy—without adding extra workload.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="text-lg px-6 py-3 md:px-8 md:py-6 h-auto rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
              onClick={handlePurchase}
            >
              <Download className="mr-2 h-5 w-5" />
              <span className="whitespace-normal">Send Me The Book + All The Free Bonuses</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          <p className="mt-4 text-indigo-300 text-sm">Only $14.40 — 100% Money-Back Guarantee</p>
          
          {/* Trust Badges */}
          <div className="flex justify-center gap-4 mt-8">
            <div className="bg-slate-800/50 rounded-lg p-3">
              <Award className="h-5 w-5 text-indigo-400 mx-auto mb-1" />
              <p className="text-xs text-white/70">Money-Back Guarantee</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3">
              <Check className="h-5 w-5 text-indigo-400 mx-auto mb-1" />
              <p className="text-xs text-white/70">Secure Checkout</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3">
              <Zap className="h-5 w-5 text-indigo-400 mx-auto mb-1" />
              <p className="text-xs text-white/70">Instant Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Dialog */}
      <section className="py-20 bg-indigo-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How is this different from hiring a digital marketing agency?",
                answer: "Unlike traditional agencies that charge high monthly retainers regardless of results, we operate on a performance-based model. We use AI to automate and optimize your business processes, becoming true partners in your success rather than just service providers."
              },
              {
                question: "Do I need technical knowledge to implement these strategies?",
                answer: "Not at all. The AI Business Partner model is designed to be hassle-free for business owners. We handle all the technical aspects of implementation, from setting up AI systems to optimizing workflows. You focus on your core business while we take care of the rest."
              },
              {
                question: "How quickly can I expect to see results?",
                answer: "Most of our partners see initial results within the first 30 days. However, the full impact of the AI Business Partner model typically unfolds over 90-120 days as systems are optimized and automated processes begin to scale."
              },
              {
                question: "What types of businesses benefit most from this model?",
                answer: "The AI Business Partner model works exceptionally well for service-based businesses, e-commerce, professional practices, and B2B companies with established operations generating at least $250,000 in annual revenue. If you have existing customers and processes that can be optimized, this model can transform your business."
              },
              {
                question: "How much does it cost to implement the AI Business Partner model?",
                answer: "Beyond the initial $14.40 investment in the book and bonuses, implementation costs vary based on your business needs. However, our performance-based structure means we're primarily compensated through a percentage of the additional revenue we help generate—so our incentives are aligned with your success."
              },
              {
                question: "Is my industry a good fit for AI automation?",
                answer: "The book covers 42 profitable niches that are ideal for AI implementation, but generally speaking, if your business involves customer communication, appointment scheduling, sales processes, content creation, or data analysis, it's likely a good fit. The book will help you determine exactly how the model applies to your specific industry."
              }
            ].map((faq, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 p-6 rounded-xl border border-indigo-500/20 cursor-pointer hover:border-indigo-500/50 transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-white flex items-center justify-between">
                      {faq.question}
                      <ChevronRight className="h-5 w-5 text-indigo-400" />
                    </h3>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="bg-slate-800 text-white border-indigo-500">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-white">{faq.question}</DialogTitle>
                  </DialogHeader>
                  <p className="text-white/80">{faq.answer}</p>
                  <DialogFooter>
                    <Button 
                      onClick={handlePurchase}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white"
                    >
                      Get The Book Now
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          
          {/* Have a question that's not answered? */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Have a question that's not answered above?</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-indigo-500 text-white hover:bg-indigo-900 hover:text-white">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Ask Us Directly
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-800 text-white border-indigo-500">
                <DialogHeader>
                  <DialogTitle className="text-xl text-white">Ask Us About The AI Business Partner Model</DialogTitle>
                  <DialogDescription className="text-white/70">
                    We'll get back to you with answers to your specific questions.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmitQuestion} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="question" className="text-sm font-medium text-white">
                      Your Question
                    </label>
                    <Textarea
                      id="question"
                      className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
                      placeholder="What would you like to know about the AI Business Partner model?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white">
                      Send Question
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Free Business AI Assessment Form */}
      <section className="py-20 bg-gradient-to-b from-indigo-900/30 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Ready For The Book Yet?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get a free AI readiness assessment for your business. We'll analyze your current operations and identify where AI can make the biggest impact.
            </p>
            
            <Card className="bg-slate-800/70 border-indigo-500/30">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-4">Get Your Free Business AI Assessment</h3>
                <form onSubmit={handleLeadCapture} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-slate-700 border-slate-600 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    Send Me The Free Assessment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      {showChat && (
        <div 
          ref={chatRef}
          className={`fixed ${chatMinimized ? 'bottom-6 right-6 w-auto h-auto' : 'bottom-6 right-6 w-80 md:w-96'} bg-slate-800 rounded-xl shadow-2xl border border-indigo-500/30 z-50 transition-all duration-300`}
        >
          {chatMinimized ? (
            <div 
              className="p-4 cursor-pointer flex items-center space-x-2"
              onClick={() => setChatMinimized(false)}
            >
              <MessageSquare className="h-6 w-6 text-indigo-400" />
              <span className="text-white font-medium">Chat with us</span>
            </div>
          ) : (
            <div className="flex flex-col h-96">
              <div className="flex items-center justify-between bg-indigo-900/50 p-4 rounded-t-xl">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-indigo-400" />
                  <h3 className="text-white font-medium">AI Business Partner Assistant</h3>
                </div>
                <button 
                  onClick={() => setChatMinimized(true)}
                  className="text-white/70 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto bg-slate-900 space-y-4">
                <div className="bg-indigo-900/30 p-3 rounded-lg max-w-[80%]">
                  <p className="text-white/90 text-sm">
                    Hi there! 👋 I'm your AI Business Partner assistant. How can I help you understand our partnership model today?
                  </p>
                </div>
                
                <div className="bg-indigo-900/30 p-3 rounded-lg max-w-[80%]">
                  <p className="text-white/90 text-sm">
                    Would you like to learn more about:
                  </p>
                  <div className="mt-2 space-y-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start border-indigo-500/50 text-white text-sm hover:bg-indigo-900/50"
                      onClick={() => toast({
                        title: "AI Business Models",
                        description: "We've sent more information about our AI Business Models to your email.",
                      })}
                    >
                      How the AI partnership model works
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start border-indigo-500/50 text-white text-sm hover:bg-indigo-900/50"
                      onClick={() => toast({
                        title: "Case Studies Sent",
                        description: "We've sent our best case studies to your email.",
                      })}
                    >
                      Success stories from our partners
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start border-indigo-500/50 text-white text-sm hover:bg-indigo-900/50"
                      onClick={handlePurchase}
                    >
                      Get the book now
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-3 border-t border-indigo-500/30 bg-slate-800 rounded-b-xl">
                <form className="flex space-x-2">
                  <Input
                    placeholder="Type your question here..."
                    className="flex-1 bg-slate-700 border-slate-600 text-white text-sm"
                  />
                  <Button 
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white"
                    onClick={() => toast({
                      title: "Message Sent",
                      description: "We'll respond to your question shortly!",
                    })}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
