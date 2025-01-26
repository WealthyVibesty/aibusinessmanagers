import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function BusinessAutomation() {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="AI-Powered Business Automation Solutions" 
        description="Transform your business with our AI-driven automation solutions. Save time, reduce errors, and scale your revenue with custom workflows and intelligent systems."
        path="/business-automation"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We Will Build AI Business Management Systems That Automate Your Operations and Scale Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              Get your business running on autopilot with AI-driven workflows, precision automations, and actionable insights. Save time, reduce errors, and focus on scaling your revenue.
            </p>
            <Button
              size="lg"
              onClick={() => window.location.href = 'https://aibusinessmanagers.com/solutions'}
              className="text-lg px-8 py-6 h-auto rounded-full group"
            >
              Get Pricing & Details
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Custom AI Solutions",
                  description: "From automating customer communications to streamlining supply chain operations, we tailor solutions to fit your business needs."
                },
                {
                  title: "Seamless Integration",
                  description: "AI tools built directly into your existing systems like Monday.com, Slack, Salesforce, or HubSpot."
                },
                {
                  title: "Data Security You Can Trust",
                  description: "Powered by IBM technologies and fortified with enterprise-grade encryption."
                },
                {
                  title: "Save Time & Money",
                  description: "Automate up to 80% of manual tasks to free up your team for strategic work."
                },
                {
                  title: "Done-for-You Service",
                  description: "From setup to ongoing support, we handle everything while you watch your business thrive."
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              We Scaled ThriveWorks to $350,000 in Monthly Revenue in 90 Days Using Intelligent AI Automation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Here's what we achieved:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary">•</span>
                    <span>985 Tasks Automated Per Week: From order tracking to client communications.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary">•</span>
                    <span>60 Hours Saved Per Month: With Twilio-powered customer support integrated into WhatsApp.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary">•</span>
                    <span>Revenue Increased by 32%: Through dynamic pricing updates using AI agents.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary">•</span>
                    <span>2,200 New Leads Captured in 90 Days: Via automated workflows tied to JotForm submissions.</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Tasks Automated", value: "3,500" },
                  { label: "Customer Satisfaction", value: "91%" },
                  { label: "Revenue Growth", value: "$350,000" },
                  { label: "Hours Saved Monthly", value: "180" }
                ].map((metric, index) => (
                  <div key={index} className="p-6 bg-white rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get an AI Business Management System Built for You in 7 Days
            </h2>
            <p className="text-xl mb-12">
              Let us build and integrate your custom AI workflows—tailored to automate your tedious operations, scale faster, and deliver outstanding results.
            </p>
            <Button
              size="lg"
              onClick={() => window.location.href = 'https://aibusinessmanagers.com/solutions'}
              className="text-lg px-8 py-6 h-auto rounded-full bg-white text-primary hover:bg-white/90"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Trusted by industry leaders</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "IBM",
              "Google",
              "Microsoft",
              "Amazon AWS",
              "Oracle",
              "NVIDIA",
              "OpenAI",
              "Eleven Labs"
            ].map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-600">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Clients Are Saying</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                text: "Their AI system helped us save over 25 hours a week while tripling our revenue. Truly a game-changer!",
                author: "ThriveWorks"
              },
              {
                text: "With their custom automations, we now manage thousands of customer interactions seamlessly. Highly recommend!",
                author: "VentureFlow Solutions"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                <p className="font-medium">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <p className="max-w-4xl mx-auto text-center text-gray-600">
            This offer is ideal for businesses earning $5,000+ per month, marketing agencies, or operations teams that need streamlined, scalable solutions.
          </p>
        </div>
      </section>
    </>
  );
}