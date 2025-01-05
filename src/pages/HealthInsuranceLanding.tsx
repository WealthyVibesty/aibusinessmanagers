import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  FileCheck, Users, Clock, Shield, 
  ArrowRight, CheckCircle2, MessageSquare 
} from "lucide-react";

export default function HealthInsuranceLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Transform Health Insurance with AI-Powered Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slideUp">
            Say goodbye to manual claims processing and overwhelmed call centers. Our AI agents handle claims, 
            answer customer inquiries, and provide 24/7 support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="animate-slideUp" style={{ animationDelay: "200ms" }}>
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="animate-slideUp" 
                    style={{ animationDelay: "300ms" }}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Health Insurance Companies Face Growing Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FileCheck className="h-8 w-8 text-primary" />,
                title: "Manual Processing",
                description: "Time-consuming and error-prone claims processing"
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Overwhelmed Teams",
                description: "Customer service teams struggle with high inquiry volumes"
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Slow Response",
                description: "Delayed response times affect customer satisfaction"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Compliance Risk",
                description: "Complex regulatory requirements increase risk"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our AI Health Insurance Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Faster Claims Processing",
                description: "Reduce processing times from days to minutes"
              },
              {
                title: "24/7 Customer Support",
                description: "Provide instant, accurate responses to policyholders"
              },
              {
                title: "Cost Efficiency",
                description: "Lower operational costs by automating repetitive tasks"
              },
              {
                title: "Improved Satisfaction",
                description: "Deliver personalized, multilingual support"
              },
              {
                title: "Regulatory Compliance",
                description: "Meet industry standards with secure interactions"
              },
              {
                title: "Real-time Analytics",
                description: "Gain insights to improve operations"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Leading Health Insurance Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Our claims processing time has been cut in half, and our customers love the instant support. This AI agent is a game-changer.",
                author: "Sarah Johnson",
                role: "Operations Director, Major Health Insurance Provider"
              },
              {
                quote: "The customer service agent handles 80% of inquiries, freeing up our team to focus on complex cases.",
                author: "Michael Chen",
                role: "Customer Support Manager, Leading Insurance Company"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <MessageSquare className="h-8 w-8 text-primary mb-4" />
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transform Your Health Insurance Operations with AI
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Automate Claims, Enhance Customer Support, and Drive Better Outcomes
          </p>
          <Button size="lg" className="animate-pulse">
            Request a Free Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}