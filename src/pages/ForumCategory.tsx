import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Plus, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { ForumCategory, ForumTopic, Profile } from "@/types/forum";

export default function ForumCategory() {
  const navigate = useNavigate();
  const { categoryId } = useParams<{ categoryId: string }>();

  // Validate UUID format using regex
  const isValidUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  // Redirect if no categoryId is provided or if it's not a valid UUID
  if (!categoryId || !isValidUUID.test(categoryId)) {
    console.error("Invalid or missing category ID:", categoryId);
    navigate("/forum");
    return null;
  }

  const { data: category, isError: isCategoryError } = useQuery({
    queryKey: ["forumCategory", categoryId],
    queryFn: async () => {
      console.log("Fetching category with ID:", categoryId);
      const { data, error } = await supabase
        .from("forum_categories")
        .select("*")
        .eq("id", categoryId)
        .single();
      
      if (error) {
        console.error("Error fetching category:", error);
        throw error;
      }
      
      return data as ForumCategory;
    },
    enabled: Boolean(categoryId),
  });

  const { data: topics, isLoading, isError: isTopicsError } = useQuery({
    queryKey: ["forumTopics", categoryId],
    queryFn: async () => {
      console.log("Fetching topics for category:", categoryId);
      const { data, error } = await supabase
        .from("forum_topics")
        .select(`
          *,
          profiles (
            full_name,
            avatar_url
          )
        `)
        .eq("category_id", categoryId)
        .order("created_at", { ascending: false });
      
      if (error) {
        console.error("Error fetching topics:", error);
        throw error;
      }
      return data as (ForumTopic & { profiles: Pick<Profile, 'full_name' | 'avatar_url'> | null })[];
    },
    enabled: Boolean(categoryId),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isCategoryError || isTopicsError) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center text-red-500">
          Error loading forum content. Please try again later.
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          Category not found.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => navigate("/forum")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Categories
      </Button>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">{category.name}</h1>
          <p className="text-muted-foreground mt-2">{category.description}</p>
        </div>
        <Button onClick={() => navigate(`/forum/new-topic?category=${categoryId}`)}>
          <Plus className="mr-2" />
          New Topic
        </Button>
      </div>

      <div className="grid gap-4">
        {topics?.map((topic) => (
          <Card key={topic.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">
                    <Button
                      variant="link"
                      className="p-0 h-auto font-semibold"
                      onClick={() => navigate(`/forum/topic/${topic.id}`)}
                    >
                      {topic.title}
                    </Button>
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Posted by {topic.profiles?.full_name || "Anonymous"} on{" "}
                  {new Date(topic.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}