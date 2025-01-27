import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DemoRequestForm from "@/components/DemoRequestForm";
import { useState } from "react";
import SEO from "@/components/SEO";

export default function Demo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32">
      <SEO 
        title="Demo - AI Voice Agents"
        description="Experience our AI voice agents in action. Schedule a personalized demo to see how our solution can transform your business operations."
      />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Experience our AI assistant in action. Try both text and voice interactions!
          </h1>
          
          {/* Coming Soon Video Placeholder */}
          <div className="mt-8 mb-12 bg-gray-100 rounded-lg p-8">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-2xl font-semibold text-gray-600">Video Coming Soon</p>
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={() => setIsModalOpen(true)}
            className="text-lg px-8 py-6"
          >
            Request Full Demo
          </Button>
        </div>
      </div>

      <DemoRequestForm 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}