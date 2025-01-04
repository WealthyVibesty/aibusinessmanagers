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
        throw new Error('Authentication error');
      }

      if (!session?.access_token) {
        console.error('No access token found');
        throw new Error('No authentication token found');
      }

      console.log('Creating checkout session with upsells:', selectedUpsells);
      const response = await fetch(
        'https://ypmtcuqbndkcezjupwxj.supabase.co/functions/v1/create-checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({
            priceId: 'price_1QdYndGineWW4dYE2pij53XE', // Main product price ID
            upsellPriceIds: selectedUpsells,
          }),
        }
      );

      if (!response.ok) {
        console.error('Checkout API error:', response.status, response.statusText);
        const errorData = await response.json().catch(() => ({}));
        console.error('Error details:', errorData);
        throw new Error(`Checkout API error: ${response.statusText}`);
      }

      const { url, error } = await response.json();
      console.log('Checkout session created, redirecting to:', url);
      
      if (error) {
        console.error('Checkout error from API:', error);
        throw new Error(error);
      }
      
      if (!url) {
        console.error('No checkout URL received');
        throw new Error('No checkout URL received from server');
      }

      window.location.href = url;
      
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Error",
        description: error instanceof Error ? error.message : "There was a problem initiating checkout. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    selectedUpsells,
    isLoading,
    toggleUpsell,
    handleCheckout
  };
}