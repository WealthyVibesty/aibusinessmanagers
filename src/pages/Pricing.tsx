import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function Pricing() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const plans = [
    {
      name: "Basic Plan",
      subtitle: "Essential Automation",
      priceId: "price_1Qm5kMGineWW4dYE51YMtO7I",
      setupFee: "10,000",
      monthlyAfterFirstYear: "2,000",
      description: "Perfect for small property management companies managing 1-5 properties",
      features: [
        "Automated Tenant Support",
        "Maintenance Request Handling",
        "Lease Renewal Processing",
        "Incident Reporting System",
        "CRM Integration",
        "Basic Monthly Reporting",
        "Standard Email Support",
        "First Year Maintenance Included"
      ],
      savings: "$80,000-$100,000/year",
      buttonText: "Get Basic"
    },
    {
      name: "Advanced Plan",
      subtitle: "Enhanced Engagement",
      priceId: "price_1Qm5lwGineWW4dYEcPKRPbsQ",
      setupFee: "15,000",
      monthlyAfterFirstYear: "2,500",
      description: "Ideal for mid-sized property management companies managing 6-10 properties",
      features: [
        "Everything in Basic, plus:",
        "SMS Communication System",
        "Community Event Management",
        "Automated Feedback Collection",
        "Priority Support Access",
        "Enhanced Analytics",
        "Quarterly Performance Reviews",
        "First Year Maintenance Included"
      ],
      savings: "$150,000-$200,000/year",
      buttonText: "Get Advanced",
      popular: true
    },
    {
      name: "Premium Plan",
      subtitle: "Comprehensive Integration",
      priceId: "price_1Qm5mYGineWW4dYEkHoISblW",
      setupFee: "25,000",
      monthlyAfterFirstYear: "3,000",
      description: "Built for large property management companies managing 10+ properties",
      features: [
        "Everything in Advanced, plus:",
        "Multilingual Support",
        "Social Media Integration",
        "Custom AI Branding",
        "Advanced Analytics Dashboard",
        "24/7 Emergency Support",
        "Quarterly Strategy Reviews",
        "First Year Maintenance Included"
      ],
      savings: "$250,000-$300,000/year",
      buttonText: "Get Premium"
    }
  ];

  const handlePlanSelect = async (planName: string, priceId: string) => {
    try {
      console.log(`Creating checkout session for ${planName} with price ID: ${priceId}`);
      
      const { data: checkoutData, error: checkoutError } = await supabase.functions.invoke('create-checkout', {
        body: { priceId }
      });

      if (checkoutError) {
        console.error('Checkout error:', checkoutError);
        toast({
          title: "Error",
          description: "Unable to process checkout. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (checkoutData?.url) {
        console.log('Redirecting to checkout URL:', checkoutData.url);
        window.location.href = checkoutData.url;
      }
    } catch (error) {
      console.error('Error handling plan selection:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-4 animate-fadeIn text-black">
          Find the Perfect AI Solution for Your Property Management Business
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slideUp">
          One-time setup fee includes your first year of maintenance
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="container px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-6 flex flex-col h-full animate-slideUp hover:shadow-lg transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-md' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">${plan.setupFee}</span>
                    <span className="text-muted-foreground">setup fee</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    First year maintenance included
                  </div>
                  <div className="text-sm font-medium text-primary mt-2">
                    ${plan.monthlyAfterFirstYear}/month after first year
                  </div>
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-4 text-sm text-green-600 font-medium">
                  <Info className="h-4 w-4" />
                  <span>Save {plan.savings}</span>
                </div>
                <Button
                  onClick={() => handlePlanSelect(plan.name, plan.priceId)}
                  className={`w-full py-6 ${
                    plan.popular ? 'bg-primary text-white hover:bg-primary/90' : ''
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                q: "What's included in the setup fee?",
                a: "The setup fee includes full implementation and the first year of maintenance and support. After the first year, you'll only pay the monthly maintenance fee."
              },
              {
                q: "Can I customize the AI's responses?",
                a: "Yes, we fully customize the AI to match your brand voice and specific needs."
              },
              {
                q: "What kind of support is included?",
                a: "All plans include implementation support, training, and ongoing technical assistance throughout the first year and beyond."
              }
            ].map((faq, i) => (
              <div key={i} className="animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
                <h3 className="font-semibold mb-2 text-black">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}