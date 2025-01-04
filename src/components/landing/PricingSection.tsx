import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PricingSection() {
  const steps = [
    {
      title: "Pay $1 and Fill Out the Form",
      description: "Answer a few simple questions about your business.",
      icon: <ArrowRight className="h-5 w-5 text-primary" />,
    },
    {
      title: "We Create Your Profile",
      description: "Our AI experts will analyze your business and create a custom plan.",
      icon: <ArrowRight className="h-5 w-5 text-primary" />,
    },
    {
      title: "You Decide",
      description: "If you love it, we'll help you implement it. Our pricing is affordable for small businesses.",
      icon: <ArrowRight className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <section className="bg-secondary/5 py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold tracking-tight text-center animate-fadeIn">
            What Does It Cost to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center animate-slideUp" style={{ animationDelay: "100ms" }}>
            We get it – pricing matters. That's why we're only charging $1 to create your AI Marketing Profile.
          </p>

          <Card className="border-2 border-primary/10 animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-8">
              <div className="grid gap-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background/50 animate-slideUp"
                    style={{ animationDelay: `${300 + (index * 100)}ms` }}
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
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fadeIn" style={{ animationDelay: "600ms" }}>
                  <Check className="h-4 w-4 text-primary" />
                  <span>Implementation costs are affordable for small businesses</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}