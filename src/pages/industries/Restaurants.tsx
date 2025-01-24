import { Button } from "@/components/ui/button";
import { ArrowRight, UtensilsCrossed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function Restaurants() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Solutions for Restaurants | AI Business Managers"
        description="Streamline restaurant operations with AI-powered solutions. Automate ordering, improve customer service, and optimize operations."
      />
      
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <UtensilsCrossed className="h-16 w-16 text-orange-600 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Restaurant with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline operations, enhance customer service, and boost efficiency with our AI-powered solutions.
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
              <h3 className="text-xl font-semibold mb-4">Order Management</h3>
              <p className="text-gray-600">Streamline ordering process with AI-powered automation.</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <p className="text-gray-600">Provide 24/7 support for reservations and inquiries.</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Operations</h3>
              <p className="text-gray-600">Optimize inventory and staff management with AI insights.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}