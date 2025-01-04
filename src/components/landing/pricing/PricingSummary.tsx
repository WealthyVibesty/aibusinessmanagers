import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, DollarSign, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PricingSummary() {
  const navigate = useNavigate();
  
  return (
    <Card className="p-4 sm:p-8 border-2 border-primary animate-fadeIn w-full overflow-hidden" style={{ animationDelay: "800ms" }}>
      <div className="text-center space-y-6 sm:space-y-10">
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Star className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <p className="text-xl sm:text-2xl md:text-3xl font-bold break-words">Total Value: $2,500+</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <DollarSign className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary break-words">
              Your Price Today: Just $247!
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold break-words">Why This Deal is Unbeatable:</h3>
          <ul className="space-y-4 sm:space-y-6 text-left">
            <li className="flex items-start gap-2 sm:gap-4">
              <Check className="h-5 w-5 sm:h-7 sm:w-7 text-primary mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg md:text-xl break-words">No Guesswork: We handle everything—from roadmap creation to AI agent deployment.</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-4">
              <Check className="h-5 w-5 sm:h-7 sm:w-7 text-primary mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg md:text-xl break-words">Proven Results: See how we helped a print shop save 20+ hours a week and boost profits.</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-4">
              <Check className="h-5 w-5 sm:h-7 sm:w-7 text-primary mt-1 flex-shrink-0" />
              <span className="text-base sm:text-lg md:text-xl break-words">Risk-Free: With 14 days money-back guarantee and a custom action plan.</span>
            </li>
          </ul>
        </div>

        <div className="pt-4 sm:pt-6 space-y-6 sm:space-y-8">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 break-words">Limited-Time Offer: Act Now!</h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto break-words">
              This offer won't last forever. The price goes up to $497 soon.
              Don't miss your chance to transform your business with AI!
            </p>
          </div>
          
          <Button
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto group shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            onClick={() => navigate("/login")}
          >
            Get Started Now for Just $247
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Card>
  );
}