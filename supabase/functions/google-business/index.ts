import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface BusinessProfile {
  name: string;
  address: string;
  phoneNumber: string;
  websiteUrl: string;
  businessHours: Record<string, string>;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { action, profile } = await req.json()
    const GOOGLE_BUSINESS_API_KEY = Deno.env.get('GOOGLE_BUSINESS_API_KEY')
    const GOOGLE_OAUTH_CLIENT_ID = Deno.env.get('GOOGLE_OAUTH_CLIENT_ID')
    const GOOGLE_OAUTH_CLIENT_SECRET = Deno.env.get('GOOGLE_OAUTH_CLIENT_SECRET')

    if (!GOOGLE_BUSINESS_API_KEY || !GOOGLE_OAUTH_CLIENT_ID || !GOOGLE_OAUTH_CLIENT_SECRET) {
      throw new Error('Missing required Google API credentials')
    }

    let response
    switch (action) {
      case 'getProfile':
        response = await getBusinessProfile(profile.accountId)
        break
      case 'updateProfile':
        response = await updateBusinessProfile(profile)
        break
      case 'searchLocations':
        response = await searchNearbyLocations(profile.location)
        break
      default:
        throw new Error('Invalid action specified')
    }

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})

async function getBusinessProfile(accountId: string) {
  const url = `https://businessprofileperformance.googleapis.com/v1/locations/${accountId}`
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${await getAccessToken()}`,
      'Content-Type': 'application/json',
    },
  })
  return response.json()
}

async function updateBusinessProfile(profile: BusinessProfile) {
  const url = 'https://businessprofileperformance.googleapis.com/v1/locations'
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${await getAccessToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  })
  return response.json()
}

async function searchNearbyLocations(location: string) {
  const GOOGLE_PLACES_API_BASE = 'https://places.googleapis.com/v1/places:searchNearby'
  const response = await fetch(GOOGLE_PLACES_API_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': Deno.env.get('GOOGLE_BUSINESS_API_KEY') || '',
    },
    body: JSON.stringify({
      locationBias: {
        circle: {
          center: { latitude: 37.7937, longitude: -122.3965 },
          radius: 1000.0,
        },
      },
      maxResultCount: 10,
      rankPreference: "DISTANCE",
    }),
  })
  return response.json()
}

async function getAccessToken(): Promise<string> {
  // This is a simplified version. In production, you'd want to implement proper OAuth2 flow
  // and token caching/refresh logic
  const tokenUrl = 'https://oauth2.googleapis.com/token'
  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: Deno.env.get('GOOGLE_OAUTH_CLIENT_ID') || '',
      client_secret: Deno.env.get('GOOGLE_OAUTH_CLIENT_SECRET') || '',
      grant_type: 'client_credentials',
    }),
  })
  const data = await response.json()
  return data.access_token
}