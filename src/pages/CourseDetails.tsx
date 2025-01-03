import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";
import { Course } from "@/types/course";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  const { data: course, isLoading } = useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data as Course;
    },
  });

  const { data: isEnrolled, isLoading: isLoadingEnrollment } = useQuery({
    queryKey: ["enrollment", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("enrollments")
        .select("*")
        .eq("course_id", id)
        .eq("user_id", user?.id)
        .single();

      if (error && error.code !== "PGRST116") throw error;
      return !!data;
    },
  });

  const enrollMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase
        .from("enrollments")
        .insert([
          {
            course_id: id,
            user_id: user?.id,
            amount_paid: course?.price || 0,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      toast({
        title: "Enrolled successfully",
        description: "You have been enrolled in this course.",
      });
    },
    onError: (error) => {
      console.error("Error enrolling:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to enroll in the course. Please try again.",
      });
    },
  });

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-40" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Course not found</h1>
        <Button onClick={() => navigate("/courses")}>Back to Courses</Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/courses")}
          className="mb-6"
        >
          ← Back to Courses
        </Button>

        <Card className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-muted-foreground">{course.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">
                ${course.price.toFixed(2)} USD
              </p>
            </div>
            {course.instructor_id === user?.id ? (
              <Button variant="outline" disabled>
                You are the instructor
              </Button>
            ) : isEnrolled ? (
              <Button variant="outline" disabled>
                Already enrolled
              </Button>
            ) : (
              <Button
                onClick={() => enrollMutation.mutate()}
                disabled={enrollMutation.isPending}
              >
                Enroll Now
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}