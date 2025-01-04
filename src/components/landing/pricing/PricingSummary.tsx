import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, DollarSign, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PricingSummary() {
  const navigate = useNavigate();
  
  return (
    <Card className="p-8 sm:p-12 border-2 border-primary animate-fadeIn" style={{ animationDelay: "800ms" }}>
      <div className="text-center space-y-10">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Star className="h-8 w-8 text-primary" />
            <p className="text-2xl sm:text-3xl font-bold">Total Value: $2,500+</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <DollarSign className="h-10 w-10 text-primary" />
            <p className="text-3xl sm:text-4xl font-bold text-primary">
              Your Price Today: Just $247!
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold">Why This Deal is Unbeatable:</h3>
          <ul className="space-y-6 text-left">
            <li className="flex items-start gap-4">
              <Check className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
              <span className="text-lg sm:text-xl">No Guesswork: We handle everything—from roadmap creation to AI agent deployment.</span>
            </li>
            <li className="flex items-start gap-4">
              <Check className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
              <span className="text-lg sm:text-xl">Proven Results: See how we helped a print shop save 20+ hours a week and boost profits.</span>
            </li>
            <li className="flex items-start gap-4">
              <Check className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
              <span className="text-lg sm:text-xl">Risk-Free: With 14 days money-back guarantee and a custom action plan.</span>
            </li>
          </ul>
        </div>

        <div className="pt-6 space-y-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Limited-Time Offer: Act Now!</h3>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              This offer won't last forever. The price goes up to $497 soon.
              Don't miss your chance to transform your business with AI!
            </p>
          </div>
          
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto group shadow-lg hover:shadow-xl transition-all"
            onClick={() => navigate("/login")}
          >
            Get Started Now for Just $247
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Card>
  );
}