import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface MailchimpData {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  company?: string;
  formType?: string;
  businessName?: string;
  industry?: string;
  businessSize?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      email,
      firstName,
      lastName,
      phone,
      company,
      formType,
      businessName,
      industry,
      businessSize
    } = await req.json() as MailchimpData;
    
    const API_KEY = Deno.env.get('MAILCHIMP_API_KEY');
    const AUDIENCE_ID = Deno.env.get('MAILCHIMP_AUDIENCE_ID');
    const DC = API_KEY?.split('-')[1];

    if (!API_KEY || !AUDIENCE_ID || !DC) {
      throw new Error('Missing Mailchimp configuration');
    }

    const subscriberData = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName || '',
        LNAME: lastName || '',
        PHONE: phone || '',
        COMPANY: businessName || company || '',
        FORMTYPE: formType || 'demo',
        INDUSTRY: industry || '',
        BIZSIZE: businessSize || ''
      }
    };

    console.log('Subscribing to Mailchimp:', email);

    const response = await fetch(
      `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subscriberData)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || 'Error subscribing to Mailchimp');
    }

    console.log('Successfully subscribed to Mailchimp:', email);

    return new Response(
      JSON.stringify({ success: true, message: 'Successfully subscribed to mailing list' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Mailchimp subscription error:', error);
    
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});