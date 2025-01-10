import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Users, Clock, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CallRouting() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Intelligent Call Routing: Faster, Smarter Support
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Route calls to the right person, every time, with AI-powered precision.
        </p>
        <Button 
          size="lg" 
          className="gap-2"
          onClick={() => navigate("/book-demo")}
        >
          Book a Free Demo <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 border rounded-lg shadow-sm">
          <PhoneCall className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Routing</h3>
          <p className="text-gray-600">
            AI identifies call purpose and routes it to the appropriate department instantly.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <Users className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Context Preservation</h3>
          <p className="text-gray-600">
            Provides agents with full call context for faster resolution.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <Clock className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Reduced Transfer Times</h3>
          <p className="text-gray-600">
            Improves first-call resolution rates and reduces transfer times.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Analysis</h3>
            <p className="text-gray-600">
              AI analyzes the caller's request and determines the best department or agent.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Instant Routing</h3>
            <p className="text-gray-600">
              Calls are routed instantly, with all relevant information passed to the agent.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Seamless Escalation</h3>
            <p className="text-gray-600">
              Complex issues are escalated seamlessly, ensuring no patient is left waiting.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <BarChart className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">50% Faster Resolution</h3>
            <p className="text-gray-600">
              Reduces call resolution time by half through efficient routing.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <Users className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Improved Efficiency</h3>
            <p className="text-gray-600">
              Improves agent efficiency and reduces frustration.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <PhoneCall className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Enhanced Satisfaction</h3>
            <p className="text-gray-600">
              Enhances patient satisfaction with faster, more accurate support.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-primary/5 rounded-xl p-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Optimize Your Call Routing?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          See how our intelligent call routing can transform your healthcare organization.
        </p>
        <Button size="lg" className="gap-2">
          Book a Free Demo <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}