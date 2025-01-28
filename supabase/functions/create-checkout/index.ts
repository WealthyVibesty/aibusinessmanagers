import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from 'https://esm.sh/stripe@14.21.0';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  console.log('Received checkout request');
  
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    console.log('Request body:', body);
    
    const { priceId } = body;
    console.log('Price ID:', priceId);

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

    console.log('Initializing Stripe...');
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
      httpClient: Stripe.createFetchHttpClient(),
    });

    // Get the base URL from the request URL
    const url = new URL(req.url);
    const baseUrl = `${url.protocol}//${url.hostname}${url.port ? `:${url.port}` : ''}`;
    console.log('Base URL for redirect:', baseUrl);

    // Create checkout session
    console.log('Creating checkout session...');
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/dashboard`,
      cancel_url: `${baseUrl}/pricing`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    });

    console.log('Checkout session created successfully:', session.id);
    
    return new Response(
      JSON.stringify({ 
        url: session.url,
        sessionId: session.id 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate, private',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in checkout process:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'An error occurred during checkout',
        timestamp: new Date().toISOString(),
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate, private',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
        status: 400,
      }
    );
  }
});