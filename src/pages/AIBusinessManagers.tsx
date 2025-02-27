
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, CheckCircle, BookOpen, Users, MessageCircle, Zap, BarChart2, HeadphonesIcon, LightbulbIcon, UserCheck, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AIBusinessManagers() {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 sm:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-slate-900/30 backdrop-blur-md -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 leading-tight">
              AI That Works FOR You—24/7. <br className="hidden sm:block" />
              No Learning Curve. No Extra Work.
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl leading-relaxed">
              AI automation is replacing manual workflows, cutting costs, and scaling businesses faster than ever. We set it up, so you don't have to.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="text-lg px-8 py-6 h-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 font-medium relative group w-full sm:w-auto"
                onClick={() => navigate("/checkout")}
              >
                Book Your AI Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <div className="rocket-flames"></div>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto rounded-full border-2 border-blue-400/30 hover:bg-blue-400/10 text-blue-100 shadow-lg transition-all duration-300 font-medium w-full sm:w-auto"
                onClick={() => navigate("/core-offer")}
              >
                Join AI Business Managers University
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 lg:mt-20 relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-indigo-500/30"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="aspect-w-16 aspect-h-9 bg-slate-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {!isVideoPlaying ? (
                  <Button 
                    className="w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </Button>
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <p className="text-gray-400">Video would play here (AI automation showcase)</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About AI Business Managers Section */}
      <section className="py-20 px-6 sm:px-12 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              About AI Business Managers (AIBM)
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              "AI isn't just for tech companies. It's for every business that wants to scale faster and work smarter."
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-10 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-6" variants={staggerItem}>
              <h3 className="text-2xl font-semibold text-white mb-4">Who We Are</h3>
              <p className="text-blue-100/80 text-lg leading-relaxed">
                AI Business Managers is a full-service AI automation consultancy helping businesses optimize operations, reduce workforce inefficiencies, and maximize revenue using AI.
              </p>
              
              <motion.ul className="space-y-4 mt-6">
                {[
                  { icon: <LightbulbIcon className="h-5 w-5 text-blue-400" />, text: "Custom AI Solutions – We build AI automations tailored to your business needs." },
                  { icon: <HeadphonesIcon className="h-5 w-5 text-blue-400" />, text: "AI Virtual Assistants – 24/7 AI-powered customer service, lead management, and workflow automation." },
                  { icon: <BarChart2 className="h-5 w-5 text-blue-400" />, text: "AI Business Intelligence – Custom data analytics and AI-driven decision-making." },
                  { icon: <UserCheck className="h-5 w-5 text-blue-400" />, text: "Industry-Specific AI Consulting – Real estate, healthcare, finance, e-commerce, hospitality, and more." }
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    variants={staggerItem}
                  >
                    <div className="mt-1.5 flex-shrink-0">{item.icon}</div>
                    <span className="text-blue-50/90">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <Button 
                className="mt-8 rounded-full px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-medium text-white shadow-lg group"
                onClick={() => navigate("/checkout")}
              >
                Find out how AI can transform your business
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/30 border border-blue-500/20"
              variants={fadeIn}
            >
              <img 
                src="/lovable-uploads/aba7b0cf-5619-405d-91ce-ac984eb4b793.png" 
                alt="AI Business Managers Team" 
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* AI Business Managers University */}
      <section className="py-20 px-6 sm:px-12 bg-gradient-to-b from-slate-900 to-indigo-950">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              AI Business Managers University (AIBMU)
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              "AI education that translates into real-world business automation."
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: <BookOpen className="h-8 w-8 text-blue-400" />, 
                title: "Live AI Training & Strategy Sessions", 
                description: "Exclusive webinars covering AI automation strategies for real business applications." 
              },
              { 
                icon: <UserCheck className="h-8 w-8 text-blue-400" />, 
                title: "1:1 AI Coaching", 
                description: "Private AI consultations to tailor AI tools specifically for your business needs." 
              },
              { 
                icon: <Zap className="h-8 w-8 text-blue-400" />, 
                title: "AI Tool Tutorials & Walkthroughs", 
                description: "Learn how to use AI for content creation, workflow automation, and business efficiency." 
              },
              { 
                icon: <Users className="h-8 w-8 text-blue-400" />, 
                title: "Exclusive AI Community", 
                description: "Network with business owners and AI professionals on our private Whop platform." 
              },
              { 
                icon: <BarChart2 className="h-8 w-8 text-blue-400" />, 
                title: "Real-World Case Studies", 
                description: "Learn from businesses actively using AI to transform their operations and scale." 
              },
              { 
                icon: <MessageCircle className="h-8 w-8 text-blue-400" />, 
                title: "Implementation Guides", 
                description: "Step-by-step instructions to implement AI solutions in your specific business context." 
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 shadow-xl transition-all duration-300 hover:shadow-indigo-500/10 hover:-translate-y-1 group"
                variants={staggerItem}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center mb-6 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-blue-100/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-lg text-blue-100 font-medium mb-8">
              <span className="text-blue-300 font-bold">$22</span>/month before prices increase!
            </div>
            <div>
              <Button 
                className="px-8 py-6 text-lg h-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-medium text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 group"
                onClick={() => navigate("/core-offer")}
              >
                Join AI Business Managers University Today!
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* AI Automation Solutions & Services */}
      <section className="py-20 px-6 sm:px-12 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4593bf5a-446b-418a-b024-f0848d36a02e.png')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              AI Automation Solutions & Services
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              "AI doesn't replace people. It replaces inefficiencies."
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: <HeadphonesIcon className="h-10 w-10 text-blue-400" />, 
                title: "AI Virtual Assistants (24/7 Support)", 
                description: "Custom AI-powered agents to handle customer interactions, lead management, and workflow automation without human intervention." 
              },
              { 
                icon: <BarChart2 className="h-10 w-10 text-blue-400" />, 
                title: "AI-Powered Business Intelligence", 
                description: "Automated reporting, analytics, and forecasting to enhance decision-making and uncover hidden opportunities in your business." 
              },
              { 
                icon: <Rocket className="h-10 w-10 text-blue-400" />, 
                title: "Industry-Specific AI Solutions", 
                description: "Custom automation solutions tailored to unique industry pain points, from healthcare to real estate to e-commerce." 
              },
              { 
                icon: <Zap className="h-10 w-10 text-blue-400" />, 
                title: "Website AI Integration", 
                description: "AI chatbots and automation integrated into existing business websites for seamless customer interactions and lead capture." 
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-slate-800/80 to-indigo-900/20 backdrop-blur-md p-8 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 shadow-xl transition-all duration-300 group"
                variants={staggerItem}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center mb-6 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-blue-100/70 text-lg leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button 
              className="px-8 py-6 text-lg h-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-medium text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 group"
              onClick={() => navigate("/business-automation")}
            >
              Discover the AI advantage—Get a personalized automation roadmap
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Case Studies & Success Stories */}
      <section className="py-20 px-6 sm:px-12 bg-gradient-to-b from-slate-900 to-indigo-950 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              Case Studies & Success Stories
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              "Real results. Real businesses. Real AI transformations."
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: "/lovable-uploads/22a4d603-9942-4a99-be71-c323c84bd0a3.png", 
                title: "Healthcare", 
                description: "Automated claims processing saved a clinic 40+ admin hours per month." 
              },
              { 
                icon: "/lovable-uploads/10c6384a-7a56-494c-bc22-6d612b09d170.png", 
                title: "Restaurants", 
                description: "AI-powered order automation increased efficiency by 200%." 
              },
              { 
                icon: "/lovable-uploads/57f47dd7-cc27-477d-9586-e32ed172d79b.png", 
                title: "Real Estate", 
                description: "AI lead follow-up boosted conversion rates by 3x." 
              },
              { 
                icon: "/lovable-uploads/a86fa152-b9da-40f8-899e-6a7f321435a6.png", 
                title: "E-Commerce", 
                description: "AI-driven customer service reduced manual inquiries by 75%." 
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 shadow-lg transition-all duration-300 hover:shadow-indigo-500/10 hover:-translate-y-1 group overflow-hidden relative"
                variants={staggerItem}
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-blue-100/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button 
              className="px-8 py-4 rounded-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-100 font-medium transition-all duration-300 border border-blue-500/30 group"
              onClick={() => navigate("/business-automation")}
            >
              Want to see how AI can work for YOUR industry? Let's talk
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Book a Consultation */}
      <section className="py-20 px-6 sm:px-12 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                Book a Consultation
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                "AI can save you money. But first, let's see where you're losing it."
              </p>
              
              <ul className="space-y-5 mt-8">
                {[
                  { icon: <CheckCircle className="h-6 w-6 text-blue-400" />, text: "Personalized AI Strategy – We analyze your business model and create a custom roadmap." },
                  { icon: <CheckCircle className="h-6 w-6 text-blue-400" />, text: "Tool & Workflow Recommendations – Identify the best AI tools to streamline operations." },
                  { icon: <CheckCircle className="h-6 w-6 text-blue-400" />, text: "Done-for-You Implementation – We handle setup, integration, and ongoing support." }
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <span className="text-blue-50/90">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6">
                <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-blue-100 mb-8">
                  <DollarSign className="h-4 w-4 inline-block mr-1" />
                  <span>Consultations start at <span className="text-blue-300 font-bold">$500</span>—credited toward AI implementation</span>
                </div>
              </div>
              
              <Button 
                className="px-8 py-6 text-lg h-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-medium text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 group"
                onClick={() => navigate("/checkout")}
              >
                Book a Consultation Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/20 border border-indigo-500/30"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img 
                src="/lovable-uploads/d93e3f1a-ff0c-49a9-922f-a5ffd654647f.png" 
                alt="AI Consultation" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* AI Business Managers Community */}
      <section className="py-20 px-6 sm:px-12 bg-gradient-to-br from-slate-900 to-indigo-950/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              AI Business Managers Community
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay connected, stay informed, and stay ahead.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: <Users className="h-10 w-10 text-blue-400" />, 
                title: "Exclusive Access to AI Experts", 
                description: "Ask questions, get advice, and stay updated with the latest AI advancements and strategies." 
              },
              { 
                icon: <MessageCircle className="h-10 w-10 text-blue-400" />, 
                title: "Live Weekly Events & Strategy Calls", 
                description: "Join interactive sessions to learn about the latest AI innovations and implementation tactics." 
              },
              { 
                icon: <Zap className="h-10 w-10 text-blue-400" />, 
                title: "AI Business Forum & Chat", 
                description: "Engage with like-minded professionals and share experiences in our private community platform." 
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 shadow-xl transition-all duration-300 hover:shadow-indigo-500/10 group"
                variants={staggerItem}
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center mb-6 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-blue-100/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button 
              className="px-8 py-6 text-lg h-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-medium text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 group"
              onClick={() => navigate("/checkout")}
            >
              Join the AI Business Managers Community Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing & AI Packages */}
      <section className="py-20 px-6 sm:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              Pricing & AI Packages
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Custom solutions tailored to your business needs
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: <LightbulbIcon className="h-8 w-8 text-blue-400" />, 
                title: "AI Business Consulting & Custom Solutions", 
                description: "Custom quotes based on business needs and requirements" 
              },
              { 
                icon: <HeadphonesIcon className="h-8 w-8 text-blue-400" />, 
                title: "AI Virtual Assistants (24/7 Support)", 
                description: "Tailored AI agent solutions based on industry and use case" 
              },
              { 
                icon: <UserCheck className="h-8 w-8 text-blue-400" />, 
                title: "AI-Driven Lead Generation & CRM", 
                description: "Custom-built solutions based on your business needs" 
              },
              { 
                icon: <Rocket className="h-8 w-8 text-blue-400" />, 
                title: "1:1 AI Coaching & Business Strategy", 
                description: "$100/hour for personalized guidance and implementation" 
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 shadow-lg transition-all duration-300 hover:shadow-indigo-500/10 hover:-translate-y-1 h-full"
                variants={staggerItem}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-blue-100/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 md:p-12 border border-indigo-500/30 shadow-2xl text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-100">Special Offer</h3>
            <p className="text-xl mb-6 text-blue-200">
              Join AI Business Managers University for just <span className="text-blue-300 font-bold">$22/month</span> before prices increase!
            </p>
            <Button 
              className="px-8 py-6 text-lg h-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-medium text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 group"
              onClick={() => navigate("/core-offer")}
            >
              Explore Pricing & Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Us */}
      <section className="py-20 px-6 sm:px-12 bg-gradient-to-t from-slate-950 to-indigo-950/90">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              Contact Us
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Questions? Our AI Experts Are Ready to Help.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto bg-gradient-to-br from-slate-800/60 to-indigo-900/30 backdrop-blur-md rounded-xl p-8 border border-indigo-500/20 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-blue-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you with AI automation?"
                ></textarea>
              </div>
              <div className="text-center">
                <Button 
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-medium text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 w-full md:w-auto"
                  type="submit"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-100 mb-4">Follow Us on Social Media</p>
            <div className="flex justify-center gap-4">
              {["YouTube", "Instagram", "LinkedIn"].map((platform, index) => (
                <Link 
                  key={index}
                  to="#"
                  className="px-5 py-2 rounded-full bg-slate-800/50 border border-indigo-500/20 text-blue-100 hover:bg-indigo-600/20 transition-all duration-300"
                >
                  {platform}
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Button 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-medium text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 group"
                onClick={() => navigate("/checkout")}
              >
                Let's Connect and Automate Your Business Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
