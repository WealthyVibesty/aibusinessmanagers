import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

export default function EmergencyServicesLanding() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="AI Voice Agents for Emergency Medical Services" 
        description="Enhance emergency medical services with AI voice agents. Improve response times, coordinate care teams & streamline emergency communications."
      />
      <h1 className="text-4xl font-bold mb-8">Emergency Services Solutions</h1>
      <p className="text-lg mb-4">Coming soon...</p>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Emergency Services?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading emergency services in delivering exceptional care with AI support
          </p>
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={() => console.log("Get Started Now clicked")}
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
