
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/landing/sections/HeroSection";
import PartnersSection from "@/components/ai-business-managers/PartnersSection";
import { ArrowRight, Check, ChartBarIcon, Clock, DollarSign, FileDown, Rocket, Users } from "lucide-react";

export default function AIBusinessManagers() {
  const navigate = useNavigate();
  
  const handleDemoClick = () => {
    navigate("/demo");
  };
  
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <HeroSection
        title="AI Business Managers – Helping Your Business Grow Faster & Smarter"
        subtitle="Why Struggle When AI Can Do The Work For You? 🤖💡"
        ctaText="See How It Works →"
        ctaAction={handleDemoClick}
      />

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Running a business is hard. Managing daily tasks, keeping up with sales, and staying ahead of competitors can be overwhelming. What if you had a partner that could handle all of this for you?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Meet AI Business Managers – Your AI-Powered Business Partner
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">Saves You Time</h3>
                </div>
                <p className="text-gray-600">Automates your daily tasks so you can focus on growth.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <ChartBarIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">Increases Sales</h3>
                </div>
                <p className="text-gray-600">AI follows up with leads and nurtures customers 24/7.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">Reduces Costs</h3>
                </div>
                <p className="text-gray-600">No need to hire extra staff. AI does the work for you.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">Results-Based</h3>
                </div>
                <p className="text-gray-600">You only pay when AI delivers results.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-12">
            <Button 
              size="lg"
              onClick={handleDemoClick}
              className="text-lg rounded-full group"
            >
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
              Without AI, Business Owners Face:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <span className="text-red-500 text-2xl mr-4">❌</span>
                  <p className="text-lg text-gray-700">Too much work and not enough time</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <span className="text-red-500 text-2xl mr-4">❌</span>
                  <p className="text-lg text-gray-700">Low sales because leads don't get followed up</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <span className="text-red-500 text-2xl mr-4">❌</span>
                  <p className="text-lg text-gray-700">High costs from hiring more employees</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <span className="text-red-500 text-2xl mr-4">❌</span>
                  <p className="text-lg text-gray-700">Lost opportunities because of slow processes</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <video className="h-12 w-12 object-cover rounded-full" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Watch AI Fix These Problems Instantly</h3>
              <p className="text-gray-600 mb-4">Short Video</p>
              <Button variant="outline" className="w-full">
                Watch Video
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <img src="/placeholder.svg" alt="Before & After" className="h-12 w-12 object-cover rounded-full" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">See The Difference – AI vs. Manual Work</h3>
              <p className="text-gray-600 mb-4">Before & After Image</p>
              <Button variant="outline" className="w-full">
                View Comparison
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <ChartBarIcon className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Data – AI in Action</h3>
              <p className="text-gray-600 mb-4">Real-time Performance Stats</p>
              <Button variant="outline" className="w-full">
                View Live Stats
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              What AI Business Managers Do
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Instead of just selling a service, we work <span className="font-bold">with you</span> as a partner to make your business more efficient and profitable using AI.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm"
            >
              <div className="text-primary text-4xl mb-4">🔹</div>
              <h3 className="text-xl font-semibold mb-4">Automates Business Processes</h3>
              <p className="text-gray-600">Makes everything run smoothly.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm"
            >
              <div className="text-primary text-4xl mb-4">🔹</div>
              <h3 className="text-xl font-semibold mb-4">Handles Customer Follow-Ups</h3>
              <p className="text-gray-600">AI messages and calls your leads.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm"
            >
              <div className="text-primary text-4xl mb-4">🔹</div>
              <h3 className="text-xl font-semibold mb-4">Improves Workflow</h3>
              <p className="text-gray-600">Schedules meetings, manages tasks, and helps with customer support.</p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <ChartBarIcon className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">See Your Business Potential</h3>
              <p className="text-gray-600 mb-4">Use Our AI Savings Calculator</p>
              <Button variant="outline" className="w-full">
                Try Calculator
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Users className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">What Others Are Saying</h3>
              <p className="text-gray-600 mb-4">Customer Testimonials & Reviews</p>
              <Button variant="outline" className="w-full">
                Read Reviews
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Rocket className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">How We Get You Results</h3>
              <p className="text-gray-600 mb-4">Step By Step</p>
              <Button variant="outline" className="w-full">
                See Process
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Why Businesses Choose AI Business Managers
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">No Upfront Cost</h3>
              <p className="text-gray-600">We Only Succeed When You Do</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">AI Works 24/7</h3>
              <p className="text-gray-600">So You Don't Have To</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <ChartBarIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Proven Success</h3>
              <p className="text-gray-600">AI That Gets Real Results</p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <ChartBarIcon className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Case Study</h3>
              <p className="text-gray-600 mb-4">How AI Helped One Business Earn $250K More</p>
              <Button variant="outline" className="w-full">
                Read Case Study
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <video className="h-12 w-12 object-cover rounded-full" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Watch AI in Action</h3>
              <p className="text-gray-600 mb-4">Live Demo Tour</p>
              <Button variant="outline" className="w-full">
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Users className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Have Questions?</h3>
              <p className="text-gray-600 mb-4">Get A Free AI Strategy Call</p>
              <Button variant="outline" className="w-full">
                Schedule Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              How It Works
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500"
            >
              <div className="inline-block bg-blue-500 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center mb-4">1</div>
              <h3 className="text-xl font-semibold mb-4">Free AI Business Audit</h3>
              <p className="text-gray-600">We find what's holding your business back.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500"
            >
              <div className="inline-block bg-green-500 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center mb-4">2</div>
              <h3 className="text-xl font-semibold mb-4">AI Setup & Strategy</h3>
              <p className="text-gray-600">We customize AI tools for your needs.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500"
            >
              <div className="inline-block bg-red-500 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center mb-4">3</div>
              <h3 className="text-xl font-semibold mb-4">Automate & Grow</h3>
              <p className="text-gray-600">AI keeps improving results for you.</p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Users className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Try AI Now</h3>
              <p className="text-gray-600 mb-4">Chat With Our AI Assistant</p>
              <Button className="w-full">
                Start Chat
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Rocket className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get AI Insights</h3>
              <p className="text-gray-600 mb-4">See What AI Recommends For You</p>
              <Button className="w-full">
                Get Insights
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Get Started With AI Business Managers
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FileDown className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Guide</h3>
              <p className="text-gray-600 mb-4">How AI Can Grow Your Business</p>
              <Button variant="outline" className="w-full">
                Download Now
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Users className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Join Our Live Webinar</h3>
              <p className="text-gray-600 mb-4">On AI Business Growth</p>
              <Button variant="outline" className="w-full">
                Reserve Your Spot
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Users className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Talk To An AI Expert</h3>
              <p className="text-gray-600 mb-4">Live Chat Available</p>
              <Button variant="outline" className="w-full">
                Chat Now
              </Button>
            </motion.div>
          </div>
          
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Still Thinking? Hear From Our Clients…</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4 italic">"AI saved us hours each day while boosting sales!"</p>
                <p className="font-semibold">- Client Name</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4 italic">"We cut hiring costs by 50% and still got better results."</p>
                <p className="font-semibold">- Client Name</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4 italic">"Best decision ever—AI does all the work!"</p>
                <p className="font-semibold">- Client Name</p>
              </div>
            </div>
          </motion.div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-50 p-8 rounded-xl shadow-md max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Download The Guide + Get A Free AI Business Audit</h3>
              <p className="text-gray-600 mb-6">Limited Spots Available!</p>
              <Button size="lg" className="text-lg rounded-full group" onClick={handleDemoClick}>
                Let's Scale Your Business Together → Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Partners section */}
      <PartnersSection />
    </div>
  );
}
