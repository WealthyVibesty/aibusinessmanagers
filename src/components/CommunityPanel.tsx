import { Users, MessageSquare, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function CommunityPanel() {
  const { toast } = useToast();

  const handleConnect = () => {
    toast({
      title: "Coming Soon!",
      description: "This feature will be available in the next update.",
    });
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Community</h2>
        <Globe className="h-5 w-5 text-primary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
          <Users className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-medium">Marketing Professionals</h3>
            <p className="text-sm text-muted-foreground">Connect with experts</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
          <MessageSquare className="h-8 w-8 text-primary" />
          <div>
            <h3 className="font-medium">Discussion Forums</h3>
            <p className="text-sm text-muted-foreground">Share insights & tips</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Recent Activity</h3>
        <div className="space-y-2">
          {[
            "Sarah shared a new marketing strategy",
            "John commented on ROI optimization",
            "Marketing webinar starting in 1 hour",
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-background rounded-lg border"
            >
              <p className="text-sm">{activity}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleConnect}
              >
                View
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Button
        className="w-full"
        onClick={handleConnect}
      >
        Join Community
      </Button>
    </Card>
  );
}