import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface BusinessProfile {
  name: string;
  address: string;
  phoneNumber: string;
  websiteUrl: string;
  businessHours: Record<string, string>;
}

export function useGoogleBusiness() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getBusinessProfile = async (accountId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.functions.invoke('google-business', {
        body: { action: 'getProfile', profile: { accountId } },
      });

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err.message);
      console.error('Error fetching business profile:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const updateBusinessProfile = async (profile: BusinessProfile) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.functions.invoke('google-business', {
        body: { action: 'updateProfile', profile },
      });

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err.message);
      console.error('Error updating business profile:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const searchNearbyLocations = async (location: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.functions.invoke('google-business', {
        body: { action: 'searchLocations', profile: { location } },
      });

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err.message);
      console.error('Error searching locations:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getBusinessProfile,
    updateBusinessProfile,
    searchNearbyLocations,
    isLoading,
    error,
  };
}