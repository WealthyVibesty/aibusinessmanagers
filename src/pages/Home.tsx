import React from "react";
import { useNavigate } from "react-router-dom";
import SolutionHero from "@/components/solutions/SolutionHero";
import FeatureList from "@/components/solutions/FeatureList";
import HowItWorks from "@/components/solutions/HowItWorks";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <SolutionHero 
        title="AI-Powered Voice Agents: Instant Support, 24/7"
        subtitle="Answer calls instantly, handle routine tasks, and free up your team to focus on patient care."
        ctaText="Schedule a Demo"
        ctaAction={() => {
          const widget = document.querySelector('elevenlabs-convai');
          if (widget) {
            widget.classList.remove('hidden');
            console.log('Showing AI assistant for demo request');
          }
        }}
      />
      
      <FeatureList 
        title="Key Features"
        features={[
          {
            title: "24/7 Instant Call Answering",
            description: "Never miss a patient call with AI that's always available"
          },
          {
            title: "Comprehensive Support",
            description: "Handle scheduling, billing inquiries, and test result delivery"
          },
          {
            title: "Multilingual Support",
            description: "Serve diverse patient populations in their preferred language"
          }
        ]}
      />
      
      <HowItWorks steps={[
        {
          title: "Initial Contact",
          description: "Patients call your support line and are greeted by an AI voice agent"
        },
        {
          title: "Request Processing",
          description: "AI understands the request and provides instant answers or completes tasks"
        },
        {
          title: "Seamless Handoff",
          description: "Complex issues are transferred to human agents with full context"
        }
      ]} />
      
      <FeatureList 
        title="Benefits"
        features={[
          {
            title: "Reduced Wait Times",
            description: "Cut patient wait times by up to 80%"
          },
          {
            title: "High Automation",
            description: "Handle 90% of routine calls automatically"
          },
          {
            title: "Improved Satisfaction",
            description: "Enhance patient experience with instant support"
          }
        ]}
      />

      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Watch our AI in action and discover how it can revolutionize your business operations
          </h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-2xl font-semibold text-gray-500">Coming Soon</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading businesses using AI to deliver exceptional results
          </p>
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={() => navigate("/demo")}
              className="text-lg px-8 py-6 h-auto"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
