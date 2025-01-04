import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export default function CheckoutFlow() {
  const [selectedUpsells, setSelectedUpsells] = useState<string[]>([]);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const toggleUpsell = (priceId: string) => {
    console.log('Toggling upsell:', priceId);
    setSelectedUpsells(prev => 
      prev.includes(priceId) 
        ? prev.filter(id => id !== priceId)
        : [...prev, priceId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-4 group"
        >
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Button>

        {/* Main Offer */}
        <Card className="p-6 space-y-6 animate-fadeIn">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">AI Marketing Profile Setup</h2>
            <p className="text-muted-foreground">Get started with your AI-powered marketing transformation</p>
            
            <div className="space-y-2">
              <h3 className="font-semibold">What's Included:</h3>
              <ul className="space-y-2">
                {[
                  "Custom AI Marketing Profile",
                  "AI Voice Agent Setup",
                  "Workflow Automation",
                  "1-Hour Strategy Consultation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <p className="text-2xl font-bold text-primary">$247</p>
            </div>
          </div>
        </Card>

        {/* Upsell 1: AI Training */}
        <Card className="p-6 border-primary/20 animate-slideUp" style={{ animationDelay: "100ms" }}>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-4 flex-1">
              <div>
                <h3 className="text-xl font-semibold">AI Training for Your Team</h3>
                <p className="text-muted-foreground">Maximize your team's AI capabilities</p>
              </div>

              <ul className="space-y-2">
                {[
                  "Custom Training Sessions",
                  "Hands-On Workshops",
                  "Ongoing Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xl font-bold text-primary">$197</p>
            </div>

            <Button
              variant={selectedUpsells.includes('price_1QdYnvGineWW4dYE5nh8CnHC') ? "default" : "outline"}
              onClick={() => toggleUpsell('price_1QdYnvGineWW4dYE5nh8CnHC')}
              className="min-w-[120px]"
            >
              {selectedUpsells.includes('price_1QdYnvGineWW4dYE5nh8CnHC') ? 'Added' : 'Add This'}
            </Button>
          </div>
        </Card>

        {/* Upsell 2: Premium Support */}
        <Card className="p-6 border-primary/20 animate-slideUp" style={{ animationDelay: "200ms" }}>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-4 flex-1">
              <div>
                <h3 className="text-xl font-semibold">30 Days of Premium Support</h3>
                <p className="text-muted-foreground">Get expert guidance every step of the way</p>
              </div>

              <ul className="space-y-2">
                {[
                  "Unlimited Email and Chat Support",
                  "Priority Assistance",
                  "Implementation Guidance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xl font-bold text-primary">$147</p>
            </div>

            <Button
              variant={selectedUpsells.includes('price_1QdYo7GineWW4dYE6hMDnATH') ? "default" : "outline"}
              onClick={() => toggleUpsell('price_1QdYo7GineWW4dYE6hMDnATH')}
              className="min-w-[120px]"
            >
              {selectedUpsells.includes('price_1QdYo7GineWW4dYE6hMDnATH') ? 'Added' : 'Add This'}
            </Button>
          </div>
        </Card>

        {/* Checkout Button */}
        <div className="flex justify-center pt-8">
          <Button
            size="lg"
            onClick={handleCheckout}
            disabled={isLoading}
            className="text-lg group"
          >
            Proceed to Checkout
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}