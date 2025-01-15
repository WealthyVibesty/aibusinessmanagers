import React from "react";
import { Button } from "@/components/ui/button";
import ContactCaptureDialog from "@/components/ContactCaptureDialog";
import { useState } from "react";
import SEO from "@/components/SEO";
import DemoRequestForm from "@/components/DemoRequestForm";

export default function SalesPage() {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

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
                onClick={handleCTAClick}
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

      {/* Sales Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
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

      <ContactCaptureDialog 
        isOpen={showContactDialog}
        onClose={handleDialogClose}
        onSuccess={handleSuccess}
      />

      <DemoRequestForm 
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </div>
  );
}