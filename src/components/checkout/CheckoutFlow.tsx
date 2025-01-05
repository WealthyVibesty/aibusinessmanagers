import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CheckoutProduct } from "./CheckoutProduct";
import { UpsellItem } from "./UpsellItem";
import { useCheckout } from "./useCheckout";

export default function CheckoutFlow() {
  const navigate = useNavigate();
  const { selectedUpsells, isLoading, toggleUpsell, handleCheckout } = useCheckout();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-4 group"
          disabled={isLoading}
        >
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Button>

        {/* Main Offer */}
        <CheckoutProduct 
          title="AI Dental Practice Management Suite"
          description="Transform your dental practice with AI-powered automation and patient engagement"
          features={[
            "24/7 AI Patient Scheduling Assistant",
            "Automated Insurance Verification",
            "Smart Treatment Plan Follow-ups",
            "1-Hour Practice Assessment"
          ]}
          price="$247"
        />

        {/* Upsells */}
        <UpsellItem 
          title="Staff AI Training Program"
          description="Empower your dental team with AI capabilities"
          features={[
            "Front Desk AI Integration Training",
            "Treatment Coordinator AI Tools",
            "Hygienist Workflow Automation"
          ]}
          price="$197"
          priceId="price_1QdYnvGineWW4dYE5nh8CnHC"
          isSelected={selectedUpsells.includes('price_1QdYnvGineWW4dYE5nh8CnHC')}
          onToggle={toggleUpsell}
          animationDelay="100ms"
          disabled={isLoading}
        />

        <UpsellItem 
          title="30-Day Implementation Support"
          description="Get expert guidance for your dental practice transformation"
          features={[
            "Daily Implementation Support",
            "Custom Workflow Setup",
            "Staff Training Sessions"
          ]}
          price="$147"
          priceId="price_1QdYo7GineWW4dYE6hMDnATH"
          isSelected={selectedUpsells.includes('price_1QdYo7GineWW4dYE6hMDnATH')}
          onToggle={toggleUpsell}
          animationDelay="200ms"
          disabled={isLoading}
        />

        {/* Checkout Button */}
        <div className="flex justify-center pt-8">
          <Button
            size="lg"
            onClick={handleCheckout}
            disabled={isLoading}
            className="text-lg group relative min-w-[200px] h-12"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                Processing...
              </div>
            ) : (
              <span className="flex items-center">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}