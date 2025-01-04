import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, DollarSign, Star } from "lucide-react";

export default function PricingSummary() {
  const handleTalkToAI = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      widget.classList.toggle('hidden');
      console.log('Toggling AI assistant widget from pricing summary');
    }
  };
  
  return (
    <Card className="p-8 sm:p-10 border-2 border-primary/20 animate-fadeIn w-full overflow-hidden bg-gradient-to-br from-white to-primary/5 shadow-lg hover:shadow-xl transition-all duration-300" style={{ animationDelay: "800ms" }}>
      <div className="text-center space-y-10">
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl -z-10" />
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Star className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Total Value: $2,500+
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="bg-accent/10 p-3 rounded-full">
              <DollarSign className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
              Your Price Today: Just $247!
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary">
            Why This Deal is Unbeatable:
          </h3>
          <ul className="space-y-6 text-left">
            {[
              "No Guesswork: We handle everything—from roadmap creation to AI agent deployment.",
              "Proven Results: See how we helped a print shop save 20+ hours a week and boost profits.",
              "Risk-Free: With 14 days money-back guarantee and a custom action plan."
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Check className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <span className="text-lg sm:text-xl leading-relaxed">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-8 space-y-8">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-6 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">
              Limited-Time Offer: Act Now!
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              This offer won't last forever. The price goes up to $497 soon.
              Don't miss your chance to transform your business with AI!
            </p>
          </div>
          
          <div className="flex justify-center w-full">
            <Button 
              onClick={handleTalkToAI}
              size="lg"
              className="w-full sm:w-auto min-w-[300px] bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6 h-auto"
            >
              Get Started Now for Just $247
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}