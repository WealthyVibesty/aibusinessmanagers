import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <SEO 
        title="About Our AI Business Management Solutions" 
        description="Learn about AI Business Managers - pioneers in AI-powered business management solutions. Discover our mission, values, and commitment to transforming businesses through AI innovation."
        path="/about"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground"
            >
              About Us
            </motion.h1>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Who We Are */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are Ai Business Managers, pioneers in AI-powered business management solutions. Our mission is to empower businesses of all sizes with cutting-edge AI technologies that streamline operations, improve efficiency, and drive exponential growth. By combining innovative tools with hands-on expertise, we help businesses unlock their full potential and thrive in the modern digital landscape.
              </p>
            </section>

            {/* Our Vision */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To redefine how businesses operate by making AI-driven automation accessible, efficient, and transformative. We aim to be the trusted partner for organizations seeking to scale, save time, and create unparalleled value for their customers.
              </p>
            </section>

            {/* Core Values */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Innovation</h3>
                  <p className="text-gray-700">We embrace change and continually explore advanced AI technologies to deliver solutions that set our clients apart.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Collaboration</h3>
                  <p className="text-gray-700">Success comes from teamwork. We partner closely with our clients to understand their unique challenges and build customized solutions.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Integrity</h3>
                  <p className="text-gray-700">Trust is the foundation of every relationship. We prioritize transparency, security, and ethical practices in everything we do.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Impact</h3>
                  <p className="text-gray-700">We focus on delivering measurable results that drive growth and efficiency for our clients.</p>
                </div>
              </div>
            </section>

            {/* What We Do */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">What We Do</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We specialize in creating AI Business Management Systems that are tailored to automate operations, optimize workflows, and scale revenue. From customer communication to supply chain management, we leverage AI to handle the complex so you can focus on what matters most — growing your business.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Services Include:</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Custom AI Workflow Automation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>AI-Powered Marketing Strategies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Integration with Top Tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Data Security Solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Real-Time Dynamic Pricing Tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>AI-Driven Customer Support</span>
                </li>
              </ul>
            </section>

            {/* Partnerships */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Partnerships</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We are proud to collaborate with industry-leading technology providers to ensure the best results for our clients. Our trusted partners include:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  "IBM Technologies (Featured Partner)",
                  "Google",
                  "Microsoft",
                  "Amazon AWS",
                  "Oracle",
                  "NVIDIA",
                  "OpenAI",
                  "Eleven Labs",
                  "Anthropic",
                  "DeepSeek",
                  "Vapi AI"
                ].map((partner, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 rounded-lg bg-gray-50"
                  >
                    <p className="font-medium text-gray-800">{partner}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Success Stories */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Success Stories</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">We've worked with companies across various industries to:</p>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>• Automate up to 85% of manual tasks</li>
                  <li>• Save businesses hundreds of hours monthly</li>
                  <li>• Drive revenue growth by 30% or more in under 90 days</li>
                </ul>
              </div>
            </section>

            {/* Client Testimonials */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Client Testimonials</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <blockquote className="p-6 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 italic mb-4">
                    "Their AI systems completely transformed our operations. We're now able to scale faster while saving time and money. Highly recommend their services!"
                  </p>
                  <footer className="font-medium text-foreground">– VentureFlow Solutions</footer>
                </blockquote>
                <blockquote className="p-6 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 italic mb-4">
                    "Partnering with AI Business Managers was the best decision for our business. Their AI workflows are seamless, and their support is exceptional."
                  </p>
                  <footer className="font-medium text-foreground">– ThriveWorks</footer>
                </blockquote>
              </div>
            </section>

            {/* CTA Button */}
            <div className="flex justify-center pt-8">
              <Button 
                size="lg"
                className="text-lg px-8 py-6 flex items-center gap-2"
                onClick={() => window.location.href = 'https://aibusinessmanagers.com/contact'}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
