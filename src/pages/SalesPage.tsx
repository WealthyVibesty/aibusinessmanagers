
import React from "react";
import { Button } from "@/components/ui/button";
import ContactCaptureDialog from "@/components/ContactCaptureDialog";
import { useState } from "react";
import SEO from "@/components/SEO";
import DemoRequestForm from "@/components/DemoRequestForm";
import ROICalculatorDialog from "@/components/ROICalculatorDialog";
import SocialProofSection from "@/components/landing/sections/SocialProofSection";

export default function SalesPage() {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false);

  const handleCTAClick = () => {
    console.log("Opening contact capture dialog");
    setShowContactDialog(true);
  };

  const handleDialogClose = () => {
    setShowContactDialog(false);
  };

  const handleSuccess = () => {
    console.log("Contact capture successful");
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Transform Your Healthcare Operations with AI" 
        description="AI-powered voice solutions for healthcare providers. Reduce costs, improve patient satisfaction, and streamline operations."
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Take the First Step Toward Smarter Patient Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            We're here to help you see the impact AI can have on your healthcare operations. 
            Choose the offer that works best for you.
          </p>
        </div>
      </section>

      {/* Social Proof - Mini Version */}
      <div className="bg-white py-4 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600 text-sm">
                <span className="font-bold">4.9/5</span> from 200+ reviews
              </span>
            </div>
            <div className="h-6 border-l border-gray-300 hidden md:block"></div>
            <div className="text-gray-600 text-sm">Trusted by 2,000+ healthcare providers</div>
            <div className="h-6 border-l border-gray-300 hidden md:block"></div>
            <div className="text-gray-600 text-sm">Featured in Healthcare Tech Today</div>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Strategy Call */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Free 30-Minute Strategy Call</h3>
              <p className="text-gray-600 mb-6">
                Let's dive into your current challenges. We'll show you exactly how conversational AI can save you money, 
                reduce wait times, and improve patient satisfaction.
              </p>
              <Button 
                className="w-full"
                onClick={() => setIsDemoFormOpen(true)}
              >
                Book Your Free Strategy Call
              </Button>
            </div>

            {/* ROI Calculator */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">ROI Calculator Demo</h3>
              <p className="text-gray-600 mb-6">
                See the numbers for yourself. Enter your current call volume and staffing costs, 
                and our tool will show you how much you can save with AI.
              </p>
              <Button 
                className="w-full"
                onClick={() => setIsROICalculatorOpen(true)}
              >
                Try the ROI Calculator Now
              </Button>
            </div>

            {/* Pilot Program */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Pilot Program</h3>
              <p className="text-gray-600 mb-6">
                Not ready to go all-in? Start small. We'll implement a limited AI solution for one key process—like 
                appointment scheduling or billing inquiries—so you can see the results before scaling.
              </p>
              <Button 
                className="w-full"
                onClick={handleCTAClick}
              >
                Start Your Pilot Program Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Full Social Proof Section */}
      <SocialProofSection 
        variant="light"
        showStats={true}
        showLogos={true}
        showTestimonials={true}
      />

      {/* Sales Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Struggling with Overwhelmed Call Centers and Rising Costs? We've Got the Solution.
          </h2>
          
          {/* Problem Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Your Patients Deserve Better. Your Team Needs Relief.</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Overwhelmed Call Centers: Patients wait too long, and your staff is stretched thin.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>High Operational Costs: Handling every call manually is expensive and inefficient.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Poor Patient Experience: Long wait times and limited availability hurt satisfaction and loyalty.</span>
              </li>
            </ul>
          </div>

          {/* Solution Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">AI-Powered Voice Solutions Built for Healthcare</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold mb-2">24/7 AI Assistants</h4>
                <p>Handle routine calls like scheduling, billing, and FAQs instantly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold mb-2">Seamless Escalation</h4>
                <p>Pass complex cases to staff with all the details they need to help quickly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold mb-2">Operational Efficiency</h4>
                <p>Reduce call handling costs by up to 70% and free up your team's time.</p>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Real Results That Transform Your Operations</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <p>routine calls handled by AI</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-primary mb-2">70%</div>
                <p>reduction in call center costs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <p>improvement in patient satisfaction</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p>availability for patients</p>
              </div>
            </div>
          </div>

          {/* Customer Logos Section */}
          <div className="mb-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Join These Leading Healthcare Providers</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <img src="/lovable-uploads/cb8c7243-5b81-4b79-a213-5d169acaede2.png" alt="Healthcare Provider Logo" className="h-12 opacity-70" />
              <img src="/lovable-uploads/97d27ffa-5e3f-47b1-b550-d47dc525b2cf.png" alt="Healthcare Provider Logo" className="h-12 opacity-70" />
              <img src="/lovable-uploads/10c6384a-7a56-494c-bc22-6d612b09d170.png" alt="Healthcare Provider Logo" className="h-12 opacity-70" />
              <img src="/lovable-uploads/4593bf5a-446b-418a-b024-f0848d36a02e.png" alt="Healthcare Provider Logo" className="h-12 opacity-70" />
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Patient Support?</h3>
            <p className="text-gray-600 mb-8">
              Join other healthcare leaders who are saving time, cutting costs, and delivering better patient care with AI.
            </p>
            <Button 
              size="lg"
              onClick={handleCTAClick}
              className="text-lg px-8 py-6 h-auto"
            >
              Get Started Today – Select Your Offer
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Social Proof - Dark Variant */}
      <SocialProofSection 
        variant="dark"
        showStats={false}
        showLogos={false}
        showTestimonials={true}
        testimonials={[
          {
            name: "Dr. James Wilson",
            role: "Chief Medical Officer",
            company: "Pacific Health Network",
            quote: "After implementing this AI solution, our staff spends more time with patients and less time on the phone. Patient satisfaction is at an all-time high.",
            avatar: "/lovable-uploads/d10dd79d-414a-4e5e-bfc7-7ff92e56f12f.png",
            rating: 5
          },
          {
            name: "Lisa Rodriguez",
            role: "Practice Manager",
            company: "Family Care Medical Group",
            quote: "The implementation was seamless and the results were immediate. We reduced wait times by 75% and our staff is much happier.",
            avatar: "/lovable-uploads/1935155e-b63e-4ae4-a3f6-c51b7db8289a.png",
            rating: 5
          },
          {
            name: "Robert Thompson",
            role: "Director of Operations",
            company: "Midwest Healthcare Alliance",
            quote: "Our return on investment was realized within the first 3 months. This is the future of healthcare communication.",
            avatar: "/lovable-uploads/d93e3f1a-ff0c-49a9-922f-a5ffd654647f.png",
            rating: 5
          }
        ]}
      />

      <ContactCaptureDialog 
        isOpen={showContactDialog}
        onClose={handleDialogClose}
        onSuccess={handleSuccess}
      />

      <DemoRequestForm 
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />

      <ROICalculatorDialog
        isOpen={isROICalculatorOpen}
        onClose={() => setIsROICalculatorOpen(false)}
      />
    </div>
  );
}
