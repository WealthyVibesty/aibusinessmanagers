import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { ForumCategory } from "@/types/forum";

export default function Forum() {
  const navigate = useNavigate();

  const { data: categories, isLoading } = useQuery({
    queryKey: ["forumCategories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("forum_categories")
        .select("*")
        .order("name");
      
      if (error) throw error;
      return data as ForumCategory[];
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Community Forum</h1>
        <Button onClick={() => navigate("/forum/new-topic")}>
          <Plus className="mr-2" />
          New Topic
        </Button>
      </div>

      <div className="grid gap-4">
        {categories?.map((category) => (
          <Card key={category.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">
                    <Button
                      variant="link"
                      className="p-0 h-auto font-semibold"
                      onClick={() => navigate(`/forum/category/${category.id}`)}
                    >
                      {category.name}
                    </Button>
                  </h2>
                </div>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}