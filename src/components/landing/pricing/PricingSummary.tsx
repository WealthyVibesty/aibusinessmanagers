import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PricingSummary() {
  const navigate = useNavigate();
  
  return (
    <Card className="p-4 sm:p-8 border-2 border-primary animate-fadeIn mt-8" style={{ animationDelay: "800ms" }}>
      <div className="text-center space-y-4 sm:space-y-6">
        <div className="space-y-2">
          <p className="text-xl sm:text-2xl font-bold">Total Value: $2,500+</p>
          <p className="text-2xl sm:text-3xl font-bold text-primary">
            Your Price Today: Just $247!
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">Why This Deal is Unbeatable:</h3>
          <ul className="space-y-2 text-left text-sm sm:text-base">
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

        <div className="pt-4 sm:pt-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Limited-Time Offer: Act Now!</h3>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            This offer won't last forever. The price goes up to $497 soon.
            Don't miss your chance to transform your business with AI!
          </p>
          
          <Button
            size="lg"
            className="text-base sm:text-lg group w-full sm:w-auto"
            onClick={() => navigate("/login")}
          >
            Get Started Now for Just $247
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Card>
  );
}