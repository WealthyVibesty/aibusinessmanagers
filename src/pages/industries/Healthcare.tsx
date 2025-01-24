import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

export default function Healthcare() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Solutions for Healthcare | AI Business Managers"
        description="Transform healthcare operations with AI-powered solutions. Streamline patient care, automate administrative tasks, and improve efficiency."
      />
      
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Stethoscope className="h-16 w-16 text-purple-600 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Healthcare with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline patient care, automate administrative tasks, and improve operational efficiency with our AI-powered solutions.
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
              <h3 className="text-xl font-semibold mb-4">Patient Care</h3>
              <p className="text-gray-600">Improve patient experience with 24/7 AI support and automated follow-ups.</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Administrative Tasks</h3>
              <p className="text-gray-600">Reduce workload with automated scheduling, billing, and documentation.</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Compliance</h3>
              <p className="text-gray-600">Maintain HIPAA compliance while leveraging advanced AI technology.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}