import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function useCheckout() {
  const [selectedUpsells, setSelectedUpsells] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const toggleUpsell = (priceId: string) => {
    if (isLoading) return;
    console.log('Toggling upsell:', priceId);
    setSelectedUpsells(prev => 
      prev.includes(priceId) 
        ? prev.filter(id => id !== priceId)
        : [...prev, priceId]
    );
  };

  const handleCheckout = async () => {
    if (isLoading) {
      console.log('Checkout already in progress, preventing duplicate submission');
      return;
    }
    
    setIsLoading(true);
    console.log('Starting checkout process...');
    
    try {
      // Get referral code from URL if present
      const urlParams = new URLSearchParams(window.location.search);
      const refCode = urlParams.get('ref');
      
      // Create the request payload
      const payload = {
        priceId: 'price_1QhWOHGineWW4dYEhBv1EweI',
        upsellPriceIds: selectedUpsells,
        refCode
      };
      
      console.log('Sending checkout request with payload:', payload);
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: payload,
      });

      console.log('Checkout response:', { data, error });

      if (error) {
        throw new Error(error.message || 'Failed to create checkout session');
      }

      if (!data?.url) {
        throw new Error('No checkout URL received');
      }

      // Redirect to Stripe checkout
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