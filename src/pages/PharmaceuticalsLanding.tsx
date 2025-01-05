import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Brain, MessageCircle, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PharmaceuticalsLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Revolutionize Pharmaceuticals with AI-Powered Support
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slideUp">
            Transform your pharmaceutical operations with AI agents that handle customer inquiries, 
            streamline clinical trials, and deliver actionable insights—all while reducing costs 
            and improving efficiency.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/checkout")}
            className="text-lg px-8 py-6 h-auto animate-scale"
          >
            Request a Free Demo
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pharmaceutical Companies Face Growing Challenges
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageCircle className="h-8 w-8 text-primary" />,
                text: "Overwhelmed customer support teams struggle to handle high volumes of inquiries."
              },
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                text: "Clinical trial recruitment and management are time-consuming and costly."
              },
              {
                icon: <Heart className="h-8 w-8 text-primary" />,
                text: "Patients and healthcare providers need faster, more accurate information."
              },
              {
                icon: <Check className="h-8 w-8 text-primary" />,
                text: "Regulatory compliance and data security add complexity to operations."
              }
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {item.icon}
                </div>
                <p className="text-gray-600">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your AI Partner in Pharmaceuticals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Support Agents",
                description: "Handle inquiries about medications, side effects, and interactions with 24/7 availability."
              },
              {
                title: "Clinical Trial Assistance",
                description: "Streamline patient recruitment, consent processes, and data collection for faster, more efficient trials."
              },
              {
                title: "Regulatory Compliance",
                description: "Ensure adherence to industry standards with secure, auditable interactions."
              }
            ].map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our AI Pharmaceutical Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "24/7 Customer Support: Provide instant, accurate responses to patients and healthcare providers.",
              "Faster Clinical Trials: Accelerate recruitment, data collection, and analysis.",
              "Cost Efficiency: Reduce operational costs by automating repetitive tasks.",
              "Improved Patient Engagement: Deliver personalized, multilingual support for better outcomes.",
              "Regulatory Compliance: Meet industry standards with secure, HIPAA-compliant interactions."
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                <Check className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Transform Your Pharmaceutical Operations with AI
          </h2>
          <p className="text-xl text-gray-600">
            Enhance Customer Support, Accelerate Clinical Trials, and Drive Better Outcomes
          </p>
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={() => navigate("/checkout")}
              className="text-lg px-8 py-6 h-auto"
            >
              Request a Free Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}