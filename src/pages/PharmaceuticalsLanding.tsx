import HeroSection from "@/components/landing/sections/HeroSection";
import ProblemSection from "@/components/landing/sections/ProblemSection";
import BenefitsSection from "@/components/landing/sections/BenefitsSection";
import FAQSection from "@/components/landing/sections/FAQSection";
import FooterSection from "@/components/landing/sections/FooterSection";
import { Brain, MessageCircle, Shield, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PharmaceuticalsLanding() {
  const problems = [
    { 
      icon: <MessageCircle className="h-8 w-8" />, 
      text: "Overwhelmed customer support teams struggle to handle high volumes of inquiries" 
    },
    { 
      icon: <Clock className="h-8 w-8" />, 
      text: "Clinical trial recruitment and management are time-consuming and costly" 
    },
    { 
      icon: <Brain className="h-8 w-8" />, 
      text: "Patients and healthcare providers need faster, more accurate information" 
    },
    { 
      icon: <Shield className="h-8 w-8" />, 
      text: "Regulatory compliance and data security add complexity to operations" 
    }
  ];

  const benefits = [
    { text: "24/7 Customer Support: Provide instant, accurate responses to patients and healthcare providers" },
    { text: "Faster Clinical Trials: Accelerate recruitment, data collection, and analysis" },
    { text: "Cost Efficiency: Reduce operational costs by automating repetitive tasks" },
    { text: "Improved Patient Engagement: Deliver personalized, multilingual support for better outcomes" },
    { text: "Regulatory Compliance: Meet industry standards with secure, HIPAA-compliant interactions" }
  ];

  const faqs = [
    {
      question: "Is the AI agent HIPAA-compliant?",
      answer: "Yes, our solution meets all HIPAA requirements for data privacy and security."
    },
    {
      question: "Can it integrate with our existing systems?",
      answer: "Absolutely! Our AI agents seamlessly integrate with CRM, EHR, and clinical trial management systems."
    },
    {
      question: "How does the AI handle complex inquiries?",
      answer: "The AI is trained to handle a wide range of inquiries and can escalate complex questions to human agents when needed."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection 
        title="Transform Pharmaceuticals with AI-Powered Support and Clinical Trial Assistance"
        subtitle="Transform your pharmaceutical operations with AI agents that handle customer inquiries, streamline clinical trials, and deliver actionable insights—all while reducing costs and improving efficiency."
        ctaText="Request a Free Demo"
      />

      <ProblemSection
        title="Pharmaceutical Companies Face Growing Challenges"
        problems={problems}
      />

      {/* Solution Section */}
      <section className="py-16 px-6 bg-white">
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
                description: "Streamline patient recruitment, consent processes, and data collection for faster trials."
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

      <BenefitsSection
        title="Why Choose Our AI Pharmaceutical Solutions?"
        benefits={benefits}
      />

      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Transform Your Pharmaceutical Operations with AI
          </h2>
          <p className="text-xl text-gray-600">
            Enhance Customer Support, Accelerate Clinical Trials, and Drive Better Outcomes
          </p>
          <div className="pt-4">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Request a Free Demo
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}