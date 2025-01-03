import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import type { ForumTopic, ForumReply, Profile } from "@/types/forum";
import { useState } from "react";

interface TopicWithProfile extends ForumTopic {
  user: Pick<Profile, 'full_name' | 'avatar_url'> | null;
}

interface ReplyWithProfile extends ForumReply {
  user: Pick<Profile, 'full_name' | 'avatar_url'> | null;
}

export default function ForumTopic() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { session } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [replyContent, setReplyContent] = useState("");

  const { data: topic } = useQuery({
    queryKey: ["forumTopic", topicId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("forum_topics")
        .select(`
          *,
          user:profiles(
            full_name,
            avatar_url
          )
        `)
        .eq("id", topicId)
        .single();
      
      if (error) throw error;
      return data as TopicWithProfile;
    },
  });

  const { data: replies, isLoading } = useQuery({
    queryKey: ["forumReplies", topicId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("forum_replies")
        .select(`
          *,
          user:profiles(
            full_name,
            avatar_url
          )
        `)
        .eq("topic_id", topicId)
        .order("created_at");
      
      if (error) throw error;
      return data as ReplyWithProfile[];
    },
  });

  const addReplyMutation = useMutation({
    mutationFn: async (content: string) => {
      const { error } = await supabase
        .from("forum_replies")
        .insert({
          topic_id: topicId,
          user_id: session?.user.id,
          content,
        });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["forumReplies", topicId] });
      setReplyContent("");
      toast({
        title: "Reply posted",
        description: "Your reply has been posted successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was an error posting your reply. Please try again.",
        variant: "destructive",
      });
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
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => navigate(`/forum/category/${topic?.category_id}`)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Category
      </Button>

      <Card className="p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">{topic?.title}</h1>
        <p className="text-sm text-muted-foreground mb-4">
          Posted by {topic?.user?.full_name || "Anonymous"} on{" "}
          {topic?.created_at && new Date(topic.created_at).toLocaleDateString()}
        </p>
        <p className="whitespace-pre-wrap">{topic?.content}</p>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Replies</h2>
        
        {replies?.map((reply) => (
          <Card key={reply.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm text-muted-foreground">
                {reply.user?.full_name || "Anonymous"} replied on{" "}
                {new Date(reply.created_at).toLocaleDateString()}
              </p>
            </div>
            <p className="whitespace-pre-wrap">{reply.content}</p>
          </Card>
        ))}

        {session ? (
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Add Reply</h3>
            <Textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Write your reply..."
              className="mb-4"
              rows={4}
            />
            <Button
              onClick={() => addReplyMutation.mutate(replyContent)}
              disabled={!replyContent.trim() || addReplyMutation.isPending}
            >
              Post Reply
            </Button>
          </Card>
        ) : (
          <Card className="p-6 text-center">
            <p className="mb-4">Please log in to reply to this topic.</p>
            <Button onClick={() => navigate("/login")}>Log In</Button>
          </Card>
        )}
      </div>
    </div>
  );
}