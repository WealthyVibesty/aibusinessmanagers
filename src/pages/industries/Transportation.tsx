import { Button } from "@/components/ui/button";
import { ArrowRight, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function Transportation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Solutions for Transportation | AI Business Managers"
        description="Optimize fleet management with AI-powered solutions. Automate dispatching, improve efficiency, and enhance operations."
      />
      
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Car className="h-16 w-16 text-green-600 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Transportation with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Optimize fleet management, enhance efficiency, and improve operations with our AI-powered solutions.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/checkout")}
            className="text-lg px-8"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Fleet Management</h3>
              <p className="text-gray-600">Optimize routes and vehicle utilization with AI.</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <p className="text-gray-600">Provide real-time updates and support.</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Operations</h3>
              <p className="text-gray-600">Streamline scheduling and maintenance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}