
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import HeroSection from "@/components/ai-business-partner/HeroSection";
import PartnersSection from "@/components/ai-business-partner/PartnersSection";
import FooterSection from "@/components/landing/sections/FooterSection";
import SEO from "@/components/SEO";

export default function AIBusinessPartner() {
  return (
    <>
      <SEO 
        title="AI Business Partner | Intelligent Business Solutions" 
        description="Partner with our AI-powered business solutions to streamline operations, automate tasks, and drive growth with cutting-edge technology."
        path="/ai-business-partner"
      />
      
      {/* Hero Section */}
      <HeroSection 
        title="Your AI Business Partner for Operational Excellence"
        subtitle="Leverage the power of AI to streamline operations, automate repetitive tasks, and make data-driven decisions that drive business growth."
        ctaText="Book a Strategy Call"
      />

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">AI-Powered Business Solutions</h2>
            <p className="text-lg text-gray-600">
              Our intelligent systems adapt to your business needs, providing actionable insights and automating routine tasks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Intelligent Automation",
                description: "Automate repetitive tasks and workflows with AI that learns and adapts to your business processes."
              },
              {
                title: "Data-Driven Insights",
                description: "Transform raw data into actionable business intelligence with our advanced analytics platform."
              },
              {
                title: "Seamless Integration",
                description: "Easily connect with your existing tools and systems with our flexible integration capabilities."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-white to-blue-50/30 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#3b82f610_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Why Choose AI Business Partner?</h2>
            <p className="text-lg text-gray-600">
              We combine cutting-edge AI technology with business expertise to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              "Reduce operational costs by up to 30%",
              "Free up valuable time for strategic initiatives",
              "Make data-driven decisions with confidence",
              "Scale operations without increasing headcount",
              "Improve customer satisfaction with faster response times",
              "Stay ahead of the competition with cutting-edge technology"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="bg-blue-100 p-2 rounded-full flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-lg text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center">Success Stories</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm border border-blue-100">
              <div className="flex mb-4 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg italic text-center">
                "The AI Business Partner solution reduced our customer response time by 75% and helped us scale operations without adding headcount. The ROI has been incredible."
              </p>
              <p className="font-medium text-right text-black">– TechWave Solutions, CEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Ready to Transform Your Business Operations?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl mb-10 text-white/90"
            >
              Schedule a free strategy call to discover how our AI Business Partner can help you achieve operational excellence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="text-lg px-8 py-6 h-auto rounded-full bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all"
              >
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </>
  );
}
