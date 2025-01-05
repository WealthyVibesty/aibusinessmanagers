import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Phone, Calendar, Clock, Users, Shield, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TelemedicineLanding() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 animate-fadeIn leading-tight">
              Revolutionize Your Telemedicine Platform with AI Voice Agents
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto animate-slideUp">
              Say goodbye to overwhelmed call centers, missed appointments, and inefficient workflows. 
              Our AI voice agents handle patient inquiries, scheduling, triage, and more—24/7, with HIPAA-compliant security.
            </p>
            <div className="pt-4">
              <Button size="lg" className="animate-slideUp text-lg px-8 py-6 h-auto">
                Get a Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Is Your Telemedicine Platform Struggling to Keep Up?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Phone className="h-8 w-8" />, text: "Overwhelmed staff handling repetitive calls" },
              { icon: <Clock className="h-8 w-8" />, text: "Long patient wait times leading to dissatisfaction" },
              { icon: <Calendar className="h-8 w-8" />, text: "Missed appointments hurting bottom line" },
              { icon: <Users className="h-8 w-8" />, text: "Limited after-hours support" },
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {item.icon}
                </div>
                <p className="text-lg text-gray-700">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Introducing AI Voice Assistant – The Future of Telemedicine Support
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Automate Patient Triage",
                description: "Assess symptoms and direct patients to the right care provider."
              },
              {
                title: "Streamline Scheduling",
                description: "Book, reschedule, or cancel appointments with simple voice commands."
              },
              {
                title: "Provide 24/7 Support",
                description: "Answer FAQs, send reminders, and handle after-hours inquiries."
              },
              {
                title: "Enhance Patient Engagement",
                description: "Deliver personalized, multilingual support for better experiences."
              },
              {
                title: "Integrate Seamlessly",
                description: "Works with your existing telemedicine platform and systems."
              },
              {
                title: "Ensure HIPAA Compliance",
                description: "Protect patient data with end-to-end encryption."
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
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose Our AI Voice Agent?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Reduce operational costs by automating repetitive tasks",
              "Improve patient satisfaction with 24/7 availability",
              "Scale effortlessly without adding staff",
              "Ensure HIPAA-compliant security",
              "Reduce no-shows by 30%",
              "Lower administrative costs by 20%"
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-primary" />
                </div>
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
            {[
              {
                q: "Is the AI voice agent HIPAA-compliant?",
                a: "Yes, our solution meets all HIPAA requirements for data privacy and security."
              },
              {
                q: "Can it integrate with my existing systems?",
                a: "Absolutely! Our AI voice agent seamlessly integrates with EHRs, CRMs, and telemedicine platforms."
              },
              {
                q: "How long does it take to implement?",
                a: "Most clients are up and running within a few days."
              }
            ].map((faq, i) => (
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
            Don't Let Inefficiencies Hold Your Telemedicine Platform Back
          </h2>
          <p className="text-xl text-gray-600">
            Automate, Scale, and Delight Your Patients with AI Voice Agents
          </p>
          <div className="pt-4">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Get a Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
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
              <p className="text-gray-600">1-800-HEALTH-AI</p>
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