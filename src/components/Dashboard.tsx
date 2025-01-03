import { useState } from "react";
import { Settings, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import CreateProfileDialog from "./CreateProfileDialog";
import { MarketingInsights } from "./MarketingInsights";
import { AnalyticsDashboard } from "./analytics/AnalyticsDashboard";
import { CommunityPanel } from "./CommunityPanel";

interface Profile {
  id: string;
  name: string;
  industry: string;
  createdAt: string;
  targetAge: string;
  targetLocation: string;
  currentChannels: string;
  marketingBudget: string;
  marketingGoals: string;
}

export default function Dashboard() {
  const { toast } = useToast();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const handleDeleteProfile = (id: string) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
    if (selectedProfile?.id === id) {
      setSelectedProfile(null);
    }
    toast({
      title: "Profile deleted",
      description: "The profile has been successfully deleted.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Marketing Dashboard</h1>
            <p className="text-secondary">Create and manage your AI marketing profiles</p>
          </div>
          <CreateProfileDialog />
        </div>

        {selectedProfile ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <AnalyticsDashboard />
              <MarketingInsights profile={selectedProfile} />
            </div>
            <div className="lg:col-span-1">
              <CommunityPanel />
            </div>
          </div>
        ) : (
          <Card className="p-8 sm:p-12 text-center bg-background border-2 border-dashed animate-slideUp">
            <h3 className="text-xl font-semibold mb-2">No profiles yet</h3>
            <p className="text-secondary mb-4">Create your first AI marketing profile to get started</p>
            <CreateProfileDialog />
          </Card>
        )}

        {profiles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {profiles.map((profile) => (
              <Card 
                key={profile.id} 
                className={`p-4 sm:p-6 animate-slideUp cursor-pointer transition-all ${
                  selectedProfile?.id === profile.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedProfile(profile)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{profile.name}</h3>
                    <p className="text-secondary text-sm">{profile.industry}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        toast({
                          title: "Coming soon!",
                          description: "Profile editing will be available in the next update.",
                        });
                      }}
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteProfile(profile.id);
                      }}
                      className="text-destructive hover:text-destructive/90"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Created on {new Date(profile.createdAt).toLocaleDateString()}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}