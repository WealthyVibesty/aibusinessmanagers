import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PricingSection() {
  const steps = [
    {
      title: "Start for Free",
      description: "Fill out the form, and we'll create your AI Marketing Profile at no cost.",
      icon: <ArrowRight className="h-5 w-5 text-primary" />,
    },
    {
      title: "See the Value",
      description: "Review your profile and decide if it makes sense for your business.",
      icon: <ArrowRight className="h-5 w-5 text-primary" />,
    },
    {
      title: "Pay for Implementation",
      description: "If you love it, we'll help you implement it. Our pricing is affordable for small businesses.",
      icon: <ArrowRight className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <section className="bg-secondary/5 py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              What Does It Cost to Implement?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We get it – pricing matters. That's why we don't charge you a dime until you see what we create for you.
            </p>
          </div>

          <Card className="border-2 border-primary/10 animate-fadeIn">
            <CardContent className="p-8">
              <div className="grid gap-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background/50 animate-slideUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}