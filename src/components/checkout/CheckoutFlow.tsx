import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CheckoutProduct } from "./CheckoutProduct";
import { UpsellItem } from "./UpsellItem";
import { useCheckout } from "./useCheckout";
import { useState } from "react";
import DemoRequestForm from "../DemoRequestForm";

export default function CheckoutFlow() {
  const navigate = useNavigate();
  const { selectedUpsells, isLoading, toggleUpsell, handleCheckout } = useCheckout();
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Demo Button */}
        <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 text-center">
          <h2 className="text-xl font-semibold mb-3">Not Ready to Purchase?</h2>
          <Button 
            size="lg"
            onClick={() => setIsDemoFormOpen(true)}
            className="bg-primary hover:bg-primary/90"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Free Demo
          </Button>
        </div>

        {/* Back Button */}
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

        {/* Introductory Offer Message */}
        <div className="text-center bg-primary/5 rounded-lg p-4 border border-primary/20">
          <p className="text-lg font-medium text-primary">
            🎉 Introductory Offer: Get started in the right direction with our comprehensive AI implementation package
          </p>
        </div>

        {/* Main Offer */}
        <div className="pt-4">
          <CheckoutProduct 
            title="AI Business Managers"
            description="Get started with your AI-powered business transformation"
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
            "Hands-On Workshops"
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

      <DemoRequestForm 
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </div>
  );
}
