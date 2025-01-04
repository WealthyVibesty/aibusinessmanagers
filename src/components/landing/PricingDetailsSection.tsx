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
    },
    {
      title: "Free Workflow Blueprint",
      value: 150,
      features: [
        "Best practices for automation",
        "How to scale without extra staff",
        "Tips to maximize ROI with AI"
      ]
    }
  ];

  const bonuses = [
    {
      title: "AI Training for Your Team",
      value: 200,
      description: "We'll train your team on how to use the new AI tools effectively."
    },
    {
      title: "30 Days of Support",
      value: 300,
      description: "Get 30 days of unlimited email and chat support."
    },
    {
      title: "Exclusive AI Tools Discount",
      value: 100,
      description: "Access exclusive discounts on premium AI tools and software."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-background to-secondary/10 py-2 sm:py-16">
      <div className="container mx-auto px-2 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-12">
          <h2 className="text-xl sm:text-3xl font-bold text-center animate-fadeIn">
            What You'll Get for Just $247:
          </h2>

          <div className="grid gap-2 sm:gap-8">
            {offerings.map((offering, i) => (
              <Card 
                key={i} 
                className="p-2.5 sm:p-6 animate-slideUp"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div>
                    <h3 className="text-sm sm:text-xl font-semibold mb-1 sm:mb-2">
                      {i + 1}. {offering.title}
                    </h3>
                    <p className="text-muted-foreground mb-1.5 sm:mb-3 text-xs sm:text-sm">
                      Value: ${offering.value.toLocaleString()}
                    </p>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {offering.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm">
                        <Check className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}

            <div className="space-y-2 sm:space-y-4">
              {bonuses.map((bonus, i) => (
                <Card 
                  key={i} 
                  className="p-2.5 sm:p-6 border-primary/20 animate-slideUp"
                  style={{ animationDelay: `${(offerings.length + i) * 100}ms` }}
                >
                  <h3 className="text-sm sm:text-xl font-semibold mb-1 sm:mb-2">
                    Bonus #{i + 1}: {bonus.title}
                  </h3>
                  <p className="text-muted-foreground mb-1 sm:mb-2 text-xs sm:text-sm">
                    Value: ${bonus.value.toLocaleString()}
                  </p>
                  <p className="text-xs sm:text-sm">{bonus.description}</p>
                </Card>
              ))}
            </div>

            <Card className="p-3 sm:p-8 border-2 border-primary animate-fadeIn mt-2 sm:mt-4" style={{ animationDelay: "800ms" }}>
              <div className="text-center space-y-3 sm:space-y-5">
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-base sm:text-2xl font-bold">Total Value: $2,500+</p>
                  <p className="text-lg sm:text-3xl font-bold text-primary">
                    Your Price Today: Just $247!
                  </p>
                </div>

                <div className="max-w-2xl mx-auto space-y-2 sm:space-y-4">
                  <h3 className="text-sm sm:text-xl font-semibold">Why This Deal is Unbeatable:</h3>
                  <ul className="space-y-2 text-left text-xs sm:text-sm">
                    <li className="flex items-start gap-1.5 sm:gap-2">
                      <Check className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>No Guesswork: We handle everything—from roadmap creation to AI agent deployment.</span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2">
                      <Check className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Proven Results: See how we helped a print shop save 20+ hours a week and boost profits.</span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2">
                      <Check className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Risk-Free: With 30 days of support and a custom action plan, you're guaranteed results.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 sm:pt-4">
                  <h3 className="text-sm sm:text-xl font-semibold mb-2 sm:mb-3">Limited-Time Offer: Act Now!</h3>
                  <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">
                    This offer won't last forever. The price goes up to $497 soon.
                    Don't miss your chance to transform your business with AI!
                  </p>
                  
                  <Button
                    size="lg"
                    className="text-sm sm:text-lg group w-full sm:w-auto"
                    onClick={() => navigate("/login")}
                  >
                    Get Started Now for Just $247
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>

            <div className="text-center space-y-3 sm:space-y-5 animate-fadeIn py-2 sm:py-4" style={{ animationDelay: "900ms" }}>
              <div>
                <h3 className="text-sm sm:text-xl font-semibold mb-1 sm:mb-2">Got Questions?</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Contact us at support@aiautomation.com
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-xl font-semibold mb-1 sm:mb-2">
                  Why Wait? Your Business Can't Afford to Fall Behind.
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
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