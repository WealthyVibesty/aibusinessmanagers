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
        <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 text-center mt-16 mb-12">
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
            🎉 Enterprise-Grade AI Implementation Package - Transform Your Business Operations
          </p>
        </div>

        {/* Main Offer */}
        <div className="pt-4">
          <CheckoutProduct 
            title="Basic AI Implementation Package"
            description="Get started with enterprise-grade AI automation"
            features={[
              "AI Assistant Configuration",
              "Basic SMS Marketing",
              "Call Handling",
              "Standard Support",
              "Initial Setup and Configuration"
            ]}
            price="$3,000"
          />
        </div>

        {/* Upsells */}
        <UpsellItem 
          title="CRM Integration Package"
          description="Seamlessly connect your existing systems"
          features={[
            "Custom CRM Integration",
            "Data Migration Support",
            "Workflow Setup",
            "Training Documentation"
          ]}
          price="$1,500"
          priceId="price_1QhWPpGineWW4dYENsMVwYMy"
          isSelected={selectedUpsells.includes('price_1QhWPpGineWW4dYENsMVwYMy')}
          onToggle={toggleUpsell}
          animationDelay="100ms"
          disabled={isLoading}
        />

        <UpsellItem 
          title="Multilingual Capability"
          description="Expand your reach with additional language support"
          features={[
            "Additional Language Support",
            "Custom Voice Options",
            "Localized Response Templates",
            "Cultural Adaptation Support"
          ]}
          price="$2,000"
          priceId="price_1QhWQuGineWW4dYEcVkSr2sX"
          isSelected={selectedUpsells.includes('price_1QhWQuGineWW4dYEcVkSr2sX')}
          onToggle={toggleUpsell}
          animationDelay="200ms"
          disabled={isLoading}
        />

        <UpsellItem 
          title="Twilio SMS Integration"
          description="Enable automated SMS follow-ups and notifications"
          features={[
            "SMS Integration Setup",
            "Template Creation",
            "Automation Rules Configuration",
            "Usage Monitoring Setup"
          ]}
          price="$500"
          priceId="price_1QhWRYGineWW4dYEEj3brt2W"
          isSelected={selectedUpsells.includes('price_1QhWRYGineWW4dYEEj3brt2W')}
          onToggle={toggleUpsell}
          animationDelay="300ms"
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