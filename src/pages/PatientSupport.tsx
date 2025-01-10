import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Users, DollarSign, LineChart } from "lucide-react";
import Header from "@/components/landing/Header";
import { useNavigate } from "react-router-dom";

export default function PatientSupport() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Fix Patient Support and Save 70% on Call Center Costs with AI-Powered Voice Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Handle more calls, cut wait times, and save up to 70% with AI designed exclusively for healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/checkout")}
              className="text-lg px-8 py-6 h-auto"
            >
              Schedule a Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/checkout")}
              className="text-lg px-8 py-6 h-auto"
            >
              See How AI Solves Your Problems in 30 Days
            </Button>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Problems We Solve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Patients Waiting Too Long</h3>
              <p className="text-gray-600">
                Our AI answers calls instantly, reducing wait times by 80%, and handles scheduling, billing, and questions, so your staff isn't overwhelmed.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Burned-Out Support Teams</h3>
              <p className="text-gray-600">
                AI takes care of repetitive tasks like appointment reminders and insurance questions, reducing team workload by 50%.
              </p>
            </Card>
            <Card className="p-6">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">High Call Center Costs</h3>
              <p className="text-gray-600">
                Replace expensive call handling with AI that reduces costs by up to 70%, saving your organization thousands monthly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why It Works for Healthcare CTOs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Fast Setup with No Hassle</h3>
              <p className="text-gray-600">Get up and running in under 2 weeks with seamless integration into your current systems (EHR/EMR, scheduling tools).</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Secure and Compliant</h3>
              <p className="text-gray-600">Built to meet strict healthcare data rules like HIPAA, ensuring patient data is always protected.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Clear Results</h3>
              <p className="text-gray-600">See measurable results with easy-to-read reports on cost savings, time reductions, and patient satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-primary text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Operations?</h2>
            <p className="text-xl mb-8 opacity-90">Join leading healthcare institutions using AI to improve operational efficiency by up to 70%</p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate("/checkout")}
              className="text-lg px-8 py-6 h-auto"
            >
              See the Results for Yourself—Schedule a Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}