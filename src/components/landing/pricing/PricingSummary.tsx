import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function PricingSummary() {
  const navigate = useNavigate();
  
  return (
    <Card className="p-8 sm:p-10 text-center space-y-6 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        Ready to Transform Your Business?
      </h2>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
        Get started today and experience the power of AI-driven automation for your business.
      </p>
      <Button 
        onClick={() => navigate("/solutions")}
        className="bg-primary text-white px-8 py-6 text-lg"
      >
        Get Started Now
      </Button>
    </Card>
  );
}