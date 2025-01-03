import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Insight {
  title: string;
  description: string;
  category: "audience" | "channel" | "budget";
}

interface MarketingInsightsProps {
  profile: {
    industry: string;
    targetAge: string;
    targetLocation: string;
    currentChannels: string;
    marketingBudget: string;
    marketingGoals: string;
  };
}

export function MarketingInsights({ profile }: MarketingInsightsProps) {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateInsights = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, this would call an AI service
      // Simulated insights based on profile data
      const mockInsights: Insight[] = [
        {
          title: "Target Audience Optimization",
          description: `Based on your ${profile.targetAge} age demographic and location in ${profile.targetLocation}, consider creating age-specific content that resonates with local interests and cultural preferences.`,
          category: "audience"
        },
        {
          title: "Channel Strategy",
          description: `Your current channels (${profile.currentChannels}) align well with ${profile.industry} industry standards. Consider expanding to emerging platforms for broader reach.`,
          category: "channel"
        },
        {
          title: "Budget Allocation",
          description: `With your ${profile.marketingBudget} budget range, focus on high-ROI channels first. Allocate 60% to your best-performing channel and experiment with the remaining 40%.`,
          category: "budget"
        }
      ];
      
      setInsights(mockInsights);
      toast({
        title: "Insights Generated",
        description: "New marketing insights are ready for review.",
      });
    } catch (error) {
      console.error("Error generating insights:", error);
      toast({
        title: "Error",
        description: "Failed to generate insights. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generateInsights();
  }, [profile]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">AI Marketing Insights</h2>
        <Button
          onClick={generateInsights}
          disabled={isLoading}
          variant="outline"
          size="sm"
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh Insights
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {insights.map((insight, index) => (
          <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <Lightbulb className="h-5 w-5 text-yellow-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}