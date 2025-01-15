import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Copy, TrendingUp, Users, DollarSign } from "lucide-react";

interface Affiliate {
  id: string;
  code: string;
  commission_rate: number;
  total_earnings: number;
  created_at: string;
}

interface Referral {
  id: string;
  status: string;
  commission_amount: number;
  created_at: string;
  profiles: {
    full_name: string | null;
    email: string | null;
  };
}

export default function AffiliateProgram() {
  const [isLoading, setIsLoading] = useState(true);
  const [affiliate, setAffiliate] = useState<Affiliate | null>(null);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkAffiliateStatus();
    fetchReferrals();
  }, []);

  const checkAffiliateStatus = async () => {
    try {
      console.log("Checking affiliate status...");
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        console.log("No session found, redirecting to login");
        navigate("/login");
        return;
      }

      console.log("Session found, checking affiliate data");
      const { data: affiliateData, error } = await supabase
        .from("affiliates")
        .select("*")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (error) {
        console.error("Error fetching affiliate data:", error);
        throw error;
      }

      console.log("Affiliate data:", affiliateData);
      setAffiliate(affiliateData);
    } catch (error) {
      console.error("Error checking affiliate status:", error);
      toast({
        title: "Error",
        description: "Failed to load affiliate data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchReferrals = async () => {
    try {
      console.log("Fetching referrals...");
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        console.log("No session found, skipping referrals fetch");
        return;
      }

      const { data: affiliateData } = await supabase
        .from("affiliates")
        .select("id")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (affiliateData) {
        console.log("Found affiliate data, fetching referrals");
        const { data: referralsData, error } = await supabase
          .from("referrals")
          .select(`
            *,
            profiles:referred_user_id (
              full_name,
              email
            )
          `)
          .eq("affiliate_id", affiliateData.id)
          .order("created_at", { ascending: false });

        if (error) throw error;
        console.log("Referrals data:", referralsData);
        setReferrals(referralsData);
      }
    } catch (error) {
      console.error("Error fetching referrals:", error);
      toast({
        title: "Error",
        description: "Failed to load referrals. Please try again.",
        variant: "destructive",
      });
    }
  };

  const becomeAffiliate = async () => {
    try {
      console.log("Becoming affiliate...");
      setIsLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        console.log("No session found, redirecting to login");
        navigate("/login");
        return;
      }

      // First, get a unique affiliate code from our database function
      const { data: codeData, error: codeError } = await supabase
        .rpc('generate_unique_affiliate_code');

      if (codeError) throw codeError;

      console.log("Generated affiliate code:", codeData);

      // Now insert the new affiliate record with the generated code
      const { data, error } = await supabase
        .from("affiliates")
        .insert({
          user_id: session.user.id,
          code: codeData
        })
        .select()
        .single();

      if (error) {
        console.error("Error creating affiliate:", error);
        throw error;
      }

      console.log("Created affiliate record:", data);
      setAffiliate(data);
      toast({
        title: "Success!",
        description: "You are now an affiliate partner.",
      });
    } catch (error) {
      console.error("Error becoming affiliate:", error);
      toast({
        title: "Error",
        description: "Failed to register as affiliate. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyAffiliateLink = () => {
    if (!affiliate) return;
    const link = `${window.location.origin}/?ref=${affiliate.code}`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Copied!",
      description: "Affiliate link copied to clipboard.",
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return affiliate ? (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Affiliate Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Earnings</p>
              <p className="text-2xl font-bold">${affiliate.total_earnings}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Referrals</p>
              <p className="text-2xl font-bold">{referrals.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Commission Rate</p>
              <p className="text-2xl font-bold">{affiliate.commission_rate * 100}%</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Your Affiliate Link</h2>
            <p className="text-sm text-muted-foreground">
              Share this link to earn commissions
            </p>
          </div>
          <Button onClick={copyAffiliateLink} className="shrink-0">
            <Copy className="h-4 w-4 mr-2" />
            Copy Link
          </Button>
        </div>
        <code className="block p-4 bg-muted rounded-lg break-all">
          {`${window.location.origin}/?ref=${affiliate.code}`}
        </code>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Referrals</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-4">Date</th>
                <th className="pb-4">User</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Commission</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((referral) => (
                <tr key={referral.id} className="border-b">
                  <td className="py-4">
                    {new Date(referral.created_at).toLocaleDateString()}
                  </td>
                  <td className="py-4">
                    {referral.profiles.full_name || referral.profiles.email || "Anonymous"}
                  </td>
                  <td className="py-4 capitalize">{referral.status}</td>
                  <td className="py-4">
                    ${referral.commission_amount || "0.00"}
                  </td>
                </tr>
              ))}
              {referrals.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-muted-foreground">
                    No referrals yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  ) : (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <Card className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Become an Affiliate Partner</h1>
        <p className="text-muted-foreground mb-8">
          Join our affiliate program and earn commissions by referring customers to our services.
        </p>
        <Button onClick={becomeAffiliate} size="lg" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            'Join Affiliate Program'
          )}
        </Button>
      </Card>
    </div>
  );
}