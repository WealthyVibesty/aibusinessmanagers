import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Copy, TrendingUp, Users, DollarSign } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
        return;
      }

      const { data: affiliateData, error } = await supabase
        .from("affiliates")
        .select("*")
        .eq("user_id", session.user.id)
        .single();

      if (error) throw error;
      setAffiliate(affiliateData);
    } catch (error) {
      console.error("Error checking affiliate status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchReferrals = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data: affiliateData } = await supabase
        .from("affiliates")
        .select("id")
        .eq("user_id", session.user.id)
        .single();

      if (affiliateData) {
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
        setReferrals(referralsData);
      }
    } catch (error) {
      console.error("Error fetching referrals:", error);
    }
  };

  const becomeAffiliate = async () => {
    try {
      setIsLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
        return;
      }

      const { data, error } = await supabase
        .from("affiliates")
        .insert([
          { user_id: session.user.id }
        ])
        .select()
        .single();

      if (error) throw error;

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

  if (!affiliate) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Card className="p-8 text-center">
          <h1 className="text-3xl font-bold mb-6">Become an Affiliate Partner</h1>
          <p className="text-muted-foreground mb-8">
            Join our affiliate program and earn commissions by referring customers to our services.
          </p>
          <Button onClick={becomeAffiliate} size="lg">
            Join Affiliate Program
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Commission</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {referrals.map((referral) => (
                <TableRow key={referral.id}>
                  <TableCell>
                    {new Date(referral.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {referral.profiles.full_name || referral.profiles.email || "Anonymous"}
                  </TableCell>
                  <TableCell className="capitalize">{referral.status}</TableCell>
                  <TableCell>
                    ${referral.commission_amount || "0.00"}
                  </TableCell>
                </TableRow>
              ))}
              {referrals.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground">
                    No referrals yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}