import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

export default function PricingDetailsSection() {
  const navigate = useNavigate();
  
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
    <section className="bg-gradient-to-b from-background to-secondary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-center animate-fadeIn">
            What You'll Get for Just $247:
          </h2>

          <div className="grid gap-8">
            {offerings.map((offering, i) => (
              <Card 
                key={i} 
                className="p-6 animate-slideUp"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {i + 1}. {offering.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Value: ${offering.value.toLocaleString()}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {offering.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}

            {/* Bonuses Section */}
            <div className="pt-8">
              <Card className="p-8 border-2 border-primary/20 bg-primary/5">
                <h2 className="text-2xl font-bold text-center mb-6">
                  🎁 Exclusive Bonuses (Total Value: $1,694+)
                </h2>
                <div className="grid gap-6">
                  {bonuses.map((bonus, i) => (
                    <Card 
                      key={i}
                      className="p-6 animate-slideUp bg-background"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <h3 className="text-lg font-semibold mb-2">
                        Bonus #{i + 1}: {bonus.title}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        Value: ${bonus.value}
                      </p>
                      <p className="text-muted-foreground mb-3">{bonus.description}</p>
                      {bonus.features && (
                        <ul className="space-y-2">
                          {bonus.features.map((feature, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-8 border-2 border-primary animate-fadeIn mt-8" style={{ animationDelay: "800ms" }}>
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <p className="text-2xl font-bold">Total Value: $2,500+</p>
                  <p className="text-3xl font-bold text-primary">
                    Your Price Today: Just $247!
                  </p>
                </div>

                <div className="max-w-2xl mx-auto space-y-4">
                  <h3 className="text-xl font-semibold">Why This Deal is Unbeatable:</h3>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>No Guesswork: We handle everything—from roadmap creation to AI agent deployment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Proven Results: See how we helped a print shop save 20+ hours a week and boost profits.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Risk-Free: With 14 days money-back guarantee and a custom action plan.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Limited-Time Offer: Act Now!</h3>
                  <p className="text-muted-foreground mb-4">
                    This offer won't last forever. The price goes up to $497 soon.
                    Don't miss your chance to transform your business with AI!
                  </p>
                  
                  <Button
                    size="lg"
                    className="text-lg group w-full sm:w-auto"
                    onClick={() => navigate("/login")}
                  >
                    Get Started Now for Just $247
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>

            <div className="text-center space-y-5 animate-fadeIn py-4" style={{ animationDelay: "900ms" }}>
              <div>
                <h3 className="text-xl font-semibold mb-2">Got Questions?</h3>
                <p className="text-muted-foreground">
                  Contact us at Support@aimarketingprofile.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Why Wait? Your Business Can't Afford to Fall Behind.
                </h3>
                <p className="text-muted-foreground">
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