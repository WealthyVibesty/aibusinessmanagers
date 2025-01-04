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
      console.log('Getting Supabase session...');
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.error('Session error:', sessionError);
        throw new Error('Please sign in to continue with checkout');
      }

      if (!session?.access_token) {
        console.error('No access token found');
        throw new Error('Please sign in to continue with checkout');
      }

      console.log('Creating checkout session with upsells:', selectedUpsells);
      const response = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: 'price_1QdYndGineWW4dYE2pij53XE', // Main product price ID
          upsellPriceIds: selectedUpsells,
        }
      });

      if (response.error) {
        console.error('Checkout API error:', response.error);
        throw new Error(response.error.message || 'Failed to create checkout session');
      }

      const { data } = response;
      console.log('Checkout session created, redirecting to:', data.url);
      
      if (!data?.url) {
        console.error('No checkout URL received');
        throw new Error('No checkout URL received from server');
      }

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