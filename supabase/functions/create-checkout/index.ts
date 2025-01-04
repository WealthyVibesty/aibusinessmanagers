import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from 'https://esm.sh/stripe@14.21.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  console.log('Received checkout request');
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate request body
    const { priceId, upsellPriceIds = [] } = await req.json();
    console.log('Request payload:', { priceId, upsellPriceIds });

    if (!priceId) {
      console.error('No priceId provided');
      throw new Error('Price ID is required');
    }

    // Initialize Stripe
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
    if (!stripeKey) {
      console.error('Stripe secret key not found');
      throw new Error('Stripe configuration error');
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    });

    // Create line items array
    console.log('Creating line items...');
    const lineItems = [
      {
        price: priceId,
        quantity: 1,
      },
      ...upsellPriceIds.map(price => ({
        price,
        quantity: 1,
      }))
    ];

    // Create checkout session
    console.log('Creating checkout session...');
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/dashboard`,
      cancel_url: `${req.headers.get('origin')}/checkout`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    });

    console.log('Checkout session created:', session.id);
    
    return new Response(
      JSON.stringify({ 
        url: session.url,
        sessionId: session.id 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in checkout process:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || 'An error occurred during checkout' 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
        status: 400,
      }
    );
  }
});