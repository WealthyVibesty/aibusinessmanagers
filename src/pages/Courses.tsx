import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Course } from "@/types/course";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast({
          variant: "destructive",
          title: "Error loading courses",
          description: error.message,
        });
        throw error;
      }

      return data as Course[];
    },
  });

  if (isLoading) {
    return (
      <div className="container py-8 space-y-4">
        <h1 className="text-3xl font-bold">Available Courses</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <Skeleton className="h-6 w-2/3" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-24" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Available Courses</h1>
        <Button onClick={() => navigate("/courses/new")}>Create Course</Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses?.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">{course.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-lg font-semibold">
                ${course.price.toFixed(2)}
              </span>
              <Button onClick={() => navigate(`/courses/${course.id}`)}>
                View Course
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {courses?.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold">No courses available yet</h2>
          <p className="text-muted-foreground">Check back later for new courses</p>
        </div>
      )}
    </div>
  );
}