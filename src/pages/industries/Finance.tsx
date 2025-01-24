import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function Finance() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Solutions for Finance | AI Business Managers"
        description="Automate financial processes with AI-powered solutions. Streamline operations, enhance security, and improve efficiency."
      />
      
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Wallet className="h-16 w-16 text-purple-600 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Finance with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Automate processes, enhance security, and improve efficiency with our AI-powered solutions.
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
              <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
              <p className="text-gray-600">Streamline financial operations with AI.</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Security</h3>
              <p className="text-gray-600">Enhanced protection with AI monitoring.</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <p className="text-gray-600">24/7 support for financial inquiries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}