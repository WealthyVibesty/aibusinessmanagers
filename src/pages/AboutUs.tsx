import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export default function AboutUs() {
  return <>
      <SEO title="About Our AI Business Management Solutions" description="Learn about AI Business Managers - pioneers in AI-powered business management solutions. Discover our mission, values, and commitment to transforming businesses through AI innovation." path="/about" />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        

        {/* Main Content */}
        
        
        {/* Dark Background Section (duplicated from AIBusinessManagers) */}
        <section className="py-20 px-6 sm:px-12 bg-slate-900 relative">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">About AI Business Managers</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-10">
                We are pioneers in AI-powered business management solutions. Our dedicated team combines technical expertise with business acumen to deliver transformative AI systems that automate operations, enhance customer experiences, and drive growth. With years of experience in artificial intelligence and business operations, we're committed to helping organizations of all sizes harness the power of AI to achieve extraordinary results.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium rounded-md" onClick={() => window.location.href = '/contact'}>
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="twinkling absolute inset-0"></div>
        </section>
      </div>
    </>;
}