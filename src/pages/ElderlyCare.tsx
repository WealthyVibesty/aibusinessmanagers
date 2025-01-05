import { Phone, Heart, Bell, Shield, MessageSquare } from "lucide-react";
import HeroSection from "@/components/landing/sections/HeroSection";
import ProblemSection from "@/components/landing/sections/ProblemSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ElderlyCare() {
  const problems = [
    {
      icon: <Heart className="h-8 w-8" />,
      text: "Caregivers and families struggle to provide round-the-clock support"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      text: "Health issues often go unnoticed until it's too late"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      text: "Seniors feel isolated and lonely, impacting their mental health"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      text: "Emergency situations can escalate without immediate intervention"
    }
  ];

  const solutions = [
    {
      title: "Companion Agents",
      description: "Engage seniors with friendly conversations, reminders, and entertainment"
    },
    {
      title: "Health Monitoring Tools",
      description: "Track vital signs, detect anomalies, and alert caregivers in real time"
    },
    {
      title: "Emergency Alert Systems",
      description: "Instantly notify family or emergency services during critical situations"
    }
  ];

  const benefits = [
    "24/7 Companionship: Reduce loneliness and improve mental well-being",
    "Proactive Health Monitoring: Detect potential health issues early",
    "Instant Emergency Response: Help is always just a voice command away",
    "Ease of Use: Simple, intuitive interfaces for seniors",
    "Peace of Mind: Know your loved ones are safe and supported"
  ];

  const faqs = [
    {
      q: "Is the system easy for seniors to use?",
      a: "Absolutely! Our AI companion agent uses simple voice commands and intuitive interfaces designed specifically for seniors."
    },
    {
      q: "Can it integrate with existing medical devices?",
      a: "Yes, our health monitoring tools can connect with wearable devices and other medical equipment."
    },
    {
      q: "How does the emergency alert system work?",
      a: "Seniors can trigger an alert with a voice command or automated detection. Caregivers and emergency services are notified instantly."
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Empower Elderly Care with AI Companion Agents"
        subtitle="Give your loved ones the care they deserve—24/7 companionship, real-time health monitoring, and instant emergency alerts, all powered by AI."
        ctaText="Request a Free Demo"
      />

      <ProblemSection
        title="Caring for Seniors Shouldn't Be Overwhelming"
        problems={problems}
      />

      {/* Solution Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              The Ultimate Elderly Care Companion
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose Our AI Elderly Care Solutions?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-lg font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Give Your Loved Ones the Care They Deserve
          </h2>
          <p className="text-xl text-gray-600">
            Enhance Safety, Health, and Happiness with AI-Powered Elderly Care Solutions
          </p>
          <div className="pt-4">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Request a Free Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600">support@example.com</p>
              <p className="text-gray-600">1-800-CARE-AI</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-600 hover:text-primary block">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-primary block">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-primary block">Facebook</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-600 hover:text-primary block">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-primary block">Terms of Service</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Trust & Security</h3>
              <div className="flex items-center gap-2 text-primary">
                <Shield className="h-5 w-5" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}