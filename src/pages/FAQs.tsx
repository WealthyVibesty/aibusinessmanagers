import HeroSection from "@/components/landing/sections/HeroSection";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQs() {
  const faqs = [
    {
      question: "What is AI Business Managers?",
      answer: "AI Business Managers is a cutting-edge platform that provides AI-powered voice solutions for healthcare organizations, helping streamline operations and improve patient care."
    },
    {
      question: "Is the platform HIPAA compliant?",
      answer: "Yes, our platform is fully HIPAA compliant and includes robust security measures to protect patient data."
    },
    {
      question: "How quickly can we implement the solution?",
      answer: "Implementation typically takes 2-4 weeks, depending on your organization's specific needs and requirements."
    }
  ];

  return (
    <>
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers about our healthcare AI solutions. Learn about implementation, pricing, support & technical details."
      />
      <div className="min-h-screen">
        <HeroSection
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our healthcare AI solutions and implementation process."
          ctaText="Contact Support"
        />
        <div className="container mx-auto px-4 py-16">
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
