import HeroSection from "@/components/landing/sections/HeroSection";
import SEO from "@/components/SEO";
import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    "Industry-leading AI technology",
    "HIPAA-compliant solutions",
    "Proven results with leading healthcare providers",
    "Dedicated support team",
    "Continuous innovation and improvements"
  ];

  return (
    <>
      <SEO 
        title="Why Choose Us" 
        description="Discover why leading healthcare providers choose our AI solutions."
      />
      <div className="min-h-screen">
        <HeroSection
          title="Why Choose AI Business Managers"
          subtitle="Leading healthcare providers trust us to deliver innovative AI solutions that transform their operations."
          ctaText="Learn More"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="text-primary h-6 w-6 flex-shrink-0" />
                  <span className="text-lg">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}