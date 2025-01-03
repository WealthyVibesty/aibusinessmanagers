import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";
import { Course } from "@/types/course";

interface EnrolledCourse extends Course {
  purchased_at: string;
  amount_paid: number;
}

export default function Enrollments() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const { data: enrolledCourses, isLoading } = useQuery({
    queryKey: ["enrollments"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("enrollments")
        .select(
          `
          amount_paid,
          purchased_at,
          courses (
            id,
            title,
            description,
            price,
            instructor_id,
            created_at,
            updated_at
          )
        `
        )
        .eq("user_id", user?.id)
        .order("purchased_at", { ascending: false });

      if (error) throw error;

      return data.map((enrollment) => ({
        ...enrollment.courses,
        purchased_at: enrollment.purchased_at,
        amount_paid: enrollment.amount_paid,
      })) as EnrolledCourse[];
    },
  });

  if (isLoading) {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">My Enrollments</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="p-6">
              <Skeleton className="h-6 w-2/3 mb-4" />
              <Skeleton className="h-20 mb-4" />
              <Skeleton className="h-10" />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Enrollments</h1>
        <Button onClick={() => navigate("/courses")}>Browse Courses</Button>
      </div>

      {enrolledCourses?.length === 0 ? (
        <Card className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">No enrollments yet</h2>
          <p className="text-muted-foreground mb-4">
            Start learning by enrolling in a course
          </p>
          <Button onClick={() => navigate("/courses")}>Browse Courses</Button>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses?.map((course) => (
            <Card
              key={course.id}
              className="p-6 flex flex-col cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              <div className="flex-grow">
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {course.description}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>
                  Enrolled on{" "}
                  {new Date(course.purchased_at).toLocaleDateString()}
                </p>
                <p>Paid ${course.amount_paid.toFixed(2)} USD</p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}