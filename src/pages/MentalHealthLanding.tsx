import HeroSection from "@/components/landing/sections/HeroSection";
import ProblemSection from "@/components/landing/sections/ProblemSection";
import BenefitsSection from "@/components/landing/sections/BenefitsSection";
import FAQSection from "@/components/landing/sections/FAQSection";
import FooterSection from "@/components/landing/sections/FooterSection";
import { Brain, Heart, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MentalHealthLanding() {
  const problems = [
    { icon: <MessageCircle className="h-8 w-8" />, text: "Long wait times for therapy appointments leave individuals struggling alone" },
    { icon: <Heart className="h-8 w-8" />, text: "Stigma and cost prevent many from seeking help" },
    { icon: <Brain className="h-8 w-8" />, text: "Crisis situations often escalate without immediate intervention" },
  ];

  const benefits = [
    { text: "24/7 Support: Immediate access to help, anytime, anywhere" },
    { text: "Evidence-Based Techniques: Built on proven therapeutic methods" },
    { text: "Crisis Prevention: Detect and intervene in high-risk situations" },
    { text: "Confidential and Secure: HIPAA-compliant and encrypted" },
    { text: "Scalable Support: Extend your reach without overburdening staff" },
  ];

  const faqs = [
    {
      question: "Is the AI agent a replacement for human therapists?",
      answer: "No, it's a complement to traditional therapy, providing support between sessions or for those who can't access a therapist."
    },
    {
      question: "How does the AI handle crisis situations?",
      answer: "It detects distress signals, provides immediate coping strategies, and connects users to emergency resources or human professionals."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. Our platform is HIPAA-compliant and uses end-to-end encryption to protect your privacy."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <HeroSection 
        title="Revolutionize Mental Health Support with AI Therapeutic Agents"
        subtitle="Break down barriers to mental health care with AI-powered tools that provide immediate support, therapeutic conversations, and crisis intervention—anytime, anywhere."
        ctaText="Try It Free"
      />

      <ProblemSection
        title="Mental Health Care Should Be Accessible to Everyone"
        problems={problems}
      />

      {/* Solution Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your AI Mental Health Companion
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Therapeutic Conversations",
                description: "Engage in empathetic, evidence-based conversations for support and coping strategies."
              },
              {
                title: "Crisis Intervention",
                description: "Detect distress signals and connect users to immediate help or resources."
              },
              {
                title: "Personalized Plans",
                description: "Tailored recommendations based on user interactions and needs."
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
        title="Why Choose Our AI Mental Health Solutions?"
        benefits={benefits}
      />

      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Break Down Barriers to Mental Health Care
          </h2>
          <p className="text-xl text-gray-600">
            Provide Compassionate, Immediate Support with AI-Powered Tools
          </p>
          <div className="pt-4">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}