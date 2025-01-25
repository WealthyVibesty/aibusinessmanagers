import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container max-w-4xl mx-auto px-4 py-24 text-center space-y-8">
        <div className="animate-bounce mb-8">
          <CheckCircle2 className="h-20 w-20 text-primary mx-auto" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight animate-fadeIn">
          Thank You for Your Interest!
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "100ms" }}>
          We've received your demo request and will be in touch within 24 hours to schedule your personalized AI consultation.
        </p>
        
        <div className="bg-card p-8 rounded-lg shadow-lg space-y-4 animate-fadeIn" style={{ animationDelay: "200ms" }}>
          <h2 className="text-2xl font-semibold">What's Next?</h2>
          <ul className="space-y-4 text-left">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <span>Our AI experts will review your business requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <span>We'll prepare a custom automation strategy for your review</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <span>Schedule a personalized demo of your AI Business Manager</span>
            </li>
          </ul>
        </div>
        
        <div className="pt-8 space-y-4 animate-fadeIn" style={{ animationDelay: "300ms" }}>
          <Button 
            variant="default"
            size="lg"
            onClick={() => navigate("/ai-business-managers")}
            className="text-lg px-8 py-6 h-auto rounded-full"
          >
            Learn More About AI Business Managers
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}