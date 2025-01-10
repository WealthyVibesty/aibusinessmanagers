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
        {/* Back Button - Added mt-8 for extra top margin */}
        <div className="pt-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="group"
            disabled={isLoading}
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </div>

        {/* Main Offer - Added pt-4 for spacing after back button */}
        <div className="pt-4">
          <CheckoutProduct 
            title="AI Business Managers Setup"
            description="Get started with your AI-powered marketing transformation"
            features={[
              "Custom AI Business Profile",
              "AI Voice Agent Setup",
              "Workflow Automation",
              "1-Hour Strategy Consultation"
            ]}
            price="$247"
          />
        </div>

        {/* Upsells */}
        <UpsellItem 
          title="AI Training for Your Team"
          description="Maximize your team's AI capabilities"
          features={[
            "Custom Training Sessions",
            "Hands-On Workshops",
            "Ongoing Support"
          ]}
          price="$197"
          priceId="price_1QdYnvGineWW4dYE5nh8CnHC"
          isSelected={selectedUpsells.includes('price_1QdYnvGineWW4dYE5nh8CnHC')}
          onToggle={toggleUpsell}
          animationDelay="100ms"
          disabled={isLoading}
        />

        <UpsellItem 
          title="30 Days of Premium Support"
          description="Get expert guidance every step of the way"
          features={[
            "Unlimited Email and Chat Support",
            "Priority Assistance",
            "Implementation Guidance"
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