import { Card } from "@/components/ui/card";
import OfferingCard from "./pricing/OfferingCard";
import BonusCard from "./pricing/BonusCard";
import PricingSummary from "./pricing/PricingSummary";

export default function PricingDetailsSection() {
  const offerings = [
    {
      title: "Personalized AI Agent Workforce Implementation Roadmap",
      value: 1000,
      features: [
        "AI Voice Agent Profile Creation",
        "Workflow Automation Plan",
        "Task Delegation Strategy"
      ]
    },
    {
      title: "AI Voice Agent Profile Creation",
      value: 500,
      features: [
        "Custom Scripts",
        "Integration with Your Systems",
        "Training and Testing"
      ]
    },
    {
      title: "1-Hour Strategy Consultation",
      value: 250,
      features: [
        "Review your current workflows",
        "Pinpoint areas for AI implementation",
        "Custom action plan"
      ]
    }
  ];

  const bonuses = [
    {
      title: "AI Voice Customer Service Agent for Your Website",
      value: 250,
      description: "24/7 customer support, lead capture, and seamless CRM integration",
      features: [
        "24/7 Customer Support with FAQs and product details",
        "Automated lead capture system",
        "Seamless website and CRM integration"
      ]
    },
    {
      title: "AI Content Creation Toolkit",
      value: 300,
      description: "Generate high-quality content and optimize for SEO",
      features: [
        "AI Writing Assistant for blogs and social media",
        "Content Calendar Automation",
        "SEO Optimization Tools"
      ]
    },
    {
      title: "Lifetime Access to AI Training Courses",
      value: 497,
      description: "Access all current and future AI training courses",
      features: [
        "Course: Using AI to create websites and software",
        "Course: Creating AI voice agents and CRM integration",
        "Course: Using basic AI tools to automate everything"
      ]
    },
    {
      title: "Custom AI Workflow Blueprint",
      value: 150,
      description: "Step-by-step implementation guide for your business"
    },
    {
      title: "AI-Powered Marketing Audit",
      value: 197,
      description: "Comprehensive analysis and optimization recommendations"
    },
    {
      title: "Exclusive Access to AI Tools Library",
      value: 100,
      description: "Curated collection of premium AI tools and resources"
    },
    {
      title: "Priority Implementation Assistance",
      value: 250,
      description: "Fast-track setup and implementation support"
    }
  ];

  return (
    <section className="bg-white/90 backdrop-blur-md py-4 sm:py-8">
      <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center animate-fadeIn">
            What You'll Get for Just $247:
          </h2>

          <div className="grid gap-3 sm:gap-4">
            {offerings.map((offering, i) => (
              <OfferingCard key={i} index={i} {...offering} />
            ))}

            {/* Bonuses Section */}
            <div className="pt-3 sm:pt-4">
              <Card className="border-2 border-primary/20 bg-primary/5 overflow-hidden">
                <div className="p-3 sm:p-4 md:p-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-3 sm:mb-4">
                    🎁 Exclusive Bonuses (Total Value: $1,694+)
                  </h2>
                  <div className="grid gap-2 sm:gap-3">
                    {bonuses.map((bonus, i) => (
                      <BonusCard key={i} index={i} {...bonus} />
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <PricingSummary />

            <div className="text-center space-y-3 sm:space-y-4 animate-fadeIn py-3 sm:py-4" style={{ animationDelay: "900ms" }}>
              <div className="px-3 sm:px-4">
                <h3 className="text-base sm:text-lg font-semibold mb-2">Got Questions?</h3>
                <p className="text-muted-foreground text-sm">
                  Contact us at Support@aimarketingprofile.com
                </p>
              </div>

              <div className="px-3 sm:px-4">
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Why Wait? Your Business Can't Afford to Fall Behind.
                </h3>
                <p className="text-muted-foreground text-sm">
                  AI is the future—and it's moving fast. Don't let your competitors outpace you. 
                  Let's transform your business together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}