import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function useCheckout() {
  const [selectedUpsells, setSelectedUpsells] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const toggleUpsell = (priceId: string) => {
    console.log('Toggling upsell:', priceId);
    setSelectedUpsells(prev => 
      prev.includes(priceId) 
        ? prev.filter(id => id !== priceId)
        : [...prev, priceId]
    );
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    console.log('Starting checkout process...');
    
    try {
      console.log('Creating checkout session with upsells:', selectedUpsells);
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: 'price_1QdYndGineWW4dYE2pij53XE', // Main product price ID
          upsellPriceIds: selectedUpsells,
        }
      });

      if (error) {
        console.error('Checkout API error:', error);
        throw new Error(error.message || 'Failed to create checkout session');
      }

      if (!data?.url) {
        console.error('No checkout URL received');
        throw new Error('No checkout URL received from server');
      }

      console.log('Redirecting to checkout:', data.url);
      window.location.href = data.url;
      
    } catch (error) {
      console.error('Checkout error:', error);
      setIsLoading(false);
      toast({
        title: "Checkout Error",
        description: error instanceof Error ? error.message : "There was a problem initiating checkout. Please try again.",
        variant: "destructive",
      });
    }
  };

  return {
    selectedUpsells,
    isLoading,
    toggleUpsell,
    handleCheckout
  };
}