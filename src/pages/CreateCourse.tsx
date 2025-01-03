import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";

interface CreateCourseForm {
  title: string;
  description: string;
  price: number;
}

export default function CreateCourse() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CreateCourseForm>({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
    },
  });

  const createCourseMutation = useMutation({
    mutationFn: async (data: CreateCourseForm) => {
      const { data: course, error } = await supabase
        .from("courses")
        .insert([
          {
            title: data.title,
            description: data.description,
            price: data.price,
            instructor_id: user?.id,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return course;
    },
    onSuccess: () => {
      toast({
        title: "Course created",
        description: "Your course has been created successfully.",
      });
      navigate("/courses");
    },
    onError: (error) => {
      console.error("Error creating course:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create course. Please try again.",
      });
    },
  });

  const onSubmit = async (data: CreateCourseForm) => {
    setIsSubmitting(true);
    try {
      await createCourseMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Course</h1>
        <Card className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter course title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter course description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Enter course price"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/courses")}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  Create Course
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}