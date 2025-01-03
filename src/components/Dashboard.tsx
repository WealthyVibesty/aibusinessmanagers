import { useState } from "react";
import { Settings, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import CreateProfileDialog from "./CreateProfileDialog";

interface Profile {
  id: string;
  name: string;
  industry: string;
  createdAt: string;
}

export default function Dashboard() {
  const { toast } = useToast();
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const handleDeleteProfile = (id: string) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
    toast({
      title: "Profile deleted",
      description: "The profile has been successfully deleted.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Marketing Dashboard</h1>
            <p className="text-secondary">Create and manage your AI marketing profiles</p>
          </div>
          <CreateProfileDialog />
        </div>

        {profiles.length === 0 ? (
          <Card className="p-12 text-center bg-background border-2 border-dashed animate-slideUp">
            <h3 className="text-xl font-semibold mb-2">No profiles yet</h3>
            <p className="text-secondary mb-4">Create your first AI marketing profile to get started</p>
            <CreateProfileDialog />
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <Card key={profile.id} className="p-6 animate-slideUp">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{profile.name}</h3>
                    <p className="text-secondary text-sm">{profile.industry}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
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
                      onClick={() => handleDeleteProfile(profile.id)}
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